// content/jahr_1/Level_1/Abschnitt_2/lv1_A2_Lektion_6.js
// Lektion 6 – Kabel sichern

const LEKTION_6 = {
  id: "j1_l1_a2_l6",
  jahr: 1,
  level: 1,
  section: 2,
  title: "Kabel sichern",
  track: "arbeitsschutz",
  energy: 15,
  bonusStrikeOnPerfect: true,

  questions: [
    // 1
    {
      id: "j1_l1_a2_l6_q01",
      topic: "Kabel als Risiko",
      gameType: "single_choice_quiz",
      question:
        "Warum sind Kabel im Salon ein Sicherheitsrisiko?",
      options: [
        "Weil man daran hängen bleiben und stolpern kann.",
        "Nur weil sie nicht schön aussehen.",
        "Weil sie zu laut sind.",
        "Weil sie Kunden nervös machen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Lose Kabel im Laufweg sind typische Stolperfallen.",
      feedbackWrong:
        "Nicht ganz. Kabel sind eine Stolpergefahr – man kann hängen bleiben und stürzen.",
      bonusStrikeOnCorrect: true
    },

    // 2
    {
      id: "j1_l1_a2_l6_q02",
      topic: "Kabel quer",
      gameType: "true_false_swipe",
      statement:
        "Kabel sollten möglichst nicht quer durch den Raum oder den Laufweg hängen.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Quer liegende Kabel erhöhen das Risiko, dass jemand hängen bleibt.",
      feedbackWrong:
        "Doch, das stimmt. Kabel quer durch den Raum oder Laufweg sind eine ernsthafte Stolpergefahr für alle.",
      bonusStrikeOnCorrect: true
    },

    // 3
    {
      id: "j1_l1_a2_l6_q03",
      topic: "Kabel führen",
      gameType: "single_choice_quiz",
      question:
        "Wie kannst du Kabel im Salon sicherer machen?",
      options: [
        "Kabel so führen, dass sie nah an der Wand oder unter dem Arbeitsplatz entlanglaufen.",
        "Kabel mitten im Gang liegen lassen.",
        "Extra viele Verlängerungskabel kreuz und quer legen.",
        "Kabel bewusst locker in der Luft hängen lassen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kabel sollten möglichst aus Laufwegen herausgehalten werden.",
      feedbackWrong:
        "Nicht ganz. Kabel an der Wand oder unter dem Arbeitsplatz entlangführen – so bleiben Laufwege frei.",
      bonusStrikeOnCorrect: true
    },

    // 4
    {
      id: "j1_l1_a2_l6_q04",
      topic: "Kunden über Kabel",
      gameType: "true_false_swipe",
      statement:
        "Es ist okay, wenn Kunden und Kollegen über Kabel steigen müssen – Hauptsache, du kommst gut an deine Steckdose.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Niemand sollte gezwungen sein, über Kabel zu steigen – das ist eine klare Stolpergefahr.",
      feedbackWrong:
        "Falsch. Kabel so zu legen, dass andere darüber steigen müssen, ist eine Stolpergefahr – das ist nicht akzeptabel.",
      bonusStrikeOnCorrect: true
    },

    // 5
    {
      id: "j1_l1_a2_l6_q05",
      topic: "Geräte abschalten",
      gameType: "single_choice_quiz",
      question:
        "Was solltest du mit Geräten machen, die du aktuell nicht brauchst?",
      options: [
        "Ausschalten und sicher ablegen, Kabel ordentlich verstauen.",
        "Einfach anlassen, falls du sie gleich wieder brauchst.",
        "Auf den Boden werfen.",
        "Mit Kabel quer über den Stuhl hängen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Ausgeschaltete, ordentlich abgelegte Geräte sind sicherer für alle.",
      feedbackWrong:
        "Nicht ganz. Nicht gebrauchte Geräte immer ausschalten und sicher verstauen – so reduzierst du Hitze- und Stolpergefahr.",
      bonusStrikeOnCorrect: true
    },

    // 6
    {
      id: "j1_l1_a2_l6_q06",
      topic: "Straffe Kabel",
      gameType: "true_false_swipe",
      statement:
        "Wenn ein Kabel straff quer durch den Gang gespannt ist, ist das besonders gefährlich.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Straffe Kabel in Laufwegen sind eine extrem hohe Stolpergefahr.",
      feedbackWrong:
        "Doch, das stimmt. Ein straff gespanntes Kabel im Gang ist eine der gefährlichsten Stolperfallen im Salon.",
      bonusStrikeOnCorrect: true
    },

    // 7
    {
      id: "j1_l1_a2_l6_q07",
      topic: "Kabel umhängen",
      gameType: "single_choice_quiz",
      question:
        "Du bemerkst, dass ein Glätteisen-Kabel quer über den Weg zum Waschbecken liegt. Was ist der beste Schritt?",
      options: [
        "Kabel sofort anders legen oder das Gerät an einer besseren Position einstecken.",
        "Nichts tun, du weißt ja selbst, wo es liegt.",
        "Nur Kunden warnen, aber Kabel liegen lassen.",
        "Darüber springen, um zu zeigen, wie sportlich du bist."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Stolperfallen sollten sofort entschärft werden, nicht nur kommentiert.",
      feedbackWrong:
        "Nicht ganz. Nur warnen oder ignorieren reicht nicht – das Kabel muss sofort anders gelegt werden.",
      bonusStrikeOnCorrect: true
    },

    // 8
    {
      id: "j1_l1_a2_l6_q08",
      topic: "Kabelmanagement",
      gameType: "true_false_swipe",
      statement:
        "Kabelmanagement gehört zur Unfallverhütung im Salon.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Gut gesicherte Kabel reduzieren das Risiko für Stürze und Unfälle.",
      feedbackWrong:
        "Doch, das stimmt. Sauber verlegte Kabel sind ein wichtiger Teil der Unfallverhütung im Salon.",
      bonusStrikeOnCorrect: true
    },

    // 9
    {
      id: "j1_l1_a2_l6_q09",
      topic: "Sicherer Kabelverlauf",
      gameType: "single_choice_quiz",
      question:
        "Welche Aussage passt am besten zur sicheren Nutzung von Föhn- und Glätteisenkabeln?",
      options: [
        "Kabel so legen, dass sie möglichst nah am Arbeitsplatz bleiben und keine Wege blockieren.",
        "Kabel so legen, dass sie den ganzen Raum durchqueren.",
        "Kabel über Schultern von Kunden legen.",
        "Kabel auf Spannung quer durch den Raum ziehen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kabelwege sollten so kurz und unauffällig wie möglich sein.",
      feedbackWrong:
        "Nicht ganz. Kabel immer kurz und nahe am Arbeitsplatz halten – niemals quer durch den Raum oder über Personen.",
      bonusStrikeOnCorrect: true
    },

    // 10
    {
      id: "j1_l1_a2_l6_q10",
      topic: "Geräte anlassen",
      gameType: "true_false_swipe",
      statement:
        "Geräte, die gerade nicht gebraucht werden, können ruhig weiterlaufen – das spart Zeit.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Ausgeschaltete Geräte sparen Energie und sind sicherer – z. B. keine Hitzeentwicklung.",
      feedbackWrong:
        "Falsch. Nicht gebrauchte Geräte anlassen ist unsicher und verschwenderisch – ausschalten ist immer besser.",
      bonusStrikeOnCorrect: true
    },

    // 11
    {
      id: "j1_l1_a2_l6_q11",
      topic: "Sturz durch Kabel",
      gameType: "single_choice_quiz",
      question:
        "Was kann mit einem schlecht gelegten Kabel schlimmstenfalls passieren?",
      options: [
        "Jemand stolpert, stürzt und verletzt sich.",
        "Nichts – Kabel sind harmlos.",
        "Es wird nur ein bisschen lauter.",
        "Kunden werden automatisch schneller bedient."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Stürze durch Kabel können ernsthafte Verletzungen verursachen.",
      feedbackWrong:
        "Nicht ganz. Kabel sind alles andere als harmlos – ein Sturz durch ein Kabel kann zu ernsthaften Verletzungen führen.",
      bonusStrikeOnCorrect: true
    },

    // 12
    {
      id: "j1_l1_a2_l6_q12",
      topic: "Kabel nicht einklemmen",
      gameType: "true_false_swipe",
      statement:
        "Kabel sollten möglichst so liegen, dass sie nicht unter Stuhlrollen oder Türen eingeklemmt werden.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Eingeklemmte Kabel können beschädigt werden – das ist auch ein elektrisches Risiko.",
      feedbackWrong:
        "Doch, das stimmt. Eingeklemmte Kabel werden beschädigt und können dann ein elektrisches Risiko werden.",
      bonusStrikeOnCorrect: true
    },

    // 13
    {
      id: "j1_l1_a2_l6_q13",
      topic: "Kabel im Gang sichern",
      gameType: "single_choice_quiz",
      question:
        "Du siehst, dass ein Kabel direkt am Boden entlang durch einen häufig genutzten Gang führt. Was ist sinnvoll?",
      options: [
        "Kabel sichern oder anders legen, z. B. an die Wandseite.",
        "Nichts tun, die Kollegen kennen das ja.",
        "Nur ein Handtuch darüber legen.",
        "Einfach hoffen, dass niemand stolpert."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kabel sollten aus stark genutzten Laufwegen entfernt oder gesichert werden.",
      feedbackWrong:
        "Nicht ganz. Hoffen reicht nicht – Kabel im Gang müssen anders gelegt oder gesichert werden.",
      bonusStrikeOnCorrect: true
    },

    // 14
    {
      id: "j1_l1_a2_l6_q14",
      topic: "Optisch vs. sicherheitstechnisch",
      gameType: "true_false_swipe",
      statement:
        "Kabel, die quer durch den Salon hängen, sind vor allem ein optisches Problem.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Sie sind vor allem ein Sicherheitsproblem – sowohl für Kunden als auch das Team.",
      feedbackWrong:
        "Falsch. Kabel quer durch den Salon sind keine Optik-Frage, sondern ein ernstes Sicherheitsproblem.",
      bonusStrikeOnCorrect: true
    },

    // 15
    {
      id: "j1_l1_a2_l6_q15",
      topic: "Kabel gesamt",
      gameType: "single_choice_quiz",
      question:
        "Welche Kombination beschreibt einen sicheren Umgang mit Kabeln am besten?",
      options: [
        "Kabel kurz halten, aus Laufwegen heraushalten, Geräte bei Nichtgebrauch ausschalten.",
        "Kabel möglichst lang ziehen, mitten durch den Raum legen.",
        "Kabel um Tisch- und Stuhlbeine wickeln.",
        "Kabel über Kopfhöhe spannen."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Richtig! Kabelmanagement + ausgeschaltete Geräte = weniger Unfälle im Salon.",
      feedbackWrong:
        "Nicht ganz. Kurze Kabel + aus Laufwegen heraus + Geräte aus = sichere Praxis.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_6;
