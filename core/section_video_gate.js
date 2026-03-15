import {
  getSectionProgress,
  isSectionVideoUnlocked,
  isSectionVideoWatched
} from "./section_progress.js";

function normalizeVideoConfig(section) {
  const rawVideo = section?.video || null;
  const rawUrl = section?.videoUrl || rawVideo?.url || "";

  return {
    url: rawUrl,
    required: rawVideo?.required !== false,
    unlockAfterQuiz: rawVideo?.unlockAfterQuiz !== false,
    ctaLabel: rawVideo?.ctaLabel || "Video starten",
    doneLabel: rawVideo?.doneLabel || "Video gesehen"
  };
}

export function getSectionVideoGate(section) {
  const progress = getSectionProgress(section?.id || "");
  const video = normalizeVideoConfig(section);

  return {
    sectionId: section?.id || "",
    hasVideo: Boolean(video.url),
    videoUrl: video.url,
    videoRequired: video.required,
    unlockAfterQuiz: video.unlockAfterQuiz,
    ctaLabel: video.ctaLabel,
    doneLabel: video.doneLabel,
    progress
  };
}

export function getSectionSeparatorUiState(section, options = {}) {
  const gate = getSectionVideoGate(section);
  const justUnlockedSectionId = options.justUnlockedSectionId || "";

  if (!gate.hasVideo) {
    return {
      ...gate,
      state: "hidden",
      showCta: false,
      isAnimated: false,
      isLocked: false
    };
  }

  if (isSectionVideoWatched(gate.sectionId)) {
    return {
      ...gate,
      state: "done",
      showCta: true,
      isAnimated: false,
      isLocked: false,
      buttonLabel: gate.doneLabel
    };
  }

  if (isSectionVideoUnlocked(gate.sectionId)) {
    return {
      ...gate,
      state: "available",
      showCta: true,
      isAnimated: gate.sectionId === justUnlockedSectionId,
      isLocked: false,
      buttonLabel: gate.ctaLabel
    };
  }

  return {
    ...gate,
    state: "locked",
    showCta: false,
    isAnimated: false,
    isLocked: true,
    buttonLabel: gate.ctaLabel
  };
}

export function canUnlockNextSectionAfterVideo(section) {
  const gate = getSectionVideoGate(section);
  return gate.hasVideo && gate.videoRequired;
}

export function shouldHoldSectionBoundary(section) {
  const gate = getSectionVideoGate(section);
  return gate.hasVideo && gate.unlockAfterQuiz;
}
