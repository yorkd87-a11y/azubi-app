// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_2.js
// A1 Empfang & Service – Lektion 2: Begrüßungssätze (3 Standardsätze)

const LEKTION_2 = {
  id: "j1_l2_a1_l2",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Begrüßungssätze (3 Standardsätze)",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Premium beginnt mit Sprache: Ein einziger Satz kann sofort Ruhe, Klasse und Vertrauen erzeugen.",
    keyPoints: [
      "Standard 1 (Willkommen): warm, klar, Sie-Ansprache – ohne Floskeln.",
      "Standard 2 (Name/Termin): kurz und professionell abgleichen – ohne „Verhör-Ton“.",
      "Standard 3 (Service + Führung): aktiv anbieten + nächsten Schritt nennen."
    ],
    practiceTask:
      "Übe heute die 3 Standardsätze 10x laut (ruhig, lächelnd, klare Stimme). Achte auf Tempo: lieber etwas langsamer als zu schnell.",
    reflectionQuestion:
      "Welcher Satz fällt dir am schwersten – und warum (Tempo, Stimme, Wortwahl)?"
  },

  questions: [
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l2_q1",
        topic: "Begrüßung in der Praxis",
        situationTitle: "Gast kommt rein – Premium-Start",
        situationText: [
          "Ein Gast betritt den Salon. Du bist frei und am Empfang.",
          "Welche Begrüßung wirkt am hochwertigsten?"
        ],
        options: [
          "„Hi! Setzen Sie sich kurz.“",
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Name?“"
        ],
        correctIndex: 1,
        optionExplanations: [
          "Zu flapsig und ohne Führung – wirkt nicht premium.",
          "Warm, klar, professionell – genau Premium-Standard.",
          "Wirkt kalt und abfragend – kein willkommenes Gefühl."
        ],
        feedbackCorrect:
          "Richtig. Warum: Warm + klar + professionell schafft sofort Vertrauen. Typischer Fehler: zu flapsig oder zu knapp. Merksatz: Erst willkommen, dann Organisation.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium beginnt mit Wärme und Klarheit, nicht mit Flapsigkeit oder Abfrage. Typischer Fehler: Begrüßung „abkürzen“. Merksatz: Erst willkommen, dann Organisation."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l2_q2",
        topic: "Standard 1",
        question: "Welcher Satz ist ein starker Premium-Standardsatz (Willkommen)?",
        options: [
          "„Na, alles gut?“",
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Warten Sie kurz.“"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Der Satz ist freundlich, ruhig und wertig. Typischer Fehler: zu privat oder zu befehlend. Merksatz: Warm starten, ruhig führen.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium wirkt durch respektvolle, klare Sprache. Typischer Fehler: zu privat („Na?“) oder zu hart („Warten“). Merksatz: Warm starten, ruhig führen."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l2_q3",
        topic: "Premium-Wortwahl",
        textBefore: "„Herzlich ",
        correctAnswer: "willkommen",
        textAfter: ". Schön, dass Sie da sind.“",
        options: ["willkommen", "egal", "schnell", "sofort"],
        feedbackCorrect:
          "Richtig. Warum: „Herzlich willkommen“ setzt sofort den Ton für Premium. Typischer Fehler: Begrüßung ohne Wertschätzung. Merksatz: Willkommen ist Pflicht – nicht Kür.",
        feedbackWrong:
          "Nicht ganz. Warum: Das Schlüsselwort ist „willkommen“ – es signalisiert Wertschätzung. Typischer Fehler: zu neutral oder zu hart starten. Merksatz: Willkommen ist Pflicht – nicht Kür."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l2_q4",
        topic: "3 Standardsätze richtig einsetzen",
        prompt: "Ordne der Situation den passenden Standardsatz zu.",
        pairs: [
          {
            left: "Start / Ankommen",
            right: "„Herzlich willkommen. Schön, dass Sie da sind.“"
          },
          {
            left: "Organisation / Termin",
            right: "„Darf ich kurz Ihren Namen und den Termin abgleichen?“"
          },
          {
            left: "Service / Führung",
            right:
              "„Ich begleite Sie gleich zu Ihrem Platz. Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“"
          }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium ist situativ – der richtige Satz zur richtigen Zeit. Typischer Fehler: Service anbieten, bevor Klarheit da ist. Merksatz: Willkommen → Abgleich → Service.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Die Reihenfolge schafft Ruhe und Führung. Typischer Fehler: durcheinander sprechen. Merksatz: Willkommen → Abgleich → Service."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l2_q5",
        topic: "Standardsatz üben",
        question: "Baue den Premium-Begrüßungssatz.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Herzlich willkommen schön dass Sie da sind",
        extraWords: ["egal", "später", "irgendwie"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Der Satz wirkt ruhig, wertig und professionell. Typischer Fehler: zu schnell oder nuscheln. Merksatz: Langsam ist hochwertig.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Premium-Sätze müssen klar und ruhig klingen. Typischer Fehler: Wörter verschlucken oder zu hektisch. Merksatz: Langsam ist hochwertig."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l2_q6",
        topic: "Premium-Standard",
        statement: "Im Premium-Salon ist ein flapsiges „Hi“ immer passend.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Premium lebt von respektvoller, klarer Sie-Ansprache. Typischer Fehler: „locker“ mit „professionell“ verwechseln. Merksatz: Freundlich ja – flapsig nein.",
        feedbackWrong:
          "Nicht ganz. Warum: Flapsigkeit kann wertige Wirkung zerstören. Typischer Fehler: Ton zu privat. Merksatz: Freundlich ja – flapsig nein."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l2_q7",
        topic: "Premium-Satz-Bausteine",
        question: "Welche Elemente machen Begrüßungssätze premium? (Mehrere richtig)",
        options: [
          "Sie-Ansprache und ruhiger Ton",
          "Name oder Termin professionell abgleichen",
          "Vage Aussagen („irgendwo hinsetzen“)",
          "Service als Auswahl anbieten (Wasser/Sprudel/Kaffee)",
          "Hektik und viele Füllwörter"
        ],
        correctIndices: [0, 1, 3],
        feedbackCorrect:
          "Richtig. Warum: Premium = Ruhe, Klarheit, Führung, Service. Typischer Fehler: vage Sprache oder Hektik. Merksatz: Kurz, klar, wertig.",
        feedbackPartially:
          "Teilweise richtig. Warum: Einige Premium-Bausteine fehlen noch. Typischer Fehler: vage Aussagen oder Füllwörter. Merksatz: Kurz, klar, wertig.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium entsteht durch klare Bausteine: Sie, Struktur, Service. Typischer Fehler: Hektik/Unklarheit. Merksatz: Kurz, klar, wertig."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l2_q8",
        topic: "Premium vs. No-Go",
        prompt: "Sortiere die Sätze in „Premium“ oder „No-Go am Empfang“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go am Empfang" }
        ],
        items: [
          { text: "„Herzlich willkommen. Schön, dass Sie da sind.“", categoryId: "premium" },
          { text: "„Name?“", categoryId: "nogo" },
          { text: "„Darf ich kurz Ihren Namen und den Termin abgleichen?“", categoryId: "premium" },
          { text: "„Setzen Sie sich irgendwo hin.“", categoryId: "nogo" },
          {
            text: "„Ich begleite Sie gleich zu Ihrem Platz. Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“",
            categoryId: "premium"
          }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium klingt wertschätzend und führt klar. Typischer Fehler: kurze, harte Ein-Wort-Sätze. Merksatz: Ton ist Teil der Leistung.",
        feedbackWrong:
          "Noch nicht ganz. Warum: No-Go-Sätze wirken kalt oder unklar. Typischer Fehler: „kurz“ mit „hart“ verwechseln. Merksatz: Ton ist Teil der Leistung."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l2_q9",
        topic: "Satz-Reihenfolge",
        prompt: "Bringe die 3 Standardsätze in die beste Reihenfolge für den Empfang.",
        items: [
          "„Ich begleite Sie gleich zu Ihrem Platz. Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“",
          "„Darf ich kurz Ihren Namen und den Termin abgleichen?“",
          "„Herzlich willkommen. Schön, dass Sie da sind.“"
        ],
        correctOrder: [
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Darf ich kurz Ihren Namen und den Termin abgleichen?“",
          "„Ich begleite Sie gleich zu Ihrem Platz. Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“"
        ],
        feedbackCorrect:
          "Richtig. Warum: Willkommen → Struktur → Service schafft Ruhe. Typischer Fehler: Service zuerst ohne Klarheit. Merksatz: Erst willkommen, dann klären, dann verwöhnen.",
        feedbackWrong:
          "Nicht ganz. Warum: Die Reihenfolge ist wichtig für Führung und Premium-Wirkung. Typischer Fehler: springen zwischen Themen. Merksatz: Erst willkommen, dann klären, dann verwöhnen."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l2_q10",
        topic: "Namenssicherheit",
        situationTitle: "Name ist schwer auszusprechen",
        situationText:
          "Du bist unsicher, wie der Name ausgesprochen wird. Was ist die beste Premium-Reaktion?",
        options: [
          "Du sprichst ihn schnell irgendwie aus und hoffst, es passt.",
          "Du vermeidest den Namen komplett und bleibst unpersönlich.",
          "Du fragst freundlich und ruhig nach: „Damit ich es richtig ausspreche: Wie spricht man Ihren Namen korrekt aus?“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Kann peinlich wirken und ist respektlos, wenn es falsch ist.",
          "Wirkt distanziert – Name schafft Verbindung.",
          "Respektvoll, professionell, schafft Vertrauen."
        ],
        feedbackCorrect:
          "Richtig. Warum: Korrekte Aussprache ist Wertschätzung. Typischer Fehler: raten oder vermeiden. Merksatz: Name ist Premium-Detail.",
        feedbackWrong:
          "Nicht optimal. Warum: Ein falscher Name beschädigt den Eindruck. Typischer Fehler: raten statt kurz nachfragen. Merksatz: Name ist Premium-Detail."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l2_q11",
        topic: "Standard 2",
        textBefore: "„Darf ich kurz Ihren Namen und den Termin ",
        correctAnswer: "abgleichen",
        textAfter: "?“",
        options: ["abgleichen", "ignorieren", "verschieben", "vergessen"],
        feedbackCorrect:
          "Richtig. Warum: Der Satz ist kurz, professionell und respektvoll. Typischer Fehler: „Name?“ klingt hart. Merksatz: Fragen statt fordern.",
        feedbackWrong:
          "Nicht ganz. Warum: „abgleichen“ klingt professionell und ruhig. Typischer Fehler: Ein-Wort-Abfragen. Merksatz: Fragen statt fordern."
      }
    },

    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l2_q12",
        topic: "Mini-Dialog",
        prompt: "Bringe den Mini-Dialog in die richtige Reihenfolge.",
        steps: [
          "„Herzlich willkommen. Schön, dass Sie da sind.“",
          "„Darf ich kurz Ihren Namen und den Termin abgleichen?“",
          "„Perfekt, vielen Dank.“",
          "„Ich begleite Sie gleich zu Ihrem Platz. Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“"
        ],
        feedbackCorrect:
          "Richtig. Warum: So entsteht ein ruhiger Premium-Flow. Typischer Fehler: Service anbieten, bevor der Termin klar ist. Merksatz: Struktur schafft Ruhe.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium ist Reihenfolge und Führung. Typischer Fehler: Dialog unsortiert. Merksatz: Struktur schafft Ruhe."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l2_q13",
        topic: "Wenn du kurz gebunden bist",
        question: "Welcher Satz ist premium, wenn du gerade 15 Sekunden beschäftigt bist?",
        options: [
          "„Warten.“",
          "„Einen Moment bitte – ich bin gleich persönlich für Sie da.“",
          "„Ich komme irgendwann.“"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Du gibst Wertschätzung + klare Erwartung. Typischer Fehler: zu knapp oder unklar. Merksatz: Anerkennen + Zeitrahmen + persönlich.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium braucht klare, höfliche Führung. Typischer Fehler: harte Kurzformeln. Merksatz: Anerkennen + Zeitrahmen + persönlich."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l2_q14",
        topic: "Standard 3 (Service)",
        question: "Baue den Premium-Service-Satz.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Möchten Sie stilles Wasser Sprudel oder einen Kaffee",
        extraWords: ["naja", "egal", "irgendwann"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Auswahl wirkt hochwertig und gibt Führung. Typischer Fehler: „Wollen Sie was?“ wirkt billig. Merksatz: Service ist Auswahl, nicht Fragezeichen.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Premium klingt klar und wertig – mit Auswahl. Typischer Fehler: zu umgangssprachlich. Merksatz: Service ist Auswahl, nicht Fragezeichen."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l2_q15",
        topic: "Walk-in ohne Termin",
        situationTitle: "Gast ohne Termin",
        situationText:
          "Ein Gast kommt ohne Termin und fragt nach einem spontanen Service. Wie reagierst du premium?",
        options: [
          "„Ohne Termin geht hier gar nichts.“",
          "„Setzen Sie sich, ich schaue irgendwann.“",
          "„Herzlich willkommen. Ich schaue sofort, was heute möglich ist – darf ich kurz Ihren Namen notieren und den Wunsch aufnehmen?“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Wirkt hart und nicht serviceorientiert.",
          "Unklar und ohne Führung – erzeugt Unruhe.",
          "Wertschätzend, klar, lösungsorientiert – Premium."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du bleibst offen, führst strukturiert und hältst Premium-Ton. Typischer Fehler: abblocken oder vage bleiben. Merksatz: Premium bleibt lösungsorientiert – mit Klarheit.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt nicht „alles möglich“, aber immer wertschätzend und klar. Typischer Fehler: hart abweisen oder unklar vertrösten. Merksatz: Premium bleibt lösungsorientiert – mit Klarheit."
      }
    }
  ]
};

export default LEKTION_2;