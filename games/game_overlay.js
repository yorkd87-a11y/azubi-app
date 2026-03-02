// games/game_overlay.js

import { escapeHtml } from "./game_utils.js";
import { renderGameStreakMarkup } from "./game_streak.js";

const ENERGY_ICON_SRC = "./media/Bilder/Icons/Farbtupe-Energie.png";

/**
 * Baut das Lesson-Overlay und haengt es an den Container.
 *
 * Rueckgabe: wichtige DOM-Refs, die game_main.js braucht.
 */
export function createLessonOverlay(container, lessonConfig, startingEnergy) {
  const overlay = document.createElement("div");
  overlay.className = "gm-overlay";

  overlay.innerHTML = `
    <div class="gm-header">
      <button class="gm-close-btn" aria-label="Lektion beenden">&times;</button>

      <div class="gm-progress-area">
        <div class="gm-progress-bar">
          <div class="gm-progress-bar-inner"></div>
        </div>
        <div class="gm-progress-label">
          ${lessonConfig.title ? escapeHtml(lessonConfig.title) : "Lektion"}
        </div>
      </div>

      <div class="gm-energy">
        <img class="gm-energy-icon" src="${ENERGY_ICON_SRC}" alt="Energie">
        <span class="gm-energy-value">${startingEnergy}</span>
      </div>

      ${renderGameStreakMarkup(0)}
    </div>

    <div class="gm-body">
      <div class="gm-game-root"></div>
    </div>

    <div class="gm-exit-sheet">
      <div class="gm-exit-sheet-handle"></div>
      <div class="gm-exit-sheet-content">
        <div class="gm-exit-sheet-image-wrapper">
          ${
            lessonConfig.exitImageUrl
              ? `<img src="${lessonConfig.exitImageUrl}" alt="Lektion beenden">`
              : `<span>💇‍♀️</span>`
          }
        </div>
        <div class="gm-exit-sheet-text">
          Willst du die Lektion wirklich beenden?<br>
          Dein Fortschritt in dieser Runde geht dabei verloren.
        </div>
        <button class="gm-exit-primary-btn">Weiterlernen</button>
        <button class="gm-exit-secondary-btn">Lektion beenden</button>
      </div>
    </div>
  `;

  container.appendChild(overlay);

  const gameRoot = overlay.querySelector(".gm-game-root");
  const progressInner = overlay.querySelector(".gm-progress-bar-inner");
  const energyValueEl = overlay.querySelector(".gm-energy-value");
  const streakValueEl = overlay.querySelector(".gm-streak-value");
  const closeBtn = overlay.querySelector(".gm-close-btn");
  const exitSheet = overlay.querySelector(".gm-exit-sheet");
  const exitContinueBtn = overlay.querySelector(".gm-exit-primary-btn");
  const exitEndBtn = overlay.querySelector(".gm-exit-secondary-btn");

  return {
    overlay,
    gameRoot,
    progressInner,
    energyValueEl,
    streakValueEl,
    closeBtn,
    exitSheet,
    exitContinueBtn,
    exitEndBtn
  };
}
