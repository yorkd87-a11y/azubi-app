// content/jahr_1/Level_1/Abschnitt_1/lektion_3.js
// Lektion 3 – Pünktlichkeit & Anwesenheit

const LEKTION_3 = {
  id: "j1_l1_a1_l3",
  jahr: 1,
  level: 1,
  section: 1,
  title: "Pünktlichkeit & Anwesenheit",
  track: "rechte_pflichten",
  energy: 15,

  questions: [
    // 1) SINGLE CHOICE – Einstieg: Warum Pünktlichkeit?
    {
      id: "j1_l1_a1_l3_q1",
      topic: "Pünktlichkeit",
      gameType: "single_choice_quiz",
      question: "Warum ist Pünktlichkeit im Friseursalon so wichtig?",
      options: [
        "Weil sonst nur der Chef genervt ist.",
        "Weil Kunden, Team und Terminplanung auf dich zählen.",
        "Weil du dann früher nach Hause gehen darfst."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau! Pünktlichkeit zeigt Respekt vor Kunden, Team und Terminplanung.",
      feedbackWrong:
        "Nicht ganz. Es geht darum, dass Kunden, Team und die Planung sich auf dich verlassen können.",
      bonusStrikeOnCorrect: true
    },

    // 2) TRUE / FALSE – Zu-spät-Kommen
    {
      id: "j1_l1_a1_l3_q2",
      topic: "Pünktlichkeit",
      gameType: "true_false_swipe",
      statement:
        "Fünf Minuten zu spät ist im Friseursalon kein Problem, wenn es jeden Tag passiert.",
      isTrue: false,
      feedbackCorrect:
        "Genau! Dauerhaftes Zu-spät-Kommen wirkt unzuverlässig und stört den Ablauf.",
      feedbackWrong:
        "Nein. Wenn du regelmäßig zu spät kommst, wirkt das unprofessionell und belastet das Team.",
      bonusStrikeOnCorrect: true
    },

    // 3) GAP FILL #1 – 1 Fachwort
    {
      id: "j1_l1_a1_l3_q3",
      topic: "Pünktlichkeit",
      gameType: "gap_fill",
      textBefore: "Im Salon ist ",
      correctAnswer: "Pünktlichkeit",
      textAfter:
        " besonders wichtig, damit Termine und Abläufe gut klappen.",
      options: ["Pünktlichkeit", "Lautstärke", "Schmuck", "Pause"],
      feedbackCorrect:
        "Richtig! Pünktlichkeit ist die Basis für einen entspannten Ablauf im Salon.",
      feedbackWrong:
        "Nicht ganz. Gemeint ist „Pünktlichkeit“ – darum dreht sich diese Pflicht.",
      bonusStrikeOnCorrect: true
    },

    // 4) SCENARIO CHOICE – Zu spät wegen Bus
    {
      id: "j1_l1_a1_l3_q4",
      topic: "Zu-spät-Kommen",
      gameType: "scenario_choice",
      situationTitle: "Regelmäßig zu spät wegen des Busses",
      situationText:
        "Du kommst mehrmals im Monat 10 Minuten zu spät, weil du den Bus knapp nimmst. Dein Team merkt es und die Stimmung kippt.",
      options: [
        "Du stellst deinen Wecker früher und nimmst einen früheren Bus, damit du pünktlich bist.",
        "Du erklärst jedem Kunden, dass die Bahn schuld ist und du nichts dafür kannst.",
        "Du hoffst, dass es niemandem mehr auffällt und machst einfach weiter wie bisher."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Du übernimmst Verantwortung und planst mehr Zeit ein.",
        "Das wirkt unprofessionell. Kunden interessiert deine Ausrede nicht – sie wollen Service.",
        "So ändert sich nichts. Besser ist es, dein Verhalten aktiv zu verbessern."
      ],
      feedbackCorrect:
        "Genau so übernimmst du Verantwortung und sorgst für Zuverlässigkeit.",
      feedbackWrong:
        "Nicht ganz. Es gibt eine Option, bei der du aktiv dein Verhalten verbesserst und pünktlich wirst.",
      bonusStrikeOnCorrect: true
    },

    // 5) SINGLE CHOICE – Berufsschultage
    {
      id: "j1_l1_a1_l3_q5",
      topic: "Anwesenheit Berufsschule",
      gameType: "single_choice_quiz",
      question: "Was gehört zu deiner Pflicht bei Berufsschultagen?",
      options: [
        "Du gehst nur hin, wenn du Lust hast.",
        "Du erscheinst pünktlich und nimmst am Unterricht teil.",
        "Du bleibst im Salon, weil Praxis immer wichtiger ist."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig! Berufsschule gehört fest zu deiner Ausbildung – pünktliche Teilnahme ist Pflicht.",
      feedbackWrong:
        "Falsch. Berufsschule ist Teil deiner Ausbildung und du musst pünktlich teilnehmen.",
      bonusStrikeOnCorrect: true
    },

    // 6) GAP FILL #2 – 2 Fachwörter
    {
      id: "j1_l1_a1_l3_q6",
      topic: "Pflichten Azubi",
      gameType: "gap_fill",
      textBefore: "Für deine Ausbildung sind ",
      correctAnswer: "Pünktlichkeit und Anwesenheit",
      textAfter: " besonders wichtig.",
      options: [
        "Pünktlichkeit und Anwesenheit",
        "Urlaub und Freizeit",
        "Schmuck und Make-up",
        "Instagram und TikTok"
      ],
      feedbackCorrect:
        "Genau! Pünktlichkeit und Anwesenheit sind die Grundlage für eine erfolgreiche Ausbildung.",
      feedbackWrong:
        "Nicht ganz. Gesucht waren „Pünktlichkeit und Anwesenheit“ – darum geht es bei deinen Grundpflichten.",
      bonusStrikeOnCorrect: true
    },

    // 7) TRUE / FALSE – Krankmeldung
    {
      id: "j1_l1_a1_l3_q7",
      topic: "Krankheit",
      gameType: "true_false_swipe",
      statement:
        "Wenn du krank bist, solltest du dich noch vor Arbeitsbeginn im Salon melden.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Das Team muss planen können, ob du kommst oder nicht.",
      feedbackWrong:
        "Doch, das stimmt. Bei Krankheit musst du Bescheid geben, damit der Salon planen kann.",
      bonusStrikeOnCorrect: true
    },

    // 8) SENTENCE BUILDER – Antwortsatz bauen + Audio
    {
      id: "j1_l1_a1_l3_q8",
      topic: "Pünktlichkeit",
      gameType: "sentence_builder",
      // type ist für den Renderer optional, kann aber gesetzt werden
      type: "sentence_builder",
      question: "Warum ist Pünktlichkeit im Salon wichtig?",
      prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
      answer: "Pünktlichkeit zeigt Respekt vor Kunden und Team",
      extraWords: ["manchmal", "Handy", "später", "immer"],
      // Platzhalter-Audio – wird später mit echter Datei ersetzt
      answerAudioUrl: "media/lektionen/lv3_f8.wav",
      bonusStrikeOnCorrect: true
    },

    // 9) SCENARIO CHOICE – Krank vor Dienstbeginn
    {
      id: "j1_l1_a1_l3_q9",
      topic: "Krankmeldung",
      gameType: "scenario_choice",
      situationTitle: "Stark krank vor Dienstbeginn",
      situationText:
        "Du fühlst dich morgens sehr schlecht, kannst kaum aufstehen. In zwei Stunden beginnt dein Dienst.",
      options: [
        "Du meldest dich direkt im Salon krank und klärst, ob und wann eine Krankmeldung nötig ist.",
        "Du kommst trotzdem, damit niemand denkt, du wärst schwach.",
        "Du meldest dich gar nicht und bleibst einfach im Bett."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Genau! So kann der Salon planen und du kommst deiner Pflicht nach.",
        "Krank im Salon zu arbeiten kann dich und andere gefährden. Ehrliche Krankmeldung ist professionell.",
        "Das ist unzuverlässig. Der Salon weiß dann nicht, warum du fehlst."
      ],
      feedbackCorrect:
        "Richtig! So gehst du verantwortungsvoll mit Krankheit und deinem Team um.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option dem Salon am meisten Planungssicherheit gibt.",
      bonusStrikeOnCorrect: true
    },

    // 10) GAP FILL #3 – 3 Fachwörter
    {
      id: "j1_l1_a1_l3_q10",
      topic: "Krankmeldung",
      gameType: "gap_fill",
      textBefore: "Bei Krankheit sind ",
      correctAnswer: "Abmeldung, Krankmeldung und Attest",
      textAfter: " wichtig, damit der Salon planen kann.",
      options: [
        "Abmeldung, Krankmeldung und Attest",
        "Frisuren, Farben und Strähnen",
        "Instagram, WhatsApp und TikTok",
        "Kaffee, Frühstück und Schminken"
      ],
      feedbackCorrect:
        "Perfekt! Abmeldung, Krankmeldung und Attest sorgen dafür, dass der Salon genau weiß, was los ist.",
      feedbackWrong:
        "Nicht ganz. Gemeint sind „Abmeldung, Krankmeldung und Attest“ – das sind die wichtigen Schritte bei Krankheit.",
      bonusStrikeOnCorrect: true
    },

    // 11) ORDER STEPS – Krankheitsablauf
    {
      id: "j1_l1_a1_l3_q11",
      topic: "Krankheitsablauf",
      gameType: "order_steps",
      prompt:
        "Bringe die Schritte in die richtige Reihenfolge, wenn du merkst, dass du krank bist.",
      items: [
        "Du meldest dich rechtzeitig im Salon oder in der Berufsschule krank.",
        "Du gehst – wenn nötig – zum Arzt und lässt dich krankschreiben.",
        "Du reichst deine Krankmeldung fristgerecht ein."
      ],
      // Wenn correctOrder nicht gesetzt ist, gelten items als korrekte Reihenfolge.
      feedbackCorrect:
        "Perfekt! So gehst du professionell mit Krankheit um.",
      feedbackWrong:
        "Nicht ganz. Erst meldest du dich krank, dann Arztbesuch (wenn nötig) und danach die Krankmeldung einreichen.",
      bonusStrikeOnCorrect: true
    },

    // 12) SINGLE CHOICE – Fieber am Morgen
    {
      id: "j1_l1_a1_l3_q12",
      topic: "Krankmeldung",
      gameType: "single_choice_quiz",
      question:
        "Was machst du, wenn du morgens Fieber hast und nicht arbeiten kannst?",
      options: [
        "Du schläfst einfach aus und meldest dich später irgendwann.",
        "Du meldest dich rechtzeitig im Salon krank, gehts zum umgehend zum Arzt und gibst eine Krankmeldung ab.",
        "Du schreibst einer Kollegin auf Instagram und hoffst, dass sie es weitergibt."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau! Du meldest dich direkt im Salon krank und reichst die Krankmeldung ein.",
      feedbackWrong:
        "Nicht richtig. Du musst dich rechtzeitig im Salon melden und eine Krankmeldung abgeben.",
      bonusStrikeOnCorrect: true
    },

    // 13) TRUE / FALSE – Berufsschule ist Pflicht
    {
      id: "j1_l1_a1_l3_q13",
      topic: "Berufsschule",
      gameType: "true_false_swipe",
      statement:
        "Berufsschule kannst du ausfallen lassen, wenn im Salon viel los ist.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Berufsschule gehört genauso zu deinen Pflichten wie der Salon.",
      feedbackWrong:
        "Falsch. Berufsschule ist Pflicht und kann nicht einfach weggelassen werden.",
      bonusStrikeOnCorrect: true
    },

    // 14) SCENARIO CHOICE – Kunde vs. Berufsschule
    {
      id: "j1_l1_a1_l3_q14",
      topic: "Berufsschule",
      gameType: "scenario_choice",
      situationTitle: "Lieblingskunde zur Berufsschulzeit",
      situationText:
        "Dein Lieblingskunde kann nur zu deiner Berufsschulzeit kommen. Der Salon fragt, ob du dafür die Schule schwänzen kannst.",
      options: [
        "Du erklärst, dass Berufsschule Pflicht ist und ihr gemeinsam nach einem anderen Termin sucht.",
        "Du schwänzt einfach die Schule, weil der Kunde wichtig ist.",
        "Du sagst gar nichts und hoffst, dass sich das Problem von selbst löst."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Du nimmst deine Schulpflicht ernst und suchst eine Lösung.",
        "Das gefährdet deine Ausbildung. Berufsschule darfst du nicht einfach ausfallen lassen.",
        "So wirkst du unsicher und planlos. Klarheit ist hier besser."
      ],
      feedbackCorrect:
        "Super! So vereinst du Professionalität im Salon mit deiner Schulpflicht.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option deine Ausbildung und deine Pflichten am besten schützt.",
      bonusStrikeOnCorrect: true
    },

    // 15) ORDER STEPS – Zu-spät-Kommen vermeiden
    {
      id: "j1_l1_a1_l3_q15",
      topic: "Pünktlichkeit",
      gameType: "order_steps",
      prompt:
        "Sortiere die Schritte, wie du dauerhaftes Zuspätkommen vermeidest.",
      items: [
        "Du analysierst, warum du bisher zu spät kommst (z. B. Bahn, Aufstehen).",
        "Du planst mehr Zeit ein und stellst Wecker oder Fahrzeiten um.",
        "Du überprüfst, ob du nun zuverlässig pünktlich bist."
      ],
      feedbackCorrect:
        "Super! So gehst du bewusst mit deiner Pünktlichkeit um.",
      feedbackWrong:
        "Noch nicht ganz. Erst Ursache prüfen, dann ändern, dann schauen, ob du jetzt pünktlich bist.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_3;
