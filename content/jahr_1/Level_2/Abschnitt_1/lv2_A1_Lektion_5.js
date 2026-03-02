// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_5.js
// A1 Empfang & Service – Lektion 5: Wartezeit managen (Info + Ruhe)

const LEKTION_5 = {
  id: "j1_l2_a1_l5",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Wartezeit managen (Info + Ruhe)",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Wartezeit ist nicht das Problem – Unklarheit ist das Problem. Premium bedeutet: informieren, beruhigen, führen.",
    keyPoints: [
      "Proaktiv informieren: kurz, ehrlich, mit Zeitrahmen (z. B. „ca. 5 Minuten“).",
      "Ruhe geben: Stimme ruhig, Blickkontakt, wertschätzend – keine Ausreden.",
      "Service anbieten: Getränk, Platz, ggf. Alternative („kurz umziehen/Jacke“) – Gast fühlt Kontrolle."
    ],
    practiceTask:
      "Formuliere heute 3 Zeitansagen (2 Min / 5 Min / 10 Min) als Premium-Satz. Übe sie laut, ruhig und langsam.",
    reflectionQuestion:
      "Wie klingt deine Zeitansage aktuell: eher entschuldigend oder souverän?"
  },

  questions: [
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l5_q1",
        topic: "Wartezeit in der Praxis",
        situationTitle: "Stylist ist 8 Minuten im Verzug",
        situationText: [
          "Du merkst: Der Termin startet nicht pünktlich. Der Gast sitzt bereits.",
          "Was ist die beste Premium-Reaktion?"
        ],
        options: [
          "Du sagst nichts – der Gast wird es schon merken.",
          "Du sagst: „Der Termin dauert halt noch.“",
          "Du gehst zum Gast: Blickkontakt, ruhig: „Danke für Ihre Geduld. Es dauert noch etwa 8 Minuten – ich halte Sie auf dem Laufenden.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Ohne Info wirkt Wartezeit doppelt so lang und unprofessionell.",
          "Klingt hart und abwertend – kein Premium.",
          "Proaktiv, wertschätzend, mit Zeitrahmen – Premium."
        ],
        feedbackCorrect:
          "Richtig. Warum: Zeitrahmen + Wertschätzung geben Kontrolle und Ruhe. Typischer Fehler: gar nichts sagen oder flapsig werden. Merksatz: Info nimmt Stress.",
        feedbackWrong:
          "Nicht optimal. Warum: Ohne klare Info entsteht Unsicherheit und Ärger. Typischer Fehler: Schweigen oder harte Formulierungen. Merksatz: Info nimmt Stress."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l5_q2",
        topic: "Premium-Zeitansage",
        question: "Welche Zeitansage klingt am souveränsten und wertig?",
        options: [
          "„Sorry, ist grad stressig.“",
          "„Es dauert noch ungefähr 5 Minuten. Danke für Ihre Geduld.“",
          "„Warten Sie halt kurz.“"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Klarer Zeitrahmen + Wertschätzung = Premium. Typischer Fehler: Ausreden („Stress“) oder Befehlston. Merksatz: Kurz, klar, dankbar.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium ist nicht entschuldigend oder hart, sondern klar und wertschätzend. Typischer Fehler: Ausreden. Merksatz: Kurz, klar, dankbar."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l5_q3",
        topic: "Schlüsselprinzip",
        textBefore: "Premium-Wartezeitmanagement bedeutet: ",
        correctAnswer: "informieren",
        textAfter: " und Ruhe geben.",
        options: ["informieren", "ignorieren", "diskutieren", "schimpfen"],
        feedbackCorrect:
          "Richtig. Warum: Info verhindert Unsicherheit. Typischer Fehler: abtauchen. Merksatz: Wer informiert, führt.",
        feedbackWrong:
          "Nicht ganz. Warum: Das Schlüsselwort ist „informieren“. Typischer Fehler: gar nichts sagen. Merksatz: Wer informiert, führt."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l5_q4",
        topic: "Premium vs. No-Go",
        prompt: "Sortiere die Aussagen in „Premium“ oder „No-Go“.",
        categories: [
          { id: "premium", label: "Premium" },
          { id: "nogo", label: "No-Go" }
        ],
        items: [
          { text: "„Danke für Ihre Geduld. Es dauert noch etwa 5 Minuten.“", categoryId: "premium" },
          { text: "„Ist halt so.“", categoryId: "nogo" },
          { text: "„Ich halte Sie auf dem Laufenden.“", categoryId: "premium" },
          { text: "Gar nichts sagen und hoffen, dass es nicht auffällt", categoryId: "nogo" },
          { text: "„Möchten Sie in der Zwischenzeit noch Wasser oder einen Kaffee?“", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium ist klar, freundlich, lösungsorientiert. Typischer Fehler: Schweigen oder Abwehr. Merksatz: Keine Überraschungen für den Gast.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Alles, was unklar oder abwehrend ist, senkt die Wertigkeit. Typischer Fehler: „wird schon“. Merksatz: Keine Überraschungen für den Gast."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l5_q5",
        topic: "Wirkung",
        prompt: "Ordne der Maßnahme die Wirkung beim Gast zu.",
        pairs: [
          { left: "Zeitansage mit Minuten", right: "Der Gast hat Kontrolle und fühlt sich ernst genommen" },
          { left: "„Danke für Ihre Geduld“", right: "Wertschätzung – der Ton bleibt angenehm" },
          { left: "„Ich halte Sie auf dem Laufenden“", right: "Sicherheit, weil es Updates gibt" },
          { left: "Schweigen", right: "Unsicherheit und Ärger steigen" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Wartezeit ist Psychologie – du steuerst die Wahrnehmung. Typischer Fehler: Wirkung unterschätzen. Merksatz: Worte sind Service.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne Info wächst Ärger schnell. Typischer Fehler: nicht aktiv steuern. Merksatz: Worte sind Service."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l5_q6",
        topic: "Premium-Mythos",
        statement: "Je voller es ist, desto besser ist es, Wartezeiten nicht anzusprechen – das spart Zeit.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Keine Info kostet Vertrauen und erzeugt Beschwerden. Typischer Fehler: Schweigen als Effizienz. Merksatz: Ein Satz spart 10 Minuten Ärger.",
        feedbackWrong:
          "Nicht ganz. Warum: Ein kurzes Update ist schneller als späteres Konfliktmanagement. Typischer Fehler: Schweigen. Merksatz: Ein Satz spart 10 Minuten Ärger."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l5_q7",
        topic: "Premium-Zeitansage",
        question: "Baue einen Premium-Satz für 5 Minuten Wartezeit.",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Danke für Ihre Geduld es dauert noch etwa fünf Minuten",
        extraWords: ["egal", "irgendwann", "selbst schuld"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Wertschätzung + Zeitrahmen = Ruhe. Typischer Fehler: nur „gleich“ sagen. Merksatz: Minuten statt „gleich“.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Premium braucht klare Minuten und ruhigen Ton. Typischer Fehler: vage Worte wie „gleich“. Merksatz: Minuten statt „gleich“."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l5_q8",
        topic: "Was gehört dazu?",
        question: "Welche Elemente gehören zu gutem Wartezeitmanagement? (Mehrere richtig)",
        options: [
          "Proaktive Info mit Zeitrahmen",
          "Ausreden und Schuldzuweisungen",
          "Ruhiger Ton + Blickkontakt",
          "Serviceangebot (Getränk/Platz/Orientierung)",
          "Unklare Aussagen („gleich“, „später“)"
        ],
        correctIndices: [0, 2, 3],
        feedbackCorrect:
          "Richtig. Warum: Premium ist klar, ruhig und serviceorientiert. Typischer Fehler: Ausreden oder Unklarheit. Merksatz: Klar + ruhig + Service.",
        feedbackPartially:
          "Teilweise richtig. Warum: Es fehlen noch wichtige Premium-Elemente. Typischer Fehler: Unklarheit. Merksatz: Klar + ruhig + Service.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium braucht klare Info, ruhigen Ton und Service. Typischer Fehler: Ausreden/Unklarheit. Merksatz: Klar + ruhig + Service."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l5_q9",
        topic: "Update-Prozess",
        prompt: "Bringe die Schritte in die beste Reihenfolge, wenn sich Wartezeit abzeichnet.",
        items: [
          "Zeit realistisch einschätzen (Minuten)",
          "Gast aktiv ansprechen (Blickkontakt)",
          "Zeitansage + Dank",
          "Optional: Service/Alternative anbieten",
          "Bei Änderung: kurzes Update geben"
        ],
        correctOrder: [
          "Zeit realistisch einschätzen (Minuten)",
          "Gast aktiv ansprechen (Blickkontakt)",
          "Zeitansage + Dank",
          "Optional: Service/Alternative anbieten",
          "Bei Änderung: kurzes Update geben"
        ],
        feedbackCorrect:
          "Richtig. Warum: So bleibt die Situation ruhig und kontrolliert. Typischer Fehler: erst reagieren, wenn der Gast genervt ist. Merksatz: Früh informieren ist Premium.",
        feedbackWrong:
          "Nicht ganz. Warum: Wartezeit muss geführt werden, bevor Unruhe entsteht. Typischer Fehler: zu spät informieren. Merksatz: Früh informieren ist Premium."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l5_q10",
        topic: "Gast wird unruhig",
        situationTitle: "Gast schaut mehrfach auf die Uhr",
        situationText:
          "Der Gast wird sichtbar unruhig und schaut mehrfach auf die Uhr. Was tust du?",
        options: [
          "Du ignorierst es, um keinen Stress zu machen.",
          "Du sagst: „Nicht so ungeduldig.“",
          "Du gehst hin: „Danke für Ihre Geduld. Es dauert noch ca. 5 Minuten. Möchten Sie in der Zeit noch ein Wasser oder einen Kaffee?“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Ignorieren verstärkt Ärger.",
          "Belehrend – kein Premium.",
          "Proaktiv, wertschätzend, serviceorientiert."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du nimmst die Stimmung ernst und gibst Kontrolle. Typischer Fehler: belehren oder abtauchen. Merksatz: Wahrnehmen, informieren, beruhigen.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium heißt: aktiv steuern, nicht reagieren. Typischer Fehler: Ignorieren. Merksatz: Wahrnehmen, informieren, beruhigen."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l5_q11",
        topic: "No-Go-Wort",
        textBefore: "Vermeide im Premium-Salon das vage Wort: „",
        correctAnswer: "gleich",
        textAfter: "“ (besser Minuten nennen).",
        options: ["gleich", "bitte", "danke", "gern"],
        feedbackCorrect:
          "Richtig. Warum: „Gleich“ ist oft falsch und macht wütend. Typischer Fehler: zu optimistische Versprechen. Merksatz: Lieber ehrlich als „gleich“.",
        feedbackWrong:
          "Nicht ganz. Warum: „Gleich“ ist im Wartezeit-Kontext ein Risiko. Typischer Fehler: zu vage. Merksatz: Lieber ehrlich als „gleich“."
      }
    },

    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l5_q12",
        topic: "Mini-Dialog (Premium)",
        prompt: "Bringe den Mini-Dialog in die richtige Reihenfolge.",
        steps: [
          "„Danke für Ihre Geduld.“",
          "„Es dauert noch etwa 8 Minuten.“",
          "„Ich halte Sie auf dem Laufenden.“",
          "„Möchten Sie in der Zwischenzeit noch Wasser oder einen Kaffee?“"
        ],
        feedbackCorrect:
          "Richtig. Warum: Dank → Zeit → Sicherheit → Service. Typischer Fehler: Zeit ohne Dank. Merksatz: Erst wertschätzen, dann erklären.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium wirkt durch Reihenfolge und Ton. Typischer Fehler: ohne Sicherheit/Service. Merksatz: Erst wertschätzen, dann erklären."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l5_q13",
        topic: "Tonfall",
        question: "Was ist der wichtigste Faktor, damit Wartezeit-Kommunikation premium wirkt?",
        options: [
          "Sehr viele Erklärungen und Details",
          "Ruhiger Ton + klare Minutenansage + Wertschätzung",
          "Schnell sprechen, damit es kurz ist"
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Premium ist Ruhe und Klarheit. Typischer Fehler: zu viel erklären oder hektisch klingen. Merksatz: Wenig Worte, ruhig gesagt.",
        feedbackWrong:
          "Nicht ganz. Warum: Zu viel oder zu hektisch wirkt nicht premium. Typischer Fehler: Wortmenge statt Qualität. Merksatz: Wenig Worte, ruhig gesagt."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l5_q14",
        topic: "Problem → Premium-Lösung",
        prompt: "Ordne Problem und passende Premium-Lösung zu.",
        pairs: [
          { left: "5 Minuten Verzug", right: "„Danke für Ihre Geduld. Es dauert noch etwa 5 Minuten.“" },
          { left: "Verzug wird länger", right: "Kurzes Update mit neuem Zeitrahmen" },
          { left: "Gast wirkt genervt", right: "Aktiv ansprechen + Service anbieten" },
          { left: "Unsichere Wartezone", right: "Orientierung geben (Platz/Lounge) und Ruhe schaffen" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium hat Standards für Standardsituationen. Typischer Fehler: jedes Mal improvisieren. Merksatz: Standardsätze halten Qualität konstant.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Mit klaren Standards bleibt es ruhig. Typischer Fehler: unstrukturiert reagieren. Merksatz: Standardsätze halten Qualität konstant."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l5_q15",
        topic: "Diskrete Erklärung",
        situationTitle: "Gast fragt: „Warum dauert das?“",
        situationText:
          "Der Gast fragt freundlich, warum es länger dauert. Wie antwortest du premium – ohne intern zu plaudern?",
        options: [
          "„Weil vorne alles schief läuft.“",
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
          "Richtig. Warum: Du schützt das Team, betonst Qualität und gibst klare Info. Typischer Fehler: Internes ausplaudern. Merksatz: Nach außen: ruhig, wertig, lösungsorientiert.",
        feedbackWrong:
          "Nicht optimal. Warum: Premium spricht nie schlecht über Team/Prozesse. Typischer Fehler: Schuld suchen. Merksatz: Nach außen: ruhig, wertig, lösungsorientiert."
      }
    }
  ]
};

export default LEKTION_5;