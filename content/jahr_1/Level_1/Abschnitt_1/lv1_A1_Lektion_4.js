// content/jahr_1/Level_1/Abschnitt_1/lektion_4.js
// Lektion 4 – Sorgfalt bei der Arbeit

const LEKTION_4 = {
  id: "j1_l1_a1_l4",
  jahr: 1,
  level: 1,
  section: 1,
  title: "Sorgfalt bei der Arbeit",
  track: "rechte_pflichten",
  energy: 15,

  questions: [
    // 1) SINGLE CHOICE – Was ist Sorgfalt?
    {
      id: "j1_l1_a1_l4_q1",
      topic: "Sorgfalt",
      gameType: "single_choice_quiz",
      question: "Was bedeutet Sorgfalt bei der Arbeit im Friseursalon?",
      options: [
        "Du machst alles so schnell wie möglich.",
        "Du gehst sorgfältig mit Kunden, Material und Arbeitsmitteln um.",
        "Du machst nur das, worauf du gerade Lust hast."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig! Sorgfalt heißt, bewusst und aufmerksam mit allem im Salon umzugehen.",
      feedbackWrong:
        "Nicht ganz. Es geht um bewussten und respektvollen Umgang mit Kunden, Material und Werkzeug.",
      bonusStrikeOnCorrect: true
    },

    // 2) TRUE / FALSE – Mischungsverhältnisse
    {
      id: "j1_l1_a1_l4_q2",
      topic: "Mischungsverhältnisse",
      gameType: "true_false_swipe",
      statement:
        "Mischungsverhältnisse bei Farbe sind nur grobe Vorschläge – du kannst sie nach Gefühl ändern.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Mischungsverhältnisse sind wichtig für Ergebnis und Sicherheit.",
      feedbackWrong:
        "Nein. Falsche Mischungen können Haar, Kopfhaut und Ergebnis schädigen.",
      bonusStrikeOnCorrect: true
    },

    // 3) GAP FILL #1 – 1 Fachwort
    {
      id: "j1_l1_a1_l4_q3",
      topic: "Sorgfalt",
      gameType: "gap_fill",
      textBefore: "Sorgfalt bedeutet, dass du dich an ",
      correctAnswer: "Anweisungen",
      textAfter: " hältst und genau arbeitest.",
      options: ["Anweisungen", "Launen", "Trends", "Werbung"],
      feedbackCorrect:
        "Richtig! Anweisungen helfen dir, sicher und fachlich korrekt zu arbeiten.",
      feedbackWrong:
        "Nicht ganz. Gesucht waren die Anweisungen – die geben dir Sicherheit.",
      bonusStrikeOnCorrect: true
    },

    // 4) SINGLE CHOICE – Material / Produkte
    {
      id: "j1_l1_a1_l4_q4",
      topic: "Material",
      gameType: "single_choice_quiz",
      question: "Wie gehst du sorgfältig mit Farben und Pflegeprodukten um?",
      options: [
        "Du nutzt einfach nach Gefühl viel Produkt.",
        "Du beachtest Mengenangaben und Mischungsverhältnisse.",
        "Du mischst alles, was du findest, damit es stärker wirkt."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau! Mengenangaben und Mischungsverhältnisse sind wichtig für Ergebnis und Sicherheit.",
      feedbackWrong:
        "Falsch. Sorgfalt heißt, die vorgegebenen Mengen und Mischungsverhältnisse einzuhalten.",
      bonusStrikeOnCorrect: true
    },

    // 5) MULTIPLE CHOICE – Sorgfalt im Alltag
    {
      id: "j1_l1_a1_l4_q5",
      topic: "Sorgfalt im Alltag",
      gameType: "multiple_choice_quiz",
      question: "Welche Situationen zeigen sorgfältiges Arbeiten im Salon?",
      options: [
        "Du prüfst Einwirkzeiten und schaust regelmäßig nach der Kundin.",
        "Du stellst benutzte Geräte direkt wieder sicher und sauber weg.",
        "Du lässt Farbkleckse einfach liegen.",
        "Du liest Sicherheitshinweise auf Produkten."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Super! Kontrolle, Ordnung und Lesen von Hinweisen sind klare Zeichen für Sorgfalt.",
      feedbackWrong:
        "Fast. Farbkleckse liegen zu lassen ist kein sorgfältiges Arbeiten.",
      bonusStrikeOnCorrect: true
    },

    // 6) GAP FILL #2 – 2 Fachwörter
    {
      id: "j1_l1_a1_l4_q6",
      topic: "Farbbehandlung",
      gameType: "gap_fill",
      textBefore: "Bei Farbbehandlungen achtest du auf ",
      correctAnswer: "Mischungsverhältnisse und Einwirkzeiten",
      textAfter: " für ein sicheres und schönes Ergebnis.",
      options: [
        "Mischungsverhältnisse und Einwirkzeiten",
        "Rabatte und Social Media",
        "Kundenkarte und Musik",
        "Frisurenbilder und Dekoration"
      ],
      feedbackCorrect:
        "Richtig! Mischungsverhältnisse und Einwirkzeiten sind zwei zentrale Fachbegriffe bei sorgfältiger Farbarbeit.",
      feedbackWrong:
        "Nicht ganz. Gemeint sind „Mischungsverhältnisse und Einwirkzeiten“ – das sind die wichtigen Fachwörter hier.",
      bonusStrikeOnCorrect: true
    },

    // 7) SCENARIO CHOICE – Blondierung / Einwirkzeit
    {
      id: "j1_l1_a1_l4_q7",
      topic: "Farbbehandlung",
      gameType: "scenario_choice",
      situationTitle: "Blondierung mit klarer Einwirkzeit",
      situationText:
        "Du hast für eine Kundin Blondierung gemischt. Deine Ausbilderin hat dir eine bestimmte Einwirkzeit genannt. Jetzt fragt dich eine Kollegin, ob du noch schnell etwas anderes dazwischen machen kannst.",
      options: [
        "Du bleibst in der Nähe der Kundin und kontrollierst die Einwirkzeit genau.",
        "Du gehst einfach mit und hoffst, dass schon nichts passiert.",
        "Du stellst die Uhr länger, damit du mehr Zeit hast."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Bei chemischen Behandlungen hat Sorgfalt Vorrang.",
        "Das ist riskant. Die Kundin könnte Schäden erleiden.",
        "Falsche Zeiten können das Haar stark schädigen. Besser ist genaue Einhaltung."
      ],
      feedbackCorrect:
        "Genau! Bei Blondierung ist sorgfältige Kontrolle der Einwirkzeit extrem wichtig.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option die Kundin am besten schützt und die Einwirkzeit ernst nimmt.",
      bonusStrikeOnCorrect: true
    },

    // 8) TRUE / FALSE – Kundenumgang
    {
      id: "j1_l1_a1_l4_q8",
      topic: "Kundenumgang",
      gameType: "true_false_swipe",
      statement:
        "Sorgfalt bedeutet auch, Kundinnen zuzuhören und Rückfragen zu stellen, bevor du loslegst.",
      isTrue: true,
      feedbackCorrect:
        "Genau! Gute Beratung und Nachfragen gehören zur sorgfältigen Arbeitsweise.",
      feedbackWrong:
        "Doch, das stimmt. Wer sorgfältig arbeitet, hört den Kunden gut zu.",
      bonusStrikeOnCorrect: true
    },

    // 9) SENTENCE BUILDER – Satz zu Sorgfalt + Audio
    {
      id: "j1_l1_a1_l4_q9",
      topic: "Sorgfalt",
      gameType: "sentence_builder",
      type: "sentence_builder",
      question: "Warum ist sorgfältiges Arbeiten im Salon wichtig?",
      prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
      answer:
        "Sorgfältiges Arbeiten schützt deine Kundin, das Haar und deine Gesundheit",
      extraWords: ["immer", "schnell", "ungefähr", "Handy"],
      answerAudioUrl: "media/lektionen/lv1_A1_l4_f9.wav",
      bonusStrikeOnCorrect: true
    },

    // 10) MULTIPLE CHOICE – Materialverbrauch
    {
      id: "j1_l1_a1_l4_q10",
      topic: "Materialverbrauch",
      gameType: "multiple_choice_quiz",
      question: "Wie gehst du sorgfältig mit Material um?",
      options: [
        "Du wiegst Farbe ab, statt viel zu viel zu mischen.",
        "Du verschwendest absichtlich Produkt, damit es ‚luxuriöser‘ wirkt.",
        "Du nutzt Handtücher sparsam und wechselst sie nur, wenn nötig und hygienisch.",
        "Du hältst dich an die Vorgaben des Salons."
      ],
      correctIndices: [0, 2, 3],
      feedbackCorrect:
        "Richtig! Sorgfalt bedeutet auch, Material bewusst, sparsam und nach Vorgabe zu nutzen.",
      feedbackWrong:
        "Nicht ganz. Es geht um bewusstes Abwiegen, sinnvollen Handtuch-Einsatz und Einhalten der Vorgaben.",
      bonusStrikeOnCorrect: true
    },

    // 11) GAP FILL #3 – 3 Fachwörter
    {
      id: "j1_l1_a1_l4_q11",
      topic: "Werkzeugpflege",
      gameType: "gap_fill",
      textBefore: "Zu sorgfältiger Werkzeugpflege gehören ",
      correctAnswer: "Reinigung, Desinfektion und Aufbewahrung",
      textAfter: " deines Werkzeugs.",
      options: [
        "Reinigung, Desinfektion und Aufbewahrung",
        "Musik, Deko und Werbung",
        "Social Media, Selfies und Filter",
        "Rabatte, Gutscheine und Aktionen"
      ],
      feedbackCorrect:
        "Perfekt! Reinigung, Desinfektion und richtige Aufbewahrung sind drei wichtige Fachbegriffe in der Werkzeugpflege.",
      feedbackWrong:
        "Nicht ganz. Gemeint sind „Reinigung, Desinfektion und Aufbewahrung“ – das sind die drei zentralen Schritte.",
      bonusStrikeOnCorrect: true
    },

    // 12) ORDER STEPS – Anweisungen umsetzen
    {
      id: "j1_l1_a1_l4_q12",
      topic: "Anweisungen",
      gameType: "order_steps",
      prompt:
        "Bringe die Schritte in die richtige Reihenfolge, wenn dir deine Ausbilderin eine neue Technik erklärt.",
      items: [
        "Du hörst aufmerksam zu und lässt dir die Schritte erklären.",
        "Du stellst Rückfragen, wenn du etwas nicht verstanden hast.",
        "Du führst die Technik Schritt für Schritt so aus, wie erklärt."
      ],
      feedbackCorrect:
        "Super! Zuhören, Nachfragen und dann sorgfältig umsetzen – so lernst du sicher.",
      feedbackWrong:
        "Noch nicht ganz. Erst zuhören, dann Rückfragen stellen und danach sorgfältig ausführen.",
      bonusStrikeOnCorrect: true
    },

    // 13) TRUE / FALSE – Werkzeug sauber
    {
      id: "j1_l1_a1_l4_q13",
      topic: "Werkzeugpflege",
      gameType: "true_false_swipe",
      statement:
        "Es ist egal, ob deine Schere sauber ist – Hauptsache, sie schneidet.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Sauberes, gepflegtes Werkzeug ist Pflicht und Zeichen von Professionalität.",
      feedbackWrong:
        "Falsch. Saubere, gepflegte Werkzeuge sind extrem wichtig – für Hygiene und Qualität.",
      bonusStrikeOnCorrect: true
    },

    // 14) SCENARIO CHOICE – Feierabend & Werkzeug
    {
      id: "j1_l1_a1_l4_q14",
      topic: "Werkzeugpflege",
      gameType: "scenario_choice",
      situationTitle: "Feierabend nach einem stressigen Tag",
      situationText:
        "Nach einem stressigen Tag liegen Kämme, Bürsten und Scheren überall auf deinem Platz. Du bist müde und willst Feierabend machen.",
      options: [
        "Du räumst und reinigst dein Werkzeug noch sorgfältig, bevor du gehst.",
        "Du lässt alles liegen, die Frühschicht wird es schon aufräumen.",
        "Du schiebst alles in eine Schublade und machst am nächsten Tag weiter."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Genau! Sorgfalt gilt auch am Ende des Tages – sauberes Werkzeug ist Pflicht.",
        "Das ist unfair und unsauber. Jeder ist für seinen Platz verantwortlich.",
        "Unsortiertes, ungereinigtes Werkzeug ist weder hygienisch noch professionell."
      ],
      feedbackCorrect:
        "Richtig! Dein Platz und dein Werkzeug sollten am Ende des Tages sorgfältig aufgeräumt sein.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option zu sauberem, hygienischem Werkzeug und einem guten Teamgefühl führt.",
      bonusStrikeOnCorrect: true
    },

    // 15) MULTIPLE CHOICE – Eigenverantwortung
    {
      id: "j1_l1_a1_l4_q15",
      topic: "Eigenverantwortung",
      gameType: "multiple_choice_quiz",
      question: "Was tust du, wenn du dir bei einer Anweisung unsicher bist?",
      options: [
        "Du fragst nach, bevor du startest.",
        "Du machst einfach irgendetwas und hoffst, es passt.",
        "Du bittest darum, es dir noch einmal zu zeigen.",
        "Du wartest, bis jemand anders die Aufgabe übernimmt."
      ],
      correctIndices: [0, 2],
      feedbackCorrect:
        "Genau! Nachfragen und zeigen lassen sind Zeichen von sorgfältiger, verantwortungsvoller Arbeit.",
      feedbackWrong:
        "Falsch. Sorgfalt heißt nicht raten, sondern nachfragen und um Erklärung bitten.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_4;
