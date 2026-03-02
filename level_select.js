// level_select.js
// Rendert die Jahr- und Level-Auswahl (zwischen Intro und Lernpfad)

import { getLessonCompletionPercent } from "./core/progress_store.js";

const TEST_UNLOCK_ALL_KEY = "azubi_test_unlock_all";

function isTestUnlockAllEnabled() {
  try {
    const search = new URLSearchParams(window.location.search);
    if (search.get("testUnlockAll") === "1") {
      localStorage.setItem(TEST_UNLOCK_ALL_KEY, "1");
      return true;
    }
    if (search.get("testUnlockAll") === "0") {
      localStorage.removeItem(TEST_UNLOCK_ALL_KEY);
      return false;
    }
    return localStorage.getItem(TEST_UNLOCK_ALL_KEY) === "1";
  } catch (error) {
    console.warn("Test-Freischaltmodus konnte nicht gelesen werden:", error);
    return false;
  }
}

// -----------------------------------------------
// Fortschritt & Unlock-Logik
// -----------------------------------------------

/**
 * Berechnet Fortschritt und Abschluss-Status für ein Level.
 *
 * Gibt zurück:
 * {
 *   maxUnlocked:     number  – höchster freigeschalteter Lektion-Index
 *   totalLessons:    number  – Gesamtanzahl Lektionen im Level
 *   isCompleted:     boolean – true wenn letzte Lektion freigeschaltet wurde
 *   progressPercent: number  – 0-100, wie viele Lektionen gespielt wurden
 * }
 */
function getLevelProgress(level) {
  // Alle Lektionen des Levels flach ziehen
  const lessons = [];
  (level.sections || []).forEach(section => {
    (section.lessons || []).forEach(lesson => lessons.push(lesson));
  });

  const totalLessons = lessons.length;
  if (totalLessons === 0) {
    return { maxUnlocked: 0, totalLessons: 0, isCompleted: false, progressPercent: 0 };
  }

  let maxUnlocked = totalLessons > 0 ? 0 : 0;
  if (isTestUnlockAllEnabled()) {
    maxUnlocked = totalLessons - 1;
  } else {
    const key = `friseurTrainerMaxLesson_${level.id}`;
    const stored = localStorage.getItem(key);
    maxUnlocked = stored ? parseInt(stored, 10) || 0 : 0;
  }

  // Level gilt als abgeschlossen, wenn die letzte Lektion freigeschaltet wurde
  const isCompleted = maxUnlocked >= totalLessons - 1;

  // Fortschritt: wie viele Lektionen haben einen Abschluss-Eintrag in progress_store
  let playedCount = 0;
  lessons.forEach(lesson => {
    if (lesson.id && getLessonCompletionPercent(lesson.id) !== null) {
      playedCount++;
    }
  });

  const progressPercent = Math.round((playedCount / totalLessons) * 100);
  return { maxUnlocked, totalLessons, isCompleted, progressPercent };
}

/**
 * Prüft ob ein Level freigeschaltet ist.
 * Das erste Level eines Jahres ist immer freigeschaltet (wenn das Jahr freigeschaltet ist).
 * Jedes weitere Level wird freigeschaltet, wenn das vorherige abgeschlossen ist.
 */
function isLevelUnlocked(jahrEntry, levelIndex) {
  if (isTestUnlockAllEnabled()) return true;
  if (levelIndex === 0) return true;
  const prevLevel = jahrEntry.levels[levelIndex - 1];
  if (!prevLevel) return false;
  return getLevelProgress(prevLevel).isCompleted;
}

/**
 * Prüft ob ein Lehrjahr freigeschaltet ist.
 * Das erste Jahr ist immer freigeschaltet.
 * Jedes weitere Jahr wird freigeschaltet, wenn das letzte Level des vorherigen Jahres abgeschlossen ist.
 */
function isJahrUnlocked(content, jahrIndex) {
  if (isTestUnlockAllEnabled()) return true;
  if (jahrIndex === 0) return true;
  const prevJahr = content.jahre[jahrIndex - 1];
  if (!prevJahr || !prevJahr.levels || prevJahr.levels.length === 0) return false;
  const lastLevel = prevJahr.levels[prevJahr.levels.length - 1];
  return getLevelProgress(lastLevel).isCompleted;
}

/**
 * Berechnet Fortschritt und Abschluss-Status für ein Lehrjahr.
 */
function getJahrProgress(jahrEntry) {
  const levels = jahrEntry.levels || [];
  const lessons = [];

  levels.forEach(level => {
    (level.sections || []).forEach(section => {
      (section.lessons || []).forEach(lesson => lessons.push(lesson));
    });
  });

  const totalLessons = lessons.length;
  if (totalLessons === 0) {
    return { totalLessons: 0, isCompleted: false, progressPercent: 0 };
  }

  let playedCount = 0;
  lessons.forEach(lesson => {
    if (lesson.id && getLessonCompletionPercent(lesson.id) !== null) {
      playedCount++;
    }
  });

  const progressPercent = Math.round((playedCount / totalLessons) * 100);
  const lastLevel = levels[levels.length - 1];
  const isCompleted = lastLevel ? getLevelProgress(lastLevel).isCompleted : false;

  return { totalLessons, isCompleted, progressPercent };
}

// -----------------------------------------------
// Render
// -----------------------------------------------

/**
 * Rendert den Level-Select-Screen in rootEl.
 *
 * rootEl:        DOM-Element als Container
 * content:       { jahre: [ { id, title, levels: [ LEVEL ] } ] }
 * onSelectLevel: Callback(level) – wird aufgerufen wenn ein Level geklickt wird
 */
export function renderLevelSelect(rootEl, content, onSelectLevel) {
  if (!rootEl || !content || !Array.isArray(content.jahre)) return;

  let selectedJahrIndex = null;

  const renderHeader = (title, subtitle, showBack) => {
    const header = document.createElement("div");
    header.className = "ls-header";
    header.innerHTML = `
      ${showBack ? `<button class="ls-back-to-years">← Lehrjahre</button>` : ""}
      <h2 class="ls-header-title">${title}</h2>
      <p class="ls-header-subtitle">${subtitle}</p>
    `;
    return header;
  };

  const renderJahrOverview = () => {
    rootEl.innerHTML = "";

    const header = renderHeader(
      "Dein Lernpfad ✂️",
      "Wähle ein Lehrjahr, um die Level zu sehen",
      false
    );
    rootEl.appendChild(header);

    const wrapper = document.createElement("div");
    wrapper.className = "ls-screen-wrapper";

    content.jahre.forEach((jahrEntry, jahrIndex) => {
      const jahrUnlocked = isJahrUnlocked(content, jahrIndex);
      const { progressPercent, totalLessons, isCompleted } = getJahrProgress(jahrEntry);
      const levelCount = (jahrEntry.levels || []).length;

      const card = document.createElement("div");
      card.className = [
        "ls-year-card",
        jahrUnlocked ? "ls-year-unlocked" : "ls-year-locked",
        isCompleted ? "ls-year-completed" : ""
      ].filter(Boolean).join(" ");

      card.innerHTML = `
        <div class="ls-year-card-top">
          <span class="ls-year-number">${jahrEntry.title || `Lehrjahr ${jahrIndex + 1}`}</span>
          ${isCompleted ? `<span class="ls-year-check">✓</span>` : ""}
          ${!jahrUnlocked ? `<span class="ls-year-lock">🔒</span>` : ""}
        </div>
        <div class="ls-year-name">${jahrEntry.title || `Lehrjahr ${jahrIndex + 1}`}</div>
        <div class="ls-year-meta">${levelCount} Level · ${totalLessons} Lektion${totalLessons !== 1 ? "en" : ""}</div>
        ${jahrUnlocked ? `
          <div class="ls-year-progress-bar">
            <div class="ls-year-progress-inner" style="width: ${progressPercent}%"></div>
          </div>
          <div class="ls-year-progress-label">${progressPercent}% abgeschlossen</div>
        ` : `
          <div class="ls-year-locked-hint">Schließe das vorherige Lehrjahr ab, um fortzufahren.</div>
        `}
      `;

      if (jahrUnlocked) {
        card.addEventListener("click", () => {
          selectedJahrIndex = jahrIndex;
          renderLevelList(jahrIndex);
        });
      }

      wrapper.appendChild(card);
    });

    rootEl.appendChild(wrapper);
  };

  const renderLevelList = (jahrIndex) => {
    rootEl.innerHTML = "";
    const jahrEntry = content.jahre[jahrIndex];
    if (!jahrEntry) return;

    const header = renderHeader(
      jahrEntry.title || "Lehrjahr",
      "Wähle ein Level, um weiterzumachen",
      true
    );
    rootEl.appendChild(header);

    const backBtn = header.querySelector(".ls-back-to-years");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        selectedJahrIndex = null;
        renderJahrOverview();
      });
    }

    const wrapper = document.createElement("div");
    wrapper.className = "ls-screen-wrapper";

    const jahrUnlocked = isJahrUnlocked(content, jahrIndex);

    const jahrSection = document.createElement("div");
    jahrSection.className = "ls-jahr-section" + (jahrUnlocked ? "" : " ls-jahr-locked");

    const jahrHeader = document.createElement("div");
    jahrHeader.className = "ls-jahr-header";
    jahrHeader.innerHTML = `
      <span class="ls-jahr-title">${jahrEntry.title}</span>
      ${!jahrUnlocked ? `<span class="ls-lock-icon">🔒</span>` : ""}
    `;
    jahrSection.appendChild(jahrHeader);

    const levelsRow = document.createElement("div");
    levelsRow.className = "ls-levels-row";

    (jahrEntry.levels || []).forEach((level, levelIndex) => {
      const unlocked = jahrUnlocked && isLevelUnlocked(jahrEntry, levelIndex);
      const { progressPercent, totalLessons, isCompleted } = getLevelProgress(level);

      const card = document.createElement("div");
      card.className = [
        "ls-level-card",
        unlocked ? "ls-level-unlocked" : "ls-level-locked",
        isCompleted ? "ls-level-completed" : ""
      ].filter(Boolean).join(" ");

      card.innerHTML = `
        <div class="ls-level-card-top">
          <span class="ls-level-number">Level ${level.levelNumber || levelIndex + 1}</span>
          ${isCompleted ? `<span class="ls-level-check">✓</span>` : ""}
          ${!unlocked ? `<span class="ls-level-lock">🔒</span>` : ""}
        </div>
        <div class="ls-level-name">${level.levelName || "Level"}</div>
        <div class="ls-level-desc">${level.title || ""}</div>
        <div class="ls-level-meta">${totalLessons} Lektion${totalLessons !== 1 ? "en" : ""}</div>
        ${unlocked ? `
          <div class="ls-level-progress-bar">
            <div class="ls-level-progress-inner" style="width: ${progressPercent}%"></div>
          </div>
          <div class="ls-level-progress-label">${progressPercent}% abgeschlossen</div>
        ` : `
          <div class="ls-level-locked-hint">Schließe das vorherige Level ab, um fortzufahren.</div>
        `}
      `;

      if (unlocked) {
        card.addEventListener("click", () => {
          if (typeof onSelectLevel === "function") {
            onSelectLevel(level);
          }
        });
      }

      levelsRow.appendChild(card);
    });

    jahrSection.appendChild(levelsRow);
    wrapper.appendChild(jahrSection);
    rootEl.appendChild(wrapper);
  };

  renderJahrOverview();
}
