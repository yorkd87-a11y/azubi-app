// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_8.js
// Boss-Fight Quiz – Abschnitt 4: Gefahrstoffe, Hautschutz, Nachhaltigkeit (18 Fragen)

const LEKTION_8 = {
  id: "j1_l1_a4_l8",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Boss-Fight: Gefahrstoffe, Hautschutz, Nachhaltigkeit",
  track: "arbeitsschutz",
  energy: 18,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a4_l8_q01",
      topic: "Notfall",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l8_q01",
        topic: "Notfall",
        situationTitle: "Blondierung spritzt Richtung Auge",
        situationText: [
          "Beim Anmischen spritzt ein Tropfen Blondierung Richtung Auge.",
          "Du bist kurz geschockt, alle schauen."
        ],
        options: [
          "Erst kurz diskutieren, was es war, dann spülen.",
          "Sofort spülen, Hilfe holen und danach Etikett/SDB prüfen.",
          "Auge kurz abwischen, dann weiterarbeiten."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Zeitverlust kann Schaden vergrößern.",
          "Richtig: Sofortmaßnahme zuerst, dann Absicherung über SDB/Etikett.",
          "Falsch: Abwischen/Reiben kann es verschlimmern."
        ],
        feedbackCorrect:
          "Richtig. Warum: Auge = sofort Wasser, dann absichern. Typischer Fehler: erst reden. Merksatz: Spülen kommt zuerst.",
        feedbackWrong:
          "Nicht optimal. Warum: Jede Sekunde zählt. Typischer Fehler: Schock → Stillstand. Merksatz: Erst spülen, dann klären."
      }
    },

    // 2
    {
      id: "j1_l1_a4_l8_q02",
      topic: "Etikett",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l8_q02",
        topic: "Etikett",
        question: "Was zeigt das Signalwort auf dem Etikett am ehesten?",
        options: [
          "Die Dringlichkeit/Schwere der Gefahr (z. B. Achtung/Gefahr)",
          "Den Preis pro Anwendung",
          "Ob das Produkt vegan ist",
          "Die Lieblingsfarbe der Marke"
        ],
        correctIndex: 0,
        feedbackCorrect:
          "Richtig. Warum: Signalwort = Alarmstufe. Typischer Fehler: übersehen. Merksatz: Signalwort steuert Verhalten.",
        feedbackWrong:
          "Falsch. Warum: Preis/Vegan/Design sind keine Sicherheitsstufen. Typischer Fehler: Etikett wie Werbung behandeln. Merksatz: Signalwort ist Pflichtinfo."
      }
    },

    // 3 (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l8_q03",
      topic: "Begriff",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l8_q03",
        topic: "Begriff",
        textBefore: "SDB bedeutet ",
        correctAnswer: "Sicherheitsdatenblatt",
        textAfter: ".",
        options: ["Salon-Dienst-Block", "Sicherheitsdatenblatt", "Styling-Datenbank", "Service-Dokument-Board"],
        feedbackCorrect:
          "Richtig. Warum: Begriff kennen = Dokument schneller finden. Typischer Fehler: Abkürzung nicht zuordnen. Merksatz: SDB = Sicherheitsdatenblatt.",
        feedbackWrong:
          "Falsch. Warum: Ohne Begriff suchst du im Notfall länger. Typischer Fehler: unklare Sprache. Merksatz: Klar benennen, schnell handeln."
      }
    },

    // 4
    {
      id: "j1_l1_a4_l8_q04",
      topic: "Piktogramme",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l8_q04",
        topic: "Piktogramme",
        prompt: "Ordne dem Begriff die passende Bedeutung zu.",
        pairs: [
          { left: "Ätzwirkung", right: "Kann Haut und Augen stark schädigen" },
          { left: "Ausrufezeichen", right: "Reizend / kann Allergien auslösen" },
          { left: "Flamme", right: "Entzündlich" },
          { left: "Umwelt", right: "Gewässergefährdend" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Symbole geben dir schnelle Orientierung. Typischer Fehler: Symbol ignorieren. Merksatz: Symbol = Gefahr-Art.",
        feedbackWrong:
          "Nicht ganz. Warum: Symbole sind ein Warnsystem in Sekunden. Typischer Fehler: nur Text lesen. Merksatz: Erst Symbol, dann Hinweis."
      }
    },

    // 5
    {
      id: "j1_l1_a4_l8_q05",
      topic: "Hautschutz",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l8_q05",
        topic: "Hautschutz",
        question: "Welche Punkte gehören in einen Hautschutzplan? (mehrere richtig)",
        options: [
          "Schutz vor der Arbeit (z. B. Schutzcreme nach Plan)",
          "Milde Reinigung statt aggressiv schrubben",
          "Pflege nach der Arbeit",
          "Schmuck unter Handschuhen lassen",
          "Hautkontakt mit Chemie vermeiden (Handschuhe)"
        ],
        correctIndices: [0, 1, 2, 4],
        feedbackCorrect:
          "Richtig. Warum: Schutz–Reinigung–Pflege stabilisiert die Barriere. Typischer Fehler: Pflege vergessen. Merksatz: Haut ist Arbeitsmittel.",
        feedbackPartially:
          "Teilweise. Warum: Schmuck ist ein Klassiker für Probleme (Risse, Keime, Reibung). Merksatz: Schmuck runter, Handschuh korrekt.",
        feedbackWrong:
          "Falsch. Warum: Ohne Schutzplan kippt es in Zufall. Typischer Fehler: nur reagieren, wenn es weh tut. Merksatz: Vorbeugen ist Profi."
      }
    },

    // 6
    {
      id: "j1_l1_a4_l8_q06",
      topic: "Notfall Auge",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l8_q06",
        topic: "Notfall Auge",
        prompt: "Bringe die Schritte bei Spritzer ins Auge in die richtige Reihenfolge.",
        items: [
          "Sofort mit viel Wasser spülen",
          "Kontaktlinsen entfernen (wenn möglich)",
          "Hilfe holen / Teamleitung informieren",
          "SDB/Etikett prüfen und ggf. medizinisch abklären"
        ],
        correctOrder: [
          "Sofort mit viel Wasser spülen",
          "Kontaktlinsen entfernen (wenn möglich)",
          "Hilfe holen / Teamleitung informieren",
          "SDB/Etikett prüfen und ggf. medizinisch abklären"
        ],
        feedbackCorrect:
          "Richtig. Warum: Spülen hat Priorität. Typischer Fehler: erst telefonieren. Merksatz: Auge = Wasser zuerst.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge entscheidet über Schaden. Typischer Fehler: zu spät spülen. Merksatz: Erst spülen, dann klären."
      }
    },

    // 7
    {
      id: "j1_l1_a4_l8_q07",
      topic: "Lagerung",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l8_q07",
        topic: "Lagerung",
        statement: "Gefahrstoffe sollten im Originalgebinde bleiben und klar beschriftet sein.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Kennzeichnung verhindert Verwechslung und Unfälle. Typischer Fehler: umfüllen. Merksatz: Original bleibt original.",
        feedbackWrong:
          "Falsch. Warum: Umfüllen/unbeschriftet ist ein Haupt-Unfallgrund. Typischer Fehler: Ordnung vor Sicherheit. Merksatz: Kennzeichnung ist Pflicht."
      }
    },

    // 8
    {
      id: "j1_l1_a4_l8_q08",
      topic: "Verschütten",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l8_q08",
        topic: "Verschütten",
        prompt: "Setze den Ablauf bei verschütteter Chemie in die richtige Reihenfolge.",
        steps: [
          "Bereich sichern",
          "PSA anziehen und lüften",
          "Aufnehmen und reinigen",
          "Korrekt entsorgen und melden"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst Sicherheit, dann Sauberkeit, dann Abschluss. Typischer Fehler: direkt wischen ohne PSA. Merksatz: Sichern–Schützen–Sauber–Melden.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge verhindert Kontakt und Rutschunfälle. Typischer Fehler: Tempo vor Schutz. Merksatz: Erst sichern."
      }
    },

    // 9
    {
      id: "j1_l1_a4_l8_q09",
      topic: "Entsorgung",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l8_q09",
        topic: "Entsorgung",
        question: "Welche Aussage ist korrekt?",
        options: [
          "Reste kann man verdünnen und in den Ausguss kippen.",
          "Entsorgung erfolgt nach Betriebsregel/Hersteller, nicht über den Abfluss.",
          "Alles kommt in den Papierkorb.",
          "Man sammelt Reste, bis es überläuft."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: So schützt du Umwelt und Team. Typischer Fehler: 'nur bisschen'. Merksatz: Abfluss ist keine Entsorgung.",
        feedbackWrong:
          "Falsch. Warum: Verdünnen/wegkippen ist nicht korrekt. Typischer Fehler: Bequemlichkeit. Merksatz: Regel schlägt Gefühl."
      }
    },

    // 10
    {
      id: "j1_l1_a4_l8_q10",
      topic: "SDB Inhalte",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l8_q10",
        topic: "SDB Inhalte",
        prompt: "Ordne SDB-Thema und Inhalt zu.",
        pairs: [
          { left: "Erste Hilfe", right: "Sofortmaßnahmen bei Auge/Haut/Einatmen" },
          { left: "Handhabung/Schutz", right: "PSA, Lüften, Verhalten" },
          { left: "Lagerung", right: "Sicher aufbewahren" },
          { left: "Entsorgung", right: "Richtig weggeben/sammeln" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du findest Infos im Ernstfall schneller. Typischer Fehler: falschen Abschnitt suchen. Merksatz: Abschnitt kennen = schnell.",
        feedbackWrong:
          "Nicht ganz. Warum: SDB ist strukturiert. Typischer Fehler: planlos suchen. Merksatz: Thema → Abschnitt."
      }
    },

    // 11
    {
      id: "j1_l1_a4_l8_q11",
      topic: "Nachhaltigkeit",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l8_q11",
        topic: "Nachhaltigkeit",
        statement: "Exakt dosieren spart Reste und ist ein wichtiger Nachhaltigkeitshebel.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Weniger Reste = weniger Müll und Kosten. Typischer Fehler: 'zur Sicherheit' zu viel. Merksatz: Messen spart Müll.",
        feedbackWrong:
          "Falsch. Warum: Ungenaue Mengen erzeugen Reste. Typischer Fehler: Schätzen. Merksatz: Genau ist nachhaltig."
      }
    },

    // 12 (Sentence Builder + Audio)
    {
      id: "j1_l1_a4_l8_q12",
      topic: "Merksatz Notfall",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l8_q12",
        type: "sentence_builder",
        topic: "Merksatz Notfall",
        question: "Baue den Notfall-Merksatz.",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich sichere, spüle, schütze und melde sofort",
        extraWords: ["egal", "später", "irgendwann"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Kurz, stressfest, klar. Typischer Fehler: in Panik springen. Merksatz: Sichern–Spülen–Schützen–Melden.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Kern ist Reihenfolge. Typischer Fehler: alles gleichzeitig. Merksatz: Erst sichern/spülen, dann Rest."
      }
    },

    // 13 (gap_fill)
    {
      id: "j1_l1_a4_l8_q13",
      topic: "Hautschutz",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l8_q13",
        topic: "Hautschutz",
        textBefore: "Hautschutzplan heißt: Schutz – Reinigung – ",
        correctAnswer: "Pflege",
        textAfter: ".",
        options: ["Pflege", "Parfum", "Pause", "Preis"],
        feedbackCorrect:
          "Richtig. Warum: Pflege stabilisiert die Barriere nach Belastung. Typischer Fehler: Pflege vergessen. Merksatz: Drei Schritte, jeden Tag.",
        feedbackWrong:
          "Falsch. Warum: Ohne Pflege bleibt die Haut dauerhaft gestresst. Typischer Fehler: nur waschen. Merksatz: Pflege gehört dazu."
      }
    },

    // 14
    {
      id: "j1_l1_a4_l8_q14",
      topic: "Wasser sparen",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l8_q14",
        topic: "Wasser sparen",
        question: "Was spart Wasser beim Ausspülen am ehesten, ohne Qualität zu verlieren?",
        options: [
          "Dauerlauf",
          "Handbrause gezielt führen und kurz abstellen",
          "Immer eiskalt",
          "So schnell wie möglich, egal wie"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Technik + kurze Stopps sparen Wasser. Typischer Fehler: Dauerlauf. Merksatz: Kontrolle statt Dauerlauf.",
        feedbackWrong:
          "Falsch. Warum: Dauerlauf ist Gewohnheit, nicht Effizienz. Typischer Fehler: 'Mehr hilft mehr'. Merksatz: Zielgerichtet spülen."
      }
    },

    // 15
    {
      id: "j1_l1_a4_l8_q15",
      topic: "PSA",
      gameType: "category_sort",
      gameData: {
        id: "j1_l1_a4_l8_q15",
        topic: "PSA",
        prompt: "Sortiere: PSA oder nicht?",
        categories: [
          { id: "psa", label: "PSA" },
          { id: "nicht", label: "Nicht PSA" }
        ],
        items: [
          { text: "Handschuhe", categoryId: "psa" },
          { text: "Schürze (bei Kontakt/Spritzgefahr)", categoryId: "psa" },
          { text: "Schutzbrille (bei Spritzgefahr, nach Vorgabe)", categoryId: "psa" },
          { text: "Armband/Schmuck", categoryId: "nicht" },
          { text: "Parfum", categoryId: "nicht" },
          { text: "Trend-Haarklammer", categoryId: "nicht" }
        ],
        feedbackCorrect:
          "Richtig. Warum: PSA ist Schutz vor Risiko, nicht Accessoire. Typischer Fehler: Schmuck unterschätzen. Merksatz: PSA schützt, Schmuck stört.",
        feedbackWrong:
          "Nicht ganz. Warum: PSA ist klar definiert. Typischer Fehler: PSA zu eng/zu breit verstehen. Merksatz: PSA = Schutz."
      }
    },

    // 16
    {
      id: "j1_l1_a4_l8_q16",
      topic: "Signalwort vs Symbol",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l8_q16",
        topic: "Signalwort vs Symbol",
        question: "Was ist die beste Reihenfolge beim Etikett-Schnellcheck?",
        options: [
          "Hinweise → Symbol → Signalwort",
          "Signalwort → Symbol → Hinweise → Handlung ableiten",
          "Symbol → Musik an → los",
          "Gar nicht lesen, weil man es ja kennt"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Erst Alarmstufe, dann Gefahr-Art, dann Verhalten. Typischer Fehler: Etikett erst lesen, wenn’s brennt. Merksatz: Check vor Chemie.",
        feedbackWrong:
          "Falsch. Warum: Ohne Check arbeitest du im Autopilot. Typischer Fehler: Routine. Merksatz: Signalwort zuerst."
      }
    },

    // 17
    {
      id: "j1_l1_a4_l8_q17",
      topic: "Umfüllen",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l8_q17",
        topic: "Umfüllen",
        statement: "Unbeschriftete Behälter sind im Umgang mit Gefahrstoffen okay, wenn man sie wiedererkennt.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Verwechslung ist eine der gefährlichsten Ursachen. Typischer Fehler: 'Ich weiß das doch'. Merksatz: Unklar = No-Go.",
        feedbackWrong:
          "Falsch. Warum: Wiedererkennen ist keine Kennzeichnung. Typischer Fehler: Bequemlichkeit. Merksatz: Beschriftung oder raus."
      }
    },

    // 18
    {
      id: "j1_l1_a4_l8_q18",
      topic: "Alltag",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l8_q18",
        topic: "Alltag",
        situationTitle: "Zeitdruck und Handschuhe",
        situationText: [
          "Du willst 'nur schnell' Ansatzfarbe auftragen.",
          "Handschuhe liegen da, aber du bist im Stress."
        ],
        options: [
          "Ohne Handschuhe, ist ja nur kurz.",
          "Handschuhe an, sauber arbeiten – Standard bleibt Standard.",
          "Erst auftragen, dann Handschuhe für die Reinigung."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Auch kurze Kontakte triggern Reizung/Allergie.",
          "Richtig: Profis halten Standard auch unter Stress.",
          "Falsch: Kontakt ist dann schon passiert."
        ],
        feedbackCorrect:
          "Richtig. Warum: Hautschutz ist kein Bonus, sondern Grundregel. Typischer Fehler: Stress-Ausnahme. Merksatz: Standard bleibt Standard.",
        feedbackWrong:
          "Nicht optimal. Warum: Die meisten Schäden entstehen durch 'nur kurz'. Typischer Fehler: Tempo vor Schutz. Merksatz: Handschuhe zuerst."
      }
    }
  ]
};

export default LEKTION_8;