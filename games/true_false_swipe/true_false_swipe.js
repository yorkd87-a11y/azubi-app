// games/true_false_swipe/true_false_swipe.js

/**
 * True/False
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q2",
 *   topic: "Dein erster Tag im Salon",
 *   statement: "Es ist okay, Kunden zu ignorieren ...",
 *   isTrue: false,
 *   position: 2,
 *   total: 15,
 *   feedbackCorrect?: "Text",
 *   feedbackWrong?: "Text"
 * }
 */
export function renderTrueFalseSwipe(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderTrueFalseSwipe: rootEl fehlt");
    return;
  }
  if (!gameData || typeof gameData.isTrue !== "boolean") {
    console.error("renderTrueFalseSwipe: ungueltige gameData", gameData);
    return;
  }

  const card = document.createElement("div");
  card.className = "game-card tfs-card";

  const topic = gameData.topic || "Wahr oder Falsch";
  const statement = gameData.statement || "";
  const answerOrder = Array.isArray(gameData.answerOrder) && gameData.answerOrder.length === 2
    ? gameData.answerOrder
    : [false, true];
  const buttonsHtml = answerOrder
    .map((isTrue) => `
      <button class="tfs-choice ${isTrue ? "tfs-choice--true" : "tfs-choice--false"}" data-answer="${isTrue ? "true" : "false"}">
        ${isTrue ? "Richtig" : "Falsch"}
      </button>
    `)
    .join("");

  card.innerHTML = `
    <div class="tfs-meta-row">
      <span class="tfs-topic">${topic}</span>
      <span class="tfs-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="tfs-statement-wrapper">
      <div class="tfs-statement-card">
        ${statement}
      </div>
      <div class="tfs-result-badge tfs-result-badge--true">Richtig</div>
      <div class="tfs-result-badge tfs-result-badge--false">Falsch</div>
    </div>

    <div class="tfs-choices-row">
      ${buttonsHtml}
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);

  const statementCard = card.querySelector(".tfs-statement-card");
  const optionButtons = Array.from(card.querySelectorAll(".tfs-choice"));
  const trueBtn = card.querySelector('.tfs-choice[data-answer="true"]');
  const falseBtn = card.querySelector('.tfs-choice[data-answer="false"]');
  const feedbackEl = card.querySelector(".game-feedback");
  const nextBtn = card.querySelector(".game-next-btn");
  nextBtn.style.display = "none";
  const resultBadgeTrue = card.querySelector(".tfs-result-badge--true");
  const resultBadgeFalse = card.querySelector(".tfs-result-badge--false");

  let answered = false;
  let lastIsCorrect = null;

  function handleAnswer(chosenIsTrue) {
    if (answered) return;
    answered = true;

    const isCorrect = chosenIsTrue === !!gameData.isTrue;
    lastIsCorrect = isCorrect;

    card.classList.add(
      chosenIsTrue ? "tfs-card--answer-true" : "tfs-card--answer-false"
    );
    statementCard.classList.add("tfs-statement-card--answered");

    if (isCorrect) {
      resultBadgeTrue.classList.add("tfs-result-badge--visible");
    } else {
      resultBadgeFalse.classList.add("tfs-result-badge--visible");
    }

    optionButtons.forEach((button) => {
      button.disabled = true;
      button.classList.add("tfs-choice--disabled");
    });

    const activeBtn = chosenIsTrue ? trueBtn : falseBtn;
    activeBtn.classList.add("tfs-choice--selected");

    if (isCorrect) {
      nextBtn.style.display = "none";
      feedbackEl.style.display = "none";
      setTimeout(() => {
        if (typeof onComplete === "function") onComplete(true);
      }, 550);
    } else {
      feedbackEl.textContent =
        gameData.feedbackWrong || "Nicht ganz. Ueberleg noch einmal, warum das so ist.";
      nextBtn.style.display = "";
      nextBtn.disabled = false;
      nextBtn.classList.add("game-next-btn--enabled");

      if (typeof onComplete === "function") {
        onComplete({ isCorrect: false, deferAdvance: true });
      }
    }
  }

  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;
      handleAnswer(button.dataset.answer === "true");
    });
  });

  nextBtn.addEventListener("click", () => {
    if (nextBtn.disabled) return;
    if (typeof onComplete === "function") {
      if (lastIsCorrect === false) {
        onComplete({ continueAfterDeferred: true });
        return;
      }
      if (lastIsCorrect === null) {
        onComplete();
      } else {
        onComplete(lastIsCorrect);
      }
    }
  });
}
