// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_6.js
// Lektion 6 – Ampelregel: grün/gelb/rot (wann stoppen/holen)

const LEKTION_6 = {
  id: "j1_l1_a3_l6",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Ampelregel Hygiene: Grün / Gelb / Rot",
  track: "hygiene",
  energy: 17,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Hygiene ist nicht nur „machen“ – du brauchst eine Stop-Regel. Die Ampel macht aus Bauchgefühl eine klare Entscheidung.",
    keyPoints: [
      "Grün: normaler Ablauf, Standard-Hygiene reicht (kein besonderes Risiko erkennbar).",
      "Gelb: erhöhtes Risiko – du passt den Ablauf an (zusätzliche Maßnahmen/Material holen), aber keine Panik.",
      "Rot: sofort stoppen und sichern – Blutpunkt, offene Stelle, starke Auffälligkeit oder Kontamination: erst klären, dann weiterarbeiten."
    ],
    practiceTask:
      "Heute: Markiere für dich 3 typische Situationen pro Farbe (Grün/Gelb/Rot) und sprich sie im Team kurz durch. Ziel: gleiche Entscheidung im ganzen Salon.",
    reflectionQuestion:
      "Welche Situation hast du bisher zu oft als Grün behandelt, obwohl sie Gelb oder Rot ist?"
  },

  // 15 Fragen: 3 Warm-up (aus Step 5), 10 Core, 2 Transfer (schwerer)
  questions: [
    // -------------------------
    // Warm-up (3) – aus Step 5
    // -------------------------

    {
      id: "j1_l1_a3_l6_q01",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Warm-up: Reset-Standard",
      question: "Was bedeutet 'Arbeitsplatz resetten' im Hygiene-Kontext am besten?",
      options: [
        "Nur einmal am Abend gründlich putzen",
        "Nach jedem Kunden den Platz in einen hygienisch sicheren Standard zurücksetzen",
        "Nur sichtbare Haare wegfegen",
        "Nur das Waschbecken ausspülen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Reset ist ein Standard nach jedem Kunden – das ist die Basis, bevor du mit Ampelregeln eskalierst. Typischer Fehler: Reset auf den Abend schieben. Merksatz: Reset = nach jedem Kunden.",
      feedbackWrong:
        "❌ Nicht ganz. Reset heißt: nach jedem Kunden hygienisch sicher zurücksetzen. Merksatz: Reset = nach jedem Kunden."
    },

    {
      id: "j1_l1_a3_l6_q02",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Warm-up: High-Touch",
      question: "Welche Bereiche sind typische High-Touch-Flächen am Bedienplatz? (Mehrfach)",
      options: [
        "Arbeitswagen-Griffe",
        "Armlehnen/Bedienstuhl",
        "Sprühflaschen/Produktflaschen außen",
        "Deckenlampe",
        "Schubladen-/Türgriffe am Platz"
      ],
      correctIndices: [0, 1, 2, 4],
      feedbackCorrect:
        "✅ Genau. High-Touch ist oft der versteckte Übertragungsweg – Ampel heißt auch: bei Gelb/Rot diese Flächen extra im Blick. Typischer Fehler: nur Arbeitsfläche wischen. Merksatz: Griff = Risiko.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an alles, was du oft anfasst: Griffe, Armlehnen, Flaschen, Schubladen. Merksatz: Griff = Risiko.",
      feedbackWrong:
        "❌ Nicht korrekt. High-Touch sind Griffe, Armlehnen, Flaschen außen, Schubladen/Türen. Merksatz: Griff = Risiko."
    },

    {
      id: "j1_l1_a3_l6_q03",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Warm-up: Zeitdruck",
      statement: "Unter Zeitdruck ist es besser, alles ein bisschen zu machen, als wenige Punkte wirklich konsequent.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Priorisieren und korrekt machen ist sicherer – genau das ist auch Ampel-Logik. Typischer Fehler: hektisch halb. Merksatz: Weniger, aber richtig.",
      feedbackWrong:
        "❌ Falsch. Besser ist: wenige Punkte korrekt, als alles halb. Merksatz: Weniger, aber richtig."
    },

    // -------------------------
    // Core (10) – Step 6 Inhalt
    // -------------------------

    {
      id: "j1_l1_a3_l6_q04",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Grundprinzip Ampel",
      question: "Wozu dient die Ampelregel im Hygienealltag?",
      options: [
        "Damit man schneller fertig wird",
        "Damit Entscheidungen bei Risiko klar und einheitlich sind",
        "Damit man weniger reinigen muss",
        "Damit Kunden es nicht merken"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Die Ampel macht aus Gefühl eine klare Entscheidung: Standard, Anpassung oder sofort stoppen. Typischer Fehler: jeder entscheidet anders. Merksatz: Ampel = klare Stop-Regel.",
      feedbackWrong:
        "❌ Nicht korrekt. Ampelregel soll klare, einheitliche Entscheidungen bei Risiko ermöglichen. Merksatz: Ampel = klare Stop-Regel."
    },

    {
      id: "j1_l1_a3_l6_q05",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Definitionen",
      prompt: "Ordne Grün, Gelb, Rot der richtigen Bedeutung zu.",
      pairs: [
        { left: "Grün", right: "Normaler Ablauf, Standard-Hygiene reicht" },
        { left: "Gelb", right: "Erhöhtes Risiko: Ablauf anpassen, Material holen, extra sichern" },
        { left: "Rot", right: "Sofort stoppen: erst sichern/klären, dann weiterarbeiten" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Das ist die Grundlogik: normal – angepasst – stoppen. Typischer Fehler: Rot „wegignorieren“. Merksatz: Rot heißt Stopp.",
      feedbackWrong:
        "❌ Nicht ganz. Grün = Standard, Gelb = anpassen, Rot = stoppen. Merksatz: Rot heißt Stopp."
    },

    {
      id: "j1_l1_a3_l6_q06",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Einstufung",
      prompt: "Sortiere die Situationen in Grün / Gelb / Rot.",
      categories: [
        { id: "gruen", label: "Grün (Standard)" },
        { id: "gelb", label: "Gelb (Ablauf anpassen)" },
        { id: "rot", label: "Rot (sofort stoppen)" }
      ],
      items: [
        { text: "Normales Föhnen ohne Auffälligkeit", categoryId: "gruen" },
        { text: "Kopfhaut leicht gereizt, aber keine offene Stelle", categoryId: "gelb" },
        { text: "Blutpunkt beim Schneiden", categoryId: "rot" },
        { text: "Kundin hat sichtbare entzündete, nässende Stelle", categoryId: "rot" }
      ],
      feedbackCorrect:
        "✅ Stark. Gelb heißt: extra sichern/Material, Rot heißt: Stopp und erst klären. Typischer Fehler: alles als Grün behandeln. Merksatz: Rot = Stopp.",
      feedbackWrong:
        "❌ Denk so: Grün = normal, Gelb = erhöhtes Risiko, Rot = Blut/offen/stark auffällig → Stopp. Merksatz: Rot = Stopp."
    },

    {
      id: "j1_l1_a3_l6_q07",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Gelb-Szenario",
      situationTitle: "Kopfhaut auffällig, aber kein Blut",
      situationText: [
        "Die Kopfhaut wirkt gereizt (Rötung/Schuppen), aber keine offene Stelle.",
        "Du willst weitermachen."
      ],
      options: [
        "Grün: normal weiter, keine Anpassung.",
        "Gelb: Ablauf anpassen (Händehygiene/Tools/Flächen extra im Blick, ggf. Handschuhe/Einmalartikel).",
        "Rot: sofort abbrechen und Kunde wegschicken."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Ignorieren erhöht Risiko – du solltest mindestens zusätzliche Sicherungen einbauen.",
        "Gelb passt: erhöhtes Risiko, aber kontrollierbar durch sauberen Ablauf und Material.",
        "Rot wäre nur bei Blut/offener Stelle/starker Kontamination notwendig."
      ],
      feedbackCorrect:
        "✅ Genau. Gelb heißt: du arbeitest weiter, aber mit angepasstem Ablauf und extra Sicherung. Typischer Fehler: Gelb wie Grün behandeln. Merksatz: Gelb = anpassen, nicht ignorieren.",
      feedbackWrong:
        "❌ Richtig ist Gelb: weiterarbeiten, aber Ablauf anpassen und extra sichern. Merksatz: Gelb = anpassen."
    },

    {
      id: "j1_l1_a3_l6_q08",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Rot-Szenario",
      situationTitle: "Blutpunkt beim Schneiden",
      situationText: [
        "Beim Schneiden entsteht ein Blutpunkt.",
        "Kundin sagt: „Ist nicht schlimm, mach einfach weiter.“"
      ],
      options: [
        "Grün: ignorieren und fertig schneiden.",
        "Gelb: kurz schneller weiter, dann am Ende sauber machen.",
        "Rot: sofort stoppen, sichern (Wunde), Handschuhe/Material, Tool-Logik, erst dann weiter."
      ],
      correctIndex: 2,
      optionExplanations: [
        "Blutpunkt ist Eintrittspforte + Risiko – ignorieren ist nicht professionell.",
        "„Später sauber“ ist die typische Fehlerfalle – du verteilst Risiko im Ablauf.",
        "Rot: Stopp und erst sichern, damit keine Übertragung über Hände/Tools passiert."
      ],
      feedbackCorrect:
        "✅ Richtig. Blutpunkt = Rot: stoppen, sichern, dann sauber weiter. Typischer Fehler: „nur ein Punkt“. Merksatz: Blut = Rot.",
      feedbackWrong:
        "❌ Blutpunkt ist Rot. Du musst sofort stoppen und sichern, bevor du weiterarbeitest. Merksatz: Blut = Rot."
    },

    {
      id: "j1_l1_a3_l6_q09",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Gelb-Maßnahmen",
      question: "Was sind typische Gelb-Maßnahmen? (Mehrfach)",
      options: [
        "Ablauf anpassen: Händehygiene-Trigger enger setzen",
        "Clean/Used strikter führen, ggf. mehr Einmalartikel",
        "Einwirkzeit bewusst einhalten",
        "Alles ignorieren, weil kein Blut sichtbar ist"
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "✅ Genau. Gelb heißt: kontrolliert weiterarbeiten, aber mit extra Sicherung. Typischer Fehler: Gelb wie Grün behandeln. Merksatz: Gelb = extra Standard.",
      feedbackPartially:
        "⚠️ Teilweise. Gelb ist: zusätzliche Sicherung (Trigger, Clean/Used, Einwirkzeit). Merksatz: Gelb = extra Standard.",
      feedbackWrong:
        "❌ Nicht korrekt. Gelb bedeutet zusätzliche Sicherungen – nicht ignorieren. Merksatz: Gelb = extra Standard."
    },

    {
      id: "j1_l1_a3_l6_q10",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle",
      statement: "Wenn der Kunde sagt „nicht schlimm“, kann ich Rot zu Gelb runterstufen.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Ampel richtet sich nach Risiko, nicht nach Kundenwunsch. Typischer Fehler: sich unter Druck setzen lassen. Merksatz: Risiko schlägt Wunsch.",
      feedbackWrong:
        "❌ Falsch. Der Kunde entscheidet nicht über Hygienerisiko. Blutpunkt bleibt Rot. Merksatz: Risiko schlägt Wunsch."
    },

    {
      id: "j1_l1_a3_l6_q11",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Rot-Prozess",
      prompt: "Bringe den Rot-Ablauf (Blutpunkt/Offene Stelle) in die richtige Reihenfolge.",
      steps: [
        "Sofort stoppen",
        "Wunde sichern / geeignete Maßnahmen (z. B. Druck, Schutz, Handschuhe)",
        "Used-Tools separieren, ggf. Tools/Flächen sichern",
        "Händehygiene durchführen",
        "Erst dann kontrolliert weiterarbeiten oder abbrechen"
      ],
      feedbackCorrect:
        "✅ Perfekt. Rot ist ein klarer Stopp-Prozess: sichern, trennen, Hände, dann weiter. Typischer Fehler: weiterarbeiten und „später sauber“. Merksatz: Rot = Stopp-Prozess.",
      feedbackWrong:
        "❌ Nicht ganz. Rot heißt: stoppen → sichern → trennen → Hände → dann weiter. Merksatz: Rot = Stopp-Prozess."
    },

    {
      id: "j1_l1_a3_l6_q12",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Schwerer: Entscheidung",
      question: "Welche Aussage passt am besten zur Ampelregel?",
      options: [
        "Grün heißt: Hygiene ist egal",
        "Gelb heißt: mehr sichern, aber ruhig bleiben",
        "Rot heißt: später sauber machen, wenn Zeit ist",
        "Gelb und Rot sind dasselbe"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Gelb ist kontrollierte Anpassung, Rot ist Stopp. Typischer Fehler: Rot „verschieben“. Merksatz: Gelb = anpassen, Rot = stoppen.",
      feedbackWrong:
        "❌ Nicht korrekt. Richtig ist: Gelb heißt mehr sichern, aber ruhig bleiben. Merksatz: Gelb = anpassen, Rot = stoppen."
    },

    {
      id: "j1_l1_a3_l6_q13",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Schwerer: Kontamination",
      situationTitle: "Used-Tool auf Clean-Fläche",
      situationText: [
        "Du legst versehentlich einen benutzten Kamm auf eine gerade desinfizierte Ablage.",
        "Der nächste Kunde sitzt schon."
      ],
      options: [
        "Grün: egal, Ablage war ja gerade desinfiziert.",
        "Gelb: einfach den Kamm wegnehmen, weitermachen.",
        "Gelb/Rot-Logik: Stop kurz, Fläche erneut sichern, Clean/Used sauber trennen, dann starten."
      ],
      correctIndex: 2,
      optionExplanations: [
        "Das ist Kreuzkontamination: Clean wird wieder Used – ignorieren macht die Desinfektion sinnlos.",
        "Nur Tool wegnehmen reicht nicht, weil die Fläche jetzt wieder Kontaktpunkt ist.",
        "Professionell: kurz stoppen, Fläche erneut sichern und erst dann weitermachen."
      ],
      feedbackCorrect:
        "✅ Stark. Das ist eine typische Alltags-Kontamination: kurz stoppen und Fläche neu sichern. Typischer Fehler: „war doch eben sauber“. Merksatz: Clean bleibt nur ohne Used.",
      feedbackWrong:
        "❌ Richtig ist: kurz stoppen und Fläche erneut sichern – sonst bleibt die Fläche ein Übertragungsweg. Merksatz: Clean bleibt nur ohne Used."
    },

    // -------------------------
    // Transfer (2) – schwerer
    // -------------------------

    {
      id: "j1_l1_a3_l6_q14",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Transfer: Team-Standard",
      prompt: "Sortiere: Welche Aussage hilft, die Ampelregel im Team einheitlich zu leben?",
      categories: [
        { id: "hilft", label: "Hilft (klar und einheitlich)" },
        { id: "hilft_nicht", label: "Hilft nicht (unklar/risikoreich)" }
      ],
      items: [
        { text: "Wir haben klare Beispiele pro Farbe, damit alle gleich entscheiden.", categoryId: "hilft" },
        { text: "Jeder macht es nach Gefühl, das passt schon.", categoryId: "hilft_nicht" },
        { text: "Bei Rot gilt: stoppen, sichern, dann weiter – immer.", categoryId: "hilft" },
        { text: "Wenn es schnell gehen muss, stufen wir Rot einfach runter.", categoryId: "hilft_nicht" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Einheitliche Standards reduzieren Fehler im Stress. Typischer Fehler: Regeln „situativ weich machen“. Merksatz: Standard schlägt Stress.",
      feedbackWrong:
        "❌ Denk an Team-Sicherheit: klare Beispiele und feste Rot-Regel. Merksatz: Standard schlägt Stress."
    },

    {
      id: "j1_l1_a3_l6_q15",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle: Kommunikation",
      statement: "Ampelregel funktioniert nur, wenn ich sie auch kurz kommuniziere (z. B. 'Stop, Rot – ich sichere kurz').",
      isTrue: true,
      feedbackCorrect:
        "✅ Genau. Kurze klare Ansage verhindert Missverständnisse und spart Zeit. Typischer Fehler: heimlich rumwurschteln, Team versteht es nicht. Merksatz: Kurz ansagen, sauber handeln.",
      feedbackWrong:
        "❌ Doch. Kurze Kommunikation macht die Ampel im Team wirksam und reduziert Chaos. Merksatz: Kurz ansagen, sauber handeln."
    }
  ]
};

export default LEKTION_6;