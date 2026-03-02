// content/jahr_1/Level_1/Abschnitt_1/lektion_5.js
// Lektion 5 – Berichtsheft führen

const LEKTION_5 = {
  id: "j1_l1_a1_l5",
  jahr: 1,
  level: 1,
  section: 1,
  title: "Das Berichtsheft",
  track: "rechte_pflichten",
  energy: 15,

  questions: [
    // 1) SINGLE CHOICE – Was ist das Berichtsheft?
    {
      id: "j1_l1_a1_l5_q1",
      topic: "Grundlagen",
      gameType: "single_choice_quiz",
      question: "Was ist das Berichtsheft (Ausbildungsnachweis)?",
      options: [
        "Ein privates Tagebuch über deine Gefühle.",
        "Eine Sammlung von Notizen, die niemand sehen darf.",
        "Ein offizieller Nachweis, was du in der Ausbildung gelernt und gemacht hast."
      ],
      correctIndex: 2,
      feedbackCorrect:
        "Richtig! Das Berichtsheft dokumentiert offiziell deine Lerninhalte.",
      feedbackWrong:
        "Nicht ganz. Es ist ein offizieller Nachweis über deine Ausbildung, kein privates Tagebuch.",
      bonusStrikeOnCorrect: true
    },

    // 2) TRUE / FALSE – Pflicht
    {
      id: "j1_l1_a1_l5_q2",
      topic: "Pflicht",
      gameType: "true_false_swipe",
      statement: "Das Berichtsheft zu führen ist deine Pflicht als Azubi.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Das gehört fest zu deinen Aufgaben.",
      feedbackWrong:
        "Doch, das stimmt. Das Berichtsheft ist eine klare Azubi-Pflicht.",
      bonusStrikeOnCorrect: true
    },

    // 3) GAP FILL #1 – 1 Fachwort
    {
      id: "j1_l1_a1_l5_q3",
      topic: "Begriff",
      gameType: "gap_fill",
      textBefore: "Das Berichtsheft wird auch ",
      correctAnswer: "Ausbildungsnachweis",
      textAfter: " genannt.",
      options: ["Ausbildungsnachweis", "Urlaubsschein", "Lohnbuch", "Dienstplan"],
      feedbackCorrect:
        "Richtig! Ausbildungsnachweis ist der offizielle Begriff.",
      feedbackWrong:
        "Nicht ganz. Gesucht war „Ausbildungsnachweis“.",
      bonusStrikeOnCorrect: true
    },

    // 4) SINGLE CHOICE – Warum ist es wichtig?
    {
      id: "j1_l1_a1_l5_q4",
      topic: "Pflicht",
      gameType: "single_choice_quiz",
      question: "Warum ist das Berichtsheft so wichtig?",
      options: [
        "Es ist notwendig für deine Prüfungszulassung.",
        "Es ist nur eine freiwillige extra Aufgabe.",
        "Es ist nur für den Chef interessant."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Ohne ordentlich geführtes Berichtsheft kann es Probleme bei der Prüfung geben.",
      feedbackWrong:
        "Falsch. Das Berichtsheft ist Pflicht und wichtig für deine Prüfungszulassung.",
      bonusStrikeOnCorrect: true
    },

    // 5) MATCH PAIRS – Begriffe
    {
      id: "j1_l1_a1_l5_q5",
      topic: "Begriffe",
      gameType: "match_pairs",
      prompt: "Ordne die Begriffe rund um das Berichtsheft den passenden Bedeutungen zu.",
      pairs: [
        {
          left: "Berichtsheft",
          right: "Dokumentiert deine Lerninhalte und Tätigkeiten."
        },
        {
          left: "Ausbilder",
          right: "Kontrolliert und unterschreibt dein Berichtsheft regelmäßig."
        },
        {
          left: "Berufsschule",
          right: "Auch hier gemachte Lerninhalte trägst du ein."
        }
      ],
      feedbackCorrect:
        "Super! Du kennst die wichtigsten Begriffe rund ums Berichtsheft.",
      feedbackWrong:
        "Schau dir die Begriffe noch mal an: Wer unterschreibt? Was wird dokumentiert?",
      bonusStrikeOnCorrect: true
    },

    // 6) GAP FILL #2 – 2 Fachwörter
    {
      id: "j1_l1_a1_l5_q6",
      topic: "Inhalt",
      gameType: "gap_fill",
      textBefore: "Du trägst ein, was du ",
      correctAnswer: "gelernt und geübt",
      textAfter:
        " hast und welche Tätigkeiten du im Salon oder in der Schule gemacht hast.",
      options: [
        "gelernt und geübt",
        "gegessen und getrunken",
        "gekauft und verkauft",
        "gescrollt und gepostet"
      ],
      feedbackCorrect:
        "Genau! Es geht darum, was du fachlich gelernt und geübt hast.",
      feedbackWrong:
        "Nicht ganz. Der Fokus liegt auf dem, was du gelernt und geübt hast – nicht auf Essen oder Social Media.",
      bonusStrikeOnCorrect: true
    },

    // 7) TRUE / FALSE – Ausbilder unterschreibt
    {
      id: "j1_l1_a1_l5_q7",
      topic: "Ausbilder",
      gameType: "true_false_swipe",
      statement:
        "Dein Ausbilder muss dein Berichtsheft regelmäßig kontrollieren und unterschreiben.",
      isTrue: true,
      feedbackCorrect:
        "Genau! So wird bestätigt, dass deine Einträge stimmen.",
      feedbackWrong:
        "Falsch. Dein Ausbilder soll dein Berichtsheft regelmäßig prüfen und unterschreiben.",
      bonusStrikeOnCorrect: true
    },

    // 8) SENTENCE BUILDER – Wie führen?
    {
      id: "j1_l1_a1_l5_q8",
      topic: "Regelmäßigkeit",
      gameType: "sentence_builder",
      type: "sentence_builder",
      question: "Wie solltest du dein Berichtsheft führen?",
      prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
      answer: "Du führst dein Berichtsheft regelmäßig und sorgfältig nach der vorgegebenen Struktur",
      extraWords: ["manchmal", "spontan", "nur", "vorher"],
      answerAudioUrl: "media/lektionen/lv1_A1_l5_f8.wav",
      bonusStrikeOnCorrect: true
    },

    // 9) MATCH PAIRS – Zweck
    {
      id: "j1_l1_a1_l5_q9",
      topic: "Zweck",
      gameType: "match_pairs",
      prompt: "Ordne zu, welche Rolle das Berichtsheft in Ausbildung und Prüfung spielt.",
      pairs: [
        {
          left: "Prüfung",
          right: "Hier wird geschaut, ob dein Berichtsheft vollständig ist."
        },
        {
          left: "Regelmäßiges Schreiben",
          right: "Hilft dir, den Überblick über deine Ausbildung zu behalten."
        },
        {
          left: "Unterschrift",
          right: "Bestätigung, dass der Ausbilder deine Einträge gesehen hat."
        }
      ],
      feedbackCorrect:
        "Richtig! Du hast den Zweck des Berichtshefts gut verstanden.",
      feedbackWrong:
        "Nicht ganz. Achte darauf, wie Berichtsheft und Prüfung zusammenhängen.",
      bonusStrikeOnCorrect: true
    },

    // 10) GAP FILL #3 – 3 Fachwörter
    {
      id: "j1_l1_a1_l5_q10",
      topic: "Prüfung",
      gameType: "gap_fill",
      textBefore:
        "Ein ordentlich geführtes Berichtsheft ist wichtig für deine ",
      correctAnswer: "Zwischenprüfung, Abschlussprüfung und Prüfungszulassung",
      textAfter: ".",
      options: [
        "Zwischenprüfung, Abschlussprüfung und Prüfungszulassung",
        "Mittagspause, Urlaubsplanung und Social-Media-Posts",
        "Freistunden, Pausen und Feiertage",
        "Frisurenideen, Trends und Mode"
      ],
      feedbackCorrect:
        "Richtig! Das Berichtsheft spielt bei Zwischenprüfung, Abschlussprüfung und Prüfungszulassung eine wichtige Rolle.",
      feedbackWrong:
        "Nicht ganz. Es geht um Zwischenprüfung, Abschlussprüfung und deine Prüfungszulassung.",
      bonusStrikeOnCorrect: true
    },

    // 11) ORDER STEPS – Ideal führen
    {
      id: "j1_l1_a1_l5_q11",
      topic: "Ablauf",
      gameType: "order_steps",
      prompt:
        "Bringe in die richtige Reihenfolge, wie du dein Berichtsheft ideal führst.",
      items: [
        "Du sammelst über die Woche, was du gelernt und gemacht hast.",
        "Du trägst deine Tätigkeiten und Lerninhalte regelmäßig ein.",
        "Dein Ausbilder kontrolliert und unterschreibt deinen Eintrag."
      ],
      feedbackCorrect:
        "Perfekt! So läuft das Berichtsheft sauber und stressfrei.",
      feedbackWrong:
        "Nicht ganz. Erst sammeln, dann eintragen, dann unterschreiben lassen.",
      bonusStrikeOnCorrect: true
    },

    // 12) TRUE / FALSE – Nachtragen am Ende
    {
      id: "j1_l1_a1_l5_q12",
      topic: "Nachtragen",
      gameType: "true_false_swipe",
      statement:
        "Es ist okay, das Berichtsheft komplett am Ende der Ausbildung aus der Erinnerung zu schreiben.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Das wäre ungenau und riskant – du sollst es regelmäßig führen.",
      feedbackWrong:
        "Nein. Alles am Ende zu schreiben ist ungenau und kann Probleme machen.",
      bonusStrikeOnCorrect: true
    },

    // 13) MATCH PAIRS – Verantwortung
    {
      id: "j1_l1_a1_l5_q13",
      topic: "Verantwortung",
      gameType: "match_pairs",
      prompt: "Wer hat welche Verantwortung rund ums Berichtsheft?",
      pairs: [
        {
          left: "Azubi",
          right: "Ist verantwortlich dafür, das Berichtsheft zu führen."
        },
        {
          left: "Betrieb",
          right: "Muss dir Zeit geben, das Berichtsheft zu schreiben."
        },
        {
          left: "Kammer / Innung",
          right: "Prüft im Zweifel, ob das Berichtsheft geführt wurde."
        }
      ],
      feedbackCorrect:
        "Top! Du weißt, wer was rund ums Berichtsheft zu tun hat.",
      feedbackWrong:
        "Schau dir noch einmal an, welche Rolle Azubi, Betrieb und Kammer haben.",
      bonusStrikeOnCorrect: true
    },

    // 14) SINGLE CHOICE – Inhalte
    {
      id: "j1_l1_a1_l5_q14",
      topic: "Inhalte",
      gameType: "single_choice_quiz",
      question: "Was trägst du in dein Berichtsheft ein?",
      options: [
        "Was du fachlich gelernt und geübt hast.",
        "Nur die besten Momente mit Freunden.",
        "Die genaue Uhrzeit jeder Pause."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Im Berichtsheft stehen deine Lerninhalte und Tätigkeiten.",
      feedbackWrong:
        "Falsch. Es geht um fachliche Inhalte, nicht um private Erlebnisse oder Pausenzeiten.",
      bonusStrikeOnCorrect: true
    },

    // 15) ORDER STEPS – Nachholen
    {
      id: "j1_l1_a1_l5_q15",
      topic: "Nachholen",
      gameType: "order_steps",
      prompt:
        "Sortiere, wie du vorgehst, wenn du ein paar Wochen im Berichtsheft nachtragen musst.",
      items: [
        "Du sammelst deine Termine, Pläne und Notizen aus der Zeit.",
        "Du trägst die Inhalte so gut wie möglich nach.",
        "Du sprichst mit deinem Ausbilder, wenn etwas unklar ist."
      ],
      feedbackCorrect:
        "Gut! So holst du versäumte Einträge möglichst ordentlich nach.",
      feedbackWrong:
        "Noch nicht ganz. Erst Infos sammeln, dann nachtragen und Unklares mit dem Ausbilder klären.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_5;
