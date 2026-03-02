// app.js

import CONTENT from "./content/content_index.js";
import { renderLevelSelect } from "./level_select.js";
import { startLessonGame } from "./games/game_main.js";
import { showEnergyBonusPopup } from "./games/game_bonus_popup.js";
import { initLessonMap, renderLessonMap } from "./lesson_map.js";
import {
  initEnergySystem,
  onEnergyChange,
  getEnergy,
  MAX_ENERGY,
  grantEnergyBonus
} from "./core/energy_system.js";
import { LessonSession, showLessonSummary } from "./core/lesson_summary.js";

import {
  hasDailyMission,
  openDailyMission
} from "./core/daily_missions.js";

import { getAllHistoryEntries } from "./core/question_history.js";
import {
  resetLessonProgress,
  hasConsumedLessonStreakBonus,
  consumeLessonStreakBonus
} from "./core/progress_store.js";
import { laden as ladeLernstatus, speichern as speichereLernstatus } from "./lernlogik/speicher.js";
import { heutigesDatumKey } from "./lernlogik/zeit.js";
import {
  baueInhaltsIndexAusContent,
  findeFaelligeWiederholungen
} from "./lernlogik/session_planer.js";
import { protokolliereStepAbschluss } from "./lernlogik/fortschritt.js";

let currentLessonSession = null;
const TEST_UNLOCK_ALL_KEY = "azubi_test_unlock_all";
const LIVE_ACCESS_SESSION_KEY = "azubi_live_access_granted";
const LIVE_ACCESS_PASSWORD = "FrieseurAzubi2026!";

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

function requiresLivePasswordPrompt() {
  try {
    const host = (window.location.hostname || "").toLowerCase();
    return host.endsWith("github.io");
  } catch (error) {
    console.warn("Host konnte nicht geprueft werden:", error);
    return false;
  }
}

function hasLiveAccessAlreadyGranted() {
  try {
    return sessionStorage.getItem(LIVE_ACCESS_SESSION_KEY) === "1";
  } catch (error) {
    console.warn("Live-Zugriff konnte nicht gelesen werden:", error);
    return false;
  }
}

function setLiveAccessGranted() {
  try {
    sessionStorage.setItem(LIVE_ACCESS_SESSION_KEY, "1");
  } catch (error) {
    console.warn("Live-Zugriff konnte nicht gespeichert werden:", error);
  }
}

function renderLiveAccessDenied() {
  document.body.innerHTML = `
    <div class="live-access-gate">
      <div class="live-access-card">
        <div class="live-access-kicker">Geschützter Testzugang</div>
        <h1 class="live-access-title">Passwort erforderlich</h1>
        <p class="live-access-text">
          Diese GitHub-Version ist nur für interne Tests freigeschaltet.
        </p>
        <button class="live-access-retry-btn" type="button">Erneut versuchen</button>
      </div>
    </div>
  `;

  const retryBtn = document.querySelector(".live-access-retry-btn");
  retryBtn?.addEventListener("click", () => {
    if (ensureLiveAccess()) {
      window.location.reload();
    }
  });
}

function ensureLiveAccess() {
  if (!requiresLivePasswordPrompt()) {
    return true;
  }

  if (hasLiveAccessAlreadyGranted()) {
    return true;
  }

  const entered = window.prompt("Passwort für die GitHub-Testversion eingeben:");
  if (entered === LIVE_ACCESS_PASSWORD) {
    setLiveAccessGranted();
    return true;
  }

  renderLiveAccessDenied();
  return false;
}

function setTestUnlockAllEnabled(enabled) {
  try {
    if (enabled) {
      localStorage.setItem(TEST_UNLOCK_ALL_KEY, "1");
    } else {
      localStorage.removeItem(TEST_UNLOCK_ALL_KEY);
    }
  } catch (error) {
    console.warn("Test-Freischaltmodus konnte nicht gespeichert werden:", error);
  }
}

function refreshCurrentScreenAfterTestToggle() {
  if (CURRENT_LEVEL) {
    loadLessonProgress();
  }

  if (mode === "today") {
    showToday({ forceVisible: true });
    return;
  }

  if (mode === "level-select") {
    showLevelSelect();
    return;
  }

  if (mode === "map") {
    showMap();
    return;
  }

  if (mode === "intro") {
    showIntro();
    return;
  }

  showMap();
}

// =======================================
// LEVEL / LEKTIONEN â€“ DATENMODELL (dynamisch)
// =======================================

// Wird gesetzt, wenn der Nutzer ein Level in der Level-Auswahl wÃ¤hlt
let CURRENT_LEVEL  = null;
let currentLessons = [];
let CURRENT_MODULE = null;
let currentModuleId = null;
let pendingUnlockReveal = null;
const CURRENT_GAME_PREVIEW_TYPE = "match_pairs";

function clonePreviewData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalisierePreviewFrage(frage) {
  if (!frage || typeof frage !== "object") return frage;
  const gameData = frage.gameData && typeof frage.gameData === "object"
    ? clonePreviewData(frage.gameData)
    : {};

  const audioFallback =
    gameData.answerAudioUrl === "media/lektionen/Platzhalter_datei" ||
    gameData.answerAudio === "media/lektionen/Platzhalter_datei";
  if (audioFallback) {
    gameData.answerAudioUrl = "media/lektionen/lv1_A1_l4_f9.wav";
  }

  return {
    ...gameData,
    ...clonePreviewData(frage),
    gameData: undefined,
    id: frage.id || gameData.id,
    topic: frage.topic || gameData.topic,
    gameType: frage.gameType || gameData.gameType || gameData.type
  };
}

function holeEchtePreviewLektionAusContent(gameType) {
  if (gameType === "flashcards") {
    const abschnitt1 = CONTENT?.jahre?.[0]?.levels?.[0]?.sections?.[0];
    const lektion1 = abschnitt1?.lessons?.[0];
    const fragen = Array.isArray(lektion1?.questions) ? lektion1.questions : [];
    const frage = fragen.find((item) => item?.gameType === "flashcards");
    if (!lektion1 || !frage) return null;

    const previewLektion = clonePreviewData(lektion1);
    previewLektion.id = "preview_flashcards";
    previewLektion.title = `Preview: ${lektion1.title}`;
    previewLektion.allowEnergyStreakBonus = false;
    previewLektion.questions = [normalisierePreviewFrage(frage)];
    return previewLektion;
  }

  const abschnitt4 = CONTENT?.jahre?.[0]?.levels?.[0]?.sections?.[3];
  const lektion1 = abschnitt4?.lessons?.[0];
  const fragen = Array.isArray(lektion1?.questions) ? lektion1.questions : [];

  const frage = fragen.find((item) => item?.gameType === gameType);
  if (!lektion1 || !frage) return null;

  const previewLektion = clonePreviewData(lektion1);
  previewLektion.id = `preview_${gameType}`;
  previewLektion.title = `Preview: ${lektion1.title}`;
  previewLektion.allowEnergyStreakBonus = false;
  previewLektion.questions = [normalisierePreviewFrage(frage)];
  return previewLektion;
}

function formatEnergyValue(energy, maxEnergy) {
  if (Number(energy) > Number(maxEnergy)) {
    return String(energy);
  }
  return `${energy}/${maxEnergy}`;
}

function showStreakBonusPreview() {
  const previewOverlay = document.createElement("div");
  previewOverlay.className = "gm-overlay";
  previewOverlay.style.background = "rgba(0, 0, 0, 0.45)";
  const previewEnergyBefore = getEnergy();
  const previewBonus = 6;
  previewOverlay.innerHTML = `
    <div class="gm-header" style="justify-content:flex-end; background:transparent; box-shadow:none;">
      <div class="gm-energy">
        <img class="gm-energy-icon" src="./media/Bilder/Icons/Farbtupe-Energie.png" alt="Energie">
        <span class="gm-energy-value">${previewEnergyBefore}</span>
      </div>
    </div>
  `;
  document.body.appendChild(previewOverlay);

  showEnergyBonusPopup(previewOverlay, {
    streak: 7,
    bonus: previewBonus,
    symbols: ["tube", "tube", "tube", "tube", "tube", "tube"],
    reelCount: 6,
    energy: previewEnergyBefore + previewBonus,
    maxEnergy: MAX_ENERGY
  }).finally(() => {
    previewOverlay.remove();
  });
}

function showLockPreview() {
  const preview = document.createElement("div");
  preview.className = "map-lock-preview";
  preview.innerHTML = `
    <div class="map-lock-preview-card">
      <div class="map-lock-preview-kicker">Schloss-Test</div>
      <h3 class="map-lock-preview-title">Node öffnet sich um die Zahl</h3>
      <div class="map-lock-preview-stage">
        <div class="map-node map-node-locked map-lock-preview-node">
          <div class="map-node-circle">
            <span class="map-node-circle-number">8</span>
            <span class="map-lock-shell" aria-hidden="true">
              <span class="map-lock-shackle"></span>
              <span class="map-lock-body"></span>
            </span>
          </div>
        </div>
      </div>
      <div class="map-lock-preview-actions">
        <button class="map-lock-preview-secondary" type="button">Schließen</button>
        <button class="map-lock-preview-primary" type="button">Nochmal</button>
      </div>
    </div>
  `;

  const rerun = () => {
    const node = preview.querySelector(".map-lock-preview-node");
    if (!node) return;
    node.classList.remove("map-lock-preview--unlocking", "map-lock-preview--opened");
    void node.offsetWidth;
    setTimeout(() => {
      node.classList.add("map-lock-preview--unlocking");
      setTimeout(() => {
        node.classList.add("map-lock-preview--opened");
      }, 760);
    }, 220);
  };

  preview.querySelector(".map-lock-preview-secondary")?.addEventListener("click", () => {
    preview.remove();
  });
  preview.querySelector(".map-lock-preview-primary")?.addEventListener("click", rerun);
  preview.addEventListener("click", (event) => {
    if (event.target === preview) {
      preview.remove();
    }
  });

  document.body.appendChild(preview);
  rerun();
}

function baueSpielPreviewLektion() {
  if (CURRENT_GAME_PREVIEW_TYPE === "single_choice_quiz") {
    return holeEchtePreviewLektionAusContent("single_choice_quiz");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "multiple_choice_quiz") {
    return holeEchtePreviewLektionAusContent("multiple_choice_quiz");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "scenario_choice") {
    return holeEchtePreviewLektionAusContent("scenario_choice");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "gap_fill") {
    return holeEchtePreviewLektionAusContent("gap_fill");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "true_false_swipe") {
    return holeEchtePreviewLektionAusContent("true_false_swipe");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "match_pairs") {
    return holeEchtePreviewLektionAusContent("match_pairs");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "order_steps") {
    return holeEchtePreviewLektionAusContent("order_steps");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "category_sort") {
    return holeEchtePreviewLektionAusContent("category_sort");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "timeline_order") {
    return holeEchtePreviewLektionAusContent("timeline_order");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "sentence_builder") {
    return holeEchtePreviewLektionAusContent("sentence_builder");
  }

  if (CURRENT_GAME_PREVIEW_TYPE === "flashcards") {
    return holeEchtePreviewLektionAusContent("flashcards");
  }

  return null;
}

function showGameTypePreview() {
  const lessonConfig = baueSpielPreviewLektion();
  if (!lessonConfig) return;

  let energyRestorePending = true;
  const restoreConsumedPreviewEnergy = () => {
    if (!energyRestorePending) return;
    energyRestorePending = false;
    grantEnergyBonus(1, null);
  };

  startLessonGame(document.body, {
    ...lessonConfig,
    onCompleted: () => {
      restoreConsumedPreviewEnergy();
    },
    onExit: () => {
      energyRestorePending = false;
    }
  });
}

/**
 * Baut aus einem Level-Objekt die flache Lektionsliste
 * und ein Modul-Objekt fÃ¼r lesson_map.js.
 */
function buildModuleFromLevel(level) {
  const lessons = [];
  (level.sections || []).forEach((section, sectionIndex) => {
    if (!Array.isArray(section.lessons)) return;
    section.lessons.forEach((lesson, lessonIndex) => {
      lessons.push({
        ...lesson,
        _sectionId: section.id,
        _sectionIndex: sectionIndex,
        _lessonIndexInSection: lessonIndex
      });
    });
  });

  return {
    id:          level.id,
    jahr:        level.jahr,
    levelNumber: level.levelNumber,
    levelName:   level.levelName,
    title:       level.title,
    description: level.description || "",
    sections:    level.sections,
    lessons
  };
}

/**
 * Wird aufgerufen, wenn der Nutzer ein Level in der Auswahl anklickt.
 * Setzt alle Level-abhÃ¤ngigen Variablen und zeigt den Lernpfad.
 */
function selectLevel(level, optionen = {}) {
  CURRENT_LEVEL  = level;
  CURRENT_MODULE = buildModuleFromLevel(level);
  currentModuleId = CURRENT_MODULE.id;
  currentLessons  = CURRENT_MODULE.lessons;
  currentLessonIndex = 0;
  loadLessonProgress();
  if (optionen.ziel === "today") {
    showToday();
    return;
  }
  showMap();
}
function getDefaultLevel(content) {
  const jahr = content?.jahre?.[0];
  const level = jahr?.levels?.[0];
  return level || null;
}

function buildGlobalMapData(content) {
  const items = [];
  const jahre = content?.jahre || [];
  const defaultLevel = getDefaultLevel(content);
  const headerModule = defaultLevel ? buildModuleFromLevel(defaultLevel) : null;
  const headerMaxUnlocked = defaultLevel ? getMaxUnlockedForLevel(defaultLevel) : 0;

  jahre.forEach((jahr, jahrIndex) => {
    items.push({
      type: "separator",
      kind: "jahr",
      title: jahr.title || `Lehrjahr ${jahrIndex + 1}`
    });

    (jahr.levels || []).forEach((level, levelIndex) => {
      const levelTitle = level.levelName || `Level ${level.levelNumber || levelIndex + 1}`;
      items.push({
        type: "separator",
        kind: "level",
        title: levelTitle
      });

      let levelLessonIndex = 0;
      const maxUnlocked = getMaxUnlockedForLevel(level);

      (level.sections || []).forEach((section) => {
        const sectionTitle = section.title || section.id || "Abschnitt";
        const videoUrl = section.videoUrl || section.video?.url || "";
        const videoRequired = Boolean(section.videoRequired || section.video?.required);
        items.push({
          type: "separator",
          kind: "section",
          title: sectionTitle,
          videoUrl,
          videoRequired
        });

        (section.lessons || []).forEach((lesson) => {
          const isUnlocked = levelLessonIndex <= maxUnlocked;
          const isCompleted = levelLessonIndex < maxUnlocked;
          const isCurrent = levelLessonIndex === maxUnlocked;

          items.push({
            type: "lesson",
            lesson,
            levelId: level.id,
            lessonIndexInLevel: levelLessonIndex,
            isUnlocked,
            isCompleted,
            isCurrent
          });

          levelLessonIndex += 1;
        });
      });
    });
  });

  return { items, mode: "global", headerModule, headerMaxUnlocked };
}

function getMaxUnlockedForLevel(level) {
  const lessons = [];
  (level.sections || []).forEach((section) => {
    (section.lessons || []).forEach((lesson) => lessons.push(lesson));
  });
  const totalLessons = lessons.length;
  if (totalLessons === 0) return 0;

  const lastIndex = totalLessons - 1;
  if (isTestUnlockAllEnabled()) {
    return lastIndex;
  }

  const key = `friseurTrainerMaxLesson_${level.id}`;
  const stored = localStorage.getItem(key);
  let maxUnlocked = stored ? parseInt(stored, 10) || 0 : 0;

  if (maxUnlocked > lastIndex) maxUnlocked = lastIndex;
  return maxUnlocked;
}

// App-Modi: "intro" â†’ "map" â†’ "learn"
let mode = "intro";

// Lernzustand
let currentLessonIndex = 0;

// Fortschritt: maximal freigeschaltete Lesson im aktuellen Level
let maxUnlockedLessonIndex = 0;

// XP & Streak
let xp = 0;
let streak = 0;
let lastStudyDate = null;

// Intro-Text-Animation
let introTextTimeouts = [];
let introTextAnimatedOnce = false;

// Bereichs-Klassen am Body (nur eine aktiv)
const BEREICH_KLASSEN = [
  "bereich-carmen-intro",
  "bereich-heute",
  "bereich-level-uebersicht",
  "bereich-lernpfad",
  "bereich-lernpfad-header",
  "bereich-spiele-und-fragenkarten",
  "bereich-anmeldung-und-account",
  "bereich-auswahl-azubi-oder-stylist",
  "bereich-rollen-und-rechte",
  "bereich-magic-link",
  "bereich-rechnungen",
  "bereich-werbebildschirme",
  "bereich-intros-und-abschnitte"
];

function setBereichKlasse(nextClass) {
  if (!document.body) return;
  BEREICH_KLASSEN.forEach((cls) => document.body.classList.remove(cls));
  if (nextClass) {
    document.body.classList.add(nextClass);
  }
}

function holeLernstatus() {
  try {
    return ladeLernstatus();
  } catch (error) {
    console.warn("Lernstatus konnte nicht geladen werden:", error);
    return ladeLernstatus();
  }
}

function sichereLernstatus(status) {
  return speichereLernstatus(status);
}

function istIntroBereitsGesehen() {
  try {
    return localStorage.getItem(INTRO_GESEHEN_KEY) === "1";
  } catch (error) {
    console.warn("Intro-Status konnte nicht gelesen werden:", error);
    return false;
  }
}

function markiereIntroAlsGesehen() {
  try {
    localStorage.setItem(INTRO_GESEHEN_KEY, "1");
  } catch (error) {
    console.warn("Intro-Status konnte nicht gespeichert werden:", error);
  }
}

function synchronisiereTagesZaehler(status, datumKey = heutigesDatumKey()) {
  const basisStatus = status && typeof status === "object" ? status : holeLernstatus();

  if (basisStatus.tagesZaehler?.datum === datumKey) {
    return basisStatus;
  }

  basisStatus.tagesZaehler = {
    datum: datumKey,
    gestarteteSessions: 0,
    erledigteSessions: 0,
    geplanteSessions: [],
    gestarteteSessionIds: [],
    erledigteSessionIds: []
  };

  return basisStatus;
}

function baueWiederholungsSessionFuerHeute(wiederholung) {
  const schritt = inhaltsIndex?.schritte?.find((eintrag) => eintrag.stepId === wiederholung.stepId) || null;

  return {
    typ: "wiederholung",
    stepId: wiederholung.stepId,
    titel: schritt?.titel ? `Wiederholung: ${schritt.titel}` : "Wiederholung",
    beschreibung: "Diese Wiederholung ist heute fällig und sollte vor dem freien Lernpfad erledigt werden.",
    wiederholungsId: wiederholung.id,
    stufe: wiederholung.stufe,
    levelId: schritt?.levelId || "",
    lessonIndexInLevel: Number.isInteger(schritt?.lessonIndexInLevel) ? schritt.lessonIndexInLevel : -1
  };
}

function bauePflichtSessionsFuerHeute(status) {
  const sessionen = [];
  const wiederholungen = findeFaelligeWiederholungen(status);

  if (wiederholungen.length > 0) {
    sessionen.push(baueWiederholungsSessionFuerHeute(wiederholungen[0]));
  }

  const echteHistory = getRealDailyMissionHistory();
  if (echteHistory.length > 0 && hasDailyMission(echteHistory)) {
    sessionen.push({
      typ: "mission",
      missionTyp: "daily_mission",
      titel: "Daily Mission",
      beschreibung: "Kurze Zusatz-Session aus deinen bisherigen Inhalten und Fehlerbereichen."
    });
  }

  return sessionen;
}

function baueSessionSpeicherKey(session) {
  if (!session || typeof session !== "object") return "";

  if (session.typ === "wiederholung") {
    return `wiederholung:${session.wiederholungsId || session.stepId || session.titel || ""}`;
  }

  if (session.typ === "mission") {
    return `mission:${session.missionTyp || session.titel || "daily_mission"}`;
  }

  return `sonstiges:${session.titel || ""}`;
}

function holeOderPlaneHeutigeSessions() {
  const datumKey = heutigesDatumKey();
  const status = synchronisiereTagesZaehler(holeLernstatus(), datumKey);
  const vorhandeneSessions = Array.isArray(status.tagesZaehler?.geplanteSessions)
    ? status.tagesZaehler.geplanteSessions
    : [];
  const aktuellePflichtSessions = bauePflichtSessionsFuerHeute(status);

  if (!aktuellePflichtSessions.length) {
    status.tagesZaehler.geplanteSessions = [];
    status.tagesZaehler.gestarteteSessionIds = [];
    status.tagesZaehler.erledigteSessionIds = [];
    status.tagesZaehler.gestarteteSessions = 0;
    status.tagesZaehler.erledigteSessions = 0;
    sichereLernstatus(status);
    return { status, sessions: [] };
  }

  const vorhandeneNachKey = new Map(
    vorhandeneSessions
      .map((session) => [baueSessionSpeicherKey(session), session])
      .filter(([key]) => !!key)
  );

  const sessionen = aktuellePflichtSessions.map((session, index) => {
    const vorhandeneSession = vorhandeneNachKey.get(baueSessionSpeicherKey(session));
    return {
      ...session,
      sessionId: vorhandeneSession?.sessionId || `${datumKey}-session-${index + 1}`
    };
  });

  const gueltigeSessionIds = new Set(sessionen.map((session) => session.sessionId));

  status.tagesZaehler.geplanteSessions = sessionen;
  status.tagesZaehler.gestarteteSessionIds = (status.tagesZaehler.gestarteteSessionIds || [])
    .filter((sessionId) => gueltigeSessionIds.has(sessionId));
  status.tagesZaehler.erledigteSessionIds = (status.tagesZaehler.erledigteSessionIds || [])
    .filter((sessionId) => gueltigeSessionIds.has(sessionId));
  status.tagesZaehler.gestarteteSessions = status.tagesZaehler.gestarteteSessionIds.length;
  status.tagesZaehler.erledigteSessions = status.tagesZaehler.erledigteSessionIds.length;

  sichereLernstatus(status);

  return { status, sessions: sessionen };
}

function holeSessionStatusText(status, sessionId) {
  const tagesZaehler = status?.tagesZaehler || {};
  const erledigt = Array.isArray(tagesZaehler.erledigteSessionIds)
    && tagesZaehler.erledigteSessionIds.includes(sessionId);
  if (erledigt) return "Erledigt";

  const gestartet = Array.isArray(tagesZaehler.gestarteteSessionIds)
    && tagesZaehler.gestarteteSessionIds.includes(sessionId);
  if (gestartet) return "Gestartet";

  return "Offen";
}

function markiereSessionGestartet(sessionId) {
  const status = synchronisiereTagesZaehler(holeLernstatus());
  const ids = Array.isArray(status.tagesZaehler.gestarteteSessionIds)
    ? status.tagesZaehler.gestarteteSessionIds
    : [];

  if (!ids.includes(sessionId)) {
    ids.push(sessionId);
    status.tagesZaehler.gestarteteSessionIds = ids;
    status.tagesZaehler.gestarteteSessions = ids.length;
    sichereLernstatus(status);
  }
}

function markiereSessionErledigt(sessionId) {
  const status = synchronisiereTagesZaehler(holeLernstatus());
  const ids = Array.isArray(status.tagesZaehler.erledigteSessionIds)
    ? status.tagesZaehler.erledigteSessionIds
    : [];

  if (!ids.includes(sessionId)) {
    ids.push(sessionId);
    status.tagesZaehler.erledigteSessionIds = ids;
    status.tagesZaehler.erledigteSessions = ids.length;
    sichereLernstatus(status);
  }
}

function markiereWiederholungAlsErledigt(wiederholungsId) {
  if (!wiederholungsId) return;

  const status = synchronisiereTagesZaehler(holeLernstatus());
  const wiederholungen = Array.isArray(status.geplanteWiederholungen)
    ? status.geplanteWiederholungen
    : [];

  let hatAenderung = false;
  status.geplanteWiederholungen = wiederholungen.map((wiederholung) => {
    if (!wiederholung || wiederholung.id !== wiederholungsId) {
      return wiederholung;
    }

    hatAenderung = true;
    return {
      ...wiederholung,
      status: "erledigt",
      erledigtAm: heutigesDatumKey()
    };
  });

  if (hatAenderung) {
    sichereLernstatus(status);
  }
}

function ermittleSessionTypLabel(session) {
  if (session?.typ === "wiederholung") return "Wiederholung";
  return "Daily Mission";
}

function ermittleSessionBeschreibung(session) {
  if (session?.typ === "wiederholung") {
    return "Festige einen bereits gelernten Schritt, bevor er wieder zu weit weg ist.";
  }
  return session?.beschreibung || "Kurze Misch-Session aus bekannten Inhalten und Praxisbezug.";
}

function starteHeutigeSession(sessionId) {
  const { sessions } = holeOderPlaneHeutigeSessions();
  const session = sessions.find((eintrag) => eintrag.sessionId === sessionId);
  if (!session) return;

  markiereSessionGestartet(sessionId);
  aktuelleSessionQuelle = {
    quelle: "today",
    sessionId,
    sessionTyp: session.typ,
    wiederholungsId: session.wiederholungsId || null
  };

  if (session.typ === "mission") {
    const missionHistory = getRealDailyMissionHistory();
    if (!missionHistory.length || !hasDailyMission(missionHistory)) {
      aktuelleSessionQuelle = null;
      showMap();
      return;
    }

    openDailyMission(document.body, missionHistory, {
      onComplete: () => {
        markiereSessionErledigt(sessionId);
        aktuelleSessionQuelle = null;
        showToday();
      },
      onClose: () => {
        aktuelleSessionQuelle = null;
        showToday();
      }
    });
    return;
  }

  if (!session.levelId || !Number.isInteger(session.lessonIndexInLevel) || session.lessonIndexInLevel < 0) {
    console.warn("Session konnte keiner Lektion zugeordnet werden:", session);
    aktuelleSessionQuelle = null;
    showToday();
    return;
  }

  enterLessonByLevel(session.levelId, session.lessonIndexInLevel);
}

function renderTodaySessions(forceVisible = false) {
  if (!todaySessionListEl || !todayProgressPillEl) return;

  const { status, sessions } = holeOderPlaneHeutigeSessions();
  if (!sessions.length && !forceVisible) {
    showMap();
    return;
  }

  if (!sessions.length && forceVisible) {
    todayProgressPillEl.textContent = "Design-Vorschau";
    if (todayHeadlineEl) todayHeadlineEl.textContent = "Deine Session wartet";
    if (todaySublineEl) {
      todaySublineEl.textContent =
        "Hier würdest du später deine offenen Pflicht-Sessions sehen.";
    }
    todaySessionListEl.innerHTML = `
      <article class="today-session-item">
        <div class="today-session-meta">
          <span class="today-slot-label">Session 1</span>
          <span class="today-type">Wiederholung</span>
        </div>
        <h3>Heute-Ansicht Vorschau</h3>
        <p>Hier würdest du später deine offenen Wiederholungen und Daily Missions sehen.</p>
        <div class="today-session-footer">
          <span class="today-session-status">Nur Testansicht</span>
          <button type="button" class="today-session-btn">Session starten</button>
        </div>
      </article>
    `;

    const previewBtn = todaySessionListEl.querySelector(".today-session-btn");
    if (previewBtn) {
      previewBtn.addEventListener("click", showMap);
    }
    return;
  }

  const erledigte = status.tagesZaehler?.erledigteSessions || 0;
  todayProgressPillEl.textContent = `${erledigte} von ${sessions.length} erledigt`;
  if (todayHeadlineEl) {
    todayHeadlineEl.textContent =
      sessions.length === 1 ? "Deine Session wartet" : "Deine Sessions warten";
  }
  if (todaySublineEl) {
    todaySublineEl.textContent =
      sessions.length === 1
        ? "Erledige sie zuerst, dann geht es in den Lernpfad."
        : "Erledige sie zuerst, dann geht es in den Lernpfad.";
  }

  todaySessionListEl.innerHTML = "";

  sessions.forEach((session, index) => {
    const item = document.createElement("article");
    item.className = "today-session-item";

    const meta = document.createElement("div");
    meta.className = "today-session-meta";

    const title = document.createElement("h3");
    const sessionTypLabel = ermittleSessionTypLabel(session);
    title.textContent =
      session?.titel && session.titel !== sessionTypLabel
        ? session.titel
        : sessionTypLabel;

    const text = document.createElement("p");
    text.textContent = ermittleSessionBeschreibung(session);

    const footer = document.createElement("div");
    footer.className = "today-session-footer";

    const statusEl = document.createElement("span");
    statusEl.className = "today-session-status";
    statusEl.textContent = holeSessionStatusText(status, session.sessionId);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "today-session-btn";

    const istErledigt = statusEl.textContent === "Erledigt";
    button.textContent = istErledigt ? "Schon erledigt" : "Session starten";
    button.disabled = istErledigt;
    button.addEventListener("click", () => starteHeutigeSession(session.sessionId));

    if (statusEl.textContent === "Erledigt") {
      footer.appendChild(statusEl);
    }
    footer.appendChild(button);

    if (meta.childElementCount > 0) {
      item.appendChild(meta);
    }
    item.appendChild(title);
    item.appendChild(text);
    item.appendChild(footer);

    todaySessionListEl.appendChild(item);
  });
}

function starteRegulaerenAppStart() {
  const defaultLevel = getDefaultLevel(CONTENT);

  if (!defaultLevel) {
    showLevelSelect();
    return;
  }

  selectLevel(defaultLevel, { ziel: "today" });
}


// ---------- DOM â€“ Lernbereich ----------

const moduleTitleEl      = document.getElementById("module-title");
const lessonTitleEl      = document.getElementById("lesson-title");
const lessonProgressEl   = document.getElementById("lesson-progress");
const questionProgressEl = document.getElementById("question-progress");

const xpDisplayEl        = document.getElementById("xp-display");
const streakDisplayEl    = document.getElementById("streak-display");
const energyDisplayEl    = document.getElementById("energy-display");

// Alten Frage-Screen blenden wir aus (Games laufen im Overlay)
const cardArea           = document.getElementById("card-area");
const questionMediaEl    = document.getElementById("question-media");
const questionTextEl     = document.getElementById("question-text");
const answersEl          = document.getElementById("answers");
const feedbackEl         = document.getElementById("feedback");

const submitBtn          = document.getElementById("submit-btn");
const prevBtn            = document.getElementById("prev-btn");
const nextBtn            = document.getElementById("next-btn");

// DOM â€“ Intro / Map / Layout
const introScreenEl      = document.getElementById("intro-screen");
const introStartBtn      = document.getElementById("intro-start-btn");
const introAudioBtn      = document.getElementById("intro-audio-btn");
const introAudioEl       = document.getElementById("intro-audio");
const introBubbleTextEl  = document.getElementById("intro-bubble-text");
const todayScreenEl      = document.getElementById("today-screen");
const todaySessionListEl = document.getElementById("today-session-list");
const todayProgressPillEl = document.getElementById("today-progress-pill");
const todayHeadlineEl    = document.getElementById("today-headline");
const todaySublineEl     = document.getElementById("today-subline");
const todayMapBtn        = document.getElementById("today-map-btn");

const levelSelectScreenEl = document.getElementById("level-select-screen");

const mapScreenEl        = document.getElementById("map-screen");
const mapRootEl          = document.getElementById("map-root");
const promoScreenEl      = document.getElementById("promo-screen");
const promoVideoEl       = document.getElementById("promo-video");
const promoCountdownEl   = document.getElementById("promo-countdown");
const promoUnmuteBtn     = document.getElementById("promo-unmute-btn");
const promoReplayOverlayBtn = document.getElementById("promo-replay-overlay-btn");
const promoContinueBtn   = document.getElementById("promo-continue-btn");

const learnHeaderEl      = document.getElementById("learn-header");
const learnMainEl        = document.getElementById("learn-main");
const learnFooterEl      = document.getElementById("learn-footer");

let promoContinueHandler = null;
let promoVideoCache = null;
let lastPromoVideoUrl = "";
let promoCountdownTimer = null;
const SHOW_PROMO_BEFORE_INTRO_FOR_TEST = false;
const inhaltsIndex = baueInhaltsIndexAusContent(CONTENT);
let aktuelleSessionQuelle = null;

const PROMO_VIDEO_DIR = "./media/videos/advertisment/";
const PROMO_VIDEO_FALLBACKS = [
  `${PROMO_VIDEO_DIR}ad_1.mp4`,
  `${PROMO_VIDEO_DIR}ad_2.mp4`,
  `${PROMO_VIDEO_DIR}ad_3.mp4`
];
const INTRO_GESEHEN_KEY = "friseurTrainerIntroGesehen_v1";
const ENERGY_ICON_SRC = "./media/Bilder/Icons/Farbtupe-Energie.png";


// =======================================
// XP & STREAK
// =======================================

function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function loadXpAndStreak() {
  const storedXp = localStorage.getItem("friseurTrainerXp");
  const storedStreak = localStorage.getItem("friseurTrainerStreak");
  const storedDate = localStorage.getItem("friseurTrainerLastDate");

  xp = storedXp ? parseInt(storedXp, 10) : 0;
  streak = storedStreak ? parseInt(storedStreak, 10) : 0;
  lastStudyDate = storedDate || null;

  updateStatsDisplay();
}

function saveXpAndStreak() {
  localStorage.setItem("friseurTrainerXp", String(xp));
  localStorage.setItem("friseurTrainerStreak", String(streak));
  if (lastStudyDate) {
    localStorage.setItem("friseurTrainerLastDate", lastStudyDate);
  }
}

function updateStatsDisplay() {
  if (xpDisplayEl) {
    xpDisplayEl.textContent = `XP: ${xp}`;
  }
  if (streakDisplayEl) {
    streakDisplayEl.textContent = `Streak: ${streak} ðŸ”¥`;
  }
}

function addXp(amount) {
  xp += amount;
  updateStatsDisplay();
  saveXpAndStreak();
}

function updateStreakForToday() {
  const today = getTodayString();

  if (!lastStudyDate) {
    streak = 1;
  } else if (lastStudyDate === today) {
    // heute schon gelernt â†’ nichts tun
  } else {
    const last = new Date(lastStudyDate);
    const now = new Date(today);
    const diffMs = now - last;
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  lastStudyDate = today;
  saveXpAndStreak();
}


// =======================================
// ENERGIE â€“ UI-Helfer
// =======================================

function updateEnergyDisplayUI(energy, maxEnergy) {
  if (!energyDisplayEl) return;
  energyDisplayEl.innerHTML = `<img class="app-energy-icon" src="${ENERGY_ICON_SRC}" alt="Energie"> Energie: ${formatEnergyValue(energy, maxEnergy)}`;
}


// =======================================
// LEKTIONSPROGRESS (Freischalten)
// =======================================

function loadLessonProgress() {
  if (isTestUnlockAllEnabled()) {
    const lastIndex = currentLessons.length - 1;
    maxUnlockedLessonIndex = Math.max(0, lastIndex);
    return;
  }

  const key = `friseurTrainerMaxLesson_${currentModuleId}`;
  const stored = localStorage.getItem(key);
  maxUnlockedLessonIndex = stored ? parseInt(stored, 10) || 0 : 0;

  const lastIndex = currentLessons.length - 1;
  if (maxUnlockedLessonIndex > lastIndex) {
    maxUnlockedLessonIndex = lastIndex;
  }
}

function saveLessonProgress() {
  const key = `friseurTrainerMaxLesson_${currentModuleId}`;
  localStorage.setItem(key, String(maxUnlockedLessonIndex));
}

/**
 * Wird aufgerufen, wenn eine Lektion vollstÃ¤ndig beendet wurde.
 * Schaltet die nÃ¤chste Lektion frei.
 */
function advanceLessonUnlock() {
  const lastIndex = currentLessons.length - 1;
  if (currentLessonIndex === maxUnlockedLessonIndex && maxUnlockedLessonIndex < lastIndex) {
    pendingUnlockReveal = {
      levelId: currentModuleId,
      lessonIndex: maxUnlockedLessonIndex + 1
    };
    maxUnlockedLessonIndex += 1;
    saveLessonProgress();
  }
}


// =======================================
// DAILY MISSIONS â€“ HISTORY & BADGE
// =======================================

/**
 * Zentrale Stelle, um die History fÃ¼r Daily Missions zu holen.
 * 1. Versucht echte History aus question_history
 * 2. FÃ¤llt auf Mock zurÃ¼ck, wenn noch nichts gespielt wurde
 */
function getDailyMissionHistory() {
  return getRealDailyMissionHistory();
}

function getRealDailyMissionHistory() {
  const real = getAllHistoryEntries();
  return Array.isArray(real) ? real : [];
}

/**
 * FÃ¼gt auf der Lernpfad-Karte (map-card) einen Daily-Mission-Badge ein,
 * wenn eine Daily Mission verfÃ¼gbar ist.
 */
function initDailyMissionBadgeOnMap() {
  const historyEntries = getDailyMissionHistory();
  if (!Array.isArray(historyEntries) || historyEntries.length === 0) return;

  if (!hasDailyMission(historyEntries)) {
    // Optional: vorhandene Badge entfernen, falls keine Mission mehr vorhanden ist
    const existing = document.querySelector(".map-daily-mission-badge");
    if (existing && existing.parentElement) {
      existing.parentElement.removeChild(existing);
    }
    return;
  }

  const missionSlot = document.querySelector(".map-daily-mission-slot");
  if (!missionSlot) return;

  // Badge nicht doppelt einfÃ¼gen
  if (missionSlot.querySelector(".map-daily-mission-badge")) {
    return;
  }

  const badgeBtn = document.createElement("button");
  badgeBtn.type = "button";
  badgeBtn.className = "map-daily-mission-badge";

  badgeBtn.innerHTML = `
    <span class="map-dm-label">Daily Mission</span>
    <span class="map-dm-text">
      +1 <img class="map-dm-energy-icon" src="${ENERGY_ICON_SRC}" alt="Energie"> je richtige Frage
    </span>
    <span class="map-dm-pulse"></span>
  `;

  badgeBtn.addEventListener("click", () => {
    openDailyMission(document.body, historyEntries);
  });

  missionSlot.appendChild(badgeBtn);
}


// =======================================
// INTRO-TEXT-ANIMATION
// =======================================

function resetIntroTextAnimation() {
  if (!introBubbleTextEl) return;

  introTextTimeouts.forEach(id => clearTimeout(id));
  introTextTimeouts = [];

  const elements = introBubbleTextEl.querySelectorAll("h2, p");
  elements.forEach(el => el.classList.remove("visible"));
}

function startIntroTextAnimation() {
  if (!introBubbleTextEl) return;

  resetIntroTextAnimation();

  const elements = introBubbleTextEl.querySelectorAll("h2, p");
  const baseDelay = 200;
  const stepDelay = 900;

  elements.forEach((el, index) => {
    const timeoutId = setTimeout(() => {
      el.classList.add("visible");
    }, baseDelay + index * stepDelay);
    introTextTimeouts.push(timeoutId);
  });

  introTextAnimatedOnce = true;
}


// =======================================
// INTRO & MAP
// =======================================

function setupIntro() {
  // Lernbereich & Screens nur vorbereiten, aber noch keinen final anzeigen
  if (learnHeaderEl) learnHeaderEl.style.display = "none";
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  if (promoScreenEl) {
    promoScreenEl.classList.add("hidden");
    promoScreenEl.style.display = "none";
  }
  if (levelSelectScreenEl) {
    levelSelectScreenEl.classList.add("hidden");
    levelSelectScreenEl.style.display = "none";
  }
  if (mapScreenEl) {
    mapScreenEl.classList.add("hidden");
    mapScreenEl.style.display = "none";
  }
  if (introScreenEl) {
    introScreenEl.classList.add("hidden");
    introScreenEl.style.display = "none";
  }

  if (introStartBtn) {
    introStartBtn.addEventListener("click", () => {
      if (introAudioEl) introAudioEl.pause();
      markiereIntroAlsGesehen();
      const defaultLevel = getDefaultLevel(CONTENT);
      if (defaultLevel) {
        selectLevel(defaultLevel, { ziel: "today" });
      } else {
        showToday();
      }
    });
  }

  if (introAudioBtn && introAudioEl) {
    introAudioBtn.addEventListener("click", () => {
      try {
        introAudioEl.currentTime = 0;
        introAudioEl.play();
        startIntroTextAnimation();
      } catch (e) {
        console.warn("Intro-Audio konnte nicht abgespielt werden:", e);
      }
    });
  }
}

function showIntro() {
  mode = "intro";
  setBereichKlasse("bereich-carmen-intro");

  if (introScreenEl) {
    introScreenEl.classList.remove("hidden");
    introScreenEl.style.display = "";
  }
  if (levelSelectScreenEl) {
    levelSelectScreenEl.classList.add("hidden");
    levelSelectScreenEl.style.display = "none";
  }
  if (mapScreenEl) {
    mapScreenEl.classList.add("hidden");
    mapScreenEl.style.display = "none";
  }
  if (promoScreenEl) {
    promoScreenEl.classList.add("hidden");
    promoScreenEl.style.display = "none";
  }

  if (learnHeaderEl) learnHeaderEl.style.display = "none";
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  startIntroTextAnimation();
}

function showToday(options = {}) {
  const { forceVisible = false } = options;
  const { sessions } = holeOderPlaneHeutigeSessions();
  if (!sessions.length && !forceVisible) {
    showMap();
    return;
  }

  mode = "today";
  setBereichKlasse("bereich-heute");

  if (introScreenEl) {
    introScreenEl.classList.add("hidden");
    introScreenEl.style.display = "none";
  }
  if (levelSelectScreenEl) {
    levelSelectScreenEl.classList.add("hidden");
    levelSelectScreenEl.style.display = "none";
  }
  if (mapScreenEl) {
    mapScreenEl.classList.add("hidden");
    mapScreenEl.style.display = "none";
  }
  if (todayScreenEl) {
    todayScreenEl.classList.add("hidden");
    todayScreenEl.style.display = "none";
  }
  if (todayScreenEl) {
    todayScreenEl.classList.add("hidden");
    todayScreenEl.style.display = "none";
  }
  if (promoScreenEl) {
    promoScreenEl.classList.add("hidden");
    promoScreenEl.style.display = "none";
  }
  if (todayScreenEl) {
    todayScreenEl.classList.remove("hidden");
    todayScreenEl.style.display = "";
  }

  if (learnHeaderEl) learnHeaderEl.style.display = "none";
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  renderTodaySessions(forceVisible);
}

function showLevelSelect() {
  mode = "level-select";
  setBereichKlasse("bereich-level-uebersicht");

  if (introScreenEl) {
    introScreenEl.classList.add("hidden");
    introScreenEl.style.display = "none";
  }
  if (mapScreenEl) {
    mapScreenEl.classList.add("hidden");
    mapScreenEl.style.display = "none";
  }
  if (promoScreenEl) {
    promoScreenEl.classList.add("hidden");
    promoScreenEl.style.display = "none";
  }
  if (levelSelectScreenEl) {
    levelSelectScreenEl.classList.remove("hidden");
    levelSelectScreenEl.style.display = "";
  }

  if (learnHeaderEl) learnHeaderEl.style.display = "none";
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  // Level-Auswahl rendern
  renderLevelSelect(levelSelectScreenEl, CONTENT, selectLevel);
}

function showMap() {
  mode = "map";
  setBereichKlasse("bereich-lernpfad-header");

  if (introScreenEl) {
    introScreenEl.classList.add("hidden");
    introScreenEl.style.display = "none";
  }
  if (levelSelectScreenEl) {
    levelSelectScreenEl.classList.add("hidden");
    levelSelectScreenEl.style.display = "none";
  }
  if (todayScreenEl) {
    todayScreenEl.classList.add("hidden");
    todayScreenEl.style.display = "none";
  }
  if (mapScreenEl) {
    mapScreenEl.classList.remove("hidden");
    mapScreenEl.style.display = "";
  }
  if (promoScreenEl) {
    promoScreenEl.classList.add("hidden");
    promoScreenEl.style.display = "none";
  }

  if (learnHeaderEl) learnHeaderEl.style.display = "none";
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  // Lernpfad zeichnen
  renderLessonMap(buildGlobalMapData(CONTENT), undefined, {
    unlockReveal: pendingUnlockReveal
  });
  pendingUnlockReveal = null;

  // ZurÃ¼ck-Button zur Level-Auswahl einbauen
  const existingBackBtn = mapScreenEl.querySelector(".map-back-btn");
  if (existingBackBtn) existingBackBtn.remove();

  const backBtn = document.createElement("button");
  backBtn.className = "map-back-btn";
  backBtn.innerHTML = `<span class="map-back-btn-icon" aria-hidden="true">←</span><span class="map-back-btn-label">Level-Auswahl</span>`;
  backBtn.addEventListener("click", showLevelSelect);

  const mapCard = mapScreenEl.querySelector(".map-card");
  if (mapCard) {
    const topRow = mapCard.querySelector(".map-top-row");
    if (topRow) {
      topRow.appendChild(backBtn);
    } else {
      mapCard.insertBefore(backBtn, mapCard.firstChild);
    }
  }

  // Daily-Mission-Badge auf der Map anzeigen (falls verfÃ¼gbar)
  initDailyMissionBadgeOnMap();

  // Abschluss-CTA: Weiter mit naechstem Level
  const completeBtn = mapScreenEl.querySelector(".map-complete-cta");
  if (completeBtn && CURRENT_LEVEL && CONTENT?.jahre?.length) {
    completeBtn.addEventListener("click", () => {
      const jahr = CONTENT.jahre.find((j) =>
        Array.isArray(j.levels) && j.levels.some((lvl) => lvl.id === CURRENT_LEVEL.id)
      );
      if (!jahr || !Array.isArray(jahr.levels)) return;
      const nextIndex = jahr.levels.findIndex((lvl) => lvl.id === CURRENT_LEVEL.id) + 1;
      const nextLevel = jahr.levels[nextIndex];
      if (nextLevel) {
        selectLevel(nextLevel);
      }
    });
  }
}

function hidePromoScreen() {
  if (!promoScreenEl) return;
  promoScreenEl.classList.add("hidden");
  promoScreenEl.style.display = "none";
  if (promoCountdownTimer) {
    clearInterval(promoCountdownTimer);
    promoCountdownTimer = null;
  }
}

function updatePromoCountdown() {
  if (!promoVideoEl || !promoCountdownEl) return;
  const duration = Number.isFinite(promoVideoEl.duration) ? promoVideoEl.duration : 0;
  const current = Number.isFinite(promoVideoEl.currentTime) ? promoVideoEl.currentTime : 0;
  const remaining = Math.max(0, Math.ceil(duration - current));
  promoCountdownEl.textContent = `${remaining}s`;
}

function startPromoCountdown() {
  if (promoCountdownTimer) {
    clearInterval(promoCountdownTimer);
  }
  updatePromoCountdown();
  promoCountdownTimer = setInterval(updatePromoCountdown, 250);
}

async function tryPlayPromoVideo() {
  if (!promoVideoEl) return false;

  promoVideoEl.muted = false;
  promoVideoEl.volume = 1;

  try {
    await promoVideoEl.play();
    if (promoUnmuteBtn) {
      promoUnmuteBtn.classList.add("hidden");
    }
    return true;
  } catch (error) {
    console.warn("Promo-Video mit Ton konnte nicht automatisch abgespielt werden:", error);
  }

  try {
    promoVideoEl.muted = true;
    await promoVideoEl.play();
    if (promoUnmuteBtn) {
      promoUnmuteBtn.classList.remove("hidden");
    }
    return false;
  } catch (error) {
    console.warn("Promo-Video konnte auch stumm nicht automatisch abgespielt werden:", error);
    if (promoUnmuteBtn) {
      promoUnmuteBtn.classList.remove("hidden");
    }
    return false;
  }
}

async function getPromoVideoUrls() {
  if (Array.isArray(promoVideoCache) && promoVideoCache.length) {
    return promoVideoCache;
  }

  try {
    const response = await fetch(PROMO_VIDEO_DIR, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const videoUrls = Array.from(doc.querySelectorAll("a[href]"))
      .map((link) => link.getAttribute("href") || "")
      .filter((href) => /\.(mp4|webm|ogg)$/i.test(href))
      .map((href) => new URL(href, PROMO_VIDEO_DIR).toString())
      .map((absoluteUrl) => {
        const url = new URL(absoluteUrl);
        return `${url.pathname}${url.search}`;
      });

    if (videoUrls.length) {
      promoVideoCache = Array.from(new Set(videoUrls));
      return promoVideoCache;
    }
  } catch (error) {
    console.warn("Werbevideos konnten nicht aus dem Ordner gelesen werden:", error);
  }

  promoVideoCache = PROMO_VIDEO_FALLBACKS;
  return promoVideoCache;
}

function pickRandomPromoVideo(videoUrls) {
  if (!Array.isArray(videoUrls) || videoUrls.length === 0) return "";
  if (videoUrls.length === 1) return videoUrls[0];

  const candidates = videoUrls.filter((url) => url !== lastPromoVideoUrl);
  const pool = candidates.length ? candidates : videoUrls;
  const nextUrl = pool[Math.floor(Math.random() * pool.length)];
  lastPromoVideoUrl = nextUrl;
  return nextUrl;
}

async function updatePromoVideo() {
  if (!promoVideoEl) return;

  const videoUrls = await getPromoVideoUrls();
  const nextUrl = pickRandomPromoVideo(videoUrls);
  if (!nextUrl) {
    promoVideoEl.removeAttribute("src");
    promoVideoEl.load();
    return;
  }

  promoVideoEl.src = nextUrl;
  promoVideoEl.muted = false;
  promoVideoEl.loop = false;
  promoVideoEl.load();
  if (promoUnmuteBtn) {
    promoUnmuteBtn.classList.add("hidden");
  }
  if (promoContinueBtn) {
    promoContinueBtn.classList.add("hidden");
  }
  if (promoReplayOverlayBtn) {
    promoReplayOverlayBtn.classList.add("hidden");
  }
  if (promoCountdownEl) {
    promoCountdownEl.textContent = "--s";
  }

  await tryPlayPromoVideo();
  startPromoCountdown();
}

function continueAfterPromo() {
  const next = promoContinueHandler;
  promoContinueHandler = null;
  hidePromoScreen();

  if (typeof next === "function") {
    next();
    return;
  }

  showMap();
}

async function showLessonPromo(lesson, options = {}) {
  mode = "promo";
  setBereichKlasse("bereich-werbebildschirme");
  const { onContinue = null } = options;
  promoContinueHandler = typeof onContinue === "function"
    ? onContinue
    : () => showMap();

  if (introScreenEl) {
    introScreenEl.classList.add("hidden");
    introScreenEl.style.display = "none";
  }
  if (levelSelectScreenEl) {
    levelSelectScreenEl.classList.add("hidden");
    levelSelectScreenEl.style.display = "none";
  }
  if (todayScreenEl) {
    todayScreenEl.classList.add("hidden");
    todayScreenEl.style.display = "none";
  }
  if (mapScreenEl) {
    mapScreenEl.classList.add("hidden");
    mapScreenEl.style.display = "none";
  }
  if (todayScreenEl) {
    todayScreenEl.classList.add("hidden");
    todayScreenEl.style.display = "none";
  }
  if (promoScreenEl) {
    promoScreenEl.classList.remove("hidden");
    promoScreenEl.style.display = "";
  }

  if (learnHeaderEl) learnHeaderEl.style.display = "none";
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  await updatePromoVideo();
}


// =======================================
// LEKTION STARTEN (â†’ Game-Overlay)
// =======================================

function enterLesson(lessonIndex) {
  currentLessonIndex = lessonIndex;
  mode = "learn";
  setBereichKlasse("bereich-spiele-und-fragenkarten");
  promoContinueHandler = null;
  hidePromoScreen();

  const lesson = currentLessons[lessonIndex];
  if (!lesson || !Array.isArray(lesson.questions) || lesson.questions.length === 0) {
    console.error("Lesson hat keine Fragen:", lesson);
    return;
  }

  // Alten Fortschritt zurÃ¼cksetzen, damit Wiederholungen nicht doppelt zÃ¤hlen
  if (lesson.id) {
    resetLessonProgress(lesson.id);
  }

  const allowEnergyStreakBonus = lesson.id
    ? !hasConsumedLessonStreakBonus(lesson.id)
    : true;
  let lessonStreakBonusErhalten = false;

  // neue Lesson-Session starten (fÃ¼r Zeit + Stats)
  currentLessonSession = new LessonSession({ lessonId: lesson.id });

  // Map ausblenden
  if (mapScreenEl) {
    mapScreenEl.classList.add("hidden");
    mapScreenEl.style.display = "none";
  }

  // Header fÃ¼r Lernmodus anzeigen (XP & Titel)
  if (learnHeaderEl) learnHeaderEl.style.display = "";
  // den alten Question-Screen nicht mehr nutzen
  if (learnMainEl)   learnMainEl.style.display   = "none";
  if (learnFooterEl) learnFooterEl.style.display = "none";

  // Header-Texte setzen
  if (moduleTitleEl) {
    moduleTitleEl.textContent = CURRENT_LEVEL.title;
  }
  if (lessonTitleEl) {
    lessonTitleEl.textContent = lesson.title;
  }
  if (lessonProgressEl) {
    lessonProgressEl.textContent = `Lektion ${lessonIndex + 1} von ${currentLessons.length}`;
  }
  if (questionProgressEl) {
    // Fragenfortschritt macht das Game-Overlay
    questionProgressEl.textContent = "";
  }

  // Streak fÃ¼r den Tag updaten
  updateStreakForToday();

  // Energie: entweder aus Lektion oder Anzahl Fragen (Lesson-interne "Fragen-Energie")
  const energy = typeof lesson.energy === "number"
    ? lesson.energy
    : lesson.questions.length;

  // Game-Overlay starten (nutzt gameType aus lv1_A1_Lektion_1.js usw.)
  startLessonGame(document.body, {
    id: lesson.id,
    title: lesson.title,
    allowEnergyStreakBonus,
    energy,
    questions: lesson.questions,
    onExit: () => {
      // User bricht die Lektion ab â†’ zurÃ¼ck zur Map
      currentLessonSession = null;
      const kommtVonToday = aktuelleSessionQuelle?.quelle === "today";
      aktuelleSessionQuelle = null;
      if (kommtVonToday) {
        showToday();
        return;
      }
      showMap();
    },
    // wird von den Spielen pro Frage aufgerufen
    onQuestionResult: ({ isCorrect, xpGained = 0 } = {}) => {
      if (currentLessonSession) {
        currentLessonSession.registerQuestionResult({
          isCorrect: !!isCorrect,
          xp: typeof xpGained === "number" ? xpGained : 0
        });
      }
      // falls du XP pro Frage vergeben willst:
      if (typeof xpGained === "number" && xpGained > 0) {
        addXp(xpGained);
      }
    },
    onEnergyBonusAwarded: () => {
      lessonStreakBonusErhalten = true;
    },
    // Lektion komplett beendet
    onCompleted: (gameResult = {}) => {
      // Basis-Stats aus Session (Zeit + ggf. bereits gezÃ¤hlte Fragen)
      let stats = currentLessonSession
        ? currentLessonSession.finish()
        : {
            lessonId: lesson.id,
            xpEarned: 0,
            correctCount: 0,
            totalCount: lesson.questions.length,
            timeMs: 0
          };

      // optionale Werte aus game_main.js Ã¼bernehmen/Ã¼berschreiben
      const {
        correctCount,
        totalCount,
        timeMs,
        xpEarned,
        xpAlreadyAdded
      } = gameResult;

      if (typeof correctCount === "number") {
        stats.correctCount = correctCount;
      }
      if (typeof totalCount === "number") {
        stats.totalCount = totalCount;
      } else if (!stats.totalCount) {
        // Fallback: Anzahl Fragen aus Lektion
        stats.totalCount = lesson.questions.length;
      }
      if (typeof timeMs === "number") {
        stats.timeMs = timeMs;
      }

      // XP fÃ¼r diese Lektion ermitteln
      let lessonXp = 0;
      if (typeof xpEarned === "number") {
        lessonXp = xpEarned;
      } else if (stats.totalCount > 0) {
        // Standard: 10 XP pro richtige Antwort
        lessonXp = stats.correctCount * 10;
      }

      // globale XP erhÃ¶hen, falls das nicht schon im Spiel passiert ist
      if (!xpAlreadyAdded && lessonXp > 0) {
        addXp(lessonXp);
      }

      // XP im Stats-Objekt fÃ¼r das Summary speichern
      stats.xpEarned = lessonXp;

      if (lesson.id && lessonStreakBonusErhalten) {
        consumeLessonStreakBonus(lesson.id);
      }

      const lernstatus = holeLernstatus();
      const aktualisierterLernstatus = protokolliereStepAbschluss(lernstatus, {
        stepId: lesson.id,
        datum: heutigesDatumKey(),
        perfekterDurchlauf: stats.totalCount > 0 && stats.correctCount >= stats.totalCount
      });
      sichereLernstatus(aktualisierterLernstatus);

      // Streak & Freischaltung
      updateStreakForToday();
      advanceLessonUnlock();

      // Session leeren
      currentLessonSession = null;
      const sessionQuelle = aktuelleSessionQuelle;

      // Summary-Overlay anzeigen
      showLessonSummary({
        stats,
        videoConfig: {
          perfect: "./media/videos/lesson_perfect.mp4",
          notPerfect: "./media/videos/lesson_try_again.mp4"
        },
        onContinue: ({ action }) => {
          if (action === "retry") {
            // Lektion neu starten
            enterLesson(lessonIndex);
          } else {
            // erst Eigenwerbung, dann zurueck zur Karte
            if (sessionQuelle?.quelle === "today" && sessionQuelle.sessionId) {
              if (
                sessionQuelle.sessionTyp === "wiederholung" &&
                sessionQuelle.wiederholungsId
              ) {
                markiereWiederholungAlsErledigt(sessionQuelle.wiederholungsId);
              }
              markiereSessionErledigt(sessionQuelle.sessionId);
              aktuelleSessionQuelle = null;
              showLessonPromo(lesson, { onContinue: () => showToday() });
              return;
            }
            aktuelleSessionQuelle = null;
            showLessonPromo(lesson);
          }
        }
      });
    }
  });
}

function enterLessonByLevel(levelId, lessonIndex) {
  const jahr = CONTENT?.jahre?.find((j) =>
    Array.isArray(j.levels) && j.levels.some((lvl) => lvl.id === levelId)
  );
  const level = jahr?.levels?.find((lvl) => lvl.id === levelId) || null;
  if (!level) return;
  // Level-Kontext setzen, ohne Map neu zu rendern
  CURRENT_LEVEL = level;
  CURRENT_MODULE = buildModuleFromLevel(level);
  currentModuleId = CURRENT_MODULE.id;
  currentLessons = CURRENT_MODULE.lessons;
  loadLessonProgress();
  enterLesson(lessonIndex);
}


// =======================================
// INIT
// =======================================

function init() {
  loadXpAndStreak();
  // loadLessonProgress() wird jetzt in selectLevel() aufgerufen,
  // da der Level erst in der Level-Auswahl gewÃ¤hlt wird.
  setupIntro();

  // lesson_map.js initialisieren, bevor ein Startpfad evtl. direkt showMap() ausloest
  if (mapRootEl) {
    initLessonMap(
      mapRootEl,
      (payload) => {
        if (typeof payload === "number") {
          enterLesson(payload);
          return;
        }
        if (payload && payload.levelId !== undefined && payload.lessonIndex !== undefined) {
          enterLessonByLevel(payload.levelId, payload.lessonIndex);
        }
      },
      (action) => {
        if (action === "level-overview") {
          showLevelSelect();
          return;
        }
        if (action === "today-preview") {
          showToday({ forceVisible: true });
          return;
        }
        if (action === "carmen-preview") {
          showIntro();
          return;
        }
        if (action === "settings") {
          showGameTypePreview();
          return;
        }
        if (action === "toggle-test-unlock") {
          setTestUnlockAllEnabled(!isTestUnlockAllEnabled());
          refreshCurrentScreenAfterTestToggle();
          return;
        }
      }
    );
  }

  if (SHOW_PROMO_BEFORE_INTRO_FOR_TEST) {
    showLessonPromo(
      { title: "Beispiel-Lektion: Empfang & Service" },
      { onContinue: () => showIntro() }
    );
  } else if (istIntroBereitsGesehen()) {
    starteRegulaerenAppStart();
  } else {
    showIntro();
  }

  if (todayMapBtn) {
    todayMapBtn.addEventListener("click", () => {
      const defaultLevel = getDefaultLevel(CONTENT);
      if (!CURRENT_LEVEL && defaultLevel) {
        selectLevel(defaultLevel);
        return;
      }
      showMap();
    });
  }

  // Energie-System initialisieren + UI anbinden
  initEnergySystem();
  onEnergyChange(({ energy, maxEnergy }) => {
    updateEnergyDisplayUI(energy, maxEnergy);
  });

  // Alten Fragen-Screen deaktivieren
  if (submitBtn) submitBtn.style.display = "none";
  if (prevBtn)   prevBtn.style.display   = "none";
  if (nextBtn)   nextBtn.style.display   = "none";

  if (cardArea)         cardArea.style.display         = "none";
  if (questionMediaEl)  questionMediaEl.style.display  = "none";
  if (questionTextEl)   questionTextEl.style.display   = "none";
  if (answersEl)        answersEl.style.display        = "none";
  if (feedbackEl)       feedbackEl.style.display       = "none";

  if (promoContinueBtn) {
    promoContinueBtn.addEventListener("click", continueAfterPromo);
  }
  if (promoReplayOverlayBtn && promoVideoEl) {
    promoReplayOverlayBtn.addEventListener("click", async () => {
      promoVideoEl.currentTime = 0;
      promoReplayOverlayBtn.classList.add("hidden");
      if (promoContinueBtn) {
        promoContinueBtn.classList.add("hidden");
      }
      try {
        await promoVideoEl.play();
        startPromoCountdown();
      } catch (error) {
        console.warn("Promo-Video konnte nicht neu gestartet werden:", error);
      }
    });
  }
  if (promoUnmuteBtn && promoVideoEl) {
    promoUnmuteBtn.addEventListener("click", async () => {
      promoVideoEl.muted = false;
      promoVideoEl.volume = 1;
      try {
        await promoVideoEl.play();
        promoUnmuteBtn.classList.add("hidden");
      } catch (error) {
        console.warn("Promo-Ton konnte nicht aktiviert werden:", error);
      }
    });
  }
  if (promoVideoEl) {
    promoVideoEl.addEventListener("loadedmetadata", updatePromoCountdown);
    promoVideoEl.addEventListener("timeupdate", updatePromoCountdown);
    promoVideoEl.addEventListener("ended", () => {
      if (promoCountdownTimer) {
        clearInterval(promoCountdownTimer);
        promoCountdownTimer = null;
      }
      if (promoCountdownEl) {
        promoCountdownEl.textContent = "0s";
      }
      if (promoReplayOverlayBtn) {
        promoReplayOverlayBtn.classList.remove("hidden");
      }
      if (promoContinueBtn) {
        promoContinueBtn.classList.remove("hidden");
      }
    });
  }
}

if (ensureLiveAccess()) {
  init();
}






