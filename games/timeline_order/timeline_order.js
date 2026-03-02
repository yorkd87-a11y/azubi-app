// games/timeline_order/timeline_order.js

/**
 * Timeline Order ("timeline_order")
 *
 * Schritte in die richtige Reihenfolge bringen.
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q5",
 *   topic: "Arbeitsplatz vorbereiten",
 *   prompt: "Setze die Schritte für einen perfekt vorbereiteten Arbeitsplatz in die richtige Reihenfolge.",
 *   // Schritte in KORREKTER Reihenfolge – wir mischen sie intern
 *   steps: [
 *     "Werkzeuge kontrollieren und ggf. reinigen",
 *     "Sauberes Handtuch und Umhang bereitlegen",
 *     "Stuhl und Spiegel sauber wischen",
 *     "Produkte, Kamm und Bürste griffbereit legen"
 *   ],
 *   position: 5,         // (vom game_main gesetzt)
 *   total: 15,           // (vom game_main gesetzt)
 *   feedbackCorrect?: "Genau so baust du einen Profi-Arbeitsplatz auf.",
 *   feedbackWrong?: "Nicht ganz – achte auf die logische Reihenfolge im Salonalltag."
 * }
 */

export function renderTimelineOrder(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderTimelineOrder: rootEl fehlt");
    return;
  }
  if (!gameData || !Array.isArray(gameData.steps) || gameData.steps.length === 0) {
    console.error("renderTimelineOrder: ungültige gameData.steps", gameData);
    const fallback = document.createElement("div");
    fallback.className = "game-card to-card";
    fallback.textContent =
      "Für dieses Reihenfolge-Spiel wurden noch keine Schritte definiert.";
    rootEl.appendChild(fallback);
    if (typeof onComplete === "function") onComplete(false);
    return;
  }

  const correctSteps = gameData.steps.map((s) => String(s));
  const count = correctSteps.length;

  // Zufällige Reihenfolge für den Pool erzeugen
  const indices = Array.from({ length: count }, (_, i) => i);
  shuffleArray(indices);

  const card = document.createElement("div");
  card.className = "game-card to-card";

  card.innerHTML = `
    <div class="to-meta-row">
      <span class="to-topic">${gameData.topic || "Reihenfolge"}</span>
      <span class="to-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="to-prompt">
      ${
        gameData.prompt ||
        "Bringe die Schritte in eine sinnvolle Reihenfolge."
      }
    </div>

    <div class="to-line-wrapper">
      <div class="to-line-label">Reihenfolge</div>
      <div class="to-line">
        ${Array.from({ length: count })
          .map(
            (_, i) => `
          <div class="to-slot" data-slot-index="${i}">
            <div class="to-slot-index">${i + 1}</div>
            <div class="to-slot-placeholder">Schritt auswählen …</div>
            <div class="to-slot-text" hidden></div>
            <div class="to-slot-result" hidden></div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="to-pool-wrapper">
      <div class="to-pool-label">
        Tippe die Schritte in der Reihenfolge an, wie du sie ausführen würdest.
      </div>
      <div class="to-pool">
        ${indices
          .map(
            (originalIndex) => `
          <button
            class="to-step-chip"
            type="button"
            data-original-index="${originalIndex}">
            ${correctSteps[originalIndex]}
          </button>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);
  card.classList.add("to-card--auto-advance");

  const slots = Array.from(card.querySelectorAll(".to-slot"));
  const poolChips = Array.from(card.querySelectorAll(".to-step-chip"));
  const feedbackEl = card.querySelector(".game-feedback");

  let chosenIndices = []; // Reihenfolge als Array von originalIndex
  let evaluated = false;

  function setSlot(slot, originalIndex) {
    const placeholder = slot.querySelector(".to-slot-placeholder");
    const textEl = slot.querySelector(".to-slot-text");

    if (placeholder) placeholder.remove();
    if (textEl) {
      textEl.hidden = false;
      textEl.textContent = correctSteps[originalIndex];
    }

    slot.dataset.originalIndex = String(originalIndex);
    slot.classList.add("to-slot--filled", "to-slot--pop");

    setTimeout(() => {
      slot.classList.remove("to-slot--pop");
    }, 280);
  }

  function clearSlots() {
    slots.forEach((slot) => {
      slot.classList.remove(
        "to-slot--filled",
        "to-slot--correct",
        "to-slot--wrong",
        "to-slot--check-pop"
      );
      delete slot.dataset.originalIndex;

      const textEl = slot.querySelector(".to-slot-text");
      const resultEl = slot.querySelector(".to-slot-result");
      if (textEl) {
        textEl.hidden = true;
        textEl.textContent = "";
      }
      if (resultEl) {
        resultEl.hidden = true;
        resultEl.textContent = "";
      }

      let placeholder = slot.querySelector(".to-slot-placeholder");
      if (!placeholder) {
        placeholder = document.createElement("div");
        placeholder.className = "to-slot-placeholder";
        placeholder.textContent = "Schritt auswählen …";
        slot.appendChild(placeholder);
      } else {
        placeholder.textContent = "Schritt auswählen …";
      }
    });

    chosenIndices = [];
  }

  function resetPool() {
    poolChips.forEach((chip) => {
      chip.classList.remove("to-step-chip--picked");
      chip.disabled = false;
    });
  }

  function resetAll() {
    evaluated = false;
    clearSlots();
    resetPool();
    if (feedbackEl) feedbackEl.textContent = "";
    card.classList.remove("to-card--correct", "to-card--wrong");
  }

  function spawnConfetti(hostEl) {
    const colors = ["#E8BD4F", "#1C2342", "#4CAF50", "#FF6F61"];
    const pieceCount = 14;
    const hostRect = hostEl.getBoundingClientRect();
    const hostWidth = hostRect.width;

    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement("div");
      piece.className = "to-confetti-piece";

      const leftPercent = 12 + Math.random() * 76;
      const delay = Math.random() * 0.15;

      piece.style.left = `${(hostWidth * leftPercent) / 100}px`;
      piece.style.top = `0px`;
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${delay}s`;

      hostEl.appendChild(piece);

      piece.addEventListener(
        "animationend",
        () => piece.remove(),
        { once: true }
      );
    }
  }

  function evaluate() {
    if (chosenIndices.length !== count) return;
    evaluated = true;
    const results = slots.map((slot, slotIndex) => {
      const originalIndex = Number(slot.dataset.originalIndex);
      return originalIndex === slotIndex;
    });
    const allCorrect = results.every(Boolean);
    const revealStepMs = 320;

    if (feedbackEl) {
      feedbackEl.textContent = "Prüfe Reihenfolge …";
    }

    results.forEach((isCorrect, slotIndex) => {
      setTimeout(() => {
        const slot = slots[slotIndex];
        const resultEl = slot.querySelector(".to-slot-result");

        slot.classList.remove("to-slot--correct", "to-slot--wrong", "to-slot--check-pop");
        slot.classList.add(
          isCorrect ? "to-slot--correct" : "to-slot--wrong",
          "to-slot--check-pop"
        );

        if (resultEl) {
          resultEl.hidden = false;
          resultEl.textContent = isCorrect ? "✓" : "✕";
          resultEl.setAttribute("aria-label", isCorrect ? "Richtig" : "Falsch");
        }

        setTimeout(() => {
          slot.classList.remove("to-slot--check-pop");
        }, 220);
      }, slotIndex * revealStepMs);
    });

    const totalRevealDuration = results.length * revealStepMs;

    setTimeout(() => {
      if (feedbackEl) {
        feedbackEl.textContent = allCorrect
          ? (gameData.feedbackCorrect ||
              "Perfekt – genau so ist die Reihenfolge im Salonalltag sinnvoll.")
          : (gameData.feedbackWrong ||
              "Nicht ganz – überlege dir den logischen Ablauf noch einmal Schritt für Schritt.");
      }

      if (allCorrect) {
        card.classList.add("to-card--correct");
        spawnConfetti(card);
        setTimeout(() => {
          card.classList.remove("to-card--correct");
        }, 400);
      } else {
        card.classList.add("to-card--wrong");
        setTimeout(() => {
          card.classList.remove("to-card--wrong");
        }, 300);
      }
    }, totalRevealDuration + 120);

    setTimeout(() => {
      if (typeof onComplete === "function") {
        onComplete(allCorrect);
      }
    }, totalRevealDuration + 1050);
  }

  // Klick auf einen Pool-Chip → belegt nächsten freien Slot
  poolChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      if (chip.disabled) return;
      if (chosenIndices.length >= count) return; // schon voll

      // Freien Slot finden
      const freeSlot = slots.find(
        (slot) => !slot.classList.contains("to-slot--filled")
      );
      if (!freeSlot) return;

      const originalIndex = Number(chip.dataset.originalIndex);
      chosenIndices.push(originalIndex);

      chip.classList.add("to-step-chip--picked");
      chip.disabled = true;

      setSlot(freeSlot, originalIndex);

      // Wenn alle Slots belegt → auswerten
      if (chosenIndices.length === count) {
        evaluate();
      } else {
        // Zwischendurch Feedback leeren
        if (feedbackEl) feedbackEl.textContent = "";
      }
    });
  });

}

/**
 * Kleine Hilfsfunktion: Fisher-Yates Shuffle
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
