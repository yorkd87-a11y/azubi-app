// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_7.js
// Lektion 7 – Mini-Checkpoint: „Hygiene-Checkliste 6 Schritte“

const LEKTION_7 = {
  id: "j1_l1_a3_l7",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Mini-Checkpoint: Hygiene-Checkliste (6 Schritte)",
  track: "hygiene",
  energy: 17,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Hygiene wird erst dann zuverlässig, wenn du sie als Checkliste im Kopf hast – nicht als Stimmung.",
    keyPoints: [
      "Die 6-Schritte-Checkliste ist dein Schnell-Scan vor dem nächsten Kunden: Used, Hände, Flächen, Waschbereich, Textilien/Abfall, Abschluss.",
      "Priorität: Übertragungswege stoppen – nicht nur Ordnung herstellen.",
      "Ampelregel bleibt der Turbo: Bei Gelb/Rot wird die Checkliste strenger und du stoppst bei Rot sofort."
    ],
    practiceTask:
      "Heute: Nutze die 6-Schritte-Checkliste bei jedem Kundenwechsel. Ziel: 100% gleiches Muster – egal wie viel los ist.",
    reflectionQuestion:
      "Welcher der 6 Schritte fällt dir am schwersten – und warum (Zeit, Material, Routine)?"
  },

  // 15 Fragen: 3 Warm-up (aus Step 6), 10 Core (Checkliste), 2 Transfer (schwerer)
  questions: [
    // -------------------------
    // Warm-up (3) – aus Step 6
    // -------------------------

    {
      id: "j1_l1_a3_l7_q01",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Warm-up: Ampel",
      prompt: "Ordne Grün, Gelb, Rot der richtigen Bedeutung zu.",
      pairs: [
        { left: "Grün", right: "Normaler Ablauf, Standard-Hygiene reicht" },
        { left: "Gelb", right: "Erhöhtes Risiko: Ablauf anpassen, Material holen, extra sichern" },
        { left: "Rot", right: "Sofort stoppen: erst sichern/klären, dann weiterarbeiten" }
      ],
      feedbackCorrect:
        "✅ Richtig. Das ist die Basis: normal – angepasst – stoppen. Typischer Fehler: Rot weich machen. Merksatz: Rot heißt Stopp.",
      feedbackWrong:
        "❌ Nicht ganz. Grün = Standard, Gelb = anpassen, Rot = stoppen. Merksatz: Rot heißt Stopp."
    },

    {
      id: "j1_l1_a3_l7_q02",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Warm-up: Rot",
      situationTitle: "Blutpunkt beim Schneiden",
      situationText: [
        "Beim Schneiden entsteht ein Blutpunkt.",
        "Kundin sagt: „Ist nicht schlimm, mach einfach weiter.“"
      ],
      options: [
        "Ignorieren und fertig schneiden.",
        "Kurz schneller weiter, am Ende sauber machen.",
        "Sofort stoppen, sichern, Clean/Used prüfen, dann weiter."
      ],
      correctIndex: 2,
      optionExplanations: [
        "Blutpunkt ist Eintrittspforte + Risiko. Ignorieren ist unprofessionell.",
        "„Später sauber“ verteilt das Risiko über Hände/Tools/Flächen.",
        "Rot: Stopp, sichern, Hände/Tools/Flächen sauber – dann kontrolliert weiter."
      ],
      feedbackCorrect:
        "✅ Genau. Blutpunkt = Rot: stoppen und sichern. Typischer Fehler: „nur ein Punkt“. Merksatz: Blut = Rot.",
      feedbackWrong:
        "❌ Blutpunkt bleibt Rot – unabhängig vom Kundenwunsch. Erst sichern, dann weiter. Merksatz: Blut = Rot."
    },

    {
      id: "j1_l1_a3_l7_q03",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Warm-up: Risiko",
      statement: "Ampelregel richtet sich nach Risiko, nicht nach Zeitdruck oder Kundenwunsch.",
      isTrue: true,
      feedbackCorrect:
        "✅ Richtig. Standards schützen dich und den Kunden – auch im Stress. Typischer Fehler: Regeln situativ weich machen. Merksatz: Risiko schlägt Wunsch.",
      feedbackWrong:
        "❌ Doch. Ampel ist risiko-basiert. Zeitdruck/Kundenwunsch ändern das Risiko nicht. Merksatz: Risiko schlägt Wunsch."
    },

    // -------------------------
    // Core (10) – Step 7 Inhalt
    // -------------------------

    {
      id: "j1_l1_a3_l7_q04",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Checkliste Zweck",
      question: "Wofür ist die Hygiene-Checkliste (6 Schritte) gedacht?",
      options: [
        "Nur für den Feierabend",
        "Als Schnell-Scan vor dem nächsten Kunden, damit nichts vergessen wird",
        "Nur für Azubi-Prüfungen",
        "Damit es ordentlich aussieht"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Die Checkliste ist dein Routine-Scan: weniger vergessen, gleiche Qualität, weniger Risiko. Typischer Fehler: nur nach Gefühl arbeiten. Merksatz: Checkliste schlägt Stimmung.",
      feedbackWrong:
        "❌ Nicht korrekt. Sie ist ein Schnell-Scan vor dem nächsten Kunden, damit nichts durchrutscht. Merksatz: Checkliste schlägt Stimmung."
    },

    {
      id: "j1_l1_a3_l7_q05",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "6 Schritte Reihenfolge",
      prompt: "Ordne die 6 Hygiene-Schritte in eine sinnvolle Reihenfolge für den Kundenwechsel.",
      steps: [
        "1) Used-Tools sofort in Used-Zone (nichts bleibt am Platz)",
        "2) Händehygiene durchführen (nach Used/Abfall/Kontaktpunkten)",
        "3) Kontaktflächen sichern (Griffe/Armlehnen/Wagen/Arbeitsfläche)",
        "4) Waschbereich resetten (Reste entfernen, Rand/Armauflage sichern)",
        "5) Textilien/Abfall korrekt entsorgen (Wäsche/Abfall)",
        "6) Abschlusscheck: Clean/Used stimmt, Platz startklar"
      ],
      feedbackCorrect:
        "✅ Perfekt. Diese Reihenfolge stoppt Übertragung früh und verhindert Kreuzkontamination. Typischer Fehler: erst wischen, dann Used anfassen. Merksatz: Erst Used, dann Hände, dann Fläche.",
      feedbackWrong:
        "❌ Nicht ganz. Sinnvoll ist: Used weg → Hände → Flächen → Waschbereich → Textilien/Abfall → Abschlusscheck. Merksatz: Erst Used, dann Hände, dann Fläche."
    },

    {
      id: "j1_l1_a3_l7_q06",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Schritt-Zuordnung",
      prompt: "Ordne jedem Checklisten-Schritt ein Beispiel zu.",
      pairs: [
        { left: "Used-Tools", right: "Kamm/Clips/Schere sofort in Used-Zone" },
        { left: "Händehygiene", right: "Nach Used/Abfall/Kasse/Handy desinfizieren oder waschen" },
        { left: "Kontaktflächen", right: "Armlehne/Wagen-Griff/Schubladengriff sichern" },
        { left: "Waschbereich", right: "Reste entfernen, Rand/Armauflage sichern, trocken machen" },
        { left: "Textilien/Abfall", right: "Benutzte Handtücher in Wäsche, Müll entsorgen" },
        { left: "Abschlusscheck", right: "Clean/Used klar, Platz startklar für nächsten Kunden" }
      ],
      feedbackCorrect:
        "✅ Stark. Wenn du Beispiele kennst, wird die Checkliste automatisch. Typischer Fehler: Schritte vermischen. Merksatz: Jeder Schritt hat einen Job.",
      feedbackWrong:
        "❌ Nicht ganz. Denk pro Schritt an 1 klares Beispiel, dann vergisst du nichts. Merksatz: Jeder Schritt hat einen Job."
    },

    {
      id: "j1_l1_a3_l7_q07",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Was gehört wohin?",
      prompt: "Sortiere: Welcher Checklisten-Schritt passt am besten?",
      categories: [
        { id: "used", label: "Used-Tools" },
        { id: "haende", label: "Händehygiene" },
        { id: "flaechen", label: "Kontaktflächen" },
        { id: "wasch", label: "Waschbereich" },
        { id: "textil", label: "Textilien/Abfall" },
        { id: "check", label: "Abschlusscheck" }
      ],
      items: [
        { text: "Clips vom Kunden abnehmen und direkt weglegen", categoryId: "used" },
        { text: "Nach Handy kurz desinfizieren", categoryId: "haende" },
        { text: "Arbeitswagen-Griff sichern", categoryId: "flaechen" },
        { text: "Waschbeckenrand trocken und sauber machen", categoryId: "wasch" },
        { text: "Benutztes Handtuch in den Wäschebereich", categoryId: "textil" },
        { text: "Kontrollieren: Clean/Used stimmt, alles startklar", categoryId: "check" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Genau so wird die Checkliste schnell und sicher. Typischer Fehler: alles „putzen“ nennen, ohne Struktur. Merksatz: Struktur macht sicher.",
      feedbackWrong:
        "❌ Denk in Jobs: Tools, Hände, Flächen, Waschbereich, Textilien, Check. Merksatz: Struktur macht sicher."
    },

    {
      id: "j1_l1_a3_l7_q08",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle",
      statement: "Wenn ich erst die Flächen wische und danach Used-Tools anfasse, ist das egal – ich habe ja gewischt.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Du kontaminierst danach wieder – Reihenfolge ist entscheidend. Typischer Fehler: erst wischen, dann Used drauflegen. Merksatz: Erst Used, dann Fläche.",
      feedbackWrong:
        "❌ Falsch. Wenn du nach dem Wischen Used anfasst, ist die Fläche schnell wieder kontaminiert. Merksatz: Erst Used, dann Fläche."
    },

    {
      id: "j1_l1_a3_l7_q09",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Kundenwechsel",
      situationTitle: "Kunde steht schon an der Rezeption",
      situationText: [
        "Der nächste Kunde steht schon da.",
        "Du bist mitten im Reset und willst schneller werden."
      ],
      options: [
        "Reset abbrechen und sofort starten – sonst wartet der Kunde.",
        "Kurz priorisieren: Used weg + Händehygiene + wichtigste Kontaktflächen, dann starten und Rest sofort nachholen.",
        "Nur die sichtbaren Haare entfernen, dann starten."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Ohne Mindeststandard startest du mit Risiko – genau im Stress passieren Fehler.",
        "Professionell: Mindeststandard sichern (Übertragungswege stoppen), dann starten – Rest sofort nachholen.",
        "Optik ohne Kontaktflächen/Used-Logik ist die typische Fehlerfalle."
      ],
      feedbackCorrect:
        "✅ Genau. Unter Druck gilt: Mindeststandard (Used + Hände + High-Touch) sichern. Typischer Fehler: Optik statt Risiko. Merksatz: Weniger, aber richtig.",
      feedbackWrong:
        "❌ Nicht optimal. Sicher ist: Used weg, Hände, High-Touch – dann starten. Merksatz: Weniger, aber richtig."
    },

    {
      id: "j1_l1_a3_l7_q10",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Schwerer: Prinzip",
      question: "Was ist das wichtigste Prinzip hinter der 6-Schritte-Checkliste?",
      options: [
        "Alles muss glänzen",
        "Übertragungswege früh stoppen (Used/Hände), bevor man Flächen/Details macht",
        "Erst dekorieren, dann putzen",
        "Nur am Abend gründlich"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Erst Übertragungswege stoppen, dann Rest. Typischer Fehler: Details zuerst. Merksatz: Erst Risiko, dann Rest.",
      feedbackWrong:
        "❌ Nicht korrekt. Das Prinzip ist: Übertragungswege früh stoppen (Used/Hände). Merksatz: Erst Risiko, dann Rest."
    },

    {
      id: "j1_l1_a3_l7_q11",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Ampel + Checkliste",
      question: "Was ändert sich bei Gelb/Rot an der Checkliste? (Mehrfach)",
      options: [
        "Bei Gelb: Checkliste strenger umsetzen, mehr Sicherungen/Material",
        "Bei Rot: sofort stoppen und erst sichern, dann Checkliste fortsetzen",
        "Bei Rot: einfach schneller werden, damit es vorbei ist",
        "Bei Gelb: Schritte reduzieren, um Zeit zu sparen"
      ],
      correctIndices: [0, 1],
      feedbackCorrect:
        "✅ Genau. Gelb = extra Sicherung, Rot = Stopp-Prozess. Typischer Fehler: Rot „durchziehen“. Merksatz: Gelb verstärken, Rot stoppen.",
      feedbackPartially:
        "⚠️ Teilweise. Gelb verstärkt, Rot stoppt. Merksatz: Gelb verstärken, Rot stoppen.",
      feedbackWrong:
        "❌ Nicht korrekt. Gelb = strenger/zusätzliche Sicherungen, Rot = stoppen und sichern. Merksatz: Gelb verstärken, Rot stoppen."
    },

    {
      id: "j1_l1_a3_l7_q12",
      type: "gap_fill",
      gameType: "gap_fill",
      topic: "Merksatz",
      textBefore: "Die Checkliste verhindert, dass unter Stress ",
      correctAnswer: "Übertragungswege",
      textAfter: " übersehen werden.",
      options: ["Übertragungswege", "Playlisten", "Preise", "Deko"],
      feedbackCorrect:
        "✅ Richtig. Unter Stress übersieht man Trigger – die Checkliste fängt das ab. Typischer Fehler: nach Gefühl arbeiten. Merksatz: Checkliste = Sicherheitsnetz.",
      feedbackWrong:
        "❌ Falsch. Richtig ist: Übertragungswege. Die Checkliste verhindert genau dieses „Durchrutschen“. Merksatz: Checkliste = Sicherheitsnetz."
    },

    {
      id: "j1_l1_a3_l7_q13",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Schwerer: Mikro-Optimierung",
      prompt: "Ordne: Was macht den Reset schneller, ohne Hygiene zu verlieren?",
      steps: [
        "Mindeststandard definieren (Used + Hände + High-Touch)",
        "Material am Platz griffbereit (Used-Box, Tücher, Mittel)",
        "Immer gleiche Reihenfolge (Automatisierung)",
        "Abschlusscheck (startklar)"
      ],
      feedbackCorrect:
        "✅ Stark. Geschwindigkeit entsteht durch Standard + Vorbereitung + Reihenfolge, nicht durch Weglassen. Typischer Fehler: Schritte skippen. Merksatz: Schnell durch System.",
      feedbackWrong:
        "❌ Nicht ganz. Schnell wird es durch Standard, griffbereites Material, feste Reihenfolge, Abschlusscheck. Merksatz: Schnell durch System."
    },

    // -------------------------
    // Transfer (2) – schwerer
    // -------------------------

    {
      id: "j1_l1_a3_l7_q14",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Transfer: Diagnose",
      situationTitle: "Der Reset dauert zu lange",
      situationText: [
        "Du merkst: Du brauchst 6–7 Minuten für den Reset, oft entsteht Stress.",
        "Was ist die beste Profi-Lösung?"
      ],
      options: [
        "Einfach ein paar Schritte weglassen, dann geht es schneller.",
        "Prozess verbessern: Material griffbereit + feste Reihenfolge + Mindeststandard definieren, dann Routine trainieren.",
        "Reset nur noch am Abend machen."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Weglassen erhöht Risiko – die Probleme kommen später doppelt zurück.",
        "System statt Hektik: Setup am Platz + Reihenfolge + Prioritäten machen dich schneller und sicherer.",
        "Reset nur abends bricht den Standard zwischen Kunden und erhöht Übertragung."
      ],
      feedbackCorrect:
        "✅ Genau. Geschwindigkeit kommt aus System, nicht aus Weglassen. Typischer Fehler: Hygiene „kürzen“. Merksatz: Schnell durch System.",
      feedbackWrong:
        "❌ Beste Lösung ist: Setup + Reihenfolge + Mindeststandard – dann wird es schnell und sicher. Merksatz: Schnell durch System."
    },

    {
      id: "j1_l1_a3_l7_q15",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Transfer: Teamstandard",
      statement: "Die Checkliste funktioniert am besten, wenn das ganze Team dieselbe Reihenfolge nutzt.",
      isTrue: true,
      feedbackCorrect:
        "✅ Richtig. Einheitliche Standards reduzieren Fehler, erleichtern Übergaben und machen Qualität messbar. Typischer Fehler: jeder macht es anders. Merksatz: Ein Standard fürs Team.",
      feedbackWrong:
        "❌ Doch. Wenn alle dieselbe Reihenfolge nutzen, wird es stabil und sicher – auch bei Vertretung. Merksatz: Ein Standard fürs Team."
    }
  ]
};

export default LEKTION_7;