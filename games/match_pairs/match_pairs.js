// games/match_pairs/match_pairs.js

function adjustMPOptionFontSize(buttons, maxPx = 17, minPx = 12) {
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
 * Match Pairs – sequenzieller Flow:
 * 1. Frage in Box oben, Begriff fliegt als dunkle Karte ein
 * 2. Alle Erklärungen als Buttons – kein direktes Feedback
 * 3. Review: Paare erscheinen Schritt für Schritt mit ✓/✗-Animation
 * 4. Weiter-Button → onComplete
 */
export function renderMatchPairs(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderMatchPairs: rootEl fehlt");
    return;
  }
  if (!gameData || !Array.isArray(gameData.pairs) || !gameData.pairs.length) {
    console.error("renderMatchPairs: ungültige gameData.pairs", gameData);
    return;
  }

  const pairs = gameData.pairs;
  const count = pairs.length;

  // Rechte Seite einmal mischen
  const shuffledRightIndices = [...Array(count).keys()].sort(() => Math.random() - 0.5);

  const userAnswers = new Array(count).fill(null);
  let currentLeftIndex = 0;

  const card = document.createElement("div");
  card.className = "game-card mp-card mp-card--matching";

  const questionText = gameData.question || gameData.prompt || "Ordne die Begriffe den passenden Erklärungen zu.";

  card.innerHTML = `
    <div class="mp-meta-row">
      <span class="mp-topic">${gameData.topic || "Zuordnung"}</span>
      <span class="mp-counter">
        ${gameData.position && gameData.total ? "Frage " + gameData.position + " / " + gameData.total : ""}
      </span>
    </div>

    <div class="mp-question">
      <span class="mp-question-text">${questionText}</span>
      <span class="mp-hint">Wähle die passende Erklärung.</span>
    </div>

    <div class="mp-term-section">
      <span class="mp-term-progress">Begriff 1 / ${count}</span>
      <div class="mp-term-box mp-term-box--in">
        ${pairs[0].left}
      </div>
    </div>

    <div class="mp-options-wrap">
      ${shuffledRightIndices.map((rightIdx) => `
        <button class="mp-option" type="button" data-right-index="${rightIdx}">
          ${pairs[rightIdx].right}
        </button>
      `).join("")}
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" style="display:none" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);

  const termProgressEl = card.querySelector(".mp-term-progress");
  const termBoxEl = card.querySelector(".mp-term-box");
  const optionsWrapEl = card.querySelector(".mp-options-wrap");
  const feedbackEl = card.querySelector(".game-feedback");
  const nextBtn = card.querySelector(".game-next-btn");

  const optionButtons = Array.from(card.querySelectorAll(".mp-option"));
  requestAnimationFrame(() => adjustMPOptionFontSize(optionButtons));

  function advanceTerm() {
    currentLeftIndex++;
    if (currentLeftIndex >= count) {
      showReview();
      return;
    }

    // Rausfliegen
    termBoxEl.classList.remove("mp-term-box--in");
    termBoxEl.classList.add("mp-term-box--out");

    const onOut = () => {
      termBoxEl.classList.remove("mp-term-box--out");
      termProgressEl.textContent = "Begriff " + (currentLeftIndex + 1) + " / " + count;
      termBoxEl.textContent = pairs[currentLeftIndex].left;

      // Reflow erzwingen, damit Animation neu startet
      void termBoxEl.offsetWidth;
      termBoxEl.classList.add("mp-term-box--in");

      termBoxEl.removeEventListener("animationend", onOut);
    };

    termBoxEl.addEventListener("animationend", onOut, { once: true });

    // Fallback falls animationend nicht feuert
    setTimeout(() => {
      if (termBoxEl.classList.contains("mp-term-box--out")) onOut();
    }, 400);
  }

  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;

      const rightIdx = Number(btn.dataset.rightIndex);
      userAnswers[currentLeftIndex] = rightIdx;

      btn.classList.add("mp-option--used");
      btn.disabled = true;

      advanceTerm();
    });
  });

  function showReview() {
    let mistakes = 0;
    userAnswers.forEach((chosenRightIdx, leftIdx) => {
      if (chosenRightIdx !== leftIdx) mistakes++;
    });
    const noMistakes = mistakes === 0;

    // Matching-Phase beenden
    card.classList.remove("mp-card--matching");

    // Term-Section ausblenden
    const termSection = card.querySelector(".mp-term-section");
    if (termSection) termSection.style.display = "none";

    // Frage-Box: "Auswertung"
    const questionEl = card.querySelector(".mp-question");
    if (questionEl) {
      const textEl = questionEl.querySelector(".mp-question-text");
      if (textEl) textEl.textContent = "Auswertung";
      const hintEl = questionEl.querySelector(".mp-hint");
      if (hintEl) hintEl.style.display = "none";
    }

    // Options → Review-Liste
    optionsWrapEl.className = "mp-review-wrap";
    optionsWrapEl.innerHTML = "";

    // Paare nacheinander mit Animation einblenden
    pairs.forEach((pair, leftIdx) => {
      const chosenRightIdx = userAnswers[leftIdx];
      const isCorrect = chosenRightIdx === leftIdx;
      const chosenText = pairs[chosenRightIdx].right;
      const correctText = pair.right;

      const pairEl = document.createElement("div");
      pairEl.className = "mp-review-pair mp-review-pair--" + (isCorrect ? "correct" : "wrong");
      pairEl.style.setProperty("--delay", (leftIdx * 0.45) + "s");

      pairEl.innerHTML = `
        <span class="mp-review-term">${pair.left}</span>
        <span class="mp-review-icon">${isCorrect ? "✓" : "✗"}</span>
        <div class="mp-review-answer">
          <span class="mp-review-chosen">${chosenText}</span>
          ${!isCorrect ? `<span class="mp-review-correct-hint">${correctText}</span>` : ""}
        </div>
      `;

      optionsWrapEl.appendChild(pairEl);
    });

    // Nach allen Animationen: 3-Sekunden-Countdown, dann auto-weiter
    const allShownMs = (pairs.length * 0.45 + 0.5) * 1000;

    setTimeout(() => {
      let remaining = 4;
      feedbackEl.textContent = remaining + " ...";

      const tick = setInterval(() => {
        remaining--;
        if (remaining <= 0) {
          clearInterval(tick);
          if (typeof onComplete === "function") {
            onComplete(noMistakes);
          }
        } else {
          feedbackEl.textContent = remaining + " ...";
        }
      }, 1000);
    }, allShownMs);
  }
}
