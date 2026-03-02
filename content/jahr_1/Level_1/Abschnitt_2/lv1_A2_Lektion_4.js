// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_4.js
// Lektion 4 – Ruhe statt Hektik

const LEKTION_4 = {
  id: "j1_l1_a2_l4",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Ruhe statt Hektik",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l4_q01",
      topic: "Stress als Risiko",
      gameType: "single_choice_quiz",
      question:
        "Warum gilt Stress im Salon als „Unfalltreiber”?",
      options: [
        "Weil man unter Stress unachtsamer wird und schneller Fehler macht.",
        "Weil Stress nur die Kunden nervt.",
        "Weil Stress dafür sorgt, dass du schneller fegst.",
        "Weil man dann mehr Produkte verkauft."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Unter Stress sinkt die Konzentration – Unfälle mit Schere, Glätteisen & Co. passieren dann leichter.",
      feedbackWrong:
        "Nicht ganz. Stress senkt deine Konzentration. Das erhöht das Risiko für Schnitt- und Verbrennungsunfälle.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l4_q02",
      topic: "Bewusst arbeiten",
      gameType: "true_false_swipe",
      statement:
        "Lieber einen Schritt langsamer, dafür bewusst arbeiten – das kann Unfälle verhindern.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Bewusstes, konzentriertes Arbeiten reduziert Unfallgefahren deutlich.",
      feedbackWrong:
        "Doch, das stimmt. Ein bisschen langsamer, aber bewusst ist viel sicherer als hektisch und unaufmerksam.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l4_q03",
      topic: "Schere weglegen",
      gameType: "single_choice_quiz",
      question:
        "Du hast es eilig und willst schnell zum nächsten Kunden laufen. Was ist sicherer?",
      options: [
        "Erst die Schere weglegen und dann losgehen.",
        "Schere in der Hand behalten, um Zeit zu sparen.",
        "Mit der geöffneten Schere durch den Salon laufen.",
        "Schere in die Tasche stecken und rennen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Scharfe Werkzeuge sollten vor Bewegungen sicher abgelegt werden.",
      feedbackWrong:
        "Nicht ganz. Mit Schere in der Hand laufen ist gefährlich – immer erst ablegen, dann gehen.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l4_q04",
      topic: "Glätteisen & Telefon",
      gameType: "true_false_swipe",
      statement:
        "Wenn das Telefon klingelt, kannst du ruhig mit dem heißen Glätteisen in der Hand zum Tresen laufen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Heißes Gerät immer erst sicher ablegen, dann zum Telefon gehen.",
      feedbackWrong:
        "Falsch. Mit heißem Glätteisen in der Hand zum Telefon laufen ist gefährlich – erst ablegen, dann hingehen.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l4_q05",
      topic: "Sicherste Arbeitsweise",
      gameType: "single_choice_quiz",
      question:
        "Welche Arbeitsweise ist am sichersten?",
      options: [
        "Gezielt eine Sache nach der anderen erledigen.",
        "Alles gleichzeitig machen: Telefon, Farbe anmischen, schneiden.",
        "Mit der Schere in der Hand herumlaufen, um Zeit zu sparen.",
        "Beim Laufen ständig auf das Handy schauen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Multitasking mit scharfen oder heißen Werkzeugen erhöht das Unfallrisiko massiv.",
      feedbackWrong:
        "Nicht ganz. Eine Sache nach der anderen ist immer sicherer als Multitasking mit gefährlichen Werkzeugen.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l4_q06",
      topic: "Konzentration",
      gameType: "true_false_swipe",
      statement:
        "Konzentriert arbeiten heißt: Ich lenke mich so wenig wie möglich ab und bleibe bei einer Aufgabe.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Weniger Ablenkung = mehr Sicherheit im Umgang mit Werkzeugen und Kunden.",
      feedbackWrong:
        "Doch, das stimmt. Konzentriert bei einer Aufgabe zu bleiben reduziert die Unfallgefahr erheblich.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l4_q07",
      topic: "Stress-Reaktion",
      gameType: "single_choice_quiz",
      question:
        "Du bist im Stress, weil mehrere Kunden warten. Was ist eine sinnvolle Reaktion?",
      options: [
        "Kurz tief durchatmen, priorisieren und dann Schritt für Schritt arbeiten.",
        "Noch hektischer werden, damit du alles gleichzeitig schaffst.",
        "Mit offener Schere durch den Salon rennen.",
        "Heißes Glätteisen irgendwo schnell hinwerfen und weiterlaufen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kurz sortieren und strukturiert vorgehen ist sicherer als kopflose Hektik.",
      feedbackWrong:
        "Nicht ganz. Hektischer werden macht es schlimmer. Kurz durchatmen und strukturieren ist die richtige Reaktion.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l4_q08",
      topic: "Dauerstress",
      gameType: "true_false_swipe",
      statement:
        "Wenn du dich oft gehetzt fühlst, steigt die Wahrscheinlichkeit für Unfälle.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Dauerstress führt zu Unachtsamkeit – ein Risiko im Salonalltag.",
      feedbackWrong:
        "Doch, das stimmt. Wer sich dauerhaft gehetzt fühlt, wird unachtsam – das erhöht das Unfallrisiko.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l4_q09",
      topic: "Nicht zwischen Tür und Angel",
      gameType: "single_choice_quiz",
      question:
        "Was bedeutet „nicht zwischen Tür und Angel arbeiten” im Salon?",
      options: [
        "Nicht gleichzeitig Kunden bedienen, Telefonate führen und Geräte herumtragen.",
        "Die Tür immer geschlossen halten.",
        "Nur im Türbereich färben.",
        "Kunden grundsätzlich zur Tür begleiten."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Es heißt: nicht halbherzig, nebenbei und hektisch mehrere Dinge auf einmal machen.",
      feedbackWrong:
        "Nicht ganz. „Zwischen Tür und Angel” heißt: alles gleichzeitig und halbherzig. Das vermeiden bedeutet: fokussiert arbeiten.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l4_q10",
      topic: "Sicherheit vor Tempo",
      gameType: "true_false_swipe",
      statement:
        "Sicherheit geht vor Tempo – auch wenn der Salon voll ist.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Lieber sicher arbeiten, als durch Hektik Verletzungen zu riskieren.",
      feedbackWrong:
        "Doch, das stimmt. Tempo ist wichtig, aber Sicherheit hat immer Vorrang – auch an vollen Tagen.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l4_q11",
      topic: "Pausen & Ruhe",
      gameType: "single_choice_quiz",
      question:
        "Welche Aussage passt am besten zur Unfallverhütung bei Stress?",
      options: [
        "Ich plane kleine Pausen zum Durchatmen ein und bleibe so ruhig wie möglich.",
        "Ich ignoriere Stress, bis ich zusammenklappe.",
        "Ich arbeite extra hektisch, um alles zu schaffen.",
        "Ich nehme scharfe Werkzeuge überall mit hin, um Zeit zu sparen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kurze mentale Pausen helfen, konzentriert und sicher zu bleiben.",
      feedbackWrong:
        "Nicht ganz. Kleine Pausen und Ruhe sind der beste Schutz – Hektik und Ignorieren machen es nur gefährlicher.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l4_q12",
      topic: "Schere tragen",
      gameType: "true_false_swipe",
      statement:
        "Es ist in Ordnung, mit einer Schere in der Hand schnell zum Lager zu laufen, wenn du dich beeilen musst.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Mit scharfen Werkzeugen laufen ist immer riskant – erst ablegen, dann gehen.",
      feedbackWrong:
        "Falsch. Auch wenn du dich beeilens musst: Schere immer erst weglegen, dann losgehen.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l4_q13",
      topic: "Routine & Abläufe",
      gameType: "single_choice_quiz",
      question:
        "Was hilft dir, auch an vollen Tagen sicher zu bleiben?",
      options: [
        "Routinen und klare Abläufe, damit du nicht in Hektik verfällst.",
        "Alles spontan und ohne Plan machen.",
        "Immer schneller werden, egal wie.",
        "Werkzeuge überall liegen lassen, wo gerade Platz ist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Gute Abläufe geben Sicherheit – auch, wenn viel los ist.",
      feedbackWrong:
        "Nicht ganz. Routinen und feste Abläufe helfen, auch an stressigen Tagen den Überblick zu behalten.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l4_q14",
      topic: "Ruhe im Kopf",
      gameType: "true_false_swipe",
      statement:
        "Ruhe im Kopf und klare Schritte sind ein wichtiger Schutz vor Unfällen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Wer geistig geordnet bleibt, macht weniger gefährliche Fehler.",
      feedbackWrong:
        "Doch, das stimmt. Wer innerlich ruhig und strukturiert vorgeht, arbeitet sicherer und macht weniger Fehler.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l4_q15",
      topic: "Gefährlichste Situation",
      gameType: "single_choice_quiz",
      question:
        "Welche Situation ist am unsichersten?",
      options: [
        "Du läufst mit offener Schere und heißem Glätteisen in der Hand telefonierend durch den Salon.",
        "Du legst Schere und Glätteisen ab, bevor du den Platz wechselst.",
        "Du atmest einmal durch und gehst in Ruhe zum Telefon.",
        "Du bittest kurz eine Kollegin um Hilfe."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Mehrere Risiken gleichzeitig (offene Schere, heißes Gerät, Ablenkung) sind eine gefährliche Kombination.",
      feedbackWrong:
        "Nicht ganz. Offene Schere + heißes Gerät + Ablenkung gleichzeitig – das ist die gefährlichste Kombination.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_4;
