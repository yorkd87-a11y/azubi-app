// games/gap_fill/gap_fill.js

/**
 * Lückentext-Spiel (eine Lücke).
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q3",
 *   topic: "Handschuhe tragen",
 *   textBefore: "Handschuhe schützen deine ",
 *   correctAnswer: "Haut",
 *   textAfter: " vor Chemikalien und Reizstoffen.",
 *   options: ["Haare", "Haut", "Schuhe", "Kleidung"],
 *   position: 3,          // (vom game_main gesetzt)
 *   total: 15,            // (vom game_main gesetzt)
 *   feedbackCorrect?: "Text bei richtiger Antwort",
 *   feedbackWrong?: "Text bei falscher Antwort"
 * }
 */

function adjustGFOptionFontSize(buttons, maxPx = 17, minPx = 12) {
  if (!buttons.length) return;

  const cs = window.getComputedStyle(buttons[0]);
  const paddingV = (parseFloat(cs.paddingTop) || 14) + (parseFloat(cs.paddingBottom) || 14);

  for (let size = maxPx; size >= minPx; size--) {
    buttons.forEach((b) => { b.style.fontSize = size + "px"; });

    const lineHeight = size * 1.35;
    const maxBtnHeight = lineHeight * 2 + paddingV + 4;

    const allFit = Array.from(buttons).every((b) => b.scrollHeight <= maxBtnHeight);
    if (allFit) break;
  }
}

export function renderGapFill(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderGapFill: rootEl fehlt");
    return;
  }
  if (
    !gameData ||
    typeof gameData.textBefore !== "string" ||
    typeof gameData.textAfter !== "string" ||
    typeof gameData.correctAnswer !== "string" ||
    !Array.isArray(gameData.options)
  ) {
    console.error("renderGapFill: ungültige gameData", gameData);
    return;
  }

  const card = document.createElement("div");
  card.className = "game-card gf-card";

  card.innerHTML = `
    <div class="gf-meta-row">
      <span class="gf-topic">${gameData.topic || "Lernfrage"}</span>
      <span class="gf-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="gf-question">
      <div class="gf-sentence">
        <span class="gf-text-before">${gameData.textBefore}</span>
        <span class="gf-gap">_____</span>
        <span class="gf-text-after">${gameData.textAfter}</span>
      </div>
      <span class="gf-hint">Wähle das passende Wort, das die Lücke sinnvoll ergänzt.</span>
    </div>

    <div class="gf-options">
      ${gameData.options
        .map(
          (opt, i) => `
        <button class="gf-option" data-index="${i}">
          ${opt}
        </button>`
        )
        .join("")}
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);
  card.classList.add("gf-card--auto-advance");

  const gapEl = card.querySelector(".gf-gap");
  const optionButtons = Array.from(card.querySelectorAll(".gf-option"));
  requestAnimationFrame(() => adjustGFOptionFontSize(optionButtons));
  const feedbackEl = card.querySelector(".game-feedback");

  let answered = false;

  /**
   * Animation: gewählte Option „fliegt“ zur Lücke
   */
  function animateChipToGap(sourceBtn, gapEl, text, done) {
    if (!sourceBtn || !gapEl) {
      gapEl.textContent = text;
      if (typeof done === "function") done();
      return;
    }

    const ghost = document.createElement("div");
    ghost.className = "gf-chip-ghost";
    ghost.textContent = text;

    card.appendChild(ghost);

    // Reflow erzwingen
    void ghost.offsetWidth;

    const cardRect = card.getBoundingClientRect();
    const btnRect = sourceBtn.getBoundingClientRect();
    const gapRect = gapEl.getBoundingClientRect();
    const ghostRect = ghost.getBoundingClientRect();

    const startLeft =
      btnRect.left - cardRect.left + (btnRect.width - ghostRect.width) / 2;
    const startTop =
      btnRect.top - cardRect.top + (btnRect.height - ghostRect.height) / 2;
    const endLeft =
      gapRect.left - cardRect.left + (gapRect.width - ghostRect.width) / 2;
    const endTop =
      gapRect.top - cardRect.top + (gapRect.height - ghostRect.height) / 2;

    ghost.style.left = `${startLeft}px`;
    ghost.style.top = `${startTop}px`;

    // Reflow erzwingen (Position anwenden)
    void ghost.offsetWidth;

    ghost.style.left = `${endLeft}px`;
    ghost.style.top = `${endTop}px`;
    ghost.style.transform = "scale(0.9)";

    const onTransitionEnd = () => {
      ghost.remove();
      gapEl.textContent = text;
      if (typeof done === "function") done();
    };

    ghost.addEventListener("transitionend", onTransitionEnd, { once: true });

    // Fallback, falls transitionend aus irgendeinem Grund nicht feuert
    setTimeout(() => {
      if (document.body.contains(ghost)) {
        ghost.remove();
        gapEl.textContent = text;
        if (typeof done === "function") done();
      }
    }, 450);
  }

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const index = Number(btn.dataset.index);
      const chosenText = gameData.options[index];
      const correctText = gameData.correctAnswer;

      // erst mal alle Buttons deaktivieren
      optionButtons.forEach((b) => {
        b.disabled = true;
        b.classList.add("gf-option--disabled");
      });

      // aktiv geklickten visuell als ausgewählt markieren
      btn.classList.add("gf-option--selected");

      animateChipToGap(btn, gapEl, chosenText, () => {
        const isCorrect = chosenText === correctText;

        // Gap-States
        gapEl.classList.add("gf-gap--filled");
        if (isCorrect) {
          gapEl.classList.add("gf-gap--correct");
        } else {
          gapEl.classList.add("gf-gap--wrong");
        }

        // Buttons korrekt/falsch markieren
        optionButtons.forEach((b) => {
          const text = b.textContent.trim();
          if (text === correctText) {
            b.classList.add("gf-option--correct");
          } else if (b === btn && !isCorrect) {
            b.classList.add("gf-option--wrong");
          }
        });

        // Feedback
        if (isCorrect) {
          feedbackEl.textContent =
            gameData.feedbackCorrect ||
            "Richtig! So ist der Satz fachlich korrekt.";
        } else {
          feedbackEl.textContent =
            gameData.feedbackWrong ||
            `Nicht ganz. Die passende Ergänzung ist „${correctText}“.`;
        }

        if (typeof onComplete === "function") {
          if (isCorrect) {
            setTimeout(() => {
              onComplete(true);
            }, 550);
            return;
          }

          onComplete({ isCorrect: false });
        }
      });
    });
  });
}
