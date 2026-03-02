// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_6.js
// Lektion 6 – Lagerung & Entsorgung: sauber, sicher

const LEKTION_6 = {
  id: "j1_l1_a4_l6",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Lagerung & Entsorgung: sauber, sicher",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Farbreste in eine leere Wasserflasche umfüllen? Klingt praktisch – ist aber eine Risiko-Falle.",
    keyPoints: [
      "Lagerung: Originalgebinde, klar beschriftet, geschlossen, sauber und übersichtlich – Verwechslung vermeiden.",
      "Entsorgung: Reste/Material korrekt nach Betriebsregel/Hersteller – nicht in den Ausguss kippen.",
      "Ordnung ist Sicherheit: weniger Leckagen, weniger Staub/Tropfen, weniger Hautkontakt und weniger Verbrauch."
    ],
    practiceTask:
      "Mach einen 2-Minuten-Check im Farbraum: 1) Sind alle Deckel zu? 2) Steht irgendwo etwas unbeschriftet? 3) Gibt es Reste, die entsorgt werden müssen?",
    reflectionQuestion:
      "Wo entsteht bei euch am ehesten 'Chemie-Chaos' – und was wäre die 1-Minute-Lösung?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l6_q01",
      topic: "Grundregel",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l6_q01",
        topic: "Grundregel",
        question: "Welche Lager-Regel ist im Salon am wichtigsten?",
        options: [
          "Produkte umfüllen, damit es einheitlich aussieht",
          "Originalgebinde nutzen und Gebinde geschlossen halten",
          "Deckel offen lassen, damit es schneller geht",
          "Alles neben Getränke stellen, spart Wege"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Originalgebinde + geschlossene Deckel verhindern Verwechslung, Leckagen und Dämpfe. Typischer Fehler: Bequemlichkeit vor Sicherheit. Merksatz: Original bleibt original.",
        feedbackWrong:
          "Falsch. Warum: Umfüllen/offen lassen erhöht Risiko. Typischer Fehler: 'Sieht ordentlicher aus'. Merksatz: Ordnung ja – aber sicher."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l6_q02",
      topic: "Entsorgung",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l6_q02",
        topic: "Entsorgung",
        statement: "Kleine Farbreste kann man im Zweifel einfach in den Ausguss kippen.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Chemie gehört nicht einfach in den Abfluss. Typischer Fehler: 'Ist ja nur wenig'. Merksatz: Abfluss ist keine Mülltonne.",
        feedbackWrong:
          "Falsch. Warum: Verdünnen/wegkippen ist keine korrekte Entsorgung. Typischer Fehler: Zeit sparen auf Kosten der Umwelt. Merksatz: Richtig entsorgen, nicht wegkippen."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l6_q03",
      topic: "Lagerung",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l6_q03",
        topic: "Lagerung",
        textBefore: "Gefahrstoffe lagert man im ",
        correctAnswer: "Originalgebinde",
        textAfter: ".",
        options: ["Glasbecher", "Originalgebinde", "Kaffeebecher", "Shampoo-Spender"],
        feedbackCorrect:
          "Richtig. Warum: Kennzeichnung und passender Behälter sind Teil der Sicherheit. Typischer Fehler: umfüllen. Merksatz: Original schützt vor Verwechslung.",
        feedbackWrong:
          "Falsch. Warum: Umfüllen in falsche Behälter ist eine Haupt-Ursache für Unfälle. Typischer Fehler: 'Nur kurz'. Merksatz: Original bleibt."
      }
    },

    // 4) Core
    {
      id: "j1_l1_a4_l6_q04",
      topic: "Was gehört wohin?",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l6_q04",
        topic: "Was gehört wohin?",
        prompt: "Sortiere die Aussagen: Lagerung oder Entsorgung?",
        categories: [
          { id: "lagerung", label: "Lagerung" },
          { id: "entsorgung", label: "Entsorgung" }
        ],
        items: [
          { text: "Deckel sofort wieder schließen", categoryId: "lagerung" },
          { text: "Unbeschriftete Behälter nicht verwenden", categoryId: "lagerung" },
          { text: "Reste nach Betriebsregel sammeln", categoryId: "entsorgung" },
          { text: "Nicht in den Ausguss kippen", categoryId: "entsorgung" },
          { text: "Übersichtlich und sauber lagern", categoryId: "lagerung" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du trennst sauber zwischen Aufbewahren und Weggeben. Typischer Fehler: Entsorgung mit 'wegkippen' verwechseln. Merksatz: Lagern = sicher halten, Entsorgen = korrekt weg.",
        feedbackWrong:
          "Nicht ganz. Warum: Lagerung verhindert Unfälle, Entsorgung schützt Umwelt und Team. Typischer Fehler: alles unter 'Aufräumen' packen. Merksatz: Zwei Schritte, zwei Regeln."
      }
    },

    // 5) Core
    {
      id: "j1_l1_a4_l6_q05",
      topic: "Umfüllen",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l6_q05",
        topic: "Umfüllen",
        situationTitle: "Leere Wasserflasche als 'Restebehälter'",
        situationText: [
          "Jemand will Farbreste in eine leere Wasserflasche füllen, 'damit es nicht kleckert'.",
          "Die Flasche wäre dann unbeschriftet."
        ],
        options: [
          "Gute Idee, solange man sie wiederfindet.",
          "Nicht machen: Verwechslungsgefahr. Reste nach Betriebsregel entsorgen oder in geeigneten, beschrifteten Behältern sammeln.",
          "Nur kurz reinfüllen und später entscheiden."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Wiederfinden ist kein Sicherheitskonzept.",
          "Richtig: Unbeschriftet + falscher Behälter = Unfallrisiko.",
          "Falsch: 'Später' führt oft zu unklaren Behältern."
        ],
        feedbackCorrect:
          "Richtig. Warum: Umfüllen ohne Kennzeichnung ist eine der gefährlichsten Gewohnheiten. Typischer Fehler: Ordnung mit Sicherheit verwechseln. Merksatz: Unbeschriftet = No-Go.",
        feedbackWrong:
          "Nicht optimal. Warum: Das ist eine klassische Verwechslungsfalle. Typischer Fehler: 'Nur kurz'. Merksatz: Chemie braucht klare Kennzeichnung."
      }
    },

    // 6) Core
    {
      id: "j1_l1_a4_l6_q06",
      topic: "Sauberkeit = Sicherheit",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l6_q06",
        topic: "Sauberkeit = Sicherheit",
        statement: "Wenn im Farbraum Pulverstaub und Tropfen liegen, ist das nur ein Optik-Problem.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Staub/Tropfen erhöhen Hautkontakt, Einatmen und Rutschgefahr – plus unnötigen Verbrauch. Typischer Fehler: 'Mach ich später'. Merksatz: Sauber ist sicher.",
        feedbackWrong:
          "Falsch. Warum: Es ist ein Sicherheits- und Verbrauchsproblem. Typischer Fehler: Risiken unterschätzen. Merksatz: Ordnung spart Unfälle."
      }
    },

    // 7) Core
    {
      id: "j1_l1_a4_l6_q07",
      topic: "Richtig lagern",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l6_q07",
        topic: "Richtig lagern",
        question: "Welche Aussagen zur Lagerung sind richtig? (mehrere richtig)",
        options: [
          "Chemie sauber, geschlossen und übersichtlich lagern",
          "Originalgebinde nutzen und Kennzeichnung sichtbar lassen",
          "Gefahrstoffe neben Essen/Getränken lagern, spart Wege",
          "Deckel offen lassen, damit es schneller greifbar ist",
          "Unbeschriftete Behälter konsequent entfernen oder klären"
        ],
        correctIndices: [0, 1, 4],
        feedbackCorrect:
          "Richtig. Warum: Das verhindert Verwechslung, Dämpfe, Leckagen und Unfälle. Typischer Fehler: Lager als 'Abstellkammer'. Merksatz: Lager ist Sicherheitszone.",
        feedbackPartially:
          "Teilweise. Warum: Mindestens eine riskante Gewohnheit ist noch drin (Essen/Deckel offen). Typischer Fehler: Bequemlichkeit. Merksatz: Sicherheit schlägt Tempo.",
        feedbackWrong:
          "Falsch. Warum: Essen/Deckel offen/unbeschriftet sind starke Risikotreiber. Typischer Fehler: 'Wir passen schon auf'. Merksatz: Regeln sind nicht optional."
      }
    },

    // 8) Core
    {
      id: "j1_l1_a4_l6_q08",
      topic: "Entsorgen",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l6_q08",
        topic: "Entsorgen",
        question: "Was ist die beste Grundregel für Entsorgung im Salon?",
        options: [
          "Reste verdünnen und wegkippen",
          "Nach Betriebsregel/Hersteller entsorgen und nicht in den Abfluss kippen",
          "Alles in den normalen Papierkorb",
          "Reste sammeln, bis es überläuft"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: So schützt du Umwelt, Team und Ablauf. Typischer Fehler: 'Ist ja nur ein bisschen'. Merksatz: Entsorgung folgt Regel, nicht Gefühl.",
        feedbackWrong:
          "Falsch. Warum: Verdünnen/irgendwo rein ist nicht korrekt. Typischer Fehler: Bequemlichkeit. Merksatz: Richtig entsorgen = Profi."
      }
    },

    // 9) Transfer
    {
      id: "j1_l1_a4_l6_q09",
      topic: "Checkliste",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l6_q09",
        topic: "Checkliste",
        prompt: "Bringe die Farbraum-Checkliste in die richtige Reihenfolge.",
        items: [
          "Unbeschriftetes identifizieren",
          "Deckel schließen und Gebinde korrekt stellen",
          "Staub/Tropfen entfernen",
          "Reste nach Regel entsorgen"
        ],
        correctOrder: [
          "Unbeschriftetes identifizieren",
          "Deckel schließen und Gebinde korrekt stellen",
          "Staub/Tropfen entfernen",
          "Reste nach Regel entsorgen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst Risikoquellen finden, dann sichern und sauber abschließen. Typischer Fehler: nur schnell wischen. Merksatz: Finden → sichern → reinigen → entsorgen.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge macht es effizient und sicher. Typischer Fehler: Symptome statt Ursachen. Merksatz: Erst unklar entfernen, dann putzen."
      }
    },

    // 10) Transfer
    {
      id: "j1_l1_a4_l6_q10",
      topic: "Praxisfall",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l6_q10",
        topic: "Praxisfall",
        situationTitle: "Restmischung nach der Farbberatung",
        situationText: [
          "Nach der Anwendung bleibt noch Mischung übrig.",
          "Du willst schnell aufräumen und zum nächsten Kunden."
        ],
        options: [
          "Ich stelle sie offen beiseite, vielleicht brauche ich sie noch.",
          "Ich entsorge den Rest nach Betriebsregel/Hersteller und räume den Platz sauber weg.",
          "Ich kippe sie in den Ausguss, dann ist es erledigt."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Offene Reste = Risiko (Dämpfe, Verwechslung, Verschütten).",
          "Richtig: Korrekte Entsorgung und saubere Fläche sind Teil der Arbeit.",
          "Falsch: Abfluss ist keine Entsorgung."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du minimierst Risiko und hältst Standards ein. Typischer Fehler: Reste 'parken'. Merksatz: Reste gehören weg – korrekt.",
        feedbackWrong:
          "Nicht optimal. Warum: Offene/unklare Reste führen zu Unfällen. Typischer Fehler: Zeitdruck. Merksatz: Sauber weg ist schneller als Chaos."
      }
    },

    // 11) Transfer
    {
      id: "j1_l1_a4_l6_q11",
      topic: "Zuordnung",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l6_q11",
        topic: "Zuordnung",
        prompt: "Ordne dem Risiko die passende Ursache zu.",
        pairs: [
          { left: "Verwechslung", right: "Unbeschrifteter Behälter / Umfüllen" },
          { left: "Hautkontakt", right: "Tropfen, offene Gebinde, kein Handschuh" },
          { left: "Atemwegsreizung", right: "Pulverstaub / schlechte Lüftung" },
          { left: "Rutschgefahr", right: "Verschüttete Flüssigkeit auf dem Boden" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du erkennst, welche Ordnung welche Gefahr reduziert. Typischer Fehler: Risiken nicht mit Ursachen verbinden. Merksatz: Ursache weg = Risiko runter.",
        feedbackWrong:
          "Nicht ganz. Warum: Wenn du Ursache kennst, kannst du schnell handeln. Typischer Fehler: nur 'sauber machen'. Merksatz: Ursache zuerst."
      }
    },

    // 12) Transfer
    {
      id: "j1_l1_a4_l6_q12",
      topic: "Merksatz",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l6_q12",
        type: "sentence_builder",
        topic: "Merksatz",
        question: "Baue den Merksatz zu Lagerung & Entsorgung.",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich lagere sauber im Original und entsorge nach Regel",
        extraWords: ["später", "egal", "irgendwie"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Das ist die Profi-Kombination aus Sicherheit und Ordnung. Typischer Fehler: improvisieren. Merksatz: Original + Regel.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Kern ist: Kennzeichnung und Regel-Treue. Typischer Fehler: 'wird schon'. Merksatz: Keine Improvisation bei Chemie."
      }
    },

    // 13) Transfer
    {
      id: "j1_l1_a4_l6_q13",
      topic: "Lagerzone",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l6_q13",
        topic: "Lagerzone",
        statement: "Lagerung ist nur 'Aufräumen' und hat nichts mit Arbeitsschutz zu tun.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Lagerung verhindert Verwechslung, Leckagen, Dämpfe und Unfälle. Typischer Fehler: Lager als Nebensache sehen. Merksatz: Lager ist Sicherheit.",
        feedbackWrong:
          "Falsch. Warum: Schlechte Lagerung ist eine häufige Unfallquelle. Typischer Fehler: 'Passiert schon nichts'. Merksatz: Ordnung schützt."
      }
    },

    // 14) Transfer (gap_fill)
    {
      id: "j1_l1_a4_l6_q14",
      topic: "No-Go",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l6_q14",
        topic: "No-Go",
        textBefore: "Unbeschriftete Behälter sind ein ",
        correctAnswer: "No-Go",
        textAfter: " im Umgang mit Gefahrstoffen.",
        options: ["Bonus", "No-Go", "Trend", "Schnäppchen"],
        feedbackCorrect:
          "Richtig. Warum: Verwechslung ist eine der gefährlichsten Ursachen. Typischer Fehler: 'Nur kurz'. Merksatz: Unklar = raus.",
        feedbackWrong:
          "Falsch. Warum: Genau das ist ein absolutes Tabu. Typischer Fehler: Unbeschriftetes tolerieren. Merksatz: No-Go bleibt No-Go."
      }
    },

    // 15) Transfer
    {
      id: "j1_l1_a4_l6_q15",
      topic: "Sicherheitskultur",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l6_q15",
        topic: "Sicherheitskultur",
        question: "Welche Aussage trifft eine gute Sicherheitskultur im Farbraum am besten?",
        options: [
          "Jeder macht es anders, Hauptsache schnell.",
          "Ordnung, Kennzeichnung und Regel-Entsorgung sind Standard – jeden Tag.",
          "Man räumt nur auf, wenn Besuch kommt.",
          "Wenn es nicht riecht, ist es sicher."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Standards verhindern Fehler – unabhängig von Stress. Typischer Fehler: Sicherheit an Stimmung koppeln. Merksatz: Standard ist Standard.",
        feedbackWrong:
          "Falsch. Warum: Sicherheit darf nicht vom Tagesstress abhängen. Typischer Fehler: 'Heute mal nicht'. Merksatz: Jeden Tag gleich gut."
      }
    }
  ]
};

export default LEKTION_6;