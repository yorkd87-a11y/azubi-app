// content/jahr_1/Level_1/Abschnitt_1/lv1_A1_Lektion_1.js

// Lektion 1 – Jahr 1, Level 1, Abschnitt 1
// Thema: Arbeitsvertrag vs. Ausbildungsvertrag – dein Platz im Team

const LEKTION_1 = {
  id: "j1_l1_a1_l1", // Jahr 1, Level 1, Abschnitt 1, Lektion 1
  index: 1,
  jahr: 1,
  level: 1,
  section: 1,
  title: "Arbeitsvertrag vs. Ausbildungsvertrag",
  description:
    "Dein Platz im Team: Unterschiede zwischen Arbeits- und Ausbildungsvertrag sowie Rechte und Pflichten als Azubi.",
  track: "rechte_pflichten",
  energy: 12, // 12 Fragen = 12 Energiepunkte

  questions: [
    // 1) SINGLE CHOICE – Grundunterschied
    {
      id: "j1_l1_a1_l1_q1",
      topic: "Grundlagen",
      gameType: "single_choice_quiz",
      question:
        "Was ist der wichtigste Unterschied zwischen Arbeitsvertrag und Ausbildungsvertrag im Friseursalon?",
      options: [
        "Beim Arbeitsvertrag steht die Arbeit im Vordergrund, beim Ausbildungsvertrag das Lernen.",
        "Beim Ausbildungsvertrag bekommst du kein Geld, beim Arbeitsvertrag schon.",
        "Arbeitsverträge gelten nur in Fabriken, Ausbildungsverträge nur in Salons."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Beim Ausbildungsvertrag steht deine Ausbildung im Mittelpunkt, beim Arbeitsvertrag die Arbeitsleistung.",
      feedbackWrong:
        "Nicht ganz. Entscheidend ist: Beim Arbeitsvertrag geht es vor allem um Arbeit, beim Ausbildungsvertrag um dein Lernen.",
      bonusStrikeOnPerfect: true
    },

    // 2) TRUE / FALSE – keine billige Arbeitskraft
    {
      id: "j1_l1_a1_l1_q2",
      topic: "Rolle als Azubi",
      gameType: "true_false_swipe",
      statement:
        "Mit einem Ausbildungsvertrag bist du in erster Linie eine billige Arbeitskraft für den Salon.",
      isTrue: false,
      feedbackCorrect:
        "Genau! Du bist Azubi, keine billige Arbeitskraft – deine Ausbildung steht im Vordergrund.",
      feedbackWrong:
        "Falsch. Du bist nicht nur zum Arbeiten da, sondern sollst den Beruf Schritt für Schritt lernen.",
      bonusStrikeOnPerfect: true
    },

    // 3) GAP FILL – 1 Fachwort (Ausbildungsvertrag)
    {
      id: "j1_l1_a1_l1_q3",
      topic: "Ausbildungsvertrag",
      gameType: "gap_fill",
      textBefore: "Der Vertrag, der deine Ausbildung im Friseursalon regelt, heißt ",
      correctAnswer: "Ausbildungsvertrag",
      textAfter: ".",
      options: [
        "Ausbildungsvertrag",
        "Arbeitsvertrag",
        "Mietvertrag",
        "Kaufvertrag"
      ],
      feedbackCorrect:
        "Richtig! Der Ausbildungsvertrag regelt deine Ausbildung im Betrieb.",
      feedbackWrong:
        "Nicht ganz. Gemeint ist der Ausbildungsvertrag – er regelt deine Ausbildung im Salon.",
      bonusStrikeOnPerfect: true
    },

    // 4) MULTIPLE CHOICE – Inhalte Ausbildungsvertrag
    {
      id: "j1_l1_a1_l1_q4",
      topic: "Ausbildungsvertrag",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Punkte gehören typischerweise in einen Ausbildungsvertrag im Friseursalon?",
      options: [
        "Die Dauer deiner Ausbildung.",
        "Der Ausbildungsplan mit wichtigen Lerninhalten.",
        "Deine Lieblingsfrisur.",
        "Regelungen zu Arbeitszeit und Vergütung."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Super! Dauer, Lerninhalte sowie Arbeitszeit und Vergütung sind typische Inhalte eines Ausbildungsvertrags.",
      feedbackPartially:
        "Einige Antworten passen, andere nicht. Typisch sind Dauer, Lerninhalte sowie Arbeitszeit und Vergütung – nicht deine Lieblingsfrisur.",
      feedbackWrong:
        "Fast. Es geht um Dauer der Ausbildung, Lerninhalte und Rahmenbedingungen wie Arbeitszeit und Vergütung – nicht um deine Lieblingsfrisur.",
      bonusStrikeOnPerfect: true
    },

    // 5) SCENARIO CHOICE – ausgenutzt fühlen
    {
      id: "j1_l1_a1_l1_q5",
      topic: "Rechte in der Praxis",
      gameType: "scenario_choice",
      situationTitle: "Du fühlst dich als Putzkraft statt Azubi",
      situationText:
        "Du bist im 1. Lehrjahr. Seit Wochen machst du fast nur Putzen, Handtücher und Kaffee. Dir werden kaum Dienstleistungen erklärt und niemand nimmt sich Zeit für dich. Du hast einen Ausbildungsvertrag und fühlst dich ausgenutzt.",
      options: [
        "Du sprichst deine Ausbilderin oder deinen Ausbilder freundlich an und erklärst, dass du mehr lernen möchtest.",
        "Du sagst nichts und hoffst, dass sich irgendwann von allein etwas ändert.",
        "Du kommst einfach nicht mehr zur Arbeit, weil du dich ausgenutzt fühlst."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig – ein ruhiges Gespräch ist der Profi-Weg, um dein Recht auf Ausbildung einzufordern.",
        "So kann sich die Situation lange hinziehen. Besser ist es, dein Anliegen klar anzusprechen.",
        "Das ist keine gute Lösung. Erst reden, dann – wenn nötig – Berufsschule oder Kammer einbeziehen."
      ],
      feedbackCorrect:
        "Sehr gut! Du nimmst dein Recht auf Ausbildung ernst und suchst zuerst das Gespräch im Salon.",
      feedbackWrong:
        "Nicht optimal. Es gibt eine Option, bei der du ruhig und klar dein Recht auf Ausbildung ansprichst.",
      bonusStrikeOnPerfect: true
    },

    // 6) MATCH PAIRS – Begriffe zuordnen
    {
      id: "j1_l1_a1_l1_q6",
      topic: "Begriffe",
      gameType: "match_pairs",
      question: "Was bedeuten diese Begriffe rund um deine Ausbildung?",
      prompt: "Ordne die Begriffe den passenden Beschreibungen zu.",
      pairs: [
        {
          left: "Arbeitsvertrag",
          right: "Schwerpunkt: Arbeit und Leistung im Betrieb"
        },
        {
          left: "Ausbildungsvertrag",
          right: "Schwerpunkt: Lernen und Vermittlung von Berufskenntnissen"
        },
        {
          left: "Ausbildungsplan",
          right: "Zeigt, welche Inhalte du Schritt für Schritt lernst"
        },
        {
          left: "Ausbildungszeit",
          right: "Legt fest, wie lange deine Ausbildung offiziell dauert"
        }
      ],
      feedbackCorrect:
        "Top! Du kannst die wichtigsten Begriffe rund um deine Ausbildung richtig zuordnen.",
      feedbackWrong:
        "Schau dir die Begriffe noch einmal an: Beim Ausbildungsvertrag und Ausbildungsplan geht es klar um dein Lernen.",
      bonusStrikeOnPerfect: true
    },

    // 7) ORDER STEPS – Ablauf grob sortieren
    {
      id: "j1_l1_a1_l1_q7",
      topic: "Ablauf Ausbildung",
      gameType: "order_steps",
      prompt: "Bringe die Schritte deiner Ausbildung in eine sinnvolle Reihenfolge.",
      items: [
        "Du unterschreibst deinen Ausbildungsvertrag mit dem Salon.",
        "Du startest im Salon und lernst nach und nach Aufgaben und Abläufe kennen.",
        "Du arbeitest während der Ausbildungszeit auf deinen Berufsabschluss hin."
      ],
      feedbackCorrect:
        "Perfekt sortiert! So läuft dein Weg in der Ausbildung grob ab.",
      feedbackWrong:
        "Noch nicht ganz. Erst unterschreibst du den Vertrag, dann startest du im Salon und arbeitest auf deinen Abschluss hin.",
      bonusStrikeOnPerfect: true
    },

    // 8) GAP FILL – 2 Fachwörter (Rechte und Pflichten)
    {
      id: "j1_l1_a1_l1_q8",
      topic: "Rechte & Pflichten",
      gameType: "gap_fill",
      textBefore: "Im Ausbildungsvertrag werden deine ",
      correctAnswer: "Rechte und Pflichten",
      textAfter: " im Salon festgehalten.",
      options: [
        "Rechte und Pflichten",
        "Lieblingsfrisuren und Pausen",
        "Haarschnitte und Haarfarben",
        "Urlaubstage und Schulnoten"
      ],
      feedbackCorrect:
        "Richtig! Im Ausbildungsvertrag sind deine Rechte und Pflichten genau geregelt.",
      feedbackWrong:
        "Nicht ganz. Es geht darum, dass im Ausbildungsvertrag deine Rechte und Pflichten festgehalten werden.",
      bonusStrikeOnPerfect: true
    },

    // 9) CATEGORY SORT – Beispiele Rechte vs. Pflichten (statt quickfire_streak)
    {
      id: "j1_l1_a1_l1_q9",
      topic: "Rechte & Pflichten",
      gameType: "category_sort",
      prompt: "Sortiere die Beispiele in die passende Kategorie.",
      categories: [
        { id: "rechte", label: "Rechte Azubi" },
        { id: "pflichten", label: "Pflichten Azubi" }
      ],
      items: [
        { text: "Du bekommst erklärt, wie Dienstleistungen funktionieren.", categoryId: "rechte" },
        { text: "Du führst dein Berichtsheft regelmäßig.", categoryId: "pflichten" },
        { text: "Du wirst von Fachkräften angeleitet.", categoryId: "rechte" },
        { text: "Du kommst pünktlich zur Arbeit.", categoryId: "pflichten" },
        { text: "Du erhältst eine angemessene Vergütung.", categoryId: "rechte" },
        { text: "Du hältst Sicherheits- und Hygieneregeln ein.", categoryId: "pflichten" }
      ],
      feedbackCorrect:
        "Sehr gut! Du kannst klar unterscheiden, was zu deinen Rechten und was zu deinen Pflichten gehört.",
      feedbackWrong:
        "Nicht ganz. Schau dir noch einmal an, was dein Betrieb dir schuldet und was du im Gegenzug erfüllen musst.",
      bonusStrikeOnPerfect: true
    },

    // 10) TRUE / FALSE – Pflicht des Betriebs
    {
      id: "j1_l1_a1_l1_q10",
      topic: "Pflichten Betrieb",
      gameType: "true_false_swipe",
      statement:
        "Im Ausbildungsvertrag verpflichtet sich der Salon, dir die wichtigen Inhalte des Berufs beizubringen.",
      isTrue: true,
      feedbackCorrect:
        "Genau! Der Salon muss dich fachlich anleiten und dir den Beruf zeigen.",
      feedbackWrong:
        "Doch, das stimmt. Der Salon hat die Pflicht, dich auszubilden – nicht nur arbeiten zu lassen.",
      bonusStrikeOnPerfect: true
    },

    // 11) GAP FILL – 3 Fachwörter (Pünktlichkeit, Sorgfalt, Berichtsheft)
    {
      id: "j1_l1_a1_l1_q11",
      topic: "Pflichten Azubi",
      gameType: "gap_fill",
      textBefore: "Zu deinen Pflichten als Azubi gehören ",
      correctAnswer: "Pünktlichkeit, Sorgfalt und das Führen deines Berichtshefts",
      textAfter: ".",
      options: [
        "Pünktlichkeit, Sorgfalt und das Führen deines Berichtshefts",
        "nur Spaß bei der Arbeit und freie Zeiteinteilung",
        "hauptsächlich Putzen und Kaffee kochen",
        "nur Anwesenheit ohne Lernpflicht"
      ],
      feedbackCorrect:
        "Richtig! Pünktlichkeit, Sorgfalt und das Führen deines Berichtshefts gehören fest zur Ausbildung.",
      feedbackWrong:
        "Nicht ganz. Typische Pflichten sind Pünktlichkeit, Sorgfalt und das Führen deines Berichtshefts.",
      bonusStrikeOnPerfect: true
    },

    // 12) SINGLE CHOICE – Rechte kurz zusammenfassen
    {
      id: "j1_l1_a1_l1_q12",
      topic: "Rechte Azubi",
      gameType: "single_choice_quiz",
      question:
        "Welche Aussage beschreibt dein Recht als Azubi mit Ausbildungsvertrag am besten?",
      options: [
        "Du hast das Recht, ausgebildet zu werden und wichtige Inhalte erklärt zu bekommen.",
        "Du hast das Recht, alle Aufgaben abzulehnen, die dir keinen Spaß machen.",
        "Du hast nur das Recht, einfache Hilfsarbeiten zu machen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Du hast ein klares Recht auf Ausbildung und Erklärung der Inhalte.",
      feedbackWrong:
        "Falsch. Dein wichtigstes Recht ist, ausgebildet zu werden – nicht nur Spaß-Aufgaben zu wählen oder nur Hilfsarbeiten zu machen.",
      bonusStrikeOnPerfect: true
    }
  ]
};

export default LEKTION_1;
