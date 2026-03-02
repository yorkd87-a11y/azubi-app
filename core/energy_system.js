export const MAX_ENERGY = 50;
const ENERGY_PER_QUESTION = 1;

const REGEN_INTERVAL_MINUTES = 1;
const REGEN_AMOUNT_PER_INTERVAL = 1;

const STORAGE_KEY_ENERGY = "kev_azubi_energy";
const STORAGE_KEY_UPDATED_AT = "kev_azubi_energy_updated_at";

let currentStreak = 0;

function nowMs() {
  return Date.now();
}

function loadRawState() {
  let energy = parseInt(localStorage.getItem(STORAGE_KEY_ENERGY), 10);
  let updatedAt = parseInt(localStorage.getItem(STORAGE_KEY_UPDATED_AT), 10);

  if (Number.isNaN(energy)) {
    energy = MAX_ENERGY;
  }
  if (Number.isNaN(updatedAt)) {
    updatedAt = nowMs();
  }

  return { energy, updatedAt };
}

function saveState({ energy, updatedAt }) {
  localStorage.setItem(STORAGE_KEY_ENERGY, String(energy));
  localStorage.setItem(STORAGE_KEY_UPDATED_AT, String(updatedAt));
}

function applyRegeneration({ energy, updatedAt }) {
  const now = nowMs();

  if (energy >= MAX_ENERGY) {
    return { energy, updatedAt: now };
  }

  const diffMs = now - updatedAt;
  const intervalMs = REGEN_INTERVAL_MINUTES * 60 * 1000;
  const passedIntervals = Math.floor(diffMs / intervalMs);

  if (passedIntervals <= 0) {
    return { energy, updatedAt };
  }

  const regenerated = passedIntervals * REGEN_AMOUNT_PER_INTERVAL;
  const newEnergy = Math.min(MAX_ENERGY, energy + regenerated);
  const newUpdatedAt = updatedAt + passedIntervals * intervalMs;

  return { energy: newEnergy, updatedAt: newUpdatedAt };
}

function loadStateWithRegen() {
  let state = loadRawState();
  const beforeEnergy = state.energy;

  state = applyRegeneration(state);

  if (state.energy !== beforeEnergy) {
    saveState(state);
    dispatchEnergyChange(state.energy);
  }

  return state;
}

function dispatchEnergyChange(energy) {
  window.dispatchEvent(
    new CustomEvent("energy:change", {
      detail: { energy, maxEnergy: MAX_ENERGY }
    })
  );
}

function dispatchEnergyBonus(streak, bonus, energyAfterBonus) {
  window.dispatchEvent(
    new CustomEvent("energy:bonus", {
      detail: { streak, bonus, energy: energyAfterBonus, maxEnergy: MAX_ENERGY }
    })
  );
}

function rollSingleBonusSymbol() {
  return Math.random() < 0.58 ? "tube" : "cross";
}

function getBonusConfigForStreak(streak) {
  if (streak === 4) {
    return { reelCount: 4 };
  }
  if (streak === 7) {
    return { reelCount: 6 };
  }
  if (streak === 12) {
    return { reelCount: 10 };
  }
  return null;
}

function createEnergyBonusRoll(reelCount = 6) {
  const symbols = new Array(reelCount).fill(null).map(() => rollSingleBonusSymbol());
  const bonus = symbols.filter((symbol) => symbol === "tube").length;
  return { symbols, bonus };
}

export function initEnergySystem() {
  const state = loadStateWithRegen();
  saveState(state);
  dispatchEnergyChange(state.energy);

  setInterval(() => {
    loadStateWithRegen();
  }, 30_000);
}

export function getEnergy() {
  const state = loadStateWithRegen();
  return state.energy;
}

export function tryConsumeEnergyForQuestion() {
  let state = loadStateWithRegen();

  if (state.energy < ENERGY_PER_QUESTION) {
    dispatchEnergyChange(state.energy);
    return { ok: false, energy: state.energy };
  }

  state.energy = Math.max(0, state.energy - ENERGY_PER_QUESTION);
  state.updatedAt = nowMs();
  saveState(state);
  dispatchEnergyChange(state.energy);

  return { ok: true, energy: state.energy };
}

export function registerQuestionResult(isCorrect, options = {}) {
  const { allowBonus = true } = options;
  if (isCorrect) {
    currentStreak += 1;

    const bonusConfig = getBonusConfigForStreak(currentStreak);
    if (bonusConfig && allowBonus) {
      const roll = createEnergyBonusRoll(bonusConfig.reelCount);
      const energy = grantEnergyBonus(roll.bonus, currentStreak, { dispatchEvent: false });
      return {
        streak: currentStreak,
        bonus: roll.bonus,
        symbols: roll.symbols,
        reelCount: bonusConfig.reelCount,
        energy,
        maxEnergy: MAX_ENERGY
      };
    }
  } else {
    currentStreak = 0;
  }

  return null;
}

export function resetEnergyStreak() {
  currentStreak = 0;
}

export function getCurrentEnergyStreak() {
  return currentStreak;
}

export function grantEnergyBonus(amount, streakForInfo = null, options = {}) {
  const { dispatchEvent = true } = options;
  let state = loadStateWithRegen();
  const before = state.energy;

  state.energy = state.energy + amount;
  saveState(state);

  if (state.energy !== before) {
    dispatchEnergyChange(state.energy);
  }

  if (dispatchEvent) {
    dispatchEnergyBonus(streakForInfo, amount, state.energy);
  }

  return state.energy;
}

export function onEnergyChange(callback) {
  const handler = (event) => {
    callback(event.detail);
  };
  window.addEventListener("energy:change", handler);
  return () => window.removeEventListener("energy:change", handler);
}

export function onEnergyBonus(callback) {
  const handler = (event) => {
    callback(event.detail);
  };
  window.addEventListener("energy:bonus", handler);
  return () => window.removeEventListener("energy:bonus", handler);
}
