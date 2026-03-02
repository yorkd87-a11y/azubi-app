// core/progress_store.js

const STORAGE_KEY_LESSON_RESULTS = "kev_lesson_results";
const STORAGE_KEY_STREAK_BONUS_LESSONS = "kev_streak_bonus_lessons";

/**
 * Struktur in localStorage:
 * {
 *   "j1_l1_a1_l1": { correct: 12, total: 15 },
 *   "j1_l1_a1_l2": { correct: 10, total: 15 },
 *   ...
 * }
 */

// Prozent für eine Lesson holen
export function getLessonCompletionPercent(lessonId) {
  if (!lessonId) return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_LESSON_RESULTS);
    if (!raw) return null;

    const data = JSON.parse(raw);
    const entry = data[lessonId];
    if (!entry || !entry.total || entry.total <= 0) return null;

    const percent = Math.round((entry.correct / entry.total) * 100);
    return Math.max(0, Math.min(100, percent));
  } catch (e) {
    console.warn("getLessonCompletionPercent error", e);
    return null;
  }
}

// Nach jeder beantworteten Frage aufrufen
export function registerAnswerForLesson(lessonId, { isCorrect }) {
  if (!lessonId) return;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_LESSON_RESULTS);
    const data = raw ? JSON.parse(raw) : {};

    let entry = data[lessonId];
    if (!entry) {
      entry = { correct: 0, total: 0 };
    }

    entry.total += 1;
    if (isCorrect) {
      entry.correct += 1;
    }

    data[lessonId] = entry;
    localStorage.setItem(STORAGE_KEY_LESSON_RESULTS, JSON.stringify(data));
  } catch (e) {
    console.warn("registerAnswerForLesson error", e);
  }
}

// Optional: Lesson zurücksetzen, falls du später einen „nochmal von vorne“-Button willst
export function resetLessonProgress(lessonId) {
  if (!lessonId) return;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_LESSON_RESULTS);
    if (!raw) return;
    const data = JSON.parse(raw);
    delete data[lessonId];
    localStorage.setItem(STORAGE_KEY_LESSON_RESULTS, JSON.stringify(data));
  } catch (e) {
    console.warn("resetLessonProgress error", e);
  }
}

export function hasConsumedLessonStreakBonus(lessonId) {
  if (!lessonId) return false;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_STREAK_BONUS_LESSONS);
    if (!raw) return false;
    const data = JSON.parse(raw);
    return !!data[lessonId];
  } catch (e) {
    console.warn("hasConsumedLessonStreakBonus error", e);
    return false;
  }
}

export function consumeLessonStreakBonus(lessonId) {
  if (!lessonId) return;

  try {
    const raw = localStorage.getItem(STORAGE_KEY_STREAK_BONUS_LESSONS);
    const data = raw ? JSON.parse(raw) : {};
    data[lessonId] = true;
    localStorage.setItem(STORAGE_KEY_STREAK_BONUS_LESSONS, JSON.stringify(data));
  } catch (e) {
    console.warn("consumeLessonStreakBonus error", e);
  }
}
