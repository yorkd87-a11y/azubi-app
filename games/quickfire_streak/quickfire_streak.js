// games/quickfire_streak/quickfire_streak.js

/**
 * Quickfire Streak ("quickfire_streak")
 *
 * Schnelle Richtig/Falsch-Fragen mit Streak-Zähler.
 *
 * Erwartete gameData-Struktur:
 * {
 *   id: "j1_l1_a1_l3_q9",
 *   type: "quickfire_streak",
 *   topic: "Arbeitsschutz Basics",
 *   prompt: "Richtig oder falsch? Antworte so schnell wie möglich.",
 *   timeLimitSeconds: 45,      // optional, Default 45
 *   questions: [
 *     {
 *       text: "Im Salon darfst du auch in Sandalen arbeiten.",
 *       correct: false,        // true = Aussage ist richtig, false = falsch
 *       explanation: "Geschlossene, rutschfeste Schuhe sind Pflicht – auch zu deinem Schutz."
 *     },
 *     // ...
 *   ],
 *   // wird vom game_main ergänzt:
 *   position: 9,               // Quest-Position im Abschnitt
 *   total: 15                  // Anzahl Quests im Abschnitt
 * }
 */

/**
 * Renderer-Funktion
 * @param {Object} gameData  - siehe oben
 * @param {HTMLElement} containerEl - DOM-Element, in das das Spiel gerendert wird
 */
export function renderQuickfireStreak(gameData, containerEl) {
  if (!containerEl) return;

  // Falls vorher noch ein Timer lief, stoppen
  if (containerEl._qfIntervalId) {
    clearInterval(containerEl._qfIntervalId);
    containerEl._qfIntervalId = null;
  }

  if (!gameData || !Array.isArray(gameData.questions) || gameData.questions.length === 0) {
    containerEl.innerHTML = `<div class="qf-card-main">
      <p class="qf-error">Keine Fragen für Quickfire Streak definiert.</p>
    </div>`;
    return;
  }

  const totalQuestions = gameData.questions.length;
  const totalTime = typeof gameData.timeLimitSeconds === "number"
    ? Math.max(5, gameData.timeLimitSeconds)
    : 45;

  const state = {
    currentIndex: 0,
    remainingTime: totalTime,
    streak: 0,
    bestStreak: 0,
    answered: 0,
    correct: 0,
    locked: false,
    gameOver: false
  };

  // Grundlayout
  containerEl.innerHTML = `
    <div class="qf-card-main">
      <div class="qf-meta-row">
        <div class="qf-topic">${gameData.topic || "Quickfire Streak"}</div>
        <div class="qf-meta-right">
          <div class="qf-counter" id="qf-counter"></div>
          <div class="qf-quest-pos">
            ${
              typeof gameData.position === "number" &&
              typeof gameData.total === "number"
                ? `Quest ${gameData.position} / ${gameData.total}`
                : ""
            }
          </div>
        </div>
      </div>

      <h2 class="qf-title">
        ${gameData.prompt || "Beantworte so viele Fragen so schnell wie möglich – Richtig oder Falsch?"}
      </h2>

      <div class="qf-timer">
        <div class="qf-timer-bar-wrap">
          <div class="qf-timer-bar" id="qf-timer-bar"></div>
        </div>
        <div class="qf-timer-label">
          <span id="qf-timer-seconds">${state.remainingTime}</span>s
        </div>
      </div>

      <div class="qf-question-box">
        <div class="qf-question-label">Aussage</div>
        <div class="qf-question-text" id="qf-question-text"></div>
      </div>

      <div class="qf-answer-buttons">
        <button type="button" class="qf-btn qf-btn-true" data-answer="true">
          Richtig
        </button>
        <button type="button" class="qf-btn qf-btn-false" data-answer="false">
          Falsch
        </button>
      </div>

      <div class="qf-feedback" id="qf-feedback"></div>

      <div class="qf-stats-row">
        <div>Streak: <span id="qf-streak">0</span></div>
        <div>Best: <span id="qf-best-streak">0</span></div>
        <div>Richtig: <span id="qf-correct">0</span> / <span id="qf-answered">0</span></div>
      </div>
    </div>
  `;

  // DOM-Refs
  const questionTextEl = containerEl.querySelector("#qf-question-text");
  const counterEl = containerEl.querySelector("#qf-counter");
  const feedbackEl = containerEl.querySelector("#qf-feedback");
  const timerBarEl = containerEl.querySelector("#qf-timer-bar");
  const timerSecondsEl = containerEl.querySelector("#qf-timer-seconds");
  const streakEl = containerEl.querySelector("#qf-streak");
  const bestStreakEl = containerEl.querySelector("#qf-best-streak");
  const correctEl = containerEl.querySelector("#qf-correct");
  const answeredEl = containerEl.querySelector("#qf-answered");
  const cardEl = containerEl.querySelector(".qf-card-main");

  const btnTrue = containerEl.querySelector(".qf-btn-true");
  const btnFalse = containerEl.querySelector(".qf-btn-false");

  function renderCurrentQuestion() {
    const q = gameData.questions[state.currentIndex];
    questionTextEl.textContent = q.text || "";
    counterEl.textContent = `Frage ${state.currentIndex + 1} / ${totalQuestions}`;
    feedbackEl.textContent = "";
    btnTrue.classList.remove("qf-btn-correct", "qf-btn-wrong");
    btnFalse.classList.remove("qf-btn-correct", "qf-btn-wrong");
  }

  function updateStatsUI() {
    streakEl.textContent = String(state.streak);
    bestStreakEl.textContent = String(state.bestStreak);
    correctEl.textContent = String(state.correct);
    answeredEl.textContent = String(state.answered);
  }

  function updateTimerUI() {
    timerSecondsEl.textContent = String(Math.max(0, Math.ceil(state.remainingTime)));
    const ratio = Math.max(0, Math.min(1, state.remainingTime / totalTime));
    timerBarEl.style.setProperty("--qf-timer-progress", String(ratio));
  }

  function finishGame() {
    if (state.gameOver) return;
    state.gameOver = true;
    state.locked = true;

    btnTrue.disabled = true;
    btnFalse.disabled = true;

    if (containerEl._qfIntervalId) {
      clearInterval(containerEl._qfIntervalId);
      containerEl._qfIntervalId = null;
    }

    cardEl.classList.add("qf-finished");

    feedbackEl.innerHTML = `
      <div class="qf-summary">
        <strong>Fertig!</strong><br>
        Du hast <strong>${state.correct}</strong> von <strong>${state.answered}</strong> beantworteten Fragen richtig gelöst.<br>
        Beste Streak: <strong>${state.bestStreak}</strong>.
      </div>
    `;
  }

  function goToNextQuestionOrFinish() {
    if (state.currentIndex < totalQuestions - 1) {
      state.currentIndex += 1;
      renderCurrentQuestion();
    } else {
      finishGame();
    }
  }

  function handleAnswer(userAnswerBool) {
    if (state.gameOver || state.locked) return;
    state.locked = true;

    const q = gameData.questions[state.currentIndex];
    const isCorrect = Boolean(q.correct) === Boolean(userAnswerBool);

    state.answered += 1;

    if (isCorrect) {
      state.correct += 1;
      state.streak += 1;
      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
      }
      feedbackEl.textContent = q.explanation
        ? `Richtig! ${q.explanation}`
        : "Richtig!";
    } else {
      state.streak = 0;
      feedbackEl.textContent = q.explanation
        ? `Falsch. ${q.explanation}`
        : "Falsch.";
    }

    // Button-Highlight
    if (isCorrect && userAnswerBool) {
      btnTrue.classList.add("qf-btn-correct");
    } else if (!isCorrect && userAnswerBool) {
      btnTrue.classList.add("qf-btn-wrong");
    }

    if (isCorrect && !userAnswerBool) {
      btnFalse.classList.add("qf-btn-correct");
    } else if (!isCorrect && !userAnswerBool) {
      btnFalse.classList.add("qf-btn-wrong");
    }

    updateStatsUI();

    // Kurz Feedback anzeigen, dann weiter
    setTimeout(() => {
      if (!state.gameOver) {
        state.locked = false;
        goToNextQuestionOrFinish();
      }
    }, 600);
  }

  // Event-Listener
  btnTrue.addEventListener("click", () => handleAnswer(true));
  btnFalse.addEventListener("click", () => handleAnswer(false));

  // Timer starten (1x pro Sekunde)
  updateTimerUI();
  containerEl._qfIntervalId = setInterval(() => {
    if (state.gameOver) return;
    state.remainingTime -= 1;
    if (state.remainingTime <= 0) {
      state.remainingTime = 0;
      updateTimerUI();
      finishGame();
    } else {
      updateTimerUI();
    }
  }, 1000);

  // Erste Frage anzeigen & Stats initialisieren
  renderCurrentQuestion();
  updateStatsUI();
}
