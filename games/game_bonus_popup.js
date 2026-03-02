const ENERGY_ICON_SRC = "./media/Bilder/Icons/Farbtupe-Energie.png";

function createSpinSequence(finalSymbol) {
  const symbols = [];
  const pool = ["tube", "cross", "tube", "cross", "cross", "tube"];
  for (let i = 0; i < 9; i += 1) {
    symbols.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  symbols.push(finalSymbol);
  return symbols;
}

function renderSymbol(symbol) {
  if (symbol === "tube") {
    return `
      <span class="gm-energy-slot-symbol gm-energy-slot-symbol--tube">
        <img src="${ENERGY_ICON_SRC}" alt="Energie">
      </span>
    `;
  }

  return `
    <span class="gm-energy-slot-symbol gm-energy-slot-symbol--cross" aria-label="Kein Bonus">
      ×
    </span>
  `;
}

function renderSlot(slotId, finalSymbol) {
  const sequence = createSpinSequence(finalSymbol);
  return `
    <div class="gm-energy-slot" data-slot-id="${slotId}">
      <div class="gm-energy-slot-inner">
        ${sequence.map((symbol) => renderSymbol(symbol)).join("")}
      </div>
    </div>
  `;
}

function renderHeatBars(count, total) {
  return new Array(total)
    .fill(null)
    .map((_, index) => {
      const activeClass = index < count ? " gm-energy-result-bar--active" : "";
      return `<span class="gm-energy-result-bar${activeClass}"></span>`;
    })
    .join("");
}

function renderResultSymbols(symbols) {
  return symbols
    .map((symbol) => {
      const extraClass = symbol === "tube"
        ? " gm-energy-bonus-result-symbol--tube"
        : " gm-energy-bonus-result-symbol--cross";
      return `
        <span class="gm-energy-bonus-result-symbol${extraClass}">
          ${renderSymbol(symbol)}
        </span>
      `;
    })
    .join("");
}

function setPhase(popup, phase) {
  popup.dataset.phase = phase;
  popup.classList.toggle("gm-energy-bonus--results", phase === "results");
}

function formatEnergyAfterValue(energy, maxEnergy) {
  if (!Number.isFinite(Number(energy))) {
    return "0";
  }
  if (Number(energy) > Number(maxEnergy)) {
    return String(energy);
  }
  return `${energy}/${maxEnergy}`;
}

function animateTubeFlights(popup, overlay, bonus, energyAfter, maxEnergy) {
  const targetEl = overlay.querySelector(".gm-energy");
  const targetValueEl = overlay.querySelector(".gm-energy-value");
  const tubeEls = [...popup.querySelectorAll(".gm-energy-bonus-result-symbol--tube")];

  if (!targetEl || !targetValueEl) {
    return Promise.resolve();
  }

  const startEnergy = parseInt(targetValueEl.textContent, 10);
  let currentEnergy = Number.isNaN(startEnergy)
    ? Math.max(0, (Number(energyAfter) || 0) - bonus)
    : startEnergy;

  if (bonus <= 0 || tubeEls.length === 0) {
    targetValueEl.textContent = String(energyAfter);
    targetEl.classList.add("gm-energy--pulse");
    setTimeout(() => targetEl.classList.remove("gm-energy--pulse"), 420);
    return new Promise((resolve) => setTimeout(resolve, 260));
  }

  return new Promise((resolve) => {
    let completed = 0;
    const targetRect = targetEl.getBoundingClientRect();

    const flights = tubeEls.map((tubeEl) => {
      const sourceRect = tubeEl.getBoundingClientRect();
      const clone = document.createElement("img");
      clone.className = "gm-energy-flight-tube";
      clone.src = ENERGY_ICON_SRC;
      clone.alt = "";
      clone.style.left = `${sourceRect.left + sourceRect.width / 2 - 14}px`;
      clone.style.top = `${sourceRect.top + sourceRect.height / 2 - 14}px`;
      document.body.appendChild(clone);

      const sourceCenterX = sourceRect.left + sourceRect.width / 2;
      const sourceCenterY = sourceRect.top + sourceRect.height / 2;
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;

      return {
        clone,
        sourceCenterX,
        sourceCenterY,
        targetCenterX,
        targetCenterY
      };
    });

    requestAnimationFrame(() => {
      flights.forEach(({ clone }, index) => {
        const driftX = (index - (flights.length - 1) / 2) * 10;
        const dropY = 22 + index * 3;
        clone.classList.add("gm-energy-flight-tube--drop");
        clone.style.transform = `translate(${driftX}px, ${dropY}px) scale(2.2) rotate(${(index - 2.5) * 4}deg)`;
      });

      setTimeout(() => {
        flights.forEach(({ clone }, index) => {
          const floatX = (index - (flights.length - 1) / 2) * 14;
          const floatY = -96 - index * 4;
          clone.classList.remove("gm-energy-flight-tube--drop");
          clone.classList.add("gm-energy-flight-tube--float");
          clone.style.transform = `translate(${floatX}px, ${floatY}px) scale(1.85) rotate(${(index - 2.5) * 3}deg)`;
        });

        setTimeout(() => {
          [...flights].reverse().forEach((flight, reverseIndex) => {
            setTimeout(() => {
              const {
                clone,
                sourceCenterX,
                sourceCenterY,
                targetCenterX,
                targetCenterY
              } = flight;
              const launchOriginY = -96 - (flights.length - 1 - reverseIndex) * 4;
              const launchOriginX = ((flights.length - 1 - reverseIndex) - (flights.length - 1) / 2) * 14;
              const rocketTilt = targetCenterX >= sourceCenterX ? 16 : -16;

              clone.classList.remove("gm-energy-flight-tube--float");
              clone.classList.add("gm-energy-flight-tube--cruise");
              clone.style.transform = `translate(${targetCenterX - sourceCenterX + launchOriginX}px, ${targetCenterY - sourceCenterY + launchOriginY}px) scale(0.28) rotate(${rocketTilt}deg)`;
              clone.style.opacity = "0.1";

              setTimeout(() => {
                clone.remove();
                currentEnergy = Math.min(Number(energyAfter) || currentEnergy, currentEnergy + 1);
                targetValueEl.textContent = String(currentEnergy);
                targetEl.classList.remove("gm-energy--pulse");
                void targetEl.offsetWidth;
                targetEl.classList.add("gm-energy--pulse");

                completed += 1;
                if (completed >= bonus) {
                  setTimeout(() => {
                    targetEl.classList.remove("gm-energy--pulse");
                    resolve();
                  }, 320);
                }
              }, 620);
            }, reverseIndex * 160);
          });
        }, 460);
      }, 260);
    });
  });
}

export function showEnergyBonusPopup(overlay, { streak, bonus, symbols = [], reelCount, energy, maxEnergy }) {
  const existing = overlay.querySelector(".gm-energy-bonus");
  if (existing) existing.remove();

  const resolvedReelCount = Math.max(1, Number(reelCount) || symbols.length || Math.max(0, Math.min(10, Number(bonus) || 0)) || 6);
  const finalSymbols = Array.isArray(symbols) && symbols.length === resolvedReelCount
    ? symbols
    : new Array(Math.max(0, Math.min(resolvedReelCount, Number(bonus) || 0))).fill("tube")
        .concat(new Array(resolvedReelCount - Math.max(0, Math.min(resolvedReelCount, Number(bonus) || 0))).fill("cross"));
  const resolvedBonus = finalSymbols.filter((symbol) => symbol === "tube").length;
  const slotColumns = Math.min(finalSymbols.length, 5);

  return new Promise((resolve) => {
    const popup = document.createElement("div");
    popup.className = "gm-energy-bonus";
    popup.dataset.phase = "slots";
    popup.innerHTML = `
      <div class="gm-energy-bonus-flash"></div>

      <div class="gm-energy-bonus-phase gm-energy-bonus-phase--slots">
        <div class="gm-energy-bonus-header">
          <div class="gm-energy-bonus-kicker">Serienbonus wird gezogen</div>
          <div class="gm-energy-bonus-title">${streak || 0} Richtige in Folge</div>
        </div>

        <div class="gm-energy-bonus-slots" style="grid-template-columns: repeat(${slotColumns}, minmax(0, 1fr));">
          ${finalSymbols.map((symbol, index) => renderSlot(index + 1, symbol)).join("")}
        </div>

        <div class="gm-energy-bonus-footnote">
          ${resolvedReelCount} Walzen · Jede goldene Tube gibt dir 1 Energie
        </div>
      </div>

      <div class="gm-energy-bonus-phase gm-energy-bonus-phase--results">
        <div class="gm-energy-bonus-result-card">
          <div class="gm-energy-bonus-result-kicker">Energieschub</div>
          <div class="gm-energy-bonus-result-title">+${resolvedBonus} Energie</div>
          <div class="gm-energy-bonus-result-subtitle">
            ${resolvedBonus} ${resolvedBonus === 1 ? "Tube" : "Tuben"} gezogen
          </div>
          <div class="gm-energy-bonus-result-symbols" style="grid-template-columns: repeat(${slotColumns}, minmax(0, 1fr));">
            ${renderResultSymbols(finalSymbols)}
          </div>
          <div class="gm-energy-bonus-result-meter">
            ${renderHeatBars(resolvedBonus, resolvedReelCount)}
          </div>
          <div class="gm-energy-bonus-result-energy">
            Energie jetzt: ${formatEnergyAfterValue(energy, maxEnergy)}
          </div>
        </div>
      </div>
    `;

    overlay.appendChild(popup);

    const slotElements = [...popup.querySelectorAll(".gm-energy-slot")];
    let finished = false;

    const closePopup = () => {
      if (finished) return;
      finished = true;
      popup.classList.add("gm-energy-bonus--hide");
      setTimeout(() => {
        popup.remove();
        resolve();
      }, 420);
    };

    popup.classList.add("gm-energy-bonus--visible");

    slotElements.forEach((slotEl, index) => {
      const stopDelay = 1100 + index * 320;
      slotEl.classList.add("gm-energy-slot--spinning");

      if (index === slotElements.length - 1) {
        setTimeout(() => {
          slotEl.classList.add("gm-energy-slot--turbo");
        }, Math.max(0, stopDelay - 360));
      }

      setTimeout(() => {
        slotEl.classList.remove("gm-energy-slot--spinning", "gm-energy-slot--turbo");
        slotEl.classList.add("gm-energy-slot--landing");

        setTimeout(() => {
          slotEl.classList.remove("gm-energy-slot--landing");
          slotEl.classList.add("gm-energy-slot--final");
          slotEl.innerHTML = `
            <div class="gm-energy-slot-inner gm-energy-slot-inner--settled">
              ${renderSymbol(finalSymbols[index])}
            </div>
          `;

          if (index === slotElements.length - 1) {
            setTimeout(() => {
              setPhase(popup, "results");
              setTimeout(() => {
                animateTubeFlights(popup, overlay, resolvedBonus, energy, maxEnergy).then(() => {
                  setTimeout(() => {
                    closePopup();
                  }, 420);
                });
              }, 900);
            }, 620);
          }
        }, 560);
      }, stopDelay);
    });
  });
}
