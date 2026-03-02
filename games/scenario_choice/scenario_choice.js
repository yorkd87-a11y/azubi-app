// games/scenario_choice/scenario_choice.js

/**
 * Scenario Choice ("scenario_choice")
 *
 * Salon-Situation (Text / „Chat-Bubble“) + mehrere Antwortmöglichkeiten.
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q4",
 *   topic: "Kundin kommt zu spät",
 *   situationTitle: "Kundin kommt 20 Minuten zu spät zu ihrem Termin",
 *   // Entweder String ...
 *   situationText: "Im Salon ist viel los. Eine Stammkundin kommt 20 Minuten ...",
 *   // ... oder Array von Absätzen:
 *   // situationText: [
 *   //   "Im Salon ist viel los. Eine Stammkundin kommt 20 Minuten nach Terminbeginn.",
 *   //   "Sie wirkt gehetzt und entschuldigt sich nur kurz.",
 *   //   "Dein Terminplan ist eng und im Hintergrund warten weitere Kunden."
 *   // ],
 *   options: [
 *     "Du sagst ihr direkt, dass das jetzt nicht mehr geht und sie einen neuen Termin buchen muss.",
 *     "Du bleibst freundlich, erklärst die Situation und suchst nach einer Lösung (z. B. Kurzservice).",
 *     "Du tust so, als wäre alles kein Problem und nimmst dir einfach mehr Zeit – auch wenn andere warten."
 *   ],
 *   correctIndex: 1,
 *   // optional: Erklärung je Option
 *   optionExplanations: [
 *     "Wirkt hart und unflexibel, kann Kundenbeziehung schädigen.",
 *     "Professionell: freundlich, lösungsorientiert, respektiert deinen Plan.",
 *     "Wirkt zwar nett, sorgt aber für Stress im Ablauf und Unzufriedenheit bei anderen Kunden."
 *   ],
 *   position: 4,          // (vom game_main gesetzt)
 *   total: 15,            // (vom game_main gesetzt)
 *   feedbackCorrect?: "Das ist eine professionelle, kundenorientierte Lösung.",
 *   feedbackWrong?: "Es gibt eine Option, die professioneller mit der Situation umgeht."
 * }
 */

function adjustSCNOptionFontSize(buttons, maxPx = 17, minPx = 12) {
  if (!buttons.length) return;

  const cs = window.getComputedStyle(buttons[0]);
  const paddingV = (parseFloat(cs.paddingTop) || 14) + (parseFloat(cs.paddingBottom) || 14);

  for (let size = maxPx; size >= minPx; size--) {
    buttons.forEach((b) => { b.style.fontSize = size + "px"; });

    const lineHeight = size * 1.35;
    const maxBtnHeight = lineHeight * 3 + paddingV + 4; // 3 Zeilen für Szenario-Texte

    const allFit = Array.from(buttons).every((b) => b.scrollHeight <= maxBtnHeight);
    if (allFit) break;
  }
}

export function renderScenarioChoice(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderScenarioChoice: rootEl fehlt");
    return;
  }
  if (!gameData || !Array.isArray(gameData.options) || gameData.options.length === 0) {
    console.error("renderScenarioChoice: ungültige gameData.options", gameData);
    return;
  }

  const card = document.createElement("div");
  card.className = "game-card scn-card";

  const isArrayText = Array.isArray(gameData.situationText);
  const paragraphs = isArrayText
    ? gameData.situationText
    : gameData.situationText
    ? [String(gameData.situationText)]
    : [];

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  card.innerHTML = `
    <div class="scn-meta-row">
      <span class="scn-topic">${gameData.topic || "Salon-Situation"}</span>
      <span class="scn-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="scn-situation">
      <div class="scn-bubble">
        ${
          gameData.situationTitle
            ? `<div class="scn-situation-title">${gameData.situationTitle}</div>`
            : ""
        }
        <div class="scn-situation-text">
          ${
            paragraphs.length
              ? paragraphs.map((p) => `<p>${p}</p>`).join("")
              : "<p>Eine Situation im Salon – wie reagierst du am besten?</p>"
          }
        </div>
        <span class="scn-hint">Wähle die Antwort, die am besten zu einem professionellen Verhalten im Salon passt.</span>
      </div>
    </div>

    <div class="scn-options">
      ${gameData.options
        .map(
          (opt, i) => `
        <button 
          class="scn-option" 
          type="button"
          data-index="${i}">
          <span class="scn-option-label">${letters[i] || ""}</span>
          <span class="scn-option-text">${opt}</span>
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
  card.classList.add("scn-card--auto-advance");

  const optionButtons = Array.from(card.querySelectorAll(".scn-option"));
  requestAnimationFrame(() => adjustSCNOptionFontSize(optionButtons));
  const feedbackEl = card.querySelector(".game-feedback");
  const nextBtn = card.querySelector(".game-next-btn");

  const correctIndex = Number(gameData.correctIndex ?? 0);
  const optionExplanations = Array.isArray(gameData.optionExplanations)
    ? gameData.optionExplanations
    : null;

  let answered = false;
  let lastIsCorrect = null;

  function spawnConfetti(hostEl) {
    const colors = ["#E8BD4F", "#1C2342", "#FF6F61", "#4CAF50"];
    const pieceCount = 14;

    const hostRect = hostEl.getBoundingClientRect();
    const hostWidth = hostRect.width;

    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement("div");
      piece.className = "scn-confetti-piece";

      const leftPercent = 10 + Math.random() * 80;
      const delay = Math.random() * 0.15;

      piece.style.left = `${(hostWidth * leftPercent) / 100}px`;
      piece.style.top = `-8px`;
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${delay}s`;

      hostEl.appendChild(piece);

      piece.addEventListener(
        "animationend",
        () => {
          piece.remove();
        },
        { once: true }
      );
    }
  }

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const chosenIndex = Number(btn.dataset.index);

      // Markierung der Buttons
      optionButtons.forEach((b, i) => {
        b.disabled = true;
        b.classList.add("scn-option--disabled");
        if (i === correctIndex) {
          b.classList.add("scn-option--correct");
        }
        if (i === chosenIndex && chosenIndex !== correctIndex) {
          b.classList.add("scn-option--wrong");
        }
      });

      const isCorrect = chosenIndex === correctIndex;
      lastIsCorrect = isCorrect;

      let baseFeedback = "";
      if (isCorrect) {
        baseFeedback =
          gameData.feedbackCorrect ||
          "Genau – das ist eine professionelle und kundenorientierte Reaktion.";
      } else {
        baseFeedback =
          gameData.feedbackWrong ||
          "Nicht ganz. Es gibt eine Antwort, die besser zum professionellen Umgang passt.";
      }

      let extra = "";
      if (optionExplanations && optionExplanations[chosenIndex]) {
        extra = optionExplanations[chosenIndex];
      }

      if (feedbackEl) {
        feedbackEl.textContent = baseFeedback;
        if (extra) {
          const span = document.createElement("span");
          span.className = "scn-feedback-extra";
          span.textContent = extra;
          feedbackEl.appendChild(span);
        }
      }

      // Karte animieren
      if (isCorrect) {
        card.classList.add("scn-card--correct");
        spawnConfetti(card);
        setTimeout(() => {
          if (typeof onComplete === "function") onComplete(true);
        }, 550);
      } else {
        card.classList.add("scn-card--wrong");
        card.classList.remove("scn-card--auto-advance");
        if (typeof onComplete === "function") {
          onComplete({ isCorrect: false, deferAdvance: true });
        }
        nextBtn.disabled = false;
        nextBtn.classList.add("game-next-btn--enabled");
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
      onComplete(lastIsCorrect);
    }
  });
}
