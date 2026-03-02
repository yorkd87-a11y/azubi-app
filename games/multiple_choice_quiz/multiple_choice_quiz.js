// games/multiple_choice_quiz/multiple_choice_quiz.js

/**
 * Passt die Schriftgröße aller Antwort-Buttons gemeinsam an.
 * Startet bei maxPx (17), reduziert bis alle Buttons ≤ 2 Zeilen benötigen.
 * Bei minPx (12) wird nicht weiter reduziert – Text darf dann umbrechen.
 */
function adjustMCOptionFontSize(buttons, maxPx = 17, minPx = 12) {
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

/**
 * Multiple-Choice-Quiz (mehrere richtige Antworten)
 */

export function renderMultipleChoiceQuiz(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderMultipleChoiceQuiz: rootEl fehlt");
    return;
  }
  if (
    !gameData ||
    !Array.isArray(gameData.options) ||
    !Array.isArray(gameData.correctIndices)
  ) {
    console.error("renderMultipleChoiceQuiz: ungueltige gameData", gameData);
    return;
  }

  const correctSet = new Set(
    gameData.correctIndices.map((i) => Number(i)).filter((i) => i >= 0)
  );

  const card = document.createElement("div");
  card.className = "game-card mc-card";

  card.innerHTML = `
    <div class="mc-meta-row">
      <span class="mc-topic">${gameData.topic || "Lernfrage"}</span>
      <span class="mc-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="mc-question">
      <span class="mc-question-text">${(gameData.question || "").replace(/\s*\(mehrere richtig\)/i, "")}</span>
      <span class="mc-hint">Wähle alle richtigen Antworten aus.</span>
    </div>

    <div class="mc-options">
      ${gameData.options
        .map(
          (opt, i) => `
        <button
          class="mc-option"
          type="button"
          data-index="${i}">
          <span class="mc-option-icon">✓</span>
          <span class="mc-option-label">${opt}</span>
        </button>
      `
        )
        .join("")}
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Antwort prüfen</button>
    </div>
  `;

  rootEl.appendChild(card);
  const gameBodyEl = rootEl.closest(".gm-body");
  const overlay = rootEl.closest(".gm-overlay");

  const optionButtons = Array.from(card.querySelectorAll(".mc-option"));
  requestAnimationFrame(() => adjustMCOptionFontSize(optionButtons));
  const feedbackEl = card.querySelector(".game-feedback");
  const nextBtn = card.querySelector(".game-next-btn");
  let selected = new Set();
  let evaluated = false;
  let lastIsCorrect = null;

  // --- Scroll-Hinweis Badge ---
  let scrollHintEl = null;

  function ensureScrollHint() {
    if (!overlay || scrollHintEl) return;
    scrollHintEl = document.createElement("div");
    scrollHintEl.className = "mc-scroll-hint";
    scrollHintEl.textContent = "↓ Zum Prüfen scrollen";
    scrollHintEl.addEventListener("click", () => {
      nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    overlay.appendChild(scrollHintEl);
  }

  function updateScrollHint() {
    if (!scrollHintEl) return;
    if (selected.size === 0 || evaluated) {
      scrollHintEl.classList.remove("mc-scroll-hint--visible");
      return;
    }
    const rect = nextBtn.getBoundingClientRect();
    scrollHintEl.classList.toggle("mc-scroll-hint--visible", rect.top > window.innerHeight - 10);
  }

  function removeScrollHint() {
    scrollHintEl?.remove();
    scrollHintEl = null;
    gameBodyEl?.removeEventListener("scroll", updateScrollHint);
  }

  ensureScrollHint();
  gameBodyEl?.addEventListener("scroll", updateScrollHint);
  // ----------------------------

  function updateScrollMode() {
    if (!gameBodyEl) return;
    const needsScroll = card.scrollHeight > gameBodyEl.clientHeight - 8;
    gameBodyEl.classList.toggle("gm-body--no-scroll", !needsScroll);
  }

  function updateSelectedUI() {
    if (!evaluated) {
      if (selected.size > 0) {
        nextBtn.disabled = false;
        nextBtn.classList.add("game-next-btn--enabled");
      } else {
        nextBtn.disabled = true;
        nextBtn.classList.remove("game-next-btn--enabled");
      }
    }
  }

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (evaluated) return;
      const index = Number(btn.dataset.index);

      if (selected.has(index)) {
        selected.delete(index);
        btn.classList.remove("mc-option--selected");
      } else {
        selected.add(index);
        btn.classList.add("mc-option--selected");
      }

      if (feedbackEl) {
        feedbackEl.textContent = "";
      }

      updateSelectedUI();
      requestAnimationFrame(updateScrollMode);
      requestAnimationFrame(updateScrollHint);
    });
  });

  function evaluate() {
    evaluated = true;

    optionButtons.forEach((btn) => {
      btn.classList.add("mc-option--disabled");
    });

    let correctChosen = 0;
    let wrongChosen = 0;

    optionButtons.forEach((btn) => {
      const idx = Number(btn.dataset.index);
      const isCorrect = correctSet.has(idx);
      const isSelected = selected.has(idx);

      if (isSelected && isCorrect) {
        correctChosen += 1;
        btn.classList.add("mc-option--correct", "mc-option--correct-pulse");
      } else if (isSelected && !isCorrect) {
        wrongChosen += 1;
        btn.classList.add("mc-option--wrong", "mc-option--wrong-shake");
      } else if (!isSelected && isCorrect) {
        btn.classList.add("mc-option--missed");
      }
    });

    const totalCorrect = correctSet.size;
    const allCorrect = correctChosen === totalCorrect && wrongChosen === 0;
    const partiallyCorrect =
      correctChosen > 0 && (correctChosen < totalCorrect || wrongChosen > 0);

    lastIsCorrect = allCorrect;

    if (allCorrect) {
      removeScrollHint();
      nextBtn.style.display = "none";
      if (feedbackEl) feedbackEl.style.display = "none";
      setTimeout(() => {
        if (typeof onComplete === "function") onComplete(true);
      }, 550);
    } else {
      if (feedbackEl) {
        feedbackEl.textContent = partiallyCorrect
          ? (gameData.feedbackPartially || "Fast. Einige Antworten stimmen, andere noch nicht ganz.")
          : (gameData.feedbackWrong || "Das passt noch nicht. Schau dir das Thema nochmal genauer an.");
      }
      nextBtn.textContent = "Weiter";
      nextBtn.disabled = false;
      nextBtn.classList.add("game-next-btn--enabled");

      if (typeof onComplete === "function") {
        onComplete({ isCorrect: false, deferAdvance: true });
      }
    }

    requestAnimationFrame(updateScrollMode);
  }

  nextBtn.addEventListener("click", () => {
    removeScrollHint();
    if (!evaluated) {
      if (selected.size === 0) return;
      evaluate();
      return;
    }

    if (typeof onComplete === "function") {
      if (lastIsCorrect === false) {
        onComplete({ continueAfterDeferred: true });
        return;
      }

      onComplete(lastIsCorrect);
    }
  });

  updateSelectedUI();
  requestAnimationFrame(updateScrollMode);
}
