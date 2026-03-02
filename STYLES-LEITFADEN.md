# STYLES-LEITFADEN

## Schritt 1 – Analyse (ohne Änderungen)

### HTML-Dateien im Projekt
- `Index.html`

### Einordnung der Projektstruktur
- Es gibt nur eine zentrale HTML-Seite (`Index.html`).
- Die App wechselt Screens per JavaScript, indem Elemente ein- und ausgeblendet werden.
- Hinweis aus `app.js`: `intro-screen`, `level-select-screen`, `map-screen` werden per `classList.add("hidden")` / `classList.remove("hidden")` umgeschaltet.

### Router-/Navigation-Hinweise in JS
- Keine Treffer für `window.location`, `hash`, `history.pushState`, `history.replaceState`, `navigate`, `router` gefunden.
- Die Navigation erfolgt offenbar rein per DOM-Show/Hide.

## Regel fuer die Struktur
Alles, was ueberall gleich ist, gehoert in `gestaltung/basis`.
Alles, was nur zu einem Screen gehoert, gehoert in `gestaltung/bereiche`.

## Beispiele aus diesem Projekt
- Standard-Button, Farbvariablen und Layout-Grundregeln -> `gestaltung/basis`.
- Lernpfad-Header und Level-Uebersicht -> `gestaltung/bereiche`.
- Carmen-Intro sowie Spiele/Fragenkarten -> `gestaltung/bereiche`.
