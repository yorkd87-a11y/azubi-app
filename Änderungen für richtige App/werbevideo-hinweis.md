## Werbevideos spaeter fuer die echte App umbauen

Die aktuelle Werbevideo-Loesung im Promo-Screen liest den Ordner `media/videos/advertisment/` per Verzeichnislisting aus.

Das ist fuer lokalen Test praktisch, aber fuer eine echte App nicht robust genug.

Spaeter umbauen auf eine dieser Varianten:

1. `manifest.json` mit allen verfuegbaren Werbevideos
2. Video-Liste aus Backend oder CMS
3. Build-Schritt, der die Video-Liste automatisch erzeugt

Ziel:
- Neue Videos sollen weiter automatisch mit auftauchen
- Die App darf nicht von einem offenen Ordner-Listing im Browser abhaengig sein
- Die Loesung soll produktionssicher sein

Spaeter ergaenzen:
- Teilen-Button im Werbevideo-Screen mit gaengigen Share-Optionen
