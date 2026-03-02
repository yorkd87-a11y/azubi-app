// content/jahr_1/Level_2/Abschnitt_1/lv2_A1_Lektion_1.js
// A1 Empfang & Service – Lektion 1: Empfangsstandard: erster Eindruck (3 Basics)

const LEKTION_1 = {
  id: "j1_l2_a1_l1",
  jahr: 1,
  level: 2,
  section: 1,
  title: "Empfangsstandard: erster Eindruck (3 Basics)",
  track: "kundenkontakt_pflege",
  energy: 15,
  bonusStrikeOnPerfect: true,

  microLearning: {
    hook: "Ein Premium-Salon gewinnt Vertrauen in Sekunden – und der Empfang entscheidet, ob der Gast sich sofort sicher und willkommen fühlt.",
    keyPoints: [
      "Basic 1: Präsenz – Blickkontakt, Lächeln, aufrechte Haltung, Stimme ruhig.",
      "Basic 2: Begrüßung mit Struktur – willkommen heißen, Name/Termin kurz klären.",
      "Basic 3: Orientierung & Service – Platz/Jacke/Getränk aktiv anbieten, nächste Schritte klar nennen."
    ],
    practiceTask:
      "Trainiere heute 10 Empfangsmomente: 1) Blickkontakt + Lächeln, 2) Begrüßung, 3) Mini-Orientierung („Ich begleite Sie kurz…“). Bitte eine Kollegin um 1 Satz Feedback: Was wirkte am professionellsten?",
    reflectionQuestion:
      "Welcher kleine Punkt macht bei dir den größten Unterschied: Blickkontakt, Stimme oder Tempo?"
  },

  questions: [
    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l1_q1",
        topic: "Empfang in der Praxis",
        situationTitle: "Gast betritt den Salon – du bist gerade beschäftigt",
        situationText: [
          "Ein Gast betritt den Salon. Du sortierst gerade Ware am Empfang.",
          "Der Gast schaut kurz suchend in den Raum. Es ist Premium-Atmosphäre, ruhig, hochwertig."
        ],
        options: [
          "Du machst erst fertig und begrüßt erst, wenn du frei bist.",
          "Du schaust kurz hoch, nickst und arbeitest weiter – wird schon verstanden.",
          "Du unterbrichst kurz, gehst in Präsenz, Blickkontakt + Lächeln, begrüßt freundlich und sagst klar, wie es weitergeht."
        ],
        correctIndex: 2,
        optionExplanations: [
          "Wirkt distanziert. Der Gast fühlt sich schnell „übersehen“ – kein Premium-Eindruck.",
          "Nicken ohne klare Ansprache lässt Unsicherheit entstehen.",
          "Premium-Standard: Präsenz + klare Führung. Der Gast fühlt sich sofort willkommen."
        ],
        feedbackCorrect:
          "Richtig. Warum: Präsenz und klare Ansprache bauen sofort Vertrauen auf. Typischer Fehler: „Ich bin gleich da“ ohne Blickkontakt/Struktur. Merksatz: Erst Menschen, dann Aufgaben.",
        feedbackWrong:
          "Nicht optimal. Warum: Im Premium-Salon zählt der erste Moment – Unsicherheit kostet Vertrauen. Typischer Fehler: weiterarbeiten ohne klare Führung. Merksatz: Erst begrüßen, dann organisieren."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l1_q2",
        topic: "3 Basics",
        question: "Welche Kombination trifft den Premium-Empfangsstandard am besten?",
        options: [
          "Schnell „Hi“, direkt fragen „Was willst du?“, dann weiterarbeiten.",
          "Blickkontakt + Lächeln, höfliche Begrüßung, kurzer Ablaufhinweis/Orientierung.",
          "Erst Kundenkarte suchen, dann später begrüßen, um „alles korrekt“ zu machen."
        ],
        correctIndex: 1,
        feedbackCorrect:
          "Richtig. Warum: Präsenz + Struktur + Orientierung = Sicherheit für den Gast. Typischer Fehler: Technik (Karte/PC) vor Beziehung. Merksatz: Erst Verbindung, dann Verwaltung.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium wirkt nicht durch Hektik oder Technik-Fokus, sondern durch Präsenz und Führung. Typischer Fehler: erst „System“, dann Mensch. Merksatz: Der Gast ist der Startpunkt."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l1_q3",
        topic: "Erster Eindruck",
        textBefore: "Der erste Eindruck entsteht in den ersten ",
        correctAnswer: "Sekunden",
        textAfter: " – deshalb zählt dein Auftreten sofort.",
        options: ["Sekunden", "Tagen", "Wochen", "Monaten"],
        feedbackCorrect:
          "Richtig. Warum: Der Gast bewertet sofort Sicherheit, Ruhe und Professionalität. Typischer Fehler: „Ich mache erst noch schnell…“. Merksatz: Sekunden entscheiden – immer.",
        feedbackWrong:
          "Nicht ganz. Warum: Der Empfang wirkt sofort, nicht später. Typischer Fehler: den Einstieg unterschätzen. Merksatz: Sekunden entscheiden – immer."
      }
    },

    {
      type: "category_sort",
      gameData: {
        id: "j1_l2_a1_l1_q4",
        topic: "Premium vs. No-Go",
        prompt: "Sortiere die Beispiele in „Premium-Standard“ oder „No-Go am Empfang“.",
        categories: [
          { id: "premium", label: "Premium-Standard" },
          { id: "nogo", label: "No-Go am Empfang" }
        ],
        items: [
          { text: "Blickkontakt + freundliches Lächeln", categoryId: "premium" },
          { text: "Am Handy tippen, während der Gast wartet", categoryId: "nogo" },
          { text: "Ruhige Stimme, klare kurze Sätze", categoryId: "premium" },
          { text: "Im Vorbeigehen „Setzen Sie sich irgendwo hin“", categoryId: "nogo" },
          { text: "Aktiv Orientierung geben („Ich begleite Sie kurz…“)", categoryId: "premium" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Premium bedeutet Führung, Ruhe und Respekt. Typischer Fehler: unklare, beiläufige Kommunikation. Merksatz: Premium ist klar, ruhig, zugewandt.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Alles, was unklar oder abgelenkt wirkt, senkt die Wertigkeit. Typischer Fehler: „Nebenbei“ kommunizieren. Merksatz: Premium ist klar, ruhig, zugewandt."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l1_q5",
        topic: "Wirkung verstehen",
        prompt: "Ordne dem Verhalten die passende Wirkung beim Gast zu.",
        pairs: [
          { left: "Blickkontakt + Lächeln", right: "Der Gast fühlt sich willkommen und sicher" },
          { left: "Klare Orientierung (Platz/Ablauf)", right: "Der Gast hat sofort Ruhe und Plan" },
          { left: "Aufgeräumter Empfang", right: "Der Salon wirkt hochwertig und professionell" },
          { left: "Hektik/Flüstern/Chaos", right: "Der Gast spürt Unsicherheit und Stress" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Wirkung ist Teil von Servicequalität. Typischer Fehler: nur „nett“ sein, ohne Struktur. Merksatz: Verhalten = Wirkung.",
        feedbackWrong:
          "Nicht ganz. Warum: Kleine Signale entscheiden über Premium-Wahrnehmung. Typischer Fehler: Struktur unterschätzen. Merksatz: Verhalten = Wirkung."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l1_q6",
        topic: "Empfangs-Mythen",
        statement: "Wenn du gerade beschäftigt bist, reicht ein Nicken ohne Worte – der Gast versteht das schon.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Ohne klare Ansprache entsteht Unsicherheit. Typischer Fehler: Begrüßung „aufschieben“. Merksatz: Sichtbar + ansprechbar = Premium.",
        feedbackWrong:
          "Nicht ganz. Warum: Nicken ersetzt keine professionelle Begrüßung. Typischer Fehler: stilles Signal statt Führung. Merksatz: Sichtbar + ansprechbar = Premium."
      }
    },

    {
      type: "sentence_builder",
      gameData: {
        id: "j1_l2_a1_l1_q7",
        topic: "Satzbausteine Premium",
        question: "Du bist kurz am Telefon. Was sagst du zum eintretenden Gast, damit es Premium bleibt?",
        prompt: "Baue aus den Wörtern einen passenden Satz.",
        answer: "Einen Moment bitte ich bin gleich persönlich für Sie da",
        extraWords: ["irgendwann", "egal", "später"],
        answerAudioUrl: "media/lektionen/Platzhalter_datei",
        feedbackCorrect:
          "Richtig. Warum: Du gibst sofort Sicherheit und kündigst persönliche Betreuung an. Typischer Fehler: ignorieren oder abwimmeln. Merksatz: Kurz anerkennen, klar führen.",
        feedbackWrong:
          "Noch nicht optimal. Warum: Der Satz muss Sicherheit geben und persönlich bleiben. Typischer Fehler: zu flapsig oder unklar. Merksatz: Kurz anerkennen, klar führen."
      }
    },

    {
      type: "multiple_choice",
      gameData: {
        id: "j1_l2_a1_l1_q8",
        topic: "Premium-Signale",
        question: "Welche Signale unterstützen einen Premium-Ersteindruck? (Mehrere richtig)",
        options: [
          "Aufrechte Haltung, ruhige Bewegungen",
          "Blick auf den Bildschirm, ohne den Gast anzuschauen",
          "Kurze, klare Begrüßung mit Service-Angebot",
          "Unklare Aussagen wie „Warten Sie mal kurz irgendwo“",
          "Sauberer, aufgeräumter Empfangsbereich"
        ],
        correctIndices: [0, 2, 4],
        feedbackCorrect:
          "Richtig. Warum: Premium ist Ruhe + Klarheit + Ordnung. Typischer Fehler: Unklarheit wirkt billig. Merksatz: Ruhig, klar, ordentlich.",
        feedbackPartially:
          "Teilweise richtig. Warum: Einige Optionen sind Premium, andere senken die Wertigkeit. Typischer Fehler: unklare Formulierungen. Merksatz: Ruhig, klar, ordentlich.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium braucht klare Führung und Präsenz. Typischer Fehler: Bildschirm/Chaos vor Gast. Merksatz: Ruhig, klar, ordentlich."
      }
    },

    {
      type: "timeline_order",
      gameData: {
        id: "j1_l2_a1_l1_q9",
        topic: "10-Sekunden-Empfang",
        prompt: "Setze die Schritte für einen Premium-Empfang in eine sinnvolle Reihenfolge.",
        steps: [
          "Blickkontakt herstellen und lächeln",
          "Freundlich begrüßen",
          "Name/Termin kurz abgleichen oder ankündigen, dass du gleich dafür da bist",
          "Orientierung geben (Platz/Jacke/Getränk) und nächsten Schritt nennen"
        ],
        feedbackCorrect:
          "Richtig. Warum: Erst Verbindung, dann Struktur, dann Service. Typischer Fehler: sofort in Verwaltung springen. Merksatz: Verbindung → Struktur → Service.",
        feedbackWrong:
          "Nicht ganz. Warum: Wenn Struktur vor Verbindung kommt, wirkt es kalt. Typischer Fehler: PC zuerst. Merksatz: Verbindung → Struktur → Service."
      }
    },

    {
      type: "gap_fill",
      gameData: {
        id: "j1_l2_a1_l1_q10",
        topic: "Klarheit am Empfang",
        textBefore: "Ein Premium-Empfang braucht ",
        correctAnswer: "Orientierung",
        textAfter: " – der Gast soll sofort wissen, was als Nächstes passiert.",
        options: ["Orientierung", "Rate-Spiele", "Hektik", "Zufall"],
        feedbackCorrect:
          "Richtig. Warum: Orientierung senkt Stress und erhöht Vertrauen. Typischer Fehler: vage Aussagen. Merksatz: Klar führen, Ruhe schaffen.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne Orientierung fühlt sich der Gast verloren. Typischer Fehler: „Setzen Sie sich irgendwo“. Merksatz: Klar führen, Ruhe schaffen."
      }
    },

    {
      type: "single_choice",
      gameData: {
        id: "j1_l2_a1_l1_q11",
        topic: "Distanz & Auftreten",
        question: "Wie wirkt deine Positionierung am Empfang am professionellsten?",
        options: [
          "Sehr nah und direkt am Gast, um „Nähe“ zu zeigen.",
          "So weit weg wie möglich, damit der Gast dich nicht stört.",
          "Angemessene Distanz (etwa eine Armlänge), offene Haltung, ruhig sprechen."
        ],
        correctIndex: 2,
        feedbackCorrect:
          "Richtig. Warum: Angemessene Distanz wirkt respektvoll und souverän. Typischer Fehler: zu nah oder zu distanziert. Merksatz: Nähe ohne Druck.",
        feedbackWrong:
          "Nicht ganz. Warum: Premium braucht respektvolle Distanz und Souveränität. Typischer Fehler: zu nah wirkt aufdringlich. Merksatz: Nähe ohne Druck."
      }
    },

    {
      type: "order_steps",
      gameData: {
        id: "j1_l2_a1_l1_q12",
        topic: "Empfangsablauf",
        prompt: "Bringe den Ablauf in die richtige Reihenfolge.",
        items: [
          "Gast wahrnehmen (Blickkontakt/Lächeln)",
          "Begrüßen und willkommen heißen",
          "Kurz klären: Termin/Name oder „ich bin gleich für Sie da“",
          "Service/Orientierung anbieten (Jacke/Platz/Getränk)"
        ],
        correctOrder: [
          "Gast wahrnehmen (Blickkontakt/Lächeln)",
          "Begrüßen und willkommen heißen",
          "Kurz klären: Termin/Name oder „ich bin gleich für Sie da“",
          "Service/Orientierung anbieten (Jacke/Platz/Getränk)"
        ],
        feedbackCorrect:
          "Richtig. Warum: So entsteht ein ruhiger, hochwertiger Flow. Typischer Fehler: erst Service anbieten, ohne den Gast wirklich zu begrüßen. Merksatz: Erst begrüßen, dann bedienen.",
        feedbackWrong:
          "Nicht ganz. Warum: Ohne klare Reihenfolge wirkt es hektisch. Typischer Fehler: Springen zwischen Aufgaben. Merksatz: Erst begrüßen, dann bedienen."
      }
    },

    {
      type: "scenario_choice",
      gameData: {
        id: "j1_l2_a1_l1_q13",
        topic: "Premium-Formulierung",
        situationTitle: "Gast wartet kurz – was sagst du?",
        situationText:
          "Du siehst, dass der Gast gerade angekommen ist, aber du musst noch 20 Sekunden etwas abschließen. Was ist die beste Premium-Ansage?",
        options: [
          "„Warten Sie kurz.“",
          "„Ich bin gleich da.“ (ohne Blickkontakt, während du weiterarbeitest)",
          "Blickkontakt + Lächeln: „Willkommen. Einen Moment bitte – ich bin gleich persönlich für Sie da.“"
        ],
        correctIndex: 2,
        optionExplanations: [
          "Zu knapp, ohne Wertschätzung. Wirkt eher wie Abfertigung.",
          "Ohne Blickkontakt fehlt Präsenz, der Satz verliert Wirkung.",
          "Anerkennung + Klarheit + persönliche Betreuung – genau Premium."
        ],
        feedbackCorrect:
          "Richtig. Warum: Du kombinierst Wertschätzung und klare Erwartung. Typischer Fehler: zu kurze Ansage ohne Wärme. Merksatz: Willkommen + Zeitrahmen + persönlich.",
        feedbackWrong:
          "Nicht optimal. Warum: Ohne Wertschätzung wirkt Wartezeit länger. Typischer Fehler: „Warten“ ohne Willkommen. Merksatz: Willkommen + Zeitrahmen + persönlich."
      }
    },

    {
      type: "true_false_swipe",
      gameData: {
        id: "j1_l2_a1_l1_q14",
        topic: "Premium-Haltung",
        statement: "Premium-Service bedeutet, möglichst schnell zu sein – auch wenn der Ton dabei kurz und hart ist.",
        isTrue: false,
        feedbackCorrect:
          "Richtig (Falsch-Aussage erkannt). Warum: Premium ist Qualität, Ruhe und Respekt – nicht Hektik. Typischer Fehler: Geschwindigkeit mit Professionalität verwechseln. Merksatz: Ruhig ist schneller.",
        feedbackWrong:
          "Nicht ganz. Warum: Ein harter Ton zerstört Premium-Wahrnehmung sofort. Typischer Fehler: Hektik als Leistung verkaufen. Merksatz: Ruhig ist schneller."
      }
    },

    {
      type: "match_pairs",
      gameData: {
        id: "j1_l2_a1_l1_q15",
        topic: "3 Basics festigen",
        prompt: "Ordne die 3 Basics dem passenden Beispiel zu.",
        pairs: [
          { left: "Präsenz", right: "Blickkontakt, Lächeln, offene Haltung" },
          { left: "Begrüßung mit Struktur", right: "Willkommen + kurzer Name/Termin-Check" },
          { left: "Orientierung & Service", right: "Platz anbieten, Jacke, Getränk, nächster Schritt" }
        ],
        feedbackCorrect:
          "Richtig. Warum: Diese 3 Basics sind die Basis für Premium-Wahrnehmung. Typischer Fehler: Nur „nett“ sein, ohne Führung. Merksatz: Präsenz – Struktur – Service.",
        feedbackWrong:
          "Noch nicht ganz. Warum: Premium entsteht durch diese klare Reihenfolge. Typischer Fehler: Service ohne Struktur. Merksatz: Präsenz – Struktur – Service."
      }
    }
  ]
};

export default LEKTION_1;