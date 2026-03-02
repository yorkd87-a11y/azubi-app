// lernlogik/session_planer.js
// Entscheidet, welche zwei Sessions fuer heute vorgeschlagen werden.

import { initialerStatus } from "./speicher.js";
import { waehleMissionFuerHeute } from "./missionen.js";

const SCHWELLE_ZWEITE_WIEDERHOLUNG = 5;

function baueStepEintrag(lesson, meta = {}) {
  return {
    stepId: lesson.id,
    titel: lesson.title || "Lektion",
    levelId: meta.levelId || "",
    levelTitel: meta.levelTitel || "",
    abschnittId: meta.abschnittId || "",
    abschnittTitel: meta.abschnittTitel || "",
    lessonIndexInLevel: Number.isInteger(meta.lessonIndexInLevel) ? meta.lessonIndexInLevel : -1
  };
}

export function baueInhaltsIndexAusContent(content) {
  const schritte = [];

  (content?.jahre || []).forEach((jahr) => {
    (jahr.levels || []).forEach((level) => {
      let lessonIndexInLevel = 0;
      (level.sections || []).forEach((abschnitt) => {
        (abschnitt.lessons || []).forEach((lesson) => {
          if (!lesson?.id) return;
          schritte.push(
            baueStepEintrag(lesson, {
              levelId: level.id,
              levelTitel: level.title || level.levelName || "",
              abschnittId: abschnitt.id,
              abschnittTitel: abschnitt.title || "",
              lessonIndexInLevel
            })
          );
          lessonIndexInLevel += 1;
        });
      });
    });
  });

  return { schritte };
}

export function findeNaechsteKernlektion(status, inhaltsIndex) {
  const basisStatus = status && typeof status === "object" ? status : initialerStatus();
  const schritte = Array.isArray(inhaltsIndex?.schritte) ? inhaltsIndex.schritte : [];

  return schritte.find((schritt) => !basisStatus.erledigteSteps?.[schritt.stepId]) || null;
}

export function findeFaelligeWiederholungen(status) {
  const basisStatus = status && typeof status === "object" ? status : initialerStatus();
  const lerntagNummer = basisStatus.lerntagNummer || 0;
  const wiederholungen = Array.isArray(basisStatus.geplanteWiederholungen)
    ? basisStatus.geplanteWiederholungen
    : [];

  return wiederholungen
    .filter((wiederholung) =>
      wiederholung &&
      wiederholung.status === "offen" &&
      (wiederholung.faelligAbLerntagNummer || 0) <= lerntagNummer
    )
    .sort((a, b) => {
      const diffFaellig = (a.faelligAbLerntagNummer || 0) - (b.faelligAbLerntagNummer || 0);
      if (diffFaellig !== 0) return diffFaellig;
      return (a.stufe || 0) - (b.stufe || 0);
    });
}

function findeSchrittEintrag(inhaltsIndex, stepId) {
  const schritte = Array.isArray(inhaltsIndex?.schritte) ? inhaltsIndex.schritte : [];
  return schritte.find((schritt) => schritt.stepId === stepId) || null;
}

function baueWiederholungsSession(wiederholung, inhaltsIndex) {
  const schritt = findeSchrittEintrag(inhaltsIndex, wiederholung.stepId);
  return {
    typ: "wiederholung",
    stepId: wiederholung.stepId,
    titel: schritt?.titel ? `Wiederholung: ${schritt.titel}` : `Wiederholung: ${wiederholung.stepId}`,
    wiederholungsId: wiederholung.id,
    stufe: wiederholung.stufe,
    levelId: schritt?.levelId || "",
    lessonIndexInLevel: Number.isInteger(schritt?.lessonIndexInLevel) ? schritt.lessonIndexInLevel : -1
  };
}

function baueKernlektionsSession(schritt) {
  return {
    typ: "kernlektion",
    stepId: schritt.stepId,
    titel: schritt.titel,
    levelId: schritt.levelId,
    lessonIndexInLevel: schritt.lessonIndexInLevel
  };
}

function baueDailyMissionSession(status, inhaltsIndex) {
  const mission = waehleMissionFuerHeute(status, inhaltsIndex);
  if (!mission) {
    return {
      typ: "mission",
      missionTyp: "checkpoint_woche",
      titel: "Daily Mission: Checkpoint"
    };
  }

  return {
    typ: "mission",
    missionTyp: mission.missionTyp,
    titel: mission.titel,
    beschreibung: mission.beschreibung || "",
    stepIds: mission.stepIds || [],
    fragenAnzahl: mission.fragenAnzahl || 0
  };
}

export function getHeutigeSessions(status, inhaltsIndex) {
  const basisStatus = status && typeof status === "object" ? status : initialerStatus();
  const faelligeWiederholungen = findeFaelligeWiederholungen(basisStatus);
  const naechsteKernlektion = findeNaechsteKernlektion(basisStatus, inhaltsIndex);

  const sessionen = [];
  let slot1IstWiederholung = false;

  if (faelligeWiederholungen.length > 0) {
    sessionen.push(baueWiederholungsSession(faelligeWiederholungen[0], inhaltsIndex));
    slot1IstWiederholung = true;
  } else if (naechsteKernlektion) {
    sessionen.push(baueKernlektionsSession(naechsteKernlektion));
  } else {
    sessionen.push(baueDailyMissionSession(basisStatus, inhaltsIndex));
  }

  if (faelligeWiederholungen.length > SCHWELLE_ZWEITE_WIEDERHOLUNG) {
    const zweiteWiederholung = faelligeWiederholungen[slot1IstWiederholung ? 1 : 0];
    if (zweiteWiederholung) {
      sessionen.push(baueWiederholungsSession(zweiteWiederholung, inhaltsIndex));
    } else {
      sessionen.push(baueDailyMissionSession(basisStatus, inhaltsIndex));
    }
  } else {
    sessionen.push(baueDailyMissionSession(basisStatus, inhaltsIndex));
  }

  return sessionen.slice(0, 2);
}

export { SCHWELLE_ZWEITE_WIEDERHOLUNG };
