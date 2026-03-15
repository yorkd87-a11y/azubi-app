# Abschnittsvideo Gate Vorbereitung

## Status

Vorbereitende Dateien wurden angelegt, aber noch **nirgends verdrahtet**.
Damit gibt es keinen Konflikt mit laufenden Intro-Änderungen.

## Neu angelegte Dateien

### `core/section_progress.js`

Speichert pro Abschnitt:

- `quizCompleted`
- `videoUnlocked`
- `videoWatched`
- `completed`

Enthält Funktionen wie:

- `getSectionProgress(sectionId)`
- `markSectionQuizCompleted(sectionId)`
- `unlockSectionVideo(sectionId)`
- `markSectionVideoWatched(sectionId)`
- `isSectionVideoUnlocked(sectionId)`
- `isSectionVideoWatched(sectionId)`

### `core/section_video_gate.js`

Liefert aus Content + Fortschritt einen UI-/Logikzustand für Separator-Videos.

Wichtige Funktionen:

- `getSectionVideoGate(section)`
- `getSectionSeparatorUiState(section, options)`
- `canUnlockNextSectionAfterVideo(section)`
- `shouldHoldSectionBoundary(section)`

### `core/section_video_flow.js`

Bereitet den eigentlichen Ablauf pro Abschnitt vor.

Enthält aktuell:

- `getSectionVideoFlowState(level, sectionId)`
- `completeSectionQuiz(level, sectionId)`
- `forceUnlockSectionVideo(level, sectionId)`
- `completeSectionVideo(level, sectionId)`
- `canAccessSectionLessons(level, sectionId)`
- `getJustUnlockedSectionVideoId(level)`

## Gedachte Zustände

- `hidden`
- `locked`
- `available`
- `done`

## Geplante nächste Verdrahtung

1. Abschnitts-Quizabschluss setzt:
   - `quizCompleted = true`
   - `videoUnlocked = true`

2. Separator rendert danach animierten CTA

3. Klick auf Separator-Video setzt nach erfolgreichem Abschluss:
   - `videoWatched = true`
   - `completed = true`

4. Erst dann wird der nächste Abschnitt freigeschaltet

## Wichtig

Diese Vorbereitung ist absichtlich isoliert.
Sie greift noch nicht in:

- `app.js`
- `lesson_map.js`
- aktuelle Intro-Logik

Dadurch kann parallel weiter am Carmen-Intro gearbeitet werden.
