// lernlogik/speicher.js
// Einheitliche Speicher-Schnittstelle fuer die spaetere Lernlogik.
// Aktuell auf localStorage ausgelegt, aber bewusst als zentrale Stelle gebaut.

const STANDARD_SCHLUESSEL = "azubiAppLernlogikStatus";
const AKTUELLE_VERSION = 1;

export function initialerStatus() {
  return {
    version: AKTUELLE_VERSION,
    nutzerRolle: "azubi",
    erledigteSteps: {},
    geplanteWiederholungen: [],
    missionVerlauf: [],
    tagesZaehler: {
      datum: null,
      gestarteteSessions: 0,
      erledigteSessions: 0,
      geplanteSessions: [],
      gestarteteSessionIds: [],
      erledigteSessionIds: []
    },
    lerntagNummer: 0,
    letzterAktivTag: null
  };
}

function normalisiereStatus(status) {
  const basis = initialerStatus();
  const quelle = status && typeof status === "object" ? status : {};

  return {
    ...basis,
    ...quelle,
    version: AKTUELLE_VERSION,
    erledigteSteps: {
      ...basis.erledigteSteps,
      ...(quelle.erledigteSteps || {})
    },
    geplanteWiederholungen: Array.isArray(quelle.geplanteWiederholungen)
      ? quelle.geplanteWiederholungen
      : basis.geplanteWiederholungen,
    missionVerlauf: Array.isArray(quelle.missionVerlauf)
      ? quelle.missionVerlauf
      : basis.missionVerlauf,
    tagesZaehler: {
      ...basis.tagesZaehler,
      ...(quelle.tagesZaehler || {}),
      geplanteSessions: Array.isArray(quelle?.tagesZaehler?.geplanteSessions)
        ? quelle.tagesZaehler.geplanteSessions
        : basis.tagesZaehler.geplanteSessions,
      gestarteteSessionIds: Array.isArray(quelle?.tagesZaehler?.gestarteteSessionIds)
        ? quelle.tagesZaehler.gestarteteSessionIds
        : basis.tagesZaehler.gestarteteSessionIds,
      erledigteSessionIds: Array.isArray(quelle?.tagesZaehler?.erledigteSessionIds)
        ? quelle.tagesZaehler.erledigteSessionIds
        : basis.tagesZaehler.erledigteSessionIds
    }
  };
}

export function laden(schluessel = STANDARD_SCHLUESSEL) {
  const rohdaten = localStorage.getItem(schluessel);
  if (!rohdaten) return initialerStatus();

  try {
    const status = JSON.parse(rohdaten);
    return normalisiereStatus(status);
  } catch (fehler) {
    console.warn("Lernlogik-Status konnte nicht gelesen werden:", fehler);
    return initialerStatus();
  }
}

export function speichern(daten, schluessel = STANDARD_SCHLUESSEL) {
  const status = normalisiereStatus(daten);
  localStorage.setItem(schluessel, JSON.stringify(status));
  return status;
}

export function reset(schluessel = STANDARD_SCHLUESSEL) {
  localStorage.removeItem(schluessel);
  return initialerStatus();
}

export { STANDARD_SCHLUESSEL, AKTUELLE_VERSION };
