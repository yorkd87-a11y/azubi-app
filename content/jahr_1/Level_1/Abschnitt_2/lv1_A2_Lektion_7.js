// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_7.js
// Lektion 7 – Werkzeuge korrekt ablegen

const LEKTION_7 = {
  id: "j1_l1_a2_l7",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Werkzeuge korrekt ablegen",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l7_q01",
      topic: "Schere offen",
      gameType: "single_choice_quiz",
      question:
        "Warum ist es gefährlich, eine Schere offen liegen zu lassen?",
      options: [
        "Weil sich jemand an der Spitze verletzen kann.",
        "Weil sie dann stumpf wird.",
        "Weil sie dann lauter wird.",
        "Weil sie dann die Farbe ändert."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Offene Scheren mit freien Spitzen sind eine Verletzungsgefahr für Hände und Beine.",
      feedbackWrong:
        "Nicht ganz. Offene Scheren sind gefährlich wegen der spitzen Klingen – nicht aus optischen oder technischen Gründen.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l7_q02",
      topic: "Schere Richtung",
      gameType: "true_false_swipe",
      statement:
        "Scheren sollten so abgelegt werden, dass die Spitzen nicht in den Laufweg zeigen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! So reduzierst du das Risiko, dass jemand in die Spitze hineinläuft.",
      feedbackWrong:
        "Doch, das stimmt. Scherenspitzen im Laufweg sind eine Verletzungsgefahr – immer so ablegen, dass Spitzen zur Wand oder weg vom Weg zeigen.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l7_q03",
      topic: "Messer aufbewahren",
      gameType: "single_choice_quiz",
      question:
        "Wie solltest du ein Messer im Salon aufbewahren?",
      options: [
        "Immer geschützt oder geschlossen verstauen.",
        "Offen auf dem Stuhl liegen lassen.",
        "Auf dem Boden ablegen.",
        "Zwischen Handtüchern verstecken."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Geschützt oder geschlossen ist am sichersten – so vermeidest du Schnittverletzungen.",
      feedbackWrong:
        "Nicht ganz. Messer immer geschützt oder geschlossen – niemals offen liegen lassen.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l7_q04",
      topic: "Kleinteile Boden",
      gameType: "true_false_swipe",
      statement:
        "Kämme, Clips und Nadeln auf dem Boden sind kein Problem, solange niemand barfuß läuft.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Kleine Teile sind Stolper- und Stichgefahr – sie gehören nicht auf den Boden.",
      feedbackWrong:
        "Falsch. Kleine Teile auf dem Boden sind immer gefährlich – man kann darauftreten, stolpern oder sich pieksen.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l7_q05",
      topic: "Elektrische Geräte",
      gameType: "single_choice_quiz",
      question:
        "Wo solltest du elektrische Geräte wie Glätteisen am besten ablegen?",
      options: [
        "Auf einer hitzefesten Unterlage, stabil und sicher.",
        "Auf einem Handtuch direkt auf dem Kunden.",
        "Auf der Rückenlehne des Stuhls.",
        "Auf dem Boden neben dem Waschbecken."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Hitzefeste Unterlagen schützen Oberflächen und verhindern Brand- oder Schmelzschäden.",
      feedbackWrong:
        "Nicht ganz. Elektrische Geräte nur auf hitzefesten Unterlagen ablegen – stabil und sicher, nicht auf Handtüchern oder am Boden.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l7_q06",
      topic: "Kurz weggehen",
      gameType: "true_false_swipe",
      statement:
        "Es ist in Ordnung, Scheren kurz offen auf dem Stuhl liegen zu lassen, wenn du gleich wiederkommst.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Schon ein kurzer Moment reicht, damit jemand sich versehentlich verletzt.",
      feedbackWrong:
        "Falsch. Auch wenn du nur kurz weg bist: offene Scheren auf dem Stuhl sind gefährlich – immer schließen oder sichern.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l7_q07",
      topic: "Kollegin ansprechen",
      gameType: "single_choice_quiz",
      question:
        "Du siehst, dass eine Kollegin Klammern und Nadeln auf dem Boden „verliert”. Was ist sinnvoll?",
      options: [
        "Sie darauf ansprechen und die Teile gemeinsam einsammeln.",
        "Ignorieren, das ist ja ihre Sache.",
        "Absichtlich hinein treten, damit sie weg sind.",
        "Den Boden einfach voll werden lassen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Gemeinsam auf Sicherheit achten schützt das ganze Team.",
      feedbackWrong:
        "Nicht ganz. Sicherheit im Salon ist Teamaufgabe – ansprechen und gemeinsam einsammeln ist die richtige Reaktion.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l7_q08",
      topic: "Hitzefeste Unterlage",
      gameType: "true_false_swipe",
      statement:
        "Elektrische Geräte sollte man nur auf hitzefesten Unterlagen ablegen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! So vermeidest du Brandflecken, Schmelzschäden und andere Risiken.",
      feedbackWrong:
        "Doch, das stimmt. Hitzefeste Unterlagen schützen Möbel und Materialien vor Hitze- und Brandschäden.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l7_q09",
      topic: "Gutes Beispiel",
      gameType: "single_choice_quiz",
      question:
        "Was ist ein gutes Beispiel für sicheres Ablegen von Werkzeugen?",
      options: [
        "Schere geschlossen in der Werkzeugtasche, Glätteisen auf hitzefester Unterlage.",
        "Offene Schere mit Spitze in den Gang, Glätteisen auf dem Handtuch.",
        "Messer offen auf dem Boden.",
        "Nadeln quer über den Stuhl gelegt."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Geschützte Aufbewahrung und hitzefeste Unterlagen gehören zur sicheren Arbeitsweise.",
      feedbackWrong:
        "Nicht ganz. Schere geschlossen verstauen + Glätteisen auf hitzefester Unterlage – das ist die sichere Kombination.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l7_q10",
      topic: "Sicherheit Priorität",
      gameType: "true_false_swipe",
      statement:
        "Werkzeuge können dort liegen, wo gerade Platz ist – Sicherheit ist zweitrangig.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Sicheres Ablegen hat Priorität, damit keine Verletzungen entstehen.",
      feedbackWrong:
        "Falsch. Sicherheit hat immer Vorrang – Werkzeuge müssen sicher abgelegt werden, nicht einfach irgendwo.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l7_q11",
      topic: "Nadeln auf dem Boden",
      gameType: "single_choice_quiz",
      question:
        "Warum ist es gefährlich, kleine Metallteile wie Nadeln auf dem Boden zu haben?",
      options: [
        "Weil man darauf treten, stolpern oder sich pieksen kann.",
        "Weil sie Geräusche machen.",
        "Weil sie die Farbe ändern.",
        "Weil sie das Licht reflektieren."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kleine Teile können Verletzungen und Stolperunfälle verursachen.",
      feedbackWrong:
        "Nicht ganz. Nadeln auf dem Boden sind Stich- und Stolpergefahr – sie können ernsthafte Verletzungen verursachen.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l7_q12",
      topic: "Kunststoffoberfläche",
      gameType: "true_false_swipe",
      statement:
        "Ein Glätteisen darf ruhig direkt auf einer normalen Kunststoffoberfläche liegen, die hält die Hitze schon aus.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Hitze kann Kunststoff verformen oder sogar Brandspuren hinterlassen – hitzefeste Unterlage nutzen.",
      feedbackWrong:
        "Falsch. Kunststoff hält Hitze nicht aus – Glätteisen immer auf hitzefester Unterlage ablegen.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l7_q13",
      topic: "Platz verlassen",
      gameType: "single_choice_quiz",
      question:
        "Du gehst kurz weg vom Platz. Wie solltest du deine Schere sichern?",
      options: [
        "Schere schließen und sicher auf dem Arbeitsplatz oder in der Tasche verstauen.",
        "Offen auf der Kante des Tisches liegen lassen.",
        "Auf den Boden werfen.",
        "Auf den Stuhl des Kunden legen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Geschlossene und sicher abgelegte Scheren sind deutlich ungefährlicher.",
      feedbackWrong:
        "Nicht ganz. Bevor du den Platz verlässt: Schere schließen und sicher ablegen – nie offen auf Kante oder auf dem Stuhl.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l7_q14",
      topic: "Unfallverhütung",
      gameType: "true_false_swipe",
      statement:
        "Sicheres Ablegen von Werkzeugen ist Teil der allgemeinen Unfallverhütung im Salon.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! So reduzierst du Schnitt-, Stich- und Verbrennungsgefahren.",
      feedbackWrong:
        "Doch, das stimmt. Sicheres Ablegen reduziert Verletzungsrisiken erheblich – es ist ein zentraler Teil der Arbeitssicherheit.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l7_q15",
      topic: "Werkzeuge gesamt",
      gameType: "single_choice_quiz",
      question:
        "Welche Kombination beschreibt den sicheren Umgang mit Werkzeugen am besten?",
      options: [
        "Schere geschlossen, Spitzen weg vom Laufweg, Messer geschützt, Geräte auf hitzefester Unterlage.",
        "Schere offen, Spitzen in den Gang, Messer offen, Geräte auf Handtüchern.",
        "Werkzeuge überall verstreut auf Boden und Stuhl.",
        "Alles einfach fallen lassen, wo es gerade ist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Diese Kombination folgt genau deinen Sicherheitsregeln im Salon.",
      feedbackWrong:
        "Nicht ganz. Schere geschlossen + Spitzen weg + Messer geschützt + hitzefeste Unterlage = sichere Praxis.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_7;
