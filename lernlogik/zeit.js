// lernlogik/zeit.js
// Einfache Zeit-Helfer fuer die spaetere Session-Planung.

export function heutigesDatumKey() {
  return new Date().toISOString().slice(0, 10);
}

export function tageSeit(startDatumKey, endDatumKey = heutigesDatumKey()) {
  if (!startDatumKey) return 0;

  const start = new Date(startDatumKey);
  const ende = new Date(endDatumKey);
  const differenzMs = ende - start;

  return Math.max(0, Math.round(differenzMs / (1000 * 60 * 60 * 24)));
}

export function lerntagZaehler(status) {
  return status?.lerntagNummer || 0;
}
