// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_2.js
// Lektion 2 – Reinigung vs. Desinfektion (klarer Unterschied)

const LEKTION_2 = {
  id: "j1_l1_a3_l2",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Reinigung vs. Desinfektion",
  track: "hygiene",
  energy: 15,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Der häufigste Fehler im Salon: Desinfektion auf Dreck – und dann ist man scheinbar „fertig“. Das bringt oft weniger als gedacht.",
    keyPoints: [
      "Reinigung entfernt Schmutz/Material und senkt die Keimzahl – sie ersetzt keine Desinfektion in Risiko-Situationen.",
      "Desinfektion inaktiviert/abtötet Krankheitserreger – aber nur bei korrekter Anwendung (Mittel, Benetzung, Einwirkzeit).",
      "Meist gilt: erst reinigen, dann desinfizieren – sonst kann Schmutz die Wirkung deutlich schwächen."
    ],
    practiceTask:
      "Heute am Platz: Wähle 3 typische Kontaktflächen (z. B. Arbeitswagen-Griff, Armlehne, Waschbeckenrand). Reinige sichtbar, desinfiziere korrekt und halte die Einwirkzeit ein.",
    reflectionQuestion:
      "Welche Stelle hast du heute sonst oft „zu schnell“ gemacht – und was änderst du ab sofort (Benetzung/Einwirkzeit/Schmutz vorher entfernen)?"
  },

  // 15 Fragen: 3 Warm-up (aus Step 1), 10 Core, 2 Transfer
  questions: [
    // -------------------------
    // Warm-up (3) – aus Step 1
    // -------------------------

    {
      id: "j1_l1_a3_l2_q01",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Warm-up: Hygiene Ziel",
      question: "Was ist das Hauptziel von Hygiene im Salon?",
      options: ["Schneller arbeiten", "Infektionen verhindern", "Mehr Produktverkauf", "Weniger Wasserverbrauch"],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Hygiene stoppt Übertragungswege und verhindert Infektionen. Typischer Fehler: Hygiene nur als Optik/Putzen sehen. Merksatz: Hygiene = Übertragung stoppen.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig ist: Infektionen verhindern. Hygiene bedeutet Risiken erkennen und Übertragungswege unterbrechen. Merksatz: Hygiene = Übertragung stoppen."
    },

    {
      id: "j1_l1_a3_l2_q02",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Warm-up: Unsichtbare Risiken",
      statement: "Nur sichtbarer Schmutz ist ein Hygieneproblem.",
      isTrue: false,
      feedbackCorrect:
        "✅ Genau. Keime sind oft unsichtbar, deshalb zählt der Prozess, nicht nur der Eindruck. Typischer Fehler: „Sieht sauber aus“ = „ist hygienisch“. Merksatz: Unsichtbar heißt nicht ungefährlich.",
      feedbackWrong:
        "❌ Falsch. Viele Erreger sieht man nicht. Sichtbare Sauberkeit ist nicht automatisch hygienische Sicherheit. Merksatz: Unsichtbar heißt nicht ungefährlich."
    },

    {
      id: "j1_l1_a3_l2_q03",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Warm-up: Infektionskette",
      prompt: "Ordne richtig zu (Infektionskette).",
      pairs: [
        { left: "Quelle/Reservoir", right: "Wo Erreger sitzen" },
        { left: "Übertragungsweg", right: "Wie Erreger weitergegeben werden" },
        { left: "Eintrittspforte", right: "Wo Erreger in den Körper gelangen" }
      ],
      feedbackCorrect:
        "✅ Stark. Wenn du Quelle–Weg–Eintritt erkennst, weißt du sofort, welche Maßnahme Sinn macht. Typischer Fehler: „einfach sprühen“ ohne Plan. Merksatz: Woher – Wie – Wohin.",
      feedbackWrong:
        "❌ Nicht ganz. Quelle = wo, Weg = wie, Eintritt = wohin. Genau so analysierst du jede Situation in Sekunden. Merksatz: Woher – Wie – Wohin."
    },

    // -------------------------
    // Core (10) – Step 2 Inhalt
    // -------------------------

    {
      id: "j1_l1_a3_l2_q04",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Begriffe",
      question: "Was macht Reinigung primär?",
      options: [
        "Tötet alle Erreger sicher ab",
        "Entfernt Schmutz/Material und senkt die Keimzahl",
        "Ersetzt Desinfektion immer",
        "Macht steril"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Reinigung entfernt Material (Haar, Talg, Produktreste) und senkt Keime – aber nicht gezielt genug für Risiko-Situationen. Typischer Fehler: Reinigung mit Desinfektion verwechseln. Merksatz: Reinigen = wegmachen.",
      feedbackWrong:
        "❌ Nicht ganz. Reinigung heißt: Schmutz/Material entfernen und Keimzahl senken. Sie ist wichtig, aber nicht automatisch desinfizierend. Merksatz: Reinigen = wegmachen."
    },

    {
      id: "j1_l1_a3_l2_q05",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Begriffe",
      question: "Was macht Desinfektion primär?",
      options: [
        "Entfernt nur Haare von Tools",
        "Inaktiviert/abtötet Krankheitserreger (bei korrekter Anwendung)",
        "Macht alles automatisch steril",
        "Ist nur warmes Wasser"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Desinfektion wirkt gegen Erreger – aber nur mit richtigem Mittel, vollständiger Benetzung und Einwirkzeit. Typischer Fehler: zu kurz/zu wenig Mittel. Merksatz: Desinfektion braucht Zeit.",
      feedbackWrong:
        "❌ Falsch. Desinfektion ist gezielte Erregerreduktion – funktioniert nur korrekt angewendet (Mittel + Benetzung + Einwirkzeit). Merksatz: Desinfektion braucht Zeit."
    },

    {
      id: "j1_l1_a3_l2_q06",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Ablauf",
      statement: "Meist ist es sinnvoll: erst reinigen, dann desinfizieren.",
      isTrue: true,
      feedbackCorrect:
        "✅ Richtig. Schmutz kann die Wirkung schwächen – erst sauber machen, dann wirksam desinfizieren. Typischer Fehler: Spray auf Dreck. Merksatz: Erst sauber, dann sicher.",
      feedbackWrong:
        "❌ Doch. In der Praxis ist „erst reinigen, dann desinfizieren“ oft richtig, weil Schmutz die Wirkung schwächen kann. Merksatz: Erst sauber, dann sicher."
    },

    {
      id: "j1_l1_a3_l2_q07",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Wirksamkeit",
      question: "Welche Faktoren sind bei Desinfektion entscheidend?",
      options: [
        "Richtige Konzentration/Produkt",
        "Einwirkzeit",
        "Fläche/Tool vollständig benetzen",
        "Angenehmer Duft"
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "✅ Genau. Wirksamkeit entsteht aus Produkt + Benetzung + Einwirkzeit. Typischer Fehler: sofort trocken wischen. Merksatz: Benetzen + warten.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an: Produkt richtig, vollständig benetzen, Einwirkzeit abwarten. Merksatz: Benetzen + warten.",
      feedbackWrong:
        "❌ Nicht korrekt. Duft ist kein Wirkfaktor. Entscheidend sind Produkt/Konzentration, vollständige Benetzung und Einwirkzeit. Merksatz: Benetzen + warten."
    },

    {
      id: "j1_l1_a3_l2_q08",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Unterschiede klar",
      prompt: "Ordne die Begriffe richtig zu.",
      pairs: [
        { left: "Reinigung", right: "Schmutz entfernen, Keimzahl senken" },
        { left: "Desinfektion", right: "Erreger wirksam inaktivieren/abtöten" },
        { left: "Sterilisation", right: "Spezialfall: frei von vermehrungsfähigen Keimen" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Begriffe sauber trennen = richtige Maßnahme im Alltag. Typischer Fehler: „steril“ sagen, wenn „desinfiziert“ gemeint ist. Merksatz: Reinigen ≠ Desinfizieren.",
      feedbackWrong:
        "❌ Nicht ganz. Reinigung entfernt, Desinfektion reduziert Erreger, Sterilisation ist Spezialfall. Merksatz: Reinigen ≠ Desinfizieren."
    },

    {
      id: "j1_l1_a3_l2_q09",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Salon-Situation",
      situationTitle: "Farbreste im Waschbecken",
      situationText: [
        "Im Waschbecken sind sichtbare Farbreste und Produktfilm.",
        "Du hast wenig Zeit zwischen zwei Kunden."
      ],
      options: [
        "Direkt Desinfektionsspray drauf – fertig.",
        "Erst reinigen (mechanisch), danach bei Bedarf desinfizieren.",
        "Nur Wasser laufen lassen, dann passt das."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Desinfektion auf Schmutz kann weniger wirksam sein, weil Rückstände Benetzung/Wirkung stören.",
        "Professionell: Erst Schmutz weg, dann gezielt desinfizieren – so wird es wirksam.",
        "Wasser allein entfernt Produktfilm oft nicht zuverlässig und reduziert Erreger nicht gezielt."
      ],
      feedbackCorrect:
        "✅ Richtig. Sichtbarer Schmutz zuerst weg, sonst ist Desinfektion oft nur „Kosmetik“. Typischer Fehler: Spray auf Dreck. Merksatz: Erst reinigen, dann desinfizieren.",
      feedbackWrong:
        "❌ Nicht optimal. Bei sichtbaren Rückständen zuerst reinigen, dann gezielt desinfizieren. Merksatz: Erst reinigen, dann desinfizieren."
    },

    {
      id: "j1_l1_a3_l2_q10",
      type: "gap_fill",
      gameType: "gap_fill",
      topic: "Schlüsselbegriff",
      textBefore: "Desinfektion wirkt nur zuverlässig, wenn die ",
      correctAnswer: "Einwirkzeit",
      textAfter: " eingehalten wird.",
      options: ["Einwirkzeit", "Playlist", "Spiegelhöhe", "Kundenzahl"],
      feedbackCorrect:
        "✅ Genau. Ohne Einwirkzeit hat das Mittel nicht genug Zeit zu wirken. Typischer Fehler: sofort trocken wischen. Merksatz: Einwirkzeit ist Pflicht.",
      feedbackWrong:
        "❌ Falsch. Richtig ist: Einwirkzeit. Wenn du sofort abwischst, nimmst du dem Mittel die Wirkung. Merksatz: Einwirkzeit ist Pflicht."
    },

    {
      id: "j1_l1_a3_l2_q11",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Prozess",
      prompt: "Bringe den Ablauf einer wirksamen Flächendesinfektion in die richtige Reihenfolge.",
      steps: [
        "Grobe Rückstände entfernen (reinigen)",
        "Desinfektionsmittel vollständig auftragen/benetzen",
        "Einwirkzeit laut Hersteller abwarten",
        "Fläche trocknen lassen / sauber abschließen"
      ],
      feedbackCorrect:
        "✅ Perfekt. So wird es wirksam und nachvollziehbar. Typischer Fehler: Benetzung/Einwirkzeit überspringen. Merksatz: Reinigen – benetzen – warten – abschließen.",
      feedbackWrong:
        "❌ Nicht ganz. Wirksam ist: reinigen → benetzen → Einwirkzeit → abschließen. Merksatz: Reinigen – benetzen – warten – abschließen."
    },

    {
      id: "j1_l1_a3_l2_q12",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Alltagssicherheit",
      prompt: "Sortiere: Was ist eher Reinigung, was ist eher Desinfektion?",
      categories: [
        { id: "reinigung", label: "Reinigung (Schmutz weg)" },
        { id: "desinfektion", label: "Desinfektion (Erreger wirksam reduzieren)" }
      ],
      items: [
        { text: "Haar- und Produktreste vom Wagen entfernen", categoryId: "reinigung" },
        { text: "Kontaktflächen nach Kundin benetzen und Einwirkzeit abwarten", categoryId: "desinfektion" },
        { text: "Shampooreste und Film aus dem Becken schrubben", categoryId: "reinigung" },
        { text: "Tool/Fläche mit geeignetem Mittel gemäß Vorgabe behandeln", categoryId: "desinfektion" }
      ],
      feedbackCorrect:
        "✅ Sehr gut. Reinigung entfernt Material, Desinfektion reduziert Erreger gezielt. Typischer Fehler: alles „Desinfektion“ nennen. Merksatz: Erst Schmutz weg, dann Keime runter.",
      feedbackWrong:
        "❌ Denk so: Reinigung = Material weg. Desinfektion = Erreger reduzieren (mit Einwirkzeit). Merksatz: Erst Schmutz weg, dann Keime runter."
    },

    {
      id: "j1_l1_a3_l2_q13",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Fehler erkennen",
      question: "Was ist ein häufiger Fehler bei Desinfektion im Salonalltag?",
      options: ["Zu viel Licht am Platz", "Zu kurze Einwirkzeit / zu wenig Mittel", "Zu sauberes Tuch benutzen", "Zu leise sprechen"],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Zu kurz/zu wenig ist der Klassiker – dann bleibt die Wirkung unsicher. Typischer Fehler: „ein Sprühstoß reicht“. Merksatz: Benetzen + warten.",
      feedbackWrong:
        "❌ Nicht korrekt. Der häufigste Fehler ist: zu kurze Einwirkzeit oder zu wenig Mittel. Merksatz: Benetzen + warten."
    },

    // -------------------------
    // Transfer (2)
    // -------------------------

    {
      id: "j1_l1_a3_l2_q14",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Transfer",
      situationTitle: "3 Minuten zwischen zwei Kunden",
      situationText: [
        "Du hast nur 3 Minuten zwischen zwei Kunden am Bedienplatz.",
        "Welche Lösung ist professionell und sicher?"
      ],
      options: [
        "Schnell drüber sprühen und sofort trocken wischen.",
        "Kontaktflächen reinigen, dann desinfizieren und Einwirkzeit einplanen (Prioritäten setzen).",
        "Nichts machen – Zeit ist knapp."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Ohne Einwirkzeit bleibt die Wirkung unsicher – sofort trocken wischen ist der Klassiker-Fehler.",
        "Professionell heißt: priorisieren (Kontaktflächen) und korrekt durchführen – lieber wenige Flächen richtig als viele halb.",
        "Zeitdruck ist keine Begründung für Hygienelücken – Risiko steigt genau im Stress."
      ],
      feedbackCorrect:
        "✅ Genau. Lieber priorisieren und korrekt machen als hektisch „halb“. Typischer Fehler: sofort trocken wischen. Merksatz: Weniger, aber richtig.",
      feedbackWrong:
        "❌ Die sichere Lösung ist: priorisieren (Kontaktflächen) und korrekt durchführen – inkl. Einwirkzeit. Merksatz: Weniger, aber richtig."
    },

    {
      id: "j1_l1_a3_l2_q15",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle",
      statement: "Wenn es stark riecht und schäumt, ist es automatisch ein Desinfektionsmittel.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Geruch/Schaum sagt nichts über Wirksamkeit aus – entscheidend sind Herstellerangaben und Anwendung. Typischer Fehler: nach Gefühl statt nach Vorgabe. Merksatz: Etikett schlägt Eindruck.",
      feedbackWrong:
        "❌ Falsch. Geruch/Schaum sind kein Beweis. Entscheidend sind Produktangabe, Benetzung und Einwirkzeit. Merksatz: Etikett schlägt Eindruck."
    }
  ]
};

export default LEKTION_2;