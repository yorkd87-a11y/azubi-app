// games/game_main.js

import { GAME_RENDERERS } from "./game_index.js";
import {
  tryConsumeEnergyForQuestion,
  registerQuestionResult,
  resetEnergyStreak,
  getEnergy,
  getCurrentEnergyStreak
} from "../core/energy_system.js";
import { createLessonOverlay } from "./game_overlay.js";
import { showEnergyBonusPopup } from "./game_bonus_popup.js";
import { updateGameStreakUI } from "./game_streak.js";
import {
  extractIsCorrect,
  animateResult,
  showAnswerFeedbackPopup,
  showCorrectFeedbackPopup,
  randomisiereSpielDaten
} from "./game_utils.js";
import { registerQuestionHistory } from "../core/question_history.js"; // History für Daily Missions etc.
import { registerAnswerForLesson } from "../core/progress_store.js";   // 🔹 NEU: für Map-Prozent

/**
 * Startet eine Lektion als Vollbild-Overlay.
 *
 * container: DOM-Element, in dem das Overlay gerendert werden soll
 *   (z. B. document.body oder ein <div class="app">)
 *
 * lessonConfig:
 * {
 *   id: "jahr1_abschnitt1_l1",
 *   title: "Handschuhe tragen",
 *   energy: 15,                          // aktuell ungenutzt, wir nutzen globale Energie
 *   questions: [ { gameType: "...", ... }, ... ],
 *   exitImageUrl?: "pfad/zur/gisela.png",
 *   onExit?: () => {},
 *
 *   // wird pro beantworteter Frage aufgerufen (optional)
 *   // payload: { isCorrect: true|false|null, xpGained: number }
 *   onQuestionResult?: (payload) => {},
 *
 *   // wird aufgerufen, wenn die Lektion vollständig abgeschlossen wurde
 *   // payload: {
 *   //   correctCount: number,
 *   //   totalCount: number,
 *   //   timeMs: number,
 *   //   xpEarned: number,
 *   //   xpAlreadyAdded: boolean
 *   // }
 *   onCompleted?: (payload) => {}
 * }
 */

// ------------------------------------
// Antwort-Sounds (richtig / falsch)
// ------------------------------------
// Pfad ist relativ zu index.html im Projekt-Root "Azubi App"
const ANSWER_SOUNDS = {
  correct: new Audio("media/answer_audio/correct_chime.wav"),
  wrong: new Audio("media/answer_audio/wrong_chime.wav")
};

// optional: etwas vorbereiten
Object.values(ANSWER_SOUNDS).forEach((audio) => {
  if (!audio) return;
  audio.preload = "auto";
  audio.volume = 0.9; // Lautstärke anpassbar
});

/**
 * Spielt den Antwortsound (richtig/falsch) ab
 * und gibt ein Promise zurück, das RESOLVED ist,
 * wenn der Sound fertig ist oder ein Fallback-Timeout abgelaufen ist.
 */
function playAnswerSound(isCorrect) {
  // Für Lernkarten / isCorrect === null: kein Sound, sofort weiter
  if (isCorrect === null || typeof isCorrect === "undefined") {
    return Promise.resolve();
  }

  const audio = isCorrect ? ANSWER_SOUNDS.correct : ANSWER_SOUNDS.wrong;
  if (!audio) return Promise.resolve();

  const player = audio.cloneNode();
  player.preload = "auto";
  player.volume = audio.volume;

  return new Promise((resolve) => {
    let finished = false;

    const cleanup = () => {
      if (finished) return;
      finished = true;
      player.removeEventListener("ended", onEnded);
      player.removeEventListener("error", onError);
      resolve();
    };

    const onEnded = () => {
      cleanup();
    };

    const onError = () => {
      cleanup();
    };

    try {
      player.currentTime = 0;

      player.addEventListener("ended", onEnded);
      player.addEventListener("error", onError);

      const playPromise = player.play();

      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // z. B. Autoplay blockiert – nicht hängenbleiben
          setTimeout(cleanup, 150);
        });
      } else {
        // Browser ohne Promises: grobe Schätzung
        setTimeout(cleanup, 500);
      }

      // Harte Obergrenze, falls "ended" nie feuert
      setTimeout(cleanup, 1500);
    } catch (e) {
      console.warn("Konnte Antwort-Sound nicht abspielen:", e);
      resolve();
    }
  });
}

export function startLessonGame(container, lessonConfig) {
  if (!container) {
    console.error("startLessonGame: container fehlt");
    return;
  }
  if (!lessonConfig || !Array.isArray(lessonConfig.questions)) {
    console.error("startLessonGame: ungültige lessonConfig", lessonConfig);
    return;
  }

  const questions = lessonConfig.questions;
  const totalQuestions = questions.length;

  if (totalQuestions === 0) {
    console.warn("startLessonGame: keine Fragen in lessonConfig.questions");
  }

  let currentIndex = 0;

  // Quiz-Stats für Auswertung / Summary
  let correctCount = 0;
  let answeredCount = 0;
  let totalXpEarned = 0;
  const quizStartTime = performance.now();

  // Energie-Streak für diese Quiz-Runde zurücksetzen
  resetEnergyStreak();

  const startingEnergy = getEnergy();
  // Overlay bauen (UI ausgelagert)
  const {
    overlay,
    gameRoot,
    progressInner,
    energyValueEl,
    streakValueEl,
    closeBtn,
    exitSheet,
    exitContinueBtn,
    exitEndBtn
  } = createLessonOverlay(container, lessonConfig, startingEnergy);

  function updateHeader() {
    const progress = totalQuestions > 0 ? currentIndex / totalQuestions : 0;
    const width = Math.max(0, Math.min(100, progress * 100));
    progressInner.style.width = width + "%";

    const currentEnergy = getEnergy();
    energyValueEl.textContent = currentEnergy;
    if (streakValueEl) {
      updateGameStreakUI(streakValueEl, getCurrentEnergyStreak());
    }
  }

  function showExitSheet() {
    exitSheet.classList.add("gm-exit-sheet--visible");
  }

  function hideExitSheet() {
    exitSheet.classList.remove("gm-exit-sheet--visible");
  }

  function endLesson() {
    overlay.remove();
    if (typeof lessonConfig.onExit === "function") {
      lessonConfig.onExit();
    }
  }

  function completeLesson() {
    const timeMs = performance.now() - quizStartTime;

    if (typeof lessonConfig.onCompleted === "function") {
      lessonConfig.onCompleted({
        correctCount,
        totalCount: answeredCount || totalQuestions,
        timeMs,
        xpEarned: totalXpEarned,
        // WICHTIG:
        // XP wurden bereits pro Frage über onQuestionResult vergeben.
        // app.js soll sie nur noch anzeigen, nicht erneut addieren.
        xpAlreadyAdded: true
      });
    }
    endLesson();
  }

  function renderNoEnergyScreen() {
    gameRoot.innerHTML = `
      <div class="game-card gm-no-energy">
        <p>Du hast gerade keine Energie mehr.<br>
        Warte ein paar Minuten, dann lädt sie sich automatisch wieder auf.</p>
        <button class="gm-no-energy-btn">Zurück zur Karte</button>
      </div>
    `;
    const btn = gameRoot.querySelector(".gm-no-energy-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        endLesson();
      });
    }
  }

  // -----------------------
  //  Fragen rendern
  // -----------------------
  function renderCurrentQuestion() {
    // Prüfen, ob noch globale Energie da ist, bevor wir eine neue Frage anzeigen
    if (getEnergy() <= 0) {
      gameRoot.style.visibility = "";
      updateHeader();
      renderNoEnergyScreen();
      return;
    }

    gameRoot.style.visibility = "";
    updateHeader();
    gameRoot.innerHTML = "";

    const question = questions[currentIndex];

    if (!question) {
      // Keine Frage an dieser Position -> Lektion beenden
      completeLesson();
      return;
    }

    const gameType = question.gameType;
    const renderer = GAME_RENDERERS[gameType];

    if (!renderer) {
      console.error("Kein Renderer für gameType:", gameType);
      const errorCard = document.createElement("div");
      errorCard.className = "game-card";
      errorCard.textContent =
        "Dieses Spiel ist noch nicht verfügbar. (Typ: " + gameType + ")";
      gameRoot.appendChild(errorCard);
      return;
    }

    const gameData = randomisiereSpielDaten({
      ...question,
      position: currentIndex + 1,
      total: totalQuestions
    });
    let pendingAdvanceToNextQuestion = null;
    let pendingEnergyBonusDetail = null;

    const advanceToNextQuestion = () => {
      // Alte Frage sofort ausblenden, damit sie zwischen Popup und Rendern
      // der nächsten Frage nicht kurz wieder sichtbar wird.
      gameRoot.style.visibility = "hidden";

      const energyResult = tryConsumeEnergyForQuestion();
      updateHeader();

      if (!energyResult.ok) {
        gameRoot.style.visibility = "";
        renderNoEnergyScreen();
        return;
      }

      currentIndex++;

      if (currentIndex < totalQuestions) {
        renderCurrentQuestion();
      } else {
        gameRoot.style.visibility = "";
        completeLesson();
      }
    };

    const handleQuestionFinished = (
      result,
      {
        playSoundImmediately = true,
        extraDelay = 0,
        advanceAfterHandling = true
      } = {}
    ) => {
      const isCorrect = extractIsCorrect(result); // true | false | null
      const questionId = question.id || gameData.id;

      let xpGained = 0;

      // Nur "echte" Bewertungsfragen für Stats zählen
      if (isCorrect === true) {
        correctCount += 1;
        xpGained = 10; // XP pro richtige Frage
      }
      if (isCorrect !== null) {
        answeredCount += 1;
      } else {
        // Falls ein Spiel kein isCorrect zurückgibt (z.B. Lernmodus),
        // zählen wir es trotzdem als beantwortet, aber ohne Score.
        answeredCount += 1;
      }

      // XP-Aggregat für spätere Summary
      totalXpEarned += xpGained;

      // ⬇️ NEU: History für „normale“ Lektionen
      if (isCorrect !== null && questionId) {
        registerQuestionHistory({
          questionId,
          gameType: question.gameType || gameData.gameType || gameData.type,
          topic: question.topic || gameData.topic,
          isCorrect,
          questionData: question,
          meta: {
            source: "lesson",
            lessonId: lessonConfig.id
          }
        });
      }

      // ⬇️ NEU: Progress für Lesson-Map (nur bewertete Fragen)
      if (lessonConfig && lessonConfig.id && isCorrect !== null) {
        registerAnswerForLesson(lessonConfig.id, {
          isCorrect: isCorrect === true
        });
      }

      // App-Callback pro Frage → LessonSession & XP in app.js
      if (typeof lessonConfig.onQuestionResult === "function") {
        lessonConfig.onQuestionResult({
          isCorrect,
          xpGained
        });
      }

      if (isCorrect !== null) {
        animateResult(overlay, isCorrect);
        // Energie-Streak/Boni aktualisieren
        pendingEnergyBonusDetail = registerQuestionResult(isCorrect, {
          allowBonus: lessonConfig.allowEnergyStreakBonus !== false
        });
        if (
          pendingEnergyBonusDetail &&
          typeof lessonConfig.onEnergyBonusAwarded === "function"
        ) {
          lessonConfig.onEnergyBonusAwarded(pendingEnergyBonusDetail);
        }
      }

      if (playSoundImmediately) {
        playAnswerSound(isCorrect);
      }

      if (!advanceAfterHandling) {
        pendingAdvanceToNextQuestion = advanceToNextQuestion;
        return;
      }

      if (extraDelay > 0) {
        setTimeout(advanceToNextQuestion, extraDelay);
        return;
      }

      advanceToNextQuestion();
    };

    // Renderer aufrufen: übergibt am Ende das Resultat an handleQuestionFinished.
    // Bei richtiger Antwort zuerst Erklärungs-Popup zeigen (5-Sek.-Sperre),
    // danach erst handleQuestionFinished aufrufen.
    const wrappedOnComplete = (result) => {
      if (
        result &&
        typeof result === "object" &&
        result.continueAfterDeferred === true
      ) {
        const continueFn = pendingAdvanceToNextQuestion;
        pendingAdvanceToNextQuestion = null;
        if (continueFn) continueFn();
        return;
      }

      const isCorrect = extractIsCorrect(result);
      const deferAdvance =
        !!result &&
        typeof result === "object" &&
        result.deferAdvance === true;

      if (isCorrect === true) {
        const feedbackText =
          question.feedbackCorrect || "Super gemacht! Lies dir die Erklärung nochmal durch.";
        playAnswerSound(true);
        showCorrectFeedbackPopup(overlay, feedbackText, () => {
          handleQuestionFinished(result, {
            playSoundImmediately: false,
            extraDelay: 0
          });
        });
      } else {
        handleQuestionFinished(result, {
          advanceAfterHandling: !deferAdvance
        });
      }
    };

    const wrappedOnCompleteWithPopup = (result) => {
      if (
        result &&
        typeof result === "object" &&
        result.continueAfterDeferred === true
      ) {
        const continueFn = pendingAdvanceToNextQuestion;
        pendingAdvanceToNextQuestion = null;
        if (continueFn) continueFn();
        return;
      }

      const isCorrect = extractIsCorrect(result);
      const deferAdvance =
        !!result &&
        typeof result === "object" &&
        result.deferAdvance === true;

      if (isCorrect === true || isCorrect === false) {
        const feedbackText = isCorrect
          ? question.feedbackCorrect || "Super gemacht! Lies dir die Erklärung nochmal durch."
          : question.feedbackWrong || "Nicht ganz. Schau dir die Erklärung noch einmal an.";

        handleQuestionFinished(result, {
          playSoundImmediately: true,
          extraDelay: 0,
          advanceAfterHandling: false
        });

        showAnswerFeedbackPopup(overlay, {
          variant: isCorrect ? "correct" : "wrong",
          text: feedbackText,
          title: isCorrect ? "Richtig!" : "Nicht ganz!",
          topLabel: isCorrect ? "Antwort bestätigt" : "Antwort prüfen",
          icon: isCorrect ? "✨" : "🔥",
          lockSeconds: 2,
          autoContinueSeconds: 5,
          onContinue: () => {
            const continueFn = pendingAdvanceToNextQuestion;
            const bonusDetail = pendingEnergyBonusDetail;
            pendingAdvanceToNextQuestion = null;
            pendingEnergyBonusDetail = null;

            if (bonusDetail) {
              showEnergyBonusPopup(overlay, bonusDetail).then(() => {
                if (continueFn) continueFn();
              });
              return;
            }

            if (continueFn) continueFn();
          }
        });
        return;
      }

      handleQuestionFinished(result, {
        advanceAfterHandling: !deferAdvance
      });
    };

    renderer(gameRoot, gameData, wrappedOnCompleteWithPopup);
  }

  // Event-Handler für Exit-Sheet
  closeBtn.addEventListener("click", () => {
    showExitSheet();
  });

  exitContinueBtn.addEventListener("click", () => {
    hideExitSheet();
  });

  exitEndBtn.addEventListener("click", () => {
    hideExitSheet();
    endLesson();
  });

  // Erste Frage laden
  renderCurrentQuestion();
}
