// content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_1.js
// Lektion 1 - Warum Hygiene? Infektionskette im Salon

const LEKTION_1 = {
  id: "j1_l1_a3_l1",
  jahr: 1,
  level: 1,
  section: 3,
  title: "Warum Hygiene? Infektionskette im Salon",
  track: "hygiene",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Die meisten Hygienefehler passieren nicht aus Unwissen - sondern weil man zu schnell ist und den Übertragungsweg übersieht.",
    keyPoints: [
      "Eine Infektion entsteht, wenn Erreger + Übertragungsweg + Eintrittspforte zusammenkommen.",
      "Im Salon sind Hände und Tools die häufigsten Übertragungswege.",
      "Hygiene heißt: Kette unterbrechen - nicht nur sauber aussehen."
    ],
    practiceTask:
      "Heute am Platz: Definiere eine klare Used-Zone (Box/Schale). Jedes benutzte Tool sofort dort hinein. Ziel: Used-Zone am Ende leer = alles aufbereitet.",
    reflectionQuestion:
      "Welcher Kontaktpunkt war heute dein größtes Risiko (Hände / Tool / Fläche) - und was hast du konkret geändert?"
  },

  questions: [

    // ── Q01 – Single Choice (Core) ────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q01",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Hygiene Basics",
      question: "Was ist das Hauptziel von Hygiene im Salon?",
      options: [
        "Schneller arbeiten",
        "Infektionen verhindern",
        "Mehr Produktverkauf",
        "Weniger Wasserverbrauch"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig. Hygiene verhindert, dass Krankheitserreger über Hände, Tools und Kontaktflächen weitergegeben werden. Typischer Fehler: Hygiene nur als 'Putzen' sehen. Merksatz: Hygiene = Übertragung stoppen.",
      feedbackWrong:
        "Nicht ganz. Richtig ist: Infektionen verhindern. Hygiene ist Risikokontrolle (Hände/Tools/Flächen), nicht nur optische Sauberkeit. Merksatz: Hygiene = Übertragung stoppen."
    },

    // ── Q02 – True/False (Core) ───────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q02",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Unsichtbare Risiken",
      statement: "Nur sichtbarer Schmutz ist ein Hygieneproblem.",
      isTrue: false,
      feedbackCorrect:
        "Genau. Viele Erreger sind unsichtbar - eine Fläche kann sauber aussehen und trotzdem Keime tragen (z. B. Griffe, Handy). Typischer Fehler: nach Optik urteilen. Merksatz: Unsichtbar heißt nicht ungefährlich.",
      feedbackWrong:
        "Falsch. Erreger sind oft unsichtbar. 'Sieht sauber aus' heißt nicht 'hygienisch sicher'. Typischer Fehler: Optik mit Hygiene verwechseln. Merksatz: Unsichtbar heißt nicht ungefährlich."
    },

    // ── Q03 – Multiple Choice (Core) ──────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q03",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Infektionskette",
      question: "Welche Teile gehören zur Infektionskette?",
      options: [
        "Erreger",
        "Übertragungsweg",
        "Eintrittspforte",
        "Musiklautstärke"
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "Richtig. Für eine Infektion braucht es Erreger + Weg + Eintritt. Wenn du ein Glied brichst, stoppst du die Kette. Typischer Fehler: nur an 'Keime' denken, nicht an den Weg. Merksatz: Erreger - Weg - Eintritt.",
      feedbackPartially:
        "Teilweise richtig. Denk an das Dreieck: Erreger - Übertragungsweg - Eintrittspforte. Typischer Fehler: ein Baustein fehlt. Merksatz: Erreger - Weg - Eintritt.",
      feedbackWrong:
        "Nicht korrekt. Richtig sind: Erreger, Übertragungsweg, Eintrittspforte. Typischer Fehler: Hygiene mit Ordnung verwechseln. Merksatz: Erreger - Weg - Eintritt."
    },

    // ── Q04 – Match Pairs (Core) ──────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q04",
      type: "match_pairs",
      gameType: "match_pairs",
      topic: "Begriffe verstehen",
      prompt: "Ordne die Begriffe der passenden Erklärung zu.",
      pairs: [
        {
          left: "Quelle/Reservoir",
          right: "Wo Erreger sitzen (z. B. Haut, Textilien, Haare)"
        },
        {
          left: "Übertragungsweg",
          right: "Wie Erreger weitergegeben werden (z. B. Hände, Kamm, Flächen)"
        },
        {
          left: "Eintrittspforte",
          right: "Wo Erreger in den Körper gelangen (z. B. Mikroverletzung, Schleimhaut)"
        }
      ],
      feedbackCorrect:
        "Stark. Wenn du 'Woher - Wie - Wohin?' erkennst, weißt du sofort, welche Hygienemaßnahme nötig ist. Typischer Fehler: nur 'irgendwas sprühen'. Merksatz: Woher - Wie - Wohin.",
      feedbackWrong:
        "Schau dir das Dreieck nochmal an: Quelle (wo), Weg (wie), Eintritt (wo rein). Typischer Fehler: Begriffe durcheinander. Merksatz: Woher - Wie - Wohin."
    },

    // ── Q05 – Scenario Choice (Core) ──────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q05",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Salon-Situation",
      situationTitle: "Kleine Schramme am Ohr",
      situationText: [
        "Du siehst an der Ohrkante eine kleine Schramme.",
        "Du möchtest direkt mit der Schere weiterschneiden."
      ],
      options: [
        "Ignorieren und schnell fertig werden.",
        "Kurz stoppen: Hände/Tool-Status prüfen, ggf. desinfizieren und die Stelle schützen/umgehen.",
        "Nur kurz trocken wischen und weitermachen."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Risiko: Eintrittspforte wird übergangen. Tempo geht vor Sicherheit.",
        "Professionell: Risiko erkennen, Übertragungsweg stoppen, dann weiterarbeiten.",
        "Abwischen ist keine Hygienemaßnahme und schützt nicht vor Übertragung."
      ],
      feedbackCorrect:
        "Genau so. Schramme = Eintrittspforte. Kurz sichern, dann weiter. Typischer Fehler: aus Zeitdruck durchziehen. Merksatz: Bei Wunde: stoppen, sichern, dann weiter.",
      feedbackWrong:
        "Die Profi-Lösung ist: stoppen, prüfen, ggf. desinfizieren und sicher weiterarbeiten. Typischer Fehler: Tempo vor Sicherheit. Merksatz: Bei Wunde: stoppen, sichern, dann weiter."
    },

    // ── Q06 – Gap Fill (Core) ─────────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q06",
      type: "gap_fill",
      gameType: "gap_fill",
      topic: "Infektionskette",
      textBefore: "Eine Infektion braucht drei Bausteine: Erreger, Übertragungsweg und ",
      correctAnswer: "Eintrittspforte",
      textAfter: ". Fehlt einer davon, kann keine Infektion entstehen.",
      options: [
        "Eintrittspforte",
        "Werkzeug",
        "Schutzbekleidung",
        "Temperatur"
      ],
      feedbackCorrect:
        "Richtig. Das Dreieck Erreger - Weg - Eintrittspforte ist die Grundlage jeder Hygienemaßnahme. Unterbrich ein Glied, stoppst du die Kette. Merksatz: Erreger - Weg - Eintritt.",
      feedbackWrong:
        "Denk ans Dreieck: Erreger + Übertragungsweg + Eintrittspforte. Alle drei müssen zusammenkommen. Merksatz: Erreger - Weg - Eintritt."
    },

    // ── Q07 – True/False (Core) ───────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q07",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Übertragungswege",
      statement: "Im Salon sind die Hände eines der häufigsten Übertragungsmittel für Erreger.",
      isTrue: true,
      feedbackCorrect:
        "Genau. Hände berühren fast jeden Kontaktpunkt - Kunde, Tool, Fläche. Wer die Händehygiene vernachlässigt, unterbricht die Kette nicht. Typischer Fehler: Handschuhe als Ersatz für Desinfektion sehen. Merksatz: Hände zuerst.",
      feedbackWrong:
        "Richtig wäre: Wahr. Hände sind der direkteste Übertragungsweg im Salon. Typischer Fehler: Handschuhe beruhigen, aber schützen nur, wenn sie regelmäßig gewechselt werden. Merksatz: Hände zuerst."
    },

    // ── Q08 – Single Choice (Core) ────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q08",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Händehygiene",
      question: "Wann solltest du im Salon deine Hände desinfizieren?",
      options: [
        "Nur nach der Mittagspause",
        "Vor und nach jedem Kundenkontakt",
        "Nur wenn du sie schmutzig siehst",
        "Einmal am Morgen reicht"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig. Vor und nach dem Kundenkontakt - so unterbrichst du den Übertragungsweg in beide Richtungen. Typischer Fehler: nur nach dem Kontakt desinfizieren. Merksatz: Vor UND nach = Schutz in beide Richtungen.",
      feedbackWrong:
        "Richtig wäre: Vor und nach jedem Kundenkontakt. Desinfektion nur nach Bedarf oder einmal täglich reicht nicht - Erreger sind nicht sichtbar. Merksatz: Vor UND nach = Schutz in beide Richtungen."
    },

    // ── Q09 – Multiple Choice (Core) ──────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q09",
      type: "multiple_choice_quiz",
      gameType: "multiple_choice_quiz",
      topic: "Übertragungswege im Salon",
      question: "Welche der folgenden Kontaktpunkte können Erreger im Salon übertragen?",
      options: [
        "Kamm und Schere",
        "Handflächen",
        "Spiegel (ohne Berührung)",
        "Handtücher"
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Genau. Kamm, Schere, Hände und Handtücher berühren direkt Haut oder Haare und übertragen Erreger. Ein Spiegel ohne Berührung ist kein Risiko. Typischer Fehler: nur scharfe Tools beachten. Merksatz: Was berührt, kann übertragen.",
      feedbackPartially:
        "Fast. Kamm, Schere, Hände und Handtücher sind alle Kontaktpunkte. Spiegel ohne direkte Berührung zählt nicht. Merksatz: Was berührt, kann übertragen.",
      feedbackWrong:
        "Richtig sind: Kamm/Schere, Handflächen und Handtücher. Alles, was direkt Haut oder Haare berührt, ist ein potenzieller Übertragungsweg. Merksatz: Was berührt, kann übertragen."
    },

    // ── Q10 – Order Steps (Core) ──────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q10",
      type: "order_steps",
      gameType: "order_steps",
      topic: "Tool-Aufbereitung",
      prompt: "Bringe die Schritte zur Tool-Aufbereitung in die richtige Reihenfolge.",
      items: [
        "Tool sofort nach Benutzung in Used-Zone legen",
        "Grobe Verunreinigungen entfernen (reinigen)",
        "Desinfektionsmittel auftragen und Einwirkzeit einhalten",
        "Tool in saubere Zone oder Aufbewahrung zurücklegen"
      ],
      correctOrder: [
        "Tool sofort nach Benutzung in Used-Zone legen",
        "Grobe Verunreinigungen entfernen (reinigen)",
        "Desinfektionsmittel auftragen und Einwirkzeit einhalten",
        "Tool in saubere Zone oder Aufbewahrung zurücklegen"
      ],
      feedbackCorrect:
        "Perfekt. Used-Zone - reinigen - desinfizieren - saubere Zone: Das ist der Profi-Ablauf. Typischer Fehler: Desinfektion überspringen oder Einwirkzeit ignorieren. Merksatz: Erst reinigen, dann desinfizieren.",
      feedbackWrong:
        "Die richtige Reihenfolge: Erst Used-Zone, dann reinigen, dann desinfizieren (Einwirkzeit!), dann zurücklegen. Typischer Fehler: reinigen und desinfizieren gleichsetzen. Merksatz: Erst reinigen, dann desinfizieren."
    },

    // ── Q11 – True/False (Core) ───────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q11",
      type: "true_false_swipe",
      gameType: "true_false_swipe",
      topic: "Reinigen vs. Desinfizieren",
      statement: "Reinigen und Desinfizieren sind dasselbe - wer reinigt, desinfiziert gleichzeitig.",
      isTrue: false,
      feedbackCorrect:
        "Richtig. Reinigen entfernt sichtbaren Schmutz, Desinfizieren tötet Erreger ab. Beides ist nötig - und in dieser Reihenfolge. Typischer Fehler: Reinigen als ausreichend betrachten. Merksatz: Sauber aussehen ist nicht gleich hygienisch sicher.",
      feedbackWrong:
        "Das ist falsch. Reinigen entfernt nur sichtbaren Schmutz. Desinfizieren tötet Erreger ab. Nur beides zusammen - in der richtigen Reihenfolge - macht ein Tool sicher. Merksatz: Sauber aussehen ist nicht gleich hygienisch sicher."
    },

    // ── Q12 – Single Choice (Core) ────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q12",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Desinfizieren",
      question: "Was macht ein Desinfektionsmittel, das ein normales Reinigungsmittel NICHT leistet?",
      options: [
        "Sichtbaren Schmutz entfernen",
        "Keime und Erreger abtöten oder inaktivieren",
        "Den Geruch neutralisieren",
        "Tools schneller trocknen"
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau. Desinfektionsmittel enthalten Wirkstoffe, die Erreger chemisch zerstören oder inaktivieren - das schafft kein normales Reinigungsmittel. Typischer Fehler: beide gleichsetzen. Merksatz: Desinfizieren = Erreger stoppen, nicht nur Schmutz weg.",
      feedbackWrong:
        "Richtig wäre: Keime und Erreger abtöten. Reinigungsmittel entfernen Schmutz, Desinfektionsmittel zerstören Erreger. Merksatz: Desinfizieren = Erreger stoppen, nicht nur Schmutz weg."
    },

    // ── Q13 – Category Sort (Core) ────────────────────────────────────────────
    {
      id: "j1_l1_a3_l1_q13",
      type: "category_sort",
      gameType: "category_sort",
      topic: "Infektionskette einordnen",
      prompt: "Sortiere: Übertragungsweg oder Eintrittspforte?",
      categories: [
        { id: "weg", label: "Übertragungsweg" },
        { id: "eintritt", label: "Eintrittspforte" }
      ],
      items: [
        { text: "Benutzter Kamm", categoryId: "weg" },
        { text: "Kleine Schramme am Ohr", categoryId: "eintritt" },
        { text: "Nicht desinfizierte Hände", categoryId: "weg" },
        { text: "Aufgeplatzte Lippe", categoryId: "eintritt" },
        { text: "Schmutziges Handtuch", categoryId: "weg" },
        { text: "Nagelhaut-Einriss", categoryId: "eintritt" }
      ],
      feedbackCorrect:
        "Super. Übertragungsweg = wie Erreger reisen (Tool, Hände, Textilien). Eintrittspforte = wo sie reinkommen (Verletzung, Schleimhaut). Typischer Fehler: Schrammen als Übertragungsweg einordnen. Merksatz: Weg = Fahrzeug, Eintritt = Tür.",
      feedbackWrong:
        "Übertragungswege sind: benutzter Kamm, nicht desinfizierte Hände, schmutziges Handtuch. Eintrittspforten sind: Schrammen, aufgeplatzte Lippe, Nagelhaut-Einriss. Merksatz: Weg = Fahrzeug, Eintritt = Tür."
    },

    // ── Q14 – Scenario Choice (Transfer – Szenario) ───────────────────────────
    {
      id: "j1_l1_a3_l1_q14",
      type: "scenario_choice",
      gameType: "scenario_choice",
      topic: "Transfer: Salon-Situation",
      situationTitle: "Husten auf die Schere",
      situationText: [
        "Ein Kunde hustet während des Schnitts kurz auf deine Schere.",
        "Du hast noch drei weitere Kunden."
      ],
      options: [
        "Schere kurz mit dem Handtuch abwischen und direkt weiterarbeiten.",
        "Schere desinfizieren, bevor du zum nächsten Kunden gehst.",
        "Schere nur wechseln, wenn der nächste Kunde es verlangt."
      ],
      correctIndex: 1,
      optionExplanations: [
        "Abwischen entfernt nur sichtbaren Schmutz - Erreger bleiben auf der Schere.",
        "Richtig: Husten = Tröpfchen-Übertragungsweg. Schere desinfizieren = Kette unterbrechen.",
        "Hygiene ist keine Frage von Kundenwunsch, sondern Pflicht."
      ],
      feedbackCorrect:
        "Genau richtig. Husten = Tröpfchenübertragung. Schere = Übertragungsweg zum nächsten Kunden. Desinfizieren = Kette unterbrochen. Typischer Fehler: 'sieht sauber aus, reicht'. Merksatz: Jeder Kunde = frisch desinfizierte Tools.",
      feedbackWrong:
        "Die Profi-Antwort: Schere desinfizieren. Husten überträgt Erreger auf die Schere. Ohne Desinfektion trägst du sie zum nächsten Kunden. Merksatz: Jeder Kunde = frisch desinfizierte Tools."
    },

    // ── Q15 – Single Choice (Transfer – Fehlerfalle) ──────────────────────────
    {
      id: "j1_l1_a3_l1_q15",
      type: "single_choice_quiz",
      gameType: "single_choice_quiz",
      topic: "Transfer: Typische Fehlerfalle",
      question: "Ein Azubi sagt: 'Ich desinfiziere meine Schere nur, wenn jemand blutet.' Was ist daran falsch?",
      options: [
        "Gar nichts, das reicht vollkommen aus.",
        "Erreger sind oft unsichtbar - Desinfektion nur bei sichtbarem Blut ist zu wenig.",
        "Er sollte die Schere stattdessen waschen.",
        "Scheren müssen nie desinfiziert werden."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau. Erreger wie Bakterien oder Viren sind nicht sichtbar. Wer nur bei Blut desinfiziert, lässt unsichtbare Risiken durch. Typischer Fehler: Sichtbarkeit als Maßstab nehmen. Merksatz: Hygiene nach Plan, nicht nach Augenschein.",
      feedbackWrong:
        "Richtig wäre: Erreger sind oft unsichtbar. Blut ist sichtbar - aber viele Keime hinterlassen keine sichtbaren Spuren. Wer nur reagiert, wenn er etwas sieht, ist zu spät dran. Merksatz: Hygiene nach Plan, nicht nach Augenschein."
    }

  ]
};

export default LEKTION_1;
