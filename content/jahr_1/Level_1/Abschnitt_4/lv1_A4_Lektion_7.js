// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_7.js
// Lektion 7 – Nachhaltig arbeiten: Dosierung, Wasser, Strom, Müll

const LEKTION_7 = {
  id: "j1_l1_a4_l7",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Nachhaltig arbeiten: Dosierung, Wasser, Strom, Müll",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Nachhaltig heißt nicht 'weniger Qualität' – sondern weniger wegkippen bei gleichem Ergebnis.",
    keyPoints: [
      "Dosierung ist der größte Hebel: exakt anmischen = weniger Reste, weniger Müll, bessere Kalkulation und konstantere Ergebnisse.",
      "Wasser & Strom: gezielt arbeiten statt Dauerlauf – kurz stoppen, sinnvoll spülen, Geräte/Licht aus wenn ungenutzt.",
      "Müll reduzieren: trennen, nachfüllen statt wegwerfen, Verbrauchsmaterial bewusst einsetzen – ohne Hygiene zu verlieren."
    ],
    practiceTask:
      "Wähle heute EINEN Hebel (Dosierung oder Wasser oder Strom oder Müll) und setze ihn konsequent um – bei jedem Service.",
    reflectionQuestion:
      "Was ist bei euch der größte 'unsichtbare' Verschwendungsfaktor – und wie würdest du ihn in 1 Satz lösen?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l7_q01",
      topic: "Grundprinzip",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l7_q01",
        topic: "Grundprinzip",
        question: "Was bedeutet 'nachhaltig arbeiten' im Salon am ehesten?",
        options: [
          "So wenig wie möglich arbeiten",
          "Ressourcen sparen, ohne Qualität und Sicherheit zu verlieren",
          "Produkte immer doppelt nehmen, damit es schneller geht",
          "Nur noch mit kaltem Wasser arbeiten"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Nachhaltigkeit ist effizient, nicht schlampig. Typischer Fehler: Sparen mit Qualitätsverlust verwechseln. Merksatz: Weniger Verschwendung, gleiche Qualität.",
        feedbackWrong:
          "Falsch. Warum: Nachhaltig heißt nicht weniger Professionalität. Typischer Fehler: Extremdenken. Merksatz: Nachhaltig = clever, nicht chaotisch."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l7_q02",
      topic: "Dosierung",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l7_q02",
        topic: "Dosierung",
        statement: "Je genauer du dosierst, desto nachhaltiger arbeitest du.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Weniger Reste = weniger Müll und bessere Kostenkontrolle. Typischer Fehler: 'Pi mal Daumen'. Merksatz: Messen spart Müll.",
        feedbackWrong:
          "Falsch. Warum: Ungenaue Mengen erzeugen fast immer Reste. Typischer Fehler: schnell schätzen. Merksatz: Genau mischen = nachhaltig."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l7_q03",
      topic: "Reste",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l7_q03",
        topic: "Reste",
        textBefore: "Der größte Nachhaltigkeits-Hebel im Farbraum ist die genaue ",
        correctAnswer: "Dosierung",
        textAfter: ".",
        options: ["Dekoration", "Dosierung", "Playlist", "Werbung"],
        feedbackCorrect:
          "Richtig. Warum: Dosierung entscheidet über Reste, Müll und Kosten. Typischer Fehler: zu viel anrühren. Merksatz: Dosieren statt wegkippen.",
        feedbackWrong:
          "Falsch. Warum: Deko/Playlist/Werbung sparen keine Chemie. Typischer Fehler: Hebel falsch einschätzen. Merksatz: Farbraum = Dosierhebel."
      }
    },

    // 4) Core
    {
      id: "j1_l1_a4_l7_q04",
      topic: "4 Hebel",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l7_q04",
        topic: "4 Hebel",
        prompt: "Sortiere die Maßnahme zum passenden Nachhaltigkeits-Hebel.",
        categories: [
          { id: "dosierung", label: "Dosierung" },
          { id: "wasser", label: "Wasser" },
          { id: "strom", label: "Strom" },
          { id: "muell", label: "Müll" }
        ],
        items: [
          { text: "Mengen abwiegen statt schätzen", categoryId: "dosierung" },
          { text: "Handbrause gezielt führen und kurz abstellen", categoryId: "wasser" },
          { text: "Geräte ausschalten, wenn sie nicht genutzt werden", categoryId: "strom" },
          { text: "Müll trennen und Nachfüllsysteme nutzen", categoryId: "muell" },
          { text: "Nur das anmischen, was wirklich gebraucht wird", categoryId: "dosierung" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du kennst die Stellschrauben und kannst bewusst umsetzen. Typischer Fehler: alles gleichzeitig wollen und nichts durchziehen. Merksatz: 1 Hebel konsequent ist besser als 4 halb.",
        feedbackWrong:
          "Nicht ganz. Warum: Die Hebel sind unterschiedlich – so kannst du gezielt verbessern. Typischer Fehler: Maßnahmen vermischen. Merksatz: Hebel kennen, dann handeln."
      }
    },

    // 5) Core
    {
      id: "j1_l1_a4_l7_q05",
      topic: "Wasser sparen",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l7_q05",
        topic: "Wasser sparen",
        question: "Welche Maßnahme spart beim Ausspülen am ehesten Wasser, ohne Qualität zu verlieren?",
        options: [
          "Wasser permanent voll laufen lassen",
          "Handbrause gezielt führen und zwischendurch kurz abstellen",
          "Nur eiskalt spülen",
          "So schnell wie möglich spülen, egal wie"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Zielgerichtet + kurze Stopps sparen viel Wasser. Typischer Fehler: Dauerlauf aus Gewohnheit. Merksatz: Nicht Dauerlauf – Kontrolle.",
        feedbackWrong:
          "Falsch. Warum: Dauerlauf/Tempo ist nicht automatisch effizient. Typischer Fehler: 'Mehr Wasser = schneller'. Merksatz: Technik spart mehr als Tempo."
      }
    },

    // 6) Core
    {
      id: "j1_l1_a4_l7_q06",
      topic: "Strom sparen",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l7_q06",
        topic: "Strom sparen",
        question: "Welche Maßnahmen sparen Strom im Salon? (mehrere richtig)",
        options: [
          "Geräte ausschalten, wenn sie nicht genutzt werden",
          "Licht in ungenutzten Räumen aus",
          "Föhn laufen lassen, damit er warm bleibt",
          "Waschmaschinen nur halb voll starten, spart Zeit",
          "Standby vermeiden, wenn möglich"
        ],
        correctIndices: [0, 1, 4],
        feedbackCorrect:
          "Richtig. Warum: Strom sparen heißt: nur nutzen, wenn es nötig ist. Typischer Fehler: Geräte aus Gewohnheit laufen lassen. Merksatz: Aus = Null Verbrauch.",
        feedbackPartially:
          "Teilweise. Warum: Manche Optionen klingen praktisch, sind aber Verschwendung (Föhn laufen lassen/halbvoll). Typischer Fehler: Komfort vor Effizienz. Merksatz: Effizienz ist planbar.",
        feedbackWrong:
          "Falsch. Warum: Laufen lassen und halbvolle Maschinen erhöhen Verbrauch. Typischer Fehler: Zeit mit Effizienz verwechseln. Merksatz: Voll und geplant spart."
      }
    },

    // 7) Core
    {
      id: "j1_l1_a4_l7_q07",
      topic: "Müll reduzieren",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l7_q07",
        topic: "Müll reduzieren",
        prompt: "Ordne die Maßnahme dem Effekt zu.",
        pairs: [
          { left: "Exakt dosieren", right: "Weniger Reste und weniger Entsorgung" },
          { left: "Müll trennen", right: "Besseres Recycling und weniger Restmüll" },
          { left: "Nachfüllsystem nutzen", right: "Weniger Verpackung" },
          { left: "Bewusst Verbrauchsmaterial einsetzen", right: "Weniger Einweg ohne Hygieneverlust" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du verstehst Wirkung statt nur Regeln. Typischer Fehler: Müll nur als 'Tonne' sehen. Merksatz: Jede Entscheidung hat Müll-Folge.",
        feedbackWrong:
          "Nicht ganz. Warum: Wenn du Wirkung kennst, setzt du konsequenter um. Typischer Fehler: 'Bringt doch nichts'. Merksatz: Viele kleine Hebel = großer Effekt."
      }
    },

    // 8) Core
    {
      id: "j1_l1_a4_l7_q08",
      topic: "Dosierung im Alltag",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l7_q08",
        topic: "Dosierung im Alltag",
        situationTitle: "Du rührst immer 'zur Sicherheit' zu viel an",
        situationText: [
          "Du rührst bei Ansatzfarbe oft mehr an, damit es auf jeden Fall reicht.",
          "Am Ende bleibt fast immer Rest übrig."
        ],
        options: [
          "So ist es sicherer, Reste sind egal.",
          "Ich stelle um: lieber exakt dosieren und bei Bedarf kontrolliert nachmischen.",
          "Ich kippe den Rest ins Abwasser, dann ist es weg."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Reste kosten Geld, erzeugen Müll und sind ein Entsorgungsproblem.",
          "Richtig: Exakt dosieren + nachmischen ist nachhaltig und professionell.",
          "Falsch: Abwasser ist keine Entsorgung."
        ],
        feedbackCorrect:
          "Richtig. Warum: Exakt + nachmischen reduziert Reste und hält Qualität stabil. Typischer Fehler: Sicherheits-Überdosierung. Merksatz: Lieber nachmischen als wegkippen.",
        feedbackWrong:
          "Nicht optimal. Warum: Überdosierung ist die häufigste Verschwendungsquelle. Typischer Fehler: 'nur zur Sicherheit'. Merksatz: Sicherheit ist Methode, nicht Menge."
      }
    },

    // 9) Core
    {
      id: "j1_l1_a4_l7_q09",
      topic: "Wasser-Mythos",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l7_q09",
        topic: "Wasser-Mythos",
        statement: "Wasser sparen bedeutet automatisch, schlechter auszuspülen.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Technik und Kontrolle sparen Wasser, ohne die Qualität zu senken. Typischer Fehler: Sparen mit Pfusch verwechseln. Merksatz: Effizient spülen = sauber spülen.",
        feedbackWrong:
          "Falsch. Warum: Es geht um Kontrolle, nicht um weniger Ergebnis. Typischer Fehler: Entweder-oder denken. Merksatz: Clever spart, nicht schlecht."
      }
    },

    // 10) Transfer
    {
      id: "j1_l1_a4_l7_q10",
      topic: "Mini-Plan",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l7_q10",
        topic: "Mini-Plan",
        prompt: "Setze den Mini-Plan für 'nachhaltig im Service' in die richtige Reihenfolge.",
        steps: [
          "Menge planen (was brauche ich wirklich?)",
          "Exakt dosieren und sauber arbeiten",
          "Reste vermeiden oder korrekt entsorgen",
          "Wasser/Strom bewusst nutzen",
          "Müll trennen und Arbeitsplatz sauber abschließen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Planung → Umsetzung → Abschluss verhindert Verschwendung. Typischer Fehler: ohne Plan starten. Merksatz: Planen spart am meisten.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge macht es leicht und konstant. Typischer Fehler: erst am Ende 'nachhaltig' sein wollen. Merksatz: Nachhaltigkeit startet vor dem Mischen."
      }
    },

    // 11) Transfer
    {
      id: "j1_l1_a4_l7_q11",
      topic: "Praxis-Check",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l7_q11",
        topic: "Praxis-Check",
        prompt: "Bringe den Wasser-Check am Becken in die richtige Reihenfolge.",
        items: [
          "Handbrause zielgerichtet ansetzen",
          "Kurz abstellen, wenn du nicht aktiv spülst",
          "Temperatur passend wählen",
          "Am Ende kontrollieren, ob alles sauber ausgespült ist"
        ],
        correctOrder: [
          "Temperatur passend wählen",
          "Handbrause zielgerichtet ansetzen",
          "Kurz abstellen, wenn du nicht aktiv spülst",
          "Am Ende kontrollieren, ob alles sauber ausgespült ist"
        ],
        feedbackCorrect:
          "Richtig. Warum: So sparst du Wasser ohne Qualitätsverlust. Typischer Fehler: Dauerlauf aus Gewohnheit. Merksatz: Kontrolle statt Dauerlauf.",
        feedbackWrong:
          "Nicht ganz. Warum: Erst Temperatur/Technik, dann kurze Stopps, dann Qualitätscheck. Typischer Fehler: zu spät kontrollieren. Merksatz: Effizienz + Kontrolle."
      }
    },

    // 12) Transfer (sentence builder + audio)
    {
      id: "j1_l1_a4_l7_q12",
      topic: "Merksatz Nachhaltigkeit",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l7_q12",
        type: "sentence_builder",
        topic: "Merksatz Nachhaltigkeit",
        question: "Baue den Merksatz zu nachhaltigem Arbeiten.",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich arbeite präzise, spare Ressourcen und halte die Qualität",
        extraWords: ["egal", "später", "irgendwann"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Nachhaltigkeit ist Präzision plus Standard. Typischer Fehler: 'Sparen' mit 'weniger gut' verwechseln. Merksatz: Präzision ist nachhaltig.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Kern ist: Ressourcen sparen, Qualität halten. Typischer Fehler: nur an Müll denken. Merksatz: Dosierung/Wasser/Strom/Müll gehören zusammen."
      }
    },

    // 13) Transfer (gap_fill)
    {
      id: "j1_l1_a4_l7_q13",
      topic: "Strom",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l7_q13",
        topic: "Strom",
        textBefore: "Wenn ein Gerät nicht genutzt wird, sollte es ",
        correctAnswer: "aus",
        textAfter: " sein.",
        options: ["aus", "an", "lauter", "wärmer"],
        feedbackCorrect:
          "Richtig. Warum: Aus = kein unnötiger Verbrauch. Typischer Fehler: Standby aus Gewohnheit. Merksatz: Aus heißt sparen.",
        feedbackWrong:
          "Falsch. Warum: Anlassen kostet dauerhaft Energie. Typischer Fehler: 'nur kurz'. Merksatz: Kurz wird lang."
      }
    },

    // 14) Transfer
    {
      id: "j1_l1_a4_l7_q14",
      topic: "Mülllogik",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l7_q14",
        topic: "Mülllogik",
        question: "Welche Aussage ist am nachhaltigsten und trotzdem professionell?",
        options: [
          "Immer zu viel anmischen, damit sicher genug da ist",
          "Genau dosieren und bei Bedarf kontrolliert nachmischen",
          "Reste sammeln und irgendwann wegkippen",
          "Dauerlauf-Wasser, dann geht es schneller"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Genau + nachmischen reduziert Reste und hält Ergebnis stabil. Typischer Fehler: Überdosierung. Merksatz: Nachmischen schlägt Wegkippen.",
        feedbackWrong:
          "Falsch. Warum: Überdosierung/Dauerlauf/Reste parken = Verschwendung. Typischer Fehler: 'Sicherheit' als Ausrede. Merksatz: Sicherheit ist Methode."
      }
    },

    // 15) Transfer
    {
      id: "j1_l1_a4_l7_q15",
      topic: "Team-Standard",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l7_q15",
        topic: "Team-Standard",
        statement: "Nachhaltigkeit funktioniert am besten, wenn alle im Team denselben Standard nutzen.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Einheitliche Abläufe machen es automatisch und messbar. Typischer Fehler: 'Jeder macht seins'. Merksatz: Standard schafft Wirkung.",
        feedbackWrong:
          "Falsch. Warum: Ohne Teamstandard kippt es schnell in Ausnahmen. Typischer Fehler: gute Vorsätze ohne System. Merksatz: Gemeinsam ist stabil."
      }
    }
  ]
};

export default LEKTION_7;