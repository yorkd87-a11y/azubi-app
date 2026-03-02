# Allgemeine Regeln

Stand: aktuell bekannte allgemeine Projektregeln.

## Produkt und Darstellung

- Die App ist eine Smartphone-/Tablet-App.
- Layouts und Medien immer zuerst fuer Hochkant denken.
- Videoformate fuer Promo-/Werbeinhalte grundsaetzlich hochkant planen.
- UI soll auf mobilen Geraeten sauber funktionieren und nicht von Desktop-Layouts ausgehen.
- Wenn ein Bereich nachtraeglich gezielt fuer Desktop bearbeitet wird, Mobile danach nicht mehr mitveraendern, ausser es wird ausdruecklich verlangt.

## Werbevideo / Promo-Screen

- Der Werbeblock soll visuell zum bestehenden Farbsystem der App passen.
- Der Promo-Screen soll reduziert und eigenstaendig sein, nicht wie das Carmen-Intro wirken.
- Sichtbare UI-Texte immer mit echten Umlauten schreiben: ä, ö, ü, Ä, Ö, Ü, ß.
- Carmen-Bild soll im Werbevideo-Screen nicht zwingend verwendet werden.
- Fokus im Promo-Screen liegt auf dem Video.
- Video soll einmal abgespielt werden, nicht endlos loopen.
- Steuerelemente fuer Promo-Video:
  - Weiter zum Lernpfad
  - Play/Pause
  - Erneut abspielen
- Spaeter ergaenzen:
  - Teilen-Button mit gaengigen Share-Optionen

## Verhalten fuer spaetere echte App

- In der spaeteren echten App soll Werbevideo mit Ton automatisch abgespielt werden, sofern die Plattform das erlaubt.
- Browser-Testverhalten ist nicht gleich App-Verhalten.
- Browserloesungen duerfen fuer Tests pragmatisch sein, produktive App-Loesungen muessen spaeter sauberer gebaut werden.
- Dynamische Medienlisten spaeter nicht auf offenes Ordner-Listing stuetzen.

## Arbeitsweise bei Aenderungen

- Vor groesseren Aenderungen zuerst die Projektstruktur lesen und relevante Dateien analysieren.
- Vor Aenderungen auf Wunsch immer ein vollstaendiges Backup mit Datum und Uhrzeit anlegen.
- Backups liegen ab jetzt standardmaessig ausserhalb des Projektordners unter:
  `C:\Users\York\Desktop\Azubi App Backup`
- Nicht fuer jede Kleinigkeit ein neues Backup anlegen.
- Standardregel:
  - hoechstens ein neues Backup pro 30 Minuten
  - zusaetzlich vor groesseren oder riskanteren Eingriffen
- Als groessere Eingriffe gelten vor allem:
  - Logikumbauten
  - Aenderungen an mehreren Dateien
  - Loeschen oder Verschieben von Dateien
  - groessere Refactors
- Nach Aenderungen im Backup-Ordner dokumentieren, was geaendert wurde.
- Fuer die Aenderungsnotiz pro Sicherungsrunde eine eigene Datei anlegen:
  `Aenderungen_diese_Runde_YYYY-MM-DD.md`
- Durchgefuehrte inhaltliche oder technische Aenderungen zusaetzlich weiter in `CHANGELOG.md` festhalten.
- Bestehende Struktur moeglichst respektieren und neue Bereiche sauber getrennt anlegen.
- Fuer neue UI-Bereiche getrennte Klassen verwenden, nicht bestehende Intro-Klassen mitbenutzen.

## Projektstruktur

- `gestaltung/basis` fuer globale Regeln.
- `gestaltung/bereiche` fuer screenspezifische oder bereichsspezifische Styles.
- Mischzustaende aus alter und neuer CSS-Struktur vermeiden oder spaeter gezielt bereinigen.

## Dokumentation

- Wichtige Architekturhinweise und Projektentscheidungen in `Infos GPT` festhalten.
- Regeln, To-dos und technische Sonderfaelle nicht nur im Chat lassen, sondern im Projekt dokumentieren.
# ALLGEMEINE REGELN

## App-Startlogik

- Das Carmen-Intro ist spaeter nur fuer neue Nutzer gedacht.
- Beim ersten echten Start eines neuen Nutzers darf das Carmen-Intro einmalig erscheinen und soll danach als gesehen gelten.
- Bestehende Nutzer sollen das Carmen-Intro nicht bei jedem App-Start sehen.
- Beim regulaeren App-Start kommt zuerst der eigentliche Tages-/Lernstart.
- Prioritaet beim Start:
  1. Wenn verpflichtende Wiederholungen oder geplante Tages-Sessions offen sind, kommt zuerst der Tagesbildschirm mit diesen Sessions.
  2. Wenn nichts Vorrangiges offen ist, landet der Nutzer direkt im normalen Lernpfad.
- Der Tagesbildschirm `Heute` ist fuer Pflichtinhalte reserviert:
  - faellige Wiederholungen
  - echte Daily Mission
- Keine neue Kernlektion im Pflichtbildschirm.
- Wenn dort nichts anliegt, direkt in den Lernpfad weiterleiten.
- Sichtbare Daily-Mission-Hinweise im restlichen UI nur anhand echter History anzeigen, nicht ueber Mock-Fallbacks.
