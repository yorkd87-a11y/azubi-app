// core/question_history.js
//
// Zentrale Frage-Historie für Azubi-App
// -------------------------------------
// Pro questionId speichern wir aggregierte Infos:
//
// {
//   questionId: "j1_l1_a1_l1_q1",
//   gameType: "single_choice_quiz",
//   topic: "Arbeitsschutz – Handschuhe",
//   firstSeenAt: number (ms),
//   lastAnswerAt: number (ms),
//   timesSeen: number,
//   timesCorrect: number,
//   lastIsCorrect: boolean,
//   questionData: { ... },
//   meta: { ... optional ... }
// }
//
// Diese Struktur passt zu dem, was die Daily Missions brauchen.

const STORAGE_KEY = "kev_question_history_v1";

function nowMs() {
  return Date.now();
}

function loadHistoryMap() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch (e) {
    console.warn("[QuestionHistory] Konnte History nicht laden:", e);
  }
  return {};
}

function saveHistoryMap(map) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch (e) {
    console.warn("[QuestionHistory] Konnte History nicht speichern:", e);
  }
}

/**
 * Registriert einen neuen Antwortversuch für eine Frage.
 *
 * params:
 * {
 *   questionId: string (Pflicht),
 *   gameType?: string,
 *   topic?: string,
 *   isCorrect: boolean,
 *   questionData?: object,
 *   meta?: object,
 *   timestamp?: number (ms) – optional, sonst jetzt
 * }
 */
export function registerQuestionHistory({
  questionId,
  gameType,
  topic,
  isCorrect,
  questionData,
  meta,
  timestamp
}) {
  if (!questionId) return;

  const ts = typeof timestamp === "number" ? timestamp : nowMs();
  const historyMap = loadHistoryMap();
  const existing = historyMap[questionId];

  // Frage-Daten "säubern", damit keine Runtime-Felder drin hängen bleiben
  const safeQuestionData = questionData ? { ...questionData } : {};
  delete safeQuestionData.position;
  delete safeQuestionData.total;
  delete safeQuestionData.__originQuestionId;
  delete safeQuestionData.__dailyPhase;

  let entry;

  if (!existing) {
    // Neuer Eintrag
    entry = {
      questionId,
      gameType: gameType || safeQuestionData.gameType || safeQuestionData.type || null,
      topic: topic || safeQuestionData.topic || null,
      firstSeenAt: ts,
      lastAnswerAt: ts,
      timesSeen: 1,
      timesCorrect: isCorrect ? 1 : 0,
      lastIsCorrect: !!isCorrect,
      questionData: safeQuestionData,
      meta: meta || {}
    };
  } else {
    // Vorhandenen Eintrag aktualisieren
    entry = { ...existing };
    entry.gameType =
      gameType ||
      entry.gameType ||
      safeQuestionData.gameType ||
      safeQuestionData.type ||
      null;

    entry.topic = topic || entry.topic || safeQuestionData.topic || null;

    entry.lastAnswerAt = ts;
    entry.timesSeen = (entry.timesSeen || 0) + 1;

    if (isCorrect) {
      entry.timesCorrect = (entry.timesCorrect || 0) + 1;
    } else {
      entry.timesCorrect = entry.timesCorrect || 0;
    }

    entry.lastIsCorrect = !!isCorrect;

    if (!entry.questionData || Object.keys(entry.questionData).length === 0) {
      entry.questionData = safeQuestionData;
    }

    entry.meta = {
      ...(entry.meta || {}),
      ...(meta || {})
    };
  }

  historyMap[questionId] = entry;
  saveHistoryMap(historyMap);
}

/**
 * Gibt alle History-Einträge (Array) zurück.
 * → wird von Daily Missions benutzt.
 */
export function getAllHistoryEntries() {
  const map = loadHistoryMap();
  return Object.values(map);
}

/**
 * Debug / Reset (optional)
 */
export function clearQuestionHistory() {
  localStorage.removeItem(STORAGE_KEY);
}
