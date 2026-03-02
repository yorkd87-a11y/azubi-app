// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_4.js
// A1 Empfang & Service – Lektion 4: Service: Jacke, Platz, Getränk (Ablauf)

const LEKTION_4 = {
  id: "j1_l2_a1_l4",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Service: Jacke, Platz, Getränk (Ablauf)",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Premium-Service fühlt sich mühelos an: Der Gast muss nichts fragen – du führst und bietest an.",
    keyPoints: [
      "Service-Flow: Jacke annehmen → Platz anbieten/begleiten → Getränk als Auswahl anbieten.",
      "Wertig sprechen: kurze, klare Sätze, ruhiges Tempo, Sie-Ansprache, keine Flapsigkeit.",
      "Details zählen: saubere Tasse/Glas, Untersetzer/Serviette, Getränk zügig bringen, Blickkontakt."
    ],
    practiceTask:
      "Trainiere den Service-Flow 5x am Stück: 1) Jacke, 2) Begleitung zum Platz, 3) Getränk-Auswahl. Ziel: alles in unter 30 Sekunden – ohne Hektik.",
    reflectionQuestion:
      "Welcher Schritt ist bei dir am anfälligsten: Jacke, Begleitung oder Getränk?"
  },

  questions: [
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l4_q1",
        topic: "Service-Flow",
        situationTitle: "Gast kommt an – du willst Premium-Service starten",
        situationText: [
          "Der Gast ist da, du hast begrüßt und den Termin bestätigt.",
          "Was ist der beste nächste Schritt im Premium-Ablauf?"
        ],
        options: [
          "„Setzen Sie sich schon mal.“ und du gehst wieder an den PC.",
          "Du nimmst die Jacke aktiv an, begleitest zum Platz und bietest Getränke als Auswahl an.",
          "Du fragst direkt nach der Haarfarbe, damit es schnell geht."
        ],
        correctIndex: 1,
        optionExplanations: [
          "Wirkt distanziert und ungeführt – kein Premium.",
          "Klarer Service-Flow: wertig, ruhig, professionell.",
          "Zu früh fachlich – der Gast ist noch im Ankommensmodus."
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium beginnt mit Ankommen lassen – Service zuerst, Fachliches danach. Typischer Fehler: „Setzen Sie sich irgendwo“. Merksatz: Erst ankommen lassen, dann beraten.",
        feedbackWrong:
          "Nicht optimal. Warum: Ohne Führung wirkt es hektisch oder kalt. Typischer Fehler: sofort in Fachthema springen. Merksatz: Erst ankommen lassen, dann beraten."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l4_q2",
        topic: "Getränke anbieten",
        question: "Welche Formulierung wirkt am premium?",
        options: [
          "„Wollen Sie was trinken?“",
          "„Kaffee oder Wasser?“",
          "„Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“"
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Auswahl + ruhiger Ton wirkt hochwertig. Typischer Fehler: zu lässig oder zu knapp. Merksatz: Premium bietet Auswahl, nicht Beliebigkeit.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium klingt klar und bietet eine kleine, hochwertige Auswahl. Typischer Fehler: „Wollen Sie was?“ wirkt billig. Merksatz: Premium bietet Auswahl, nicht Beliebigkeit."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l4_q3",
        topic: "Ablauf",
        textBefore: "Premium-Flow: Jacke annehmen → ",
        correctAnswer: "begleiten",
        textAfter: " → Getränk als Auswahl anbieten.",
        options: ["begleiten", "diskutieren", "ignorieren", "verschieben"],
        feedbackCorrect:
          "Richtig. Warum: Begleiten ist ein Premium-Signal – der Gast muss nicht suchen. Typischer Fehler: nur zeigen. Merksatz: Begleiten statt fingerzeigen.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Schlüssel ist „begleiten“. Typischer Fehler: „Da hinten“. Merksatz: Begleiten statt fingerzeigen."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l4_q4",
        topic: "Premium vs. No-Go",
        prompt: "Sortiere die Handlungen in „Premium“ oder „No-Go“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go" }
        ],
        items: [
          { text: "Jacke aktiv abnehmen und ordentlich aufhängen", categoryId: "premium" },
          { text: "Mit dem Finger Richtung Garderobe zeigen: „Da.“", categoryId: "nogo" },
          { text: "Gast zum Platz begleiten", categoryId: "premium" },
          { text: "Getränk in schmutziger Tasse servieren", categoryId: "nogo" },
          { text: "Getränk als Auswahl anbieten (stilles Wasser/Sprudel/Kaffee)", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium steckt im Detail: Ordnung, Sauberkeit, Führung. Typischer Fehler: zu knapp, zu unachtsam. Merksatz: Details sind Teil des Preises.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Unordnung oder Unachtsamkeit zerstören Premium sofort. Typischer Fehler: „wird schon“. Merksatz: Details sind Teil des Preises."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l4_q5",
        topic: "Wirkung",
        prompt: "Ordne dem Detail die Wirkung zu.",
        pairs: [
          { left: "Jacke abnehmen", right: "Der Gast fühlt sich umsorgt und wertgeschätzt" },
          { left: "Begleiten zum Platz", right: "Der Gast hat Orientierung und Ruhe" },
          { left: "Getränk als Auswahl", right: "Der Service wirkt hochwertig und persönlich" },
          { left: "Sauberes Glas + Untersetzer", right: "Der Salon wirkt gepflegt und premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Service ist nicht „nett“, sondern Teil der Markenwirkung. Typischer Fehler: Details unterschätzen. Merksatz: Wirkung entsteht im Kleinen.",
        feedbackWrong:
          "Nicht ganz. Warum: Im Premium-Segment zählt die Wirkung jedes Details. Typischer Fehler: „nur ein Getränk“. Merksatz: Wirkung entsteht im Kleinen."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l4_q6",
        topic: "Service-Haltung",
        statement: "Im Premium-Salon ist es besser, den Gast selbst suchen zu lassen – das wirkt „locker“.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Premium bedeutet Führung und Leichtigkeit, nicht „selbst finden“. Typischer Fehler: locker mit unprofessionell verwechseln. Merksatz: Locker ist geführt.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium heißt: geführt und leicht – nicht planlos. Typischer Fehler: „locker“ als Ausrede. Merksatz: Locker ist geführt."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l4_q7",
        topic: "Service-Satz",
        question: "Baue den Premium-Service-Satz für die Begleitung.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Ich begleite Sie kurz zu Ihrem Platz",
        extraWords: ["egal", "irgendwo", "später"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Kurz, klar, wertig. Typischer Fehler: „da hinten“. Merksatz: Premium führt.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Der Satz muss klar und wertig sein. Typischer Fehler: ungenau oder flapsig. Merksatz: Premium führt."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l4_q8",
        topic: "Getränke-Standard",
        question: "Welche Punkte gehören zu einem Premium-Getränkeservice? (Mehrere richtig)",
        options: [
          "Sauberes Glas/Tasse, ggf. Untersetzer/Serviette",
          "Getränk zügig bringen (nicht „irgendwann“)",
          "Getränk kommentarlos hinstellen und weggehen",
          "Kurze Auswahl anbieten (z. B. still/Sprudel/Kaffee)",
          "Nebenbei über private Themen am Empfang sprechen"
        ],
        correctIndices: [0, 1, 3],
        feedbackCorrect:
          "Richtig. Warum: Premium ist sauber, zügig, wertig und diskret. Typischer Fehler: kommentarlos/privat. Merksatz: Service ist leise Perfektion.",
        feedbackPartially:
          "Teilweise richtig. Warum: Premium braucht Sauberkeit, Tempo und Auswahl. Typischer Fehler: zu privat oder zu lieblos. Merksatz: Service ist leise Perfektion.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium entsteht durch Sauberkeit, Tempo und Auswahl. Typischer Fehler: liebloser Ablauf. Merksatz: Service ist leise Perfektion."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l4_q9",
        topic: "Ablauf festigen",
        prompt: "Bringe den Service-Ablauf in die beste Reihenfolge.",
        items: [
          "Getränk-Auswahl anbieten",
          "Jacke annehmen/aufhängen",
          "Gast zum Platz begleiten",
          "Nächsten Schritt kurz nennen („Ihr Stylist holt Sie gleich ab.“)"
        ],
        correctOrder: [
          "Jacke annehmen/aufhängen",
          "Gast zum Platz begleiten",
          "Getränk-Auswahl anbieten",
          "Nächsten Schritt kurz nennen („Ihr Stylist holt Sie gleich ab.“)"
        ],
        feedbackCorrect:
          "Richtig. Warum: Der Gast wird geführt, versorgt und weiß, was passiert. Typischer Fehler: Reihenfolge springt. Merksatz: Flow schafft Ruhe.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium wirkt durch einen ruhigen, wiederholbaren Flow. Typischer Fehler: alles durcheinander. Merksatz: Flow schafft Ruhe."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l4_q10",
        topic: "Sonderwunsch Getränk",
        situationTitle: "Gast fragt nach Tee",
        situationText:
          "Du bietest Wasser/Sprudel/Kaffee an. Der Gast fragt freundlich nach Tee.",
        options: [
          "„Haben wir nicht.“",
          "„Eigentlich gibt’s nur Kaffee oder Wasser.“",
          "„Sehr gern. Welche Sorte darf es sein? Ich schaue kurz, was wir da haben.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Klingt hart und nicht serviceorientiert.",
          "Wirkt abweisend und unflexibel.",
          "Premium: lösungsorientiert, freundlich, klare Führung."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du bleibst wertschätzend und lösungsorientiert. Typischer Fehler: abblocken. Merksatz: Premium sucht Lösungen – mit Klarheit.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt nicht „alles“, aber immer wertschätzend und lösungsorientiert. Typischer Fehler: abweisender Ton. Merksatz: Premium sucht Lösungen – mit Klarheit."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l4_q11",
        topic: "Premium-Detail",
        textBefore: "Ein sauberes Glas und ein ",
        correctAnswer: "Untersetzer",
        textAfter: " wirken sofort hochwertig.",
        options: ["Untersetzer", "Zettel", "Preisschild", "Chaos"],
        feedbackCorrect:
          "Richtig. Warum: Kleine Details signalisieren Sorgfalt. Typischer Fehler: „egal, Hauptsache Getränk“. Merksatz: Premium zeigt sich im Detail.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Untersetzer ist ein klassisches Premium-Detail. Typischer Fehler: Sorgfalt unterschätzen. Merksatz: Premium zeigt sich im Detail."
      }
    },

    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l4_q12",
        topic: "Mini-Flow in 20 Sekunden",
        prompt: "Ordne die Sätze in einen Premium-Mini-Flow.",
        steps: [
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Ich nehme Ihre Jacke sehr gern kurz ab.“",
          "„Ich begleite Sie kurz zu Ihrem Platz.“",
          "„Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“"
        ],
        feedbackCorrect:
          "Richtig. Warum: Das fühlt sich wie ein Premium-Hotel an: geführt, ruhig, wertig. Typischer Fehler: Service ohne Begrüßung. Merksatz: Begrüßung ist der Startknopf.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Flow braucht Begrüßung → Jacke → Begleitung → Getränk. Typischer Fehler: Reihenfolge tauschen. Merksatz: Begrüßung ist der Startknopf."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l4_q13",
        topic: "Häufiger Fehler",
        question: "Was ist ein typischer No-Go-Fehler beim Getränkeservice im Premium-Salon?",
        options: [
          "Eine kleine Auswahl anbieten",
          "Das Getränk zügig bringen",
          "Eine schmutzige Tasse/Glas verwenden oder lieblos hinstellen"
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Sauberkeit und Sorgfalt sind im Premium-Segment nicht verhandelbar. Typischer Fehler: Routine-Schludern. Merksatz: Sauber ist Standard.",
        feedbackWrong:
          "Nicht ganz. Warum: No-Go ist Unsauberkeit oder liebloser Service. Typischer Fehler: Routine ohne Aufmerksamkeit. Merksatz: Sauber ist Standard."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l4_q14",
        topic: "Service-Phrasen",
        prompt: "Ordne die Situation der passenden Premium-Phrase zu.",
        pairs: [
          { left: "Jacke abnehmen", right: "„Ich nehme Ihre Jacke sehr gern kurz ab.“" },
          { left: "Begleiten", right: "„Ich begleite Sie kurz zu Ihrem Platz.“" },
          { left: "Getränke", right: "„Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“" },
          { left: "Ablauf", right: "„Ihr Stylist holt Sie gleich ab.“" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Standardsätze sparen Energie und halten Qualität konstant. Typischer Fehler: jedes Mal improvisieren. Merksatz: Standard schafft Premium.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Mit festen Phrasen bleibt der Service gleich hochwertig. Typischer Fehler: spontane Floskeln. Merksatz: Standard schafft Premium."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l4_q15",
        topic: "Wenn es voll ist",
        situationTitle: "Empfang ist voll – Service bleibt premium",
        situationText:
          "Mehrere Gäste sind da, du musst schnell sein, aber es soll nicht hektisch wirken.",
        options: [
          "Du wirst schneller und sprichst kürzer, auch wenn es hart klingt.",
          "Du lässt Service weg, damit es schneller geht.",
          "Du bleibst ruhig, nutzt Standardsätze und führst den Gast kurz: Jacke → Platz → Getränk-Auswahl."
        ],
        correctIndex: 2,
        optionExplanations: [
          "Härte wirkt nie premium – selbst wenn es schnell ist.",
          "Service komplett wegzulassen senkt den Premium-Eindruck.",
          "Ruhig bleiben + Standardsätze = schnell ohne Hektik."
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium ist ruhig – auch unter Druck. Typischer Fehler: Hektik zeigt sich in der Stimme. Merksatz: Ruhig ist schneller.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium darf nie „abkippen“, wenn es voll ist. Typischer Fehler: Ton wird hart oder Service fällt weg. Merksatz: Ruhig ist schneller."
      }
    }
  ]
};

export default LEKTION_4;