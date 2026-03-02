// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_2.js
// Lektion 2 – Was ist ein Wegeunfall?

const LEKTION_2 = {
  id: "j1_l1_a2_l2",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Was ist ein Wegeunfall?",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l2_q01",
      topic: "Definition",
      gameType: "single_choice_quiz",
      question: "Was beschreibt einen Wegeunfall am besten?",
      options: [
        "Ein Unfall auf dem direkten Weg zwischen Wohnung und Arbeitsplatz oder zwischen Salon und Berufsschule.",
        "Ein Unfall, der irgendwo im Stadtgebiet passiert.",
        "Ein Unfall im Salon während der Arbeit am Kunden.",
        "Jeder Unfall in deiner Freizeit."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ein Wegeunfall ist ein Unfall auf dem direkten Weg zwischen Wohnung und Arbeitsplatz oder zwischen Salon und Berufsschule.",
      feedbackWrong:
        "Nicht ganz. Wegeunfall bedeutet: direkter Weg mit Bezug zur Arbeit oder Ausbildung – nicht irgendein Weg.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l2_q02",
      topic: "Welche Strecke gilt",
      gameType: "single_choice_quiz",
      question:
        "Welche der folgenden Strecken kann typischerweise als Wegeunfall gelten?",
      options: [
        "Direkter Weg von deiner Wohnung in den Salon.",
        "Spaziergang im Park am freien Tag.",
        "Shoppingtour in der Stadt mit Freunden.",
        "Urlaubsreise ans Meer."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Der direkte Weg zwischen Wohnung und Arbeitsplatz gehört klassisch zum Bereich des Wegeunfalls.",
      feedbackWrong:
        "Nicht ganz. Nur der direkte Weg mit Bezug zur Arbeit oder Ausbildung zählt – Spaziergang, Shopping und Urlaub sind rein privat.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l2_q03",
      topic: "Fahrradunfall",
      gameType: "true_false_swipe",
      statement:
        "Du fährst morgens direkt mit dem Fahrrad zur Arbeit, stürzt unterwegs und verletzt dich. Das kann ein Wegeunfall sein.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Die Fahrt ist der direkte Weg von der Wohnung zum Arbeitsplatz. Ein Unfall dabei kann ein Wegeunfall sein.",
      feedbackWrong:
        "Doch, das stimmt. Der direkte Weg zur Arbeit ist klassischer Wegeunfall-Bereich – ein Sturz dabei ist ein möglicher Wegeunfall.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l2_q04",
      topic: "Kein Wegeunfall",
      gameType: "single_choice_quiz",
      question:
        "Welche Situation ist am ehesten KEIN Wegeunfall mehr?",
      options: [
        "Du machst auf dem Weg zur Arbeit eine große Shoppingtour in der Innenstadt und verunglückst danach.",
        "Du gehst direkt von der Wohnung zum Salon und wirst auf dem Weg angefahren.",
        "Du fährst direkt von der Berufsschule in den Salon und hast einen Fahrradsturz.",
        "Du fährst von zu Hause direkt zur Berufsschule und stürzt mit der Bahn die Treppe runter."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Eine große Shoppingtour ist ein deutlicher Umweg und hat nichts mehr mit dem direkten Arbeitsweg zu tun.",
      feedbackWrong:
        "Nicht ganz. Eine Shoppingtour ist ein privater Umweg – der unterbricht den direkten Arbeitsweg und der Wegeunfall-Schutz entfällt.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l2_q05",
      topic: "Umwege",
      gameType: "true_false_swipe",
      statement:
        "Große Umwege, zum Beispiel eine Shoppingtour, zählen meistens nicht mehr als direkter Arbeitsweg.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Große Umwege unterbrechen den direkten Arbeitsweg – der Versicherungsschutz als Wegeunfall kann dadurch entfallen.",
      feedbackWrong:
        "Doch, das stimmt. Sobald der direkte Bezug zur Arbeit durch einen großen privaten Umweg unterbrochen wird, ist der Wegeunfall-Schutz weg.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l2_q06",
      topic: "Azubi-Wege",
      gameType: "single_choice_quiz",
      question:
        "Welche Wege können bei Azubis im Friseurberuf typischerweise als Wegeunfall gelten?",
      options: [
        "Direkter Weg zwischen Wohnung und Salon sowie zwischen Salon und Berufsschule.",
        "Nur der Weg zwischen Wohnung und Freunden.",
        "Nur der Weg zwischen Wohnung und Fitnessstudio.",
        "Nur Wege in der Freizeit, solange du Azubi bist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Entscheidend ist der direkte Weg zur Arbeit oder zur Berufsschule, nicht private Freizeitwege.",
      feedbackWrong:
        "Nicht ganz. Als Azubi sind zwei Wege relevant: Wohnung ↔ Salon und Salon ↔ Berufsschule – alles andere ist privat.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l2_q07",
      topic: "Merkmale",
      gameType: "true_false_swipe",
      statement:
        "Ein Wegeunfall muss – genau wie ein Arbeitsunfall – plötzlich passieren und mit deiner Ausbildung oder Arbeit zusammenhängen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Auch beim Wegeunfall sind Plötzlichkeit und der Bezug zur Arbeit oder Ausbildung wichtige Merkmale.",
      feedbackWrong:
        "Doch, das stimmt. Plötzlichkeit und der Bezug zur Arbeit oder Ausbildung gelten für Arbeitsunfall und Wegeunfall gleichermaßen.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l2_q08",
      topic: "Berufsschule → Salon",
      gameType: "single_choice_quiz",
      question:
        "Du gehst nach der Berufsschule direkt in den Salon und wirst auf dem Weg von einem Auto angefahren. Was trifft am besten zu?",
      options: [
        "Das kann ein Wegeunfall sein, weil du auf direktem Weg von der Schule zur Arbeit warst.",
        "Das ist nur ein privater Freizeitunfall.",
        "Es ist nur ein Arbeitsunfall, kein Wegeunfall.",
        "Es zählt nicht, weil du gerade nicht im Salon warst."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Der direkte Weg zwischen Berufsschule und Salon gehört ebenfalls zum Bereich des Wegeunfalls.",
      feedbackWrong:
        "Nicht ganz. Der direkte Weg zwischen Berufsschule und Salon ist ein typischer Wegeunfall-Bereich – du musst dafür nicht schon im Salon sein.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l2_q09",
      topic: "Privater Umweg",
      gameType: "single_choice_quiz",
      question:
        "Du fährst nach der Arbeit zuerst in ein anderes Stadtviertel zum Kino, verbringst dort den Abend und hast dann auf dem Heimweg einen Unfall. Wie ist das eher zu bewerten?",
      options: [
        "Es ist eher KEIN Wegeunfall mehr, weil du den direkten Arbeitsweg deutlich unterbrochen hast.",
        "Es ist immer ein Wegeunfall, egal was du dazwischen machst.",
        "Es ist auf jeden Fall ein Arbeitsunfall.",
        "Es ist automatisch ein Unfall in der Berufsschule."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ein großer Umweg mit privatem Ziel unterbricht den direkten Zusammenhang zwischen Arbeit und Heimweg.",
      feedbackWrong:
        "Nicht ganz. Sobald du einen deutlichen privaten Umweg einlegst, unterbrichst du den Arbeitsweg – der Wegeunfall-Schutz entfällt dann in der Regel.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l2_q10",
      topic: "Party-Heimweg",
      gameType: "true_false_swipe",
      statement:
        "Wenn du nachts nach einer Party nach Hause fährst und einen Unfall hast, ist das ein Wegeunfall, weil du ja nach Hause unterwegs bist.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Hier besteht kein Zusammenhang zu deiner Arbeit oder Ausbildung – der Weg ist rein privat.",
      feedbackWrong:
        "Falsch. Das stimmt so nicht. Nach einer Party nach Hause fahren ist ein rein privater Weg – es fehlt der Bezug zur Arbeit oder Ausbildung.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l2_q11",
      topic: "Wegeunfall-Bereich",
      gameType: "single_choice_quiz",
      question:
        "Wann befindest du dich im typischen „Wegeunfall-Bereich”?",
      options: [
        "Wenn du dich auf dem direkten Weg zwischen Wohnung und Salon oder zwischen Salon und Berufsschule befindest.",
        "Immer wenn du unterwegs bist, egal wohin.",
        "Nur, wenn du im Salon auf dem Flur läufst.",
        "Nur, wenn du im Urlaub unterwegs bist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Wegeunfälle beziehen sich auf den direkten Weg mit Bezug zur Arbeit oder Ausbildung.",
      feedbackWrong:
        "Nicht ganz. Wegeunfall-Bereich heißt: direkter Weg zwischen Wohnung und Salon oder zwischen Salon und Berufsschule – nichts anderes.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l2_q12",
      topic: "Hin- und Rückweg",
      gameType: "true_false_swipe",
      statement:
        "Wegeunfälle betreffen nur den Hinweg zur Arbeit, der Rückweg nach Hause gehört nicht dazu.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Auch der direkte Rückweg von der Arbeit oder Berufsschule nach Hause kann vom Wegeunfall-Schutz erfasst sein.",
      feedbackWrong:
        "Falsch. Auch der direkte Rückweg nach Hause ist vom Wegeunfall-Schutz erfasst – nicht nur der Hinweg.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l2_q13",
      topic: "Gemeinsamkeiten",
      gameType: "single_choice_quiz",
      question:
        "Welche Gemeinsamkeit haben Arbeitsunfall und Wegeunfall?",
      options: [
        "Beide müssen plötzlich passieren und mit deiner Ausbildung oder Arbeit zusammenhängen.",
        "Beide passieren nur im Salon.",
        "Beide passieren nur in deiner Freizeit.",
        "Beide sind nur bei sehr schweren Verletzungen wichtig."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Plötzlichkeit und Zusammenhang mit der beruflichen Tätigkeit/Ausbildung sind zentrale Merkmale bei beiden.",
      feedbackWrong:
        "Nicht ganz. Beide – Arbeitsunfall und Wegeunfall – brauchen Plötzlichkeit und einen Bezug zur Arbeit oder Ausbildung.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l2_q14",
      topic: "Weg zur Berufsschule",
      gameType: "true_false_swipe",
      statement:
        "Der direkte Weg von deiner Wohnung zur Berufsschule kann im Falle eines Unfalls als Wegeunfall gelten.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Auch der Weg zur Berufsschule gehört für Azubis zum versicherten Bereich des Wegeunfalls.",
      feedbackWrong:
        "Doch, das stimmt. Der direkte Weg zur Berufsschule ist für Azubis Teil des Wegeunfall-Schutzes.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l2_q15",
      topic: "Kein Wegeunfall erkennen",
      gameType: "single_choice_quiz",
      question:
        "Woran erkennst du, dass ein Unfall eher KEIN Wegeunfall ist?",
      options: [
        "Der Weg hat keinen direkten Zusammenhang mit deiner Arbeit oder Ausbildung und ist deutlich privat, z. B. Shoppingtour oder Freizeitaktivität.",
        "Du bist irgendwann einmal aus dem Haus gegangen.",
        "Du trägst dabei Arbeitskleidung, aber bist im Urlaub.",
        "Du bist nah am Salon, egal wohin du unterwegs bist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Fehlt der klare Bezug zur Arbeit oder Ausbildung und ist der Weg deutlich privat, handelt es sich in der Regel nicht um einen Wegeunfall.",
      feedbackWrong:
        "Nicht ganz. Kein Wegeunfall = kein direkter Bezug zur Arbeit. Shoppingtour, Freizeit oder Urlaub sind rein privat.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_2;
