// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_7.js
// A1 Empfang & Service – Lektion 7: Mini-Checkpoint: „Empfang in 60 Sekunden“

const LEKTION_7 = {
  id: "j1_l2_a1_l7",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Mini-Checkpoint: Empfang in 60 Sekunden",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "60 Sekunden reichen, um Premium zu zeigen: Präsenz, Struktur, Service – ohne Hektik.",
    keyPoints: [
      "1) Präsenz: Blickkontakt, Lächeln, ruhige Stimme, offene Haltung.",
      "2) Struktur: Willkommen → Name/Termin (diskret) → klare Orientierung.",
      "3) Service: Jacke, Platz, Getränk-Auswahl + nächster Schritt („Ihr Stylist holt Sie gleich ab“)."
    ],
    practiceTask:
      "Stelle einen Timer auf 60 Sekunden und spiele den Empfang 3x durch (allein oder mit Kollegin): Begrüßung → Abgleich → Jacke/Platz/Getränk → nächster Schritt. Ziel: ruhig, klar, ohne Füllwörter.",
    reflectionQuestion:
      "Welche Stelle macht dich am ehesten hektisch – und wie machst du sie ruhiger?"
  },

  questions: [
    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l7_q1",
        topic: "60-Sekunden-Flow",
        prompt: "Ordne den Premium-Empfang in 60 Sekunden in die beste Reihenfolge.",
        steps: [
          "Blickkontakt + Lächeln, Präsenz herstellen",
          "Herzlich willkommen heißen",
          "Name + Uhrzeit diskret abgleichen",
          "Jacke aktiv annehmen/aufhängen",
          "Zum Platz begleiten",
          "Getränk als Auswahl anbieten",
          "Nächsten Schritt kurz nennen („Ihr Stylist holt Sie gleich ab.“)"
        ],
        feedbackCorrect:
          "Richtig. Warum: Verbindung → Struktur → Service → Sicherheit. Typischer Fehler: springen oder Service ohne Abgleich. Merksatz: Erst führen, dann verwöhnen.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium wirkt durch einen sauberen Flow. Typischer Fehler: Reihenfolge durcheinander. Merksatz: Erst führen, dann verwöhnen."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l7_q2",
        topic: "Praxis-Check",
        situationTitle: "Du bist kurz gebunden",
        situationText:
          "Ein Gast kommt rein, du brauchst noch 15 Sekunden. Was ist der beste Mini-Checkpoint-Move?",
        options: [
          "Ignorieren und erst später begrüßen.",
          "Kurz hochschauen und nicken, ohne etwas zu sagen.",
          "Blickkontakt + Lächeln: „Herzlich willkommen. Einen Moment bitte – ich bin gleich persönlich für Sie da.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "No-Go: Der Gast fühlt sich übersehen.",
          "Zu wenig – keine klare Führung.",
          "Premium: Anerkennung + Klarheit + persönlicher Ton."
        ],
        feedbackCorrect:
          "Richtig. Warum: Ein Satz schützt die Premium-Wirkung sofort. Typischer Fehler: Schweigen. Merksatz: Anerkennen spart Ärger.",
        feedbackWrong:
          "Nicht optimal. Warum: Ohne klare Ansage wirkt Wartezeit länger. Typischer Fehler: Nicken statt führen. Merksatz: Anerkennen spart Ärger."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l7_q3",
        topic: "Premium-Startsatz",
        question: "Baue den Standardsatz für den Start.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Herzlich willkommen schön dass Sie da sind",
        extraWords: ["egal", "später", "irgendwie"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Warm, klar, wertig. Typischer Fehler: zu schnell oder flapsig. Merksatz: Langsam ist premium.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Der Satz muss ruhig und vollständig sein. Typischer Fehler: Wörter verschlucken. Merksatz: Langsam ist premium."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l7_q4",
        topic: "Fokus",
        textBefore: "Im Premium-Empfang zählt zuerst die ",
        correctAnswer: "Präsenz",
        textAfter: " – dann Organisation.",
        options: ["Präsenz", "Hektik", "Diskussion", "Ablenkung"],
        feedbackCorrect:
          "Richtig. Warum: Der Gast muss sich gesehen fühlen, bevor du verwaltest. Typischer Fehler: Bildschirm zuerst. Merksatz: Erst Mensch, dann System.",
        feedbackWrong:
          "Nicht ganz. Warum: Präsenz ist der Startknopf. Typischer Fehler: Technik vor Beziehung. Merksatz: Erst Mensch, dann System."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l7_q5",
        topic: "60-Sekunden-Bausteine",
        question: "Welche Bausteine gehören in den 60-Sekunden-Empfang? (Mehrere richtig)",
        options: [
          "Blickkontakt + Lächeln",
          "Name + Uhrzeit abgleichen",
          "Gästenamen laut durch den Salon rufen",
          "Zum Platz begleiten",
          "Getränk-Auswahl anbieten",
          "Interne Probleme ausführlich erklären"
        ],
        correctIndices: [0, 1, 3, 4],
        feedbackCorrect:
          "Richtig. Warum: Kurz, klar, diskret, serviceorientiert. Typischer Fehler: laut/unruhig/zu viel erklären. Merksatz: Wenig Worte, viel Führung.",
        feedbackPartially:
          "Teilweise richtig. Warum: Premium ist diskret und strukturiert. Typischer Fehler: zu viel oder zu laut. Merksatz: Wenig Worte, viel Führung.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium braucht Präsenz, Abgleich, Begleitung, Service. Typischer Fehler: laut/unruhig. Merksatz: Wenig Worte, viel Führung."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l7_q6",
        topic: "Checkpoint-Regel",
        statement: "Ein kurzer Zeitrahmen („ca. 5 Minuten“) beruhigt Gäste mehr als das Wort „gleich“.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Minuten geben Kontrolle. Typischer Fehler: „gleich“ sagen und dann sind es 10 Minuten. Merksatz: Minuten statt „gleich“.",
        feedbackWrong:
          "Nicht ganz. Warum: Minuten sind klarer als „gleich“. Typischer Fehler: vage Versprechen. Merksatz: Minuten statt „gleich“."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l7_q7",
        topic: "Premium-Check",
        prompt: "Sortiere die Aussagen in „Premium“ oder „No-Go“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go" }
        ],
        items: [
          { text: "„Ich begleite Sie kurz zu Ihrem Platz.“", categoryId: "premium" },
          { text: "„Setzen Sie sich irgendwo hin.“", categoryId: "nogo" },
          { text: "„Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“", categoryId: "premium" },
          { text: "„Name?“", categoryId: "nogo" },
          { text: "„Darf ich kurz Ihren Namen und die Uhrzeit abgleichen?“", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium-Sprache führt ruhig und wertschätzend. Typischer Fehler: harte Ein-Wort-Sätze. Merksatz: Ton ist Teil der Leistung.",
        feedbackWrong:
          "Noch nicht ganz. Warum: No-Go ist hart/unklar. Typischer Fehler: zu knapp. Merksatz: Ton ist Teil der Leistung."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l7_q8",
        topic: "Baustein → Satz",
        prompt: "Ordne dem Baustein den passenden Premium-Satz zu.",
        pairs: [
          { left: "Willkommen", right: "„Herzlich willkommen. Schön, dass Sie da sind.“" },
          { left: "Abgleich", right: "„Darf ich kurz Ihren Namen und die Uhrzeit abgleichen?“" },
          { left: "Begleitung", right: "„Ich begleite Sie kurz zu Ihrem Platz.“" },
          { left: "Getränk", right: "„Möchten Sie stilles Wasser, Sprudel oder einen Kaffee?“" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Standardsätze halten Premium konstant – auch wenn es voll ist. Typischer Fehler: improvisierte Floskeln. Merksatz: Standard schafft Ruhe.",
        feedbackWrong:
          "Nicht ganz. Warum: Mit festen Sätzen bleibt es souverän. Typischer Fehler: zu flapsig. Merksatz: Standard schafft Ruhe."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l7_q9",
        topic: "Diskretion",
        situationTitle: "Telefonanfrage zu einer Kundin",
        situationText:
          "Jemand fragt am Telefon nach Anwesenheit/Termin einer Kundin. Was ist der Premium-Checkpoint?",
        options: [
          "„Ja, sie ist gerade da.“",
          "„Dazu kann ich keine Auskunft geben. Ich kann gern eine Nachricht aufnehmen.“",
          "„Warten Sie, ich rufe sie mal.“"
        ],
        correctIndex: 1,
        optionExplanations: [
          "No-Go: personenbezogene Daten.",
          "Datenschutz + lösungsorientiert – Premium.",
          "No-Go: bestätigt indirekt Anwesenheit."
        ],
        feedbackCorrect:
          "Richtig. Warum: Diskretion ist Premium-Service. Typischer Fehler: „nur helfen“ und Daten preisgeben. Merksatz: Keine Auskunft an Dritte.",
        feedbackWrong:
          "Nicht optimal. Warum: Termine/Anwesenheit sind vertraulich. Typischer Fehler: zu schnell ja sagen. Merksatz: Keine Auskunft an Dritte."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l7_q10",
        topic: "60-Sekunden-Ziel",
        textBefore: "Ziel in 60 Sekunden: Der Gast fühlt sich ",
        correctAnswer: "willkommen",
        textAfter: " und weiß, was als Nächstes passiert.",
        options: ["willkommen", "überfordert", "verloren", "ignoriert"],
        feedbackCorrect:
          "Richtig. Warum: Willkommen + Orientierung = Premium. Typischer Fehler: nur „abfertigen“. Merksatz: Gefühl + Klarheit.",
        feedbackWrong:
          "Nicht ganz. Warum: Das Ziel ist „willkommen“. Typischer Fehler: keine Orientierung. Merksatz: Gefühl + Klarheit."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l7_q11",
        topic: "Wenn es voll ist",
        prompt: "Was machst du, damit es schnell wirkt, aber nicht hektisch?",
        items: [
          "Ruhig atmen und langsamer sprechen als du denkst",
          "Standardsätze nutzen (kein Improvisieren)",
          "Blickkontakt halten, kurz anerkennen",
          "Minuten nennen statt „gleich“"
        ],
        correctOrder: [
          "Ruhig atmen und langsamer sprechen als du denkst",
          "Blickkontakt halten, kurz anerkennen",
          "Standardsätze nutzen (kein Improvisieren)",
          "Minuten nennen statt „gleich“"
        ],
        feedbackCorrect:
          "Richtig. Warum: Ruhe + Standard = Tempo ohne Hektik. Typischer Fehler: schneller sprechen, härter klingen. Merksatz: Ruhig ist schneller.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne Ruhe kippt der Ton. Typischer Fehler: Hektik in der Stimme. Merksatz: Ruhig ist schneller."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l7_q12",
        topic: "Premium-Mindset",
        statement: "Premium heißt: lieber 1 Satz mehr zur Orientierung als den Gast raten lassen.",
        isTrue: true,
        feedbackCorrect:
          "Richtig. Warum: Orientierung senkt Stress und wirkt hochwertig. Typischer Fehler: „wird schon“. Merksatz: Klarheit ist Service.",
        feedbackWrong:
          "Nicht ganz. Warum: Orientierung ist ein Premium-Signal. Typischer Fehler: zu wenig führen. Merksatz: Klarheit ist Service."
      }
    }
  ]
};

export default LEKTION_7;