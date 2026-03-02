// games/category_sort/category_sort.js

/**
 * Category Sort ("category_sort")
 *
 * Begriffe in Kategorien einsortieren.
 *
 * Erwartete gameData:
 * {
 *   id: "lvl1_abs1_l1_q6",
 *   topic: "Gefahrstoffe & Hygiene",
 *   prompt: "Sortiere die Begriffe in die passende Kategorie.",
 *   categories: [
 *     { id: "gefahrstoff", label: "Gefahrstoffe" },
 *     { id: "hygiene", label: "Hygienemaßnahmen" }
 *   ],
 *   items: [
 *     { text: "TRGS 530", categoryId: "gefahrstoff" },
 *     { text: "Handschuhe", categoryId: "hygiene" }
 *   ],
 *   position: 6,           // (vom game_main gesetzt)
 *   total: 15,             // (vom game_main gesetzt)
 *   feedbackCorrect?: "Text bei fehlerfreiem Sortieren",
 *   feedbackWrong?: "Text, wenn Fehler gemacht wurden"
 * }
 */

export function renderCategorySort(rootEl, gameData, onComplete) {
  if (!rootEl) {
    console.error("renderCategorySort: rootEl fehlt");
    return;
  }
  if (
    !gameData ||
    !Array.isArray(gameData.categories) ||
    !Array.isArray(gameData.items) ||
    !gameData.categories.length ||
    !gameData.items.length
  ) {
    console.error("renderCategorySort: ungültige gameData", gameData);
    return;
  }

  const categories = gameData.categories;
  const items = gameData.items;

  const itemCount = items.length;

  // Items im Pool mischen
  const poolOrder = [...items.keys()].sort(() => Math.random() - 0.5);

  // State
  const assignedCategoryForItem = new Array(itemCount).fill(null);
  let selectedItemIndex = null;
  let assignedCount = 0;
  let mistakes = 0;

  const card = document.createElement("div");
  card.className = "game-card cs-card";

  const poolChipsHtml = poolOrder
    .map((itemIndex) => {
      const item = items[itemIndex];
      return `
        <button 
          class="cs-item" 
          type="button"
          data-item-index="${itemIndex}">
          ${item.text}
        </button>`;
    })
    .join("");

  const bucketsHtml = categories
    .map(
      (cat) => `
      <div class="cs-bucket" data-category-id="${cat.id}">
        <div class="cs-bucket-header">
          <div class="cs-bucket-name">${cat.label}</div>
          <div class="cs-bucket-count" data-bucket-count-for="${cat.id}">
            0 Begriffe
          </div>
        </div>
        <div class="cs-bucket-body">
          <div class="cs-bucket-placeholder">
            Tippe einen Begriff an und dann diesen Bereich, um ihn hier einzuordnen.
          </div>
        </div>
      </div>`
    )
    .join("");

  const questionCounterText =
    gameData.position && gameData.total
      ? `Frage ${gameData.position} / ${gameData.total}`
      : "";

  card.innerHTML = `
    <div class="cs-meta-row">
      <span class="cs-topic">${gameData.topic || "Sortieren"}</span>
      <span class="cs-counter">${questionCounterText}</span>
    </div>

    <div class="cs-prompt">
      ${gameData.prompt || "Ordne die Begriffe den passenden Kategorien zu."}
    </div>

    <div class="cs-layout">
      <div class="cs-buckets">
        <div class="cs-buckets-title">Kategorien</div>
        <div class="cs-buckets-grid">
          ${bucketsHtml}
        </div>
      </div>

      <div class="cs-pool">
        <div class="cs-pool-title">Begriffe</div>
        <div class="cs-pool-items">
          ${poolChipsHtml}
        </div>
      </div>
    </div>

    <div class="game-footer-row">
      <div class="game-feedback" aria-live="polite"></div>
      <button class="game-next-btn" disabled>Weiter</button>
    </div>
  `;

  rootEl.appendChild(card);
  card.classList.add("cs-card--auto-advance");

  const chipButtons = Array.from(card.querySelectorAll(".cs-item"));
  const bucketEls = Array.from(card.querySelectorAll(".cs-bucket"));
  const feedbackEl = card.querySelector(".game-feedback");

  // Map categoryId → { bucketEl, bodyEl, countEl, count }
  const bucketMap = {};
  bucketEls.forEach((bucketEl) => {
    const categoryId = bucketEl.dataset.categoryId;
    const bodyEl = bucketEl.querySelector(".cs-bucket-body");
    const countEl = card.querySelector(
      `[data-bucket-count-for="${categoryId}"]`
    );
    bucketMap[categoryId] = {
      bucketEl,
      bodyEl,
      countEl,
      count: 0,
    };
  });

  function clearBucketHighlight() {
    bucketEls.forEach((b) =>
      b.classList.remove(
        "cs-bucket--active",
        "cs-bucket--correct",
        "cs-bucket--wrong"
      )
    );
  }

  function clearChipSelection() {
    selectedItemIndex = null;
    chipButtons.forEach((btn) =>
      btn.classList.remove("cs-item--selected", "cs-item--wrong")
    );
  }

  function setChipSelection(itemIndex) {
    selectedItemIndex = itemIndex;
    chipButtons.forEach((btn) => {
      const idx = Number(btn.dataset.itemIndex);
      btn.classList.toggle("cs-item--selected", idx === itemIndex);
      if (idx !== itemIndex) {
        btn.classList.remove("cs-item--wrong");
      }
    });

    clearBucketHighlight();
    bucketEls.forEach((b) => b.classList.add("cs-bucket--active"));
  }

  function updateBucketCount(categoryId) {
    const info = bucketMap[categoryId];
    if (!info) return;
    const n = info.count;
    if (info.countEl) {
      info.countEl.textContent = `${n} Begriff${n === 1 ? "" : "e"}`;
    }
  }

  /**
   * Ghost-Animation: Chip fliegt von Pool → Bucket
   */
  function animateChipToBucket(sourceBtn, bodyEl, text, done) {
    if (!sourceBtn || !bodyEl) {
      // fallback: direkt einfügen
      insertChipIntoBucket(bodyEl, text);
      if (typeof done === "function") done();
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const btnRect = sourceBtn.getBoundingClientRect();
    const bodyRect = bodyEl.getBoundingClientRect();

    const ghost = document.createElement("div");
    ghost.className = "cs-chip-ghost";
    ghost.textContent = text;

    const startLeft = btnRect.left - cardRect.left;
    const startTop = btnRect.top - cardRect.top;
    const endLeft = bodyRect.left - cardRect.left + 4;
    const endTop = bodyRect.top - cardRect.top + 4;

    ghost.style.left = `${startLeft}px`;
    ghost.style.top = `${startTop}px`;

    card.appendChild(ghost);

    // Reflow
    void ghost.offsetWidth;

    ghost.style.left = `${endLeft}px`;
    ghost.style.top = `${endTop}px`;
    ghost.style.transform = "scale(0.95)";

    const onTransitionEnd = () => {
      ghost.remove();
      insertChipIntoBucket(bodyEl, text);
      if (typeof done === "function") done();
    };

    ghost.addEventListener("transitionend", onTransitionEnd, { once: true });

    // Fallback
    setTimeout(() => {
      if (document.body.contains(ghost)) {
        ghost.remove();
        insertChipIntoBucket(bodyEl, text);
        if (typeof done === "function") done();
      }
    }, 450);
  }

  function insertChipIntoBucket(bodyEl, text) {
    // Placeholder entfernen, wenn vorhanden
    const placeholder = bodyEl.querySelector(".cs-bucket-placeholder");
    if (placeholder) {
      placeholder.remove();
    }

    const chip = document.createElement("div");
    chip.className = "cs-bucket-chip";
    chip.textContent = text;
    bodyEl.appendChild(chip);
  }

  function handleItemClick(btn) {
    const itemIndex = Number(btn.dataset.itemIndex);
    if (assignedCategoryForItem[itemIndex]) {
      // bereits fest zugeordnet
      return;
    }
    if (btn.classList.contains("cs-item--assigned")) return;

    if (feedbackEl) feedbackEl.textContent = "";

    setChipSelection(itemIndex);
  }

  function handleBucketClick(bucketEl) {
    if (selectedItemIndex === null) {
      if (feedbackEl) {
        feedbackEl.textContent = "Wähle zuerst einen Begriff im Pool aus.";
      }
      return;
    }

    const itemIndex = selectedItemIndex;
    const item = items[itemIndex];
    const selectedCategoryId = bucketEl.dataset.categoryId;

    const isCorrect = item.categoryId === selectedCategoryId;

    if (!isCorrect) {
      // Fehler
      mistakes++;
      const chipBtn = chipButtons.find(
        (b) => Number(b.dataset.itemIndex) === itemIndex
      );
      if (chipBtn) {
        chipBtn.classList.add("cs-item--wrong");
      }
      bucketEl.classList.add("cs-bucket--wrong");

      if (feedbackEl) {
        feedbackEl.textContent =
          "Nicht ganz – probier eine andere Kategorie.";
      }

      // nach kurzer Zeit visuell zurücksetzen
      setTimeout(() => {
        if (chipBtn) {
          chipBtn.classList.remove("cs-item--wrong", "cs-item--selected");
        }
        bucketEl.classList.remove("cs-bucket--wrong", "cs-bucket--active");
        clearBucketHighlight();
        selectedItemIndex = null;
      }, 320);

      return;
    }

    // Korrekte Zuordnung
    assignedCategoryForItem[itemIndex] = selectedCategoryId;
    assignedCount++;

    const bucketInfo = bucketMap[selectedCategoryId];
    if (bucketInfo) {
      bucketInfo.count += 1;
      updateBucketCount(selectedCategoryId);
      bucketInfo.bucketEl.classList.add(
        "cs-bucket--filled",
        "cs-bucket--correct"
      );
    }

    // zugehörigen Pool-Chip optisch festsetzen
    const chipBtn = chipButtons.find(
      (b) => Number(b.dataset.itemIndex) === itemIndex
    );
    if (chipBtn) {
      chipBtn.classList.remove("cs-item--selected");
      chipBtn.classList.add("cs-item--assigned");
      chipBtn.disabled = true;
    }

    // Animation: Chip → Bucket
    const bodyEl = bucketInfo ? bucketInfo.bodyEl : null;
    animateChipToBucket(chipBtn, bodyEl, item.text, () => {
      // nach der Animation Bucket-Pop-Klasse wieder entfernen
      if (bucketInfo) {
        setTimeout(() => {
          bucketInfo.bucketEl.classList.remove("cs-bucket--correct");
        }, 280);
      }

      // Auswahl & Highlights zurücksetzen
      clearChipSelection();
      clearBucketHighlight();

      if (feedbackEl) {
        feedbackEl.textContent = "Richtig sortiert – sehr gut! ✅";
      }

      // Alle Begriffe vergeben?
      if (assignedCount === itemCount) {
        const noMistakes = mistakes === 0;

        if (feedbackEl) {
          let msg;
          if (noMistakes) {
            msg =
              gameData.feedbackCorrect ||
              "Perfekt! Du hast alle Begriffe fehlerfrei sortiert. 🎉";
          } else {
            msg =
              gameData.feedbackWrong ||
              "Gut gemacht! Du hast alles einsortiert – prüfe die Kategorien bei Bedarf nochmal im Theorie-Teil.";
          }
          feedbackEl.textContent = msg;
        }

        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete(noMistakes);
          }
        }, 700);
      }
    });
  }

  // Events registrieren
  chipButtons.forEach((btn) => {
    btn.addEventListener("click", () => handleItemClick(btn));
  });

  bucketEls.forEach((bucketEl) => {
    bucketEl.addEventListener("click", () => handleBucketClick(bucketEl));
  });

}
