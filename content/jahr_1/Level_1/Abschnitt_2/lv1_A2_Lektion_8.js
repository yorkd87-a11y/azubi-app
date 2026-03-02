// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_8.js
// Lektion 8 – Abschluss-Quiz: Arbeitsunfälle & Sicherheit

const LEKTION_8 = {
  id: "j1_l1_a2_l8",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Abschluss-Quiz: Arbeitsunfälle & Sicherheit",
  track: "arbeitsschutz",
  energy: 20,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1 – Definition Arbeitsunfall
    {
      id: "j1_l1_a2_l8_q01",
      topic: "Arbeitsunfall",
      gameType: "single_choice_quiz",
      question:
        "Welche Aussage beschreibt einen Arbeitsunfall am besten?",
      options: [
        "Ein plötzliches Ereignis während deiner beruflichen Tätigkeit, das zu einem Gesundheitsschaden führt.",
        "Jeder Unfall, den du im Freundeskreis erlebst.",
        "Ein Unfall, der nur Kunden passieren kann.",
        "Ein Unfall, der nur in deiner Freizeit auftritt."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Plötzliches Ereignis + berufliche Tätigkeit + Gesundheitsschaden = typische Definition eines Arbeitsunfalls.",
      feedbackWrong:
        "Nicht ganz. Merke dir die drei Merkmale: plötzlich + bei der Arbeit + Gesundheitsschaden.",
      bonusStrikeOnCorrect: true
    },

    // 2 – Definition Wegeunfall
    {
      id: "j1_l1_a2_l8_q02",
      topic: "Wegeunfall",
      gameType: "single_choice_quiz",
      question:
        "Was ist ein Wegeunfall?",
      options: [
        "Ein Unfall auf dem direkten Weg zwischen Wohnung und Arbeitsplatz oder zwischen Salon und Berufsschule.",
        "Jeder Unfall im Urlaub.",
        "Ein Unfall im Salon beim Schneiden.",
        "Ein Unfall beim Shopping mit Freunden."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Wegeunfälle betreffen den direkten Weg mit Bezug zu Arbeit/Ausbildung, nicht private Freizeitwege.",
      feedbackWrong:
        "Nicht ganz. Wegeunfall = direkter Weg zwischen Wohnung und Salon oder zwischen Salon und Berufsschule.",
      bonusStrikeOnCorrect: true
    },

    // 3 – True/False Wegeunfall
    {
      id: "j1_l1_a2_l8_q03",
      topic: "Wegeunfall Beispiel",
      gameType: "true_false_swipe",
      statement:
        "Du fährst morgens direkt von zu Hause zur Arbeit, stürzt mit dem Fahrrad und verletzt dich. Das kann ein Wegeunfall sein.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Direkter Weg zwischen Wohnung und Arbeitsplatz = klassischer Wegeunfall-Bereich.",
      feedbackWrong:
        "Doch, das stimmt. Direkter Weg zur Arbeit ist Wegeunfall-Bereich – ein Sturz dabei erfüllt alle Merkmale.",
      bonusStrikeOnCorrect: true
    },

    // 4 – Ordnung & Sauberkeit
    {
      id: "j1_l1_a2_l8_q04",
      topic: "Haare fegen",
      gameType: "single_choice_quiz",
      question:
        "Warum sollten Haare regelmäßig vom Boden gefegt werden?",
      options: [
        "Weil Haare extrem rutschig sind und Stürze verursachen können.",
        "Nur, weil sie nicht schön aussehen.",
        "Damit der Föhn besser funktioniert.",
        "Damit die Farbe intensiver wirkt."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Haare auf glattem Boden wirken wie kleine Kugellager – man kann leicht ausrutschen.",
      feedbackWrong:
        "Nicht ganz. Haare auf dem Boden sind eine echte Rutschgefahr – nicht nur ein optisches Problem.",
      bonusStrikeOnCorrect: true
    },

    // 5 – Flüssigkeiten
    {
      id: "j1_l1_a2_l8_q05",
      topic: "Sofort aufwischen",
      gameType: "true_false_swipe",
      statement:
        "Verschüttetes Wasser oder Farbe solltest du sofort aufwischen, nicht erst am Ende des Tages.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Sofortiges Aufwischen reduziert die Rutschgefahr für dich, Kollegen und Kunden.",
      feedbackWrong:
        "Doch, das stimmt. Wasser oder Farbe sofort aufwischen – jede Verzögerung ist eine Sturzmöglichkeit.",
      bonusStrikeOnCorrect: true
    },

    // 6 – Stress & Hektik
    {
      id: "j1_l1_a2_l8_q06",
      topic: "Hektik als Risiko",
      gameType: "single_choice_quiz",
      question:
        "Warum gilt Hektik im Salon als Unfalltreiber?",
      options: [
        "Weil du unter Stress unachtsamer wirst und schneller Fehler mit Scheren und heißen Geräten machst.",
        "Weil Hektik nur die Stimmung drückt, aber nichts mit Unfällen zu tun hat.",
        "Weil du dann automatisch stärker wirst.",
        "Weil Kunden dann weniger reden."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Weniger Konzentration bei Stress = höheres Risiko für Schnitt- und Verbrennungsunfälle.",
      feedbackWrong:
        "Nicht ganz. Unter Stress sinkt die Konzentration – das erhöht das Unfallrisiko mit Scheren, Messern und heißen Geräten.",
      bonusStrikeOnCorrect: true
    },

    // 7 – Glätteisen/Telefon
    {
      id: "j1_l1_a2_l8_q07",
      topic: "Glätteisen ablegen",
      gameType: "true_false_swipe",
      statement:
        "Wenn das Telefon klingelt, ist es in Ordnung, mit einem heißen Glätteisen in der Hand schnell zum Tresen zu laufen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Heißes Gerät immer zuerst sicher ablegen – dann zum Telefon.",
      feedbackWrong:
        "Falsch. Mit heißem Glätteisen zum Telefon laufen ist gefährlich – erst sicher ablegen, dann hingehen.",
      bonusStrikeOnCorrect: true
    },

    // 8 – Körperhaltung
    {
      id: "j1_l1_a2_l8_q08",
      topic: "Ergonomische Haltung",
      gameType: "single_choice_quiz",
      question:
        "Welche Körperhaltung ist am gesündesten für deinen Rücken?",
      options: [
        "Aufrechte Haltung, beide Füße fest am Boden, Stuhl passend eingestellt.",
        "Dauerhaft tief über den Kunden gebeugt.",
        "Immer nur auf einem Bein stehen.",
        "Mit stark verdrehtem Oberkörper arbeiten."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ergonomische Haltung schützt Rücken und Gelenke langfristig.",
      feedbackWrong:
        "Nicht ganz. Aufrecht + beide Füße + Stuhl angepasst – das ist die rückenfreundliche Arbeitshaltung.",
      bonusStrikeOnCorrect: true
    },

    // 9 – Schuhe
    {
      id: "j1_l1_a2_l8_q09",
      topic: "Richtiges Schuhwerk",
      gameType: "true_false_swipe",
      statement:
        "Rutschfeste, geschlossene Schuhe sind Teil der sicheren Arbeitsweise im Salon.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Sie geben Halt und schützen deine Füße z. B. vor herabfallenden Werkzeugen.",
      feedbackWrong:
        "Doch, das stimmt. Rutschfeste, geschlossene Schuhe gehören zur sicheren Arbeitsweise – sie schützen und geben Stabilität.",
      bonusStrikeOnCorrect: true
    },

    // 10 – Kabel quer
    {
      id: "j1_l1_a2_l8_q10",
      topic: "Kabel im Laufweg",
      gameType: "single_choice_quiz",
      question:
        "Was ist das größte Problem bei Kabeln, die quer durch den Laufweg liegen?",
      options: [
        "Jemand kann hängen bleiben, stolpern und stürzen.",
        "Sie sehen nicht schön aus.",
        "Sie machen den Föhn lauter.",
        "Sie färben den Boden um."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Lose oder gespannte Kabel im Laufweg sind typische Stolperfallen.",
      feedbackWrong:
        "Nicht ganz. Kabel im Laufweg sind keine Optik-Frage – sie sind Stolperfallen und können zu ernsthaften Stürzen führen.",
      bonusStrikeOnCorrect: true
    },

    // 11 – Kabel-True/False
    {
      id: "j1_l1_a2_l8_q11",
      topic: "Kabel sichern",
      gameType: "true_false_swipe",
      statement:
        "Kabel sollten möglichst so gelegt werden, dass sie aus den Hauptlaufwegen herausgehalten werden.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! So verringerst du das Risiko, dass jemand darüber stolpert oder hängen bleibt.",
      feedbackWrong:
        "Doch, das stimmt. Kabel gehören aus Laufwegen heraus – an der Wand entlang oder unter dem Arbeitsplatz.",
      bonusStrikeOnCorrect: true
    },

    // 12 – Werkzeuge offen
    {
      id: "j1_l1_a2_l8_q12",
      topic: "Schere ablegen",
      gameType: "single_choice_quiz",
      question:
        "Wie solltest du eine Schere ablegen, wenn du kurz vom Platz weggehst?",
      options: [
        "Geschlossen und sicher auf dem Arbeitsplatz oder in der Werkzeugtasche.",
        "Offen auf der Kante des Tisches.",
        "Auf dem Boden neben dem Stuhl.",
        "Mit der Spitze in den Laufweg hinein."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Geschlossene, sicher abgelegte Scheren reduzieren das Verletzungsrisiko deutlich.",
      feedbackWrong:
        "Nicht ganz. Schere immer schließen und sicher ablegen – nie offen auf einer Kante oder mit Spitze in den Gang.",
      bonusStrikeOnCorrect: true
    },

    // 13 – Nadeln/Klammern
    {
      id: "j1_l1_a2_l8_q13",
      topic: "Kleinteile",
      gameType: "true_false_swipe",
      statement:
        "Kleine Teile wie Klammern und Nadeln auf dem Boden sind kein Problem, weil alle Schuhe tragen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Sie können zu Stichverletzungen und Stolperunfällen führen und gehören nicht auf den Boden.",
      feedbackWrong:
        "Falsch. Kleine Teile auf dem Boden sind Stich- und Stolpergefahr – egal ob jemand Schuhe trägt oder nicht.",
      bonusStrikeOnCorrect: true
    },

    // 14 – Kombinationsfrage
    {
      id: "j1_l1_a2_l8_q14",
      topic: "Sichere Arbeitsweise gesamt",
      gameType: "single_choice_quiz",
      question:
        "Welche Kombination beschreibt sichere Arbeitsweise im Salon am besten?",
      options: [
        "Aufgeräumter Arbeitsplatz, ruhiges Arbeiten, sichere Körperhaltung, Kabel und Werkzeuge korrekt gesichert.",
        "Hektik, offene Scheren, Kabel quer durch den Raum, Haare auf dem Boden.",
        "Flip-Flops, Glätteisen auf dem Handtuch, Nadeln auf dem Boden.",
        "Alles liegen lassen, wo es gerade hinfällt."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Unfallverhütung ist das Zusammenspiel aus Ordnung, Ruhe, Ergonomie und sicherem Umgang mit Geräten.",
      feedbackWrong:
        "Nicht ganz. Aufgeräumt + ruhig + gute Haltung + Kabel/Werkzeuge gesichert – das ist die sichere Kombination.",
      bonusStrikeOnCorrect: true
    },

    // 15 – Übertrag in den Alltag
    {
      id: "j1_l1_a2_l8_q15",
      topic: "Wissen anwenden",
      gameType: "true_false_swipe",
      statement:
        "Wenn du die Regeln zu Arbeits- und Wegeunfällen sowie zur Unfallverhütung kennst, kannst du aktiv dazu beitragen, den Salon für alle sicherer zu machen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Wissen + Anwendung im Alltag = sichereres Arbeiten für dich, dein Team und deine Kunden.",
      feedbackWrong:
        "Doch, das stimmt. Wer die Regeln kennt und anwendet, schützt sich selbst und alle im Salon.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_8;
