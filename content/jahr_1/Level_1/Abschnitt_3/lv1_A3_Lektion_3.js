// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_3.js
// Lektion 3 – Händehygiene (wann genau, Standardablauf)

const LEKTION_3 = {
  id: "j1_l1_a3_l3",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Händehygiene: Wann genau und wie?",
  track: "hygiene",
  energy: 15,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Der größte Hygienefehler passiert in Sekunden: einmal Handy, einmal Kasse – und dann direkt an die Kundin.",
    keyPoints: [
      "Hände sind der häufigste Übertragungsweg im Salon – deshalb sind klare Trigger-Momente entscheidend.",
      "Waschen bei sichtbarer Verschmutzung, nach Toilette und wenn nötig – Desinfektion für sichere Keimreduktion im Ablauf.",
      "Handschuhe sind Zusatzschutz: nur auf sauberen Händen, korrekt wechseln, nicht als Freifahrtschein."
    ],
    practiceTask:
      "Heute: Definiere 5 feste Händehygiene-Trigger (z. B. nach Kasse, nach Handy, nach Used-Tools, vor Kopfhautkontakt, nach Reinigung). Halte dich eine Schicht lang konsequent daran.",
    reflectionQuestion:
      "Welcher Trigger war bei dir am schwersten einzuhalten – und wie löst du das morgen (z. B. Desinfektion am Wagen, Handy weg vom Platz)?"
  },

  // 15 Fragen: 3 Warm-up (aus Step 2), 10 Core, 2 Transfer
  questions: [
    // -------------------------
    // Warm-up (3) – aus Step 2
    // -------------------------

    {
      id: "j1_l1_a3_l3_q01",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Warm-up: Begriffe",
      question: "Was macht Desinfektion primär?",
      options: [
        "Entfernt nur Haare von Tools",
        "Inaktiviert/abtötet Krankheitserreger (bei korrekter Anwendung)",
        "Macht alles automatisch steril",
        "Ist nur warmes Wasser"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Desinfektion reduziert Erreger gezielt – aber nur mit korrekter Anwendung (Benetzung + Einwirkzeit). Typischer Fehler: zu wenig/zu kurz. Merksatz: Benetzen + warten.",
      feedbackWrong:
        "❌ Nicht ganz. Desinfektion bedeutet gezielte Erregerreduktion – mit Produkt, Benetzung und Einwirkzeit. Merksatz: Benetzen + warten."
    },

    {
      id: "j1_l1_a3_l3_q02",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Warm-up: Ablauf",
      statement: "Meist ist es sinnvoll: erst reinigen, dann desinfizieren.",
      isTrue: true,
      feedbackCorrect:
        "✅ Genau. Schmutz kann die Wirkung schwächen – erst sauber machen, dann sicher desinfizieren. Typischer Fehler: Spray auf Dreck. Merksatz: Erst sauber, dann sicher.",
      feedbackWrong:
        "❌ Doch. In der Praxis gilt oft: reinigen → desinfizieren. Schmutz kann sonst Benetzung/Wirkung stören. Merksatz: Erst sauber, dann sicher."
    },

    {
      id: "j1_l1_a3_l3_q03",
      type: "gap_fill",
      gameType: "gap_fill",
      topic: "Warm-up: Schlüsselbegriff",
      textBefore: "Desinfektion wirkt nur zuverlässig, wenn die ",
      correctAnswer: "Einwirkzeit",
      textAfter: " eingehalten wird.",
      options: ["Einwirkzeit", "Playlist", "Spiegelhöhe", "Kundenzahl"],
      feedbackCorrect:
        "✅ Richtig. Ohne Einwirkzeit bleibt die Wirkung unsicher. Typischer Fehler: sofort abwischen. Merksatz: Einwirkzeit ist Pflicht.",
      feedbackWrong:
        "❌ Falsch. Richtig ist: Einwirkzeit. Sofort abwischen nimmt dem Mittel die Wirkung. Merksatz: Einwirkzeit ist Pflicht."
    },

    // -------------------------
    // Core (10) – Step 3 Inhalt
    // -------------------------

    {
      id: "j1_l1_a3_l3_q04",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Grundprinzip",
      question: "Was ist im Salon der häufigste Übertragungsweg?",
      options: ["Luft", "Hände", "Wasser", "Licht"],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Hände wechseln ständig zwischen Kopfhaut, Tools, Flaschen, Wagen, Kasse – darum ist Händehygiene der stärkste Schutz. Typischer Fehler: Trigger übersehen. Merksatz: Hände sind der Hauptweg.",
      feedbackWrong:
        "❌ Nicht korrekt. In der Praxis sind es meist die Hände – weil sie die meisten Kontaktpunkte haben. Merksatz: Hände sind der Hauptweg."
    },

    {
      id: "j1_l1_a3_l3_q05",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Trigger-Momente",
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
        "✅ Richtig. Das sind typische Trigger: vor/nach Kontakt, nach Toilette und nach Kontaktpunkten wie Handy/Kasse. Typischer Fehler: „war ja nur kurz“. Merksatz: Nach Kontaktpunkt = Hände.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an die Trigger-Kette: vor/nach Kunde, Toilette, Handy/Kasse/Produkte. Merksatz: Nach Kontaktpunkt = Hände.",
      feedbackWrong:
        "❌ Nicht korrekt. Sicher notwendig ist es vor/nach Kundenkontakt, nach Toilettengang und nach Handy/Kasse/Produkten. Merksatz: Nach Kontaktpunkt = Hände."
    },

    {
      id: "j1_l1_a3_l3_q06",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Salon-Situation",
      situationTitle: "Von Kasse zurück an die Kundin",
      situationText: [
        "Du kassierst an der Rezeption und nimmst Produkte in die Hand.",
        "Direkt danach willst du am Platz weiterarbeiten."
      ],
      options: [
        "Weiterarbeiten – Kasse ist ja sauber.",
        "Händehygiene durchführen (mindestens desinfizieren).",
        "Hände kurz an der Schürze abwischen."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Kasse/Produkte sind Kontaktpunkte mit vielen Händen – Risiko für Übertragung.",
        "Professionell: Kontaktpunkt erkannt → Hände wieder hygienisch sicher machen.",
        "Schürze ist keine Hygienemaßnahme und kann Keime zusätzlich verteilen."
      ],
      feedbackCorrect:
        "✅ Genau. Nach Kasse/Produkten sind Hände ein Übertragungsweg – kurz sichern, dann weiter. Typischer Fehler: „war nur ein Griff“. Merksatz: Nach Kasse: Hände.",
      feedbackWrong:
        "❌ Richtig ist: Händehygiene. Kasse/Produkte sind typische Kontaktpunkte. Merksatz: Nach Kasse: Hände."
    },

    {
      id: "j1_l1_a3_l3_q07",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Waschen vs. Desinfizieren",
      prompt: "Ordne zu: Waschen oder Desinfizieren?",
      pairs: [
        { left: "Sichtbar verschmutzte Hände (z. B. Farbe/Produkte)", right: "Waschen" },
        { left: "Nach Toilettengang", right: "Waschen" },
        { left: "Vor/ nach engem Hautkontakt (ohne sichtbaren Schmutz)", right: "Desinfizieren" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Waschen bei Schmutz/Toilette, Desinfektion im Ablauf für sichere Keimreduktion. Typischer Fehler: desinfizieren trotz sichtbarem Schmutz. Merksatz: Schmutz = waschen.",
      feedbackWrong:
        "❌ Nicht ganz. Grundregel: sichtbar schmutzig/Toilette = waschen. Sonst im Ablauf: desinfizieren. Merksatz: Schmutz = waschen."
    },

    {
      id: "j1_l1_a3_l3_q08",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Standardablauf Waschen",
      prompt: "Bringe den Standardablauf fürs Händewaschen in die richtige Reihenfolge.",
      steps: [
        "Hände anfeuchten",
        "Seife auftragen",
        "Mindestens 20 Sekunden gründlich reiben (inkl. Daumen/Zwischenräume)",
        "Abspülen",
        "Gründlich trocknen"
      ],
      feedbackCorrect:
        "✅ Perfekt. Technik + Zeit machen den Unterschied. Typischer Fehler: zu kurz und nur Handflächen. Merksatz: 20 Sekunden, alle Stellen.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig ist: anfeuchten → Seife → 20 Sek. reiben → abspülen → trocknen. Merksatz: 20 Sekunden, alle Stellen."
    },

    {
      id: "j1_l1_a3_l3_q09",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Desinfektion richtig",
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
        "❌ Falsch. Entscheidend ist: Hände vollständig benetzen und Einwirkzeit einhalten. Merksatz: Voll benetzen, warten."
    },

    {
      id: "j1_l1_a3_l3_q10",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Schmuck",
      statement: "Ringe/Schmuck können Händehygiene schlechter machen.",
      isTrue: true,
      feedbackCorrect:
        "✅ Richtig. Ringe schaffen Ritzen, dort bleibt Schmutz/Feuchtigkeit – und du kommst beim Reiben schlechter ran. Typischer Fehler: „nur ein kleiner Ring“. Merksatz: Ohne Schmuck ist sicherer.",
      feedbackWrong:
        "❌ Doch. Schmuck kann Reibung/Abdeckung verschlechtern und Keime halten. Merksatz: Ohne Schmuck ist sicherer."
    },

    {
      id: "j1_l1_a3_l3_q11",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Vergessene Stellen",
      question: "Welche Stellen werden beim Einreiben am häufigsten vergessen?",
      options: [
        "Daumen und Fingerzwischenräume",
        "Ohrläppchen",
        "Schulter",
        "Hinterkopf"
      ],
      correctIndex: 0,
      feedbackCorrect:
        "✅ Genau. Daumen + Zwischenräume sind Klassiker. Typischer Fehler: nur Handflächen. Merksatz: Daumen, Zwischenräume, Fingerspitzen.",
      feedbackWrong:
        "❌ Falsch. Am häufigsten werden Daumen und Fingerzwischenräume vergessen. Merksatz: Daumen, Zwischenräume, Fingerspitzen."
    },

    {
      id: "j1_l1_a3_l3_q12",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Trigger-Training",
      prompt: "Sortiere: Nach welcher Situation ist Händehygiene nötig?",
      categories: [
        { id: "ja", label: "Ja – Händehygiene nötig" },
        { id: "nein", label: "Nein – nicht zwingend sofort" }
      ],
      items: [
        { text: "Nach Handy nutzen", categoryId: "ja" },
        { text: "Nach Used-Tools anfassen", categoryId: "ja" },
        { text: "Nach Toilettengang", categoryId: "ja" },
        { text: "Nur vom Platz zur Kundin drehen ohne Kontakt zu etwas", categoryId: "nein" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Händehygiene nach Kontaktpunkten und Used-Tools ist Pflicht. Typischer Fehler: Handy/Kasse vergessen. Merksatz: Kontaktpunkt = Hände.",
      feedbackWrong:
        "❌ Denk an Kontaktpunkte: Handy, Kasse, Used-Tools, Toilette. Merksatz: Kontaktpunkt = Hände."
    },

    {
      id: "j1_l1_a3_l3_q13",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Handschuhe",
      statement: "Handschuhe sind ein Freifahrtschein – damit kann ich alles anfassen und danach weiterarbeiten.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Handschuhe schützen nur, wenn du sie korrekt wechselst und nicht alles damit anfasst (Handy/Türklinke/Kasse). Typischer Fehler: Handschuhe als Ersatz nutzen. Merksatz: Handschuh = Zusatz, nicht Ersatz.",
      feedbackWrong:
        "❌ Falsch. Handschuhe ersetzen Händehygiene nicht und verteilen sonst Keime. Merksatz: Handschuh = Zusatz, nicht Ersatz."
    },

    // -------------------------
    // Transfer (2) – Szenario + Fehlerfalle
    // -------------------------

    {
      id: "j1_l1_a3_l3_q14",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Transfer",
      situationTitle: "Von Reinigen zurück zum Kunden",
      situationText: [
        "Du hast gerade den Platz geputzt (Tücher, Reinigungsmittel, Abfall).",
        "Direkt danach willst du die Kundin weiter bedienen."
      ],
      options: [
        "Weiterarbeiten – ich habe ja sauber gemacht.",
        "Händehygiene durchführen (mindestens desinfizieren, bei sichtbarem Schmutz waschen).",
        "Nur kurz Hände abklopfen."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Putzen heißt: du hattest Kontakt mit potenziell kontaminierten Flächen/Material.",
        "Professionell: nach Putzen/Abfall Hände wieder sicher machen – sonst überträgst du es.",
        "Abklopfen ist keine Hygienemaßnahme."
      ],
      feedbackCorrect:
        "✅ Genau. Nach Putzen/Abfall sind Hände ein Übertragungsweg – kurz sichern, dann weiter. Typischer Fehler: „ich hab doch sauber gemacht“. Merksatz: Nach Putzen: Hände.",
      feedbackWrong:
        "❌ Richtig ist: Händehygiene. Putzen/Abfall = Kontaktpunkt. Merksatz: Nach Putzen: Hände."
    },

    {
      id: "j1_l1_a3_l3_q15",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Fehlerfalle",
      question: "Was ist der größte Fehler beim Händewaschen im Salonalltag?",
      options: [
        "Zu lange waschen",
        "Zu kurz/oberflächlich waschen (nur Handflächen)",
        "Mit kaltem Wasser waschen",
        "Zu leise sprechen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Kurz und oberflächlich bringt wenig – entscheidend sind Zeit (ca. 20 Sek.) und alle Stellen. Typischer Fehler: nur Handflächen. Merksatz: 20 Sekunden, alle Stellen.",
      feedbackWrong:
        "❌ Nicht korrekt. Der Klassiker ist: zu kurz und nur Handflächen. Merksatz: 20 Sekunden, alle Stellen."
    }
  ]
};

export default LEKTION_3;