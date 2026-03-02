# App-Aufbau und Status

Stand: lokale Analyse des aktuellen Projekts.

## 1. Einstieg und Laufzeitfluss

- Einstiegspunkt ist `Index.html`.
- Es gibt keine Multi-Page-Navigation und keinen Router.
- Die App ist eine Single-Page-App mit Screen-Umschaltung per Show/Hide in `app.js`.

Aktueller Hauptfluss:

1. `Index.html` laedt CSS und `app.js`
2. `app.js` initialisiert Intro, Map, Energie und Spiele
3. Normalfluss:
   - Carmen-Intro
   - Level-/Lehrjahr-Auswahl
   - Lernpfad / Map
   - Lektion als Vollbild-Overlay
   - Lesson-Summary
   - Promo-Screen
   - zurueck zur Map

## 2. Wichtige JS-Dateien

- `app.js`
  - Hauptsteuerung der App
  - Screen-Wechsel
  - XP, Streak, Freischaltung
  - Start einer Lektion
  - Lesson-Summary und Promo-Screen

- `content/content_index.js`
  - zentraler Einstieg in alle Inhalte

- `lesson_map.js`
  - rendert den Lernpfad
  - sticky bar
  - Energieanzeige im Pfad
  - Klick auf Lektionen

- `level_select.js`
  - Lehrjahr- und Level-Auswahl

- `level_header.js`
  - Header innerhalb des Lernpfads

- `games/game_main.js`
  - startet Lektionen als Overlay
  - zaehlt Fragen, XP und Ergebnisse

- `games/game_index.js`
  - Zuordnung `gameType -> Renderer`

- `core/energy_system.js`
  - globales Energiesystem

- `core/progress_store.js`
  - Antwort-/Lektionsfortschritt fuer Map und Prozentanzeige

- `core/lesson_summary.js`
  - Abschluss-Overlay nach einer Lektion

- `core/question_history.js`
  - Historie fuer Daily Missions

- `core/daily_missions.js`
  - Daily-Mission-Logik

## 3. Wichtige CSS-Struktur

Neue Struktur:

- `gestaltung/basis/`
  - globale Basisregeln
- `gestaltung/bereiche/`
  - screen- oder bereichsspezifische Styles

Derzeit aktiv genutzt:

- `gestaltung/bereiche/carmen_intro/carmen_intro.css`
- `gestaltung/bereiche/lernpfad_header/lernpfad_header.css`
- `gestaltung/bereiche/level_uebersicht/level_uebersicht.css`
- `gestaltung/bereiche/spiele_und_fragenkarten/spiele_und_fragenkarten.css`
- `gestaltung/bereiche/werbebildschirme/werbebildschirme.css`

Altstruktur, weiterhin eingebunden:

- `styles.css`
- `lesson_map_styles.css`
- `level_header.css`
- `level_select.css`
- `carmen_intro.css`

Hinweis:
- Die App ist aktuell in einem Mischzustand aus neuer `gestaltung/`-Struktur und alten Root-CSS-Dateien.
- Genau das ist ein moeglicher Grund fuer Layout-Konflikte und schwer nachvollziehbare Ueberschreibungen.

## 4. Aktuell festgestellte Probleme

### 4.1 Fehlende, aber in `Index.html` verlinkte CSS-Dateien

Diese Links zeigen aktuell ins Leere:

- `gestaltung/basis/abstaende_und_groessen.css`
- `gestaltung/bereiche/anmeldung_und_account/anmeldung_und_account.css`
- `gestaltung/bereiche/auswahl_azubi_oder_stylist/auswahl_azubi_oder_stylist.css`
- `gestaltung/bereiche/rollen_und_rechte/rollen_und_rechte.css`
- `gestaltung/bereiche/magic_link/magic_link.css`
- `gestaltung/bereiche/rechnungen/rechnungen.css`
- `gestaltung/bereiche/intros_und_abschnitte/intros_und_abschnitte.css`
- `games/audio_choice/audio_choice.css`
- `games/dialog_quiz/dialog_quiz.css`

Das sollte spaeter bereinigt werden:
- entweder Dateien anlegen
- oder Links aus `Index.html` entfernen

### 4.2 Doppelte / alte CSS-Einbindungen

Aktuell parallel eingebunden:

- neue Carmen-Intro-Datei in `gestaltung/.../carmen_intro.css`
- alte Root-Datei `carmen_intro.css`
- neuer Lernpfad ist vorbereitet unter `gestaltung/bereiche/lernpfad/lernpfad.css`
- aktiv eingebunden ist aber weiterhin `lesson_map_styles.css`

Bewertung:
- `carmen_intro.css` im Root ist aktuell leer und kann sehr wahrscheinlich entfernt werden, sobald sicher ist, dass nichts extern darauf baut.
- `gestaltung/bereiche/lernpfad/lernpfad.css` existiert, ist aber in `Index.html` nicht eingebunden.

### 4.3 Testmodus im Code

In `app.js` gibt es derzeit aktive Testschalter:

- `SHOW_PROMO_BEFORE_INTRO_FOR_TEST = false`
- `loadLessonProgress()` ist auf "alle Lektionen freigeschaltet" gestellt

Vor echter Nutzung oder App-Build spaeter wieder produktiv umstellen.

## 5. Dateien oder Bereiche, die aktuell wahrscheinlich nicht genutzt werden

Hohe Wahrscheinlichkeit nicht genutzt:

- `carmen_intro.css` im Projekt-Root
  - leer
  - wird zwar geladen, bringt aktuell nichts

- `level_header.css`
  - laut Dateigroesse sehr klein / praktisch leer
  - wird geladen, scheint aber inhaltlich nicht aktiv zu sein

- `level_select.css`
  - laut Dateigroesse sehr klein / praktisch leer
  - wird geladen, scheint aber inhaltlich nicht aktiv zu sein

- `gestaltung/bereiche/lernpfad/lernpfad.css`
  - vorhanden, aber nicht in `Index.html` eingebunden

- `games/game_types.js`
  - liefert Typ-Liste, ist aber im aktuellen Laufzeitpfad nicht importiert

- `media/videos/lesson_perfect-1.mp4`
- `media/videos/lesson_try_again-1.mp4`
- `media/answer_audio/correct_chime-1.wav`
  - sehen nach Dubletten/Altversionen aus

- `content/jahr_1/Level_1/Abschnitt_1/Code Save Lektion 1.js.txt`
  - keine Laufzeitdatei
  - eher Notiz/Backup

- Ordner `Backup/`
  - alte interne Sicherungen aus frueheren Staenden
  - nicht Teil des aktiven Laufzeitpfads
  - neue Backups sollen stattdessen ausserhalb des Projekts liegen

- Ordner `Bilder fehler/`
  - Analyse-/Screenshot-Material, nicht Teil der App

### Bereiche, die vorbereitet wirken, aber noch nicht aktiv umgesetzt sind

- `gestaltung/bereiche/anmeldung_und_account/`
- `gestaltung/bereiche/auswahl_azubi_oder_stylist/`
- `gestaltung/bereiche/rollen_und_rechte/`
- `gestaltung/bereiche/magic_link/`
- `gestaltung/bereiche/rechnungen/`
- `gestaltung/bereiche/intros_und_abschnitte/`

Im Code sind Body-Klassen dafuer bereits vorgesehen, aber es fehlen die konkreten CSS-Dateien und Screens.

## 6. Warum der Promo-/Intro-Konflikt auftrat

Wahrscheinliche Ursachen:

- `body` startete vorher schon mit `bereich-carmen-intro`
- der Intro-Screen war initial nicht versteckt
- es gibt eine Mischung aus neuem Bereichssystem und alten Root-CSS-Dateien

Fuer den Testmodus wurde deshalb umgestellt:

- `body` startet ohne Bereichsklasse
- `intro-screen` startet mit `hidden`

## 7. Empfehlung fuer die naechsten Aufraeum-Schritte

1. Tote CSS-Links in `Index.html` entfernen oder die fehlenden Dateien bewusst anlegen.
2. Entscheiden, ob nur noch `gestaltung/` genutzt werden soll.
3. Alte Root-CSS-Dateien entfernen, sobald ihre Inhalte sauber migriert sind.
4. Testschalter in `app.js` zentral sammeln und spaeter vor Release deaktivieren.
5. Fuer Werbevideos spaeter auf Manifest oder Backend-Liste umstellen.
