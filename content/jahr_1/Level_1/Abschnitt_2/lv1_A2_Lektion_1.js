// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_1.js
// Lektion 1 – Was ist ein Arbeitsunfall?

const LEKTION_1 = {
  id: "j1_l1_a2_l1",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Was ist ein Arbeitsunfall?",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l1_q01",
      topic: "Definition",
      gameType: "single_choice_quiz",
      question: "Wie lautet die beste einfache Definition von „Arbeitsunfall”?",
      options: [
        "Ein plötzliches Ereignis, das während deiner beruflichen Tätigkeit passiert und einen Gesundheitsschaden verursacht.",
        "Jeder Unfall, der irgendwann in deinem Leben passiert.",
        "Ein Unfall, der nur Kunden im Salon betrifft.",
        "Ein Unfall, der nur in deiner Freizeit passiert."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ein Arbeitsunfall ist ein plötzliches Ereignis, das im Zusammenhang mit deiner beruflichen Tätigkeit steht und einen Gesundheitsschaden verursacht.",
      feedbackWrong:
        "Nicht ganz. Ein Arbeitsunfall braucht drei Merkmale: plötzliches Ereignis, berufliche Tätigkeit, Gesundheitsschaden.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l1_q02",
      topic: "Merkmale",
      gameType: "single_choice_quiz",
      question:
        "Welches Merkmal gehört NICHT zur offiziellen Definition eines Arbeitsunfalls?",
      options: [
        "Es passiert plötzlich.",
        "Es hängt mit deiner beruflichen Tätigkeit zusammen.",
        "Es führt zu einem Gesundheitsschaden.",
        "Es passiert in deiner Freizeit beim Shoppen."
      ],
      correctIndex: 3,
      feedbackCorrect:
        "Richtig! Freizeitaktivitäten haben keinen Bezug zur beruflichen Tätigkeit – deshalb gehören sie nicht zur Definition des Arbeitsunfalls.",
      feedbackWrong:
        "Nicht ganz. Die drei Merkmale des Arbeitsunfalls sind: Plötzlichkeit, berufliche Tätigkeit, Gesundheitsschaden. Alles, was rein privat ist, gehört nicht dazu.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l1_q03",
      topic: "Beispiel Schere",
      gameType: "true_false_swipe",
      statement:
        "Du schneidest dich beim Haareschneiden am Kunden an der Schere. Das ist ein Arbeitsunfall.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Der Schnitt passiert plötzlich, während deiner Arbeit am Kunden und verursacht einen Gesundheitsschaden – das ist ein typischer Arbeitsunfall.",
      feedbackWrong:
        "Doch, das stimmt. Der Schnitt passiert direkt bei der beruflichen Tätigkeit – das erfüllt alle drei Merkmale eines Arbeitsunfalls.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l1_q04",
      topic: "Nasser Boden",
      gameType: "single_choice_quiz",
      question:
        "Warum ist ein nasser Boden im Salon eine typische Ursache für einen Arbeitsunfall?",
      options: [
        "Weil man darauf leicht ausrutschen und sich verletzen kann.",
        "Weil nasser Boden nur schlecht aussieht.",
        "Weil der Boden dann automatisch versichert ist.",
        "Weil Kunden nassen Boden gerne mögen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Nasser Boden erhöht die Rutschgefahr. Wenn du während der Arbeit ausrutschst und dich verletzt, kann das ein Arbeitsunfall sein.",
      feedbackWrong:
        "Nicht ganz. Nasser Boden erhöht die Rutschgefahr – eine Verletzung dabei während der Arbeit kann als Arbeitsunfall gelten.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l1_q05",
      topic: "Glätteisen",
      gameType: "single_choice_quiz",
      question:
        "Du verbrennst dich an einem Glätteisen, während du bei einer Kundin stylst. Was trifft zu?",
      options: [
        "Es ist ein Arbeitsunfall, weil es bei der Arbeit mit einem heißen Gerät passiert.",
        "Es ist kein Arbeitsunfall, weil Verbrennungen im Salon normal sind.",
        "Es ist nur ein Arbeitsunfall, wenn das Gerät kaputt war.",
        "Es ist nur ein Arbeitsunfall, wenn du noch in der Probezeit bist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Die Verbrennung passiert während deiner beruflichen Tätigkeit – also kann sie als Arbeitsunfall gelten.",
      feedbackWrong:
        "Nicht ganz. Entscheidend ist, ob die Verletzung bei der Arbeit entsteht – nicht ob das Gerät defekt war oder in welchem Ausbildungsabschnitt du bist.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l1_q06",
      topic: "Schwere der Verletzung",
      gameType: "true_false_swipe",
      statement:
        "Auch kleine Verletzungen wie ein kleiner Schnitt können als Arbeitsunfall gelten.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Entscheidend ist nicht die Größe der Verletzung, sondern dass ein Gesundheitsschaden im Zusammenhang mit deiner Arbeit entsteht.",
      feedbackWrong:
        "Doch, das stimmt. Auch ein kleiner Schnitt bei der Arbeit kann als Arbeitsunfall gelten – die Schwere ist nicht das entscheidende Kriterium.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l1_q07",
      topic: "Drei Merkmale",
      gameType: "single_choice_quiz",
      question:
        "Welche drei Punkte gehören zur offiziellen Definition eines Arbeitsunfalls?",
      options: [
        "Plötzliches Ereignis, berufliche Tätigkeit, Gesundheitsschaden",
        "Langsamer Ablauf, private Tätigkeit, Gesundheitsschaden",
        "Plötzliches Ereignis, Freizeit, kein Gesundheitsschaden",
        "Nur schwere Verletzungen, egal ob Arbeit oder Freizeit"
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Plötzliches Ereignis + berufliche Tätigkeit + Gesundheitsschaden – diese Kombination macht einen Arbeitsunfall aus.",
      feedbackWrong:
        "Nicht ganz. Merke dir: Plötzlich + bei der Arbeit + Gesundheitsschaden = Arbeitsunfall.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l1_q08",
      topic: "Abgrenzung Freizeit",
      gameType: "true_false_swipe",
      statement:
        "Du rutschst nach Feierabend vor deiner eigenen Haustür aus und verstauchst dir den Fuß. Das ist ein Arbeitsunfall.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Der Unfall passiert im privaten Bereich und hat keinen Bezug zu deiner Arbeit im Salon – also kein Arbeitsunfall.",
      feedbackWrong:
        "Falsch. Das stimmt so nicht. Der Unfall vor der eigenen Haustür hat keinen Bezug zur beruflichen Tätigkeit – das ist kein Arbeitsunfall.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l1_q09",
      topic: "Aufräumen",
      gameType: "true_false_swipe",
      statement:
        "Beim Aufräumen nach dem letzten Kunden trittst du auf ein Handtuch, rutschst aus und verletzt dich. Das kann ein Arbeitsunfall sein.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Aufräumen gehört zu deiner beruflichen Tätigkeit. Wenn du dich dabei plötzlich verletzt, ist das ein möglicher Arbeitsunfall.",
      feedbackWrong:
        "Doch, das stimmt. Aufräumen ist Teil deiner Arbeit – eine Verletzung dabei erfüllt die Merkmale eines Arbeitsunfalls.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l1_q10",
      topic: "Schwere",
      gameType: "true_false_swipe",
      statement:
        "Ein Arbeitsunfall liegt nur vor, wenn der Schaden sehr schwer ist, z. B. ein Knochenbruch.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Auch leichtere Verletzungen können Arbeitsunfälle sein. Wichtig ist der Zusammenhang mit der Arbeit, nicht nur die Schwere.",
      feedbackWrong:
        "Falsch. Auch kleine Verletzungen können Arbeitsunfälle sein – entscheidend ist der Bezug zur beruflichen Tätigkeit, nicht wie schwer die Verletzung ist.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l1_q11",
      topic: "Meldepflicht",
      gameType: "single_choice_quiz",
      question:
        "Warum ist es wichtig, Arbeitsunfälle im Salon zu melden und zu dokumentieren?",
      options: [
        "Damit sie offiziell erfasst werden und du im Notfall abgesichert bist.",
        "Nur damit dein Chef mehr Papierkram hat.",
        "Damit man sie vor den Kollegen verheimlichen kann.",
        "Das ist nicht wichtig, Unfälle erledigen sich von selbst."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Dokumentation hilft bei der Absicherung (z. B. Berufsgenossenschaft) und bei der Verbesserung der Arbeitssicherheit.",
      feedbackWrong:
        "Nicht ganz. Arbeitsunfälle melden ist wichtig für deinen Versicherungsschutz und damit der Betrieb Risiken erkennen kann.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l1_q12",
      topic: "Abgrenzung",
      gameType: "single_choice_quiz",
      question: "Welche Situation ist am ehesten ein Arbeitsunfall?",
      options: [
        "Du schneidest dich beim privaten Kochen zu Hause.",
        "Du verbrennst dich an einem Lockenstab, während du deine Freundin privat stylst.",
        "Du verbrennst dich an einer Salon-Heizbürste beim Föhnen einer Kundin.",
        "Du verstauchst dir beim Spaziergang in deiner Freizeit den Knöchel."
      ],
      correctIndex: 2,
      feedbackCorrect:
        "Richtig! Nur die Verbrennung an der Salon-Heizbürste passiert im Rahmen deiner beruflichen Tätigkeit im Salon.",
      feedbackWrong:
        "Nicht ganz. Arbeitsunfall bedeutet: im Rahmen der beruflichen Tätigkeit. Nur das Föhnen der Kundin im Salon passt dazu.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l1_q13",
      topic: "Definition präzise",
      gameType: "single_choice_quiz",
      question:
        "Welche Formulierung beschreibt die Definition eines Arbeitsunfalls am genauesten?",
      options: [
        "Ein plötzliches Ereignis, in Folge der beruflichen Tätigkeit, das zu einem Gesundheitsschaden führt.",
        "Ein Ereignis, das irgendwann passiert und bei dem du dich unwohl fühlst.",
        "Ein Unfall, der nur Kunden betreffen darf.",
        "Ein Unfall, der nur außerhalb der Arbeitszeit passiert."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Die Definition enthält die drei Kernelemente: plötzlich, bei der Arbeit, mit Gesundheitsschaden.",
      feedbackWrong:
        "Nicht ganz. Die präzise Definition lautet: plötzliches Ereignis + berufliche Tätigkeit + Gesundheitsschaden.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l1_q14",
      topic: "Kein Kundenkontakt nötig",
      gameType: "true_false_swipe",
      statement:
        "Wenn du beim Fegen des Salonbodens ausrutschst und dir den Knöchel verstauchst, ist das kein Arbeitsunfall, weil du gerade keinen Kunden bedient hast.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Fegen gehört zur Arbeit im Salon. Auch ohne Kundenkontakt kann dabei ein Arbeitsunfall passieren.",
      feedbackWrong:
        "Falsch. Kundenkontakt ist keine Voraussetzung für einen Arbeitsunfall. Fegen ist Teil deiner Arbeit – eine Verletzung dabei kann trotzdem ein Arbeitsunfall sein.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l1_q15",
      topic: "Kein Arbeitsunfall erkennen",
      gameType: "single_choice_quiz",
      question:
        "Woran erkennst du, dass eine Verletzung eher KEIN Arbeitsunfall ist?",
      options: [
        "Sie passiert ohne Bezug zu deiner Arbeit, z. B. in deiner Freizeit oder aus einem privaten Grund.",
        "Sie passiert irgendwann im Salon, egal ob du arbeitest oder nicht.",
        "Sie passiert, während du deine Arbeitskleidung trägst, auch privat.",
        "Sie passiert, wenn du zu Hause Haare von Freunden schneidest."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Fehlt der Bezug zur beruflichen Tätigkeit, handelt es sich in der Regel nicht um einen Arbeitsunfall.",
      feedbackWrong:
        "Nicht ganz. Entscheidend ist immer der direkte Zusammenhang zur beruflichen Tätigkeit – ohne diesen Bezug kein Arbeitsunfall.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_1;
