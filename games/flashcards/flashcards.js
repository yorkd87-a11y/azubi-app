// games/flashcards/flashcards.js

/**
 * Flashcards ("flashcards")
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_fc1",
 *   topic: "Begriffe Arbeitsschutz",
 *   prompt: "Tippe auf die Karte, um Fachbegriff und Erklärung zu sehen.",
 *   cards: [
 *     { front: "TRGS 530", back: "Technische Regel für Gefahrstoffe im Friseurhandwerk." },
 *     { front: "PSA", back: "Persönliche Schutzausrüstung – z. B. Handschuhe, Schürzen." },
 *     ...
 *   ],
 *   position: 4,
 *   total: 15
 * }
 */

export function renderFlashcards(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderFlashcards: rootEl fehlt");
    return;
  }

  if (!gameData || !Array.isArray(gameData.cards) || gameData.cards.length === 0) {
    console.error("renderFlashcards: ungültige gameData.cards", gameData);
    const fallback = document.createElement("div");
    fallback.className = "game-card fc-card-main";
    fallback.textContent =
      "Für diese Flashcard-Runde wurden noch keine Karten definiert.";
    rootEl.appendChild(fallback);
    if (typeof onComplete === "function") onComplete(false);
    return;
  }

  const cardsData = gameData.cards;
  const totalCards = cardsData.length;

  const wrapper = document.createElement("div");
  wrapper.className = "game-card fc-card-main";

  wrapper.innerHTML = `
    <div class="fc-meta-row">
      <span class="fc-topic">${gameData.topic || "Karteikarten"}</span>
      <span class="fc-counter">
        ${
          gameData.position && gameData.total
            ? "Lernkarte " + gameData.position + " / " + gameData.total
            : ""
        }
      </span>
    </div>

    <div class="fc-prompt">
      ${
        gameData.prompt ||
        "Tippe auf die Karte, um Vorder- und Rückseite zu sehen."
      }
    </div>

    <div class="fc-card-wrapper">
      <div class="fc-card">
        <div class="fc-card-inner">
          <div class="fc-card-face fc-card-front">
            <div class="fc-front-label">Begriff</div>
            <div class="fc-front-text"></div>
          </div>
          <div class="fc-card-face fc-card-back">
            <div class="fc-back-label">Lösung</div>
            <div class="fc-back-text"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="fc-progress-row">
      <span class="fc-progress-label">
        Karte <span class="fc-current-index">1</span> / <span class="fc-total-count">${totalCards}</span>
      </span>
      <span class="fc-seen-label">
        Gesehen: <span class="fc-seen-count">0</span> / ${totalCards}
      </span>
    </div>

    <div class="fc-actions-row">
      <button type="button" class="fc-know-btn">Kannte ich</button>
      <button type="button" class="fc-unknown-btn">Unsicher</button>
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(wrapper);

  const fcCard          = wrapper.querySelector(".fc-card");
  const frontTextEl     = wrapper.querySelector(".fc-front-text");
  const backTextEl      = wrapper.querySelector(".fc-back-text");
  const currentIndexEl  = wrapper.querySelector(".fc-current-index");
  const totalCountEl    = wrapper.querySelector(".fc-total-count");
  const seenCountEl     = wrapper.querySelector(".fc-seen-count");
  const knowBtn         = wrapper.querySelector(".fc-know-btn");
  const unknownBtn      = wrapper.querySelector(".fc-unknown-btn");
  const nextBtn         = wrapper.querySelector(".game-next-btn");
  const feedbackEl      = wrapper.querySelector(".game-feedback");

  if (totalCountEl) {
    totalCountEl.textContent = String(totalCards);
  }

  let currentIndex = 0;
  const seenSet = new Set();

  function updateSeenUI() {
    if (seenCountEl) {
      seenCountEl.textContent = String(seenSet.size);
    }

    if (seenSet.size === totalCards) {
      nextBtn.disabled = false;
      nextBtn.classList.add("game-next-btn--enabled");
      if (feedbackEl && !feedbackEl.textContent) {
        feedbackEl.textContent =
          "Top – du hast alle Karten gesehen. Wenn du soweit bist, tippe auf Weiter.";
      }
    }
  }

  function renderCardAt(index) {
  const data = cardsData[index];
  if (!data) return;

  // verschiedene mögliche Feldnamen unterstützen
  const frontText =
    data.front ??
    data.question ??
    data.term ??
    data.word ??
    "";

  const backText =
    data.back ??
    data.answer ??
    data.solution ??
    data.loesung ??
    data.explanation ??
    "";

  if (frontTextEl) frontTextEl.textContent = frontText;
  if (backTextEl)  backTextEl.textContent  = backText || "— keine Rückseite definiert —";

  fcCard.classList.remove("fc-card--flipped");

  if (currentIndexEl) {
    currentIndexEl.textContent = String(index + 1);
  }

  // diese Karte als gesehen markieren (Frontseite reicht fürs Gating)
  seenSet.add(index);
  updateSeenUI();
}


  // Karte flippen
  fcCard.addEventListener("click", () => {
    fcCard.classList.toggle("fc-card--flipped");
  });

  // Buttons "Kannte ich" / "Unsicher" → einfach nächste Karte
  knowBtn.addEventListener("click", () => {
    goToNextCard();
  });

  unknownBtn.addEventListener("click", () => {
    goToNextCard();
  });

  // Weiter-Button verlässt das Spiel
  nextBtn.addEventListener("click", () => {
    if (nextBtn.disabled) return;
    if (typeof onComplete === "function") {
      onComplete(true);
    }
  });

  // erste Karte anzeigen
  renderCardAt(currentIndex);
}
