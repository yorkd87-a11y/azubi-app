// content/jahr_1/Level_1/Abschnitt_1/lektion_6.js
// Lektion 6 – Betriebsordnung einhalten

const LEKTION_6 = {
  id: "j1_l1_a1_l6",
  jahr: 1,
  level: 1,
  section: 1,
  title: "Betriebsordnung & Salonregeln",
  track: "rechte_pflichten",
  energy: 15,

  questions: [
    // 1) SINGLE CHOICE – Was ist Betriebsordnung?
    {
      id: "j1_l1_a1_l6_q1",
      topic: "Grundlagen",
      gameType: "single_choice_quiz",
      question: "Was ist mit „Betriebsordnung“ im Salon gemeint?",
      options: [
        "Eine Liste mit Lieblingsfrisuren.",
        "Die Regeln und Abläufe im Salon, z. B. Kleiderordnung, Pausen, Kasse.",
        "Die Preisliste für Kunden."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig! Die Betriebsordnung regelt, wie im Salon gearbeitet und zusammengelebt wird.",
      feedbackWrong:
        "Nicht ganz. Es geht um die Regeln und Abläufe im Salon, nicht um Frisuren oder Preise.",
      bonusStrikeOnCorrect: true
    },

    // 2) TRUE / FALSE – Kasse
    {
      id: "j1_l1_a1_l6_q2",
      topic: "Kasse",
      gameType: "true_false_swipe",
      statement:
        "Beim Umgang mit der Kasse musst du besonders sorgfältig nach den Salonregeln arbeiten.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Kasse ist ein sensibler Bereich und braucht klare Regeln.",
      feedbackWrong:
        "Doch, das stimmt. Kasse heißt immer: Regeln genau einhalten.",
      bonusStrikeOnCorrect: true
    },

    // 3) GAP FILL #1 – 1 Fachwort
    {
      id: "j1_l1_a1_l6_q3",
      topic: "Betriebsordnung",
      gameType: "gap_fill",
      textBefore: "Die ",
      correctAnswer: "Betriebsordnung",
      textAfter: " legt fest, welche Regeln im Salon gelten.",
      options: ["Betriebsordnung", "Speisekarte", "Preisliste", "Playlist"],
      feedbackCorrect:
        "Richtig! Die Betriebsordnung bündelt alle wichtigen Regeln für den Salonalltag.",
      feedbackWrong:
        "Nicht ganz. Gesucht war die „Betriebsordnung“, in der die Regeln stehen.",
      bonusStrikeOnCorrect: true
    },

    // 4) SINGLE CHOICE – Kleiderordnung
    {
      id: "j1_l1_a1_l6_q4",
      topic: "Kleiderordnung",
      gameType: "single_choice_quiz",
      question: "Warum gibt es im Salon oft eine Kleiderordnung?",
      options: [
        "Damit alle gleich aussehen und niemand auffällt.",
        "Damit das Team ein einheitlich professionelles Bild abgibt.",
        "Nur, um Azubis zu ärgern."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau! Eine Kleiderordnung sorgt für ein professionelles, einheitliches Auftreten.",
      feedbackWrong:
        "Falsch. Es geht vor allem um einen professionellen Gesamteindruck.",
      bonusStrikeOnCorrect: true
    },

    // 5) MULTIPLE CHOICE – Was steht in der Betriebsordnung?
    {
      id: "j1_l1_a1_l6_q5",
      topic: "Betriebsordnung",
      gameType: "multiple_choice_quiz",
      question: "Welche Punkte können Teil der Betriebsordnung im Salon sein?",
      options: [
        "Umgang mit der Kasse.",
        "Pausenregelung.",
        "Regeln für Social Media im Salon.",
        "Deine Lieblingsmusik im Auto."
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "Super! Kasse, Pausen und Social Media sind typische Themen der Betriebsordnung.",
      feedbackWrong:
        "Fast. Deine Auto-Musik gehört nicht zur Betriebsordnung im Salon.",
      bonusStrikeOnCorrect: true
    },

    // 6) GAP FILL #2 – 2 Fachwörter in der Lücke
    {
      id: "j1_l1_a1_l6_q6",
      topic: "Betriebsordnung",
      gameType: "gap_fill",
      textBefore: "Zur Betriebsordnung gehören zum Beispiel Regeln zur ",
      correctAnswer: "Kleiderordnung und Pausenregelung",
      textAfter: ".",
      options: [
        "Kleiderordnung und Pausenregelung",
        "Musikauswahl und Lieblingsserien",
        "Zimmerpflanzen und Dekoration",
        "Privatauto und Wohnung"
      ],
      feedbackCorrect:
        "Richtig! Kleiderordnung und Pausenregelung sind typische Themen der Betriebsordnung.",
      feedbackWrong:
        "Nicht ganz. Gemeint waren „Kleiderordnung und Pausenregelung“ – zwei wichtige Fachbegriffe.",
      bonusStrikeOnCorrect: true
    },

    // 7) SCENARIO CHOICE – Handy im Salon (nach Spielepool-Schema)
    {
      id: "j1_l1_a1_l6_q7",
      topic: "Handy im Salon",
      gameType: "scenario_choice",
      situationTitle: "Handy-Regel im Salon: nur im Pausenraum",
      situationText:
        "Im Salon ist geregelt: Handy nur im Pausenraum. Es ist gerade ruhig, du hast kurz Leerlauf. Dein Handy vibriert in der Tasche.",
      options: [
        "Du wartest bis zur nächsten Pause und checkst es dann im Pausenraum.",
        "Du schaust heimlich am Platz aufs Handy – es sieht ja gerade niemand.",
        "Du legst dein Handy offen auf den Bedienplatz, damit du nichts verpasst."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Professionell: Du hältst dich an die Regel, auch wenn gerade weniger los ist.",
        "Das wirkt unprofessionell und verstößt gegen die Handy-Regel.",
        "Handys am Platz schrecken Kunden ab und sind meist nicht erlaubt."
      ],
      feedbackCorrect:
        "Super! Du nimmst die Handy-Regel ernst und bleibst professionell.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option die Regel wirklich respektiert.",
      bonusStrikeOnCorrect: true
    },

    // 8) TRUE / FALSE – Regeln sind wichtig
    {
      id: "j1_l1_a1_l6_q8",
      topic: "Regeln",
      gameType: "true_false_swipe",
      statement:
        "Betriebsordnung ist nur Deko – wichtig sind nur Fachtechniken.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Ohne klare Regeln funktioniert ein Salon-Alltag nicht gut.",
      feedbackWrong:
        "Falsch. Regeln im Betrieb sind genauso wichtig wie fachliche Techniken.",
      bonusStrikeOnCorrect: true
    },

    // 9) SENTENCE BUILDER – Warum Regeln wichtig sind
    {
      id: "j1_l1_a1_l6_q9",
      topic: "Betriebsordnung",
      gameType: "sentence_builder",
      type: "sentence_builder",
      question: "Warum sind Betriebsordnung und Salonregeln wichtig?",
      prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
      answer:
        "Die Betriebsordnung sorgt für Klarheit, Fairness und Sicherheit im Salon",
      extraWords: ["manchmal", "zufällig", "immer", "Privatsache"],
      // Platzhalter für Audio – später durch echte Datei ersetzen
      answerAudioUrl: "media/lektionen/Platzhalter_datei",
      bonusStrikeOnCorrect: true
    },

    // 10) MULTIPLE CHOICE – Professionelle Handynutzung
    {
      id: "j1_l1_a1_l6_q10",
      topic: "Handy-Regelungen",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Verhaltensweisen passen zu professioneller Handynutzung im Salon?",
      options: [
        "Handy nur in Pausen oder nach Absprache nutzen.",
        "Kunden niemals heimlich filmen oder fotografieren.",
        "Nachrichten während der Kundin am Waschbecken schreiben.",
        "Privattelefonate nur kurz und außer Sicht der Kunden führen, wenn erlaubt."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Richtig! Diskretion, Pausen und Absprache – so nutzt du dein Handy professionell.",
      feedbackWrong:
        "Nicht ganz. Während der Kundin am Waschbecken Nachrichten zu schreiben ist unprofessionell.",
      bonusStrikeOnCorrect: true
    },

    // 11) GAP FILL #3 – 3 Fachwörter in der Lücke
    {
      id: "j1_l1_a1_l6_q11",
      topic: "Betriebsordnung",
      gameType: "gap_fill",
      textBefore: "Zur Betriebsordnung gehören Regeln zu ",
      correctAnswer: "Kasse, Pausen und Handyregeln",
      textAfter: ".",
      options: [
        "Kasse, Pausen und Handyregeln",
        "Musik, Dekoration und Duftkerzen",
        "Autos, Wohnungen und Haustieren",
        "Urlaub, Feiertage und Wetter"
      ],
      feedbackCorrect:
        "Perfekt! Kasse, Pausen und Handyregeln sind drei zentrale Themen der Betriebsordnung.",
      feedbackWrong:
        "Nicht ganz. Gemeint war die Kombination „Kasse, Pausen und Handyregeln“ – drei wichtige Fachbegriffe.",
      bonusStrikeOnCorrect: true
    },

    // 12) TRUE / FALSE – Teampower
    {
      id: "j1_l1_a1_l6_q12",
      topic: "Teampower",
      gameType: "true_false_swipe",
      statement:
        "Wenn alle die Betriebsordnung einhalten, läuft der Salon-Alltag meist ruhiger und fairer.",
      isTrue: true,
      feedbackCorrect:
        "Genau! Gemeinsame Regeln sorgen für weniger Stress und mehr Klarheit.",
      feedbackWrong:
        "Doch, das stimmt. Gleiche Regeln für alle bringen Ruhe und Fairness.",
      bonusStrikeOnCorrect: true
    },

    // 13) MULTIPLE CHOICE – Regelverstöße
    {
      id: "j1_l1_a1_l6_q13",
      topic: "Regelverstöße",
      gameType: "multiple_choice_quiz",
      question:
        "Was könnte passieren, wenn du die Betriebsordnung dauerhaft ignorierst?",
      options: [
        "Es kommt zu Stress im Team.",
        "Kunden fühlen sich unwohl oder unsicher.",
        "Du wirst automatisch befördert.",
        "Du bekommst Gespräche oder Abmahnungen."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Genau! Regelverstöße können Stress, verunsicherte Kunden und ernste Gespräche auslösen.",
      feedbackWrong:
        "Falsch. Befördert wirst du so eher nicht – eher gibt es Stress und Gespräche.",
      bonusStrikeOnCorrect: true
    },

    // 14) SCENARIO CHOICE – Pause & Kundin (nach Spielepool-Schema)
    {
      id: "j1_l1_a1_l6_q14",
      topic: "Pausen & Kunden",
      gameType: "scenario_choice",
      situationTitle: "Pause beginnt – gleichzeitig kommt eine Kundin",
      situationText:
        "Deine Pause beginnt in fünf Minuten, aber es betritt eine Kundin den Salon. Deine Kollegin ist noch im Gespräch.",
      options: [
        "Du bleibst kurz professionell da, begrüßt die Kundin und klärst die Situation mit dem Team.",
        "Du gehst sofort in Pause und lässt die Kundin allein im Salon stehen.",
        "Du sagst der Kundin, sie soll warten, und gehst kommentarlos rauchen."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Genau! Kundenservice geht vor, danach kannst du deine Pause nehmen.",
        "Das wirkt unfreundlich und unprofessionell.",
        "So verlierst du Vertrauen. Besser ist eine kurze Klärung mit dem Team."
      ],
      feedbackCorrect:
        "Richtig! Du kombinierst Kundenservice mit klarer Absprache im Team.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option der Kundin das beste Gefühl gibt.",
      bonusStrikeOnCorrect: true
    },

    // 15) SINGLE CHOICE – Pausenverhalten
    {
      id: "j1_l1_a1_l6_q15",
      topic: "Pausen",
      gameType: "single_choice_quiz",
      question: "Wie verhalten sich Profis bei Pausenzeiten?",
      options: [
        "Sie halten Absprachen und Pausenzeiten ein.",
        "Sie gehen einfach, wenn sie gerade Hunger haben.",
        "Sie verlängern die Pause heimlich, wenn es ruhig ist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Pausen werden abgesprochen und eingehalten.",
      feedbackWrong:
        "Falsch. Spontan zu verschwinden oder zu verlängern ist unprofessionell.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_6;
