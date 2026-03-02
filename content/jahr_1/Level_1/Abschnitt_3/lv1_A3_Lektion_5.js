// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_5.js
// Lektion 5 – Arbeitsplatz resetten (Bedienplatz + Waschbecken)

const LEKTION_5 = {
  id: "j1_l1_a3_l5",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Arbeitsplatz resetten: Bedienplatz & Waschbecken",
  track: "hygiene",
  energy: 16,
  bonusStrikeOnPerfect: true,

  // Optional, non-breaking
  microLearning: {
    hook: "Ein sauberer Reset ist nicht „Putzen am Ende“ – er entscheidet zwischen Profi-Ablauf und Keim-Weitergabe von Kunde zu Kunde.",
    keyPoints: [
      "Reset bedeutet: Kontaktflächen + Tools + Textilien + Abfall in einen sicheren Standard bringen – jedes Mal.",
      "Priorität haben High-Touch-Flächen (Griffe, Armlehnen, Wagen, Waschbeckenrand) und alles, was mit Haut/Haare/Feuchtigkeit zu tun hat.",
      "Zeitdruck löst man mit Reihenfolge: wenige Punkte konsequent richtig statt alles halb."
    ],
    practiceTask:
      "Heute: Setze dir einen 3-Minuten-Reset-Timer nach jeder Kundin. Arbeite immer dieselbe Reihenfolge ab: Used weg → Abfall/Textilien → Kontaktflächen → Waschbecken → Abschlusscheck (Clean/Used).",
    reflectionQuestion:
      "Wo verlierst du beim Reset am meisten Zeit – und welche Reihenfolge hilft dir, trotzdem hygienisch sicher zu bleiben?"
  },

  // 15 Fragen: 3 Warm-up (aus Step 4), 10 Core, 2 Transfer
  questions: [
    // -------------------------
    // Warm-up (3) – aus Step 4
    // -------------------------

    {
      id: "j1_l1_a3_l5_q01",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Warm-up: Tool-Aufbereitung",
      prompt: "Bringe die Schritte der Tool-Aufbereitung in die richtige Reihenfolge.",
      steps: [
        "Haare/Produktreste entfernen",
        "Reinigen (geeignetes Mittel, mechanisch)",
        "Desinfizieren (geeignetes Mittel, Einwirkzeit)",
        "Trocknen",
        "Sauber lagern (Clean/Used trennen)"
      ],
      feedbackCorrect:
        "✅ Perfekt. Genau diese Logik brauchst du auch beim Platz-Reset: erst weg, dann reinigen, dann sichern. Typischer Fehler: nass weglegen oder Clean/Used mischen. Merksatz: R-R-D-T-L.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig: Reste weg → reinigen → desinfizieren → trocknen → lagern. Merksatz: R-R-D-T-L."
    },

    {
      id: "j1_l1_a3_l5_q02",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Warm-up: Ziel",
      question: "Was ist das Hauptziel der Tool-Aufbereitung?",
      options: [
        "Tools schöner machen",
        "Übertragung über Gegenstände verhindern",
        "Zeit sparen",
        "Mehr Schaum erzeugen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Tools und Flächen sind indirekte Übertragungswege – Reset und Aufbereitung unterbrechen die Kette. Typischer Fehler: Optik statt Prozess. Merksatz: Tool/Fläche = Weg.",
      feedbackWrong:
        "❌ Nicht korrekt. Ziel ist, Übertragung über Gegenstände zu verhindern. Merksatz: Tool/Fläche = Weg."
    },

    {
      id: "j1_l1_a3_l5_q03",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Warm-up: Clean/Used",
      statement: "Ein Tool ist erst dann 'Clean', wenn es aufbereitet, trocken und sauber gelagert ist.",
      isTrue: true,
      feedbackCorrect:
        "✅ Genau. 'Clean' ist ein Zustand, nicht ein Gefühl. Typischer Fehler: Haare entfernt = clean. Merksatz: Clean heißt: fertig aufbereitet.",
      feedbackWrong:
        "❌ Doch. Clean bedeutet: komplett aufbereitet, trocken und sauber gelagert. Merksatz: Clean heißt: fertig aufbereitet."
    },

    // -------------------------
    // Core (10) – Step 5 Inhalt
    // -------------------------

    {
      id: "j1_l1_a3_l5_q04",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Reset-Ziel",
      question: "Was bedeutet 'Arbeitsplatz resetten' im Hygiene-Kontext am besten?",
      options: [
        "Nur einmal am Abend gründlich putzen",
        "Nach jedem Kunden den Platz in einen hygienisch sicheren Standard zurücksetzen",
        "Nur sichtbare Haare wegfegen",
        "Nur das Waschbecken ausspülen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Richtig. Reset ist ein Standard nach jedem Kunden: Used weg, Kontaktflächen sichern, Waschbecken sauber, Textilien/Abfall korrekt. Typischer Fehler: Reset auf den Abend schieben. Merksatz: Reset = nach jedem Kunden.",
      feedbackWrong:
        "❌ Nicht ganz. Reset bedeutet: nach jedem Kunden hygienisch sicher zurücksetzen, nicht nur abends. Merksatz: Reset = nach jedem Kunden."
    },

    {
      id: "j1_l1_a3_l5_q05",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "High-Touch-Flächen",
      question: "Welche Bereiche sind typische High-Touch-Flächen am Bedienplatz? (Mehrfach)",
      options: [
        "Arbeitswagen-Griffe",
        "Armlehnen/Bedienstuhl",
        "Sprühflaschen/Produktflaschen außen",
        "Deckenlampe",
        "Schubladen-/Türgriffe am Platz"
      ],
      correctIndices: [0, 1, 2, 4],
      feedbackCorrect:
        "✅ Genau. High-Touch heißt: wird oft angefasst – dort passiert die meiste indirekte Übertragung. Typischer Fehler: nur Arbeitsfläche wischen, Griffe vergessen. Merksatz: Griff = Risiko.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an alles, was du ständig anfasst: Griffe, Armlehnen, Flaschen, Schubladen. Merksatz: Griff = Risiko.",
      feedbackWrong:
        "❌ Nicht korrekt. High-Touch sind Griffe, Armlehnen, Flaschen außen, Schubladen/Türen. Merksatz: Griff = Risiko."
    },

    {
      id: "j1_l1_a3_l5_q06",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "3-Minuten-Reset",
      prompt: "Ordne den 3-Minuten-Reset am Bedienplatz in die richtige Reihenfolge.",
      steps: [
        "Used-Tools sofort in Used-Zone / Box legen",
        "Abfall entsorgen und benutzte Textilien in den Wäschebereich",
        "Kontaktflächen reinigen/desinfizieren (je nach Standard) – Griffe/Armlehnen/Wagen",
        "Arbeitsfläche und Ablageflächen abschließen (trocken, ordentlich)",
        "Abschlusscheck: Clean/Used stimmt, Platz ist startklar"
      ],
      feedbackCorrect:
        "✅ Perfekt. Diese Reihenfolge spart Zeit und verhindert Kreuzkontamination. Typischer Fehler: erst wischen, dann Used wieder drauflegen. Merksatz: Erst weg, dann Fläche.",
      feedbackWrong:
        "❌ Nicht ganz. Zeit-sicher ist: erst Used weg → dann Abfall/Textilien → dann Flächen → Abschlusscheck. Merksatz: Erst weg, dann Fläche."
    },

    {
      id: "j1_l1_a3_l5_q07",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Salon-Situation",
      situationTitle: "Reset unter Zeitdruck",
      situationText: [
        "Du hast nur 2–3 Minuten bis zum nächsten Kunden.",
        "Du schaffst nicht alles perfekt."
      ],
      options: [
        "Lieber gar nichts machen, sonst wird es hektisch.",
        "Priorisieren: Used weg + High-Touch-Flächen + Waschbeckenrand, dann Abschlusscheck.",
        "Nur die Haare wegfegen – das sieht am wichtigsten aus."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Auch unter Zeitdruck brauchst du einen Mindeststandard, sonst steigt Risiko genau im Stress.",
        "Professionell: Prioritäten auf Übertragungswege (Used/High-Touch/Waschbereich).",
        "Optik ohne Hygiene ist eine typische Fehlerfalle – Griffe/Flächen bleiben riskant."
      ],
      feedbackCorrect:
        "✅ Genau. Unter Zeitdruck gilt: Minimum-Standard sichern (Used + High-Touch + Waschbereich). Typischer Fehler: nur Optik. Merksatz: Weniger, aber richtig.",
      feedbackWrong:
        "❌ Nicht optimal. Sicher ist: Used weg, High-Touch-Flächen sichern, Waschbereich kurz korrekt – dann Abschlusscheck. Merksatz: Weniger, aber richtig."
    },

    {
      id: "j1_l1_a3_l5_q08",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Was wohin?",
      prompt: "Ordne zu: Was ist Used, was ist Clean?",
      pairs: [
        { left: "Kamm liegt am Platz, Haare sind entfernt", right: "Used (muss aufbereitet werden)" },
        { left: "Handtuch wurde benutzt", right: "Used (in Wäschebereich)" },
        { left: "Tool ist aufbereitet, trocken und gelagert", right: "Clean" }
      ],
      feedbackCorrect:
        "✅ Richtig. Clean ist nur, was komplett aufbereitet und korrekt gelagert ist. Typischer Fehler: Haare abziehen = clean. Merksatz: Clean heißt: fertig.",
      feedbackWrong:
        "❌ Nicht ganz. Haare entfernt ist trotzdem Used. Clean ist nur: aufbereitet, trocken, gelagert. Merksatz: Clean heißt: fertig."
    },

    {
      id: "j1_l1_a3_l5_q09",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Waschbecken-Reset",
      question: "Welche Punkte gehören zum hygienisch sicheren Reset am Waschbecken? (Mehrfach)",
      options: [
        "Sichtbare Rückstände entfernen (reinigen)",
        "Waschbeckenrand/Armauflage als Kontaktfläche sichern (je nach Standard desinfizieren)",
        "Benutzte Nackenschutz/Handtücher korrekt entsorgen (Wäsche/Abfall)",
        "Nur Wasser laufen lassen und fertig"
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "✅ Genau. Waschbecken ist ein Hochrisiko-Bereich: Feuchtigkeit + Kontaktflächen + Textilien. Typischer Fehler: nur ausspülen. Merksatz: Waschbereich = High-Touch + feucht.",
      feedbackPartially:
        "⚠️ Teilweise. Denk an: reinigen, Kontaktflächen sichern, Textilien korrekt weg. Merksatz: Waschbereich = High-Touch + feucht.",
      feedbackWrong:
        "❌ Nicht korrekt. Dazu gehören reinigen, Kontaktflächen sichern und Textilien korrekt entsorgen. Merksatz: Waschbereich = High-Touch + feucht."
    },

    {
      id: "j1_l1_a3_l5_q10",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle",
      statement: "Wenn der Platz ordentlich aussieht, ist der Reset hygienisch sicher.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Ordnung ist gut, aber Hygiene hängt an Kontaktflächen, Used-Logik und Prozess (Reinigung/Desinfektion/Einwirkzeit). Typischer Fehler: Optik mit Sicherheit verwechseln. Merksatz: Ordentlich ≠ hygienisch.",
      feedbackWrong:
        "❌ Falsch. Ordentlich aussehen heißt nicht hygienisch sicher – Kontaktflächen und Used/Clean sind entscheidend. Merksatz: Ordentlich ≠ hygienisch."
    },

    {
      id: "j1_l1_a3_l5_q11",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Schwerer: Priorität",
      prompt: "Sortiere: Was hat im Reset Priorität 1 und was Priorität 2?",
      categories: [
        { id: "p1", label: "Priorität 1 (Übertragungswege stoppen)" },
        { id: "p2", label: "Priorität 2 (Nice-to-have / danach)" }
      ],
      items: [
        { text: "Used-Tools in Used-Zone", categoryId: "p1" },
        { text: "Armlehnen/Griffe/Wagen-Griffe sichern", categoryId: "p1" },
        { text: "Waschbeckenrand/Armauflage sichern", categoryId: "p1" },
        { text: "Deko und Magazine gerade rücken", categoryId: "p2" }
      ],
      feedbackCorrect:
        "✅ Stark. Priorität 1 stoppt Übertragung, Priorität 2 ist Optik. Typischer Fehler: Optik zuerst. Merksatz: Erst Risiko, dann Rest.",
      feedbackWrong:
        "❌ Denk so: Priorität 1 sind Übertragungswege (Used/Griffe/Waschbereich). Optik kommt danach. Merksatz: Erst Risiko, dann Rest."
    },

    {
      id: "j1_l1_a3_l5_q12",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Mindeststandard",
      question: "Welche Kombination ist der beste Mindeststandard, wenn wirklich wenig Zeit ist?",
      options: [
        "Nur Boden fegen",
        "Used weg + High-Touch-Flächen sichern + kurzer Waschbecken-Check",
        "Nur Spiegel putzen",
        "Nur die Arbeitsfläche abwischen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "✅ Genau. Damit stoppst du die wichtigsten Übertragungswege: Tools, Griffe, Waschbereich. Typischer Fehler: nur Arbeitsfläche/Optik. Merksatz: Used + Griffe + Waschbereich.",
      feedbackWrong:
        "❌ Nicht optimal. Der Mindeststandard ist: Used weg, High-Touch sichern, Waschbecken-Check. Merksatz: Used + Griffe + Waschbereich."
    },

    {
      id: "j1_l1_a3_l5_q13",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Schwerer: Kreuzkontamination",
      situationTitle: "Clean wieder kontaminiert",
      situationText: [
        "Du hast den Wagen desinfiziert und sofort danach Used-Tools kurz darauf abgelegt.",
        "Jetzt willst du den nächsten Kunden bedienen."
      ],
      options: [
        "Passt – der Wagen war ja gerade desinfiziert.",
        "Erneut sichern: Used weg, Kontaktfläche erneut reinigen/desinfizieren und dann erst starten.",
        "Nur die Tools wegnehmen – Wagen ist egal."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Das Ablegen von Used kontaminiert die Fläche wieder – der Prozess ist unterbrochen.",
        "Professionell: erkenne die Kreuzkontamination, sichere die Fläche erneut und starte sauber.",
        "Wenn Used auflag, ist die Fläche wieder Kontaktpunkt – muss erneut gesichert werden."
      ],
      feedbackCorrect:
        "✅ Genau. Das ist Kreuzkontamination: Clean wurde wieder Used. Neu sichern und erst dann starten. Typischer Fehler: „war doch eben sauber“. Merksatz: Clean bleibt nur ohne Used.",
      feedbackWrong:
        "❌ Richtig ist: erneut sichern. Used auf Clean = Kreuzkontamination. Merksatz: Clean bleibt nur ohne Used."
    },

    // -------------------------
    // Transfer (2) – Szenario + Fehlerfalle
    // -------------------------

    {
      id: "j1_l1_a3_l5_q14",
      type: "timeline_order",
      gameType: "timeline_order",
      topic: "Transfer: Waschbecken-Miniprozess",
      prompt: "Ordne den Mini-Reset fürs Waschbecken in die richtige Reihenfolge.",
      steps: [
        "Benutzte Textilien/Nackenschutz entfernen (Wäsche/Abfall)",
        "Sichtbare Rückstände entfernen (reinigen)",
        "Kontaktflächen (Rand/Armauflage) sichern (je nach Standard desinfizieren)",
        "Abschluss: trocken, ordentlich, startklar"
      ],
      feedbackCorrect:
        "✅ Perfekt. Textilien zuerst raus, dann reinigen, dann Kontaktflächen sichern. Typischer Fehler: erst sprühen, dann Textilien bewegen. Merksatz: Erst weg, dann Fläche.",
      feedbackWrong:
        "❌ Nicht ganz. Richtig: Textilien weg → reinigen → Kontaktflächen sichern → Abschluss. Merksatz: Erst weg, dann Fläche."
    },

    {
      id: "j1_l1_a3_l5_q15",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Fehlerfalle: Zeitdruck",
      statement: "Unter Zeitdruck ist es besser, alles ein bisschen zu machen, als wenige Punkte wirklich konsequent.",
      isTrue: false,
      feedbackCorrect:
        "✅ Richtig. Unter Stress gilt: priorisieren und korrekt durchführen, sonst bleibt die Wirkung unsicher. Typischer Fehler: hektisch halb. Merksatz: Weniger, aber richtig.",
      feedbackWrong:
        "❌ Falsch. Besser ist: wenige Punkte korrekt (Used + High-Touch + Waschbereich) als alles halb. Merksatz: Weniger, aber richtig."
    }
  ]
};

export default LEKTION_5;