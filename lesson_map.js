// lesson_map.js
// Verantwortlich fÃ¼r Darstellung des Lernpfads und Klick auf Lektionen

import { renderLevelHeader } from "./level_header.js";
import { getEnergy, onEnergyChange, MAX_ENERGY } from "./core/energy_system.js";
import { getLessonCompletionPercent } from "./core/progress_store.js";

let mapRoot = null;
let onLessonSelect = null;
let onMapMenuAction = null;
let energyValueEl = null; // Referenz fÃ¼r die Anzeige oben rechts
let currentMapScrollTarget = null;
let currentMapScrollHandler = null;
const ENERGY_ICON_SRC = "./media/Bilder/Icons/Farbtupe-Energie.png";
const TEST_UNLOCK_ALL_KEY = "azubi_test_unlock_all";
let activeSectionVideoOverlay = null;

function isTestUnlockAllEnabled() {
  try {
    return localStorage.getItem(TEST_UNLOCK_ALL_KEY) === "1";
  } catch (error) {
    console.warn("Test-Freischaltmodus konnte nicht gelesen werden:", error);
    return false;
  }
}

function formatEnergyChipValue(energy, maxEnergy) {
  if (Number(energy) > Number(maxEnergy)) {
    return String(energy);
  }
  return `${energy}/${maxEnergy}`;
}

function renderEnergyChipMarkup() {
  return `
      <div class="map-energy-chip">
        <img class="map-energy-chip-icon" src="${ENERGY_ICON_SRC}" alt="Energie">
        <span class="map-energy-chip-value">${formatEnergyChipValue(getEnergy(), MAX_ENERGY)}</span>
      </div>
    `;
}

function closeSectionVideoOverlay() {
  if (!activeSectionVideoOverlay) return;
  const videoEl = activeSectionVideoOverlay.querySelector(".map-video-player");
  if (videoEl && typeof videoEl.pause === "function") {
    videoEl.pause();
  }
  activeSectionVideoOverlay.remove();
  activeSectionVideoOverlay = null;
}

function openSectionVideoOverlay(videoUrl, title = "Abschnittsvideo") {
  if (!videoUrl) return;

  closeSectionVideoOverlay();

  const overlay = document.createElement("div");
  overlay.className = "map-video-overlay";
  overlay.innerHTML = `
    <div class="map-video-dialog" role="dialog" aria-modal="true" aria-label="${title}">
      <div class="map-video-header">
        <div class="map-video-kicker">Abschnittsvideo</div>
        <button class="map-video-close" type="button" aria-label="Video schließen">×</button>
      </div>
      <h3 class="map-video-title">${title}</h3>
      <div class="map-video-frame">
        <video class="map-video-player" controls playsinline preload="metadata" src="${videoUrl}"></video>
      </div>
    </div>
  `;

  const closeBtn = overlay.querySelector(".map-video-close");
  const videoEl = overlay.querySelector(".map-video-player");
  const handleEsc = (event) => {
    if (event.key === "Escape") {
      closeSectionVideoOverlay();
    }
  };

  const closeOverlay = () => {
    document.removeEventListener("keydown", handleEsc);
    closeSectionVideoOverlay();
  };

  closeBtn?.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeOverlay();
    }
  });
  document.addEventListener("keydown", handleEsc);

  document.body.appendChild(overlay);
  activeSectionVideoOverlay = overlay;

  if (videoEl && typeof videoEl.play === "function") {
    videoEl.play().catch(() => {});
  }
}

/**
 * Wird einmal von app.js aufgerufen, um die Map zu initialisieren.
 */
export function initLessonMap(rootElement, handleSelectLesson, handleMapMenuAction) {
  mapRoot = rootElement;
  onLessonSelect = handleSelectLesson;
  onMapMenuAction = handleMapMenuAction;

  mapRoot.addEventListener("click", (event) => {
    const navBtn = event.target.closest(".map-nav-btn");
    if (navBtn) {
      const action = navBtn.dataset.action;
      if (action && typeof onMapMenuAction === "function") {
        onMapMenuAction(action);
      }
      return;
    }

    const testToggleBtn = event.target.closest(".map-test-toggle-btn");
    if (testToggleBtn) {
      if (typeof onMapMenuAction === "function") {
        onMapMenuAction("toggle-test-unlock");
      }
      return;
    }

    const separatorVideoBtn = event.target.closest(".map-separator-play-btn");
    if (separatorVideoBtn) {
      const videoUrl = separatorVideoBtn.dataset.separatorVideo || "";
      const videoTitle = separatorVideoBtn.dataset.separatorTitle || "Abschnittsvideo";
      if (videoUrl) {
        openSectionVideoOverlay(videoUrl, videoTitle);
      }
      return;
    }

    const node = event.target.closest(".map-node");
    if (!node) return;

    const locked = node.dataset.locked === "true";
    if (locked) return;

    const lessonIndex = parseInt(node.dataset.lessonIndex, 10);
    if (Number.isNaN(lessonIndex)) return;

    if (typeof onLessonSelect === "function") {
      const levelId = node.dataset.levelId;
      if (levelId) {
        onLessonSelect({ levelId, lessonIndex });
      } else {
        onLessonSelect(lessonIndex);
      }
    }
  });

  // Bei Resize die Linien neu ausrichten
  window.addEventListener("resize", () => {
    updateMapConnectors();
  });

  // Energie-Ã„nderungen live in der Map anzeigen
  onEnergyChange(({ energy, maxEnergy }) => {
    if (!mapRoot) return;
    const values = mapRoot.querySelectorAll(".map-energy-chip-value");
    values.forEach((el) => {
      el.textContent = formatEnergyChipValue(energy, maxEnergy);
    });
  });
}

/**
 * Rendert die Map fÃ¼r ein Modul.
 * module: aktuelles Modul mit .lessons[]
 * maxUnlockedLessonIndex: hÃ¶chste freigeschaltete Lesson-Index
 */
export function renderLessonMap(mapData, maxUnlockedLessonIndex, options = {}) {
  if (!mapRoot) return;

  if (currentMapScrollTarget && currentMapScrollHandler) {
    currentMapScrollTarget.removeEventListener("scroll", currentMapScrollHandler);
    currentMapScrollTarget = null;
    currentMapScrollHandler = null;
  }

  const isGlobal = !!mapData?.items;
  const module = isGlobal ? null : mapData;
  const rawLessons = isGlobal ? [] : (mapData?.lessons || []);
  const items = isGlobal
    ? mapData.items
    : rawLessons.map((lesson, index) => ({
        type: "lesson",
        lesson,
        levelId: mapData?.id || "",
        lessonIndexInLevel: index,
        isUnlocked: index <= maxUnlockedLessonIndex,
        isCompleted: index < maxUnlockedLessonIndex,
        isCurrent: index === maxUnlockedLessonIndex
      }));

  const lessonItems = items.filter((item) => item.type === "lesson");
  const lessonList = lessonItems.map((item) => item.lesson);
  if (!lessonList.length) {
    mapRoot.innerHTML = "<p>Keine Lektionen vorhanden.</p>";
    return;
  }

  const NODE_COLS = [12, 50, 88];
  const columnPattern = [0, 1, 2, 1];

  let patternIndex = 0;
  let lastLessonRenderIndex = -1;
  let markNextLabelLeft = false;
  let markNextSeparatorKind = null;
  let markNextConnectorFromSeparator = null;
  const pathParts = [];

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (item.type === "separator") {
      const label = item.title || "";
      const kind = item.kind || "abschnitt";
      const hasVideo = kind === "section" && !!item.videoUrl;
      const videoButton = hasVideo
        ? `
            <button
              class="map-separator-play-btn"
              type="button"
              data-separator-video="${item.videoUrl}"
              data-separator-title="${label}"
              data-separator-video-required="${item.videoRequired ? "true" : "false"}"
              aria-label="Abschnittsvideo abspielen">
              <span class="map-separator-play-icon" aria-hidden="true">▶</span>
              <span class="map-separator-play-label">Video starten</span>
            </button>
          `
        : "";
      if (kind === "level") {
        continue;
      }
      const separatorId = `sep-${i}`;
      markNextLabelLeft = true;
      markNextSeparatorKind = kind;
      markNextConnectorFromSeparator = `${separatorId}-br`;
      pathParts.push(`
        <div class="map-separator map-separator--${kind}">
          <div class="map-separator-line map-separator-line--top"></div>
          <div class="map-separator-label-wrap">
            <div class="map-separator-label">${label}</div>
            ${videoButton}
          </div>
          <div class="map-separator-anchor map-separator-anchor--tl" data-separator-anchor="${separatorId}-tl"></div>
          <div class="map-separator-anchor map-separator-anchor--br" data-separator-anchor="${separatorId}-br"></div>
          <div class="map-separator-line map-separator-line--bottom"></div>
        </div>
      `);
      continue;
    }

    const lesson = item.lesson;
    const isUnlocked = !!item.isUnlocked;
    const isCompleted = !!item.isCompleted;
    const isCurrent = !!item.isCurrent;
    const isUnlockReveal =
      !!options.unlockReveal &&
      options.unlockReveal.levelId === (item.levelId || "") &&
      options.unlockReveal.lessonIndex === item.lessonIndexInLevel;

    const completionPercent =
      isCompleted && lesson.id
        ? getLessonCompletionPercent(lesson.id)
        : null;

    const classes = ["map-node"];
    const stepClasses = ["map-step"];
    if (isCompleted) classes.push("map-node-completed");
    if (isCurrent) classes.push("map-node-current");
    if (!isUnlocked) classes.push("map-node-locked");
    if (isCompleted && typeof completionPercent === "number") {
      if (completionPercent === 100) {
        classes.push("map-node-perfect");
      } else if (completionPercent > 0) {
        classes.push("map-node-partial");
      }
    }

    const lockedAttr = (!isUnlocked).toString();
    const nodeNumber = item.lessonIndexInLevel + 1;
    const statusBadge = isCompleted
        ? '<span class="map-node-state-badge map-node-state-badge--done">✓</span>'
        : "";
    const lockShellMarkup = (!isUnlocked || isUnlockReveal)
      ? `
          <span class="map-lock-shell" aria-hidden="true">
            <span class="map-lock-shackle"></span>
            <span class="map-lock-body"></span>
          </span>
        `
      : "";

    let scoreLabel = "";
    let scorePill = "";
    if (isCompleted && typeof completionPercent === "number") {
      scoreLabel = `<div class="map-node-score">${completionPercent}%</div>`;
      scorePill = `<div class="map-node-score-pill">${completionPercent}%</div>`;
    }

    const nextIsSeparator = items[i + 1]?.type === "separator";
    const nextSeparatorKind = nextIsSeparator ? (items[i + 1]?.kind || "") : "";
    const colIndex = columnPattern[patternIndex % columnPattern.length];
    const nodeX = NODE_COLS[colIndex];
    patternIndex += 1;

    if (colIndex === 0) {
      stepClasses.push("map-step--label-expand-right");
    } else if (colIndex === 2) {
      stepClasses.push("map-step--label-expand-left");
    } else {
      stepClasses.push("map-step--label-center");
    }

    const titleParts = [lesson.title || ""];
    if (scoreLabel && typeof completionPercent === "number") {
      titleParts.push(`${completionPercent}%`);
    }
    const circleTitle = titleParts.filter(Boolean).join(" – ");

    const connectorParts = [];
    if (markNextConnectorFromSeparator && lastLessonRenderIndex >= 0) {
      connectorParts.push(
        `<div class="map-connector" data-connector-anchor="${markNextConnectorFromSeparator}" data-connector-mode="from-anchor"></div>`
      );
      markNextConnectorFromSeparator = null;
    } else if (markNextConnectorFromSeparator) {
      markNextConnectorFromSeparator = null;
    }
    if (nextIsSeparator) {
      connectorParts.push(
        `<div class="map-connector" data-connector-anchor="sep-${i + 1}-tl" data-connector-mode="to-anchor"></div>`
      );
    } else if (lastLessonRenderIndex < lessonItems.length - 1) {
      connectorParts.push('<div class="map-connector"></div>');
    }
    const connectorHtml = connectorParts.join("");

    if (nextIsSeparator) {
      stepClasses.push("map-step--pre-separator");
      if (nextSeparatorKind) {
        stepClasses.push(`map-step--pre-separator--${nextSeparatorKind}`);
      }
    }
    if (markNextLabelLeft) {
      stepClasses.push("map-step--post-separator");
      if (markNextSeparatorKind) {
        stepClasses.push(`map-step--post-separator--${markNextSeparatorKind}`);
      }
      markNextLabelLeft = false;
      markNextSeparatorKind = null;
    }

    pathParts.push(`
      <div class="${stepClasses.join(" ")}" style="--node-x: ${nodeX}%;">
        <div class="${classes.join(" ")}"
             data-level-id="${item.levelId || ""}"
             data-lesson-index="${item.lessonIndexInLevel}"
             data-locked="${lockedAttr}"
             data-unlock-reveal="${isUnlockReveal ? "true" : "false"}"
             data-title="${circleTitle}">
          ${scorePill}
          <div class="map-node-circle" title="${circleTitle}">
            <span class="map-node-circle-number">${nodeNumber}</span>
            ${lockShellMarkup}
            ${statusBadge}
          </div>
          <div class="map-node-label">
            <div class="map-node-title">${lesson.title}</div>
          </div>
        </div>
        ${connectorHtml}
      </div>
    `);

    lastLessonRenderIndex += 1;
  }


  const pathNodesHtml = pathParts.join("");

  const currentIndex = 0;
  const currentTitle = lessonList[currentIndex]?.title || "Aktueller Schritt";
  const nextTitle = lessonList[currentIndex + 1]?.title || "";

  const stickyNext = nextTitle
    ? `<span class="map-sticky-next">Naechster: ${nextTitle}</span>`
    : "";

  const completeCta = "";

  mapRoot.innerHTML = `
    <div class="map-card">
      <div class="map-header-stack">
        <div class="map-daily-mission-slot"></div>
        <div class="map-top-row"></div>
        <div id="map-level-header" class="map-level-header"></div>
      </div>
      <div class="map-sticky-bar" aria-hidden="true">
        <div class="map-sticky-inner">
          <span class="map-sticky-label">Schritt ${currentIndex + 1}/${lessonList.length}</span>
          <span class="map-sticky-title">${currentTitle}</span>
          ${stickyNext}
        </div>
      </div>
      <div class="map-path">
        ${pathNodesHtml}
      </div>
      ${completeCta}
    </div>
    <nav class="map-bottom-nav" aria-label="Lernpfad-Menü">
      <button class="map-nav-btn map-nav-btn--active" data-action="level-overview" type="button" aria-current="page">
        <span class="map-nav-icon">LV</span>
        <span class="map-nav-label">Level</span>
      </button>
      <button class="map-nav-btn" data-action="today-preview" type="button">
        <span class="map-nav-icon">HE</span>
        <span class="map-nav-label">Heute</span>
      </button>
      <button class="map-nav-btn" data-action="carmen-preview" type="button">
        <span class="map-nav-icon">CA</span>
        <span class="map-nav-label">Carmen</span>
      </button>
      <button class="map-nav-btn" data-action="settings" type="button">
        <span class="map-nav-icon">E</span>
        <span class="map-nav-label">Einst.</span>
      </button>
    </nav>
  `;

  const headerEl = mapRoot.querySelector("#map-level-header");
  if (headerEl) {
    if (!isGlobal && module) {
      renderLevelHeader(headerEl, module, maxUnlockedLessonIndex);
    } else if (isGlobal && mapData?.headerModule) {
      renderLevelHeader(headerEl, mapData.headerModule, mapData.headerMaxUnlocked || 0);
    } else {
      headerEl.innerHTML = "";
    }
  }

  // Resume-Button: zum naechsten sinnvollen Schritt scrollen
  if (headerEl) {
    const resumeBtn = headerEl.querySelector(".level-header-resume-btn");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        const idxAttr = resumeBtn.getAttribute("data-resume-index");
        let targetIndex = parseInt(idxAttr || "0", 10);
        if (Number.isNaN(targetIndex) || targetIndex < 0) targetIndex = 0;
        if (targetIndex >= lessonList.length) targetIndex = lessonList.length - 1;

        const targetNode = mapRoot.querySelector(
          `.map-node[data-lesson-index="${targetIndex}"]`
        );
        if (!targetNode) return;

        targetNode.scrollIntoView({ behavior: "smooth", block: "center" });
        targetNode.classList.add("map-node-resume");
        setTimeout(() => targetNode.classList.remove("map-node-resume"), 1200);
      });
    }

  }

  // Energie-Badge oben rechts in der Top-Row einbauen (Startposition)
  const topRow = mapRoot.querySelector(".map-top-row");
  let energyTopEl = null;
  if (topRow) {
    const testToggleBtn = document.createElement("button");
    testToggleBtn.type = "button";
    testToggleBtn.className = `map-test-toggle-btn${isTestUnlockAllEnabled() ? " is-active" : ""}`;
    testToggleBtn.textContent = isTestUnlockAllEnabled()
      ? "Testmodus: Alle frei"
      : "Testmodus";
    topRow.appendChild(testToggleBtn);

    energyTopEl = document.createElement("div");
    energyTopEl.className = "map-energy-badge map-energy-top";
    energyTopEl.innerHTML = renderEnergyChipMarkup();
    topRow.appendChild(energyTopEl);
  }

  // Energie-Badge als einzelnes Element im Pfad platzieren
  const pathEl = mapRoot.querySelector(".map-path");
  let energyFloatEl = null;
  if (pathEl) {
    energyFloatEl = document.createElement("div");
    energyFloatEl.className = "map-energy-float map-energy-float--hidden";
    energyFloatEl.innerHTML = renderEnergyChipMarkup();
    pathEl.appendChild(energyFloatEl);
    energyValueEl = energyFloatEl.querySelector(".map-energy-chip-value");
  }

  // Sticky-Bar sichtbar, sobald der Header aus dem Viewport ist
  const stickyBar = mapRoot.querySelector(".map-sticky-bar");
  if (stickyBar && headerEl) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stickyBar.classList.remove("map-sticky-bar--visible");
        } else {
          stickyBar.classList.add("map-sticky-bar--visible");
        }
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(headerEl);
  }

  // Sticky-Bar Inhalt dynamisch an die Scroll-Position koppeln
  const stickyLabelEl = mapRoot.querySelector(".map-sticky-label");
  const stickyTitleEl = mapRoot.querySelector(".map-sticky-title");
  const stickyNextEl = mapRoot.querySelector(".map-sticky-next");
  const mapNodes = Array.from(mapRoot.querySelectorAll(".map-node"));
  const mapSteps = Array.from(mapRoot.querySelectorAll(".map-step"));
  const mapCircles = Array.from(mapRoot.querySelectorAll(".map-node-circle"));
  const bottomNav = mapRoot.querySelector(".map-bottom-nav");
  const scrollContainer = mapRoot.closest(".map-screen");
  let navHideTimeout = null;
  let activeGlowNode = null;

  const updateStickyFromScroll = () => {
    if (!mapNodes.length) return;
    const viewportHeight = scrollContainer?.clientHeight || window.innerHeight;
    const targetY = viewportHeight * 0.5; // Mittelpunkt des sichtbaren Scrollbereichs

    let bestIndex = 0;
    let bestDist = Infinity;

    mapNodes.forEach((node, idx) => {
      const rect = node.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const dist = Math.abs(centerY - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = idx;
      }
    });

    const scrollTop = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
    if (scrollTop < 80) {
      bestIndex = 0;
    }

    const title = lessonList[bestIndex]?.title || "Aktueller Schritt";
    const next = lessonList[bestIndex + 1]?.title || "";

    if (stickyLabelEl) {
      stickyLabelEl.textContent = `Schritt ${bestIndex + 1}/${lessonList.length}`;
    }
    if (stickyTitleEl) {
      stickyTitleEl.textContent = title;
    }
    if (stickyNextEl) {
      stickyNextEl.textContent = next ? `Naechster: ${next}` : "";
      stickyNextEl.style.display = next ? "" : "none";
    }

    const nextNode = mapNodes[bestIndex] || null;
    if (nextNode && nextNode !== activeGlowNode) {
      if (activeGlowNode) {
        activeGlowNode.classList.remove("map-node-glow");
      }
      nextNode.classList.add("map-node-glow");
      activeGlowNode = nextNode;
    }
  };

  const energyState = { y: null, side: null };
  let lastEnergyIndex = null;

  const isCandidateInView = (rect, viewportHeight) => {
    const topGate = viewportHeight * 0.48;
    const bottomGate = viewportHeight * 0.03;
    return rect.top < topGate && rect.bottom > bottomGate;
  };

  const getEnergyCandidateIndex = () => {
    if (!mapNodes.length) return null;
    const viewportHeight = scrollContainer?.clientHeight || window.innerHeight;
    const targetY = viewportHeight * 0.24;
    let bestIndex = null;
    let bestDist = Infinity;

    for (let i = 2; i < mapNodes.length; i += 2) {
      const node = mapNodes[i];
      if (!node) continue;
      const rect = node.getBoundingClientRect();
      if (!isCandidateInView(rect, viewportHeight)) continue;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.abs(centerY - targetY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    }

    return bestIndex;
  };

  const updateEnergyFromScroll = () => {
    if (!energyFloatEl || !mapNodes.length || !pathEl) return;
    const stickyActive =
      !!stickyBar && stickyBar.classList.contains("map-sticky-bar--visible");
    if (!stickyActive) {
      energyFloatEl.classList.add("map-energy-float--hidden");
      energyFloatEl.classList.remove("map-energy-float--visible");
      if (energyTopEl) energyTopEl.style.display = "";
      return;
    }
    const candidateIndex = getEnergyCandidateIndex();
    if (candidateIndex === null) {
      energyFloatEl.classList.add("map-energy-float--hidden");
      energyFloatEl.classList.remove("map-energy-float--visible");
      if (energyTopEl) energyTopEl.style.display = "";
      return;
    }

    if (energyTopEl) energyTopEl.style.display = "none";
    energyFloatEl.classList.remove("map-energy-float--hidden");
    energyFloatEl.classList.add("map-energy-float--visible");

    const stepEl = mapSteps[candidateIndex];
    const circleEl = mapCircles[candidateIndex];
    if (!stepEl || !circleEl) return;

    const pathRect = pathEl.getBoundingClientRect();
    const circleRect = circleEl.getBoundingClientRect();

    const midX = circleRect.left + circleRect.width / 2;
    const pathMid = pathRect.left + pathRect.width / 2;
    const colOffset = pathRect.width * 0.12;

    let desiredSide = "right";
    if (midX < pathMid - colOffset) {
      desiredSide = "right";
    } else if (midX > pathMid + colOffset) {
      desiredSide = "left";
    } else {
      desiredSide = energyState.side === "left" ? "right" : "left";
    }

    energyState.side = desiredSide;
    const sideX = desiredSide === "right" ? 0.88 : 0.12;

    const x = pathRect.left + pathRect.width * sideX;
    const desiredY = circleRect.top + circleRect.height / 2 - pathRect.top;
    if (energyState.y === null || lastEnergyIndex !== candidateIndex) {
      energyState.y = desiredY;
    } else {
      energyState.y += (desiredY - energyState.y) * 0.25;
    }
    lastEnergyIndex = candidateIndex;

    energyFloatEl.style.left = `${x - pathRect.left}px`;
    energyFloatEl.style.top = `${energyState.y}px`;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateStickyFromScroll();
      updateEnergyFromScroll();
      if (bottomNav) {
        bottomNav.classList.add("map-bottom-nav--hidden");
        if (navHideTimeout) clearTimeout(navHideTimeout);
        navHideTimeout = setTimeout(() => {
          bottomNav.classList.remove("map-bottom-nav--hidden");
        }, 380);
      }
      ticking = false;
    });
  };

  currentMapScrollTarget = scrollContainer || window;
  currentMapScrollHandler = onScroll;
  currentMapScrollTarget.addEventListener("scroll", onScroll, { passive: true });
  updateStickyFromScroll();
  updateEnergyFromScroll();

  const currentNode = mapRoot.querySelector(
    `.map-node[data-lesson-index="${Math.max(0, maxUnlockedLessonIndex)}"]`
  );
  if (currentNode) {
    requestAnimationFrame(() => {
      currentNode.scrollIntoView({ behavior: "auto", block: "center" });
      currentNode.classList.add("map-node-resume");
      setTimeout(() => currentNode.classList.remove("map-node-resume"), 1200);
    });
  }

  const unlockRevealNode = mapRoot.querySelector('.map-node[data-unlock-reveal="true"]');
  if (unlockRevealNode) {
    setTimeout(() => {
      unlockRevealNode.classList.add("map-node-unlock-reveal");
      unlockRevealNode.classList.add("map-node-unlock-shake");
      setTimeout(() => {
        unlockRevealNode.classList.remove("map-node-unlock-shake");
      }, 520);
    }, 950);
  }

  // Nach dem Rendern: Linien exakt berechnen
  updateMapConnectors();
}

/**
 * Berechnet fÃ¼r jede .map-connector-Linie:
 * - Start / Ende = Mitte der beiden Kreise
 * - LÃ¤nge = Distanz
 * - Position = Mittelpunkt
 * - Winkel = atan2(dy, dx)
 * Die Linie wird so gekÃ¼rzt, dass sie knapp auÃŸerhalb der Kreise startet.
 */
function updateMapConnectors() {
  if (!mapRoot) return;

  const pathEl = mapRoot.querySelector(".map-path");
  if (!pathEl) return;

  const steps = pathEl.querySelectorAll(".map-step");
  const connectors = pathEl.querySelectorAll(".map-connector");

  if (!connectors.length) return;

  const isDesktop = window.innerWidth >= 769;

  connectors.forEach((conn) => {
    const stepA = conn.closest(".map-step");
    if (!stepA) return;

    const circleA = stepA.querySelector(".map-node-circle");
    if (!circleA) return;

    const anchorId = conn.dataset.connectorAnchor;
    const mode = conn.dataset.connectorMode;

    let sourceEl = circleA;
    let targetEl = null;

    if (anchorId && mode) {
      const anchorEl = pathEl.querySelector(
        `[data-separator-anchor="${anchorId}"]`
      );
      if (!anchorEl) return;
      if (mode === "to-anchor") {
        sourceEl = circleA;
        targetEl = anchorEl;
      } else if (mode === "from-anchor") {
        sourceEl = anchorEl;
        targetEl = circleA;
      } else {
        return;
      }
    } else {
      let nextStep = stepA.nextElementSibling;
      while (nextStep && !nextStep.classList.contains("map-step")) {
        nextStep = nextStep.nextElementSibling;
      }
      if (!nextStep) return;
      const circleB = nextStep.querySelector(".map-node-circle");
      if (!circleB) return;
      targetEl = circleB;
    }

    const rectA = sourceEl.getBoundingClientRect();
    const rectB = targetEl.getBoundingClientRect();
    const stepRect = stepA.getBoundingClientRect();

    // Mittelpunkt von A und B relativ zu stepA
    const x1 = rectA.left + rectA.width / 2 - stepRect.left;
    const y1 = rectA.top + rectA.height / 2 - stepRect.top;
    const x2 = rectB.left + rectB.width / 2 - stepRect.left;
    const y2 = rectB.top + rectB.height / 2 - stepRect.top;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // ðŸ”¹ Trim dynamisch aus KreisgrÃ¶ÃŸe berechnen
    const radiusA = rectA.width / 2;
    const radiusB = rectB.width / 2;

    const margin = isDesktop ? 6 : 3;
    const isCircleA = sourceEl.classList?.contains("map-node-circle");
    const isCircleB = targetEl.classList?.contains("map-node-circle");

    const trimA = isCircleA ? radiusA + margin : 4;
    const trimB = isCircleB ? radiusB + margin : 4;

    const shortLength = Math.max(0, length - trimA - trimB);

    const ux = length ? dx / length : 0;
    const uy = length ? dy / length : 0;
    const offset = (trimA - trimB) / 2;

    // Mittelpunkt der Verbindung entlang der Linie verschieben
    const cx = (x1 + x2) / 2 + ux * offset;
    const cy = (y1 + y2) / 2 + uy * offset;

    conn.style.width = `${shortLength}px`;
    conn.style.left = `${cx}px`;
    conn.style.top = `${cy}px`;
    conn.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  });
}

















