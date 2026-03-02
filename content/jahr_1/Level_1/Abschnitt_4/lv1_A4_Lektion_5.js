// content/jahr_1/Level_1/Abschnitt_4/lv1_A4_Lektion_5.js
// Lektion 5 – Notfälle: Auge / Hautkontakt / Verschütten (Sofortablauf)

const LEKTION_5 = {
  id: "j1_l1_a4_l5",
  jahr: 1,
  level: 1,
  section: 4,
  title: "Notfälle im Salon: Auge, Hautkontakt, Verschütten",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Ein Spritzer Blondierung landet im Auge – jetzt zählen Sekunden, nicht Diskussionen.",
    keyPoints: [
      "Auge: Sofort und lange spülen, Kontaktlinsen raus (wenn möglich), Hilfe holen, SDB/Etikett prüfen, ggf. medizinisch abklären.",
      "Haut: Sofort abspülen, kontaminierte Kleidung/Handschuhe wechseln, bei Reizung melden und nach Plan pflegen.",
      "Verschütten: Bereich sichern, PSA, lüften, aufnehmen/reinigen, korrekt entsorgen und kurz melden/dokumentieren."
    ],
    practiceTask:
      "Merke dir die 4-Wort-Formel und sag sie 3x laut: Sichern – Spülen – Schützen – Melden.",
    reflectionQuestion:
      "Was würdest du im Stress am ehesten vergessen – und wie verhinderst du das?"
  },

  questions: [
    // 1) Warm-up
    {
      id: "j1_l1_a4_l5_q01",
      topic: "Priorität",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l5_q01",
        topic: "Priorität",
        question: "Was hat bei einem Spritzer ins Auge oberste Priorität?",
        options: [
          "Erst das Etikett lesen",
          "Sofort mit viel Wasser spülen",
          "Erst den Kunden beruhigen, dann kümmern",
          "Erst aufräumen, damit niemand es sieht"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Spülen hat Priorität – jede Sekunde zählt. Typischer Fehler: erst suchen/reden. Merksatz: Auge = sofort Wasser.",
        feedbackWrong:
          "Falsch. Warum: Etikett/SDB ist wichtig, aber erst nach der Sofortmaßnahme. Typischer Fehler: zu spät spülen. Merksatz: Erst spülen, dann prüfen."
      }
    },

    // 2) Warm-up
    {
      id: "j1_l1_a4_l5_q02",
      topic: "Auge",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l5_q02",
        topic: "Auge",
        statement: "Bei Augenkontakt ist 'kurz spülen' meist ausreichend.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Im Zweifel lieber länger spülen – Augen sind extrem empfindlich. Typischer Fehler: zu früh stoppen. Merksatz: Lieber zu lange als zu kurz.",
        feedbackWrong:
          "Falsch. Warum: Kurz spülen kann zu wenig sein. Typischer Fehler: unterschätzen. Merksatz: Spülen ist keine 10-Sekunden-Aktion."
      }
    },

    // 3) Warm-up (gap_fill – Fachwort)
    {
      id: "j1_l1_a4_l5_q03",
      topic: "Merksatz",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l5_q03",
        topic: "Merksatz",
        textBefore: "Bei Augenkontakt gilt: Erst ",
        correctAnswer: "spülen",
        textAfter: ", dann nachschlagen.",
        options: ["posten", "spülen", "diskutieren", "warten"],
        feedbackCorrect:
          "Richtig. Warum: Sofortmaßnahme vor Detail-Info. Typischer Fehler: erst SDB suchen. Merksatz: Erst retten, dann prüfen.",
        feedbackWrong:
          "Falsch. Warum: Warten/Diskutieren kostet Zeit. Typischer Fehler: Hektik ohne Handlung. Merksatz: Spülen kommt zuerst."
      }
    },

    // 4) Core – Auge Ablauf
    {
      id: "j1_l1_a4_l5_q04",
      topic: "Notfall Auge",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l5_q04",
        topic: "Notfall Auge",
        prompt: "Bringe den Ablauf bei 'Spritzer ins Auge' in die richtige Reihenfolge.",
        items: [
          "Sofort mit viel Wasser spülen",
          "Kontaktlinsen entfernen (wenn möglich)",
          "Teamleitung informieren / Hilfe holen",
          "SDB/Etikett prüfen und ggf. medizinisch abklären"
        ],
        correctOrder: [
          "Sofort mit viel Wasser spülen",
          "Kontaktlinsen entfernen (wenn möglich)",
          "Teamleitung informieren / Hilfe holen",
          "SDB/Etikett prüfen und ggf. medizinisch abklären"
        ],
        feedbackCorrect:
          "Richtig. Warum: Spülen hat Priorität, dann Absicherung und Hilfe. Typischer Fehler: erst telefonieren. Merksatz: Wasser zuerst.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge entscheidet über Schaden. Typischer Fehler: zu spät spülen. Merksatz: Erst Wasser, dann alles andere."
      }
    },

    // 5) Core – Hautkontakt Ablauf
    {
      id: "j1_l1_a4_l5_q05",
      topic: "Notfall Haut",
      gameType: "order_steps",
      gameData: {
        id: "j1_l1_a4_l5_q05",
        topic: "Notfall Haut",
        prompt: "Bringe den Ablauf bei Hautkontakt mit Chemie in die richtige Reihenfolge.",
        items: [
          "Produkt sofort entfernen und mit Wasser abspülen",
          "Kontaminierte Handschuhe/Kleidung wechseln",
          "SDB/Etikett prüfen und bei Reizung melden",
          "Haut schonend reinigen, dann pflegen"
        ],
        correctOrder: [
          "Produkt sofort entfernen und mit Wasser abspülen",
          "Kontaminierte Handschuhe/Kleidung wechseln",
          "SDB/Etikett prüfen und bei Reizung melden",
          "Haut schonend reinigen, dann pflegen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst runter, dann absichern, dann Barriere pflegen. Typischer Fehler: weiterarbeiten trotz Reizung. Merksatz: Runter–Wechseln–Check–Pflegen.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge verhindert Verschlimmerung. Typischer Fehler: nur abwischen. Merksatz: Wasser, nicht Tuch."
      }
    },

    // 6) Core – Verschütten Ablauf
    {
      id: "j1_l1_a4_l5_q06",
      topic: "Verschütten",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l5_q06",
        topic: "Verschütten",
        prompt: "Setze den Ablauf bei verschütteter Chemie in die richtige Reihenfolge.",
        steps: [
          "Bereich sichern (Warnschild/Absperren)",
          "PSA anziehen und lüften",
          "Aufnehmen (Bindemittel/Tücher nach Betriebsregel)",
          "Fläche reinigen",
          "Material korrekt entsorgen und Vorfall melden"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst Sicherheit, dann Reinigung, dann Entsorgung/Meldung. Typischer Fehler: direkt wischen ohne PSA. Merksatz: Sichern–Schützen–Sauber–Melden.",
        feedbackWrong:
          "Nicht ganz. Warum: Reihenfolge reduziert Kontakt- und Rutschgefahr. Typischer Fehler: Putzen vor Absicherung. Merksatz: Erst sichern."
      }
    },

    // 7) Core – häufige Fehler
    {
      id: "j1_l1_a4_l5_q07",
      topic: "Fehler vermeiden",
      gameType: "single_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l5_q07",
        topic: "Fehler vermeiden",
        question: "Was ist ein typischer Fehler bei Notfällen im Salon?",
        options: [
          "Sofortmaßnahme starten",
          "Hilfe holen und informieren",
          "Zu lange diskutieren, statt direkt zu handeln",
          "SDB/Etikett zur Absicherung nutzen"
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Zögern kostet Zeit und kann Schaden vergrößern. Typischer Fehler: erst nach Schuld suchen. Merksatz: Erst handeln, dann klären.",
        feedbackWrong:
          "Falsch. Warum: Sofortmaßnahme/Hilfe/SDB sind genau richtig – Diskussion nicht. Typischer Fehler: Stress blockiert. Merksatz: Aktion vor Analyse."
      }
    },

    // 8) Core – Aussage prüfen
    {
      id: "j1_l1_a4_l5_q08",
      topic: "Sicherheit",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l5_q08",
        topic: "Sicherheit",
        statement: "Bei Verschütten ist es sinnvoll, zuerst schnell aufzuwischen, bevor jemand es sieht.",
        isTrue: false,
        feedbackCorrect:
          "Richtig. Warum: Erst sichern und schützen – sonst riskierst du Kontakt/Unfall. Typischer Fehler: 'schnell weg'. Merksatz: Sicherheit vor Optik.",
        feedbackWrong:
          "Falsch. Warum: Schnell wischen ohne PSA/Absicherung ist riskant. Typischer Fehler: Scham statt Sicherheit. Merksatz: Erst sichern, dann sauber."
      }
    },

    // 9) Core – Handschuhe im Notfall
    {
      id: "j1_l1_a4_l5_q09",
      topic: "PSA im Notfall",
      gameType: "multiple_choice_quiz",
      gameData: {
        id: "j1_l1_a4_l5_q09",
        topic: "PSA im Notfall",
        question: "Welche Maßnahmen passen bei 'Verschütten' sofort dazu? (mehrere richtig)",
        options: [
          "Bereich absperren/sichern",
          "Handschuhe/PSA anziehen",
          "Mit bloßen Händen aufnehmen, geht schneller",
          "Lüften",
          "Reste korrekt entsorgen"
        ],
        correctIndices: [0, 1, 3, 4],
        feedbackCorrect:
          "Richtig. Warum: Sichern + PSA + Lüften + korrekt entsorgen = sicherer Ablauf. Typischer Fehler: bloße Hände. Merksatz: PSA schützt, Tempo nicht.",
        feedbackPartially:
          "Teilweise. Warum: Mindestens eine Risko-Option ist noch drin. Typischer Fehler: 'kurz mit der Hand'. Merksatz: Hände sind tabu bei Chemie.",
        feedbackWrong:
          "Falsch. Warum: Bloße Hände sind ein klassischer Unfallgrund. Typischer Fehler: Risiko kleinreden. Merksatz: Nie ohne PSA."
      }
    },

    // 10) Transfer – Situation
    {
      id: "j1_l1_a4_l5_q10",
      topic: "Augenkontakt",
      gameType: "scenario_choice",
      gameData: {
        id: "j1_l1_a4_l5_q10",
        topic: "Augenkontakt",
        situationTitle: "Kontaktlinsen im Auge",
        situationText: [
          "Du trägst Kontaktlinsen. Ein Spritzer kommt ans Auge.",
          "Du bist unsicher, ob du erst die Linse rausnehmen sollst."
        ],
        options: [
          "Ich suche zuerst das SDB, dann spüle ich.",
          "Ich spüle sofort und entferne Kontaktlinsen, wenn möglich, während/ nach dem Spülen.",
          "Ich reibe das Auge kurz, dann wird es besser."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Falsch: Erst spülen, dann Details.",
          "Richtig: Spülen sofort, Kontaktlinsen raus (wenn möglich).",
          "Falsch: Reiben kann es verschlimmern."
        ],
        feedbackCorrect:
          "Richtig. Warum: Sofort spülen verhindert mehr Schaden, Linse raus wenn möglich. Typischer Fehler: reiben. Merksatz: Spülen statt reiben.",
        feedbackWrong:
          "Nicht optimal. Warum: Warten/Reiben kostet und schadet. Typischer Fehler: falsche Reihenfolge. Merksatz: Wasser zuerst."
      }
    },

    // 11) Transfer – Formel
    {
      id: "j1_l1_a4_l5_q11",
      topic: "Sofortformel",
      gameType: "sentence_builder",
      gameData: {
        id: "j1_l1_a4_l5_q11",
        type: "sentence_builder",
        topic: "Sofortformel",
        question: "Baue die Notfall-Formel als Satz.",
        prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
        answer: "Ich sichere, spüle, schütze und melde sofort",
        extraWords: ["später", "irgendwann", "egal"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Die Formel ist kurz und stressfest. Typischer Fehler: in Panik springen. Merksatz: Sichern–Spülen–Schützen–Melden.",
        feedbackWrong:
          "Nicht ganz. Warum: Im Notfall brauchst du klare Reihenfolge. Typischer Fehler: alles gleichzeitig. Merksatz: Erst sichern/spülen, dann Rest."
      }
    },

    // 12) Transfer – Zuordnung
    {
      id: "j1_l1_a4_l5_q12",
      topic: "Zuordnung",
      gameType: "match_pairs",
      gameData: {
        id: "j1_l1_a4_l5_q12",
        topic: "Zuordnung",
        prompt: "Ordne dem Notfall die erste richtige Aktion zu.",
        pairs: [
          { left: "Auge", right: "Sofort und lange spülen" },
          { left: "Haut", right: "Sofort abspülen und Produkt entfernen" },
          { left: "Verschütten", right: "Bereich sichern und PSA anziehen" },
          { left: "Unsicherheit", right: "SDB/Etikett zur Absicherung nutzen" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Erste Aktion entscheidet oft über den Verlauf. Typischer Fehler: falscher Fokus. Merksatz: Erstmaßnahme kennen = sicher.",
        feedbackWrong:
          "Nicht ganz. Warum: Jede Situation hat eine klare erste Aktion. Typischer Fehler: alles gleich behandeln. Merksatz: Auge/Wasser, Haut/Wasser, Spill/Sichern."
      }
    },

    // 13) Transfer – Meldung/Doku
    {
      id: "j1_l1_a4_l5_q13",
      topic: "Melden",
      gameType: "true_false_swipe",
      gameData: {
        id: "j1_l1_a4_l5_q13",
        topic: "Melden",
        statement: "Notfälle und Beinahe-Unfälle sollte man kurz melden, damit Abläufe verbessert werden können.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Meldung hilft, Ursachen zu beseitigen und Team zu schützen. Typischer Fehler: aus Scham verschweigen. Merksatz: Melden schützt alle.",
        feedbackWrong:
          "Falsch. Warum: Wenn niemand es weiß, ändert sich nichts. Typischer Fehler: 'Ist schon gut gegangen'. Merksatz: Beinahe zählt."
      }
    },

    // 14) Transfer – Reihenfolge Auge (kurz)
    {
      id: "j1_l1_a4_l5_q14",
      topic: "Auge kompakt",
      gameType: "timeline_order",
      gameData: {
        id: "j1_l1_a4_l5_q14",
        topic: "Auge kompakt",
        prompt: "Setze den Kurzablauf fürs Auge in die richtige Reihenfolge.",
        steps: [
          "Spülen",
          "Hilfe holen",
          "SDB/Etikett prüfen",
          "Abklären (wenn nötig)"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst spülen, dann absichern. Typischer Fehler: prüfen vor spülen. Merksatz: Wasser zuerst.",
        feedbackWrong:
          "Nicht ganz. Warum: Spülen ist immer der Start. Typischer Fehler: Reihenfolge vertauschen. Merksatz: Erst retten."
      }
    },

    // 15) Transfer (gap_fill)
    {
      id: "j1_l1_a4_l5_q15",
      topic: "Verschütten",
      gameType: "gap_fill",
      gameData: {
        id: "j1_l1_a4_l5_q15",
        topic: "Verschütten",
        textBefore: "Bei Verschütten gilt: Erst Bereich ",
        correctAnswer: "sichern",
        textAfter: ", dann reinigen.",
        options: ["sichern", "parfümieren", "ignorieren", "filmen"],
        feedbackCorrect:
          "Richtig. Warum: Absicherung verhindert weitere Unfälle. Typischer Fehler: sofort wischen. Merksatz: Sichern vor Wischen.",
        feedbackWrong:
          "Falsch. Warum: Ohne Sicherung riskierst du Rutsch- und Kontaktunfälle. Typischer Fehler: Optik vor Sicherheit. Merksatz: Erst sichern."
      }
    }
  ]
};

export default LEKTION_5;