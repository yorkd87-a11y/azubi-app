// core/daily_missions.js
//
// Daily Missions – Spaced Repetition System mit 2 Pools
// ------------------------------------------------------
// Pool 1 (Kurzzeit):
//   - enthält alle falsch beantworteten Fragen
//   - plus Fragen, deren letzte Antwort >= 21 Tage her ist
//   - Fragen dürfen hier max. 10x in Daily Missions vorkommen
//   - danach wandern sie in Pool 2
//
// Pool 2 (120-Tage-Pool):
//   - hier landen Fragen nach 10 Daily-Mission-Wiederholungen aus Pool 1
//   - sie dürfen nur gezogen werden, wenn die letzte Daily-Mission-Abfrage >= 120 Tage her ist
//   - max. 5 Fragen aus Pool 2 pro Daily Mission
//   - jede Frage darf hier max. 5x abgefragt werden
//   - wird eine Frage aus Pool 2 falsch beantwortet → zurück in Pool 1 (Zähler reset)
//
// Daily Missions:
//   - kosten KEINE Energie
//   - jede richtige Antwort gibt +1 Energie, auch über 50 hinaus
//
// Datenquellen:
//   - historyEntries (globales Frage-Tracking) werden extern übergeben
//   - dailyState (Status für Pools & Zähler) wird hier in localStorage gemanaged

import { GAME_RENDERERS } from "../games/game_index.js";
import { getEnergy } from "./energy_system.js";
import { registerQuestionHistory } from "./question_history.js";
import { extractIsCorrect, randomisiereSpielDaten } from "../games/game_utils.js";

const ENERGY_ICON_SRC = "./media/Bilder/Icons/Farbtupe-Energie.png";

// -----------------------------
// Konfiguration
// -----------------------------

const DAILY_MIN_QUESTIONS = 5;
const DAILY_MAX_QUESTIONS = 30;

// Pool 1 (Kurzzeit)
const SHORT_POOL_MAX_REPEATS = 10; // max. 10x in Daily Missions

// Pool 2 (120-Tage-Pool)
const LONG_POOL_MAX_REPEATS = 5;   // max. 5x in Daily Missions
const MAX_FROM_LONG_POOL = 5;      // max. 5 Fragen aus Pool 2 pro Daily Mission

// Zeitfenster
const DAYS_21 = 21;
const DAYS_120 = 120;

// localStorage Keys
const STORAGE_KEY_ENERGY = "kev_azubi_energy";
const STORAGE_KEY_UPDATED_AT = "kev_azubi_energy_updated_at";
const STORAGE_KEY_DAILY_STATE = "kev_daily_mission_state_v1";

// -----------------------------
// Hilfsfunktionen Zeit
// -----------------------------

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function nowMs() {
  return Date.now();
}

// -----------------------------
// Bonus-Energie für Daily Missions
// -----------------------------

/**
 * Gibt dem Nutzer Bonus-Energie für Daily Missions.
 * Geht bewusst ÜBER das normale Energie-Limit hinaus,
 * indem direkt in localStorage geschrieben wird.
 */
function grantDailyMissionEnergyBonus(amount = 1) {
  const raw = parseInt(localStorage.getItem(STORAGE_KEY_ENERGY), 10);
  const fallback = typeof getEnergy === "function" ? getEnergy() : 0;
  const current = Number.isNaN(raw) ? fallback : raw;

  const next = current + amount;

  localStorage.setItem(STORAGE_KEY_ENERGY, String(next));
  localStorage.setItem(STORAGE_KEY_UPDATED_AT, String(nowMs()));
}

// -----------------------------
// Daily-Mission-State (Pools & Zähler) in localStorage
// -----------------------------

/**
 * dailyState Struktur:
 *
 * {
 *   [questionId]: {
 *     phase: "short" | "long" | "off", // "off" = nicht mehr in Daily Missions
 *     shortCount: number,              // wie oft in Pool 1 gespielt
 *     longCount: number,               // wie oft in Pool 2 gespielt
 *     lastAskedAt: number | null,      // letzte Daily-Mission-Abfrage (ms)
 *     movedToLongAt?: number           // Zeitpunkt des Übergangs in Pool 2 (ms)
 *   },
 *   ...
 * }
 */

function loadDailyState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DAILY_STATE);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch (e) {
    console.warn("[DailyMission] Konnte dailyState nicht laden:", e);
  }
  return {};
}

function saveDailyState(state) {
  try {
    localStorage.setItem(STORAGE_KEY_DAILY_STATE, JSON.stringify(state));
  } catch (e) {
    console.warn("[DailyMission] Konnte dailyState nicht speichern:", e);
  }
}

function getOrCreateQuestionState(questionId, state) {
  if (!questionId) return null;
  if (!state[questionId]) {
    state[questionId] = {
      phase: "short",
      shortCount: 0,
      longCount: 0,
      lastAskedAt: null,
      movedToLongAt: null
    };
  } else {
    const s = state[questionId];
    if (!s.phase) s.phase = "short";
    if (typeof s.shortCount !== "number") s.shortCount = 0;
    if (typeof s.longCount !== "number") s.longCount = 0;
  }
  return state[questionId];
}

// -----------------------------
// Question-Pool Logik
// -----------------------------

/**
 * Erwartete Struktur eines History-Eintrags:
 *
 * {
 *   questionId: "j1_l1_a1_l1_q4",
 *   gameType: "single_choice_quiz",
 *   topic: "Arbeitsschutz Basics",
 *   firstSeenAt: number (ms),
 *   lastAnswerAt: number (ms),
 *   timesSeen: number,
 *   timesCorrect: number,
 *   lastIsCorrect: boolean,
 *   questionData: { ... gameData, gameType, topic ... }
 * }
 */

/**
 * Baut aus History + dailyState den Sammelpool für die Daily Mission.
 * - Pool 1: falsche Antworten + 21-Tage-Regel
 * - Pool 2: 120-Tage-Regel, max. 5 Fragen
 */
function buildDailyMissionPool(historyEntries, dailyState, now = nowMs()) {
  if (!Array.isArray(historyEntries) || historyEntries.length === 0) {
    return [];
  }

  const threshold21 = now - DAYS_21 * MS_PER_DAY;
  const threshold120 = now - DAYS_120 * MS_PER_DAY;

  const shortCandidates = [];
  const longCandidates = [];

  for (const entry of historyEntries) {
    if (!entry || !entry.questionId) continue;

    const qid = entry.questionId;
    const state = getOrCreateQuestionState(qid, dailyState);
    if (!state) continue;

    // Phase normalisieren
    if (state.phase === "off") {
      continue; // komplett aus Daily Missions entfernt
    }
    if (state.shortCount >= SHORT_POOL_MAX_REPEATS && state.phase === "short") {
      // Sicherheitsnetz: falls aus irgendeinem Grund nicht umgeschaltet wurde
      state.phase = "long";
      state.movedToLongAt = state.lastAskedAt || now;
    }
    if (state.longCount >= LONG_POOL_MAX_REPEATS && state.phase === "long") {
      state.phase = "off"; // hier sind wir durch
      continue;
    }

    const lastAnswerAt = typeof entry.lastAnswerAt === "number"
      ? entry.lastAnswerAt
      : (typeof entry.firstSeenAt === "number" ? entry.firstSeenAt : null);

    const isWrong = entry.lastIsCorrect === false;
    const lastAskedDaily = state.lastAskedAt || lastAnswerAt;

    // --- Pool 2 Kandidaten (phase = long) ---
    if (state.phase === "long") {
      if (state.longCount >= LONG_POOL_MAX_REPEATS) {
        continue;
      }
      if (!lastAskedDaily) {
        continue;
      }
      // Nur, wenn die letzte Daily-Mission-Abfrage >= 120 Tage zurückliegt
      if (lastAskedDaily <= threshold120) {
        longCandidates.push({
          entry,
          phase: "long",
          state
        });
      }
      continue;
    }

    // --- Pool 1 Kandidaten (phase = short oder Default) ---
    if (state.phase === "short") {
      if (state.shortCount >= SHORT_POOL_MAX_REPEATS) {
        // Wird oben schon in "long" verschoben
        continue;
      }

      const isOlder21 = lastAnswerAt && lastAnswerAt <= threshold21;

      // In Pool 1 sollen alle falschen Antworten
      // und alle Fragen, deren letzte Antwort >= 21 Tage her ist.
      if (isWrong || isOlder21) {
        shortCandidates.push({
          entry,
          phase: "short",
          state
        });
      }
    }
  }

  // Sortierung Pool 1:
  // 1. falsche Antworten zuerst
  // 2. ältere Fragen zuerst (nach lastAnswerAt)
  shortCandidates.sort((a, b) => {
    const aw = a.entry.lastIsCorrect === false ? 1 : 0;
    const bw = b.entry.lastIsCorrect === false ? 1 : 0;
    if (aw !== bw) return bw - aw;
    const at = a.entry.lastAnswerAt || 0;
    const bt = b.entry.lastAnswerAt || 0;
    return at - bt; // älter (kleiner) zuerst
  });

  // Sortierung Pool 2:
  // ältere Daily-Mission-Abfragen zuerst
  longCandidates.sort((a, b) => {
    const at = a.state.lastAskedAt || a.entry.lastAnswerAt || 0;
    const bt = b.state.lastAskedAt || b.entry.lastAnswerAt || 0;
    return at - bt;
  });

  const combined = [];

  // Erst Pool 1 auffüllen (bis max. DAILY_MAX_QUESTIONS)
  for (let i = 0; i < shortCandidates.length && combined.length < DAILY_MAX_QUESTIONS; i++) {
    combined.push(shortCandidates[i]);
  }

  // Dann Pool 2, max. 5 Fragen und nur, wenn noch Platz ist
  const remainingSlots = DAILY_MAX_QUESTIONS - combined.length;
  if (remainingSlots > 0 && longCandidates.length > 0) {
    const maxLong = Math.min(remainingSlots, MAX_FROM_LONG_POOL, longCandidates.length);
    for (let i = 0; i < maxLong; i++) {
      combined.push(longCandidates[i]);
    }
  }

  if (combined.length < DAILY_MIN_QUESTIONS) {
    return [];
  }

  return combined;
}

/**
 * Konvertiert den Pool in konkrete gameData-Objekte,
 * die wir mit den vorhandenen Renderern spielen können.
 */
function mapPoolToGameData(pool) {
  const total = pool.length;
  return pool.map((item, index) => {
    const entry = item.entry;
    const base = entry.questionData || {};

    return {
      ...base,
      id: base.id || entry.questionId,
      gameType: base.gameType || entry.gameType,
      topic: base.topic || entry.topic || "Daily Mission",
      position: index + 1,
      total,
      __originQuestionId: entry.questionId,
      __dailyPhase: item.phase || "short"
    };
  });
}

// -----------------------------
// Overlay / UI
// -----------------------------

function createDailyOverlay(container) {
  const overlay = document.createElement("div");
  overlay.className = "dm-overlay";

  const card = document.createElement("div");
  card.className = "dm-card";

  // Header
  const header = document.createElement("div");
  header.className = "dm-header";

  const titleWrap = document.createElement("div");
  titleWrap.className = "dm-title-wrap";

  const badge = document.createElement("div");
  badge.className = "dm-badge";
  badge.textContent = "Daily Mission";

  const title = document.createElement("h2");
  title.className = "dm-title";
  title.textContent = "Auffrischung für deinen Kopf";

  const subtitle = document.createElement("p");
  subtitle.className = "dm-subtitle";
  subtitle.textContent =
    "Fragen, bei denen du zuletzt gestruggelt hast – jetzt machst du sie weg.";

  titleWrap.appendChild(badge);
  titleWrap.appendChild(title);
  titleWrap.appendChild(subtitle);

  const closeBtn = document.createElement("button");
  closeBtn.className = "dm-close-btn";
  closeBtn.type = "button";
  closeBtn.innerHTML = "&times;";

  header.appendChild(titleWrap);
  header.appendChild(closeBtn);

  // Meta / Progress
  const metaRow = document.createElement("div");
  metaRow.className = "dm-meta-row";

  const questionCounter = document.createElement("div");
  questionCounter.className = "dm-question-counter";
  questionCounter.textContent = "Frage 1 / 1";

  const energyInfo = document.createElement("div");
  energyInfo.className = "dm-energy-info";
  energyInfo.innerHTML =
    '<span class="dm-energy-label">Bonus-Energie:</span> <span class="dm-energy-value">+0</span>';

  const energyBubble = document.createElement("span");
  energyBubble.className = "dm-energy-pill";
  energyBubble.innerHTML = `0 <img class="dm-energy-pill-icon" src="${ENERGY_ICON_SRC}" alt="Energie">`;

  energyInfo.appendChild(energyBubble);

  metaRow.appendChild(questionCounter);
  metaRow.appendChild(energyInfo);

  // Fortschrittsbalken
  const progressBar = document.createElement("div");
  progressBar.className = "dm-progress-bar";

  const progressInner = document.createElement("div");
  progressInner.className = "dm-progress-inner";
  progressInner.style.width = "0%";

  progressBar.appendChild(progressInner);

  // Game-Container
  const content = document.createElement("div");
  content.className = "dm-content";

  const gameSlot = document.createElement("div");
  gameSlot.className = "dm-game-slot";

  content.appendChild(gameSlot);

  // Footer
  const footer = document.createElement("div");
  footer.className = "dm-footer";

  const hint = document.createElement("p");
  hint.className = "dm-footer-hint";
  hint.textContent =
    "Keine Energiekosten – aber jede richtige Antwort gibt dir +1 Energie.";

  footer.appendChild(hint);

  card.appendChild(header);
  card.appendChild(metaRow);
  card.appendChild(progressBar);
  card.appendChild(content);
  card.appendChild(footer);

  overlay.appendChild(card);
  container.appendChild(overlay);

  return {
    overlay,
    card,
    closeBtn,
    gameSlot,
    questionCounter,
    progressInner,
    energyValueEl: energyInfo.querySelector(".dm-energy-value"),
    energyPillEl: energyBubble
  };
}

// -----------------------------
// Daily-State bei Antwort aktualisieren
// -----------------------------

function updateDailyStateOnResult(questionMeta, isCorrect, dailyState) {
  const qid = questionMeta.__originQuestionId || questionMeta.id;
  if (!qid) return;

  const state = getOrCreateQuestionState(qid, dailyState);
  if (!state) return;

  const now = nowMs();
  state.lastAskedAt = now;

  const phase = questionMeta.__dailyPhase || state.phase || "short";

  if (phase === "long") {
    if (!isCorrect) {
      // Falsche Antwort aus dem 120-Tage-Pool:
      // → zurück in Pool 1, alles von vorne
      state.phase = "short";
      state.shortCount = 0;
      state.longCount = 0;
      state.movedToLongAt = null;
    } else {
      state.phase = "long";
      state.longCount = (state.longCount || 0) + 1;

      if (state.longCount >= LONG_POOL_MAX_REPEATS) {
        // Frage ist durch, nicht mehr in Daily Missions
        state.phase = "off";
      }
    }
  } else {
    // Pool 1 (short)
    state.phase = "short";
    state.shortCount = (state.shortCount || 0) + 1;

    if (state.shortCount >= SHORT_POOL_MAX_REPEATS) {
      // Nach 10 Wiederholungen in Pool 1 → Pool 2
      state.phase = "long";
      state.movedToLongAt = now;
    }
  }

  dailyState[qid] = state;
  saveDailyState(dailyState);
}

// -----------------------------
// Hauptlogik: Daily Mission starten
// -----------------------------

/**
 * Prüft, ob sich aus der gegebenen History eine Daily Mission
 * mit mindestens 5 Fragen bauen lässt.
 */
export function hasDailyMission(historyEntries) {
  const dailyState = loadDailyState();
  const poolItems = buildDailyMissionPool(historyEntries, dailyState, nowMs());
  // State speichern, falls sich etwas geändert hat (z.B. phase-switch short→long/off)
  saveDailyState(dailyState);
  return poolItems.length >= DAILY_MIN_QUESTIONS;
}

/**
 * Startet die Daily Mission im Vollbild-Overlay.
 *
 * container: z.B. document.body oder dein .app-Root
 * historyEntries: Array von QuestionHistoryEntry
 */
export function openDailyMission(container = document.body, historyEntries, optionen = {}) {
  const { onComplete = null, onClose = null } = optionen || {};
  const dailyState = loadDailyState();
  const poolItems = buildDailyMissionPool(historyEntries, dailyState, nowMs());

  if (poolItems.length < DAILY_MIN_QUESTIONS) {
    alert("Heute gibt es noch keine Daily Mission. Spiel erst ein paar Lektionen. 🙂");
    return;
  }

  // Änderungen (short→long/off) sichern
  saveDailyState(dailyState);

  const questions = mapPoolToGameData(poolItems);

  const ui = createDailyOverlay(container);

  let currentIndex = 0;
  let energyEarned = 0;
  const totalQuestions = questions.length;

  function updateMeta() {
    ui.questionCounter.textContent = `Frage ${currentIndex + 1} / ${totalQuestions}`;
    const progress = (currentIndex / totalQuestions) * 100;
    ui.progressInner.style.width = `${progress}%`;
    ui.energyValueEl.textContent = `+${energyEarned}`;
    ui.energyPillEl.innerHTML = `${energyEarned} <img class="dm-energy-pill-icon" src="${ENERGY_ICON_SRC}" alt="Energie">`;
  }

  function showSummary() {
    ui.gameSlot.innerHTML = "";

    const summary = document.createElement("div");
    summary.className = "dm-summary";

    const h = document.createElement("h3");
    h.textContent = "Daily Mission geschafft!";

    const p = document.createElement("p");
    p.innerHTML = `Du hast dir heute <strong>${energyEarned} Energie</strong> erspielt.`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dm-close-main-btn";
    btn.textContent = "Zurück zum Lernpfad";

    btn.addEventListener("click", () => {
      if (typeof onComplete === "function") {
        onComplete({
          energyEarned,
          totalQuestions
        });
      }
      ui.overlay.remove();
    });

    summary.appendChild(h);
    summary.appendChild(p);
    summary.appendChild(btn);

    ui.gameSlot.appendChild(summary);

    ui.progressInner.style.width = "100%";
  }

  function renderCurrentQuestion() {
    const q = randomisiereSpielDaten(questions[currentIndex]);
    if (!q) {
      showSummary();
      return;
    }

    // Container leeren
    ui.gameSlot.innerHTML = "";

    const renderer =
      GAME_RENDERERS[q.gameType] || GAME_RENDERERS[q.type];

    if (typeof renderer !== "function") {
      const fallback = document.createElement("div");
      fallback.className = "dm-error";
      fallback.textContent = `Spieltyp "${q.gameType || q.type}" wird noch nicht unterstützt.`;
      ui.gameSlot.appendChild(fallback);
      return;
    }

    const handleFinished = (result) => {
      const isCorrect = extractIsCorrect(result) === true;
      const questionId = q.__originQuestionId || q.id;

      // History-Eintrag für Daily Mission
      if (questionId) {
        try {
          registerQuestionHistory({
            questionId,
            gameType: q.gameType || q.type,
            topic: q.topic,
            isCorrect,
            questionData: q,
            meta: {
              source: "daily_mission"
            }
          });
        } catch (e) {
          console.warn("[DailyMission] registerQuestionHistory Fehler:", e);
        }
      }

      // Daily-States (Pool & Zähler) updaten
      updateDailyStateOnResult(q, isCorrect, dailyState);

      if (isCorrect) {
        energyEarned += 1;
        grantDailyMissionEnergyBonus(1);
        updateMeta();
        ui.card.classList.remove("dm-correct");
        void ui.card.offsetWidth; // reflow, um Animation zu resetten
        ui.card.classList.add("dm-correct");
        setTimeout(() => ui.card.classList.remove("dm-correct"), 250);
      } else {
        ui.card.classList.remove("dm-wrong");
        void ui.card.offsetWidth;
        ui.card.classList.add("dm-wrong");
        setTimeout(() => ui.card.classList.remove("dm-wrong"), 250);
      }

      // Nächste Frage
      currentIndex += 1;
      if (currentIndex >= totalQuestions) {
        showSummary();
      } else {
        updateMeta();
        renderCurrentQuestion();
      }
    };

    renderer(ui.gameSlot, q, handleFinished);
    updateMeta();
  }

  ui.closeBtn.addEventListener("click", () => {
    if (typeof onClose === "function") {
      onClose();
    }
    ui.overlay.remove();
  });

  renderCurrentQuestion();
}

// ------------------------------------------------------
// MOCK-BEREICH NUR FÜR TESTS
// ------------------------------------------------------
// !!! WICHTIG: Diesen Bereich später durch echte History-Daten ersetzen.
//              (z.B. History aus localStorage oder Backend laden.)

/**
 * Gibt TEST-Daten zurück, damit du die Daily Mission sofort ausprobieren kannst.
 */
export function getMockDailyHistory() {
  const now = nowMs();

  function daysAgo(d) {
    return now - d * MS_PER_DAY;
  }

  return [
    {
      questionId: "j1_l1_a1_l1_q1",
      gameType: "single_choice_quiz",
      topic: "Arbeitsschutz – Handschuhe",
      firstSeenAt: daysAgo(30),
      lastAnswerAt: daysAgo(2),      // vor 2 Tagen
      timesSeen: 3,
      timesCorrect: 1,
      lastIsCorrect: false,          // falsch → Pool 1 Kandidat
      questionData: {
        gameType: "single_choice_quiz",
        topic: "Arbeitsschutz – Handschuhe",
        question: "Warum trägst du bei Farbe und Blondierung immer Handschuhe?",
        options: [
          "Damit deine Hände nicht so kalt werden.",
          "Sie schützen deine Haut vor Chemikalien und Reizstoffen.",
          "Das sieht einfach professioneller aus.",
          "Dann musst du dir nie wieder die Hände waschen."
        ],
        correctIndex: 1,
        feedbackCorrect: "Genau – Handschuhe sind Hautschutz, nicht Modeaccessoire.",
        feedbackWrong: "Denk daran: Handschuhe schützen deine Haut vor Chemikalien."
      }
    },
    {
      questionId: "j1_l1_a1_l1_q2",
      gameType: "true_false_swipe",
      topic: "Dein erster Tag im Salon",
      firstSeenAt: daysAgo(40),
      lastAnswerAt: daysAgo(25),     // vor 25 Tagen → 21-Tage-Regel
      timesSeen: 2,
      timesCorrect: 2,
      lastIsCorrect: true,
      questionData: {
        gameType: "true_false_swipe",
        topic: "Dein erster Tag im Salon",
        statement: "Es ist okay, Kunden zu ignorieren, wenn du eigentlich gerade keine Lust hast.",
        isTrue: false,
        feedbackCorrect: "Richtig – Kunden werden immer freundlich und aufmerksam begrüßt.",
        feedbackWrong: "Im Salon werden Kunden nie ignoriert – du bist Gastgeber*in."
      }
    },
    {
      questionId: "j1_l1_a1_l1_q3",
      gameType: "gap_fill",
      topic: "Händehygiene",
      firstSeenAt: daysAgo(50),
      lastAnswerAt: daysAgo(22),     // vor 22 Tagen → 21-Tage-Regel
      timesSeen: 4,
      timesCorrect: 3,
      lastIsCorrect: true,
      questionData: {
        gameType: "gap_fill",
        topic: "Händehygiene",
        textBefore: "Hände solltest du vor jeder ",
        correctAnswer: "Behandlung",
        textAfter: " gründlich waschen oder desinfizieren.",
        options: ["Pause", "Behandlung", "Kaffeepause", "Whatsapp-Nachricht"],
        feedbackCorrect: "Yes – saubere Hände vor jeder Behandlung sind Pflicht.",
        feedbackWrong: "Denk daran: vor jeder Behandlung gehören saubere Hände dazu."
      }
    },
    {
      questionId: "j1_l1_a1_l1_q4",
      gameType: "single_choice_quiz",
      topic: "Unfallverhütung",
      firstSeenAt: daysAgo(70),
      lastAnswerAt: daysAgo(30),
      timesSeen: 3,
      timesCorrect: 2,
      lastIsCorrect: false,          // wieder falsch
      questionData: {
        gameType: "single_choice_quiz",
        topic: "Unfallverhütung",
        question: "Welche Maßnahme verhindert Stolperunfälle am ehesten?",
        options: [
          "Kabel quer durch den Salon legen.",
          "Nur flache Schuhe tragen.",
          "Kabel sichern und Wege freihalten.",
          "Kunden bitten, besser aufzupassen."
        ],
        correctIndex: 2,
        feedbackCorrect: "Genau – freie Wege und gesicherte Kabel sind Basics.",
        feedbackWrong: "Achte auf freie Wege und gesicherte Kabel."
      }
    },
    {
      questionId: "j1_l1_a1_l1_q5",
      gameType: "sentence_builder",
      topic: "Arbeitsschutz",
      firstSeenAt: daysAgo(35),
      lastAnswerAt: daysAgo(1),
      timesSeen: 2,
      timesCorrect: 0,
      lastIsCorrect: false,
      questionData: {
        gameType: "sentence_builder",
        type: "sentence_builder",
        topic: "Arbeitsschutz",
        question: "Warum ist Ordnung im Salon so wichtig?",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ordnung verhindert Unfälle und wirkt professionell",
        extraWords: ["Whatsapp", "abends", "manchmal"]
      }
    }
  ];
}
