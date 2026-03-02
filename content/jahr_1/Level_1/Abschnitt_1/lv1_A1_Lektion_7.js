// content/jahr_1/Level_1/Abschnitt_1/lektion_7.js
// Lektion 7 – Schweigepflicht & Diskretion

const LEKTION_7 = {
  id: "j1_l1_a1_l7",
  jahr: 1,
  level: 1,
  section: 1,
  title: "Schweigepflicht & Diskretion",
  track: "rechte_pflichten",
  energy: 18,

  questions: [
    // 1) SINGLE CHOICE – Bedeutung Schweigepflicht
    {
      id: "j1_l1_a1_l7_q1",
      topic: "Grundlagen",
      gameType: "single_choice_quiz",
      question: "Was bedeutet Schweigepflicht im Salon?",
      options: [
        "Du erzählst allen Freunden, was im Salon passiert.",
        "Du behältst Kundeninfos und interne Themen für dich.",
        "Du darfst alles posten, solange du keine Namen nennst."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Richtig! Schweigepflicht heißt, dass du sensible Infos für dich behältst.",
      feedbackWrong:
        "Nicht ganz. Schweigepflicht bedeutet, Kundendaten und interne Dinge vertraulich zu behandeln.",
      bonusStrikeOnCorrect: true
    },

    // 2) TRUE/FALSE – Diskretion
    {
      id: "j1_l1_a1_l7_q2",
      topic: "Diskretion",
      gameType: "true_false_swipe",
      statement:
        "Diskretion bedeutet, dass du sensible Themen nicht mit Personen außerhalb des Salons besprichst.",
      isTrue: true,
      feedbackCorrect:
        "Richtig! Was intern ist, bleibt intern.",
      feedbackWrong:
        "Doch, das stimmt. Diskretion heißt: interne Themen nicht nach außen tragen.",
      bonusStrikeOnCorrect: true
    },

    // 3) GAP FILL #1 – 1 Fachwort
    {
      id: "j1_l1_a1_l7_q3",
      topic: "Begriff Schweigepflicht",
      gameType: "gap_fill",
      textBefore: "Das Wort ",
      correctAnswer: "Schweigepflicht",
      textAfter:
        " beschreibt, dass du vertrauliche Informationen nicht weitergibst.",
      options: ["Schweigepflicht", "Tratsch", "Smalltalk", "Lärmschutz"],
      feedbackCorrect:
        "Richtig! Schweigepflicht ist das Fachwort für die Pflicht, vertrauliche Infos zu schützen.",
      feedbackWrong:
        "Nicht ganz. Gesucht war „Schweigepflicht” – deine Pflicht, nichts Vertrauliches auszuplaudern.",
      bonusStrikeOnCorrect: true
    },

    // 4) MULTIPLE CHOICE – Welche Infos sind Kundendaten?
    {
      id: "j1_l1_a1_l7_q4",
      topic: "Kundendaten",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Informationen gehören zu den persönlichen Kundendaten, die du besonders schützen musst?",
      options: [
        "Name und Telefonnummer der Kundin.",
        "Adresse und E-Mail-Adresse der Kundin.",
        "Lieblingsserien und Lieblingsessen der Kundin.",
        "Interne Umsätze und Teamgespräche aus dem Salon."
      ],
      correctIndices: [0, 1],
      feedbackCorrect:
        "Genau! Name, Telefonnummer, Adresse und E-Mail gehören zu den sensiblen Kundendaten.",
      feedbackWrong:
        "Nicht ganz. Persönliche Kontaktdaten sind sensibel – Serien oder Essen sind weniger kritisch.",
      bonusStrikeOnCorrect: true
    },

    // 5) SCENARIO CHOICE – Kundin vertraut sich an (Scheidung)
    {
      id: "j1_l1_a1_l7_q5",
      topic: "Klatsch vermeiden",
      gameType: "scenario_choice",
      situationTitle: "Vertrauliches Kundengespräch",
      situationText:
        "Eine Kundin erzählt dir im Vertrauen, dass sie sich scheiden lässt. Nach der Arbeit triffst du Freunde, die dieselbe Kundin kennen und neugierig nach ihr fragen.",
      options: [
        "Du behältst die Info für dich und erzählst nichts.",
        "Du erzählst es deinen Freunden, bittest sie aber, es nicht weiterzusagen.",
        "Du machst darüber Witze, nennst aber keinen Namen."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Das ist vertraulich und gehört nicht nach draußen.",
        "Trotzdem ein klarer Verstoß gegen die Schweigepflicht.",
        "Auch ohne Namen können Situationen erkannt werden – bleib diskret."
      ],
      feedbackCorrect:
        "Super! So zeigst du, dass du Schweigepflicht ernst nimmst.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option das Vertrauen der Kundin wirklich schützt.",
      bonusStrikeOnCorrect: true
    },

    // 6) GAP FILL #2 – 2 Fachwörter
    {
      id: "j1_l1_a1_l7_q6",
      topic: "Schweigepflicht & Diskretion",
      gameType: "gap_fill",
      textBefore: "Im Salon sind ",
      correctAnswer: "Schweigepflicht und Diskretion",
      textAfter:
        " besonders wichtig, um Vertrauen aufzubauen.",
      options: [
        "Schweigepflicht und Diskretion",
        "Smalltalk und Tratsch",
        "Werbung und Rabatte",
        "Lautstärke und Musik"
      ],
      feedbackCorrect:
        "Genau! Schweigepflicht und Diskretion sind zwei zentrale Fachbegriffe für vertrauliches Arbeiten.",
      feedbackWrong:
        "Nicht ganz. Gemeint waren „Schweigepflicht und Diskretion” – zwei wichtige Fachwörter.",
      bonusStrikeOnCorrect: true
    },

    // 7) TRUE/FALSE – Social Media Foto
    {
      id: "j1_l1_a1_l7_q7",
      topic: "Social Media",
      gameType: "true_false_swipe",
      statement:
        "Du darfst ohne Erlaubnis Fotos von Kunden posten, wenn sie gut aussehen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Ohne ausdrückliche Erlaubnis sind Fotos von Kunden tabu.",
      feedbackWrong:
        "Falsch. Du brauchst immer die Erlaubnis der Kundin, bevor du sie zeigst.",
      bonusStrikeOnCorrect: true
    },

    // 8) SINGLE CHOICE – Was gehört zu Kundendaten?
    {
      id: "j1_l1_a1_l7_q8",
      topic: "Kundendaten",
      gameType: "single_choice_quiz",
      question:
        "Was gehört zu Kundendaten, die du schützen musst?",
      options: [
        "Nur die Lieblingsfarbe der Kundin.",
        "Name, Telefonnummer, Adresse und Themen aus dem Gespräch.",
        "Nur das, was die Kundin im Internet postet."
      ],
      correctIndex: 1,
      feedbackCorrect:
        "Genau! Alle persönlichen Daten und Themen aus dem Gespräch sind vertraulich.",
      feedbackWrong:
        "Falsch. Persönliche Daten und Gespräche gehören nicht nach außen.",
      bonusStrikeOnCorrect: true
    },

    // 9) SCENARIO CHOICE – Umsätze im Freundeskreis
    {
      id: "j1_l1_a1_l7_q9",
      topic: "Umsätze",
      gameType: "scenario_choice",
      situationTitle: "Neugier auf Umsatzzahlen",
      situationText:
        "Du kennst die Tagesumsätze des Salons. Im Freundeskreis sind alle neugierig und wollen wissen, was ihr so verdient.",
      options: [
        "Du sagst, dass solche Zahlen intern sind und du dazu nichts sagen kannst.",
        "Du nennst ungefähre Zahlen, damit du interessant wirkst.",
        "Du postest eine Story: „Wir haben heute mega Umsatz gemacht!” mit Zahlen."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Umsätze sind intern und gehören nicht in den Freundeskreis.",
        "Das verletzt Vertrauen und ist nicht professionell.",
        "Zahlen und interne Infos solltest du nicht öffentlich posten."
      ],
      feedbackCorrect:
        "Super! So schützt du die internen Zahlen und das Vertrauen im Team.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option wirklich professionell mit Umsätzen umgeht.",
      bonusStrikeOnCorrect: true
    },

    // 10) GAP FILL #3 – 3 Fachwörter
    {
      id: "j1_l1_a1_l7_q10",
      topic: "Kundendaten konkret",
      gameType: "gap_fill",
      textBefore:
        "Zu den sensiblen Kundendaten gehören zum Beispiel ",
      correctAnswer: "Name, Adresse und Telefonnummer",
      textAfter: ".",
      options: [
        "Name, Adresse und Telefonnummer",
        "Lieblingsserie, Lieblingsessen und Musikgeschmack",
        "Haarschnitt, Haarfarbe und Stylingprodukt",
        "Öffnungszeiten, Preise und Teamfoto"
      ],
      feedbackCorrect:
        "Perfekt! Name, Adresse und Telefonnummer sind drei wichtige personenbezogene Daten.",
      feedbackWrong:
        "Nicht ganz. Gesucht war die Kombination „Name, Adresse und Telefonnummer” – drei sensible Fachbegriffe aus dem Datenschutz.",
      bonusStrikeOnCorrect: true
    },

    // 11) SENTENCE BUILDER – Warum ist Schweigepflicht wichtig?
    {
      id: "j1_l1_a1_l7_q11",
      topic: "Vertrauen",
      gameType: "sentence_builder",
      type: "sentence_builder",
      question: "Warum sind Schweigepflicht und Diskretion so wichtig?",
      prompt: "Baue aus den Wörtern einen sinnvollen Antwortsatz.",
      answer:
        "Schweigepflicht und Diskretion schaffen Vertrauen zwischen Kundin und Salon",
      extraWords: ["manchmal", "zufällig", "online", "heimlich"],
      answerAudioUrl: "media/lektionen/lv1_A1_l7_f11.wav",
      bonusStrikeOnCorrect: true
    },

    // 12) MULTIPLE CHOICE – Verhalten mit Diskretion
    {
      id: "j1_l1_a1_l7_q12",
      topic: "Profi-Haltung",
      gameType: "multiple_choice_quiz",
      question:
        "Welche Verhaltensweisen zeigen, dass du Schweigepflicht und Diskretion ernst nimmst?",
      options: [
        "Du hörst im Gespräch zu, trägst Persönliches aber nicht nach außen.",
        "Du sprichst über schwierige Fälle nur intern mit dem Team.",
        "Du erzählst vertrauliche Stories anonymisiert im Freundeskreis.",
        "Du fragst Kunden aktiv nach Erlaubnis, bevor du etwas postest."
      ],
      correctIndices: [0, 1, 3],
      feedbackCorrect:
        "Genau! Zuzuhören, intern zu klären und Erlaubnis einzuholen zeigt Profi-Haltung.",
      feedbackWrong:
        "Nicht ganz. Geschichten im Freundeskreis zu teilen ist keine Diskretion.",
      bonusStrikeOnCorrect: true
    },

    // 13) TRUE/FALSE – Teamkonflikte nach außen tragen
    {
      id: "j1_l1_a1_l7_q13",
      topic: "Team",
      gameType: "true_false_swipe",
      statement:
        "Streit im Team kannst du ruhig deinen Freunden erzählen – das gehört nicht zur Schweigepflicht.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Auch interne Teamthemen gehören nicht nach draußen.",
      feedbackWrong:
        "Falsch. Auch Teamkonflikte solltest du vertraulich behandeln.",
      bonusStrikeOnCorrect: true
    },

    // 14) SCENARIO CHOICE – Freundin fragt nach Teamstreit
    {
      id: "j1_l1_a1_l7_q14",
      topic: "Teamkonflikte",
      gameType: "scenario_choice",
      situationTitle: "Neugier auf Teamstreit",
      situationText:
        "Im Team gab es einen Streit. Eine Freundin fragt dich neugierig: „Na, was war denn da los bei euch im Salon?”",
      options: [
        "Du sagst, dass interne Themen nicht nach draußen gehören und wechselst das Thema.",
        "Du erzählst alle Details, weil deine Freundin es sowieso niemandem verrät.",
        "Du erzählst es anonymisiert, aber mit so vielen Details, dass jeder weiß, wer gemeint ist."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! So schützt du dein Team und bleibst professionell.",
        "Auch dann ist es ein Bruch der Schweigepflicht und des Vertrauens.",
        "Erkennbar bleibt erkennbar – das ist nicht diskret."
      ],
      feedbackCorrect:
        "Super! Du schützt dein Team und zeigst Loyalität.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option wirklich Vertrauen im Team stärkt.",
      bonusStrikeOnCorrect: true
    },

    // 15) SINGLE CHOICE – Profi in Sachen Schweigepflicht
    {
      id: "j1_l1_a1_l7_q15",
      topic: "Profi-Haltung",
      gameType: "single_choice_quiz",
      question:
        "Wie verhält sich ein Profi mit Blick auf Schweigepflicht?",
      options: [
        "Er oder sie hört zu, gibt aber nichts Persönliches nach außen weiter.",
        "Er oder sie erzählt spannende Geschichten weiter, wenn sie interessant sind.",
        "Er oder sie sammelt Infos über Kunden für private Chats."
      ],
      correctIndex: 0,
      feedbackCorrect:
        "Genau! Profis sind vertrauenswürdig und diskret.",
      feedbackWrong:
        "Falsch. Profi-Sein heißt: zuhören, aber nichts Vertrauliches nach außen weitergeben.",
      bonusStrikeOnCorrect: true
    },

    // 16) MULTIPLE CHOICE – Sicherer Verstoß gegen Schweigepflicht
    {
      id: "j1_l1_a1_l7_q16",
      topic: "Regelverstöße",
      gameType: "multiple_choice_quiz",
      question:
        "In welchen Situationen verstößt du sicher gegen Schweigepflicht oder Diskretion?",
      options: [
        "Du liest im Pausenraum laut vor, was eine Kundin dir erzählt hat.",
        "Du erzählst im Bus von den Problemen einer Kundin, ohne Namen zu nennen.",
        "Du speicherst Kundendaten im privaten Handy-Notizbuch.",
        "Du sprichst nur im Teamraum mit der Chefin über einen schwierigen Fall."
      ],
      correctIndices: [0, 1, 2],
      feedbackCorrect:
        "Richtig! Laut vorlesen, im Bus tratschen oder private Notizen sind klare Verstöße.",
      feedbackWrong:
        "Nicht ganz. Nur das Gespräch im Teamraum ist okay – die anderen Situationen sind heikel.",
      bonusStrikeOnCorrect: true
    },

    // 17) TRUE/FALSE – Kundenstories ohne Namen posten
    {
      id: "j1_l1_a1_l7_q17",
      topic: "Social Media",
      gameType: "true_false_swipe",
      statement:
        "Solange du keine Namen nennst, kannst du Kundenstories frei auf Social Media erzählen.",
      isTrue: false,
      feedbackCorrect:
        "Richtig! Auch ohne Namen können Menschen sich wiedererkennen – sei vorsichtig.",
      feedbackWrong:
        "Falsch. Auch anonymisierte Stories können Schweigepflicht verletzen.",
      bonusStrikeOnCorrect: true
    },

    // 18) SCENARIO CHOICE – Selfie im Salon
    {
      id: "j1_l1_a1_l7_q18",
      topic: "Social Media & Einverständnis",
      gameType: "scenario_choice",
      situationTitle: "Selfie nach neuer Haarfarbe",
      situationText:
        "Eine Kundin ist superhappy mit ihrer neuen Haarfarbe. Du möchtest gerne ein Vorher-Nachher-Bild posten.",
      options: [
        "Du fragst die Kundin nach ihrer Erlaubnis und dokumentierst die Einwilligung, bevor du etwas postest.",
        "Du machst heimlich ein Foto von hinten, weil man das Gesicht nicht sieht.",
        "Du postest direkt ein Foto mit ihr und markierst sie, wenn du ihren Account kennst."
      ],
      correctIndex: 0,
      optionExplanations: [
        "Richtig! Ohne Einverständnis keine Posts – so gehst du professionell mit Bildern um.",
        "Auch dann brauchst du eine Einwilligung – Haare können wiedererkannt werden.",
        "Ohne Einverständnis ist das ein klarer Verstoß gegen Datenschutz und Schweigepflicht."
      ],
      feedbackCorrect:
        "Super! So kombinierst du Social Media mit Respekt vor Datenschutz und Schweigepflicht.",
      feedbackWrong:
        "Nicht ganz. Überlege, welche Option wirklich rechtssicher und respektvoll ist.",
      bonusStrikeOnCorrect: true
    }
  ]
};

export default LEKTION_7;
