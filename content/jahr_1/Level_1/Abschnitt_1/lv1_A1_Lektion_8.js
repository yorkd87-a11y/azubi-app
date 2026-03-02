// content/jahr_1/Level_1/Abschnitt_1/lektion_8.js

// Lektion 8 – Abschluss-Quest
// Bunte Mischung aus allen vorherigen Themenfeldern:
// Arbeitsvertrag vs. Ausbildungsvertrag, Rechte, Pflichten,
// Pünktlichkeit, Sorgfalt, Berichtsheft, Betriebsordnung, Schweigepflicht

const LEKTION_8 = {
  id: "j1_l1_a1_l8",
  jahr: 1,
  level: 1,
  section: 1,
  title: "Abschluss-Quest: Rechte & Pflichten",
  track: "rechte_pflichten",
  energy: 20,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1) SINGLE CHOICE – Arbeitsvertrag vs. Ausbildungsvertrag
    {
      id: "j1_l1_a1_l8_q1",
      topic: "Vertragstypen",
      gameType: "single_choice_quiz",
      question:
        "Was trifft den Unterschied zwischen Arbeitsvertrag und Ausbildungsvertrag am besten?",
      options: [
        "Arbeitsvertrag = Arbeiten gegen Geld, Ausbildungsvertrag = Lernen steht im Mittelpunkt.",
        "Arbeitsvertrag = nur Theorie, Ausbildungsvertrag = nur Praxis.",
        "Arbeitsvertrag gibt es nur in Fabriken, Ausbildungsvertrag nur im Friseursalon."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Beim Arbeitsvertrag steht die Arbeit, beim Ausbildungsvertrag dein Lernen im Fokus.",
      feedbackWrong:
        "Nicht ganz. Merksatz: Arbeitsvertrag = Arbeiten gegen Geld, Ausbildungsvertrag = Lernen steht im Mittelpunkt.",
      bonusStrikeOnCorrect: true
    },

    // 2) MULTIPLE CHOICE – Rechte als Azubi
    {
      id: "j1_l1_a1_l8_q2",
      topic: "Rechte",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Punkte gehören zu deinen Rechten als Azubi im Friseursalon?",
      options: [
        "Recht auf Ausbildung.",
        "Recht auf Vergütung.",
        "Recht auf Fürsorge und Sicherheit.",
        "Recht darauf, nur Pausen zu machen."
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "Super! Ausbildung, Vergütung und Fürsorge gehören klar zu deinen Rechten.",
      feedbackWrong:
        "Fast. Du hast Rechte auf Ausbildung, Vergütung und Fürsorge – aber nicht nur auf Pausen.",
      bonusStrikeOnCorrect: true
    },

    // 3) SINGLE CHOICE – Vergütung
    {
      id: "j1_l1_a1_l8_q3",
      topic: "Vergütung",
      gameType: "single_choice_quiz",
      question:
        "Was gehört zu deinem Recht auf Vergütung als Azubi?",
      options: [
        "Du bekommst eine Ausbildungsvergütung, die regelmäßig gezahlt wird.",
        "Du musst im 1. Lehrjahr kostenlos arbeiten.",
        "Du bekommst nur Geld, wenn du keine Fehler machst."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Deine Ausbildungsvergütung ist im Vertrag geregelt und kommt regelmäßig.",
      feedbackWrong:
        "Falsch. Du hast Anspruch auf eine regelmäßige Ausbildungsvergütung – auch wenn du noch lernst.",
      bonusStrikeOnCorrect: true
    },

    // 4) TRUE/FALSE – Azubi = billige Arbeitskraft?
    {
      id: "j1_l1_a1_l8_q4",
      topic: "Rolle als Azubi",
      gameType: "true_false_swipe",
      statement:
        "Als Azubi bist du in erster Linie eine billige Arbeitskraft für den Salon.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Du bist Azubi – also Profi in Ausbildung, nicht billige Arbeitskraft.",
      feedbackWrong:
        "Nein. Du bist im Salon, um den Beruf zu lernen, nicht nur, um billig zu arbeiten.",
      bonusStrikeOnCorrect: true
    },

    // 5) GAP FILL – Merksatz Arbeitsvertrag
    {
      id: "j1_l1_a1_l8_q5",
      topic: "Mini-Zusammenfassung",
      gameType: "gap_fill",
      textBefore: "Merksatz: Arbeitsvertrag = Arbeiten gegen ",
      correctAnswer: "Geld",
      textAfter: ".",
      options: ["Geld", "Urlaub", "Lob", "Freiheit"],
      feedbackCorrect:
        "Genau! Beim Arbeitsvertrag steht die Arbeitsleistung gegen Geld im Mittelpunkt.",
      feedbackWrong:
        "Nicht ganz. Gemeint war: Arbeiten gegen Geld.",
      bonusStrikeOnCorrect: true
    },

    // 6) SINGLE CHOICE – Pflichten (Pünktlichkeit)
    {
      id: "j1_l1_a1_l8_q6",
      topic: "Pflichten",
      gameType: "single_choice_quiz",
      question:
        "Welche Aussage beschreibt eine deiner Pflichten als Azubi am besten?",
      options: [
        "Du bist pünktlich im Salon, in der Berufsschule und bei Schulungen.",
        "Du kommst, wann du möchtest – Hauptsache, du bist kreativ.",
        "Du musst nur an Prüfungstagen pünktlich sein."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Pünktlichkeit gehört zu deinen wichtigsten Pflichten.",
      feedbackWrong:
        "Falsch. Pünktlichkeit ist Pflicht – im Salon, in der Schule und bei Schulungen.",
      bonusStrikeOnCorrect: true
    },

    // 7) GAP FILL – Merksatz Ausbildungsvertrag
    {
      id: "j1_l1_a1_l8_q7",
      topic: "Mini-Zusammenfassung",
      gameType: "gap_fill",
      textBefore: "Merksatz: Ausbildungsvertrag = ",
      correctAnswer: "Lernen",
      textAfter: " steht im Mittelpunkt.",
      options: ["Lernen", "Feiern", "Urlaub", "Trinkgeld"],
      feedbackCorrect:
        "Genau! Beim Ausbildungsvertrag geht es in erster Linie um dein Lernen.",
      feedbackWrong:
        "Nicht ganz. Es geht darum, dass beim Ausbildungsvertrag dein Lernen im Mittelpunkt steht.",
      bonusStrikeOnCorrect: true
    },

    // 8) MULTIPLE CHOICE – Pflichten im Überblick
    {
      id: "j1_l1_a1_l8_q8",
      topic: "Pflichten",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Punkte gehören zu deinen Pflichten als Azubi?",
      options: [
        "Pünktlich sein.",
        "Sorgfältig arbeiten.",
        "Berichtsheft führen.",
        "Betriebsordnung ignorieren, wenn du sie doof findest."
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "Stark! Pünktlichkeit, Sorgfalt und Berichtsheft gehören zu deinen Pflichten.",
      feedbackWrong:
        "Fast. Deine Pflichten sind u. a. Pünktlichkeit, Sorgfalt und Berichtsheft – die Betriebsordnung kannst du nicht einfach ignorieren.",
      bonusStrikeOnCorrect: true
    },

    // 9) TRUE/FALSE – Berichtsheft-Pflicht
    {
      id: "j1_l1_a1_l8_q9",
      topic: "Berichtsheft",
      gameType: "true_false_swipe",
      statement:
        "Das Führen des Berichtshefts ist eine deiner Pflichten als Azubi.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Das Berichtsheft musst du regelmäßig führen und vom Ausbilder unterschreiben lassen.",
      feedbackWrong:
        "Doch! Das Berichtsheft ist Pflicht – es dokumentiert deine gesamte Ausbildung.",
      bonusStrikeOnCorrect: true
    },

    // 10) SINGLE CHOICE – Was regelt die Betriebsordnung?
    {
      id: "j1_l1_a1_l8_q10",
      topic: "Betriebsordnung",
      gameType: "single_choice_quiz",
      question:
        "Was legt die Betriebsordnung im Friseursalon fest?",
      options: [
        "Regeln für Verhalten, Arbeitszeiten und Umgang im Betrieb.",
        "Die genauen Haarschnitt-Techniken für jeden Kunden.",
        "Wie viel Trinkgeld du bekommen solltest."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Die Betriebsordnung regelt Verhalten, Zeiten und den Umgang im Salon.",
      feedbackWrong:
        "Falsch. Die Betriebsordnung legt die Verhaltens- und Arbeitsregeln im Betrieb fest.",
      bonusStrikeOnCorrect: true
    },

    // 11) GAP FILL – Schweigepflicht
    {
      id: "j1_l1_a1_l8_q11",
      topic: "Schweigepflicht",
      gameType: "gap_fill",
      textBefore:
        "Vertrauliche Informationen über Kunden darfst du aufgrund der ",
      correctAnswer: "Schweigepflicht",
      textAfter: " nicht nach außen weitergeben.",
      options: ["Schweigepflicht", "Betriebsordnung", "Vergütung", "Berufsschule"],
      feedbackCorrect:
        "Richtig! Die Schweigepflicht schützt alle sensiblen Informationen über Kunden.",
      feedbackWrong:
        "Nicht ganz. Es geht um die Schweigepflicht – deine Pflicht, Kundeninfos vertraulich zu behandeln.",
      bonusStrikeOnCorrect: true
    },

    // 12) TRUE/FALSE – Social Media Fotos
    {
      id: "j1_l1_a1_l8_q12",
      topic: "Social Media",
      gameType: "true_false_swipe",
      statement:
        "Du darfst Fotos von Kunden ohne deren Erlaubnis auf Social Media posten, solange die Ergebnisse gut aussehen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Ohne ausdrückliche Erlaubnis sind Kundenfotos auf Social Media tabu.",
      feedbackWrong:
        "Falsch. Fotos von Kunden ohne Einwilligung zu posten verstößt gegen Datenschutz und Schweigepflicht.",
      bonusStrikeOnCorrect: true
    },

    // 13) MULTIPLE CHOICE – Was gehört ins Berichtsheft?
    {
      id: "j1_l1_a1_l8_q13",
      topic: "Berichtsheft",
      gameType: "multiple_choice_quiz",
      question:
        "Was gehört typischerweise in das Berichtsheft?",
      options: [
        "Was du in der Woche gelernt und gearbeitet hast.",
        "Welche Aufgaben du im Betrieb übernommen hast.",
        "Private Nachrichten und Chats mit Kollegen.",
        "Themen aus der Berufsschule."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Genau! Arbeitsaufgaben, Betriebseinsätze und Berufsschulthemen gehören ins Berichtsheft.",
      feedbackWrong:
        "Fast. Private Nachrichten haben im Berichtsheft nichts zu suchen – das ist für Ausbildungsinhalte.",
      bonusStrikeOnCorrect: true
    },

    // 14) TRUE/FALSE – Betriebsordnung gilt für alle
    {
      id: "j1_l1_a1_l8_q14",
      topic: "Betriebsordnung",
      gameType: "true_false_swipe",
      statement:
        "Azubis sind von der Betriebsordnung ausgenommen und dürfen eigene Regeln aufstellen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Die Betriebsordnung gilt für alle – auch für Azubis.",
      feedbackWrong:
        "Falsch. Als Azubi bist du genauso an die Betriebsordnung gebunden wie alle anderen.",
      bonusStrikeOnCorrect: true
    },

    // 15) SINGLE CHOICE – Sorgfalt im Salon
    {
      id: "j1_l1_a1_l8_q15",
      topic: "Sorgfalt",
      gameType: "single_choice_quiz",
      question:
        "Was bedeutet sorgfältiges Arbeiten im Salon konkret?",
      options: [
        "Werkzeuge pflegen, Arbeitsplatz sauber halten und auf Kunden achten.",
        "Möglichst schnell arbeiten, egal wie das Ergebnis aussieht.",
        "Nur auf das Ergebnis achten, Aufräumen kann warten."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Sorgfalt bedeutet: Werkzeugpflege, Ordnung am Arbeitsplatz und Achtsamkeit gegenüber Kunden.",
      feedbackWrong:
        "Falsch. Sorgfalt schließt Werkzeugpflege, Sauberkeit und Aufmerksamkeit gegenüber Kunden ein.",
      bonusStrikeOnCorrect: true
    },

    // 16) MULTIPLE CHOICE – Verstöße gegen Schweigepflicht
    {
      id: "j1_l1_a1_l8_q16",
      topic: "Schweigepflicht",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Situationen sind klare Verstöße gegen die Schweigepflicht?",
      options: [
        "Du erzählst Freunden von der Scheidung einer Kundin.",
        "Du postest interne Umsatzzahlen des Salons auf Social Media.",
        "Du sprichst intern mit der Chefin über einen schwierigen Kundenfall.",
        "Du nennst im Bus den Namen einer Kundin und erzählst ihre Geschichte."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Richtig! Kunden-Stories, Umsatzzahlen und Namen in der Öffentlichkeit sind klare Verstöße.",
      feedbackWrong:
        "Fast. Das Gespräch intern mit der Chefin ist okay – alles andere sind Verstöße.",
      bonusStrikeOnCorrect: true
    },

    // 17) TRUE/FALSE – Vergütung im 1. Lehrjahr
    {
      id: "j1_l1_a1_l8_q17",
      topic: "Vergütung",
      gameType: "true_false_swipe",
      statement:
        "Im 1. Lehrjahr bekommst du keine Vergütung, weil du noch in der Ausbildung bist.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Du bekommst vom ersten Tag an eine Ausbildungsvergütung.",
      feedbackWrong:
        "Falsch. Du hast von Beginn der Ausbildung an Anspruch auf Vergütung.",
      bonusStrikeOnCorrect: true
    },

    // 18) SINGLE CHOICE – Wer schreibt das Berichtsheft?
    {
      id: "j1_l1_a1_l8_q18",
      topic: "Berichtsheft",
      gameType: "single_choice_quiz",
      question:
        "Wer ist dafür verantwortlich, das Berichtsheft zu schreiben?",
      options: [
        "Du als Azubi – du führst es eigenständig und regelmäßig.",
        "Deine Chefin, sie schreibt für dich mit.",
        "Die Berufsschule erstellt es am Ende des Jahres."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Das Berichtsheft ist deine Aufgabe – du schreibst es, der Ausbilder unterschreibt es.",
      feedbackWrong:
        "Falsch. Das Berichtsheft führst du selbst – es ist deine Pflicht als Azubi.",
      bonusStrikeOnCorrect: true
    },

    // 19) MULTIPLE CHOICE – Rechte im Überblick
    {
      id: "j1_l1_a1_l8_q19",
      topic: "Rechte & Pflichten",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Aussagen über Azubi-Rechte stimmen?",
      options: [
        "Du hast Recht auf eine geregelte Ausbildungszeit.",
        "Du darfst nur für ausbildungsrelevante Tätigkeiten eingesetzt werden.",
        "Der Betrieb darf dich unbegrenzt Überstunden machen lassen.",
        "Du hast Anspruch auf Urlaub."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Richtig! Geregelte Ausbildung, passende Tätigkeiten und Urlaub gehören zu deinen Rechten.",
      feedbackWrong:
        "Fast. Unbegrenzte Überstunden sind nicht erlaubt – deine anderen Rechte stimmen aber.",
      bonusStrikeOnCorrect: true
    },

    // 20) SCENARIO CHOICE – Abschluss-Szenario
    {
      id: "j1_l1_a1_l8_q20",
      topic: "Abschluss-Szenario",
      gameType: "scenario_choice",
      situationTitle: "Der erste Arbeitsmonat",
      situationText:
        "Du bist seit einem Monat im Salon. Deine Chefin fragt dich, wie du bisher mit Berichtsheft, Betriebsordnung und Schweigepflicht umgehst.",
      options: [
        "Ich führe das Berichtsheft wöchentlich, halte mich an die Betriebsordnung und gebe keine Kundeninfos nach außen weiter.",
        "Ich warte damit bis kurz vor der Prüfung – erst dann wird das alles relevant.",
        "Ich frage Kollegen, ob sie das Berichtsheft für mich schreiben können, und erzähle nur Freunden von Kundensituationen."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Perfekt! So zeigst du, dass du deine Pflichten kennst und professionell handelst.",
        "Falsch. Berichtsheft und Betriebsordnung gelten von Tag eins – nicht erst vor der Prüfung.",
        "Beides ist falsch: Das Berichtsheft muss selbst geführt werden, und Kundensituationen gehören nicht nach draußen."
      ],
      feedbackCorrect:
        "Stark! Du hast die wichtigsten Pflichten des ersten Lehrjahrs im Griff.",
      feedbackWrong:
        "Überlege noch einmal. Welche Option zeigt wirklich professionelles Verhalten von Anfang an?",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_8;
