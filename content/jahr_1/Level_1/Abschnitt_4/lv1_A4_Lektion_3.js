// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_3.js
// Lektion 3 – Sicherheitsdatenblatt (SDB): wozu + wo finden?

const LEKTION_3 = {
  id: "j1_l1_a4_l3",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Sicherheitsdatenblatt: Wozu und wo findest du es?",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Ein Spritzer Chemie landet fast im Auge – wo steht der genaue Sofortablauf?",
    keyPoints: [
      "Das Sicherheitsdatenblatt (SDB) ist die Detail-Anleitung für Sicherheit: Erste Hilfe, Schutz, Lagerung, Entsorgung.",
      "Im Alltag nutzt du das SDB vor allem bei Notfällen, Unsicherheit bei Schutzmaßnahmen oder bei neuen Produkten.",
      "Wichtig: SDB muss im Salon schnell auffindbar sein (Hersteller-Download, Salonordner/QR oder interner Standard)."
    ],
    practiceTask:
      "Finde zu einem Produkt das SDB (digital oder im Salonordner). Suche den Abschnitt 'Erste Hilfe' und nenne eine Sofortmaßnahme.",
    reflectionQuestion:
      "Was ist bei euch schneller auffindbar: Etikett oder SDB – und warum?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l3_q01",
      topic: "Grundverständnis",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l3_q01",
        topic: "Grundverständnis",
        question: "Was ist das Sicherheitsdatenblatt (SDB) am ehesten?",
        options: [
          "Eine Werbebroschüre mit Anwendungstipps",
          "Ein Dokument mit Sicherheitsinfos: Erste Hilfe, Schutz, Lagerung, Entsorgung",
          "Eine Preisliste für den Einkauf",
          "Ein Farbchart für Nuancen"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Das SDB ist dein Sicherheits-Manual. Typischer Fehler: SDB als Papierkram abtun. Merksatz: SDB = Sicherheit in Detail.",
        feedbackWrong:
          "Falsch. Warum: SDB ist nicht Marketing, sondern Sicherheit. Typischer Fehler: Dokumente ignorieren, bis etwas passiert. Merksatz: SDB kennen, bevor es brennt."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l3_q02",
      topic: "Mythos",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l3_q02",
        topic: "Mythos",
        statement: "Das SDB braucht man nur im Büro, im Salon nicht.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Im Salon zählt es besonders bei Notfällen und Schutzmaßnahmen. Typischer Fehler: Sicherheitsinfos auslagern. Merksatz: SDB gehört in den Alltag.",
        feedbackWrong:
          "Falsch. Warum: Im Ernstfall ist das SDB oft die schnellste, klare Anleitung. Typischer Fehler: Improvisieren statt nachschlagen. Merksatz: Erst lesen, dann handeln."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l3_q03",
      topic: "Begriff",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l3_q03",
        topic: "Begriff",
        textBefore: "Die Abkürzung SDB steht für ",
        correctAnswer: "Sicherheitsdatenblatt",
        textAfter: ".",
        options: ["Salon-Dienst-Block", "Sicherheitsdatenblatt", "Styling-Datenbank", "Service-Dokument-Board"],
        feedbackCorrect:
          "Richtig. Warum: Der Begriff ist wichtig, damit du im Team klar nachfragen kannst. Typischer Fehler: SDB nicht zuordnen. Merksatz: SDB = Sicherheitsdatenblatt.",
        feedbackWrong:
          "Falsch. Warum: Nur wenn du den Begriff kennst, findest du das richtige Dokument schnell. Typischer Fehler: herumfragen ohne klare Begriffe. Merksatz: Begriff kennen = schneller handeln."
      }
    },

    // 4) Core
    {
      id: "j1_l1_a4_l3_q04",
      topic: "Wann nutzen?",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l3_q04",
        topic: "Wann nutzen?",
        situationTitle: "Neues Reinigungsmittel – Unsicherheit",
        situationText: [
          "Ein neues Flächenmittel ist da. Du bist unsicher, ob Handschuhe reichen oder ob zusätzlich Augen-/Atemschutz sinnvoll ist.",
          "Auf dem Etikett stehen Hinweise, aber du willst es genau wissen."
        ],
        options: [
          "Ich mache es wie immer, wird schon passen.",
          "Ich suche das SDB und prüfe Schutzmaßnahmen und Hinweise zur Anwendung.",
          "Ich frage kurz jemanden, der es 'gefühlt' kennt."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Routine ersetzt keine Produktinfos.",
          "Richtig: SDB liefert konkrete Schutz- und Verhaltensregeln.",
          "Falsch: Gefühl ist keine verlässliche Sicherheitsquelle."
        ],
        feedbackCorrect:
          "Richtig. Warum: Das SDB ist für genau diese Situationen da. Typischer Fehler: Gewohnheit schlägt Info. Merksatz: Unsicher? SDB.",
        feedbackWrong:
          "Nicht optimal. Warum: Du riskierst falsche Schutzmaßnahmen. Typischer Fehler: 'Ich mach’s wie immer'. Merksatz: Neues Produkt = neuer Check."
      }
    },

    // 5) Core
    {
      id: "j1_l1_a4_l3_q05",
      topic: "SDB-Inhalte",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l3_q05",
        topic: "SDB-Inhalte",
        prompt: "Ordne dem SDB-Bereich die passende Info zu.",
        pairs: [
          { left: "Erste Hilfe", right: "Was du sofort bei Auge/Haut/Einatmen tust" },
          { left: "Handhabung/Schutz", right: "Welche PSA, Lüften, Verhalten im Umgang" },
          { left: "Lagerung", right: "Wie und wo sicher aufbewahren" },
          { left: "Entsorgung", right: "Wie Reste/Material korrekt entsorgt werden" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du weißt, wo du im Ernstfall nachschlägst. Typischer Fehler: falschen Abschnitt suchen. Merksatz: Abschnitt kennen = schneller handeln.",
        feedbackWrong:
          "Nicht ganz. Warum: SDB ist strukturiert – wenn du das System kennst, findest du Infos sofort. Typischer Fehler: planlos scrollen. Merksatz: Erst Abschnitt, dann Maßnahme."
      }
    },

    // 6) Core
    {
      id: "j1_l1_a4_l3_q06",
      topic: "SDB nutzen",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l3_q06",
        topic: "SDB nutzen",
        question: "Wann ist das SDB besonders sinnvoll? (mehrere richtig)",
        options: [
          "Bei Augenkontakt/Hautkontakt/Einatmen",
          "Wenn ein neues Produkt eingeführt wird",
          "Wenn du die richtige Entsorgung klären willst",
          "Wenn du eine neue Trendfrisur suchst",
          "Wenn du Schutzmaßnahmen für eine Tätigkeit festlegst"
        ],
        correctIndices: [0, 1, 2, 4],
        feedbackCorrect:
          "Richtig. Warum: SDB ist Notfall- und Schutzinfo, plus Lagerung/Entsorgung. Typischer Fehler: SDB nur im Notfall sehen. Merksatz: SDB ist Prävention und Rettungsleine.",
        feedbackPartially:
          "Teilweise. Warum: Einige wichtige Anwendungsfälle fehlen. Typischer Fehler: SDB zu eng denken. Merksatz: SDB hilft vor, während und nach dem Umgang.",
        feedbackWrong:
          "Falsch. Warum: SDB ist kein Styling-Tool, sondern Sicherheit. Typischer Fehler: Sicherheitsinfos falsch einordnen. Merksatz: SDB = Schutz, nicht Trend."
      }
    },

    // 7) Core
    {
      id: "j1_l1_a4_l3_q07",
      topic: "Schnell finden",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l3_q07",
        topic: "Schnell finden",
        prompt: "Bringe den Ablauf 'SDB im Notfall' in eine sinnvolle Reihenfolge.",
        items: [
          "Produkt identifizieren (Name/Hersteller)",
          "SDB finden (Salonordner/QR/Hersteller-Download)",
          "Abschnitt 'Erste Hilfe' öffnen",
          "Maßnahmen umsetzen und Teamleitung informieren"
        ],
        correctOrder: [
          "Produkt identifizieren (Name/Hersteller)",
          "SDB finden (Salonordner/QR/Hersteller-Download)",
          "Abschnitt 'Erste Hilfe' öffnen",
          "Maßnahmen umsetzen und Teamleitung informieren"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst sicher wissen, welches Produkt, dann richtige Anleitung. Typischer Fehler: falsches Dokument öffnen. Merksatz: Identifizieren → SDB → Erste Hilfe → handeln.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge spart Zeit und verhindert Verwechslung. Typischer Fehler: hektisch ohne Produktklarheit. Merksatz: Erst Produkt klar, dann SDB."
      }
    },

    // 8) Core
    {
      id: "j1_l1_a4_l3_q08",
      topic: "Wo findest du es?",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l3_q08",
        topic: "Wo findest du es?",
        prompt: "Sortiere: Wo ist das SDB typischerweise zu finden – und was ist keine verlässliche Quelle?",
        categories: [
          { id: "zuverlaessig", label: "Zuverlässig" },
          { id: "unzuverlaessig", label: "Nicht verlässlich" }
        ],
        items: [
          { text: "Hersteller-Webseite / offizieller Download", categoryId: "zuverlaessig" },
          { text: "Salonordner / interner QR-Code / Betriebsablage", categoryId: "zuverlaessig" },
          { text: "Produktlieferant mit Dokumenten-Download", categoryId: "zuverlaessig" },
          { text: "Irgendein Screenshot aus einem Chat", categoryId: "unzuverlaessig" },
          { text: "Zufälliger Blogbeitrag ohne Quelle", categoryId: "unzuverlaessig" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Im Notfall brauchst du verlässliche Infos. Typischer Fehler: irgendwas googeln. Merksatz: Offiziell oder intern hinterlegt = sicher.",
        feedbackWrong:
          "Nicht ganz. Warum: Unklare Quellen können falsche Maßnahmen auslösen. Typischer Fehler: 'Hauptsache schnell'. Merksatz: Schnell ja, aber richtig."
      }
    },

    // 9) Core
    {
      id: "j1_l1_a4_l3_q09",
      topic: "Abschnitte",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l3_q09",
        topic: "Abschnitte",
        question: "In welchem SDB-Teil findest du die richtige Entsorgung von Resten?",
        options: ["Erste Hilfe", "Entsorgung", "Farbkarte", "Marketing"],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Entsorgung ist ein eigener Bereich im SDB. Typischer Fehler: Reste einfach wegkippen. Merksatz: Entsorgung steht im SDB.",
        feedbackWrong:
          "Falsch. Warum: Erste Hilfe ist für Unfälle, nicht für Entsorgung. Typischer Fehler: Abschnitt verwechseln. Merksatz: Entsorgung = Entsorgung."
      }
    },

    // 10) Transfer
    {
      id: "j1_l1_a4_l3_q10",
      topic: "SDB fehlt",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l3_q10",
        topic: "SDB fehlt",
        situationTitle: "SDB nicht auffindbar",
        situationText: [
          "Du suchst das SDB, aber findest es nicht in der Ablage.",
          "Du musst trotzdem sicher arbeiten."
        ],
        options: [
          "Ich arbeite einfach weiter – das Etikett reicht immer.",
          "Ich stoppe kurz, frage nach der internen Ablage oder lade es beim Hersteller herunter, bevor ich weitermache.",
          "Ich mische weniger, dann ist es egal."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Etikett ist Kurzinfo – bei Unsicherheit brauchst du Details.",
          "Richtig: Erst Dokument finden, dann sicher entscheiden.",
          "Falsch: Menge ersetzt keine Schutzmaßnahmen."
        ],
        feedbackCorrect:
          "Richtig. Warum: Ohne verlässliche Infos steigt das Risiko. Typischer Fehler: 'wird schon gehen'. Merksatz: Kein SDB = erst beschaffen.",
        feedbackWrong:
          "Nicht optimal. Warum: Du arbeitest dann im Blindflug. Typischer Fehler: Risiko kleinrechnen. Merksatz: Infos zuerst, dann Arbeit."
      }
    },

    // 11) Transfer
    {
      id: "j1_l1_a4_l3_q11",
      topic: "Etikett vs SDB",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l3_q11",
        topic: "Etikett vs SDB",
        prompt: "Ordne zu: Was liefert Etikett – was liefert SDB?",
        pairs: [
          { left: "Etikett", right: "Schnell-Check: Signalwort, Symbole, kurze Hinweise" },
          { left: "SDB", right: "Detail-Infos: Erste Hilfe, Schutz, Lagerung, Entsorgung" },
          { left: "Etikett", right: "Direkt auf dem Produkt sichtbar" },
          { left: "SDB", right: "Dokument, das du gezielt findest/abrufst" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du nutzt beide Quellen sinnvoll. Typischer Fehler: Etikett und SDB verwechseln. Merksatz: Etikett = kurz, SDB = tief.",
        feedbackWrong:
          "Nicht ganz. Warum: Etikett ist Einstieg, SDB ist Detail. Typischer Fehler: nur eine Quelle nutzen. Merksatz: Kurz + Detail = sicher."
      }
    },

    // 12) Transfer
    {
      id: "j1_l1_a4_l3_q12",
      topic: "Zugriff",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l3_q12",
        topic: "Zugriff",
        statement: "Das SDB sollte im Salon so abgelegt sein, dass man es schnell findet – auch im Stress.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Im Ernstfall zählt Zeit und Klarheit. Typischer Fehler: Dokumente irgendwo speichern. Merksatz: SDB muss auffindbar sein.",
        feedbackWrong:
          "Falsch. Warum: Wenn du es nicht findest, hilft es dir nicht. Typischer Fehler: 'Wir suchen dann schon'. Merksatz: Ablage ist Teil der Sicherheit."
      }
    },

    // 13) Transfer (gap_fill)
    {
      id: "j1_l1_a4_l3_q13",
      topic: "Erste Hilfe",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l3_q13",
        topic: "Erste Hilfe",
        textBefore: "Im SDB findest du unter anderem den Abschnitt 'Erste ",
        correctAnswer: "Hilfe",
        textAfter: "'.",
        options: ["Hilfe", "Farbe", "Pause", "Kasse"],
        feedbackCorrect:
          "Richtig. Warum: Genau dort stehen Sofortmaßnahmen. Typischer Fehler: im Notfall planlos suchen. Merksatz: Erste Hilfe steht im SDB.",
        feedbackWrong:
          "Falsch. Warum: Für Unfälle ist 'Erste Hilfe' der entscheidende Abschnitt. Typischer Fehler: falschen Abschnitt öffnen. Merksatz: Erste Hilfe ist der Startpunkt."
      }
    },

    // 14) Transfer
    {
      id: "j1_l1_a4_l3_q14",
      topic: "Notfall-Ablauf",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l3_q14",
        topic: "Notfall-Ablauf",
        prompt: "Setze den Notfall-Ablauf mit SDB in die richtige Reihenfolge.",
        steps: [
          "Sofortmaßnahme starten (z. B. spülen, frische Luft, Haut abwaschen)",
          "Produkt identifizieren und SDB öffnen",
          "Abschnitt 'Erste Hilfe' prüfen",
          "Maßnahmen vervollständigen und Teamleitung informieren",
          "Vorfall kurz dokumentieren (was, wann, womit)"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst Sofortmaßnahme, dann Details absichern und sauber abschließen. Typischer Fehler: zu lange suchen statt handeln. Merksatz: Erst retten, dann nachschlagen.",
        feedbackWrong:
          "Nicht ganz. Warum: Sofortmaßnahmen haben Vorrang, SDB macht es präzise. Typischer Fehler: Reihenfolge verdrehen. Merksatz: Sofort handeln, dann SDB nutzen."
      }
    },

    // 15) Transfer (Sentence Builder + Audio)
    {
      id: "j1_l1_a4_l3_q15",
      topic: "Merksatz SDB",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l3_q15",
        type: "sentence_builder",
        topic: "Merksatz SDB",
        question: "Baue den passenden Merksatz zum SDB.",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich nutze das Sicherheitsdatenblatt, bevor ich improvisiere",
        extraWords: ["egal", "irgendwann", "später"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: SDB liefert klare Anweisungen statt Bauchgefühl. Typischer Fehler: raten im Stress. Merksatz: SDB statt Improvisation.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Kern ist: Info holen, dann sicher entscheiden. Typischer Fehler: 'Ich weiß schon'. Merksatz: Dokument schlägt Gefühl."
      }
    }
  ]
};

export default LEKTION_3;