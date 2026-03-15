const LEVEL_TRANSITION_STORAGE_KEY = "friseurTrainerLevelTransitionProgress_v1";

function loadTransitionMap() {
  try {
    const raw = localStorage.getItem(LEVEL_TRANSITION_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Level-Transition-Fortschritt konnte nicht geladen werden:", error);
    return {};
  }
}

function saveTransitionMap(progressMap) {
  try {
    localStorage.setItem(LEVEL_TRANSITION_STORAGE_KEY, JSON.stringify(progressMap || {}));
  } catch (error) {
    console.warn("Level-Transition-Fortschritt konnte nicht gespeichert werden:", error);
  }
}

export function isLevelTransitionWatched(levelId) {
  return loadTransitionMap()[levelId] === true;
}

export function markLevelTransitionWatched(levelId) {
  if (!levelId) return;
  const progressMap = loadTransitionMap();
  progressMap[levelId] = true;
  saveTransitionMap(progressMap);
}

export function resetLevelTransitionWatched(levelId) {
  if (!levelId) return;
  const progressMap = loadTransitionMap();
  delete progressMap[levelId];
  saveTransitionMap(progressMap);
}
