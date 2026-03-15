const SECTION_PROGRESS_STORAGE_KEY = "friseurTrainerSectionProgress_v1";

function loadSectionProgressMap() {
  try {
    const raw = localStorage.getItem(SECTION_PROGRESS_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("Abschnitts-Fortschritt konnte nicht geladen werden:", error);
    return {};
  }
}

function saveSectionProgressMap(progressMap) {
  try {
    localStorage.setItem(
      SECTION_PROGRESS_STORAGE_KEY,
      JSON.stringify(progressMap || {})
    );
  } catch (error) {
    console.warn("Abschnitts-Fortschritt konnte nicht gespeichert werden:", error);
  }
}

function buildDefaultSectionProgress(sectionId) {
  return {
    sectionId,
    quizCompleted: false,
    videoUnlocked: false,
    videoWatched: false,
    completed: false,
    updatedAt: null
  };
}

function updateSectionProgress(sectionId, mutate) {
  if (!sectionId) return buildDefaultSectionProgress("");

  const progressMap = loadSectionProgressMap();
  const current = progressMap[sectionId] || buildDefaultSectionProgress(sectionId);
  const next = {
    ...current,
    ...mutate(current),
    sectionId,
    updatedAt: new Date().toISOString()
  };

  progressMap[sectionId] = next;
  saveSectionProgressMap(progressMap);
  return next;
}

export function getSectionProgressMap() {
  return loadSectionProgressMap();
}

export function getSectionProgress(sectionId) {
  const progressMap = loadSectionProgressMap();
  return progressMap[sectionId] || buildDefaultSectionProgress(sectionId);
}

export function markSectionQuizCompleted(sectionId) {
  return updateSectionProgress(sectionId, () => ({
    quizCompleted: true,
    videoUnlocked: true
  }));
}

export function unlockSectionVideo(sectionId) {
  return updateSectionProgress(sectionId, () => ({
    videoUnlocked: true
  }));
}

export function markSectionVideoWatched(sectionId) {
  return updateSectionProgress(sectionId, () => ({
    videoUnlocked: true,
    videoWatched: true,
    completed: true
  }));
}

export function markSectionCompleted(sectionId) {
  return updateSectionProgress(sectionId, () => ({
    completed: true
  }));
}

export function resetSectionProgress(sectionId) {
  if (!sectionId) return;
  const progressMap = loadSectionProgressMap();
  delete progressMap[sectionId];
  saveSectionProgressMap(progressMap);
}

export function clearAllSectionProgress() {
  saveSectionProgressMap({});
}

export function isSectionQuizCompleted(sectionId) {
  return getSectionProgress(sectionId).quizCompleted === true;
}

export function isSectionVideoUnlocked(sectionId) {
  return getSectionProgress(sectionId).videoUnlocked === true;
}

export function isSectionVideoWatched(sectionId) {
  return getSectionProgress(sectionId).videoWatched === true;
}

export function isSectionCompleted(sectionId) {
  return getSectionProgress(sectionId).completed === true;
}
