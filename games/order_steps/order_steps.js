// games/order_steps/order_steps.js

/**
 * Reihenfolge-Spiel ("order_steps")
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q4",
 *   topic: "Kundin waschen",
 *   prompt: "Bringe die Schritte für die Haarwäsche in die richtige Reihenfolge.",
 *   items: [
 *     "Kundin mit Umhang und Handtuch schützen",
 *     "Wassertemperatur prüfen",
 *     "Haar gründlich nass machen",
 *     "Shampoo einmassieren"
 *   ],
 *   // optional – wenn nicht gesetzt, wird items als korrekte Reihenfolge genutzt:
 *   correctOrder: [
 *     "Kundin mit Umhang und Handtuch schützen",
 *     "Wassertemperatur prüfen",
 *     "Haar gründlich nass machen",
 *     "Shampoo einmassieren"
 *   ],
 *   position: 4,      // (vom game_main gesetzt)
 *   total: 15,        // (vom game_main gesetzt)
 *   feedbackCorrect?: "Text bei richtiger Reihenfolge",
 *   feedbackWrong?: "Text bei falscher Reihenfolge"
 * }
 */

export function renderOrderSteps(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderOrderSteps: rootEl fehlt");
    return;
  }
  if (!gameData) {
    console.error("renderOrderSteps: gameData fehlt");
    return;
  }

  const baseItems = Array.isArray(gameData.items) && gameData.items.length
    ? gameData.items
    : Array.isArray(gameData.correctOrder) && gameData.correctOrder.length
      ? gameData.correctOrder
      : [];

  const correctOrder = Array.isArray(gameData.correctOrder) && gameData.correctOrder.length
    ? gameData.correctOrder
    : baseItems;

  if (!baseItems.length || !correctOrder.length) {
    console.error("renderOrderSteps: keine items / correctOrder definiert", gameData);
    return;
  }

  // einfache Shuffle-Funktion
  const shuffledItems = [...baseItems].sort(() => Math.random() - 0.5);

  const card = document.createElement("div");
  card.className = "game-card os-card";

  const slotsHtml = correctOrder
    .map(
      (_text, i) => `
      <div class="os-slot" data-slot-index="${i}">
        <div class="os-slot-index">${i + 1}</div>
        <div class="os-slot-label">Schritt auswählen</div>
      </div>`
    )
    .join("");

  card.innerHTML = `
    <div class="os-meta-row">
      <span class="os-topic">${gameData.topic || "Ablauf üben"}</span>
      <span class="os-counter">
        ${
          gameData.position && gameData.total
            ? `Frage ${gameData.position} / ${gameData.total}`
            : ""
        }
      </span>
    </div>

    <div class="os-prompt">
      ${gameData.prompt || "Bringe die Schritte in die richtige Reihenfolge."}
    </div>

    <div class="os-slots">
      ${slotsHtml}
    </div>

    <div class="os-options"></div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);
  card.classList.add("os-card--auto-advance");

  const slots = Array.from(card.querySelectorAll(".os-slot"));
  const optionsContainer = card.querySelector(".os-options");
  const feedbackEl = card.querySelector(".game-feedback");

  // Buttons (Chips) erzeugen
  shuffledItems.forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "os-option";
    btn.type = "button";
    btn.dataset.value = text;
    btn.textContent = text;
    optionsContainer.appendChild(btn);
  });

  const optionButtons = Array.from(card.querySelectorAll(".os-option"));

  // State: welcher Slot hat welchen Wert?
  const slotValues = new Array(correctOrder.length).fill(null);
  let locked = false;

  function allSlotsFilled() {
    return slotValues.every((v) => v !== null);
  }

  function firstEmptySlotIndex() {
    return slotValues.findIndex((v) => v === null);
  }

  function findOptionButtonByValue(value) {
    return optionButtons.find((b) => b.dataset.value === value) || null;
  }

  /**
   * Ghost-Animation: gewählter Chip „fliegt“ in den Slot
   */
  function animateChipToSlot(sourceBtn, slotEl, text, done) {
    if (!sourceBtn || !slotEl) {
      const label = slotEl.querySelector(".os-slot-label");
      if (label) label.textContent = text;
      if (typeof done === "function") done();
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const btnRect = sourceBtn.getBoundingClientRect();
    const slotRect = slotEl.getBoundingClientRect();

    const ghost = document.createElement("div");
    ghost.className = "os-chip-ghost";
    ghost.textContent = text;

    const startLeft = btnRect.left - cardRect.left;
    const startTop = btnRect.top - cardRect.top;
    const endLeft = slotRect.left - cardRect.left + 36; // bisschen nach rechts, wegen Index-Kreis
    const endTop = slotRect.top - cardRect.top + 4;

    ghost.style.left = `${startLeft}px`;
    ghost.style.top = `${startTop}px`;

    card.appendChild(ghost);

    // Reflow
    void ghost.offsetWidth;

    ghost.style.left = `${endLeft}px`;
    ghost.style.top = `${endTop}px`;
    ghost.style.transform = "scale(0.96)";

    const onTransitionEnd = () => {
      ghost.remove();
      const label = slotEl.querySelector(".os-slot-label");
      if (label) label.textContent = text;
      if (typeof done === "function") done();
    };

    ghost.addEventListener("transitionend", onTransitionEnd, { once: true });

    // Fallback
    setTimeout(() => {
      if (document.body.contains(ghost)) {
        ghost.remove();
        const label = slotEl.querySelector(".os-slot-label");
        if (label) label.textContent = text;
        if (typeof done === "function") done();
      }
    }, 450);
  }

  // Slot klickbar machen, um Schritte zurückzunehmen
  slots.forEach((slotEl, slotIndex) => {
    slotEl.addEventListener("click", () => {
      if (locked) return;
      const currentValue = slotValues[slotIndex];
      if (!currentValue) return;

      // Slot leeren
      slotValues[slotIndex] = null;
      slotEl.classList.remove("os-slot--filled");
      slotEl.classList.remove("os-slot--correct", "os-slot--wrong");
      const label = slotEl.querySelector(".os-slot-label");
      if (label) label.textContent = "Schritt auswählen";
      slotEl.removeAttribute("data-value");

      // passenden Button wieder aktivieren
      const btn = findOptionButtonByValue(currentValue);
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("os-option--used");
      }

      // Feedback zurücksetzen
      feedbackEl.textContent = "";
    });
  });

  // Chip-Klick → in nächsten freien Slot setzen
  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (locked) return;
      if (btn.disabled) return;

      const value = btn.dataset.value;
      const slotIndex = firstEmptySlotIndex();
      if (slotIndex === -1) {
        // alles voll, ggf. Hinweis anzeigen
        feedbackEl.textContent =
          feedbackEl.textContent || "Alle Schritte sind gesetzt. Du kannst Slots antippen, um sie zu ändern.";
        return;
      }

      const slotEl = slots[slotIndex];

      // im State merken
      slotValues[slotIndex] = value;
      slotEl.dataset.value = value;
      slotEl.classList.add("os-slot--filled");

      // Button als verwendet markieren
      btn.disabled = true;
      btn.classList.add("os-option--used");

      // Ghost-Animation
      animateChipToSlot(btn, slotEl, value, () => {
        if (allSlotsFilled()) {
          checkSolution();
        }
      });
    });
  });

  /**
   * Lösung prüfen → Slots einfärben, Feedback setzen und automatisch weiter
   */
  function checkSolution() {
    locked = true;

    let isCorrect = true;

    slots.forEach((slotEl, i) => {
      const value = slotValues[i];
      const expected = correctOrder[i];

      slotEl.classList.remove("os-slot--correct", "os-slot--wrong");

      if (value === expected) {
        slotEl.classList.add("os-slot--correct");
      } else {
        slotEl.classList.add("os-slot--wrong");
        isCorrect = false;
      }
    });

    if (isCorrect) {
      feedbackEl.textContent =
        gameData.feedbackCorrect ||
        "Perfekt! Du hast den Ablauf in die richtige Reihenfolge gebracht.";
    } else {
      const prettyOrder = correctOrder.join(" → ");
      feedbackEl.textContent =
        gameData.feedbackWrong ||
        `Nicht ganz. Richtige Reihenfolge wäre: ${prettyOrder}.`;
    }

    setTimeout(() => {
      if (typeof onComplete === "function") {
        onComplete(isCorrect);
      }
    }, 650);
  }
}
