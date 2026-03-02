// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_1.js
// Lektion 1 – Gefahrstoffe im Salon: Was zählt dazu?

const LEKTION_1 = {
  id: "j1_l1_a4_l1",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Gefahrstoffe im Salon: Was zählt dazu?",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  // optional (non-breaking): Microlearning-Loop
  microLearning: {
    hook: "Du öffnest Blondierung – es staubt leicht und riecht streng. Was ist jetzt wichtig?",
    keyPoints: [
      "Gefahrstoffe erkennst du an Etikett-Hinweisen: Piktogramm, Signalwort, Warn-/Schutzhinweise.",
      "Typische Gefahrstoffe im Salon: Blondierung, Oxidationsmittel, Haarfarben/Umformung, Desinfektion/Reiniger, Aerosole.",
      "Grundregeln: Nur benötigte Menge, sauber dosieren, Deckel sofort zu, nicht umfüllen, lüften, Handschuhe nutzen."
    ],
    practiceTask:
      "Mach einen 2-Minuten-Check im Farbraum: Finde 3 Produkte mit Warnhinweisen und sag laut: Signalwort + wovor es warnt.",
    reflectionQuestion:
      "Welches Produkt wird im Alltag am ehesten unterschätzt – und warum?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l1_q01",
      topic: "Alltagssicherheit",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l1_q01",
        topic: "Alltagssicherheit",
        situationTitle: "Unbeschriftete Sprühflasche im Farbraum",
        situationText: [
          "Du findest im Farbraum eine Sprühflasche ohne Etikett.",
          "Niemand weiß sofort, was drin ist – sie steht zwischen den Produkten."
        ],
        options: [
          "Ich nutze sie kurz, wird schon Wasser sein.",
          "Ich stelle sie beiseite, kläre den Inhalt, beschrifte sie korrekt oder entsorge sie nach Betriebsregel.",
          "Ich rieche dran und entscheide dann."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Gefährlich: Unbekannte Flüssigkeiten sind ein Verwechslungs- und Unfallrisiko (Auge/Haut/Einatmen).",
          "Richtig: Unklare Stoffe werden nicht benutzt. Erst klären, dann korrekt kennzeichnen/entsorgen.",
          "Geruchstest ist keine Sicherheitsstrategie und kann selbst riskant sein."
        ],
        feedbackCorrect:
          "Richtig. Warum: Unbekannte Stoffe sind ein echtes Risiko (Verwechslung/Unfall). Typischer Fehler: 'Wird schon passen'. Merksatz: Unklar = nicht benutzen.",
        feedbackWrong:
          "Nicht optimal. Warum: Du riskierst Verwechslung und Kontakt mit Gefahrstoffen. Typischer Fehler: Schnell-schnell im Stress. Merksatz: Erst klären, dann handeln."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l1_q02",
      topic: "Gefahrstoff erkennen",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l1_q02",
        topic: "Gefahrstoff erkennen",
        statement: "Gefahrstoffe erkennt man vor allem am starken Geruch.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Geruch ist kein zuverlässiges Warnsystem. Typischer Fehler: 'Riecht nicht schlimm, also egal'. Merksatz: Etikett schlägt Nase.",
        feedbackWrong:
          "Falsch. Warum: Manche Stoffe riechen kaum und sind trotzdem riskant. Typischer Fehler: Gefahr mit Geruch verwechseln. Merksatz: Schau aufs Etikett, nicht auf den Duft."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l1_q03",
      topic: "Begriff",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l1_q03",
        topic: "Begriff",
        textBefore: "Produkte mit Piktogramm und Signalwort gelten als ",
        correctAnswer: "Gefahrstoff",
        textAfter: ".",
        options: ["Pflegeprodukt", "Gefahrstoff", "Naturprodukt", "Dekoartikel"],
        feedbackCorrect:
          "Richtig. Warum: Kennzeichnung zeigt dir, dass Schutzmaßnahmen nötig sind. Typischer Fehler: Warnhinweise übersehen. Merksatz: Piktogramm + Signalwort = aufmerksam werden.",
        feedbackWrong:
          "Falsch. Warum: Die Kennzeichnung ist genau dafür da, Gefahrstoffe schnell zu erkennen. Typischer Fehler: Verpackung nach Optik bewerten. Merksatz: Lesen statt raten."
      }
    },

    // 4) Core
    {
      id: "j1_l1_a4_l1_q04",
      topic: "Salonbeispiele",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l1_q04",
        topic: "Salonbeispiele",
        prompt: "Sortiere die Produkte in die passende Kategorie.",
        categories: [
          { id: "gefahrstoff", label: "Gefahrstoff (typisch gekennzeichnet)" },
          { id: "alltag", label: "Alltag (typisch ohne Gefahrstoffkennzeichnung)" }
        ],
        items: [
          { text: "Blondierungspulver", categoryId: "gefahrstoff" },
          { text: "Oxidationsmittel", categoryId: "gefahrstoff" },
          { text: "Flächendesinfektion", categoryId: "gefahrstoff" },
          { text: "Haarspray (Aerosol)", categoryId: "gefahrstoff" },
          { text: "Mildes Shampoo", categoryId: "alltag" },
          { text: "Handpflegecreme", categoryId: "alltag" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du erkennst typische Risikoprodukte im Alltag schneller. Typischer Fehler: Aerosole/Desinfektion unterschätzen. Merksatz: Was kennzeichnet ist, wird ernst genommen.",
        feedbackWrong:
          "Nicht ganz. Warum: Einige Salonprodukte sind schnell unterschätzt (Aerosol/Desinfektion). Typischer Fehler: Nur Blondierung als Gefahrstoff sehen. Merksatz: Farbraum = Fokuszone."
      }
    },

    // 5) Core
    {
      id: "j1_l1_a4_l1_q05",
      topic: "Hauptrisiken",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l1_q05",
        topic: "Hauptrisiken",
        question: "Welche Gefährdung ist im Salon im Umgang mit Gefahrstoffen am häufigsten?",
        options: ["Hautreizungen / Allergien", "Sonnenbrand", "Hörschäden", "Karies"],
        correctIndex: 0,
        feedbackCorrect:
          "Richtig. Warum: Haut ist am häufigsten im direkten Kontakt (Mischungen, Spritzer, Reinigung). Typischer Fehler: 'Meine Haut gewöhnt sich dran'. Merksatz: Hautschutz ist Arbeitsschutz.",
        feedbackWrong:
          "Falsch. Warum: Hautreizungen/Allergien sind der Klassiker im Salon. Typischer Fehler: Handschuhe zu spät oder gar nicht. Merksatz: Schütze die Haut, bevor sie kaputt ist."
      }
    },

    // 6) Core
    {
      id: "j1_l1_a4_l1_q06",
      topic: "Risiko-Check",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l1_q06",
        topic: "Risiko-Check",
        prompt: "Ordne dem Produkt das typischste Risiko zu.",
        pairs: [
          { left: "Blondierungspulver", right: "Staub kann Atemwege und Schleimhäute reizen" },
          { left: "Oxidationsmittel", right: "Kann Augen und Haut reizen (Spritzgefahr)" },
          { left: "Flächendesinfektion", right: "Kann Haut reizen – nicht wild mischen" },
          { left: "Haarspray (Aerosol)", right: "Einatmen vermeiden / teils entzündlich" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du erkennst, worauf du beim Handling achten musst. Typischer Fehler: Risiko nur auf 'Chemie' reduzieren. Merksatz: Produkt → Risiko → Schutzmaßnahme.",
        feedbackWrong:
          "Nicht ganz. Warum: Unterschiedliche Produkte haben unterschiedliche Hauptgefahren. Typischer Fehler: Alles gleich behandeln. Merksatz: Erst Risiko verstehen, dann sicher arbeiten."
      }
    },

    // 7) Core
    {
      id: "j1_l1_a4_l1_q07",
      topic: "Grundregeln",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l1_q07",
        topic: "Grundregeln",
        question: "Welche Regeln helfen sofort im Umgang mit Gefahrstoffen? (mehrere richtig)",
        options: [
          "Handschuhe tragen bei Kontakt mit Farbe/Blondierung",
          "Nur die benötigte Menge anrühren",
          "In neutrale Flaschen umfüllen, dann sieht es ordentlicher aus",
          "Deckel sofort wieder schließen",
          "Essen/Trinken im Farbraum ist okay, wenn man vorsichtig ist",
          "Gut lüften und ruhig arbeiten"
        ],
        correctIndices: [0, 1, 3, 5],
        feedbackCorrect:
          "Richtig. Warum: Weniger Kontakt, weniger Dämpfe/Staub, weniger Reste. Typischer Fehler: Bequemlichkeit vor Sicherheit. Merksatz: Weniger – sauber – geschützt.",
        feedbackPartially:
          "Teilweise. Warum: Einige Kernregeln fehlen noch. Typischer Fehler: Umfüllen oder Farbraum als 'normalen Raum' sehen. Merksatz: Farbraum = Schutzraum.",
        feedbackWrong:
          "Falsch. Warum: Umfüllen/Essensnähe sind echte Risikotreiber. Typischer Fehler: 'Wird schon gut gehen'. Merksatz: Regeln sind da, weil es sonst schiefgeht."
      }
    },

    // 8) Core
    {
      id: "j1_l1_a4_l1_q08",
      topic: "Sicher arbeiten",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l1_q08",
        topic: "Sicher arbeiten",
        prompt: "Bringe die Schritte für sicheres Anmischen in die richtige Reihenfolge.",
        items: [
          "Arbeitsplatz frei räumen und Schale bereitstellen",
          "Handschuhe anziehen",
          "Produkte nach Anleitung dosieren und mischen",
          "Gebinde schließen und Fläche reinigen"
        ],
        correctOrder: [
          "Arbeitsplatz frei räumen und Schale bereitstellen",
          "Handschuhe anziehen",
          "Produkte nach Anleitung dosieren und mischen",
          "Gebinde schließen und Fläche reinigen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Schutz kommt vor Kontakt, Reinigung verhindert Folgefehler. Typischer Fehler: Erst mischen, dann Handschuhe. Merksatz: Erst Schutz, dann Mischung.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge steuert Risiko (Kontakt/Spritzer/Chaos). Typischer Fehler: Schritte überspringen. Merksatz: Ablauf bringt Sicherheit."
      }
    },

    // 9) Core (gap_fill)
    {
      id: "j1_l1_a4_l1_q09",
      topic: "Staub",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l1_q09",
        topic: "Staub",
        textBefore: "Beim Blondieren ist Staub ein Thema – schütze besonders deine ",
        correctAnswer: "Atemwege",
        textAfter: ".",
        options: ["Atemwege", "Füße", "Ohren", "Zähne"],
        feedbackCorrect:
          "Richtig. Warum: Staub kann die Atemwege reizen – ruhiges Dosieren und Lüften helfen sofort. Typischer Fehler: Pulver 'reinwerfen'. Merksatz: Staub vermeiden = smart arbeiten.",
        feedbackWrong:
          "Falsch. Warum: Hier geht es vor allem um Einatmen/Schleimhäute. Typischer Fehler: Atemwege vergessen. Merksatz: Pulver heißt: Luft im Blick."
      }
    },

    // 10) Core
    {
      id: "j1_l1_a4_l1_q10",
      topic: "Reaktion im Alltag",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l1_q10",
        topic: "Reaktion im Alltag",
        situationTitle: "Husten beim Anmischen",
        situationText: [
          "Beim Anmischen merkst du plötzlich: Es kratzt im Hals, du musst husten.",
          "Der Farbraum ist gerade nicht gut gelüftet."
        ],
        options: [
          "Ich mache schnell weiter, damit ich fertig werde.",
          "Ich stoppe kurz, lüfte, arbeite ruhiger/staubärmer und prüfe, ob zusätzliche Schutzmaßnahmen nötig sind.",
          "Ich puste einmal kräftig über die Schale, dann ist der Staub weg."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Ignorieren verstärkt das Risiko und macht es zur Gewohnheit.",
          "Richtig: Du reduzierst Einatmen und bekommst Kontrolle über die Situation.",
          "Falsch: Das verteilt Staub zusätzlich."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du senkst Einatmen/Staub und arbeitest kontrolliert. Typischer Fehler: Symptome wegdrücken. Merksatz: Körper meldet Risiko – reagieren.",
        feedbackWrong:
          "Nicht optimal. Warum: Staub/Dämpfe sind real – und du stehst mitten drin. Typischer Fehler: 'Nur noch schnell'. Merksatz: Stoppen, lüften, sicher weiter."
      }
    },

    // 11) Transfer
    {
      id: "j1_l1_a4_l1_q11",
      topic: "Sauberer Ablauf",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l1_q11",
        topic: "Sauberer Ablauf",
        prompt: "Setze den Ablauf bei Chemie auf der Arbeitsfläche in die richtige Reihenfolge.",
        steps: [
          "Bereich freimachen und Kunden fernhalten",
          "Handschuhe anziehen und lüften",
          "Aufnehmen (Tuch/Bindemittel) ohne zu verwirbeln",
          "Fläche reinigen",
          "Abfall korrekt entsorgen und Hände pflegen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst sichern/schützen, dann sauber machen und korrekt entsorgen. Typischer Fehler: direkt wischen ohne PSA. Merksatz: Sichern–Schützen–Sauber–Entsorgen.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge entscheidet über Spritz- und Kontaktgefahr. Typischer Fehler: Putzen vor Sicherheit. Merksatz: Sicherheit zuerst."
      }
    },

    // 12) Transfer
    {
      id: "j1_l1_a4_l1_q12",
      topic: "Neues Produkt",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l1_q12",
        topic: "Neues Produkt",
        question: "Was ist der beste erste Check, bevor du ein neues chemisches Produkt nutzt?",
        options: [
          "Wie stark es riecht",
          "Etikett lesen: Piktogramm, Signalwort und Hinweise",
          "Welche Farbe die Verpackung hat",
          "Was andere auf Social Media sagen"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Das Etikett sagt dir Risiko und Schutzmaßnahmen. Typischer Fehler: Nach Gefühl entscheiden. Merksatz: Lesen ist schneller als Ärger.",
        feedbackWrong:
          "Falsch. Warum: Geruch/Optik/Meinungen ersetzen keine Sicherheit. Typischer Fehler: 'Ich kenn das schon'. Merksatz: Neues Produkt = neuer Check."
      }
    },

    // 13) Core (Begriffe)
    {
      id: "j1_l1_a4_l1_q13",
      topic: "Etikett-Bausteine",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l1_q13",
        topic: "Etikett-Bausteine",
        prompt: "Ordne den Etikett-Baustein der passenden Funktion zu.",
        pairs: [
          { left: "Signalwort", right: "Zeigt die Dringlichkeit der Gefahr (z. B. Achtung/Gefahr)" },
          { left: "Piktogramm", right: "Zeigt die Art der Gefahr als Symbol" },
          { left: "Hinweise", right: "Geben Schutz- und Erste-Hilfe-Infos" },
          { left: "Originalgebinde", right: "Verhindert Verwechslung durch klare Kennzeichnung" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du weißt, wo du was findest, wenn es schnell gehen muss. Typischer Fehler: Nur aufs Symbol schauen. Merksatz: Signalwort + Hinweis = Handlungsplan.",
        feedbackWrong:
          "Nicht ganz. Warum: Jeder Baustein hat eine klare Aufgabe. Typischer Fehler: Etikett überfliegen. Merksatz: Etikett ist deine Kurz-Anleitung."
      }
    },

    // 14) Core
    {
      id: "j1_l1_a4_l1_q14",
      topic: "Handschuhe",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l1_q14",
        topic: "Handschuhe",
        statement: "Wenn du nur wenig Produkt nimmst, brauchst du keine Handschuhe.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Auch kleine Mengen können reizen oder Allergien triggern. Typischer Fehler: 'Ist ja nur ein bisschen'. Merksatz: Kontakt ist Kontakt.",
        feedbackWrong:
          "Falsch. Warum: Menge reduziert nicht automatisch das Risiko – Hautkontakt bleibt Hautkontakt. Typischer Fehler: Handschuhe weglassen im Stress. Merksatz: Handschuhe sind Standard, nicht Bonus."
      }
    },

    // 15) Core (Sentence Builder + Audio)
    {
      id: "j1_l1_a4_l1_q15",
      topic: "Merksatz",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l1_q15",
        type: "sentence_builder",
        topic: "Merksatz",
        question: "Was ist die wichtigste Grundregel im Umgang mit Gefahrstoffen?",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich schütze zuerst Haut und Augen, dann arbeite ich",
        extraWords: ["später", "egal", "irgendwie"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Schutz vor Kontakt verhindert die meisten Probleme. Typischer Fehler: Erst machen, dann schützen. Merksatz: Erst Schutz, dann Arbeit.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Kern ist Reihenfolge und Konsequenz. Typischer Fehler: Regeln im Kopf, aber nicht in der Praxis. Merksatz: Schutz ist der Startknopf."
      }
    }
  ]
};

export default LEKTION_1;