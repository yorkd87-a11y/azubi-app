// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_4.js
// Lektion 4 – Tool-Aufbereitung (Kamm/Bürste/Schere/Clips)

const LEKTION_4 = {
  id: "j1_l1_a3_l4",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Tool-Aufbereitung: Kamm, Bürste, Schere, Clips",
  track: "hygiene",
  energy: 16,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Der gefährlichste Satz im Salon ist: „Den Kamm hab ich doch nur kurz benutzt.“ Genau da entstehen die meisten Tool-Fehler.",
    keyPoints: [
      "Tool-Aufbereitung heißt: Reste entfernen → reinigen → desinfizieren → trocknen → sauber lagern (Clean/Used strikt trennen).",
      "Indirekte Übertragung passiert über Tools und Kontaktflächen – deshalb sind Reihenfolge und Einwirkzeit entscheidend.",
      "Sicherer Workflow ist wichtiger als Tempo: lieber wenige Tools korrekt aufbereiten als viele halb."
    ],
    practiceTask:
      "Heute: Stelle eine klare Clean/Used-Logik auf (z. B. 2 Boxen). Nach jeder Kundin: alle benutzten Tools sofort in Used. Am Ende: Used leer = alles korrekt aufbereitet und sauber gelagert.",
    reflectionQuestion:
      "Welches Tool wird bei dir am ehesten „vergessen“ (Clips, Bürsten, Sprühflaschen-Griffe) – und wie baust du den Trigger in deinen Ablauf ein?"
  },

  // 15 Fragen: 3 Warm-up (aus Step 3), 10 Core, 2 Transfer
  questions: [
    // -------------------------
    // Warm-up (3) – aus Step 3
    // -------------------------

    {
      id: "j1_l1_a3_l4_q01",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Warm-up: Händehygiene Trigger",
      question: "Wann ist Händehygiene im Salon sicher notwendig? (Mehrfach)",
      options: [
        "Vor Kundenkontakt / vor Kopfhautkontakt",
        "Nach Kundenkontakt",
        "Nach Toilettengang",
        "Nach Handy/Kasse/Produkten",
        "Nur morgens beim Start"
      ],
      correctIndices: [0, 1, 2, 3],
      feedbackCorrect:
        "✅ Richtig. Genau diese Trigger stoppen Übertragungswege im Alltag. Typischer Fehler: Handy/Kasse vergessen. Merksatz: Kontaktpunkt = Hände.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an: vor/nach Kunde, Toilette, Handy/Kasse/Produkte. Merksatz: Kontaktpunkt = Hände.",
      feedbackWrong:
        "❌ Nicht korrekt. Sicher notwendig ist es vor/nach Kundenkontakt, nach Toilette und nach Handy/Kasse/Produkten. Merksatz: Kontaktpunkt = Hände."
    },

    {
      id: "j1_l1_a3_l4_q02",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Warm-up: Desinfektion",
      question: "Was ist bei Händedesinfektion entscheidend?",
      options: [
        "Nur kurz an den Handflächen reiben",
        "Hände vollständig benetzen und Einwirkzeit beachten",
        "Nur Fingerspitzen benetzen",
        "Sofort mit Handtuch trocken wischen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Vollständige Benetzung + Einwirkzeit = Wirkung. Typischer Fehler: zu wenig Mittel oder sofort abwischen. Merksatz: Voll benetzen, warten.",
      feedbackWrong:
        "❌ Falsch. Entscheidend ist: vollständig benetzen und Einwirkzeit einhalten. Merksatz: Voll benetzen, warten."
    },

    {
      id: "j1_l1_a3_l4_q03",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Warm-up: Handschuhe",
      statement: "Handschuhe sind ein Freifahrtschein – damit kann ich alles anfassen und danach weiterarbeiten.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Handschuhe schützen nur bei korrektem Wechsel und sauberer Logik. Typischer Fehler: mit Handschuhen Handy/Türklinke anfassen. Merksatz: Handschuh = Zusatz, nicht Ersatz.",
      feedbackWrong:
        "❌ Falsch. Handschuhe ersetzen Händehygiene nicht und können Keime sogar besser verteilen. Merksatz: Handschuh = Zusatz, nicht Ersatz."
    },

    // -------------------------
    // Core (10) – Step 4 Inhalt
    // -------------------------

    {
      id: "j1_l1_a3_l4_q04",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Ziel",
      question: "Was ist das Hauptziel der Tool-Aufbereitung?",
      options: [
        "Tools schöner machen",
        "Übertragung über Gegenstände verhindern",
        "Zeit sparen",
        "Mehr Schaum erzeugen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Tools sind ein indirekter Übertragungsweg – Aufbereitung unterbricht die Kette. Typischer Fehler: „nur Haare abziehen reicht“. Merksatz: Tool = Weg.",
      feedbackWrong:
        "❌ Nicht korrekt. Ziel ist, Übertragung über Tools zu verhindern. Merksatz: Tool = Weg."
    },

    {
      id: "j1_l1_a3_l4_q05",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle",
      statement: "Ein Kamm ist hygienisch sauber, wenn keine Haare mehr dran sind.",
      isTrue: false,
      feedbackCorrect:
        "✅ Genau. Unsichtbare Rückstände (Talg/Produkte/Keime) bleiben trotz „haar-frei“. Typischer Fehler: optisch sauber = hygienisch sauber. Merksatz: Ohne Aufbereitung kein „sauber“.",
      feedbackWrong:
        "❌ Falsch. Haare weg heißt nicht hygienisch sicher. Rückstände und Keime sind oft unsichtbar. Merksatz: Ohne Aufbereitung kein „sauber“."
    },

    {
      id: "j1_l1_a3_l4_q06",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Standardprozess",
      prompt: "Bringe die Schritte der Tool-Aufbereitung in die richtige Reihenfolge.",
      steps: [
        "Haare/Produktreste entfernen",
        "Reinigen (geeignetes Mittel, mechanisch)",
        "Desinfizieren (geeignetes Mittel, Einwirkzeit)",
        "Trocknen",
        "Sauber lagern (Clean/Used trennen)"
      ],
      feedbackCorrect:
        "✅ Perfekt. Reihenfolge entscheidet über Wirksamkeit und verhindert Re-Kontamination. Typischer Fehler: nass weglegen oder Clean/Used mischen. Merksatz: R-R-D-T-L.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig: Reste weg → reinigen → desinfizieren → trocknen → lagern. Merksatz: R-R-D-T-L."
    },

    {
      id: "j1_l1_a3_l4_q07",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Vergessene Tools",
      question: "Welche Tools/Kontaktpunkte werden im Alltag häufig vergessen? (Mehrfach)",
      options: [
        "Clips/Abteilklammern",
        "Sprühflaschen-Griffe",
        "Arbeitswagen-Griffe",
        "Deko-Pflanze im Regal"
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "✅ Richtig. Alles, was oft angefasst wird, ist ein Kontaktpunkt. Typischer Fehler: nur an Schere/Kamm denken. Merksatz: Griff = Risiko.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an: Clips, Flaschen-Griffe, Wagen-Griffe. Merksatz: Griff = Risiko.",
      feedbackWrong:
        "❌ Nicht korrekt. Häufig vergessen werden Clips, Sprühflaschen-Griffe und Wagen-Griffe. Merksatz: Griff = Risiko."
    },

    {
      id: "j1_l1_a3_l4_q08",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Risiko verstehen",
      prompt: "Ordne Tool und Risiko/Begründung zu.",
      pairs: [
        { left: "Schere", right: "Kontakt mit Haut/Mikroverletzungen möglich" },
        { left: "Bürste", right: "Viele Zwischenräume, sammelt Talg/Produkte" },
        { left: "Clips", right: "Direkter Kopfhautkontakt, wird schnell weitergereicht" }
      ],
      feedbackCorrect:
        "✅ Stark. Wenn du das Risiko kennst, arbeitest du konsequenter. Typischer Fehler: Clips als „harmlos“ sehen. Merksatz: Kopfhautkontakt = ernst.",
      feedbackWrong:
        "❌ Nicht ganz. Schere = Mikroverletzung, Bürste = Zwischenräume, Clips = Kopfhautkontakt. Merksatz: Kopfhautkontakt = ernst."
    },

    {
      id: "j1_l1_a3_l4_q09",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Salon-Situation",
      situationTitle: "Produktreste am Kamm",
      situationText: [
        "Du siehst Produktreste am Kamm (Spray/Öl/Stylingfilm).",
        "Du willst ihn direkt desinfizieren."
      ],
      options: [
        "Direkt desinfizieren – reicht.",
        "Erst reinigen (Reste lösen/entfernen), dann desinfizieren.",
        "Nur mit Handtuch abreiben."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Desinfektion auf Film kann schlechter benetzen/wirken. Schmutz zuerst runter.",
        "Professionell: erst Material entfernen, dann Erreger sicher reduzieren.",
        "Abreiben reduziert sichtbar, ist aber keine sichere Aufbereitung."
      ],
      feedbackCorrect:
        "✅ Genau. Erst reinigen, dann desinfizieren – sonst schwächt der Film die Wirkung. Typischer Fehler: Spray auf Dreck. Merksatz: Erst sauber, dann sicher.",
      feedbackWrong:
        "❌ Richtig ist: erst reinigen, dann desinfizieren. Produktfilm kann Benetzung/Wirkung stören. Merksatz: Erst sauber, dann sicher."
    },

    {
      id: "j1_l1_a3_l4_q10",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Organisation",
      statement: "Saubere Tools dürfen zusammen mit benutzten Tools in dieselbe Schublade, wenn man sie trennt.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Sobald Clean und Used zusammenkommen, riskierst du Kreuzkontamination. Typischer Fehler: „ich weiß doch, was sauber ist“. Merksatz: Clean und Used nie mischen.",
      feedbackWrong:
        "❌ Falsch. Clean und Used im selben Bereich führt schnell zu Kreuzkontamination. Merksatz: Clean und Used nie mischen."
    },

    {
      id: "j1_l1_a3_l4_q11",
      type: "gap_fill",
      gameType: "gap_fill",
      topic: "Merksatz",
      textBefore: "Aufbereitung besteht aus: Reste entfernen, reinigen, ",
      correctAnswer: "desinfizieren",
      textAfter: ", trocknen, lagern.",
      options: ["desinfizieren", "fotografieren", "föhnen", "posten"],
      feedbackCorrect:
        "✅ Genau. Desinfektion ist der Schritt, der Erreger gezielt reduziert – Reinigung allein reicht in Risiko-Situationen nicht. Typischer Fehler: Schritt überspringen. Merksatz: R-R-D-T-L.",
      feedbackWrong:
        "❌ Falsch. Der fehlende Schritt ist „desinfizieren“. Merksatz: R-R-D-T-L."
    },

    {
      id: "j1_l1_a3_l4_q12",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Wann besonders streng?",
      question: "Wann ist Tool-Aufbereitung besonders konsequent nötig? (Mehrfach)",
      options: [
        "Nach Kontakt mit gereizter/entzündeter Kopfhaut",
        "Nach Blutpunkt",
        "Nach jeder Kundin/jedem Kunden",
        "Nur am Abend zum Feierabend"
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "✅ Richtig. Standard ist nach jedem Kunden – und bei Entzündung/Blutpunkt besonders streng. Typischer Fehler: „nur kurz, nur einmal“. Merksatz: Nach Kunde: Used.",
      feedbackPartially:
        "⚠️ Teilweise. Standard ist: nach jedem Kunden. Bei Entzündung/Blutpunkt extra konsequent. Merksatz: Nach Kunde: Used.",
      feedbackWrong:
        "❌ Nicht korrekt. Richtig: nach jedem Kunden, besonders bei Entzündung und Blutpunkt. Merksatz: Nach Kunde: Used."
    },

    {
      id: "j1_l1_a3_l4_q13",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Schwieriger",
      situationTitle: "Nur noch eine Bürste sauber",
      situationText: [
        "Zwei Kunden warten, du hast nur noch eine saubere Bürste.",
        "Die zweite Bürste liegt in Used."
      ],
      options: [
        "Beide Kunden schnell mit der sauberen Bürste bedienen – geht schon.",
        "Kurz stoppen: Used-Bürste korrekt aufbereiten oder saubere Alternative holen.",
        "Die Used-Bürste kurz mit Wasser abspülen und nutzen."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Du würdest ein Tool als Übertragungsweg zwischen Kunden nutzen – genau das soll Aufbereitung verhindern.",
        "Professionell: Prozess vor Tempo. Lieber kurz sichern als Risiko erzeugen.",
        "Nur Wasser ist keine sichere Aufbereitung und reduziert Erreger nicht gezielt."
      ],
      feedbackCorrect:
        "✅ Genau. Lieber kurz stoppen und korrekt lösen, als Übertragung riskieren. Typischer Fehler: Zeitdruck entscheidet. Merksatz: Prozess vor Tempo.",
      feedbackWrong:
        "❌ Richtig ist: stoppen und korrekt aufbereiten oder Alternative holen. Zeitdruck ist kein Grund für Hygienelücken. Merksatz: Prozess vor Tempo."
    },

    // -------------------------
    // Transfer (2) – Szenario + Fehlerfalle (schwerer)
    // -------------------------

    {
      id: "j1_l1_a3_l4_q14",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Transfer: Workflow-Design",
      prompt: "Sortiere: Wo gehört das Tool hin?",
      categories: [
        { id: "clean", label: "Clean (sofort wieder nutzbar)" },
        { id: "used", label: "Used (muss aufbereitet werden)" }
      ],
      items: [
        { text: "Kamm wurde an der Kundin benutzt, Haare sind entfernt", categoryId: "used" },
        { text: "Schere wurde benutzt und liegt seitdem offen am Platz", categoryId: "used" },
        { text: "Clips wurden abgenommen und liegen auf dem Wagen", categoryId: "used" },
        { text: "Tool ist vollständig aufbereitet, trocken und korrekt gelagert", categoryId: "clean" }
      ],
      feedbackCorrect:
        "✅ Stark. Entscheidend ist nicht „sieht sauber aus“, sondern: aufbereitet, trocken, korrekt gelagert. Typischer Fehler: Haare entfernt = clean. Merksatz: Clean heißt: fertig aufbereitet.",
      feedbackWrong:
        "❌ Denk an die Regel: Alles, was benutzt wurde, ist Used – bis es komplett aufbereitet, trocken und sauber gelagert ist. Merksatz: Clean heißt: fertig aufbereitet."
    },

    {
      id: "j1_l1_a3_l4_q15",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle: Einwirkzeit",
      statement: "Wenn ich stärker reibe oder länger sprühe, kann ich die Einwirkzeit abkürzen.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Einwirkzeit ist Teil der Wirksamkeit – sie lässt sich nicht „wegschrubben“. Typischer Fehler: Zeitdruck → Abkürzen. Merksatz: Einwirkzeit ist nicht verhandelbar.",
      feedbackWrong:
        "❌ Falsch. Einwirkzeit ist Pflicht und nicht durch stärkeres Reiben ersetzbar. Merksatz: Einwirkzeit ist nicht verhandelbar."
    }
  ]
};

export default LEKTION_4;