// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_3.js
// A1 Empfang & Service – Lektion 3: Termin/Name abgleichen + Orientierung geben

const LEKTION_3 = {
  id: "j1_l2_a1_l3",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Termin/Name abgleichen + Orientierung geben",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Premium wirkt wie ein Hotel: Der Gast wird sicher geführt – ohne Unsicherheit, ohne Suchen, ohne „Ähm…“.",
    keyPoints: [
      "Abgleich kurz & wertig: Name + Terminzeit (ggf. Nachname) – ruhig, diskret, ohne Verhör-Ton.",
      "Orientierung aktiv geben: Garderobe, Platz, Ablauf („Ihr Stylist holt Sie gleich ab“).",
      "Führung statt Fingerzeigen: begleiten oder klar beschreiben – ruhig, freundlich, eindeutig."
    ],
    practiceTask:
      "Trainiere heute 5 Mini-Abläufe am Empfang: 1) Willkommen, 2) Name + Uhrzeit abgleichen, 3) Orientierung geben („Ich begleite Sie…“). Achte auf ruhiges Tempo.",
    reflectionQuestion:
      "Wo verlierst du am Empfang am ehesten Premium-Wirkung: Abgleich, Orientierung oder Tempo?"
  },

  questions: [
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l3_q1",
        topic: "Abgleich in der Praxis",
        situationTitle: "Zwei Gäste kommen fast gleichzeitig",
        situationText: [
          "Zwei Gäste betreten kurz nacheinander den Salon.",
          "Du willst sicherstellen, dass niemand verwechselt wird – und es bleibt premium."
        ],
        options: [
          "Du rufst laut: „Wie heißen Sie beide?“",
          "Du begrüßt den ersten Gast, fragst ruhig: „Darf ich kurz Ihren Namen und die Uhrzeit Ihres Termins abgleichen?“",
          "Du schaust in den Kalender und entscheidest nach Gefühl, wer dran ist."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Wirkt laut, unruhig und nicht wertig – Risiko für Verwechslung und unangenehme Situation.",
          "Kurz, strukturiert, professionell – reduziert Fehler und wirkt souverän.",
          "Verwechslung ist vorprogrammiert – kein Premium-Standard."
        ],
        feedbackCorrect:
          "Richtig. Warum: Name + Uhrzeit geben Sicherheit und vermeiden Verwechslungen. Typischer Fehler: laut fragen oder raten. Merksatz: Erst abgleichen, dann begleiten.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt: ruhig führen und Fehler vermeiden. Typischer Fehler: laut rufen oder nach Gefühl handeln. Merksatz: Erst abgleichen, dann begleiten."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l3_q2",
        topic: "Premium-Formulierung",
        question: "Welche Formulierung klingt am professionellsten für den Terminabgleich?",
        options: [
          "„Name?“",
          "„Wie heißen Sie denn?“",
          "„Darf ich kurz Ihren Namen und die Uhrzeit Ihres Termins abgleichen?“"
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Höflich, strukturiert, ohne Druck. Typischer Fehler: Ein-Wort-Abfrage wirkt hart. Merksatz: Fragen statt fordern.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium klingt ruhig und strukturiert. Typischer Fehler: zu knapp oder zu privat. Merksatz: Fragen statt fordern."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l3_q3",
        topic: "Fachwort",
        textBefore: "Der professionelle Name- und Termincheck heißt ",
        correctAnswer: "Terminabgleich",
        textAfter: ".",
        options: ["Terminabgleich", "Durcheinander", "Spontanrunde", "Zuruf"],
        feedbackCorrect:
          "Richtig. Warum: Terminabgleich ist der kurze, strukturierte Check am Empfang. Typischer Fehler: raten oder zu lange diskutieren. Merksatz: Abgleich = Sicherheit.",
        feedbackWrong:
          "Nicht ganz. Warum: Das Fachwort ist Terminabgleich. Typischer Fehler: den Check unterschätzen. Merksatz: Abgleich = Sicherheit."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l3_q4",
        topic: "Wirkung verstehen",
        prompt: "Ordne dem Verhalten die passende Wirkung zu.",
        pairs: [
          { left: "Name + Uhrzeit abgleichen", right: "Vermeidet Verwechslungen und wirkt souverän" },
          { left: "Orientierung geben (Ablauf/Platz)", right: "Der Gast fühlt sich sicher und ruhig" },
          { left: "Begleiten statt nur zeigen", right: "Premium-Gefühl: wertig und persönlich" },
          { left: "Vage Ansage („setzen Sie sich irgendwo hin“)", right: "Unsicherheit und unruhige Stimmung" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium ist planbar – der Gast soll nicht raten müssen. Typischer Fehler: vage Sprache. Merksatz: Klarheit schafft Ruhe.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Jede Kleinigkeit hat Wirkung auf die Wertigkeit. Typischer Fehler: vage Ansagen. Merksatz: Klarheit schafft Ruhe."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l3_q5",
        topic: "Premium vs. No-Go",
        prompt: "Sortiere die Aussagen in „Premium“ oder „No-Go“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go" }
        ],
        items: [
          { text: "„Darf ich kurz Ihren Namen und die Uhrzeit abgleichen?“", categoryId: "premium" },
          { text: "„Setzen Sie sich irgendwo hin.“", categoryId: "nogo" },
          { text: "„Ich begleite Sie kurz zu Ihrem Platz.“", categoryId: "premium" },
          { text: "„Ich weiß nicht… warten Sie mal.“", categoryId: "nogo" },
          { text: "„Ihr Stylist holt Sie gleich ab.“", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium ist klar, ruhig und führt den Gast. Typischer Fehler: „irgendwo/irgendwann“-Sprache. Merksatz: Keine Unschärfe am Empfang.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Unklare Formulierungen wirken sofort weniger hochwertig. Typischer Fehler: vage Aussagen. Merksatz: Keine Unschärfe am Empfang."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l3_q6",
        topic: "Diskreter Abgleich",
        statement: "Wenn du unsicher bist, rufst du den Namen laut in den Raum, damit es schneller geht.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Lautes Rufen wirkt unruhig und wenig wertig. Typischer Fehler: Geschwindigkeit über Klasse stellen. Merksatz: Premium bleibt ruhig.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium braucht Ruhe und Kontrolle – nicht Zuruf. Typischer Fehler: Hektik als Effizienz. Merksatz: Premium bleibt ruhig."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l3_q7",
        topic: "Standardsatz Abgleich",
        question: "Baue den Abgleich-Satz.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Darf ich kurz Ihren Namen und die Uhrzeit Ihres Termins abgleichen",
        extraWords: ["egal", "irgendwann", "wie auch immer"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Der Satz ist höflich, klar und professionell. Typischer Fehler: zu kurz („Name?“). Merksatz: Struktur klingt premium.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Premium-Sätze sind ruhig und vollständig. Typischer Fehler: Ein-Wort-Abfragen. Merksatz: Struktur klingt premium."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l3_q8",
        topic: "Orientierung geben",
        question: "Welche Infos helfen dem Gast direkt – ohne zu überfrachten? (Mehrere richtig)",
        options: [
          "Wo Garderobe/Jacke hin kann",
          "Wie der Ablauf ist („Ihr Stylist holt Sie gleich ab“)",
          "„Warten Sie einfach mal, ich melde mich“",
          "Wo der Platz ist / kurz begleiten",
          "Lange Erklärung zu internen Abläufen im Team"
        ],
        correctIndices: [0, 1, 3],
        feedbackCorrect:
          "Richtig. Warum: Orientierung heißt: kurz, relevant, beruhigend. Typischer Fehler: zu viel oder zu vage. Merksatz: Wenig Worte, viel Führung.",
        feedbackPartially:
          "Teilweise richtig. Warum: Orientierung soll helfen, nicht verwirren. Typischer Fehler: zu viel oder zu vage. Merksatz: Wenig Worte, viel Führung.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium-Orientierung ist kurz und relevant. Typischer Fehler: vage Ansagen oder zu lange Erklärungen. Merksatz: Wenig Worte, viel Führung."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l3_q9",
        topic: "Premium-Ablauf",
        prompt: "Bringe den Empfangsablauf in die beste Reihenfolge.",
        items: [
          "Orientierung geben (Ablauf/Platz)",
          "Willkommen heißen",
          "Name + Uhrzeit abgleichen",
          "Begleiten oder klar zeigen"
        ],
        correctOrder: [
          "Willkommen heißen",
          "Name + Uhrzeit abgleichen",
          "Orientierung geben (Ablauf/Platz)",
          "Begleiten oder klar zeigen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Willkommen → Struktur → Orientierung → Führung. Typischer Fehler: direkt zeigen, ohne Klarheit. Merksatz: Erst klären, dann führen.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne Struktur wirkt es hektisch. Typischer Fehler: Schritte springen. Merksatz: Erst klären, dann führen."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l3_q10",
        topic: "Zu früh da",
        situationTitle: "Gast ist 20 Minuten zu früh",
        situationText:
          "Der Gast ist deutlich zu früh. Du willst Premium halten und gleichzeitig realistisch bleiben.",
        options: [
          "„Dann warten Sie halt.“",
          "„Kein Problem. Ihr Termin ist um 14:00 Uhr. Sie können gern schon entspannt ankommen – ich begleite Sie kurz in den Lounge-Bereich.“",
          "„Sind Sie sicher, dass Sie richtig sind?“"
        ],
        correctIndex: 1,
        optionExplanations: [
          "Klingt hart und abweisend – kein Premium.",
          "Wertig, klar, freundlich – führt den Gast ohne Stress.",
          "Erzeugt Unsicherheit und wirkt unprofessionell."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du nennst Zeit, gibst Ruhe und Orientierung. Typischer Fehler: abwertende Warte-Formulierungen. Merksatz: Premium bleibt freundlich – auch bei Abweichungen.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt: respektvoll erklären und ruhig führen. Typischer Fehler: abweisen oder verunsichern. Merksatz: Premium bleibt freundlich – auch bei Abweichungen."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l3_q11",
        topic: "Orientierung",
        textBefore: "„Ich begleite Sie kurz ",
        correctAnswer: "zu Ihrem Platz",
        textAfter: ".“",
        options: ["zu Ihrem Platz", "irgendwohin", "später", "nach draußen"],
        feedbackCorrect:
          "Richtig. Warum: Begleitung ist ein Premium-Signal und verhindert Suchen. Typischer Fehler: „Da hinten irgendwo“. Merksatz: Begleiten wirkt wertig.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Premium-Satz ist klar: „zu Ihrem Platz“. Typischer Fehler: ungenau zeigen. Merksatz: Begleiten wirkt wertig."
      }
    },

    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l3_q12",
        topic: "Mini-Dialog",
        prompt: "Bringe den Mini-Dialog in die richtige Reihenfolge.",
        steps: [
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Darf ich kurz Ihren Namen und die Uhrzeit Ihres Termins abgleichen?“",
          "„Perfekt, vielen Dank.“",
          "„Ich begleite Sie kurz zu Ihrem Platz – Ihr Stylist holt Sie gleich ab.“"
        ],
        feedbackCorrect:
          "Richtig. Warum: Das ist ein kompletter Premium-Flow in unter 20 Sekunden. Typischer Fehler: Orientierung vergessen. Merksatz: Kurz + klar + geführt.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne Reihenfolge wirkt es unruhig. Typischer Fehler: Orientierung oder Dank weglassen. Merksatz: Kurz + klar + geführt."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l3_q13",
        topic: "Wenn du den Termin nicht findest",
        question: "Du findest den Namen im Kalender nicht sofort. Was ist die beste Premium-Reaktion?",
        options: [
          "„Dann stehen Sie nicht drin.“",
          "„Einen Moment bitte – darf ich kurz den Nachnamen und die Terminzeit prüfen? Ich kläre das sofort für Sie.“",
          "Du fragst mehrfach laut nach, bis es passt."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Du bleibst ruhig, übernimmst Verantwortung und klärst strukturiert. Typischer Fehler: Schuld geben oder laut werden. Merksatz: Problem übernehmen, Ruhe behalten.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt: ruhig bleiben und Lösung führen. Typischer Fehler: Schuldzuweisung oder Lautstärke. Merksatz: Problem übernehmen, Ruhe behalten."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l3_q14",
        topic: "Typische Empfangsprobleme",
        prompt: "Ordne Problem und Premium-Lösung zu.",
        pairs: [
          { left: "Zwei Gäste mit gleichem Vornamen", right: "Nachname + Uhrzeit diskret abgleichen" },
          { left: "Gast wirkt unsicher und schaut suchend", right: "Aktiv begrüßen und kurz begleiten" },
          { left: "Gast kommt zu früh", right: "Zeit nennen + Lounge/Platz anbieten" },
          { left: "Termin nicht sofort auffindbar", right: "Ruhig nach Nachname + Uhrzeit fragen und klären" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium ist vorbereitet auf Standardfälle. Typischer Fehler: improvisieren ohne Struktur. Merksatz: Standardfälle brauchen Standardsätze.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Mit klaren Lösungen bleibt der Empfang souverän. Typischer Fehler: unstrukturiert improvisieren. Merksatz: Standardfälle brauchen Standardsätze."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l3_q15",
        topic: "Orientierung konkret",
        situationTitle: "Der Gast fragt: „Wo kann ich meine Jacke lassen?“",
        situationText:
          "Du willst kurz antworten und gleichzeitig Premium ausstrahlen.",
        options: [
          "„Da.“ (du zeigst mit dem Finger)",
          "„Hängen Sie die irgendwo hin.“",
          "„Sehr gern – ich nehme sie kurz für Sie. Kommen Sie, ich begleite Sie.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Fingerzeigen wirkt oft knapp und wenig wertig, besonders ohne Begleitung.",
          "Zu vage und nicht serviceorientiert.",
          "Service + Führung + Wertigkeit – Premium."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du nimmst ab, führst und sparst dem Gast Stress. Typischer Fehler: nur zeigen statt begleiten. Merksatz: Premium nimmt ab und führt.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt: aktiv helfen und klar führen. Typischer Fehler: vage oder knappe Gesten. Merksatz: Premium nimmt ab und führt."
      }
    }
  ]
};

export default LEKTION_3;