// games/game_index.js

// Einzel-Renderer importieren
import { renderSingleChoiceQuiz } from "./single_choice_quiz/single_choice_quiz.js";
import { renderMultipleChoiceQuiz } from "./multiple_choice_quiz/multiple_choice_quiz.js";
import { renderGapFill } from "./gap_fill/gap_fill.js";
import { renderMatchPairs } from "./match_pairs/match_pairs.js";
import { renderOrderSteps } from "./order_steps/order_steps.js";
import { renderTimelineOrder } from "./timeline_order/timeline_order.js";
import { renderCategorySort } from "./category_sort/category_sort.js";
import { renderFlashcards } from "./flashcards/flashcards.js";
import { renderQuickfireStreak } from "./quickfire_streak/quickfire_streak.js";
import { renderScenarioChoice } from "./scenario_choice/scenario_choice.js";
import { renderSentenceBuilder } from "./sentence_builder/sentence_builder.js";
import { renderTrueFalseSwipe } from "./true_false_swipe/true_false_swipe.js";

/**
 * Mapping: gameType -> Render-Funktion
 *
 * gameData.type muss zu einem dieser Keys passen:
 *  - "single_choice_quiz"
 *  - "multiple_choice_quiz"
 *  - "gap_fill"
 *  - "match_pairs"
 *  - "order_steps"
 *  - "timeline_order"
 *  - "category_sort"
 *  - "flashcards"
 *  - "quickfire_streak"
 *  - "scenario_choice"
 */
const GAME_RENDERERS = {
  single_choice_quiz: renderSingleChoiceQuiz,
  multiple_choice_quiz: renderMultipleChoiceQuiz,
  gap_fill: renderGapFill,
  match_pairs: renderMatchPairs,
  order_steps: renderOrderSteps,
  timeline_order: renderTimelineOrder,
  category_sort: renderCategorySort,
  flashcards: renderFlashcards,
  quickfire_streak: renderQuickfireStreak,
  scenario_choice: renderScenarioChoice,
  true_false_swipe: renderTrueFalseSwipe,
  sentence_builder: renderSentenceBuilder,
};

// Optional, falls du irgendwo alle verfügbaren Typen brauchst
const GAME_TYPES = Object.keys(GAME_RENDERERS);

export {
  // Mapping
  GAME_RENDERERS,
  GAME_TYPES,
  // Direkt-Exporte (falls du einzelne Renderer mal gezielt nutzen willst)
  renderSingleChoiceQuiz,
  renderMultipleChoiceQuiz,
  renderGapFill,
  renderMatchPairs,
  renderOrderSteps,
  renderTimelineOrder,
  renderCategorySort,
  renderFlashcards,
  renderQuickfireStreak,
  renderScenarioChoice,
  renderTrueFalseSwipe,
};
