import {
  getSectionProgress,
  markSectionQuizCompleted,
  markSectionVideoWatched,
  unlockSectionVideo,
  isSectionVideoUnlocked,
  isSectionVideoWatched
} from "./section_progress.js";
import {
  getSectionVideoGate,
  getSectionSeparatorUiState,
  shouldHoldSectionBoundary
} from "./section_video_gate.js";

function getSafeSections(level) {
  return Array.isArray(level?.sections) ? level.sections : [];
}

export function getSectionById(level, sectionId) {
  return getSafeSections(level).find((section) => section?.id === sectionId) || null;
}

export function getNextSection(level, sectionId) {
  const sections = getSafeSections(level);
  const index = sections.findIndex((section) => section?.id === sectionId);
  if (index < 0) return null;
  return sections[index + 1] || null;
}

export function getSectionVideoFlowState(level, sectionId, options = {}) {
  const section = getSectionById(level, sectionId);
  if (!section) return null;

  return {
    section,
    progress: getSectionProgress(section.id),
    gate: getSectionVideoGate(section),
    separatorUi: getSectionSeparatorUiState(section, options),
    nextSection: getNextSection(level, section.id)
  };
}

export function completeSectionQuiz(level, sectionId) {
  const section = getSectionById(level, sectionId);
  if (!section) return null;

  if (!shouldHoldSectionBoundary(section)) {
    return {
      section,
      progress: getSectionProgress(section.id),
      gate: getSectionVideoGate(section),
      nextSection: getNextSection(level, section.id),
      shouldShowVideoGate: false
    };
  }

  const progress = markSectionQuizCompleted(section.id);
  return {
    section,
    progress,
    gate: getSectionVideoGate(section),
    nextSection: getNextSection(level, section.id),
    shouldShowVideoGate: true
  };
}

export function forceUnlockSectionVideo(level, sectionId) {
  const section = getSectionById(level, sectionId);
  if (!section) return null;

  const progress = unlockSectionVideo(section.id);
  return {
    section,
    progress,
    gate: getSectionVideoGate(section)
  };
}

export function completeSectionVideo(level, sectionId) {
  const section = getSectionById(level, sectionId);
  if (!section) return null;

  const progress = markSectionVideoWatched(section.id);
  return {
    section,
    progress,
    gate: getSectionVideoGate(section),
    nextSection: getNextSection(level, section.id)
  };
}

export function canAccessSectionLessons(level, sectionId) {
  const sections = getSafeSections(level);
  const index = sections.findIndex((section) => section?.id === sectionId);
  if (index <= 0) return true;

  const previousSection = sections[index - 1];
  if (!previousSection) return true;

  const previousGate = getSectionVideoGate(previousSection);
  if (!previousGate.hasVideo || !previousGate.videoRequired) {
    return true;
  }

  return isSectionVideoWatched(previousSection.id);
}

export function getJustUnlockedSectionVideoId(level) {
  const sections = getSafeSections(level);
  const unlocked = sections.find((section) => {
    if (!section?.id) return false;
    return isSectionVideoUnlocked(section.id) && !isSectionVideoWatched(section.id);
  });
  return unlocked?.id || "";
}
