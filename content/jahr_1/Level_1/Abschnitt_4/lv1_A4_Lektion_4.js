// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_4.js
// Lektion 4 – PSA & Hautschutzplan: Handschuhe, Schutz, Pflege

const LEKTION_4 = {
  id: "j1_l1_a4_l4",
  jahr: 1,
  level: 1,
  section: 4,
  title: "PSA & Hautschutzplan: Handschuhe, Schutz, Pflege",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Nach 3 Tagen Farbe: trockene Hände, kleine Risse – was ist jetzt der schnellste Weg raus aus der Abwärtsspirale?",
    keyPoints: [
      "PSA schützt dich vor direktem Kontakt: Handschuhe (meist Nitril), ggf. Schürze, bei Spritzgefahr je nach Betriebsvorgabe auch Augenschutz.",
      "Handschuhe richtig nutzen: passende Größe, rechtzeitig wechseln, bei Rissen sofort neu – keine 'noch schnell zu Ende'-Ausnahmen.",
      "Hautschutzplan = Routine: Schutz vor der Arbeit, mild reinigen, konsequent pflegen nach der Arbeit. Haut ist Arbeitsmittel."
    ],
    practiceTask:
      "Mach heute den 3-Phasen-Check: 1 Maßnahme vor der Arbeit, 1 währenddessen, 1 danach – und setze sie konsequent um.",
    reflectionQuestion:
      "Welche Situation führt bei dir am häufigsten dazu, dass du Handschuhe zu spät anziehst?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l4_q01",
      topic: "PSA",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l4_q01",
        topic: "PSA",
        question: "Wofür steht die Abkürzung PSA?",
        options: [
          "Pflege-Standard-Anleitung",
          "Persönliche Schutzausrüstung",
          "Produkt-Sicherheits-Akte",
          "Private Salon-App"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: PSA schützt dich vor direkten Risiken (Haut, Augen, Kleidung). Typischer Fehler: PSA nur als 'Extra' sehen. Merksatz: PSA ist Standard.",
        feedbackWrong:
          "Falsch. Warum: PSA bedeutet persönliche Schutzausrüstung. Typischer Fehler: Abkürzungen nicht sicher kennen. Merksatz: PSA = Schützen."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l4_q02",
      topic: "Hautschutz",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l4_q02",
        topic: "Hautschutz",
        statement: "Hautschutz ist vor allem dann wichtig, wenn die Haut schon kaputt ist.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Hautschutz ist Prävention – nicht Reparatur. Typischer Fehler: erst reagieren, wenn es weh tut. Merksatz: Vorbeugen ist schneller als heilen.",
        feedbackWrong:
          "Falsch. Warum: Wenn die Haut kaputt ist, ist es schon zu spät und dauert lange. Typischer Fehler: Warnzeichen ignorieren. Merksatz: Hautschutz startet vorher."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l4_q03",
      topic: "Hautschutzplan",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l4_q03",
        topic: "Hautschutzplan",
        textBefore: "Ein Hautschutzplan besteht aus Schutz, Reinigung und ",
        correctAnswer: "Pflege",
        textAfter: ".",
        options: ["Deko", "Pflege", "Rabatt", "Parfum"],
        feedbackCorrect:
          "Richtig. Warum: Pflege stabilisiert die Hautbarriere nach Belastung. Typischer Fehler: Pflege als optional sehen. Merksatz: Schutz–Reinigung–Pflege.",
        feedbackWrong:
          "Falsch. Warum: Ohne Pflege erholt sich die Haut schlechter. Typischer Fehler: nur waschen und weiter. Merksatz: Pflege schließt den Kreis."
      }
    },

    // 4) Core
    {
      id: "j1_l1_a4_l4_q04",
      topic: "Handschuhe",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l4_q04",
        topic: "Handschuhe",
        question: "Welche Aussagen zur Handschuhnutzung sind richtig? (mehrere richtig)",
        options: [
          "Handschuhe müssen passen, sonst reißen sie schneller oder stören den Griff",
          "Bei Riss oder Durchfeuchtung: sofort wechseln",
          "Handschuhe kann man ausziehen und später wieder anziehen, wenn sie noch gut aussehen",
          "Beim Anmischen/Applizieren von Farbe/Blondierung sind Handschuhe Standard",
          "Schmuck unter Handschuhen ist ideal, weil es stabilisiert"
        ],
        correctIndices: [0, 1, 3],
        feedbackCorrect:
          "Richtig. Warum: Passform und Wechsel sind Sicherheitsfaktoren. Typischer Fehler: 'Nur noch kurz' mit kaputten Handschuhen. Merksatz: Riss = Wechsel.",
        feedbackPartially:
          "Teilweise. Warum: Mindestens eine riskante Gewohnheit ist noch drin (wieder anziehen/Schmuck). Typischer Fehler: Komfort vor Hygiene. Merksatz: Einmal an, dann korrekt wechseln.",
        feedbackWrong:
          "Falsch. Warum: Wiederverwendung/Schmuck sind echte Risikotreiber (Keime, Reibung, Risse). Typischer Fehler: Handschuhe als Sparmaßnahme. Merksatz: Handschuh = Einweg, nicht Dauerlösung."
      }
    },

    // 5) Core
    {
      id: "j1_l1_a4_l4_q05",
      topic: "Schutz vor Spritzern",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l4_q05",
        topic: "Schutz vor Spritzern",
        situationTitle: "Oxidationsmittel spritzt beim Ausgießen",
        situationText: [
          "Beim Ausgießen rutscht dir die Flasche ab, es spritzt Richtung Gesicht.",
          "Du warst gerade ohne zusätzliche Schutzmaßnahmen, weil es 'nur kurz' war."
        ],
        options: [
          "Ich mache einfach weiter, passiert selten.",
          "Ich passe meinen Ablauf an: ruhiger gießen, Abstand, ggf. nach Betriebsvorgabe Augenschutz bei Spritzgefahr.",
          "Ich halte die Flasche höher, dann ist es schneller leer."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: 'Selten' reicht für einen Augenunfall.",
          "Richtig: Du reduzierst Spritzgefahr durch Technik und passende Schutzmaßnahmen.",
          "Falsch: Höher = mehr Spritz-/Aerosolgefahr."
        ],
        feedbackCorrect:
          "Richtig. Warum: Augenunfälle sind vermeidbar, wenn du Technik und Schutz ernst nimmst. Typischer Fehler: 'Nur kurz'. Merksatz: Spritzgefahr = Ablauf anpassen.",
        feedbackWrong:
          "Nicht optimal. Warum: Der Klassiker ist Routine ohne Schutz. Typischer Fehler: Tempo vor Sicherheit. Merksatz: Sicher gießen ist schneller als Unfall."
      }
    },

    // 6) Core
    {
      id: "j1_l1_a4_l4_q06",
      topic: "3-Phasen-Logik",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l4_q06",
        topic: "3-Phasen-Logik",
        prompt: "Ordne die Maßnahme der richtigen Phase im Hautschutzplan zu.",
        pairs: [
          { left: "Vor der Arbeit", right: "Schutzcreme/Hautschutz auftragen (nach Plan)" },
          { left: "Während der Arbeit", right: "Handschuhe tragen und bei Bedarf wechseln" },
          { left: "Nach der Arbeit", right: "Haut mild reinigen und Pflegecreme auftragen" },
          { left: "Während der Arbeit", right: "Hautkontakt vermeiden, sauber arbeiten" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Der Plan funktioniert nur als Routine über den ganzen Tag. Typischer Fehler: Pflege vergessen. Merksatz: Vor–Während–Nach.",
        feedbackWrong:
          "Nicht ganz. Warum: Phasen geben dir Struktur, damit du es wirklich umsetzt. Typischer Fehler: nur eine Phase machen. Merksatz: Hautschutz ist ein System."
      }
    },

    // 7) Core
    {
      id: "j1_l1_a4_l4_q07",
      topic: "Häufiger Fehler",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l4_q07",
        topic: "Häufiger Fehler",
        statement: "Wenn Handschuhe innen feucht sind, ist das egal – Hauptsache außen ist alles sauber.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Feuchtigkeit innen erhöht Reizung und macht die Haut anfälliger. Typischer Fehler: 'Sieht doch okay aus'. Merksatz: Feucht = wechseln.",
        feedbackWrong:
          "Falsch. Warum: Feuchte Handschuhe stressen die Haut massiv. Typischer Fehler: zu lange tragen. Merksatz: Trocken schützt, feucht schadet."
      }
    },

    // 8) Core
    {
      id: "j1_l1_a4_l4_q08",
      topic: "Ablauf",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l4_q08",
        topic: "Ablauf",
        prompt: "Bringe den sicheren Ablauf vor dem Anmischen in die richtige Reihenfolge.",
        items: [
          "Schmuck ablegen und Hände trocken",
          "Handschuhe anziehen (passende Größe)",
          "Produkt/Etikett kurz prüfen",
          "Dann erst abwiegen/mischen"
        ],
        correctOrder: [
          "Schmuck ablegen und Hände trocken",
          "Produkt/Etikett kurz prüfen",
          "Handschuhe anziehen (passende Größe)",
          "Dann erst abwiegen/mischen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Sauberer Ablauf = weniger Risse, weniger Fehler, weniger Risiko. Typischer Fehler: Handschuhe zu spät oder Schmuck bleibt dran. Merksatz: Vorbereitung spart Stress.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge steuert Hygiene und Sicherheit. Typischer Fehler: direkt loslegen. Merksatz: Erst vorbereiten, dann arbeiten."
      }
    },

    // 9) Core (gap_fill)
    {
      id: "j1_l1_a4_l4_q09",
      topic: "Material",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l4_q09",
        topic: "Material",
        textBefore: "Im Salon werden bei chemischen Arbeiten oft ",
        correctAnswer: "Nitril",
        textAfter: "-Handschuhe genutzt.",
        options: ["Wolle", "Nitril", "Papier", "Samt"],
        feedbackCorrect:
          "Richtig. Warum: Nitril ist im Salon häufig Standard für chemische Arbeiten. Typischer Fehler: falsches Material nutzen. Merksatz: Handschuh-Material ist Teil der Sicherheit.",
        feedbackWrong:
          "Falsch. Warum: Wolle/Papier/Samt sind keine Schutzhandschuhe für Chemie. Typischer Fehler: Material unterschätzen. Merksatz: Nur geeignete Handschuhe."
      }
    },

    // 10) Transfer
    {
      id: "j1_l1_a4_l4_q10",
      topic: "Hautprobleme",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l4_q10",
        topic: "Hautprobleme",
        situationTitle: "Rote, trockene Hände nach dem Dienst",
        situationText: [
          "Nach dem Dienst sind deine Hände rot und trocken.",
          "Du hast oft schnell gewaschen und selten gepflegt."
        ],
        options: [
          "Ich wasche jetzt extra gründlich und schrubbe, damit es sauber ist.",
          "Ich stelle um: mild reinigen, regelmäßig pflegen, Handschuhe konsequent nutzen.",
          "Ich ignoriere es – das wird schon härter."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: aggressives Schrubben schädigt die Hautbarriere noch mehr.",
          "Richtig: Routine schützt und stabilisiert die Barriere.",
          "Falsch: Ignorieren führt oft zu chronischen Problemen."
        ],
        feedbackCorrect:
          "Richtig. Warum: Hautbarriere braucht Schutz + milde Reinigung + Pflege. Typischer Fehler: 'Härter werden' wollen. Merksatz: Haut pflegen ist Profi-Standard.",
        feedbackWrong:
          "Nicht optimal. Warum: Schrubben/ignorieren macht es schlimmer. Typischer Fehler: Symptome bekämpfen statt Ursache. Merksatz: Barriere schützen, nicht zerstören."
      }
    },

    // 11) Transfer
    {
      id: "j1_l1_a4_l4_q11",
      topic: "PSA auswählen",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l4_q11",
        topic: "PSA auswählen",
        prompt: "Sortiere: Welche Dinge zählen zur PSA im Salon – und welche nicht?",
        categories: [
          { id: "psa", label: "PSA" },
          { id: "nicht", label: "Nicht PSA" }
        ],
        items: [
          { text: "Handschuhe", categoryId: "psa" },
          { text: "Schürze (bei Spritz-/Kontaktgefahr)", categoryId: "psa" },
          { text: "Schutzbrille (bei Spritzgefahr, nach Vorgabe)", categoryId: "psa" },
          { text: "Armband/Schmuck", categoryId: "nicht" },
          { text: "Parfum", categoryId: "nicht" },
          { text: "Trend-Haarklammer", categoryId: "nicht" }
        ],
        feedbackCorrect:
          "Richtig. Warum: PSA schützt Körper und Kleidung vor Kontakt/Spritzern. Typischer Fehler: Schmuck als 'egal' behandeln. Merksatz: PSA schützt – Schmuck stört.",
        feedbackWrong:
          "Nicht ganz. Warum: PSA ist Schutz, nicht Accessoire. Typischer Fehler: PSA zu eng oder zu breit definieren. Merksatz: PSA = Schutz vor Risiko."
      }
    },

    // 12) Transfer
    {
      id: "j1_l1_a4_l4_q12",
      topic: "Handschuh-Wechsel",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l4_q12",
        topic: "Handschuh-Wechsel",
        prompt: "Setze die Schritte beim Handschuhwechsel in die richtige Reihenfolge.",
        steps: [
          "Handschuhe ausziehen, ohne Haut zu verschmieren",
          "Hände ggf. kurz abspülen/trocknen (wenn nötig)",
          "Neue Handschuhe anziehen",
          "Weiterarbeiten"
        ],
        feedbackCorrect:
          "Richtig. Warum: Sauberer Wechsel verhindert Hautkontakt und Verschleppung. Typischer Fehler: mit chemischen Handschuhen an allem anfassen. Merksatz: Wechsel sauber, dann weiter.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge verhindert Verschleppung und Reizung. Typischer Fehler: hektisch wechseln. Merksatz: Ruhig wechseln = sicher wechseln."
      }
    },

    // 13) Transfer
    {
      id: "j1_l1_a4_l4_q13",
      topic: "Pflege-Routine",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l4_q13",
        topic: "Pflege-Routine",
        question: "Welche Maßnahme stabilisiert die Hautbarriere nach der Arbeit am ehesten?",
        options: [
          "Hände mit sehr heißem Wasser waschen",
          "Pflegecreme nach dem Dienst auftragen",
          "Mit Alkohol desinfizieren, damit alles 'sicher' ist",
          "Trockenrubbeln, bis es warm ist"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Pflege hilft der Barriere, sich zu erholen. Typischer Fehler: Pflege als Luxus sehen. Merksatz: Pflege ist Pflicht nach Belastung.",
        feedbackWrong:
          "Falsch. Warum: Hitze/Alkohol/Reibung stressen die Haut. Typischer Fehler: 'Sauber' mit 'hart' verwechseln. Merksatz: Mild reinigen, dann pflegen."
      }
    },

    // 14) Transfer
    {
      id: "j1_l1_a4_l4_q14",
      topic: "Schutz statt Mut",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l4_q14",
        topic: "Schutz statt Mut",
        statement: "Wer ohne Handschuhe arbeitet, zeigt Erfahrung.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Profis schützen ihre Haut, weil sie langfristig arbeiten wollen. Typischer Fehler: 'Ich halte das aus'. Merksatz: Profi heißt: sicher.",
        feedbackWrong:
          "Falsch. Warum: Erfahrung zeigt sich in Routine und Sicherheit, nicht in Risiko. Typischer Fehler: Mut mit Professionalität verwechseln. Merksatz: Profi = Schutz."
      }
    },

    // 15) Transfer (Sentence Builder + Audio)
    {
      id: "j1_l1_a4_l4_q15",
      topic: "Merksatz Haut",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l4_q15",
        type: "sentence_builder",
        topic: "Merksatz Haut",
        question: "Baue den Merksatz zum Hautschutzplan.",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich schütze, reinige mild und pflege konsequent meine Hände",
        extraWords: ["irgendwann", "egal", "später"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Konsequenz schützt dich langfristig. Typischer Fehler: Pflege vergessen. Merksatz: Schutz–Reinigung–Pflege.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Plan funktioniert nur als Routine. Typischer Fehler: nur reagieren, wenn es schlimm ist. Merksatz: Konsequenz schlägt Reparatur."
      }
    }
  ]
};

export default LEKTION_4;