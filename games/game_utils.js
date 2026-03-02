// games/game_utils.js

// HTML escapen (für Titel im Header usw.)
export function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Result aus einem Spiel-Renderer in ein klares boolean ziehen
// akzeptiert: true/false, { isCorrect: true/false }, { correct: true/false }
export function extractIsCorrect(result) {
  if (typeof result === "boolean") {
    return result;
  }
  if (!result || typeof result !== "object") {
    return null;
  }
  if (typeof result.isCorrect === "boolean") {
    return result.isCorrect;
  }
  if (typeof result.correct === "boolean") {
    return result.correct;
  }
  return null;
}

function mischeListe(liste) {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

function remappeOptionen(gameData, indexReihenfolge) {
  const optionen = indexReihenfolge.map((index) => gameData.options[index]);
  const erklaerungen = Array.isArray(gameData.optionExplanations)
    ? indexReihenfolge.map((index) => gameData.optionExplanations[index])
    : gameData.optionExplanations;

  return {
    ...gameData,
    options: optionen,
    optionExplanations: erklaerungen
  };
}

export function randomisiereSpielDaten(gameData) {
  if (!gameData || typeof gameData !== "object") return gameData;

  const gameType = gameData.gameType || gameData.type;

  if (gameType === "true_false_swipe") {
    return {
      ...gameData,
      answerOrder: Math.random() < 0.5 ? [false, true] : [true, false]
    };
  }

  if (!Array.isArray(gameData.options) || gameData.options.length < 2) {
    return gameData;
  }

  const indexReihenfolge = mischeListe(gameData.options.map((_, index) => index));

  if (gameType === "single_choice_quiz" || gameType === "scenario_choice") {
    const basis = remappeOptionen(gameData, indexReihenfolge);
    const neuerCorrectIndex = indexReihenfolge.indexOf(Number(gameData.correctIndex));
    return {
      ...basis,
      correctIndex: neuerCorrectIndex
    };
  }

  if (gameType === "multiple_choice_quiz") {
    const basis = remappeOptionen(gameData, indexReihenfolge);
    const richtigeAlt = new Set(
      (gameData.correctIndices || []).map((index) => Number(index))
    );
    const neueCorrectIndices = indexReihenfolge
      .map((alterIndex, neuerIndex) => (richtigeAlt.has(alterIndex) ? neuerIndex : null))
      .filter((index) => index !== null);

    return {
      ...basis,
      correctIndices: neueCorrectIndices
    };
  }

  if (gameType === "gap_fill") {
    return remappeOptionen(gameData, indexReihenfolge);
  }

  return gameData;
}

// Richtig/Falsch-Animation auf der aktuellen Karte
export function animateResult(overlay, isCorrect) {
  const card = overlay.querySelector(".game-card");
  if (!card) return;

  card.classList.remove("game-card--correct", "game-card--wrong");
  void card.offsetWidth;
  card.classList.add(isCorrect ? "game-card--correct" : "game-card--wrong");
}

// Timing-Konstanten für die Block-Einflug-Animation
const FB_FIRST_DELAY = 0.15;
const FB_STEP_DELAY = 0.38;
const FB_ANIM_DURATION = 0.42;

function parseFeedbackText(rawText) {
  if (!rawText) return { explanation: "", typicalError: null, merksatz: null };

  let explanation = rawText.trim();
  let typicalError = null;
  let merksatz = null;

  const merksatzIdx = explanation.indexOf("Merksatz:");
  if (merksatzIdx !== -1) {
    merksatz = explanation.substring(merksatzIdx + "Merksatz:".length).trim();
    explanation = explanation.substring(0, merksatzIdx).trim();
  }

  const fehlerIdx = explanation.indexOf("Typischer Fehler:");
  if (fehlerIdx !== -1) {
    typicalError = explanation.substring(fehlerIdx + "Typischer Fehler:".length).trim();
    explanation = explanation.substring(0, fehlerIdx).trim();
  }

  return { explanation, typicalError, merksatz };
}

function buildFeedbackHtml(rawText) {
  const { explanation, typicalError, merksatz } = parseFeedbackText(rawText);

  let html = "";
  let blockIndex = 0;

  function nextDelay() {
    const delay = (FB_FIRST_DELAY + blockIndex * FB_STEP_DELAY).toFixed(2);
    blockIndex++;
    return delay;
  }

  function formatFeedbackText(text) {
    if (!text) return "";

    return text
      .split(/(?<=\.)\s+/)
      .map((part) => escapeHtml(part.trim()))
      .filter(Boolean)
      .join("<br><br>");
  }

  if (explanation) {
    html += `<p class="gm-fb-explanation" style="animation-delay:${nextDelay()}s">${formatFeedbackText(explanation)}</p>`;
  }
  if (typicalError) {
    html += `
      <div class="gm-fb-error-block" style="animation-delay:${nextDelay()}s">
        <span class="gm-fb-error-label">⚠ Typischer Fehler</span>
        <span class="gm-fb-error-text">${formatFeedbackText(typicalError)}</span>
      </div>`;
  }
  if (merksatz) {
    html += `<div class="gm-fb-merksatz" style="animation-delay:${nextDelay()}s">✏ ${formatFeedbackText(merksatz)}</div>`;
  }

  const totalAnimMs = blockIndex > 0
    ? Math.round(
        (FB_FIRST_DELAY + (blockIndex - 1) * FB_STEP_DELAY + FB_ANIM_DURATION) * 1000
      ) + 100
    : 0;

  return {
    html:
      html ||
      `<p class="gm-fb-explanation" style="animation-delay:0.15s">${formatFeedbackText(rawText)}</p>`,
    totalAnimMs
  };
}

export function showAnswerFeedbackPopup(
  overlayEl,
  {
    variant = "correct",
    text = "",
    title,
    topLabel,
    icon,
    onContinue,
    lockSeconds = 2,
    autoContinueSeconds = 5
  } = {}
) {
  const popup = document.createElement("div");
  popup.className = `gm-answer-popup gm-answer-popup--${variant}`;

  const { html, totalAnimMs } = buildFeedbackHtml(text);
  const popupTitle = title || (variant === "correct" ? "Richtig!" : "Nicht ganz!");
  const popupTopLabel =
    topLabel || (variant === "correct" ? "Antwort bestätigt" : "Antwort prüfen");
  const popupIcon = icon || (variant === "correct" ? "✨" : "🔥");

  popup.innerHTML = `
    <div class="gm-answer-popup-card">
      <div class="gm-answer-popup-flash"></div>
      <div class="gm-answer-popup-top-label">${popupTopLabel}</div>
      <div class="gm-answer-popup-icon">${popupIcon}</div>
      <div class="gm-answer-popup-title">${popupTitle}</div>
      <div class="gm-answer-popup-text">${html}</div>
      <div class="gm-answer-popup-heat-meter" aria-hidden="true">
        <span class="gm-answer-popup-heat-bar"></span>
        <span class="gm-answer-popup-heat-bar"></span>
        <span class="gm-answer-popup-heat-bar"></span>
        <span class="gm-answer-popup-heat-bar"></span>
        <span class="gm-answer-popup-heat-bar"></span>
      </div>
      <button class="gm-answer-popup-btn" disabled>...</button>
    </div>
  `;

  overlayEl.appendChild(popup);

  const btn = popup.querySelector(".gm-answer-popup-btn");
  let autoInterval = null;
  let didContinue = false;

  const continueNow = () => {
    if (didContinue) return;
    didContinue = true;
    if (autoInterval) {
      clearInterval(autoInterval);
      autoInterval = null;
    }
    popup.remove();
    if (typeof onContinue === "function") onContinue();
  };

  setTimeout(() => {
    let remaining = lockSeconds;
    btn.innerHTML = `Weiter in <span class="gm-answer-popup-countdown">${remaining}</span>s`;

    const interval = setInterval(() => {
      remaining -= 1;
      const spanEl = btn.querySelector(".gm-answer-popup-countdown");
      if (remaining <= 0) {
        clearInterval(interval);
        btn.disabled = false;
        btn.classList.add("gm-answer-popup-btn--enabled");

        let autoRemaining = autoContinueSeconds;
        btn.innerHTML = `Weiter <span class="gm-answer-popup-auto-countdown">${autoRemaining}</span>s`;

        autoInterval = setInterval(() => {
          autoRemaining -= 1;
          const autoSpan = btn.querySelector(".gm-answer-popup-auto-countdown");
          if (autoRemaining <= 0) {
            continueNow();
            return;
          }
          if (autoSpan) {
            autoSpan.textContent = String(autoRemaining);
          }
        }, 1000);
      } else if (spanEl) {
        spanEl.textContent = String(remaining);
      }
    }, 1000);
  }, totalAnimMs);

  btn.addEventListener("click", () => {
    if (btn.disabled) return;
    continueNow();
  });
}

export function showCorrectFeedbackPopup(overlayEl, text, onContinue, lockSeconds = 2) {
  showAnswerFeedbackPopup(overlayEl, {
    variant: "correct",
    text,
    onContinue,
    lockSeconds
  });
}
