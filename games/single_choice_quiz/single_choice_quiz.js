// games/single_choice_quiz/single_choice_quiz.js

/**
 * Passt die Schriftgröße aller Antwort-Buttons gemeinsam an.
 * Startet bei maxPx (17), reduziert bis alle Buttons ≤ 2 Zeilen benötigen.
 * Bei minPx (12) wird nicht weiter reduziert – Text darf dann umbrechen.
 */
function adjustSCOptionFontSize(buttons, maxPx = 17, minPx = 12) {
  if (!buttons.length) return;

  const cs = window.getComputedStyle(buttons[0]);
  const paddingV = (parseFloat(cs.paddingTop) || 14) + (parseFloat(cs.paddingBottom) || 14);

  for (let size = maxPx; size >= minPx; size--) {
    buttons.forEach((b) => { b.style.fontSize = size + "px"; });

    // scrollHeight liest Layout-Ergebnis nach dem Setzen der fontSize
    const lineHeight = size * 1.35;
    const maxBtnHeight = lineHeight * 2 + paddingV + 4; // 2 Zeilen + Padding + kleiner Puffer

    const allFit = Array.from(buttons).every((b) => b.scrollHeight <= maxBtnHeight);
    if (allFit) break;
  }
}

/**
 * Single-Choice-Quiz
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q1",
 *   topic: "Handschuhe tragen",
 *   question: "Wann solltest du ...?",
 *   options: [ "A", "B", "C", "D" ],
 *   correctIndex: 1,
 *   position: 1,    // (vom game_main gesetzt)
 *   total: 15,      // (vom game_main gesetzt)
 *   feedbackCorrect?: "Text",
 *   feedbackWrong?: "Text"
 * }
 */
export function renderSingleChoiceQuiz(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderSingleChoiceQuiz: rootEl fehlt");
    return;
  }
  if (!gameData || !Array.isArray(gameData.options)) {
    console.error("renderSingleChoiceQuiz: ungültige gameData", gameData);
    return;
  }

  const card = document.createElement("div");
  card.className = "game-card sc-card sc-card--auto-advance";

  card.innerHTML = `
    <div class="sc-meta-row">
      <span class="sc-topic">
        ${gameData.topic || "Lernfrage"}
      </span>
      <span class="sc-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="sc-question">
      ${gameData.question || ""}
    </div>

    <div class="sc-options">
      ${gameData.options
        .map(
          (opt, i) => `
          <button class="sc-option" data-index="${i}">
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
  const gameBodyEl = rootEl.closest(".gm-body");
  gameBodyEl?.classList.add("gm-body--no-scroll");

  const optionButtons = card.querySelectorAll(".sc-option");

  // Flexible Schriftgröße: max 15px, reduziert gemeinsam wenn ein Button mehr als 2 Zeilen braucht
  requestAnimationFrame(() => adjustSCOptionFontSize(optionButtons));
  const feedbackEl = card.querySelector(".game-feedback");
  const nextBtn = card.querySelector(".game-next-btn");
  nextBtn.style.display = "none";

  let answered = false;
  let lastIsCorrect = null;

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answered) return;

      // Index der geklickten Antwort
      const index = Number(btn.dataset.index);
      const correctIndex = Number(gameData.correctIndex);
      const isCorrect = index === correctIndex;
      lastIsCorrect = isCorrect;
      answered = true;

      // zuerst Auswahl optisch markieren
      optionButtons.forEach((b) => b.classList.remove("sc-option--selected"));
      btn.classList.add("sc-option--selected");

      // jetzt alle Buttons „locken“ und korrekt/falsch markieren
      optionButtons.forEach((b, i) => {
        b.disabled = true;
        b.classList.add("sc-option--disabled");

        if (i === correctIndex) {
          b.classList.add("sc-option--correct");
        } else if (i === index && index !== correctIndex) {
          b.classList.add("sc-option--wrong");
        }
      });

      if (isCorrect) {
        // Richtig: Weiter-Button ausblenden – Popup übernimmt
        nextBtn.style.display = "none";
        feedbackEl.style.display = "none";
        // Kurze Verzögerung damit die Markierungsanimation sichtbar bleibt
        setTimeout(() => {
          if (typeof onComplete === "function") onComplete(true);
        }, 550);
      } else {
        // Falsch: Inline-Feedback + Weiter-Button wie gewohnt
        card.classList.remove("sc-card--auto-advance");
        gameBodyEl?.classList.remove("gm-body--no-scroll");
        feedbackEl.textContent =
          gameData.feedbackWrong || "Nicht ganz. Schau dir das Thema nochmal an.";
        nextBtn.style.display = "";
        nextBtn.disabled = false;
        nextBtn.classList.add("game-next-btn--enabled");

        if (typeof onComplete === "function") {
          onComplete({ isCorrect: false, deferAdvance: true });
        }
      }
    });
  });

  nextBtn.addEventListener("click", () => {
    if (nextBtn.disabled) return;
    if (typeof onComplete === "function") {
      if (lastIsCorrect === false) {
        onComplete({ continueAfterDeferred: true });
        return;
      }

      // Ergebnis an game_main zurückgeben → triggert dort die Card-Animation
      if (lastIsCorrect === null) {
        onComplete(); // Fallback, sollte eigentlich nicht passieren
      } else {
        onComplete(lastIsCorrect);
      }
    }
  });
}
