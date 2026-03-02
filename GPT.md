# CLAUDE.md – Friseur Azubi Trainer

Dieses Dokument beschreibt Projektstruktur, bisherige Änderungen und offene Aufgaben für Claude Code.

---

## Projektübersicht

**Name:** Friseur Azubi Trainer
**Typ:** Single-Page Web-App (Vanilla JS, ES6 Module, kein Framework)
**Ziel:** Microlearning-App für Friseur-Azubis (Gamification, Energie-System, Lektion-Map)

---

## Aktueller Projektaufbau

```
Azubi App mit Claude/
├─ index.html                   → Einziges HTML-Grundgerüst (SPA)
│                                 viewport-fit=cover gesetzt (für iPhone Safe Area)
├─ app.js                       → Haupt-App-Logik (Navigation, Screens, XP, Streak)
├─ styles.css                   → Globales Design
├─ lesson_map.js / .css         → Lektion-Map (Levels + Fortschritt)
├─ level_header.js / .css       → Header-Komponente
├─ level_select.js / .css       → Level-Auswahl-Screen
├─ carmen_intro.css             → Carmen-Intro-Screen-Styles (mobile-optimiert)
│
├─ games/                       → Spiele-Engine
│   ├─ game_main.js             → Lektion starten, Fragen iterieren, Callbacks
│   ├─ game_main.css            → Styles für Overlay, Karten, Popup, Animationen
│   ├─ game_overlay.js          → DOM-Aufbau des Vollbild-Overlays
│   ├─ game_utils.js            → extractIsCorrect, animateResult, showCorrectFeedbackPopup
│   │                             inkl. parseFeedbackText + buildFeedbackHtml (Block-Parser)
│   ├─ game_index.js            → Registry: gameType → Renderer-Funktion
│   ├─ game_types.js            → Konstanten für gameType-Strings
│   ├─ game_bonus_popup.js      → Energie-Bonus-Popup
│   ├─ single_choice_quiz/      → Single-Choice-Fragen
│   ├─ multiple_choice_quiz/    → Multiple-Choice-Fragen (mehrere richtige Antworten)
│   ├─ true_false_swipe/        → Wahr/Falsch mit Swipe-Geste
│   ├─ flashcards/              → Lernkarten (flip)
│   ├─ gap_fill/                → Lückentexte
│   ├─ match_pairs/             → Zuordnen / Paare finden
│   ├─ order_steps/             → Reihenfolge sortieren
│   ├─ scenario_choice/         → Szenario-Entscheidungen
│   ├─ dialog_quiz/             → Dialog-Fragen
│   ├─ audio_choice/            → Audio + Antwortoptionen
│   ├─ category_sort/           → Kategorien sortieren
│   ├─ quickfire_streak/        → ⚠️ ACHTUNG: Parameter-Reihenfolge falsch (gameData, containerEl)
│   │                             statt (rootEl, gameData, onComplete) – noch nicht gefixt
│   ├─ sentence_builder/        → Sätze zusammenbauen
│   └─ timeline_order/          → Zeitleiste sortieren
│
├─ core/                        → Kern-Systeme
│   ├─ energy_system.js         → Energie (max 50, kann über 50 per Bonus)
│   ├─ progress_store.js        → Lektionsfortschritt (Prozent für Map)
│   ├─ question_history.js      → Fragen-History (für Daily Missions)
│   ├─ lesson_summary.js / .css → Lektion-Abschluss-Screen
│   └─ daily_missions.js / .css → Tägliche Missionen
│
├─ content/
│   └─ jahr_1/
│       ├─ jahr_1_index.js      → Level 1–4 registriert
│       ├─ Level_1/             → 4 Abschnitte × 8 Lektionen = 32
│       │   ├─ Abschnitt_1/    → INHALT vorhanden (8 Lektionen)
│       │   ├─ Abschnitt_2/    → INHALT vorhanden (8 Lektionen)
│       │   ├─ Abschnitt_3/    → Lektion 1 fertig (Hygiene/Infektionskette), L2–8 Platzhalter
│       │   └─ Abschnitt_4/    → Platzhalter (8 Lektionen)
│       ├─ Level_2/             → 5 Abschnitte × 8 Lektionen = 40 (alle Platzhalter)
│       ├─ Level_3/             → 5 Abschnitte × 8 Lektionen = 40 (alle Platzhalter)
│       └─ Level_4/             → 5 Abschnitte × 8 Lektionen = 40 (alle Platzhalter)
│                                 Gesamt Jahr 1: 152 Lektionen
│
├─ media/
│   ├─ answer_audio/            → correct_chime.wav, wrong_chime.wav
│   ├─ carmen_intro.png         → Carmen-Bild
│   ├─ carmen_intro_audio.wav   → Carmen-Intro-Audio
│   ├─ lektionen/
│   └─ videos/
│
└─ Übersicht für Claude/        → Projektdokumentation für Claude
    ├─ Aufgaben für Claude.txt  → Aufgabenliste (erledigte löschen)
    ├─ Aufbau und Struktur der App.txt
    ├─ Read Me claude.txt       → Microlearning-Standard (ab Abschnitt A3)
    └─ Nächstes Fragenpaket 1   → Vorlage für neue Lektionen (Datei ohne Endung)
```

---

## Architektur-Highlights

### Spiele-Renderer-Pattern
Jedes Spiel exportiert `renderXxx(rootEl, gameData, onComplete)`.
`onComplete(true|false|null)` meldet das Ergebnis zurück an `game_main.js`.

### wrappedOnComplete (game_main.js)
Interceptor zwischen Renderer und `handleQuestionFinished`:
- Bei **richtiger Antwort**: zeigt erst `showCorrectFeedbackPopup`, dann `handleQuestionFinished`
- Bei **falscher Antwort**: direkt `handleQuestionFinished`

### Richtig-Antwort-Popup (game_utils.js)
Automatischer Text-Parser erkennt Marker im feedbackCorrect-Text:
- `Typischer Fehler:` → amber Box mit Label
- `Merksatz:` → dunkelblaue Box, goldene Schrift, fett
- Blöcke fliegen nacheinander ein (gestaffelt per CSS animation-delay)
- Countdown startet erst nach letztem Block (3 Sekunden)

**Format-Standard für ChatGPT / Content-Autoren:**
```
"Erklärung. Typischer Fehler: Fehlertext. Merksatz: Merksatztext."
```

### Energie-System
- Max-Wert = 50, aber Bonusenergie (Daily Mission, Streak) kann die 50 überschreiten
- Anzeige z. B. „73 ⚡" (absolut, nicht „73/50")
- Regeneration läuft per Timer

### Content-Schema (ab Abschnitt 3 – Microlearning-Standard)
Jede Lektion hat 15 Fragen: 3 Warm-up + 10 Core + 2 Transfer.
Optional: `microLearning`-Objekt mit `hook`, `keyPoints`, `practiceTask`, `reflectionQuestion`.
Dateipfad-Muster: `content/jahr_1/Level_X/Abschnitt_Y/lvX_AY_Lektion_Z.js`

---

## Alle vorgenommenen Änderungen

### ✅ Mobile Lernpfad & Map UX
**Dateien:** lesson_map_styles.css, lesson_map.js, level_header.js, level_header.css, pp.js
- Header vereinfacht (Status/Resume), Sticky-Step-Bar beim Scrollen
- Energie-Badge wandert im Pfad und startet oben rechts
- Map-Abstaende auf Mobile vergroessert, Textumbruch verbessert
- Abschluss-CTA fuer Level-Fortsetzung (Level 2)
### ? Mobile-Optimierung Styles (Priorit�t)
**Dateien:** `styles.css`, `lesson_map_styles.css`, `level_select.css`, `level_header.css`, `games/game_main.css`, `core/daily_missions.css`, `core/lesson_summary.css`
- Mobile: ~20 % gr��ere Typo/Abst�nde (global + Screens)
- Lernpfad/Level-�bersicht auf Desktop deutlich gr��er
- Game-Overlay: mobile Abst�nde und Button-Gr��en verbessert
- Daily Missions + Lesson Summary: mobile Layouts vergr��ert

### ✅ Energie über 50 (Aufgabe 1)
**Datei:** `core/energy_system.js`
- `applyRegeneration`: Bug gefixt – Energie über 50 wurde auf MAX_ENERGY zurückgesetzt
- `grantEnergyBonus`: `Math.min(MAX_ENERGY, ...)` entfernt, Bonus darf über 50 steigen

### ✅ Test-Modus: Alle Level freigeschaltet
**Datei:** `app.js` → `loadLessonProgress()`
```js
// TEST-MODUS: Alle Lektionen freigeschaltet
maxUnlockedLessonIndex = currentLessons.length - 1;
// Produktiv-Code darunter auskommentiert mit Marker
```
**Vor Release unbedingt zurückstellen!**

### ✅ Richtig-Antwort-Popup (Aufgabe 2)
- `games/game_utils.js` – `showCorrectFeedbackPopup()` + `parseFeedbackText()` + `buildFeedbackHtml()`
- `games/game_main.js` – `wrappedOnComplete` Interceptor
- `games/game_main.css` – Popup-Styles (max-width 820px Desktop), Block-Styles, Einflug-Animationen
- `games/single_choice_quiz/single_choice_quiz.js` – Bei richtig: nextBtn ausblenden, auto-onComplete nach 550ms
- `games/multiple_choice_quiz/multiple_choice_quiz.js` – Gleiche Logik in `evaluate()`
- `games/true_false_swipe/true_false_swipe.js` – Gleiche Logik in `handleAnswer()`

### ✅ Popup-Textblöcke mit Animationen
**Dateien:** `games/game_utils.js`, `games/game_main.css`
- 3 Blöcke (Erklärung / Typischer Fehler / Merksatz) fliegen gestaffelt ein
- Countdown startet erst nach letztem Block (lockSeconds = 3)
- Button zeigt `···` während Animationen laufen

### ✅ Bug-Fix – Smart Quotes
**Problem:** Typografische Anführungszeichen (U+201C/U+201D) → `SyntaxError` → App kaputt
**Fix:** Node.js replace, alle Dateien geprüft
**Regel:** Niemals Smart Quotes in JS-Dateien – nur `"` (U+0022)

### ✅ Abschnitt 3, Lektion 1 erstellt (Aufgabe 4 teilweise)
**Datei:** `content/jahr_1/Level_1/Abschnitt_3/lv1_A3_Lektion_1.js`
- 15 Fragen, Thema: Hygiene / Infektionskette im Salon
- Spieltypen: single_choice, true_false, multiple_choice, match_pairs, scenario_choice, gap_fill, order_steps, category_sort
- Alle Texte mit vollständigen Umlauten (ä, ö, ü, ß)

### ✅ Ordnerstruktur Jahr 1 komplett
- Level 1: Abschnitt 1–4 (je 8 Lektionen) – A1+A2 mit Inhalt, A3+A4 Platzhalter
- Level 2–4: je 5 Abschnitte × 8 Lektionen = Platzhalter
- `jahr_1_index.js` registriert Level 1–4
- Gesamt: 152 Lektionen

### ✅ Carmen-Intro Mobile-Optimierung
**Datei:** `carmen_intro.css`
- `@media (max-width: 768px)`: Reihenfolge Bubble → Bild → Button (per CSS `order`)
- Carmen-Bild: 320×480px (`max-width: 90vw` als Sicherheit)
- Start-Button sticky am unteren Rand (`flex-shrink: 0`)
- iPhone Safe Area: `padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px))`

**Datei:** `index.html`
- `viewport-fit=cover` im Meta-Viewport-Tag ergänzt (Pflicht für `env(safe-area-inset-bottom)`)

---

## Offene Aufgaben

| # | Aufgabe | Status |
|---|---------|--------|
| 3 | Fragenpool-Ablauf erklären & prüfen | OFFEN |
| 4 | Weitere Lektionen aus Fragenpaket einbauen (A3 L2–L8 etc.) | TEILWEISE |
| 5 | Carmen-Intro nach Zusammenfassungsquiz implementieren | OFFEN |
| – | `quickfire_streak` Renderer: Parameter-Reihenfolge korrigieren | OFFEN |

---

## Wichtige Regeln für Claude

- **Immer zuerst lesen** bevor Dateien geändert werden
- **Keine Smart Quotes** (`"` `"`) in JS-Dateien – nur `"` und `'`
- **Umlaute sind ok** (ä, ö, ü, ß) – nur Smart Quotes sind gefährlich
- **Keine automatischen Commits** – User entscheidet
- **Test-Modus-Marker** in `app.js` nicht löschen, nur auskommentieren
- **Kein `Math.min(MAX_ENERGY, ...)`** in `energy_system.js`
- **Feedback-Format** für neue Lektionen: `"Erklärung. Typischer Fehler: X. Merksatz: Y."`
- **`quickfire_streak` nicht verwenden** bis Parameter-Reihenfolge gefixt ist
- Nach jeder Session: dieses `CLAUDE.md` und `Aufbau und Struktur der App.txt` aktualisieren


