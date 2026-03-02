// lernlogik/fortschritt.js
// Hilfen fuer Abschluss, Wiederholungen und Fortschritt der Lernlogik.

import { heutigesDatumKey } from "./zeit.js";
import { initialerStatus } from "./speicher.js";

const WIEDERHOLUNGS_ABSTAENDE = [3, 10];

function naechsteWiederholungsId(stepId, stufe, lerntagNummer) {
  return `${stepId}_wiederholung_${stufe}_${lerntagNummer}`;
}

export function markiereLerntagStart(status, datumKey = heutigesDatumKey()) {
  const basisStatus = status && typeof status === "object" ? status : initialerStatus();

  if (basisStatus.letzterAktivTag === datumKey) {
    return {
      ...basisStatus,
      tagesZaehler: {
        ...basisStatus.tagesZaehler,
        datum: datumKey
      }
    };
  }

  return {
    ...basisStatus,
    lerntagNummer: (basisStatus.lerntagNummer || 0) + 1,
    letzterAktivTag: datumKey,
    tagesZaehler: {
      ...basisStatus.tagesZaehler,
      datum: datumKey
    }
  };
}

export function erzeugeWiederholungenFuerStep(status, stepId, erstelltAm = heutigesDatumKey()) {
  const basisStatus = status && typeof status === "object" ? status : initialerStatus();
  const aktuelleLerntagNummer = basisStatus.lerntagNummer || 0;

  const neueWiederholungen = WIEDERHOLUNGS_ABSTAENDE.map((abstand, index) => ({
    id: naechsteWiederholungsId(stepId, index + 1, aktuelleLerntagNummer),
    stepId,
    stufe: index + 1,
    faelligAbLerntagNummer: aktuelleLerntagNummer + abstand,
    status: "offen",
    erstelltAm
  }));

  return {
    ...basisStatus,
    geplanteWiederholungen: [
      ...(basisStatus.geplanteWiederholungen || []),
      ...neueWiederholungen
    ]
  };
}

export function protokolliereStepAbschluss(
  status,
  {
    stepId,
    datum = heutigesDatumKey(),
    perfekterDurchlauf = false
  } = {}
) {
  if (!stepId) {
    console.warn("protokolliereStepAbschluss: stepId fehlt");
    return status && typeof status === "object" ? status : initialerStatus();
  }

  const statusMitLerntag = markiereLerntagStart(status, datum);
  const statusMitStep = {
    ...statusMitLerntag,
    erledigteSteps: {
      ...(statusMitLerntag.erledigteSteps || {}),
      [stepId]: {
        datum,
        perfekterDurchlauf: !!perfekterDurchlauf
      }
    }
  };

  if (statusMitLerntag.erledigteSteps?.[stepId]) {
    return statusMitStep;
  }

  return erzeugeWiederholungenFuerStep(statusMitStep, stepId, datum);
}
