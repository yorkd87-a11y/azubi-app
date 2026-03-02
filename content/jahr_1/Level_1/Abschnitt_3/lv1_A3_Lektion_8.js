// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_8.js
// Lektion 8 – Boss-Fight Quiz (18 Fragen) – Hygiene & Infektionsschutz (Steps 1–7)

const LEKTION_8 = {
  id: "j1_l1_a3_l8",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Boss-Fight: Hygiene & Infektionsschutz (Quiz)",
  track: "hygiene",
  energy: 18,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Boss-Fight heißt: du kannst es nicht nur erklären – du triffst unter Stress die richtigen Entscheidungen.",
    keyPoints: [
      "Du kombinierst: Infektionskette (Quelle–Weg–Eintritt), Reinigung vs. Desinfektion, Händehygiene, Tool-Aufbereitung, Reset, Ampelregel und Checkliste.",
      "Schwerpunkt: Szenarien, typische Fehlerfallen, klare Prioritäten unter Zeitdruck.",
      "Ziel: Handlungssicherheit im Salon – nicht Auswendiglernen."
    ],
    practiceTask:
      "Nach dem Quiz: Nimm dir 1 Schwachpunkt (z. B. Einwirkzeit, Clean/Used, Ampel Rot) und setze ihn heute bewusst 10-mal richtig um.",
    reflectionQuestion:
      "Welche 2 Fehlerfallen passieren dir am ehesten – und welche Regel hilft dir sofort dagegen?"
  },

  // 18 Fragen – querbeet, stark szenariobasiert
  questions: [
    // 01 – Szenario (Infektionskette / Eintrittspforte)
    {
      id: "j1_l1_a3_l8_q01",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Infektionskette",
      situationTitle: "Schramme am Ohr",
      situationText: [
        "Du siehst eine kleine Schramme am Ohr.",
        "Du willst direkt mit der Schere weiterarbeiten."
      ],
      options: [
        "Weiterarbeiten, ist nur klein.",
        "Kurz stoppen: Hände/Tool-Status prüfen, ggf. desinfizieren, Stelle schützen/umgehen.",
        "Nur trocken abwischen und weitermachen."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Eintrittspforte wird übergangen – Risiko steigt.",
        "Professionell: Risiko erkennen, Übertragungsweg stoppen, dann weiter.",
        "Abwischen ist keine Hygienemaßnahme."
      ],
      feedbackCorrect:
        "✅ Richtig. Schramme = Eintrittspforte, Toolkontakt = Risiko. Typischer Fehler: Tempo vor Sicherheit. Merksatz: Bei Wunde: stoppen, sichern, dann weiter.",
      feedbackWrong:
        "❌ Professionell ist: stoppen und sichern, bevor du weiterarbeitest. Merksatz: Bei Wunde: stoppen, sichern, dann weiter."
    },

    // 02 – Single (Reinigung vs. Desinfektion)
    {
      id: "j1_l1_a3_l8_q02",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Reinigung/Desinfektion",
      question: "Was beschreibt Desinfektion am besten?",
      options: [
        "Schmutz entfernen",
        "Erreger wirksam inaktivieren/abtöten (bei korrekter Anwendung)",
        "Alles steril machen",
        "Nur mit Wasser abspülen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Desinfektion reduziert Erreger gezielt – Benetzung + Einwirkzeit sind Pflicht. Typischer Fehler: sofort abwischen. Merksatz: Benetzen + warten.",
      feedbackWrong:
        "❌ Richtig ist: Erreger wirksam reduzieren (Benetzung + Einwirkzeit). Merksatz: Benetzen + warten."
    },

    // 03 – True/False (Einwirkzeit)
    {
      id: "j1_l1_a3_l8_q03",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Einwirkzeit",
      statement: "Wenn ich sofort trocken wische, ist Desinfektion genauso wirksam.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Ohne Einwirkzeit bleibt die Wirkung unsicher. Typischer Fehler: hektisch abwischen. Merksatz: Einwirkzeit ist Pflicht.",
      feedbackWrong:
        "❌ Falsch. Sofort trocken wischen nimmt dem Mittel die Einwirkzeit. Merksatz: Einwirkzeit ist Pflicht."
    },

    // 04 – Kategorie (Händehygiene Trigger)
    {
      id: "j1_l1_a3_l8_q04",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Händehygiene",
      prompt: "Sortiere: Händehygiene nötig oder nicht zwingend sofort?",
      categories: [
        { id: "ja", label: "Ja – Händehygiene nötig" },
        { id: "nein", label: "Nein – nicht zwingend sofort" }
      ],
      items: [
        { text: "Nach Handy nutzen", categoryId: "ja" },
        { text: "Nach Kasse/Produkten", categoryId: "ja" },
        { text: "Nach Toilettengang", categoryId: "ja" },
        { text: "Nur vom Stuhl einen Schritt zur Kundin, ohne etwas anzufassen", categoryId: "nein" }
      ],
      feedbackCorrect:
        "✅ Genau. Kontaktpunkte = Händehygiene. Typischer Fehler: Handy/Kasse vergessen. Merksatz: Kontaktpunkt = Hände.",
      feedbackWrong:
        "❌ Denk an Kontaktpunkte: Handy, Kasse, Toilette. Merksatz: Kontaktpunkt = Hände."
    },

    // 05 – Reihenfolge (Tool-Aufbereitung)
    {
      id: "j1_l1_a3_l8_q05",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Tool-Aufbereitung",
      prompt: "Ordne die Tool-Aufbereitung korrekt.",
      steps: [
        "Haare/Produktreste entfernen",
        "Reinigen",
        "Desinfizieren (Einwirkzeit)",
        "Trocknen",
        "Sauber lagern (Clean/Used trennen)"
      ],
      feedbackCorrect:
        "✅ Perfekt. So stoppst du indirekte Übertragung sicher. Typischer Fehler: nass weglegen oder Clean/Used mischen. Merksatz: R-R-D-T-L.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig: Reste weg → reinigen → desinfizieren → trocknen → lagern. Merksatz: R-R-D-T-L."
    },

    // 06 – Szenario (Produktfilm am Kamm)
    {
      id: "j1_l1_a3_l8_q06",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Tool-Aufbereitung",
      situationTitle: "Produktfilm am Kamm",
      situationText: [
        "Du siehst Produktfilm am Kamm.",
        "Du willst direkt desinfizieren."
      ],
      options: [
        "Direkt desinfizieren.",
        "Erst reinigen, dann desinfizieren.",
        "Nur mit Handtuch abreiben."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Film kann Benetzung/Wirkung stören.",
        "Erst Material entfernen, dann Erreger reduzieren – sicherer Prozess.",
        "Abreiben ist keine sichere Aufbereitung."
      ],
      feedbackCorrect:
        "✅ Richtig. Erst reinigen, dann desinfizieren – sonst schwächt der Film die Wirkung. Typischer Fehler: Spray auf Dreck. Merksatz: Erst sauber, dann sicher.",
      feedbackWrong:
        "❌ Richtig ist: erst reinigen, dann desinfizieren. Merksatz: Erst sauber, dann sicher."
    },

    // 07 – Single (High-Touch)
    {
      id: "j1_l1_a3_l8_q07",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Reset",
      question: "Welche Fläche ist am ehesten High-Touch und wird oft vergessen?",
      options: ["Deckenlampe", "Arbeitswagen-Griff", "Poster an der Wand", "Fenster oben"],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Griffe sind typische Übertragungswege. Typischer Fehler: nur Arbeitsfläche wischen. Merksatz: Griff = Risiko.",
      feedbackWrong:
        "❌ High-Touch ist z. B. der Arbeitswagen-Griff. Merksatz: Griff = Risiko."
    },

    // 08 – Szenario (Reset unter Zeitdruck)
    {
      id: "j1_l1_a3_l8_q08",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Reset",
      situationTitle: "2 Minuten bis zum nächsten Kunden",
      situationText: [
        "Du hast nur 2 Minuten Zeit für den Reset.",
        "Was ist der beste Mindeststandard?"
      ],
      options: [
        "Nur Boden fegen, Hauptsache ordentlich.",
        "Used weg + Hände + High-Touch-Flächen + kurzer Waschbecken-Check.",
        "Nur Spiegel putzen, das sieht gut aus."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Optik stoppt keine Übertragung.",
        "Mindeststandard stoppt die wichtigsten Übertragungswege.",
        "Optik ohne Hygiene ist Fehlerfalle."
      ],
      feedbackCorrect:
        "✅ Richtig. Unter Zeitdruck gilt: Prioritäten sichern (Used + Hände + High-Touch + Waschbereich). Typischer Fehler: nur Optik. Merksatz: Weniger, aber richtig.",
      feedbackWrong:
        "❌ Sicher ist: Used weg, Hände, High-Touch, Waschbereich. Merksatz: Weniger, aber richtig."
    },

    // 09 – Ampel (Kategorie)
    {
      id: "j1_l1_a3_l8_q09",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Ampelregel",
      prompt: "Sortiere in Grün / Gelb / Rot.",
      categories: [
        { id: "gruen", label: "Grün" },
        { id: "gelb", label: "Gelb" },
        { id: "rot", label: "Rot" }
      ],
      items: [
        { text: "Normales Föhnen ohne Auffälligkeit", categoryId: "gruen" },
        { text: "Leichte Reizung der Kopfhaut ohne offene Stelle", categoryId: "gelb" },
        { text: "Blutpunkt beim Schneiden", categoryId: "rot" },
        { text: "Nässende entzündete Stelle", categoryId: "rot" }
      ],
      feedbackCorrect:
        "✅ Stark. Gelb = anpassen, Rot = stoppen. Typischer Fehler: alles als Grün behandeln. Merksatz: Rot heißt Stopp.",
      feedbackWrong:
        "❌ Denk an die Regel: Grün normal, Gelb erhöht, Rot Blut/offen/stark auffällig. Merksatz: Rot heißt Stopp."
    },

    // 10 – Reihenfolge (Rot-Prozess)
    {
      id: "j1_l1_a3_l8_q10",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Rot-Prozess",
      prompt: "Ordne den Rot-Ablauf bei Blutpunkt/offener Stelle.",
      steps: [
        "Sofort stoppen",
        "Wunde sichern / geeignete Maßnahmen (z. B. Druck, Schutz, Handschuhe)",
        "Used-Tools separieren, ggf. Tools/Flächen sichern",
        "Händehygiene durchführen",
        "Erst dann kontrolliert weiterarbeiten oder abbrechen"
      ],
      feedbackCorrect:
        "✅ Perfekt. Rot ist ein klarer Stopp-Prozess. Typischer Fehler: „später sauber“. Merksatz: Rot = Stopp-Prozess.",
      feedbackWrong:
        "❌ Nicht ganz. Rot heißt: stoppen → sichern → trennen → Hände → dann weiter. Merksatz: Rot = Stopp-Prozess."
    },

    // 11 – True/False (Kundenwunsch)
    {
      id: "j1_l1_a3_l8_q11",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Ampelregel",
      statement: "Wenn der Kunde sagt „nicht schlimm“, kann ich Rot zu Gelb runterstufen.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Ampel richtet sich nach Risiko, nicht nach Wunsch. Typischer Fehler: sich unter Druck setzen lassen. Merksatz: Risiko schlägt Wunsch.",
      feedbackWrong:
        "❌ Falsch. Blutpunkt bleibt Rot – egal was der Kunde sagt. Merksatz: Risiko schlägt Wunsch."
    },

    // 12 – Single (Checkliste Zweck)
    {
      id: "j1_l1_a3_l8_q12",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Checkliste",
      question: "Wofür ist die Hygiene-Checkliste (6 Schritte) gedacht?",
      options: [
        "Nur für den Feierabend",
        "Als Schnell-Scan vor dem nächsten Kunden",
        "Nur für Prüfungen",
        "Nur damit es ordentlich aussieht"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Checkliste verhindert, dass im Stress Übertragungswege übersehen werden. Typischer Fehler: nach Gefühl. Merksatz: Checkliste schlägt Stimmung.",
      feedbackWrong:
        "❌ Richtig ist: Schnell-Scan vor dem nächsten Kunden. Merksatz: Checkliste schlägt Stimmung."
    },

    // 13 – Match (6 Schritte)
    {
      id: "j1_l1_a3_l8_q13",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Checkliste 6 Schritte",
      prompt: "Ordne Schritt und Beispiel zu.",
      pairs: [
        { left: "Used-Tools", right: "Kamm/Clips/Schere sofort in Used-Zone" },
        { left: "Händehygiene", right: "Nach Used/Abfall/Kasse/Handy sichern" },
        { left: "Kontaktflächen", right: "Armlehne/Wagen-Griff/Schubladengriff sichern" },
        { left: "Waschbereich", right: "Reste entfernen, Rand/Armauflage sichern" },
        { left: "Textilien/Abfall", right: "Handtücher in Wäsche, Müll entsorgen" },
        { left: "Abschlusscheck", right: "Clean/Used stimmt, Platz startklar" }
      ],
      feedbackCorrect:
        "✅ Stark. Genau so wird die Checkliste automatisch. Typischer Fehler: Schritte vermischen. Merksatz: Jeder Schritt hat einen Job.",
      feedbackWrong:
        "❌ Nicht ganz. Denk pro Schritt an ein klares Beispiel. Merksatz: Jeder Schritt hat einen Job."
    },

    // 14 – Szenario (Kreuzkontamination)
    {
      id: "j1_l1_a3_l8_q14",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Kreuzkontamination",
      situationTitle: "Used auf Clean-Fläche",
      situationText: [
        "Du hast den Wagen desinfiziert.",
        "Dann legst du versehentlich Used-Tools darauf."
      ],
      options: [
        "Passt, war ja gerade desinfiziert.",
        "Nur die Tools wegnehmen, weiter.",
        "Kurz stoppen: Used weg, Fläche erneut sichern, dann weiter."
      ],
      correctIndex: 2,
      optionExplanations: [
        "Clean wurde wieder kontaminiert – Desinfektion ist damit aufgehoben.",
        "Die Fläche bleibt Kontaktpunkt, muss erneut gesichert werden.",
        "Professionell: Kontamination erkennen und Fläche erneut sichern."
      ],
      feedbackCorrect:
        "✅ Richtig. Das ist Kreuzkontamination: Clean wird wieder Used. Typischer Fehler: „war doch eben sauber“. Merksatz: Clean bleibt nur ohne Used.",
      feedbackWrong:
        "❌ Richtig ist: stoppen und Fläche erneut sichern. Merksatz: Clean bleibt nur ohne Used."
    },

    // 15 – True/False (Riechen/Schaum)
    {
      id: "j1_l1_a3_l8_q15",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle",
      statement: "Wenn es stark riecht und schäumt, ist es automatisch ein Desinfektionsmittel.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Geruch/Schaum sagt nichts über Wirksamkeit – entscheidend sind Herstellerangaben und Anwendung. Typischer Fehler: nach Gefühl statt Vorgabe. Merksatz: Etikett schlägt Eindruck.",
      feedbackWrong:
        "❌ Falsch. Geruch/Schaum sind kein Beweis. Merksatz: Etikett schlägt Eindruck."
    },

    // 16 – Single (Mindeststandard)
    {
      id: "j1_l1_a3_l8_q16",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Prioritäten",
      question: "Welche Kombination ist der beste Mindeststandard, wenn wirklich wenig Zeit ist?",
      options: [
        "Nur Boden fegen",
        "Used weg + High-Touch-Flächen sichern + kurzer Waschbecken-Check",
        "Nur Spiegel putzen",
        "Nur Arbeitsfläche abwischen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Damit stoppst du die wichtigsten Übertragungswege. Typischer Fehler: Optik priorisieren. Merksatz: Used + Griffe + Waschbereich.",
      feedbackWrong:
        "❌ Nicht optimal. Mindeststandard ist: Used weg, High-Touch sichern, Waschbecken-Check. Merksatz: Used + Griffe + Waschbereich."
    },

    // 17 – Scenario (Gelb Maßnahmen)
    {
      id: "j1_l1_a3_l8_q17",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Gelb",
      situationTitle: "Kopfhaut gereizt, aber keine offene Stelle",
      situationText: [
        "Kopfhaut wirkt gereizt, kein Blut, keine offene Stelle.",
        "Wie arbeitest du richtig weiter?"
      ],
      options: [
        "Wie Grün: normal weitermachen ohne Anpassung.",
        "Gelb: Ablauf anpassen (Trigger enger, Clean/Used strenger, Flächen/Tools extra sichern).",
        "Rot: sofort abbrechen, Kunde wegschicken."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Gelb verlangt Anpassung – sonst übersiehst du Risiko.",
        "Gelb ist kontrollierte Anpassung, nicht Panik.",
        "Rot ist bei Blut/offener Stelle/starker Kontamination."
      ],
      feedbackCorrect:
        "✅ Genau. Gelb heißt: extra Sicherung, aber ruhig bleiben. Typischer Fehler: Gelb wie Grün. Merksatz: Gelb = extra Standard.",
      feedbackWrong:
        "❌ Richtig ist Gelb: Ablauf anpassen und extra sichern. Merksatz: Gelb = extra Standard."
    },

    // 18 – Timeline (6-Schritte Quick-Scan)
    {
      id: "j1_l1_a3_l8_q18",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Checkliste Quick-Scan",
      prompt: "Ordne die 6-Schritte-Checkliste als Quick-Scan vor dem nächsten Kunden.",
      steps: [
        "Used-Tools weg",
        "Händehygiene",
        "Kontaktflächen sichern",
        "Waschbereich resetten",
        "Textilien/Abfall weg",
        "Abschlusscheck (startklar)"
      ],
      feedbackCorrect:
        "✅ Perfekt. Diese Reihenfolge stoppt Übertragung früh und macht dich schneller. Typischer Fehler: erst wischen, dann Used anfassen. Merksatz: Erst Used, dann Hände, dann Fläche.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig: Used → Hände → Flächen → Waschbereich → Textilien/Abfall → Check. Merksatz: Erst Used, dann Hände, dann Fläche."
    }
  ]
};

export default LEKTION_8;