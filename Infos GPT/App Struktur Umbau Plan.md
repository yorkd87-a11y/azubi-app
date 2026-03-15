# App-Struktur Umbau Plan

## Ziel

`app.js` ist inzwischen zu groß und bündelt zu viele Verantwortlichkeiten.  
Der Umbau soll die Datei schrittweise in klar getrennte Module aufteilen, ohne die laufende Entwicklung an Intro, Abschnittsvideos und Freischaltlogik zu destabilisieren.

## Warum der Umbau nötig ist

Aktuell stecken in `app.js` gleichzeitig:

- App-Start und Initialisierung
- Screen-Navigation
- Carmen-Intro
- Today-/Session-Logik
- Lernpfad-Aufbau
- Lesson-Start und Lesson-Ende
- Promo-Flow
- Fortschritts- und Freischaltlogik
- Abschnitts- und Level-Hilfslogik

Das führt zu:

- höherem Risiko bei Änderungen
- schlechterer Wartbarkeit
- schwieriger Fehlersuche
- mehr Konflikten bei parallelen Umbauten

## Zielstruktur

### 1. `app.js`

Bleibt nur noch als Orchestrator:

- App initialisieren
- Module verbinden
- zentrale Callbacks verdrahten
- globalen Flow starten

### 2. `core/app_navigation.js`

Verantwortung:

- `showIntro`
- `showToday`
- `showMap`
- `showPromo`
- allgemeine Screen-Wechsel

### 3. `core/intro_flow.js`

Verantwortung:

- Carmen-Intro
- Intro-Video-Steuerung
- Chat-Animationen
- Audio-Hinweise im Intro
- Abschluss des Intro-Flows

### 4. `core/promo_flow.js`

Verantwortung:

- Promo-Video
- Countdown
- Replay
- Unmute / Ton-Hinweise

### 5. `core/today_flow.js`

Verantwortung:

- Today-Sessions
- Pflichtsessions
- Wiederholung
- Daily Mission Einstieg

### 6. `core/lesson_runtime.js`

Verantwortung:

- `enterLesson`
- `enterLessonByLevel`
- Lesson-Session-Laufzeit
- Lesson-Abschluss
- Übergang zu Promo / Map / Today

### 7. `core/level_progression.js`

Verantwortung:

- normale Freischaltungen
- Fortschrittslogik je Lesson
- später auch Abschnittsvideo-Gates
- Level-/Abschnitts-Übergänge

## Empfohlene Reihenfolge

Nicht alles auf einmal umbauen.

### Phase 1

Zuerst aus `app.js` auslagern:

- `intro_flow`
- `promo_flow`

Grund:

- relativ gut abgegrenzt
- wenig direkte Seiteneffekte auf Lesson-Logik
- bringt sofort Entlastung

### Phase 2

Danach auslagern:

- `today_flow`

Grund:

- fachlich eigenständig
- baut auf Session-/Mission-Logik auf
- reduziert `app.js` weiter deutlich

### Phase 3

Zuletzt auslagern:

- `lesson_runtime`
- `level_progression`

Grund:

- am stärksten mit App-Flow verknüpft
- höchste Gefahr für Regressionen
- sollte erst nach Stabilisierung der Abschnitts-Video-Logik passieren

## Zusammenhang mit den Abschnittsvideos

Wichtig:

Die kommende Abschnitts-Video-Logik soll vor dem großen Split zuerst stabil gebaut werden.

Geplanter Ablauf dort:

1. Abschnitts-Quiz abgeschlossen
2. Separator-Video wird freigeschaltet
3. Nutzer klickt bewusst auf das Video
4. erst danach wird der nächste Abschnitt freigeschaltet

Diese Gate-Logik gehört später fachlich in:

- `core/level_progression.js`

Darum den Strukturumbau erst danach weiterführen.

## Nächster sinnvoller Technikschritt nach den Abschnittsvideos

Wenn die Abschnittslogik fertig ist:

1. `intro_flow` aus `app.js` herauslösen
2. `promo_flow` aus `app.js` herauslösen

Das ist der empfohlene Einstieg in den Umbau.

## Hinweis

Dieses Dokument ist eine gemerkte Folgeaufgabe.
Erst weiterverfolgen, wenn:

- Abschnitts-Video-Gates umgesetzt sind
- die neue Freischaltlogik stabil läuft
