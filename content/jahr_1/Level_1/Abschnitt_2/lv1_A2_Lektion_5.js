// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_5.js
// Lektion 5 – Richtige Körperhaltung

const LEKTION_5 = {
  id: "j1_l1_a2_l5",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Richtige Körperhaltung",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l5_q01",
      topic: "Warum Haltung",
      gameType: "single_choice_quiz",
      question:
        "Warum ist eine gute Körperhaltung im Salon wichtig?",
      options: [
        "Sie schützt deinen Rücken und hilft, langfristig gesund zu bleiben.",
        "Nur damit du auf Fotos besser aussiehst.",
        "Damit Kunden denken, du bist größer.",
        "Damit du dich weniger bewegen musst."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Eine ergonomische Haltung beugt Schmerzen, Verspannungen und langfristigen Schäden vor.",
      feedbackWrong:
        "Nicht ganz. Gute Körperhaltung schützt deinen Rücken und deine Gelenke – das ist viel wichtiger als Äußerlichkeiten.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l5_q02",
      topic: "Krumme Haltung",
      gameType: "true_false_swipe",
      statement:
        "Stundenlang krumm über dem Stuhl hängen ist schlecht für Rücken und Schultern.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Dauerhaft gebücktes Arbeiten überlastet deine Muskulatur und Wirbelsäule.",
      feedbackWrong:
        "Doch, das stimmt. Stundenlang in gebückter Haltung zu arbeiten schadet Rücken und Schultern erheblich.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l5_q03",
      topic: "Fußstellung",
      gameType: "single_choice_quiz",
      question:
        "Wie sollten deine Füße idealerweise stehen, wenn du am Kunden arbeitest?",
      options: [
        "Beide Füße fest am Boden, Gewicht gleichmäßig verteilt.",
        "Nur auf einem Bein, das andere in der Luft.",
        "Auf Zehenspitzen, um größer zu wirken.",
        "Einer auf dem Stuhl, einer auf dem Boden."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Stabiler Stand mit beiden Füßen gibt dir Sicherheit und entlastet den Rücken.",
      feedbackWrong:
        "Nicht ganz. Beide Füße fest auf dem Boden, Gewicht gleichmäßig – das ist der stabile, sichere Stand.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l5_q04",
      topic: "Stuhl anpassen",
      gameType: "true_false_swipe",
      statement:
        "Du solltest lieber den Stuhl und dich selbst passend positionieren, statt dich mit dem Rücken zum Kunden zu verbiegen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Passe die Arbeitsposition an, nicht deinen Rücken – das ist ergonomischer.",
      feedbackWrong:
        "Doch, das stimmt. Immer zuerst die Position anpassen – sich zu verbiegen schadet dem Rücken auf Dauer.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l5_q05",
      topic: "Rücken schonen",
      gameType: "single_choice_quiz",
      question:
        "Was ist ein guter Tipp, um deinen Rücken zu schonen?",
      options: [
        "Stuhl und Kundenposition so einstellen, dass du möglichst aufrecht stehen kannst.",
        "So niedrig wie möglich arbeiten, damit du dich richtig runterbeugen musst.",
        "Den ganzen Tag auf einem Bein stehen.",
        "Immer von der Seite arbeiten, egal wie verrenkt du bist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Arbeite auf deiner Höhe, nicht dauerhaft zu tief oder zu hoch.",
      feedbackWrong:
        "Nicht ganz. Stuhl und Kundenposition anpassen, damit du aufrecht arbeiten kannst – nicht umgekehrt deinen Rücken anpassen.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l5_q06",
      topic: "Schuhe",
      gameType: "true_false_swipe",
      statement:
        "Rutschfeste, geschlossene Schuhe sind Teil der Arbeitssicherheit im Salon.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Sie geben Halt und schützen deine Füße z. B. vor herabfallenden Werkzeugen.",
      feedbackWrong:
        "Doch, das stimmt. Rutschfeste, geschlossene Schuhe geben Stabilität und schützen vor Verletzungen.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l5_q07",
      topic: "Geeignete Schuhe",
      gameType: "single_choice_quiz",
      question:
        "Welche Schuhe sind für die Arbeit im Salon am besten geeignet?",
      options: [
        "Rutschfeste, geschlossene Schuhe mit guter Sohle.",
        "Offene Flip-Flops.",
        "High Heels mit dünnen Absätzen.",
        "Hausschuhe ohne Profil."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Geschlossene, rutschfeste Schuhe reduzieren Sturzrisiken und schützen die Füße.",
      feedbackWrong:
        "Nicht ganz. Flip-Flops, High Heels und Hausschuhe ohne Profil sind im Salon gefährlich – rutschfeste, geschlossene Schuhe sind Pflicht.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l5_q08",
      topic: "Verrenkte Haltung",
      gameType: "true_false_swipe",
      statement:
        "Wenn du dich ständig verdrehst und verrenkst, um an den Kunden zu kommen, ist das auf Dauer ungesund.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Verdrehte Haltungen führen zu Verspannungen und Beschwerden.",
      feedbackWrong:
        "Doch, das stimmt. Dauerhafte Verdrehungen und Verrenkungen schädigen Muskeln und Wirbelsäule.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l5_q09",
      topic: "Haltung korrigieren",
      gameType: "single_choice_quiz",
      question:
        "Was hilft dir, eine gute Haltung zu behalten?",
      options: [
        "Regelmäßig kurz aufrichten, Schultern lockern und Position neu einstellen.",
        "So stehen bleiben, wie du einmal angefangen hast.",
        "Immer weiter nach vorne beugen.",
        "Den Kopf so weit wie möglich nach unten hängen lassen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kleine Korrekturen zwischendurch verhindern, dass du in ungünstigen Haltungen hängen bleibst.",
      feedbackWrong:
        "Nicht ganz. Regelmäßig aufrichten und Position anpassen ist der Schlüssel zu einer guten Körperhaltung.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l5_q10",
      topic: "Haltung & Unfallverhütung",
      gameType: "true_false_swipe",
      statement:
        "Deine Körperhaltung hat nichts mit Unfallverhütung zu tun.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Eine stabile Körperhaltung hilft dir, sicher zu stehen und auf unerwartete Bewegungen zu reagieren.",
      feedbackWrong:
        "Falsch. Körperhaltung ist direkt mit Sicherheit verbunden – ein stabiler Stand hilft bei plötzlichen Bewegungen und verhindert Stürze.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l5_q11",
      topic: "Stuhl höher stellen",
      gameType: "single_choice_quiz",
      question:
        "Du merkst, dass du dich immer weiter über den Kunden beugst. Was ist sinnvoll?",
      options: [
        "Stuhl höher stellen oder selbst näher herantreten.",
        "Einfach so weiterarbeiten, bis du fertig bist.",
        "Noch tiefer beugen, damit du alles siehst.",
        "Den Kunden bitten, aufzustehen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kleine Anpassungen der Position können deinen Rücken sofort entlasten.",
      feedbackWrong:
        "Nicht ganz. Stuhl oder Position anpassen ist die einfachste Lösung – deinen Rücken weiter zu belasten schadet langfristig.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l5_q12",
      topic: "Stabiler Stand",
      gameType: "true_false_swipe",
      statement:
        "Ein stabiler Stand mit beiden Füßen hilft dir, auch bei plötzlichen Bewegungen des Kunden sicher zu bleiben.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Wenn der Kunde sich bewegt, kannst du so besser reagieren, ohne das Gleichgewicht zu verlieren.",
      feedbackWrong:
        "Doch, das stimmt. Mit beiden Füßen fest auf dem Boden reagierst du sicherer auf unerwartete Bewegungen.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l5_q13",
      topic: "Schlechte Haltung Folgen",
      gameType: "single_choice_quiz",
      question:
        "Was kann eine Folge von dauerhaft schlechter Haltung im Salon sein?",
      options: [
        "Rückenschmerzen, Verspannungen und langfristige gesundheitliche Probleme.",
        "Mehr Energie und bessere Laune.",
        "Weniger Bedarf an Pausen.",
        "Stärkere Haarqualität bei Kunden."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Schlechte Haltung schadet langfristig deiner Gesundheit.",
      feedbackWrong:
        "Nicht ganz. Dauerhaft schlechte Haltung führt zu Rückenschmerzen und Verspannungen – das ist ein ernstes Berufsrisiko.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l5_q14",
      topic: "Persönliche Schutzausrüstung",
      gameType: "true_false_swipe",
      statement:
        "Körperhaltung und Schuhwerk gehören zur persönlichen Schutzausrüstung im weitesten Sinne.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Beides trägt dazu bei, deinen Körper bei der Arbeit zu schützen.",
      feedbackWrong:
        "Doch, das stimmt. Gute Haltung und passendes Schuhwerk schützen deinen Körper – das gehört zum erweiterten Verständnis von Schutzausrüstung.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l5_q15",
      topic: "Gute Haltung gesamt",
      gameType: "single_choice_quiz",
      question:
        "Welche Kombination beschreibt eine gute Arbeitshaltung am besten?",
      options: [
        "Aufrecht stehen, beide Füße am Boden, Stuhl angepasst, rutschfeste Schuhe.",
        "Krumm stehen, ein Fuß in der Luft, offener Schuh.",
        "Immer nur auf einem Bein stehen.",
        "Sich so weit wie möglich nach vorne beugen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Diese Kombination ist stabil, sicher und rückenfreundlich.",
      feedbackWrong:
        "Nicht ganz. Aufrecht + beide Füße + Stuhl angepasst + rutschfeste Schuhe – das ist die optimale Kombination.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_5;
