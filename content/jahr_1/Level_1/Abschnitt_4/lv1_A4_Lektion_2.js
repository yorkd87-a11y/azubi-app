// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_2.js
// Lektion 2 – Etikett lesen: Piktogramm, Signalwort, Hinweise

const LEKTION_2 = {
  id: "j1_l1_a4_l2",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Etikett lesen: Piktogramm, Signalwort, Hinweise",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Auf dem Produkt steht 'Gefahr' und ein Symbol. Was heißt das für deinen Ablauf?",
    keyPoints: [
      "Das Etikett ist dein Schnell-Check: Piktogramm (Art), Signalwort (Dringlichkeit), Hinweise (was tun/was lassen).",
      "Signalwörter: 'Gefahr' = höhere Gefahrenstufe als 'Achtung' (immer ernst nehmen).",
      "Hinweise zeigen dir Schutz und Verhalten: Kontakt vermeiden, Handschuhe, Lüften, Erste Hilfe Kurzinfo."
    ],
    practiceTask:
      "Nimm ein Produkt aus dem Farbraum: Lies Signalwort + ein Symbol + einen Hinweis laut vor und sag, was du daraus ableitest.",
    reflectionQuestion:
      "Welcher Etikett-Teil wird im Alltag am häufigsten übersehen?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l2_q01",
      topic: "Signalwort",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l2_q01",
        topic: "Signalwort",
        question: "Was bedeutet das Signalwort 'Gefahr' auf dem Etikett am ehesten?",
        options: [
          "Das Produkt ist automatisch verboten.",
          "Es zeigt eine höhere Gefahrenstufe als 'Achtung'.",
          "Es ist nur Marketing, damit es professionell wirkt.",
          "Es bedeutet nur: riecht stark."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Das Signalwort ist die Alarmstufe. Typischer Fehler: Signalwort ignorieren. Merksatz: Signalwort = Dringlichkeit.",
        feedbackWrong:
          "Falsch. Warum: 'Gefahr' steht nicht für Optik oder Geruch, sondern für die Gefahrenstufe. Typischer Fehler: Etikett überfliegen. Merksatz: Erst Signalwort, dann starten."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l2_q02",
      topic: "Piktogramm",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l2_q02",
        topic: "Piktogramm",
        statement: "Ein Piktogramm zeigt dir die Art der Gefahr als Symbol.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Symbole helfen, Gefahren in Sekunden zu erkennen. Typischer Fehler: Symbol nicht beachten. Merksatz: Symbol = Gefahr-Art.",
        feedbackWrong:
          "Falsch. Warum: Genau dafür sind Piktogramme da. Typischer Fehler: Nur Text lesen und Symbole ignorieren. Merksatz: Erst Symbol, dann Hinweise."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l2_q03",
      topic: "Etikett-Bausteine",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l2_q03",
        topic: "Etikett-Bausteine",
        textBefore: "Das ",
        correctAnswer: "Signalwort",
        textAfter: " zeigt die Dringlichkeit der Gefahr an.",
        options: ["Siegel", "Signalwort", "Preis", "Duft"],
        feedbackCorrect:
          "Richtig. Warum: Signalwort = Alarmstufe. Typischer Fehler: nur aufs Symbol schauen. Merksatz: Signalwort steuert dein Verhalten.",
        feedbackWrong:
          "Falsch. Warum: Siegel/Preis/Duft sagen nichts über die Gefahrenstufe. Typischer Fehler: Etikett mit Werbung verwechseln. Merksatz: Signalwort ist Pflichtinfo."
      }
    },

    // 4) Core
    {
      id: "j1_l1_a4_l2_q04",
      topic: "Piktogramme verstehen",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l2_q04",
        topic: "Piktogramme verstehen",
        prompt: "Ordne dem Begriff die passende Bedeutung zu.",
        pairs: [
          { left: "Ätzwirkung", right: "Kann Haut und Augen stark schädigen" },
          { left: "Ausrufezeichen", right: "Reizend / kann Allergien auslösen" },
          { left: "Flamme", right: "Entzündlich" },
          { left: "Umwelt", right: "Gewässergefährdend" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du kannst Risiken sofort einordnen. Typischer Fehler: Symbol übersehen. Merksatz: Piktogramm = Kurzbeschreibung der Gefahr.",
        feedbackWrong:
          "Nicht ganz. Warum: Symbole sind ein schneller Schutz-Trigger. Typischer Fehler: Alles wirkt gleich gefährlich. Merksatz: Symbol lesen = Risiko steuern."
      }
    },

    // 5) Core
    {
      id: "j1_l1_a4_l2_q05",
      topic: "Hinweise",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l2_q05",
        topic: "Hinweise",
        question: "Welche Infos findest du typischerweise als Hinweise auf dem Etikett? (mehrere richtig)",
        options: [
          "Schutzmaßnahmen (z. B. Handschuhe, Lüften)",
          "Erste Hilfe Kurzinfo (z. B. bei Augenkontakt)",
          "Preis pro Anwendung",
          "Was man vermeiden soll (z. B. nicht einatmen, nicht in Augen)",
          "Lieblingsfrisuren der Marke"
        ],
        correctIndices: [0, 1, 3],
        feedbackCorrect:
          "Richtig. Warum: Hinweise geben dir Verhalten und Schutz. Typischer Fehler: Hinweise zu klein gedruckt ignorieren. Merksatz: Hinweise = Handlungsanweisung.",
        feedbackPartially:
          "Teilweise. Warum: Einige Kerninfos fehlen noch. Typischer Fehler: Etikett nur nach Signalwort scannen. Merksatz: Signalwort + Hinweise zusammen lesen.",
        feedbackWrong:
          "Falsch. Warum: Etiketten sind für Sicherheit, nicht für Marketinglisten. Typischer Fehler: nach Gefühl arbeiten. Merksatz: Hinweise sind Pflicht, nicht Deko."
      }
    },

    // 6) Core
    {
      id: "j1_l1_a4_l2_q06",
      topic: "Signalwort-Check im Alltag",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l2_q06",
        topic: "Signalwort-Check im Alltag",
        situationTitle: "Zeitdruck im Farbraum",
        situationText: [
          "Du willst schnell mischen. Auf dem Produkt steht 'Gefahr'.",
          "Eine Kollegin sagt: 'Mach einfach, wir müssen los.'"
        ],
        options: [
          "Ich ignoriere das Signalwort, weil ich es oft benutze.",
          "Ich lese kurz die Hinweise, nutze die passenden Schutzmaßnahmen und arbeite sauber.",
          "Ich mische schneller, damit weniger Zeit für Probleme bleibt."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Routine ersetzt keine Sicherheitsinfo.",
          "Richtig: Etikett = Schnell-Check, Schutz = Standard.",
          "Falsch: Tempo reduziert Risiko nicht, es erhöht es."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du nimmst die Alarmstufe ernst und arbeitest kontrolliert. Typischer Fehler: Routine schlägt Aufmerksamkeit. Merksatz: 'Gefahr' heißt: kurz prüfen, dann sauber arbeiten.",
        feedbackWrong:
          "Nicht optimal. Warum: Zeitdruck ist der Klassiker für Etikett-Fehler. Typischer Fehler: 'Kenn ich schon'. Merksatz: Etikett lesen kostet Sekunden, spart Ärger."
      }
    },

    // 7) Core
    {
      id: "j1_l1_a4_l2_q07",
      topic: "Was zuerst lesen?",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l2_q07",
        topic: "Was zuerst lesen?",
        prompt: "Bringe den Etikett-Schnellcheck in die beste Reihenfolge.",
        items: [
          "Signalwort prüfen",
          "Piktogramm(e) erkennen",
          "Hinweise zu Schutz/Verhalten lesen",
          "Ablauf ableiten (PSA, Lüften, sauber dosieren)"
        ],
        correctOrder: [
          "Signalwort prüfen",
          "Piktogramm(e) erkennen",
          "Hinweise zu Schutz/Verhalten lesen",
          "Ablauf ableiten (PSA, Lüften, sauber dosieren)"
        ],
        feedbackCorrect:
          "Richtig. Warum: Du baust dir in Sekunden einen sicheren Ablauf. Typischer Fehler: direkt loslegen. Merksatz: Signalwort → Symbol → Hinweis → Handlung.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge spart Zeit und verhindert Fehler. Typischer Fehler: Hinweise erst lesen, wenn etwas passiert ist. Merksatz: Erst prüfen, dann starten."
      }
    },

    // 8) Core
    {
      id: "j1_l1_a4_l2_q08",
      topic: "Aussagen sortieren",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l2_q08",
        topic: "Aussagen sortieren",
        prompt: "Sortiere die Aussagen: Was gehört wozu?",
        categories: [
          { id: "piktogramm", label: "Piktogramm" },
          { id: "signalwort", label: "Signalwort" },
          { id: "hinweis", label: "Hinweise" }
        ],
        items: [
          { text: "Symbol zeigt Gefahr-Art", categoryId: "piktogramm" },
          { text: "Achtung / Gefahr", categoryId: "signalwort" },
          { text: "Handschuhe tragen / Lüften", categoryId: "hinweis" },
          { text: "Kann Augen reizen", categoryId: "hinweis" },
          { text: "Flamme / Ätzwirkung", categoryId: "piktogramm" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du weißt, wo du welche Info findest. Typischer Fehler: Alles in einen Topf werfen. Merksatz: Symbol = Art, Signalwort = Stufe, Hinweis = Verhalten.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Aufbau ist immer ähnlich, damit du schnell entscheiden kannst. Typischer Fehler: Etikett wirkt wie ein Block Text. Merksatz: Etikett ist ein System."
      }
    },

    // 9) Core
    {
      id: "j1_l1_a4_l2_q09",
      topic: "Achtung vs Gefahr",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l2_q09",
        topic: "Achtung vs Gefahr",
        question: "Welche Aussage passt am besten?",
        options: [
          "'Achtung' ist immer schlimmer als 'Gefahr'.",
          "'Gefahr' zeigt eine höhere Gefahrenstufe als 'Achtung'.",
          "Beide sind egal, wenn man Handschuhe trägt.",
          "Signalwörter haben nur Bedeutung bei Desinfektion."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Signalwörter sind abgestuft. Typischer Fehler: Begriffe verwechseln. Merksatz: Gefahr > Achtung.",
        feedbackWrong:
          "Falsch. Warum: Signalwörter sind echte Sicherheitsstufen. Typischer Fehler: 'Einmal gelernt, nie wieder gelesen'. Merksatz: Signalwort = Stufe, nicht Deko."
      }
    },

    // 10) Core (gap_fill)
    {
      id: "j1_l1_a4_l2_q10",
      topic: "Merksatz",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l2_q10",
        topic: "Merksatz",
        textBefore: "Etikett lesen heißt: Erst ",
        correctAnswer: "prüfen",
        textAfter: ", dann arbeiten.",
        options: ["reden", "prüfen", "posten", "raten"],
        feedbackCorrect:
          "Richtig. Warum: Prüfen verhindert die meisten Fehler. Typischer Fehler: Handeln vor Check. Merksatz: Prüfen vor Tempo.",
        feedbackWrong:
          "Falsch. Warum: Raten ist kein Arbeitsschutz. Typischer Fehler: 'Wird schon gehen'. Merksatz: Erst prüfen, dann starten."
      }
    },

    // 11) Transfer
    {
      id: "j1_l1_a4_l2_q11",
      topic: "Etikett im Service",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l2_q11",
        topic: "Etikett im Service",
        situationTitle: "Spritzgefahr beim Umfüllen",
        situationText: [
          "Jemand will ein Produkt aus dem Originalgebinde in eine kleinere, leere Dose umfüllen.",
          "Auf dem Etikett steht ein Hinweis: 'Behälter dicht geschlossen halten' und ein Symbol."
        ],
        options: [
          "Umfüllen ist okay, solange man es später wieder zurückfüllt.",
          "Ich bleibe beim Originalgebinde und halte es geschlossen, weil Kennzeichnung und Dichtheit wichtig sind.",
          "Ich fülle um und schreibe später irgendwas drauf."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Umfüllen erhöht Verwechslungs- und Spritzrisiko.",
          "Richtig: Originalgebinde sichert Kennzeichnung und passende Verpackung.",
          "Falsch: 'Später' führt oft zu unbeschriftet und riskant."
        ],
        feedbackCorrect:
          "Richtig. Warum: Kennzeichnung und Dichtheit sind Sicherheitsfaktoren. Typischer Fehler: Umfüllen für Bequemlichkeit. Merksatz: Original bleibt original.",
        feedbackWrong:
          "Nicht optimal. Warum: Umfüllen ist eine Hauptquelle für Verwechslung und Unfälle. Typischer Fehler: 'Nur kurz'. Merksatz: Sicherheit kennt kein später."
      }
    },

    // 12) Transfer
    {
      id: "j1_l1_a4_l2_q12",
      topic: "Gefahr-Art ableiten",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l2_q12",
        topic: "Gefahr-Art ableiten",
        prompt: "Ordne der Etikett-Info die passende Reaktion zu.",
        pairs: [
          { left: "Signalwort 'Gefahr'", right: "Kurz stoppen, Hinweise lesen und Schutzmaßnahmen konsequent umsetzen" },
          { left: "Hinweis 'Augenkontakt vermeiden'", right: "Spritzgefahr minimieren, ruhig arbeiten, ggf. Schutzbrille je nach Betriebsvorgabe" },
          { left: "Piktogramm 'Ausrufezeichen'", right: "Reizwirkung ernst nehmen, Hautkontakt vermeiden, Handschuhe" },
          { left: "Hinweis 'gut lüften'", right: "Raum lüften und Dämpfe/Staub vermeiden" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du übersetzt Etikett direkt in Verhalten. Typischer Fehler: Info lesen, aber nichts ändern. Merksatz: Etikett → Handlung.",
        feedbackWrong:
          "Nicht ganz. Warum: Etikett ist nur dann wertvoll, wenn du es umsetzt. Typischer Fehler: Hinweise als 'optional' sehen. Merksatz: Hinweis heißt: jetzt machen."
      }
    },

    // 13) Transfer
    {
      id: "j1_l1_a4_l2_q13",
      topic: "Kurzlogik",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l2_q13",
        topic: "Kurzlogik",
        prompt: "Setze den Ablauf 'Etikett lesen' in die richtige Reihenfolge.",
        steps: [
          "Signalwort checken",
          "Piktogramm erkennen",
          "Hinweise lesen",
          "Schutzmaßnahmen umsetzen",
          "Erst dann mischen/anwenden"
        ],
        feedbackCorrect:
          "Richtig. Warum: Du reduzierst Fehler durch Routine-Ablauf. Typischer Fehler: Mischen vor Check. Merksatz: Check vor Chemie.",
        feedbackWrong:
          "Nicht ganz. Warum: Die Reihenfolge verhindert Stressfehler. Typischer Fehler: Etikett erst lesen, wenn etwas passiert. Merksatz: Vorher lesen."
      }
    },

    // 14) Transfer
    {
      id: "j1_l1_a4_l2_q14",
      topic: "Etikett als Pflicht",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l2_q14",
        topic: "Etikett als Pflicht",
        statement: "Auch wenn du ein Produkt oft nutzt, lohnt sich der Etikett-Check bei neuer Charge oder neuer Marke.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Rezepturen/Anweisungen können sich unterscheiden. Typischer Fehler: Routine-Autopilot. Merksatz: Neu ist neu.",
        feedbackWrong:
          "Falsch. Warum: Kleine Unterschiede machen große Probleme. Typischer Fehler: 'Kenn ich' sagen. Merksatz: Neue Marke = neuer Check."
      }
    },

    // 15) Transfer (Sentence Builder + Audio)
    {
      id: "j1_l1_a4_l2_q15",
      topic: "Merksatz Etikett",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l2_q15",
        type: "sentence_builder",
        topic: "Merksatz Etikett",
        question: "Welcher Satz passt als Etikett-Merksatz?",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich lese Signalwort, Symbol und Hinweise, bevor ich starte",
        extraWords: ["später", "irgendwann", "egal"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Du machst aus Etikett einen sicheren Ablauf. Typischer Fehler: erst anfangen, dann lesen. Merksatz: Lesen vor Start.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Kern ist Reihenfolge und Konsequenz. Typischer Fehler: Etikett als optional sehen. Merksatz: Etikett ist Pflicht."
      }
    }
  ]
};

export default LEKTION_2;