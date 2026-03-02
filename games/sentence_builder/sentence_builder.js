// games/sentence_builder/sentence_builder.js

/**
 * Sentence Builder ("sentence_builder")
 *
 * Spieler*in bekommt eine Frage und muss aus vorgegebenen Wörtern
 * einen Antwortsatz in der richtigen Reihenfolge bauen.
 *
 * Erwartetes gameData:
 * {
 *   id: "j1_l1_a1_q7",
 *   type: "sentence_builder",
 *   topic: "Arbeitsschutz",
 *   question: "Warum ist Händewaschen vor der Arbeit wichtig?",
 *   prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
 *   answer: "Händewaschen entfernt Schmutz und Krankheitserreger",
 *   extraWords: ["manchmal", "abends", "Handy"],
 *   // Optional: Audio der Musterantwort
 *   // Pfad-Beispiel: "media/answer_audio/j1_l1_a1_q7.mp3"
 *   answerAudioUrl: "media/answer_audio/DEINE_DATEI.mp3",
 *   // alternativ unterstützt:
 *   // answerAudio?: "media/answer_audio/DEINE_DATEI.mp3",
 *   position: 7,      // vom game_main gesetzt
 *   total: 10         // vom game_main gesetzt
 * }
 *
 * callbacks:
 *  - Variante A: renderSentenceBuilder(root, gameData, onResult, onNext)
 *  - Variante B: renderSentenceBuilder(root, gameData, { onResult, onNext })
 */

function tokenizeAnswer(answer) {
  if (!answer) return [];
  // Sehr simple Tokenisierung: nach Leerzeichen trennen
  return answer
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function renderSentenceBuilder(rootEl, gameData, cbOrOnResult, maybeOnNext) {
  const {
    id,
    topic,
    question,
    prompt,
    answer,
    extraWords = [],
    position,
    total
  } = gameData;

  // --- Callback-Kompatibilität ---
  // Unterstützt:
  //   A) (root, data, onResult, onNext)
  //   B) (root, data, { onResult, onNext })
  let onResult = () => {};
  let onNext = () => {};

  if (typeof cbOrOnResult === "function" || typeof maybeOnNext === "function") {
    // Alte Variante A: Funktionsparameter
    if (typeof cbOrOnResult === "function") {
      onResult = cbOrOnResult;
    }
    if (typeof maybeOnNext === "function") {
      onNext = maybeOnNext;
    }
  } else if (cbOrOnResult && typeof cbOrOnResult === "object") {
    // Neue Variante B: Callbacks-Objekt
    if (typeof cbOrOnResult.onResult === "function") {
      onResult = cbOrOnResult.onResult;
    }
    if (typeof cbOrOnResult.onNext === "function") {
      onNext = cbOrOnResult.onNext;
    }
  }

  // Audio-Quelle (Fragen-Config)
  const answerAudioSrc =
    gameData.answerAudioUrl || gameData.answerAudio || null;

  const correctWords = tokenizeAnswer(answer);
  const allWords = shuffleArray([...correctWords, ...extraWords]);

  // UI aufbauen
  rootEl.innerHTML = "";

  const card = document.createElement("div");
  card.className = "sb-card-main";
  rootEl.appendChild(card);

  // Meta-Zeile
  const metaRow = document.createElement("div");
  metaRow.className = "sb-meta-row";

  const topicEl = document.createElement("div");
  topicEl.className = "sb-topic";
  topicEl.textContent = topic || "Friseur-Ausbildung";

  const counterEl = document.createElement("div");
  counterEl.className = "sb-counter";
  if (typeof position === "number" && typeof total === "number") {
    counterEl.textContent = `Frage ${position} / ${total}`;
  } else {
    counterEl.textContent = "Frage";
  }

  metaRow.appendChild(topicEl);
  metaRow.appendChild(counterEl);

  // Frage
  const questionEl = document.createElement("h2");
  questionEl.className = "sb-question";
  questionEl.textContent = question || "Baue den passenden Satz.";

  // Instruktion
  const instructionEl = document.createElement("p");
  instructionEl.className = "sb-instruction";
  instructionEl.textContent =
    prompt || "Klicke die passenden Wörter in der richtigen Reihenfolge an.";

  // Grundaufbau oben auf der Karte
  card.appendChild(metaRow);
  card.appendChild(questionEl);
  card.appendChild(instructionEl);

  // Audio-Button + <audio> (optional)
  let audioEl = null;
  let audioBtn = null;

  if (answerAudioSrc) {
    const audioWrapper = document.createElement("div");
    audioWrapper.className = "sb-audio-wrapper";

    const audioLabel = document.createElement("div");
    audioLabel.className = "sb-audio-label";
    audioLabel.textContent = "Merksatz anhören";

    audioBtn = document.createElement("button");
    audioBtn.type = "button";
    audioBtn.className = "sb-audio-btn";
    audioBtn.setAttribute("aria-label", "Antwort anhören");

    const iconSpan = document.createElement("span");
    iconSpan.className = "sb-audio-icon";
    iconSpan.textContent = "🔊";

    const audioText = document.createElement("span");
    audioText.className = "sb-audio-text";
    audioText.textContent = "Audio starten";

    audioBtn.appendChild(iconSpan);
    audioBtn.appendChild(audioText);
    audioWrapper.appendChild(audioLabel);
    audioWrapper.appendChild(audioBtn);

    // Audio-Element (nicht sichtbar)
    audioEl = document.createElement("audio");
    audioEl.src = answerAudioSrc;
    audioEl.preload = "none";

    // Klick-Logik
    audioBtn.addEventListener("click", () => {
      if (!audioEl) return;
      try {
        if (audioEl.paused) {
          audioEl.currentTime = 0;
          const playPromise = audioEl.play();
          if (playPromise && typeof playPromise.then === "function") {
            playPromise.catch(() => {
              // Autoplay blockiert o.ä. – keine harte Fehlermeldung
            });
          }
        } else {
          audioEl.pause();
        }
      } catch (e) {
        console.error("SB Audio playback error:", e);
      }
    });

    audioEl.addEventListener("play", () => {
      audioBtn.classList.add("is-playing");
      audioText.textContent = "Wiedergabe läuft";
    });
    audioEl.addEventListener("pause", () => {
      audioBtn.classList.remove("is-playing");
      audioText.textContent = "Audio starten";
    });
    audioEl.addEventListener("ended", () => {
      audioBtn.classList.remove("is-playing");
      audioText.textContent = "Nochmal anhören";
    });

    card.appendChild(audioWrapper);
    card.appendChild(audioEl);
  }

  // Antwortbereich
  const answerArea = document.createElement("div");
  answerArea.className = "sb-answer-area";

  const answerLabel = document.createElement("div");
  answerLabel.className = "sb-answer-label";
  answerLabel.textContent = "Deine Antwort:";

  const answerSlots = document.createElement("div");
  answerSlots.className = "sb-answer-slots";

  answerArea.appendChild(answerLabel);
  answerArea.appendChild(answerSlots);

  // Wort-Bank
  const wordBank = document.createElement("div");
  wordBank.className = "sb-word-bank";

  const wordBankLabel = document.createElement("div");
  wordBankLabel.className = "sb-word-bank-label";
  wordBankLabel.textContent = "Wörter:";

  const wordList = document.createElement("div");
  wordList.className = "sb-word-list";

  wordBank.appendChild(wordBankLabel);
  wordBank.appendChild(wordList);

  // Buttons & Feedback
  const actionsRow = document.createElement("div");
  actionsRow.className = "sb-actions";

  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.className = "sb-btn sb-btn-reset";
  resetBtn.textContent = "Zurücksetzen";

  const checkBtn = document.createElement("button");
  checkBtn.type = "button";
  checkBtn.className = "sb-btn sb-btn-check";
  checkBtn.textContent = "Antwort prüfen";
  checkBtn.disabled = true;

  actionsRow.appendChild(resetBtn);
  actionsRow.appendChild(checkBtn);

  const feedbackEl = document.createElement("div");
  feedbackEl.className = "sb-feedback";
  feedbackEl.setAttribute("aria-live", "polite");

  // alles ins Card-Layout
  card.appendChild(answerArea);
  card.appendChild(wordBank);
  card.appendChild(actionsRow);
  card.appendChild(feedbackEl);

  // Wörter rendern
  allWords.forEach((w, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "sb-word";
    btn.textContent = w;
    btn.dataset.wordIndex = String(index);

    // Klick: von Wort-Bank in Antwortzeile verschieben
    btn.addEventListener("click", () => {
      if (btn.parentElement === wordList) {
        answerSlots.appendChild(btn);
      } else {
        wordList.appendChild(btn);
      }
      feedbackEl.textContent = "";
      card.classList.remove("sb-correct", "sb-wrong");
      updateActionState();
    });

    wordList.appendChild(btn);
  });

  let hasReportedResult = false;
  let isChecked = false; // false = "Antwort prüfen", true = "Weiter"

  function updateActionState() {
    const selectedCount = answerSlots.querySelectorAll(".sb-word").length;
    if (isChecked) {
      checkBtn.disabled = false;
      return;
    }
    checkBtn.disabled = selectedCount === 0;
  }

  function getCurrentUserWords() {
    return Array.from(answerSlots.querySelectorAll(".sb-word")).map(
      (el) => el.textContent.trim()
    );
  }

  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function handleCheck() {
    const userWords = getCurrentUserWords();

    if (userWords.length === 0) {
      feedbackEl.textContent = "Setze zuerst deine Antwort zusammen.";
      return;
    }

    const isCorrect = arraysEqual(userWords, correctWords);

    if (!hasReportedResult) {
      hasReportedResult = true;
      onResult({
        isCorrect,
        questionId: id,
        userWords,
        correctWords
      });
    }

    if (isCorrect) {
      feedbackEl.textContent = "Richtig! Gut gemacht 👏";
      card.classList.add("sb-correct");
      card.classList.remove("sb-wrong");

      // Button in "Weiter"-Modus schalten
      isChecked = true;
      checkBtn.textContent = "Weiter";
      checkBtn.classList.add("sb-btn-next");
      updateActionState();
    } else {
      feedbackEl.textContent =
        "Das ist noch nicht ganz richtig. Probier es nochmal und achte auf die Reihenfolge.";
      card.classList.add("sb-wrong");
      card.classList.remove("sb-correct");
    }
  }

  function handleReset() {
    // Alle Wörter zurück in die Wortliste
    const all = [
      ...answerSlots.querySelectorAll(".sb-word"),
      ...wordList.querySelectorAll(".sb-word")
    ];
    all.forEach((el) => wordList.appendChild(el));
    feedbackEl.textContent = "";
    card.classList.remove("sb-correct", "sb-wrong");

    // Zustand zurücksetzen
    hasReportedResult = false;
    isChecked = false;
    checkBtn.textContent = "Antwort prüfen";
    checkBtn.classList.remove("sb-btn-next");
    updateActionState();
  }

  checkBtn.addEventListener("click", () => {
    if (!isChecked) {
      // 1. Phase: Antwort prüfen
      handleCheck();
    } else {
      // 2. Phase: Weiter zur nächsten Frage/Lektion
      onNext();
    }
  });

  resetBtn.addEventListener("click", handleReset);
  updateActionState();
}
