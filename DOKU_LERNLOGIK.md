# DOKU_LERNLOGIK

Stand: 2026-03-01

## Ziel in einfachen Worten

Die App soll spaeter nicht nur "naechste Lektion" zeigen, sondern jeden Lerntag sinnvoll fuellen.

Dafuer soll es pro Lerntag **2 Sessions** geben:

1. eine wichtige Haupt-Session
2. eine zweite kurze oder passende Zusatz-Session

So bleibt der Stoff laenger interessant und Azubis sind nicht zu schnell "durch".

## Begriffe

### Kernlektion

Eine Kernlektion ist normaler neuer Stoff aus dem bestehenden Content.

Das ist also:
- die naechste reguläre Lektion aus der vorhandenen Reihenfolge
- innerhalb der bestehenden Struktur:
  - Lehrjahr
  - Level
  - Abschnitt
  - Lektion / Step

### Wiederholung

Eine Wiederholung ist kein neuer Stoff, sondern ein bereits bearbeiteter Step, der spaeter nochmal dran kommt.

Ziel:
- Wissen festigen
- Dinge nicht nur einmal sehen
- Spaeter eine Art Spaced-Repetition-Logik nutzen

Geplantes Zielbild:
- nach Abschluss eines Steps entstehen automatisch Wiederholungen
- z. B. nach 3 Lerntagen und nach 10 Lerntagen

### Daily Mission

Eine Daily Mission ist eine kurze Zusatz-Session fuer den Tag.

Sie soll vorhandenes Material nutzen, ohne dass dafuer komplett neue Lektionen geschrieben werden muessen.

Moegliche Beispiele:
- Fragen zu Schwachstellen
- kurzer Checkpoint
- Praxisauftrag
- kleine Speed-Session

### 2 Sessions pro Tag

Spaeter soll die Tagesplanung so funktionieren:

- **Session 1**
  - bevorzugt eine faellige Wiederholung
  - sonst die naechste Kernlektion

- **Session 2**
  - bevorzugt eine Daily Mission
  - alternativ eine zweite sinnvolle Session nach festen Regeln

Wichtig:
- Die App soll nicht nur noch Wiederholungen zeigen
- Neuer Stoff muss weiterhin vorankommen

## Aktueller Stand im Projekt

Die App ist aktuell eine **Single-Page-App**.

Das bedeutet:
- eine zentrale HTML-Datei: `Index.html`
- Screen-Wechsel per JavaScript in `app.js`

Es gibt aktuell noch **keine** eigene Session-Planung mit 2 Sessions pro Tag.

Der jetzige Ablauf ist grob:
- Intro
- Level-/Lehrjahr-Auswahl
- Lernpfad
- Klick auf Lektion
- Start der Lektion
- Abschluss / Summary

## Zentrale Stelle fuer "naechste Lektion"

Die wichtigste aktuelle Startlogik fuer Lektionen liegt in:

### 1. Auswahl aus dem Lernpfad

Datei:
- `lesson_map.js`

Funktion:
- `initLessonMap(rootElement, handleSelectLesson)`

Wichtig:
- Dort wird auf Klicks auf `.map-node` gehoert
- Danach wird `handleSelectLesson(...)` aufgerufen

Relevante Stelle:
- `lesson_map.js`, Funktion `initLessonMap(...)`

### 2. Uebergabe in app.js

Datei:
- `app.js`

Funktion:
- `init()`

Wichtig:
- In `init()` wird `initLessonMap(...)` aufgerufen
- Dort wird festgelegt, was beim Klick auf einen Lernpfad-Knoten passieren soll

Aktuelles Verhalten:
- bei einfacher Nummer: `enterLesson(payload)`
- bei globalem Lernpfad mit `levelId`: `enterLessonByLevel(payload.levelId, payload.lessonIndex)`

Relevante Stelle:
- `app.js`, Funktion `init()`

### 3. Eigentliche Startfunktion fuer eine Lektion

Datei:
- `app.js`

Funktion:
- `enterLesson(lessonIndex)`

Diese Funktion ist aktuell die wichtigste Stelle fuer den echten Start einer Lektion.

Dort passiert unter anderem:
- aktueller Lesson-Index setzen
- Map ausblenden
- Header setzen
- `startLessonGame(...)` starten

Relevante Stelle:
- `app.js`, Funktion `enterLesson(lessonIndex)`

### 4. Start fuer Lektionen aus anderem Level-Kontext

Datei:
- `app.js`

Funktion:
- `enterLessonByLevel(levelId, lessonIndex)`

Diese Funktion setzt erst den passenden Level-Kontext und ruft danach:
- `enterLesson(lessonIndex)`

## Wichtig fuer den spaeteren Umbau

Wenn die neue Lernlogik gebaut wird, muss sie sehr wahrscheinlich **vor** `enterLesson(...)` eingreifen.

Das bedeutet:
- nicht direkt jede Lektion manuell starten
- zuerst entscheiden:
  - ist heute eine Kernlektion dran?
  - ist heute eine Wiederholung dran?
  - ist heute eine Daily Mission dran?

Danach kann die Lernlogik die bestehende Startfunktion weiterverwenden oder passend erweitern.

## Entscheidung zur Einbindung

Die App bleibt vorerst eine Single-Page-App.

Fuer die neue Lernlogik wurde deshalb keine neue HTML-Seite gebaut, sondern eine kleine zusaetzliche Startansicht `Heute` direkt in `Index.html` ergaenzt.

Einbindung:
- Carmen-Intro bleibt der erste Screen
- danach kommt die neue `Heute`-Ansicht mit genau 2 Session-Karten
- der normale Lernpfad bleibt weiterhin separat erreichbar

Warum so:
- minimale UI-Aenderung
- Logik kann getestet werden, ohne den bestehenden Lernpfad zu zerlegen
- Sessions koennen dieselben Startfunktionen wie der bisherige Lernpfad weiterverwenden

## Gewuenschter spaeterer Start-Flow

Der aktuelle Stand im Browser ist nur ein Zwischenstand fuer den Umbau.

Spaeter soll gelten:
- Carmen-Intro nur einmalig fuer neue Nutzer
- kein Carmen-Intro bei jedem normalen App-Start
- beim App-Start zuerst der eigentliche Tagesstart

Gewuenschte Reihenfolge:
1. Wenn der Nutzer verpflichtende Wiederholungen oder offene Tages-Sessions hat, kommt zuerst der Tagesbildschirm mit diesen Sessions.
2. Wenn nichts Dringendes offen ist, startet die App direkt im normalen Lernpfad.

Aktuelle Umsetzungsregel fuer die `Heute`-Ansicht:
- `Heute` zeigt nur echte Pflichtinhalte
- also nur faellige Wiederholungen und eine echte Daily Mission
- keine neue Kernlektion mehr in `Heute`
- wenn weder Wiederholung noch Daily Mission vorliegen, geht die App direkt in den Lernpfad

Aktuelle Umsetzungsregel fuer den App-Start:
- Neue Nutzer sehen zuerst das Carmen-Intro
- Nach dem ersten bewussten Start wird das Intro als gesehen gespeichert
- Bestehende Nutzer starten danach direkt in den regulaeren Tagesstart
- Der regulaere Tagesstart prueft zuerst `Heute`
- Wenn dort nichts anliegt, geht es direkt in den Lernpfad

Aktuelle Umsetzungsregel fuer Daily Missions im restlichen UI:
- Der Lernpfad-Badge arbeitet nur noch mit echter History
- Kein Mock-Fallback mehr fuer die sichtbare Daily-Mission-Verfuegbarkeit
