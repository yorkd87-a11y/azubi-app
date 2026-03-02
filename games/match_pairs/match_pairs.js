// games/match_pairs/match_pairs.js

/**
 * Match Pairs ("match_pairs")
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q5",
 *   topic: "Gefahrstoffe & Vorschriften",
 *   prompt: "Ordne die Fachbegriffe den passenden Beschreibungen zu.",
 *   pairs: [
 *     { left: "TRGS 530", right: "Regelt den Umgang mit Gefahrstoffen im Friseursalon" },
 *     { left: "PSA",      right: "Persönliche Schutzausrüstung wie Handschuhe und Schürze" },
 *     ...
 *   ],
 *   position: 5,
 *   total: 15,
 *   feedbackCorrect?: "Text bei allen Paaren ohne Fehler",
 *   feedbackWrong?:   "Text, wenn Fehler gemacht wurden"
 * }
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

  // rechte Seite mischen
  const rightIndices = [...pairs.keys()];
  rightIndices.sort(() => Math.random() - 0.5);

  const card = document.createElement("div");
  card.className = "game-card mp-card";

  card.innerHTML = `
    <div class="mp-meta-row">
      <span class="mp-topic">${gameData.topic || "Zuordnung"}</span>
      <span class="mp-counter">
        ${
          gameData.position && gameData.total
            ? "Frage " + gameData.position + " / " + gameData.total
            : ""
        }
      </span>
    </div>

    <div class="mp-prompt">
      ${gameData.prompt || "Ordne die Begriffe den passenden Erklärungen zu."}
    </div>

    <div class="mp-board">
      <div class="mp-column mp-column-left">
        <div class="mp-column-title">Begriffe</div>
        ${pairs
          .map(
            (p, i) => `
              <button
                class="mp-item mp-item-left"
                type="button"
                data-side="left"
                data-index="${i}">
                ${p.left}
              </button>`
          )
          .join("")}
      </div>

      <div class="mp-column mp-column-right">
        <div class="mp-column-title">Erklärungen</div>
        ${rightIndices
          .map((pairIndex) => {
            const p = pairs[pairIndex];
            return `
              <button
                class="mp-item mp-item-right"
                type="button"
                data-side="right"
                data-index="${pairIndex}">
                ${p.right}
              </button>`;
          })
          .join("")}
      </div>
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);
  card.classList.add("mp-card--auto-advance");

  const leftItems = Array.from(card.querySelectorAll(".mp-item-left"));
  const rightItems = Array.from(card.querySelectorAll(".mp-item-right"));
  const feedbackEl = card.querySelector(".game-feedback");
  let selectedLeftIndex = null; // Index im pairs-Array
  const matched = new Array(count).fill(false);
  let matchedCount = 0;
  let mistakes = 0;

  function clearSelection() {
    selectedLeftIndex = null;
    leftItems.forEach((btn) => btn.classList.remove("mp-item--selected"));
    rightItems.forEach((btn) => btn.classList.remove("mp-item--selected"));
  }

  function handleLeftClick(btn) {
    const pairIndex = Number(btn.dataset.index);
    if (matched[pairIndex]) return;

    selectedLeftIndex = pairIndex;
    leftItems.forEach((b) => b.classList.remove("mp-item--selected"));
    btn.classList.add("mp-item--selected");

    if (feedbackEl) feedbackEl.textContent = "";
  }

  function handleRightClick(btn) {
    const pairIndex = Number(btn.dataset.index);
    if (matched[pairIndex]) return;

    if (selectedLeftIndex === null) {
      if (feedbackEl) {
        feedbackEl.textContent = "Wähle zuerst einen Begriff links aus.";
      }
      return;
    }

    rightItems.forEach((b) => b.classList.remove("mp-item--selected"));
    btn.classList.add("mp-item--selected");

    const leftIndex = selectedLeftIndex;
    const isMatch = pairIndex === leftIndex;

    if (isMatch) {
      // korrektes Paar
      matched[leftIndex] = true;
      matchedCount++;

      const leftBtn = leftItems[leftIndex];
      const rightBtn = btn;

      [leftBtn, rightBtn].forEach((b) => {
        b.classList.remove("mp-item--selected");
        b.classList.add(
          "mp-item--matched",
          "mp-item--matched-pop",
          "mp-item--matched-glow",
          "mp-item--disabled"
        );
        b.disabled = true;
      });

      setTimeout(() => {
        [leftBtn, rightBtn].forEach((b) =>
          b.classList.remove("mp-item--matched-pop")
        );
      }, 350);

      if (feedbackEl) {
        feedbackEl.textContent = "Richtig zugeordnet, sehr gut!";
      }

      clearSelection();

      // Alle Paare gefunden?
      if (matchedCount === count) {
        const noMistakes = mistakes === 0;

        if (feedbackEl) {
          feedbackEl.textContent =
            noMistakes
              ? gameData.feedbackCorrect ||
                "Perfekt! Du hast alle Zuordnungen fehlerfrei gelöst."
              : gameData.feedbackWrong ||
                "Gut gemacht! Du hast alle Paare gefunden – wenn du magst, schau dir das Theorie-Kapitel noch einmal an.";
        }

        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete(noMistakes);
          }
        }, 650);
      }
    } else {
      // falsche Zuordnung
      mistakes++;

      const leftBtn = leftItems[leftIndex];
      const rightBtn = btn;

      [leftBtn, rightBtn].forEach((b) => {
        b.classList.add("mp-item--wrong");
      });

      if (feedbackEl) {
        feedbackEl.textContent = "Nicht ganz – probier eine andere Kombination.";
      }

      setTimeout(() => {
        [leftBtn, rightBtn].forEach((b) => {
          b.classList.remove("mp-item--wrong", "mp-item--selected");
        });
        clearSelection();
      }, 350);
    }
  }

  // Event-Handler registrieren
  leftItems.forEach((btn) => {
    btn.addEventListener("click", () => handleLeftClick(btn));
  });

  rightItems.forEach((btn) => {
    btn.addEventListener("click", () => handleRightClick(btn));
  });

}
