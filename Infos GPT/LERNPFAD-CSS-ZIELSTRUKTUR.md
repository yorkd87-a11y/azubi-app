# Lernpfad CSS Zielstruktur

## Ziel

Der Lernpfad soll nicht mehr in einer großen CSS-Datei gepflegt werden. Stattdessen wird er in kleine, klar abgegrenzte CSS-Bausteine zerlegt.

Vorteile:
- Überschreibungen sind schneller auffindbar
- Bausteine wie Schloss, Nodes oder Bottom-Navigation lassen sich separat pflegen
- Mobile-Anpassungen pro Baustein sind klarer
- neue Effekte oder Tests können gezielt eingebaut werden

## Zielordner

`gestaltung/bereiche/lernpfad/css/`

## Zielaufteilung

`main.css`
- lädt die Teilbereiche in sinnvoller Reihenfolge
- nur Imports, keine eigenen Komponentenregeln

`tokens.css`
- Lernpfad-spezifische Farben
- Schatten
- Abstände
- wiederkehrende Größen

`layout.css`
- `map-screen`
- `map-root`
- `map-card`
- Grundabstände

`topbar.css`
- obere Reihe
- Zurück-Button
- Energiepositionierung oben

`header.css`
- Level-Header-Bereich im Lernpfad
- Meta-Zeile
- Progress-Bereich, falls später direkt dort weitergeführt

`sticky_bar.css`
- Sticky-Bar
- Schrittanzeige
- nächste Lektion

`separators.css`
- Lehrjahr-Trenner
- Abschnittsüberschriften
- Separator-Linien und Anker

`nodes.css`
- Grundaufbau von Nodes
- Kreis
- Zahl
- Label
- Scoreanzeige

`node_states.css`
- current
- completed
- partial
- perfect
- locked
- unlock reveal

`node_lock.css`
- Schlossgeometrie
- Schlossfarben
- Unlock-Animation
- mobile Mini-Schloss

`connectors.css`
- gestrichelte Pfadlinien
- Connector-Zustände

`bottom_nav.css`
- Bottom-Navigation
- aktive/inaktive Zustände

`energy.css`
- fliegendes Energie-Badge im Lernpfad
- Energiechips auf der Karte

`daily_mission.css`
- Daily-Mission-Badge im Lernpfad

`responsive.css`
- nur übergreifende Media-Queries
- nur Regeln, die nicht sinnvoll in einem Einzelbaustein liegen

## Reihenfolge in main.css

1. `tokens.css`
2. `layout.css`
3. `topbar.css`
4. `header.css`
5. `sticky_bar.css`
6. `separators.css`
7. `nodes.css`
8. `node_states.css`
9. `node_lock.css`
10. `connectors.css`
11. `bottom_nav.css`
12. `energy.css`
13. `daily_mission.css`
14. `responsive.css`

## Umbau-Regel

Der Umbau soll schrittweise erfolgen.

Pro Schritt:
1. Ein Bereich wird aus `lesson_map_styles.css` herausgelöst
2. In die neue Datei übertragen
3. Im laufenden UI prüfen
4. Erst dann den nächsten Bereich verschieben

## Empfohlene Reihenfolge für den echten Umbau

1. `bottom_nav.css`
2. `node_lock.css`
3. `nodes.css`
4. `node_states.css`
5. `connectors.css`
6. `separators.css`
7. `sticky_bar.css`
8. `energy.css`
9. `topbar.css`
10. Rest in `layout.css` und `responsive.css`

## Wichtig

Bis zum echten Umbau bleibt `lesson_map_styles.css` die aktive Produktivdatei.
Die neue Struktur ist zunächst nur die saubere Zielbasis.
