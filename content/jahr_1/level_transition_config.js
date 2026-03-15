export const YEAR_1_LEVEL_TRANSITIONS = {
  jahr1_level2: {
    levelId: "jahr1_level2",
    title: "Breakpoint Level 2",
    videoUrls: [
      "./media/videos/level up/Level geschafft.mp4",
      "./media/videos/level up/Level geschafft_1.mp4",
      "./media/videos/level up/Level geschafft_2.mp4",
      "./media/videos/level up/Level geschafft_3.mp4"
    ],
    autoPlayOnReach: true
  }
};

export function getYear1LevelTransition(levelId) {
  return YEAR_1_LEVEL_TRANSITIONS[levelId] || null;
}
