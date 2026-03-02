// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_3.js
// Lektion 3 – Ordnung & Sauberkeit

const LEKTION_3 = {
  id: "j1_l1_a2_l3",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Ordnung & Sauberkeit",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l3_q01",
      topic: "Warum Ordnung",
      gameType: "single_choice_quiz",
      question: "Warum ist Ordnung & Sauberkeit im Salon so wichtig?",
      options: [
        "Sie verhindert viele Unfälle, weil weniger Stolper- und Rutschgefahren entstehen.",
        "Nur damit der Salon auf Fotos schön aussieht.",
        "Damit Azubis mehr zu tun haben.",
        "Damit man nicht so oft putzen muss."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ordnung & Sauberkeit reduzieren Rutsch- und Stolpergefahren – das ist ein wichtiger Teil der Unfallverhütung.",
      feedbackWrong:
        "Nicht ganz. Ordnung ist vor allem Sicherheit: weniger Stolper- und Rutschgefahren für dich, das Team und die Kunden.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l3_q02",
      topic: "Haare auf dem Boden",
      gameType: "single_choice_quiz",
      question: "Was ist das Hauptproblem, wenn Haare auf dem Boden liegen?",
      options: [
        "Haare sind extrem rutschig und erhöhen die Sturzgefahr.",
        "Haare machen die Luft im Salon schlecht.",
        "Haare färben den Boden um.",
        "Haare stören nur optisch, sind aber nicht gefährlich."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Haare auf glatten Böden wirken wie kleine Kugellager – man kann leicht ausrutschen.",
      feedbackWrong:
        "Nicht ganz. Haare auf glattem Boden sind eine echte Rutschgefahr – nicht nur ein optisches Problem.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l3_q03",
      topic: "Wasser aufwischen",
      gameType: "true_false_swipe",
      statement:
        "Verschüttetes Wasser kannst du in Ruhe später aufwischen, wenn du mit dem Kunden fertig bist.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Flüssigkeiten sollten sofort entfernt werden, damit niemand ausrutscht.",
      feedbackWrong:
        "Falsch. Wasser auf dem Boden muss sofort weg – jede Minute Wartezeit ist eine potenzielle Sturzmöglichkeit für alle im Salon.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l3_q04",
      topic: "Wasser sofort",
      gameType: "single_choice_quiz",
      question:
        "Du siehst, dass beim Auswaschen Wasser auf den Boden gelaufen ist. Was ist der beste nächste Schritt?",
      options: [
        "Kurz den Kunden sichern und das Wasser sofort aufwischen.",
        "Ignorieren, weil du gerade im Stress bist.",
        "Warten, bis die Schicht vorbei ist.",
        "Jemanden bitten, ein Schild „Vorsicht, nass” hinzustellen – mehr nicht."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Schnell reagieren und aufwischen – so verhinderst du Stürze von dir, Kollegen und Kunden.",
      feedbackWrong:
        "Nicht ganz. Das Wasser muss sofort weg. Nur ein Schild aufzustellen reicht nicht – die Gefahr bleibt bestehen.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l3_q05",
      topic: "Laufwege frei",
      gameType: "true_false_swipe",
      statement:
        "Wege sollten frei von Kartons, Taschen und Trolleys sein.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Gegenstände im Laufweg sind typische Stolperfallen und sollten dort nicht stehen.",
      feedbackWrong:
        "Doch, das stimmt. Kartons, Taschen und Trolleys im Laufweg sind klassische Stolperfallen – Wege müssen freigehalten werden.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l3_q06",
      topic: "Schlechtes Beispiel",
      gameType: "single_choice_quiz",
      question:
        "Was ist ein schlechtes Beispiel für Ordnung & Sauberkeit im Salon?",
      options: [
        "Ein Trolley steht mitten im schmalen Gang.",
        "Frisch gefegter Boden ohne Haare.",
        "Wege zum Waschbecken sind frei.",
        "Verschüttete Farbe wurde sofort weggewischt."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ein Trolley im schmalen Gang blockiert den Weg und erhöht das Risiko zu stolpern oder hängen zu bleiben.",
      feedbackWrong:
        "Nicht ganz. Der Trolley im Gang ist die Stolperfalle – alle anderen Optionen beschreiben gute Ordnung.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l3_q07",
      topic: "Haare fegen",
      gameType: "true_false_swipe",
      statement:
        "Es reicht, wenn du Haare nur einmal am Ende des Tages vom Boden fegst.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Haare sollten regelmäßig im Laufe des Tages entfernt werden, damit niemand ausrutscht.",
      feedbackWrong:
        "Falsch. Einmal am Ende des Tages reicht nicht – Haare sammeln sich bei jedem Kunden. Regelmäßiges Fegen ist Pflicht.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l3_q08",
      topic: "Gute Ordnung",
      gameType: "single_choice_quiz",
      question:
        "Welche Kombination beschreibt gute Ordnung im Salon am besten?",
      options: [
        "Boden regelmäßig gefegt, verschüttete Flüssigkeiten sofort weg, Laufwege frei.",
        "Volle Müllbeutel im Gang, Haare unter dem Stuhl, Wasserlachen am Waschbecken.",
        "Kartons im Flur, Taschen neben den Kundenstühlen, Farbe auf dem Boden.",
        "Haare nur im hinteren Salonbereich, vorne aber nicht."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Regelmäßiges Fegen, sofortiges Aufwischen und freie Wege sind Kernregeln der Unfallverhütung.",
      feedbackWrong:
        "Nicht ganz. Gute Ordnung = regelmäßig fegen + sofort aufwischen + Laufwege frei halten.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l3_q09",
      topic: "Wer profitiert",
      gameType: "true_false_swipe",
      statement:
        "Ordnung & Sauberkeit schützen nur die Kunden, nicht das Team.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Alle profitieren davon – Kunden, Azubis und das ganze Team.",
      feedbackWrong:
        "Falsch. Ordnung schützt alle – Kunden, Azubis und das gesamte Team profitieren von einem sicheren Arbeitsumfeld.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l3_q10",
      topic: "Farbe aufwischen",
      gameType: "single_choice_quiz",
      question:
        "Beim Anmischen von Farbe tropft etwas auf den Boden. Was sollte idealerweise passieren?",
      options: [
        "Direkt aufwischen, bevor jemand hineintritt.",
        "Erst wenn du Zeit hast, vielleicht in der Pause.",
        "Ignorieren, das trocknet von allein.",
        "Nur ein Handtuch darüber legen und vergessen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Direktes Aufwischen verhindert Rutschgefahr und Flecken.",
      feedbackWrong:
        "Nicht ganz. Farbe auf dem Boden sofort aufwischen – warten erhöht die Rutschgefahr und die Flecken werden schlimmer.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l3_q11",
      topic: "Haare auf Fliesen",
      gameType: "true_false_swipe",
      statement:
        "Haare auf Fliesen sind besonders rutschig.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Auf glattem Boden wie Fliesen können Haare extrem rutschig sein.",
      feedbackWrong:
        "Doch, das stimmt. Fliesen sind glatt – Haare darauf wirken wie Kugeln und erhöhen die Sturzgefahr enorm.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l3_q12",
      topic: "Sofort reagieren",
      gameType: "single_choice_quiz",
      question:
        "Wann solltest du spätestens reagieren, wenn du Haare oder Flüssigkeit im Laufweg entdeckst?",
      options: [
        "Sofort, bevor jemand darüber läuft.",
        "Am Ende des Tages.",
        "Nur wenn ein Kunde es bemerkt.",
        "Gar nicht, das ist Aufgabe der Chefin."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Je schneller du reagierst, desto geringer ist die Unfallgefahr.",
      feedbackWrong:
        "Nicht ganz. Sofort handeln ist die richtige Antwort – jede Verzögerung erhöht das Risiko für alle.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l3_q13",
      topic: "Trolley im Weg",
      gameType: "true_false_swipe",
      statement:
        "Wenn ein Weg durch einen Trolley blockiert ist, ist das okay, solange du selbst weißt, dass er dort steht.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Auch Kollegen und Kunden könnten darüber stolpern – Wege sollten grundsätzlich freigehalten werden.",
      feedbackWrong:
        "Falsch. Dass du selbst weißt, wo der Trolley steht, schützt niemanden anderen. Wege müssen grundsätzlich frei sein.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l3_q14",
      topic: "Prinzip Unfallverhütung",
      gameType: "single_choice_quiz",
      question:
        "Welcher Satz bringt das Prinzip der Unfallverhütung durch Ordnung am besten auf den Punkt?",
      options: [
        "Freie Wege, sauberer Boden, kein unnötiges Zeug im Laufweg.",
        "Je voller der Boden, desto gemütlicher.",
        "Nur Kundenbereiche müssen sauber sein.",
        "Solange man schnell arbeitet, ist Ordnung egal."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Freie und saubere Wege sind die Basis für einen sicheren Salon.",
      feedbackWrong:
        "Nicht ganz. Merke dir: freie Wege + sauberer Boden + kein Zeug im Laufweg = sichere Arbeitsumgebung.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l3_q15",
      topic: "Unfallverhütung",
      gameType: "true_false_swipe",
      statement:
        "Ordnung & Sauberkeit gehören zur allgemeinen Unfallverhütung im Salon.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Sie sind ein zentraler Teil von Arbeitsschutz und Sicherheit.",
      feedbackWrong:
        "Doch, das stimmt. Ordnung & Sauberkeit sind grundlegende Maßnahmen der Unfallverhütung – genauso wichtig wie Schutzausrüstung.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_3;
