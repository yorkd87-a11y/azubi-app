// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_6.js
// A1 Empfang & Service – Lektion 6: Datenschutz/Diskretion am Empfang (Praxis)

const LEKTION_6 = {
  id: "j1_l2_a1_l6",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Datenschutz/Diskretion am Empfang (Praxis)",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Premium heißt: Vertrauen schützen. Datenschutz und Diskretion sind nicht „extra“ – sie sind Teil der Servicequalität.",
    keyPoints: [
      "Keine Auskünfte über Termine/Anwesenheit an Dritte – auch nicht „nur kurz“.",
      "Leise sprechen, sensible Themen aus dem Empfangsbereich rausführen (Seite/Nebenraum).",
      "Bildschirm, Kalender, Ausdrucke: so sichern, dass niemand mitlesen kann (sperren, umdrehen, wegräumen)."
    ],
    practiceTask:
      "Mach heute einen 60-Sekunden-Check am Empfang: Bildschirmwinkel, offene Listen/Papiere, Lautstärke, Gesprächsthemen. Notiere 1 Sache, die du sofort verbesserst.",
    reflectionQuestion:
      "Wo ist bei euch am Empfang das größte Risiko: Bildschirm, Telefon, Papier oder Lautstärke?"
  },

  questions: [
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l6_q1",
        topic: "Telefon & Dritte",
        situationTitle: "Anruf: „Ist Frau Müller gerade bei euch?“",
        situationText: [
          "Jemand ruft an und fragt am Telefon: „Ist Frau Müller gerade bei euch im Salon?“",
          "Du kennst die Anrufer-Person nicht."
        ],
        options: [
          "„Ja, sie ist gerade da. Soll ich sie holen?“",
          "„Dazu kann ich keine Auskunft geben. Ich kann gern eine Nachricht aufnehmen oder Sie bitten, dass Frau Müller sich meldet.“",
          "„Warten Sie, ich schaue mal in den Kalender.“"
        ],
        correctIndex: 1,
        optionExplanations: [
          "No-Go: Du bestätigst Anwesenheit – das ist personenbezogene Information.",
          "Premium + Datenschutz: Keine Bestätigung, aber lösungsorientiert.",
          "No-Go: Kalenderdaten sind vertraulich."
        ],
        feedbackCorrect:
          "Richtig. Warum: Anwesenheit/Termin sind personenbezogene Daten. Typischer Fehler: „nur kurz helfen“ und dabei Daten preisgeben. Merksatz: Keine Auskunft an Dritte – immer Nachricht anbieten.",
        feedbackWrong:
          "Nicht optimal. Warum: Anwesenheit/Termine sind vertraulich. Typischer Fehler: aus Hilfsbereitschaft zu viel sagen. Merksatz: Keine Auskunft an Dritte – immer Nachricht anbieten."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l6_q2",
        topic: "Diskreter Umgang",
        question: "Ein Gast beginnt am Empfang ein sensibles Thema (z. B. Haarverlust/Medikation) laut zu erzählen. Was ist premium?",
        options: [
          "Du hörst zu und fragst laut nach Details, damit du alles verstehst.",
          "Du unterbrichst unfreundlich: „Das sagen Sie bitte nicht so laut.“",
          "Du reagierst ruhig: „Ich verstehe – darf ich Sie kurz zur Seite bitten, dann besprechen wir das diskret.“"
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Du schützt Privatsphäre und bleibst wertschätzend. Typischer Fehler: am Empfang ins Detail gehen. Merksatz: Sensibles raus aus dem Empfangsbereich.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium heißt: diskret führen, ohne zu beschämen. Typischer Fehler: laut nachfragen oder hart abwürgen. Merksatz: Sensibles raus aus dem Empfangsbereich."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l6_q3",
        topic: "Grundprinzip",
        textBefore: "Personenbezogene Daten gibst du nur an ",
        correctAnswer: "Berechtigte",
        textAfter: " weiter.",
        options: ["Berechtigte", "alle", "Bekannte", "Zuschauer"],
        feedbackCorrect:
          "Richtig. Warum: Datenschutz bedeutet: nur an berechtigte Personen und nur so viel wie nötig. Typischer Fehler: „wird schon passen“. Merksatz: Berechtigung prüfen, dann sprechen.",
        feedbackWrong:
          "Nicht ganz. Warum: Das Prinzip ist „nur an Berechtigte“. Typischer Fehler: aus Gewohnheit Infos rausgeben. Merksatz: Berechtigung prüfen, dann sprechen."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l6_q4",
        topic: "Premium vs. No-Go",
        prompt: "Sortiere die Handlungen in „Premium“ oder „No-Go“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go" }
        ],
        items: [
          { text: "Bildschirm sperren, sobald du den Empfang verlässt", categoryId: "premium" },
          { text: "Terminkalender offen lassen, weil „nur kurz“", categoryId: "nogo" },
          { text: "Sensible Themen diskret zur Seite/Nebenraum verlagern", categoryId: "premium" },
          { text: "Namen/Termine laut durch den Salon rufen", categoryId: "nogo" },
          { text: "Ausdrucke mit Kundendaten sofort wegräumen/umdrehen", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium wirkt über Schutz und Ruhe. Typischer Fehler: „nur kurz“ führt zu Datenpannen. Merksatz: Was offen liegt, ist ein Risiko.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Datenschutz ist Alltag, nicht Ausnahme. Typischer Fehler: offen lassen aus Routine. Merksatz: Was offen liegt, ist ein Risiko."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l6_q5",
        topic: "Risiko → Maßnahme",
        prompt: "Ordne dem Risiko die passende Maßnahme zu.",
        pairs: [
          { left: "Offener Bildschirm mit Terminen", right: "Sperren / Sichtschutz / Bildschirm so drehen, dass niemand mitliest" },
          { left: "Ausdruck mit Kundendaten", right: "Umdrehen, wegräumen, später sicher entsorgen" },
          { left: "Sensible Infos am Empfang", right: "Leiser Ton + zur Seite bitten / Nebenraum" },
          { left: "Telefonanfrage von Dritten", right: "Keine Auskunft – Nachricht aufnehmen oder Rückruf anbieten" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Du reduzierst Risiken mit einfachen Standards. Typischer Fehler: erst reagieren, wenn etwas passiert ist. Merksatz: Standard schlägt Stress.",
        feedbackWrong:
          "Nicht ganz. Warum: Zu jedem Risiko gibt es eine klare Standardmaßnahme. Typischer Fehler: improvisieren. Merksatz: Standard schlägt Stress."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l6_q6",
        topic: "Diskretion",
        statement: "Es ist okay, Preise oder Termine anderer Gäste laut zu nennen, wenn es schnell gehen muss.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Termine/Preise sind personenbezogen bzw. vertraulich im Kontext. Typischer Fehler: Geschwindigkeit über Diskretion. Merksatz: Premium bleibt leise.",
        feedbackWrong:
          "Nicht ganz. Warum: Lautes Nennen kann andere mithören – Vertrauensverlust. Typischer Fehler: „schnell“ als Ausrede. Merksatz: Premium bleibt leise."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l6_q7",
        topic: "Standardsatz Diskretion",
        question: "Baue den Premium-Satz, um ein sensibles Thema diskret zu verlagern.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Darf ich Sie kurz zur Seite bitten dann besprechen wir das diskret",
        extraWords: ["egal", "laut", "später"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Wertschätzend, klar, diskret. Typischer Fehler: im Empfangsbereich weiterreden. Merksatz: Diskretion ist Führung.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Der Satz muss ruhig und eindeutig sein. Typischer Fehler: zu indirekt oder zu flapsig. Merksatz: Diskretion ist Führung."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l6_q8",
        topic: "Was sind personenbezogene Daten?",
        question: "Welche Angaben sind personenbezogene Daten im Salon-Kontext? (Mehrere richtig)",
        options: [
          "Name und Telefonnummer",
          "Terminzeit und Dienstleistung",
          "Allergien / Unverträglichkeiten",
          "Produktname im Regal",
          "E-Mail-Adresse"
        ],
        correctIndices: [0, 1, 2, 4],
        feedbackCorrect:
          "Richtig. Warum: Alles, was eine Person identifizierbar macht oder im Kontext zuzuordnen ist, ist sensibel. Typischer Fehler: Termininfo unterschätzen. Merksatz: Kontext macht Daten persönlich.",
        feedbackPartially:
          "Teilweise richtig. Warum: Name, Kontakt, Termin und Gesundheitsinfos sind besonders sensibel. Typischer Fehler: Termin/Service als „harmlos“ sehen. Merksatz: Kontext macht Daten persönlich.",
        feedbackWrong:
          "Nicht ganz. Warum: Viele Infos sind im Kontext personenbezogen (Name, Kontakt, Termin, Allergien). Typischer Fehler: nur Name als Datum sehen. Merksatz: Kontext macht Daten persönlich."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l6_q9",
        topic: "Telefon-Standardprozess",
        prompt: "Ordne die Schritte, wenn jemand am Telefon einen Termin „für jemanden“ erfragt.",
        items: [
          "Keine Termin-/Anwesenheitsauskunft geben",
          "Lösungsangebot: Nachricht aufnehmen oder Rückruf durch die Person selbst",
          "Ruhig und freundlich bleiben (Premium-Ton)",
          "Bei Bedarf: Identität/Berechtigung prüfen (z. B. Person selbst am Telefon)"
        ],
        correctOrder: [
          "Ruhig und freundlich bleiben (Premium-Ton)",
          "Bei Bedarf: Identität/Berechtigung prüfen (z. B. Person selbst am Telefon)",
          "Keine Termin-/Anwesenheitsauskunft geben",
          "Lösungsangebot: Nachricht aufnehmen oder Rückruf durch die Person selbst"
        ],
        feedbackCorrect:
          "Richtig. Warum: Ton + Prüfung + Schutz + Lösung. Typischer Fehler: erst erklären, dann schützen. Merksatz: Freundlich bleiben, Grenzen halten.",
        feedbackWrong:
          "Nicht ganz. Warum: Erst Ton und Prüfung, dann klarer Schutz, dann Lösung. Typischer Fehler: im Gespräch „reinrutschen“. Merksatz: Freundlich bleiben, Grenzen halten."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l6_q10",
        topic: "Empfangssituation",
        situationTitle: "Gast nennt sensible Info laut",
        situationText:
          "Am Empfang stehen mehrere Personen. Der Gast sagt laut: „Ich nehme Medikamente und habe Kopfhautprobleme.“",
        options: [
          "Du fragst laut nach: „Welche Medikamente genau?“",
          "Du tust so, als hättest du es nicht gehört, und wechselst das Thema.",
          "Du reagierst ruhig: „Verstanden. Darf ich Sie kurz zur Seite bitten, dann klären wir das diskret.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "No-Go: Gesundheitsinfos sind hochsensibel.",
          "Ignorieren wirkt kalt und hilft nicht.",
          "Premium: diskret führen, ohne zu beschämen."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du schützt Privatsphäre und bleibst serviceorientiert. Typischer Fehler: am Empfang Details klären. Merksatz: Sensibles gehört nicht ins Publikum.",
        feedbackWrong:
          "Nicht optimal. Warum: Gesundheitsinfos sind sensibel und müssen diskret behandelt werden. Typischer Fehler: Details am Empfang. Merksatz: Sensibles gehört nicht ins Publikum."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l6_q11",
        topic: "Screen-Standard",
        textBefore: "Wenn du den Empfang verlässt, musst du den Bildschirm sofort ",
        correctAnswer: "sperren",
        textAfter: ".",
        options: ["sperren", "drehen", "fotografieren", "ignorieren"],
        feedbackCorrect:
          "Richtig. Warum: Ein offener Kalender ist ein direktes Datenschutzrisiko. Typischer Fehler: „bin gleich wieder da“. Merksatz: Abwesenheit = Sperren.",
        feedbackWrong:
          "Nicht ganz. Warum: Der richtige Standard ist „sperren“. Typischer Fehler: offen lassen. Merksatz: Abwesenheit = Sperren."
      }
    },

    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l6_q12",
        topic: "Diskreter Mini-Flow",
        prompt: "Bringe den Diskretions-Flow in die richtige Reihenfolge.",
        steps: [
          "Blickkontakt + ruhiger Ton",
          "Kurz anerkennen („Verstanden“)",
          "Zur Seite/Nebenraum bitten",
          "Dort Details klären und Lösung anbieten"
        ],
        feedbackCorrect:
          "Richtig. Warum: Du hältst Premium-Ton und schützt Privatsphäre. Typischer Fehler: sofort Fragen stellen, während andere zuhören. Merksatz: Erst verlagern, dann vertiefen.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne Verlagerung wird es schnell öffentlich. Typischer Fehler: Details am Empfang. Merksatz: Erst verlagern, dann vertiefen."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l6_q13",
        topic: "Papier & Entsorgung",
        question: "Was ist der richtige Umgang mit Ausdrucken, die personenbezogene Daten enthalten?",
        options: [
          "In den normalen Papierkorb werfen – wird schon keiner sehen.",
          "Auf dem Tresen liegen lassen, bis Feierabend ist.",
          "Sofort wegräumen und später sicher entsorgen (Datenschutzbehälter/Schredder)."
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Papier ist ein häufiger Datenpannen-Auslöser. Typischer Fehler: liegen lassen „nur kurz“. Merksatz: Papier ist sichtbar – immer sichern.",
        feedbackWrong:
          "Nicht ganz. Warum: Offenes Papier kann jeder lesen. Typischer Fehler: normaler Papierkorb. Merksatz: Papier ist sichtbar – immer sichern."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l6_q14",
        topic: "DSGVO-Prinzipien praktisch",
        prompt: "Ordne das Prinzip dem Praxisbeispiel zu.",
        pairs: [
          { left: "Datenminimierung", right: "Nur die Infos abfragen, die für Termin/Service nötig sind" },
          { left: "Vertraulichkeit", right: "Leise sprechen und sensible Themen zur Seite verlagern" },
          { left: "Zweckbindung", right: "Daten nur für Salonablauf nutzen, nicht „nebenbei“" },
          { left: "Transparenz", right: "Kurz erklären, warum du Daten brauchst (z. B. Kontakt für Rückfragen)" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Datenschutz wird im Alltag sichtbar. Typischer Fehler: mehr abfragen als nötig. Merksatz: Weniger ist professioneller.",
        feedbackWrong:
          "Nicht ganz. Warum: Die Prinzipien sind einfach, wenn man sie auf Situationen übersetzt. Typischer Fehler: unnötige Details. Merksatz: Weniger ist professioneller."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l6_q15",
        topic: "Social Media & Fotos",
        situationTitle: "„Ich mache kurz ein Foto vom Empfang“",
        situationText:
          "Eine Person im Team will kurz ein Foto/Video am Empfang machen. Im Hintergrund sind Terminkalender/Listen oder Gäste sichtbar.",
        options: [
          "Kein Problem – ist ja nur intern.",
          "Du lässt es zu, solange niemand direkt in die Kamera schaut.",
          "Du stoppst es freundlich: „Bitte nicht hier – es sind Daten/Gäste im Hintergrund. Wir machen das an einem neutralen Ort ohne sichtbare Infos.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Auch intern kann es eine Datenpanne sein, wenn Daten sichtbar sind.",
          "Gäste/Listen im Hintergrund sind ein Risiko – auch ohne Fokus.",
          "Premium + Datenschutz: neutraler Ort, keine Daten sichtbar."
        ],
        feedbackCorrect:
          "Richtig. Warum: Bildmaterial kann Daten und Gäste unbeabsichtigt zeigen. Typischer Fehler: „nur kurz“ und dann ist es online. Merksatz: Kamera nur dort, wo nichts Vertrauliches sichtbar ist.",
        feedbackWrong:
          "Nicht optimal. Warum: Ein Foto kann schnell vertrauliche Infos zeigen. Typischer Fehler: Risiken unterschätzen. Merksatz: Kamera nur dort, wo nichts Vertrauliches sichtbar ist."
      }
    }
  ]
};

export default LEKTION_6;