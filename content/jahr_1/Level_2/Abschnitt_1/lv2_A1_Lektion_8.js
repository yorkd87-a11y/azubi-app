// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_8.js
// A1 Empfang & Service – Lektion 8: Quiz (18 Fragen)

const LEKTION_8 = {
  id: "j1_l2_a1_l8",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Quiz: Empfang & Service (18 Fragen)",
  track: "kundenkontakt_pflege",
  energy: 18,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Premium ist kein Zufall: Du führst den Gast mit Sprache, Struktur, Service und Diskretion – in jeder Situation.",
    keyPoints: [
      "Präsenz & Begrüßung: warm, ruhig, professionell.",
      "Flow: Abgleich → Orientierung → Jacke/Platz/Getränk → nächster Schritt.",
      "Wartezeit & Datenschutz: klar informieren, diskret handeln, keine Auskünfte an Dritte."
    ],
    practiceTask:
      "Nach dem Quiz: Spiele 1 reale Empfangssituation als Rollenspiel (Gast/Empfang) und nutze die Standardsätze für Abgleich, Service und Wartezeit.",
    reflectionQuestion:
      "Welcher Punkt ist dein größter Hebel für mehr Premium-Wirkung: Tonfall, Reihenfolge oder Klarheit?"
  },

  questions: [
    // 1) gap_fill (Fachwort)
    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l8_q1",
        topic: "Fachwort Empfang",
        textBefore: "Der kurze, professionelle Check von Name und Termin heißt ",
        correctAnswer: "Terminabgleich",
        textAfter: ".",
        options: ["Terminabgleich", "Smalltalk", "Zuruf", "Improvisation"],
        feedbackCorrect:
          "Richtig. Warum richtig: Terminabgleich verhindert Verwechslungen und wirkt souverän im Premium-Flow. Typischer Fehler: raten oder laut nachfragen. Merksatz: Abgleich = Sicherheit.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Der Fachbegriff ist Terminabgleich – er sorgt für Ruhe und Fehlervermeidung. Typischer Fehler: „Name?“ oder Kalender offen zeigen. Merksatz: Abgleich = Sicherheit."
      }
    },

    // 2) scenario_choice
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l8_q2",
        topic: "Erster Eindruck",
        situationTitle: "Gast kommt rein – du bist am PC",
        situationText:
          "Du tippst gerade etwas am PC. Ein Gast tritt ein und schaut suchend. Was ist Premium?",
        options: [
          "Weiter tippen, erst später begrüßen.",
          "Kurz nicken, ohne etwas zu sagen.",
          "Blickkontakt + Lächeln: „Herzlich willkommen. Einen Moment bitte – ich bin gleich persönlich für Sie da.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Wirkt wie Ignorieren – der Gast fühlt sich nicht gesehen.",
          "Zu wenig Führung – Unsicherheit bleibt.",
          "Anerkennung + Klarheit + persönlicher Ton – Premium."
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Ein Satz mit Präsenz schützt die Premium-Wirkung sofort. Typischer Fehler: Schweigen oder nur nicken. Merksatz: Erst Mensch, dann System.",
        feedbackWrong:
          "Nicht optimal. Warum richtig wäre: Premium braucht Anerkennung und klare Führung – sonst wächst Unruhe. Typischer Fehler: „ich bin gleich da“ ohne Blickkontakt. Merksatz: Erst Mensch, dann System."
      }
    },

    // 3) match_pairs
    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l8_q3",
        topic: "Premium-Flow verstehen",
        prompt: "Ordne dem Baustein das passende Ziel zu.",
        pairs: [
          { left: "Begrüßung", right: "Der Gast fühlt sich sofort willkommen" },
          { left: "Terminabgleich", right: "Vermeidet Verwechslungen und schafft Klarheit" },
          { left: "Orientierung geben", right: "Der Gast weiß, was als Nächstes passiert" },
          { left: "Getränk-Auswahl", right: "Service wirkt hochwertig und persönlich" }
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Premium ist Wirkungskette – jeder Baustein löst ein Gefühl aus. Typischer Fehler: Service ohne Struktur. Merksatz: Willkommen → Klarheit → Service.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Der Flow baut Vertrauen auf, Schritt für Schritt. Typischer Fehler: Reihenfolge springen. Merksatz: Willkommen → Klarheit → Service."
      }
    },

    // 4) true_false_swipe
    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l8_q4",
        topic: "Wartezeit",
        statement: "Ein Zeitrahmen in Minuten beruhigt Gäste mehr als das Wort „gleich“.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum richtig: Minuten geben Kontrolle und reduzieren Ärger. Typischer Fehler: „gleich“ sagen und dann werden es 10 Minuten. Merksatz: Minuten statt „gleich“.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Minuten sind konkret – „gleich“ ist oft falsch und macht unruhig. Typischer Fehler: zu optimistische Versprechen. Merksatz: Minuten statt „gleich“."
      }
    },

    // 5) sentence_builder (Audio)
    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l8_q5",
        topic: "Standardsatz Service",
        question: "Baue den Premium-Satz für Getränke-Auswahl.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Möchten Sie stilles Wasser Sprudel oder einen Kaffee",
        extraWords: ["egal", "irgendwann", "hauptsache"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum richtig: Auswahl wirkt hochwertig und führt den Gast ohne Druck. Typischer Fehler: „Wollen Sie was trinken?“ klingt billig. Merksatz: Premium bietet Auswahl.",
        feedbackWrong:
          "Noch nicht optimal. Warum richtig wäre: Der Satz muss klar und wertig sein – mit Auswahl. Typischer Fehler: zu umgangssprachlich. Merksatz: Premium bietet Auswahl."
      }
    },

    // 6) multiple_choice
    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l8_q6",
        topic: "Premium-Signale",
        question: "Welche Punkte stärken den Premium-Eindruck am Empfang? (Mehrere richtig)",
        options: [
          "Aufrechte Haltung, ruhige Stimme",
          "Gästenamen laut durch den Salon rufen",
          "Aufgeräumter Empfang, saubere Gläser/Tassen",
          "Begleiten statt nur zeigen",
          "Private Teamthemen am Tresen besprechen"
        ],
        correctIndices: [0, 2, 3],
        feedbackCorrect:
          "Richtig. Warum richtig: Premium wirkt durch Ruhe, Ordnung, Führung – und diskrete Kommunikation. Typischer Fehler: Lautstärke/Privates am Empfang. Merksatz: Ruhig, klar, ordentlich.",
        feedbackPartially:
          "Teilweise richtig. Warum richtig wäre: Premium braucht Ruhe, Ordnung und Führung – ohne Lautstärke und Privatthemen. Typischer Fehler: No-Go-Signale übersehen. Merksatz: Ruhig, klar, ordentlich.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Premium ist Haltung + Ordnung + Führung. Typischer Fehler: Laut rufen oder privat reden. Merksatz: Ruhig, klar, ordentlich."
      }
    },

    // 7) category_sort
    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l8_q7",
        topic: "Wartezeit-Kommunikation",
        prompt: "Sortiere in „Premium“ oder „No-Go“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go" }
        ],
        items: [
          { text: "„Danke für Ihre Geduld. Es dauert noch ca. 5 Minuten.“", categoryId: "premium" },
          { text: "„Warten Sie halt.“", categoryId: "nogo" },
          { text: "„Ich halte Sie auf dem Laufenden.“", categoryId: "premium" },
          { text: "Schweigen und hoffen, dass es nicht auffällt", categoryId: "nogo" },
          { text: "„Möchten Sie in der Zwischenzeit noch Wasser oder einen Kaffee?“", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Info + Wertschätzung + Service senken Stress sofort. Typischer Fehler: Abwehr oder Schweigen. Merksatz: Info nimmt Druck.",
        feedbackWrong:
          "Noch nicht ganz. Warum richtig wäre: Premium ist proaktiv und wertschätzend, nicht hart oder still. Typischer Fehler: „ist halt so“. Merksatz: Info nimmt Druck."
      }
    },

    // 8) order_steps
    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l8_q8",
        topic: "Service-Ablauf",
        prompt: "Bringe den Service-Flow in die beste Reihenfolge.",
        items: [
          "Getränk-Auswahl anbieten",
          "Jacke annehmen/aufhängen",
          "Zum Platz begleiten",
          "Nächsten Schritt nennen („Ihr Stylist holt Sie gleich ab.“)"
        ],
        correctOrder: [
          "Jacke annehmen/aufhängen",
          "Zum Platz begleiten",
          "Getränk-Auswahl anbieten",
          "Nächsten Schritt nennen („Ihr Stylist holt Sie gleich ab.“)"
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Der Gast wird geführt, versorgt und weiß, was passiert – ohne Suchen. Typischer Fehler: „setzen Sie sich irgendwo“ ohne Orientierung. Merksatz: Flow schafft Ruhe.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Erst Ankommen, dann Service, dann Sicherheit. Typischer Fehler: Reihenfolge springt. Merksatz: Flow schafft Ruhe."
      }
    },

    // 9) gap_fill (2 Fachwörter)
    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l8_q9",
        topic: "Präsenz (2 Fachwörter)",
        textBefore: "Premium-Präsenz startet mit ",
        correctAnswer: "Blickkontakt und Lächeln",
        textAfter: ".",
        options: [
          "Blickkontakt und Lächeln",
          "Hektik und Zuruf",
          "Blick aufs Handy",
          "Flapsiger Ton"
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Blickkontakt und Lächeln signalisieren sofort Sicherheit und Wertschätzung. Typischer Fehler: nebenbei arbeiten und den Gast „hängen lassen“. Merksatz: Erst sehen, dann sprechen.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Die zwei Basics sind Blickkontakt und Lächeln – das ist Premium-Startsignal. Typischer Fehler: Bildschirm vor Gast. Merksatz: Erst sehen, dann sprechen."
      }
    },

    // 10) scenario_choice
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l8_q10",
        topic: "Wartezeit managen",
        situationTitle: "Gast fragt: „Warum dauert das?“",
        situationText:
          "Der Gast fragt freundlich nach dem Grund. Du willst premium bleiben und intern nichts ausplaudern.",
        options: [
          "„Weil heute alles schief läuft.“",
          "„Die Kollegin ist schuld.“",
          "„Danke für Ihre Geduld. Wir nehmen uns gerade bei einem Termin noch die nötige Zeit für Qualität. Es dauert noch ca. 10 Minuten – ich halte Sie gern auf dem Laufenden.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Wirkt chaotisch und zerstört Vertrauen.",
          "Unprofessionell und respektlos.",
          "Wertig: Fokus auf Qualität + Zeitrahmen + Sicherheit."
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Du schützt Team/Marke, betonst Qualität und gibst klare Info. Typischer Fehler: Internes erzählen oder Schuldzuweisen. Merksatz: Nach außen ruhig und wertig.",
        feedbackWrong:
          "Nicht optimal. Warum richtig wäre: Premium erklärt ohne Drama und ohne Schuld. Typischer Fehler: intern plaudern. Merksatz: Nach außen ruhig und wertig."
      }
    },

    // 11) match_pairs
    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l8_q11",
        topic: "Datenschutz Praxis",
        prompt: "Ordne Risiko und passende Maßnahme zu.",
        pairs: [
          { left: "Telefon: „Ist Frau X bei euch?“", right: "Keine Auskunft geben, Nachricht/Rückruf anbieten" },
          { left: "Offener Bildschirm mit Terminen", right: "Sperren / so ausrichten, dass niemand mitliest" },
          { left: "Ausdrucke mit Kundendaten", right: "Wegräumen/umdrehen und sicher entsorgen" },
          { left: "Sensible Themen am Empfang", right: "Leise sprechen und zur Seite bitten" }
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Datenschutz ist Premium-Vertrauen – kleine Standards verhindern große Probleme. Typischer Fehler: „nur kurz“ und dann liegen Daten offen. Merksatz: Sichtbares ist Risiko.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Zu jedem Risiko gibt es eine Standardmaßnahme – so bleibt es sicher und ruhig. Typischer Fehler: improvisieren. Merksatz: Sichtbares ist Risiko."
      }
    },

    // 12) true_false_swipe
    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l8_q12",
        topic: "Diskretion",
        statement: "Wenn es voll ist, ist es okay, Termine anderer Gäste laut zu nennen, damit es schneller geht.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum richtig: Lautes Nennen macht Termine/Infos hörbar – Vertrauensverlust. Typischer Fehler: Tempo über Diskretion stellen. Merksatz: Premium bleibt leise.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Diskretion gilt immer – gerade wenn es voll ist. Typischer Fehler: laut werden, weil es schneller wirkt. Merksatz: Premium bleibt leise."
      }
    },

    // 13) multiple_choice
    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l8_q13",
        topic: "Getränkeservice",
        question: "Was gehört zu Premium-Getränkeservice? (Mehrere richtig)",
        options: [
          "Sauberes Glas/Tasse, ggf. Untersetzer/Serviette",
          "Getränk zügig bringen",
          "Kommentarlos hinstellen und sofort weggehen",
          "Auswahl anbieten (stilles Wasser/Sprudel/Kaffee)",
          "Am Tresen nebenbei private Themen diskutieren"
        ],
        correctIndices: [0, 1, 3],
        feedbackCorrect:
          "Richtig. Warum richtig: Premium ist Sorgfalt + Tempo + ruhige Präsenz. Typischer Fehler: lieblos servieren oder privat reden. Merksatz: Service ist leise Perfektion.",
        feedbackPartially:
          "Teilweise richtig. Warum richtig wäre: Sorgfalt, Tempo und Auswahl sind Pflicht – Lieblosigkeit wirkt billig. Typischer Fehler: kommentarlos/privat. Merksatz: Service ist leise Perfektion.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Premium-Getränk heißt sauber, zügig, mit Auswahl – diskret. Typischer Fehler: „Hauptsache steht da“. Merksatz: Service ist leise Perfektion."
      }
    },

    // 14) category_sort
    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l8_q14",
        topic: "Telefon & Auskunft",
        prompt: "Sortiere in „Erlaubt“ oder „Nicht erlaubt“ (Datenschutz am Empfang).",
        categories: [
          { id: "allowed", label: "Erlaubt" },
          { id: "not_allowed", label: "Nicht erlaubt" }
        ],
        items: [
          { text: "Nachricht aufnehmen: „Ich gebe es gern weiter.“", categoryId: "allowed" },
          { text: "Anwesenheit bestätigen: „Ja, sie ist gerade da.“", categoryId: "not_allowed" },
          { text: "Rückruf anbieten: „Sie kann sich gern bei Ihnen melden.“", categoryId: "allowed" },
          { text: "Terminzeit nennen: „Sie hat um 14:00 Uhr.“", categoryId: "not_allowed" },
          { text: "Diskret bleiben: „Dazu kann ich keine Auskunft geben.“", categoryId: "allowed" }
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Du schützt personenbezogene Daten und bleibst trotzdem serviceorientiert. Typischer Fehler: aus Hilfsbereitschaft zu viel sagen. Merksatz: Keine Auskunft – immer Lösung anbieten.",
        feedbackWrong:
          "Noch nicht ganz. Warum richtig wäre: Termine/Anwesenheit sind vertraulich. Typischer Fehler: „nur kurz bestätigen“. Merksatz: Keine Auskunft – immer Lösung anbieten."
      }
    },

    // 15) order_steps
    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l8_q15",
        topic: "Empfang in 60 Sekunden",
        prompt: "Bringe den 60-Sekunden-Empfang in die beste Reihenfolge.",
        items: [
          "Herzlich willkommen heißen",
          "Name + Uhrzeit diskret abgleichen",
          "Blickkontakt + Lächeln (Präsenz)",
          "Orientierung geben (Ablauf/Platz)",
          "Service anbieten (Jacke/Getränk-Auswahl)"
        ],
        correctOrder: [
          "Blickkontakt + Lächeln (Präsenz)",
          "Herzlich willkommen heißen",
          "Name + Uhrzeit diskret abgleichen",
          "Orientierung geben (Ablauf/Platz)",
          "Service anbieten (Jacke/Getränk-Auswahl)"
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Erst Verbindung, dann Struktur, dann Service – so wirkt es mühelos premium. Typischer Fehler: PC/Organisation vor Begrüßung. Merksatz: Verbindung → Struktur → Service.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Ohne Präsenz zuerst wirkt es kalt oder hektisch. Typischer Fehler: Struktur ohne Verbindung. Merksatz: Verbindung → Struktur → Service."
      }
    },

    // 16) gap_fill (3 Fachwörter)
    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l8_q16",
        topic: "3 Basics (3 Fachwörter)",
        textBefore: "Die 3 Basics am Premium-Empfang sind: ",
        correctAnswer: "Präsenz, Struktur, Service",
        textAfter: ".",
        options: [
          "Präsenz, Struktur, Service",
          "Tempo, Druck, Zuruf",
          "Witz, Chaos, Impro",
          "Rabatt, Diskussion, Drama"
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Diese 3 Basics steuern Wirkung und Vertrauen in Sekunden. Typischer Fehler: nur „nett“ sein ohne Struktur. Merksatz: Präsenz führt, Struktur ordnet, Service veredelt.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Die 3 Fachwörter sind Präsenz, Struktur, Service – das ist Premium-Grundlage. Typischer Fehler: Hektik statt Führung. Merksatz: Präsenz führt, Struktur ordnet, Service veredelt."
      }
    },

    // 17) scenario_choice
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l8_q17",
        topic: "Diskretion am Tresen",
        situationTitle: "Gast spricht über Medikamente/Kopfhaut – andere hören mit",
        situationText:
          "Am Empfang stehen weitere Personen. Der Gast nennt sensible Infos. Was ist Premium?",
        options: [
          "Du fragst direkt am Tresen nach Details, damit du alles weißt.",
          "Du wechselst das Thema und tust so, als wäre nichts.",
          "Du sagst ruhig: „Verstanden. Darf ich Sie kurz zur Seite bitten, dann besprechen wir das diskret.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "No-Go: sensible Informationen gehören nicht in den Empfangsbereich.",
          "Wirkt kalt und hilft nicht.",
          "Diskret führen, ohne zu beschämen – Premium."
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Du schützt Privatsphäre und hältst Premium-Vertrauen hoch. Typischer Fehler: Details öffentlich klären. Merksatz: Erst verlagern, dann vertiefen.",
        feedbackWrong:
          "Nicht optimal. Warum richtig wäre: Sensibles gehört aus dem Empfangsbereich raus. Typischer Fehler: zu neugierig am Tresen. Merksatz: Erst verlagern, dann vertiefen."
      }
    },

    // 18) timeline_order
    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l8_q18",
        topic: "Mini-Dialog (Premium)",
        prompt: "Bringe den Dialog in eine premium Reihenfolge.",
        steps: [
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Darf ich kurz Ihren Namen und die Uhrzeit Ihres Termins abgleichen?“",
          "„Ich begleite Sie kurz zu Ihrem Platz.“",
          "„Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“",
          "„Ihr Stylist holt Sie gleich ab.“"
        ],
        feedbackCorrect:
          "Richtig. Warum richtig: Der Gast wird geführt, versorgt und weiß, was passiert – ohne Unklarheit. Typischer Fehler: Service ohne Abgleich oder ohne Ablaufhinweis. Merksatz: Erst klären, dann verwöhnen.",
        feedbackWrong:
          "Nicht ganz. Warum richtig wäre: Reihenfolge schafft Ruhe und Wertigkeit. Typischer Fehler: Sätze springen lassen. Merksatz: Erst klären, dann verwöhnen."
      }
    }
  ]
};

export default LEKTION_8;