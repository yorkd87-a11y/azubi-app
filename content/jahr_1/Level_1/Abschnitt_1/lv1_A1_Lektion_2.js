// content/jahr_1/Level_1/Abschnitt_1/lektion_2.js

// Lektion 2 – Jahr 1, Level 1, Abschnitt 1
// Thema: Deine Rechte als Azubi
// Mindestens 15 Fragen, mind. 6 verschiedene Spieltypen

const LEKTION_2 = {
  id: "j1_l1_a1_l2", // Jahr 1, Level 1, Abschnitt 1, Lektion 2
  jahr: 1,
  level: 1,
  section: 1,
  title: "Deine Rechte als Azubi",
  track: "rechte_pflichten",
  energy: 15, // 15 Fragen = 15 Energiepunkte

  questions: [
    // 1) SINGLE CHOICE – Recht auf Ausbildung
    {
      id: "j1_l1_a1_l2_q1",
      topic: "Recht auf Ausbildung",
      gameType: "single_choice_quiz",
      question:
        "Was beschreibt dein Recht auf Ausbildung im Friseursalon am besten?",
      options: [
        "Du darfst nur Haare waschen und fegen.",
        "Du hast das Recht, alle wichtigen Inhalte des Berufs vermittelt zu bekommen.",
        "Du darfst selbst entscheiden, ob du etwas lernen möchtest oder nicht."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig! Dein Recht auf Ausbildung bedeutet, dass du den Beruf komplett lernen sollst – nicht nur Hilfsaufgaben.",
      feedbackWrong:
        "Nicht ganz. Dein Recht auf Ausbildung heißt, dass dir alle wichtigen Inhalte des Berufs vermittelt werden müssen.",
      bonusStrikeOnPerfect: true
    },

    // 2) TRUE / FALSE – nicht nur Haare waschen
    {
      id: "j1_l1_a1_l2_q2",
      topic: "Recht auf Ausbildung",
      gameType: "true_false_swipe",
      statement:
        "Dein Recht auf Ausbildung bedeutet, dass du nur Haare waschen und fegen musst.",
      isTrue: false,
      feedbackCorrect:
        "Genau! Du sollst nach und nach alle wichtigen Aufgaben des Berufs lernen, nicht nur Hilfsarbeiten.",
      feedbackWrong:
        "Falsch. Du hast das Recht, viel mehr zu lernen als nur Haare waschen und fegen.",
      bonusStrikeOnPerfect: true
    },

    // 3) MULTIPLE CHOICE – Rechte im Überblick
    {
      id: "j1_l1_a1_l2_q3",
      topic: "Rechte Überblick",
      gameType: "multiple_choice_quiz",
      question:
        "Welche der folgenden Punkte gehören zu deinen Rechten als Azubi?",
      options: [
        "Recht auf Ausbildung.",
        "Recht auf regelmäßige Vergütung.",
        "Recht auf sichere Arbeitsbedingungen.",
        "Recht darauf, nie Kritik zu bekommen."
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "Stark! Ausbildung, Vergütung und sichere Arbeitsbedingungen gehören klar zu deinen Rechten.",
      feedbackPartially:
        "Einige Antworten passen, andere nicht. Rechte sind Ausbildung, Vergütung und Sicherheit – aber nicht das Recht, nie Kritik zu bekommen.",
      feedbackWrong:
        "Fast. Du hast Rechte auf Ausbildung, Vergütung und Sicherheit – aber nicht darauf, nie Rückmeldung oder Kritik zu bekommen.",
      bonusStrikeOnPerfect: true
    },

    // 4) GAP FILL #1 – 1 Fachwort (Ausbildungsvergütung)
    {
      id: "j1_l1_a1_l2_q4",
      topic: "Vergütung",
      gameType: "gap_fill",
      textBefore: "Dein regelmäßiges Gehalt als Azubi nennt man ",
      correctAnswer: "Ausbildungsvergütung",
      textAfter: ".",
      options: [
        "Ausbildungsvergütung",
        "Trinkgeld",
        "Taschengeld",
        "Rabatt"
      ],
      feedbackCorrect:
        "Richtig! Deine Ausbildungsvergütung ist das regelmäßige Gehalt, das im Ausbildungsvertrag festgehalten ist.",
      feedbackWrong:
        "Nicht ganz. Das regelmäßige Gehalt im Vertrag heißt Ausbildungsvergütung – nicht Trinkgeld oder Taschengeld.",
      bonusStrikeOnPerfect: true
    },

    // 5) SCENARIO CHOICE – Überforderung bei Chemie
    {
      id: "j1_l1_a1_l2_q5",
      topic: "Fürsorgepflicht",
      gameType: "scenario_choice",
      situationTitle: "Chemische Behandlung ohne Anleitung",
      situationText:
        "Dein Chef gibt dir im 1. Lehrjahr eine chemische Behandlung, die du noch nie gemacht hast, und sagt: „Mach einfach, wird schon passen.“ Du fühlst dich unsicher und hast Angst, der Kundin die Haare zu schädigen.",
      options: [
        "Du sagst ehrlich, dass du dich unsicher fühlst, und bittest darum, dass jemand dabei ist oder es dir zuerst zeigt.",
        "Du machst es einfach, obwohl du es noch nie gelernt hast – Hauptsache niemand merkt etwas.",
        "Du gehst in den Pausenraum und hoffst, dass jemand anders die Kundin übernimmt."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Du hast ein Recht auf sichere Anleitung – du musst nicht alleine experimentieren.",
        "Das ist riskant. Du kannst Kundin und dich gefährden. Besser: Unterstützung einfordern.",
        "Weglaufen löst das Problem nicht. Offene Kommunikation ist hier der Profi-Weg."
      ],
      feedbackCorrect:
        "Sehr gut! Du nimmst deine Sicherheit ernst und nutzt dein Recht auf Anleitung.",
      feedbackWrong:
        "Nicht optimal. Es gibt eine Option, bei der du ruhig und klar um Hilfe bittest und sichere Anleitung einforderst.",
      bonusStrikeOnPerfect: true
    },

    // 6) MATCH PAIRS – Rechte zuordnen
    {
      id: "j1_l1_a1_l2_q6",
      topic: "Begriffe Rechte",
      gameType: "match_pairs",
      prompt: "Ordne die Rechte als Azubi den passenden Beschreibungen zu.",
      pairs: [
        {
          left: "Recht auf Ausbildung",
          right: "Du sollst alle wichtigen Inhalte des Berufs vermittelt bekommen."
        },
        {
          left: "Recht auf Vergütung",
          right: "Du bekommst regelmäßig Geld für deine Ausbildungsarbeit."
        },
        {
          left: "Fürsorgepflicht des Betriebs",
          right: "Der Salon muss auf deine Gesundheit und Sicherheit achten."
        },
        {
          left: "Recht auf Lernmittel",
          right: "Notwendige Arbeitsmaterialien oder Fachbücher werden gestellt."
        }
      ],
      feedbackCorrect:
        "Super! Du kannst die wichtigsten Rechte als Azubi klar zuordnen.",
      feedbackWrong:
        "Schau dir die Zuordnungen noch einmal an: Jedes Recht beschreibt einen anderen Bereich deiner Ausbildung.",
      bonusStrikeOnPerfect: true
    },

    // 7) ORDER STEPS – sichere Arbeitssituation
    {
      id: "j1_l1_a1_l2_q7",
      topic: "Sicherheit",
      gameType: "order_steps",
      prompt:
        "Bringe die Schritte in eine sinnvolle Reihenfolge, wenn du merkst, dass eine Aufgabe dich gefährdet.",
      items: [
        "Du nimmst die Situation ernst und stoppst die gefährliche Tätigkeit.",
        "Du informierst deine Ausbilderin oder deinen Ausbilder über die Gefahr.",
        "Ihr besprecht gemeinsam, wie du die Aufgabe sicher ausführen kannst."
      ],
      // items geben die korrekte Reihenfolge vor
      feedbackCorrect:
        "Perfekt! Erst stoppen, dann reden und gemeinsam eine sichere Lösung finden.",
      feedbackWrong:
        "Nicht ganz. Wichtig ist: zuerst stoppen, dann informieren und danach gemeinsam eine sichere Lösung finden.",
      bonusStrikeOnPerfect: true
    },

    // 8) GAP FILL #2 – 2 Fachwörter (Ausbildung und Sicherheit)
    {
      id: "j1_l1_a1_l2_q8",
      topic: "Rechte & Sicherheit",
      gameType: "gap_fill",
      textBefore: "Zu deinen Rechten als Azubi gehören eine gute ",
      correctAnswer: "Ausbildung und Sicherheit",
      textAfter: " im Salon.",
      options: [
        "Ausbildung und Sicherheit",
        "Pause und Musik",
        "Werbung und Social Media",
        "Dekoration und Pflanzen"
      ],
      feedbackCorrect:
        "Richtig! Gute Ausbildung und Sicherheit im Salon sind zentrale Rechte von dir als Azubi.",
      feedbackWrong:
        "Nicht ganz. Es geht um eine gute Ausbildung und Sicherheit – nicht um Dinge wie Musik oder Deko.",
      bonusStrikeOnPerfect: true
    },

    // 9) SINGLE CHOICE – Merksatz zu deinen Rechten (statt Flashcards)
    {
      id: "j1_l1_a1_l2_q9",
      topic: "Merksatz Rechte",
      gameType: "single_choice_quiz",
      question:
        "Welcher Satz fasst deine Rechte als Azubi am besten zusammen?",
      options: [
        "Ich soll im Salon gut ausgebildet, fair bezahlt und sicher arbeiten können.",
        "Ich darf nur einfache Hilfsarbeiten machen, solange ich Azubi bin.",
        "Ich muss alles alleine schaffen, ohne Fragen zu stellen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Deine Rechte drehen sich um Ausbildung, faire Vergütung und Sicherheit im Salon.",
      feedbackWrong:
        "Nicht ganz. Es geht darum, dass du gut ausgebildet, fair bezahlt und sicher arbeiten kannst – nicht darum, nur Hilfsarbeiten zu machen oder alles alleine zu schaffen.",
      bonusStrikeOnPerfect: true
    },

    // 10) CATEGORY SORT – Was ist wirklich ein Recht?
    {
      id: "j1_l1_a1_l2_q10",
      topic: "Rechte sortieren",
      gameType: "category_sort",
      prompt: "Sortiere die Aussagen in „Rechte Azubi“ und „kein Recht“.",
      categories: [
        { id: "rechte", label: "Rechte Azubi" },
        { id: "kein_recht", label: "Kein Recht" }
      ],
      items: [
        {
          text: "Regelmäßige Ausbildungsvergütung zu erhalten.",
          categoryId: "rechte"
        },
        {
          text: "Nie Kritik zu bekommen.",
          categoryId: "kein_recht"
        },
        {
          text: "Sichere Arbeitsbedingungen zu haben.",
          categoryId: "rechte"
        },
        {
          text: "Jeden Tag zu kommen, wann du willst.",
          categoryId: "kein_recht"
        },
        {
          text: "Anleitung und Erklärung bei neuen Aufgaben.",
          categoryId: "rechte"
        },
        {
          text: "Nur Aufgaben zu machen, die Spaß machen.",
          categoryId: "kein_recht"
        }
      ],
      feedbackCorrect:
        "Sehr gut! Du erkennst klar, was echte Rechte sind und was eher Wünsche oder falsche Vorstellungen sind.",
      feedbackWrong:
        "Nicht ganz. Schau dir genau an, was dir der Ausbildungsvertrag wirklich zusichert – und was eher Wunschdenken ist.",
      bonusStrikeOnPerfect: true
    },

    // 11) TRUE / FALSE – Vergütung im Vertrag
    {
      id: "j1_l1_a1_l2_q11",
      topic: "Vergütung",
      gameType: "true_false_swipe",
      statement:
        "Die Höhe deiner Ausbildungsvergütung sollte im Ausbildungsvertrag festgehalten sein.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Die Vergütung gehört als fester Punkt in deinen Ausbildungsvertrag.",
      feedbackWrong:
        "Doch, das stimmt. Deine Vergütung muss klar im Vertrag geregelt sein.",
      bonusStrikeOnPerfect: true
    },

    // 12) GAP FILL #3 – 3 Fachwörter (Ausbildung, Vergütung, Arbeitsschutz)
    {
      id: "j1_l1_a1_l2_q12",
      topic: "Rechte im Überblick",
      gameType: "gap_fill",
      textBefore: "Wichtige Bereiche deiner Rechte sind ",
      correctAnswer: "Ausbildung, Vergütung und Arbeitsschutz",
      textAfter: ".",
      options: [
        "Ausbildung, Vergütung und Arbeitsschutz",
        "Mode, Social Media und Rabatt",
        "Dekoration, Musik und Getränke",
        "Frisuren, Make-up und Nageldesign"
      ],
      feedbackCorrect:
        "Richtig! Ausbildung, Vergütung und Arbeitsschutz sind Kernbereiche deiner Rechte als Azubi.",
      feedbackWrong:
        "Nicht ganz. Es geht um Ausbildung, Vergütung und Arbeitsschutz – nicht um Dinge wie Social Media oder Deko.",
      bonusStrikeOnPerfect: true
    },

    // 13) SENTENCE BUILDER – Merksatz
    {
      id: "j1_l1_a1_l2_q13",
      topic: "Merksatz Rechte",
      gameType: "sentence_builder",
      type: "sentence_builder",
      question: "Worum geht es bei deinen Rechten als Azubi im Kern?",
      prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
      answer: "Dein Betrieb soll dir helfen gut zu lernen",
      extraWords: ["immer", "manchmal", "allein"],
      answerAudioUrl: "media/lektionen/lv2_f13.wav",
      bonusStrikeOnPerfect: true
    },

    // 14) MULTIPLE CHOICE – Fürsorgepflicht des Betriebs
    {
      id: "j1_l1_a1_l2_q14",
      topic: "Fürsorgepflicht",
      gameType: "multiple_choice_quiz",
      question:
        "Was gehört zur Fürsorgepflicht deines Betriebs?",
      options: [
        "Sichere Arbeitsmittel und funktionierende Geräte.",
        "Einhaltung von Arbeitsschutz und Hygiene.",
        "Dir absichtlich Aufgaben geben, die dich überfordern.",
        "Auf deine Gesundheit und Sicherheit zu achten."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Richtig! Dein Betrieb muss für sichere Arbeitsmittel, Arbeitsschutz und deine Gesundheit sorgen.",
      feedbackPartially:
        "Einige Antworten passen, andere nicht. Überforderung gehört nicht zur Fürsorgepflicht – wichtig sind Sicherheit, Gesundheit und Schutz.",
      feedbackWrong:
        "Nicht ganz. Überforderung gehört nicht zur Fürsorgepflicht – wichtig sind sichere Arbeitsmittel, Arbeitsschutz und deine Gesundheit.",
      bonusStrikeOnPerfect: true
    },

    // 15) SCENARIO CHOICE – Vergütung fehlt
    {
      id: "j1_l1_a1_l2_q15",
      topic: "Vergütung",
      gameType: "scenario_choice",
      situationTitle: "Ausbildungsvergütung bleibt aus",
      situationText:
        "Deine Ausbildungsvergütung kommt diesen Monat nicht auf deinem Konto an. Im Vertrag steht, dass sie immer zum Monatsende gezahlt wird. Es ist schon eine Woche vorbei.",
      options: [
        "Du fragst freundlich in der Salonleitung oder im Büro nach, ob es ein Versehen gab.",
        "Du ignorierst es und hoffst, dass es nächstes Jahr nachgezahlt wird.",
        "Du kommst einfach nicht mehr zur Arbeit, ohne jemandem etwas zu sagen."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Genau. Ruhig nachfragen ist der erste Schritt, weil du ein Recht auf die vereinbarte Vergütung hast.",
        "Damit verschenkst du dein Recht. Besser ist, zeitnah nachzufragen.",
        "Das verschärft das Problem. Erst klären, dann – wenn nötig – weitere Schritte mit Berufsschule oder Kammer."
      ],
      feedbackCorrect:
        "Sehr gut! Du nutzt dein Recht auf Vergütung und klärst das Thema professionell.",
      feedbackWrong:
        "Nicht optimal. Es gibt eine Option, bei der du ruhig und direkt nach der fehlenden Vergütung fragst.",
      bonusStrikeOnPerfect: true
    }
  ]
};

export default LEKTION_2;
