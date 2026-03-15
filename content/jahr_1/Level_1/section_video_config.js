const LEVEL_1_SECTION_VIDEO_DIR =
  "./media/videos/Abschnitte/Lehrjahr 1 - Level 1 - Abschnitte";

export const LEVEL_1_SECTION_VIDEO_CONFIG = {
  j1_l1_a1: null,
  j1_l1_a2: {
    url: `${LEVEL_1_SECTION_VIDEO_DIR}/Abschnitt 1 Ende-Start Abschnitt 2.mp4`,
    required: true,
    unlockAfterQuiz: true,
    ctaLabel: "Ok Let's go.",
    doneLabel: "Video gesehen"
  },
  j1_l1_a3: {
    url: `${LEVEL_1_SECTION_VIDEO_DIR}/Ende Abshnitt 2 - Anfang Abschnitt 3.mp4`,
    required: true,
    unlockAfterQuiz: true,
    ctaLabel: "Starten wir.",
    doneLabel: "Video gesehen"
  },
  j1_l1_a4: {
    url: `${LEVEL_1_SECTION_VIDEO_DIR}/Ende Abschnitt 3 - Anfang Abschnitt 4.mp4`,
    required: true,
    unlockAfterQuiz: true,
    ctaLabel: "Starten wir.",
    doneLabel: "Video gesehen"
  }
};

export function getLevel1SectionVideoConfig(sectionId) {
  return LEVEL_1_SECTION_VIDEO_CONFIG[sectionId] || null;
}
