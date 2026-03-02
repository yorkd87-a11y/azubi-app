// lernlogik/missionen.js
// Einfache Missionslogik fuer die spaetere Session-Planung.
// Nutzt vorhandene Datenquellen und faellt bei Luecken auf einfache Defaults zurueck.

import { getMockDailyHistory } from "../core/daily_missions.js";
import { getAllHistoryEntries } from "../core/question_history.js";

function holeHistoryMitFallback() {
  const history = getAllHistoryEntries();
  if (Array.isArray(history) && history.length > 0) {
    return history;
  }
  return getMockDailyHistory();
}

function zieheZufaellig(eintraege, anzahl) {
  const kopie = [...eintraege];
  const ergebnis = [];

  while (kopie.length > 0 && ergebnis.length < anzahl) {
    const index = Math.floor(Math.random() * kopie.length);
    ergebnis.push(kopie.splice(index, 1)[0]);
  }

  return ergebnis;
}

function findeBereitsErledigteSteps(status, inhaltsIndex) {
  const erledigteIds = new Set(Object.keys(status?.erledigteSteps || {}));
  const schritte = Array.isArray(inhaltsIndex?.schritte) ? inhaltsIndex.schritte : [];
  return schritte.filter((schritt) => erledigteIds.has(schritt.stepId));
}

function baueSchwachstellenMission() {
  const history = holeHistoryMitFallback();
  const letzteZehn = history.slice(-10);

  const schwacheEintraege = letzteZehn.filter((eintrag) => eintrag?.lastIsCorrect === false);
  const pool = schwacheEintraege.length > 0 ? schwacheEintraege : letzteZehn;
  const fragen = zieheZufaellig(pool, Math.min(6, pool.length));

  return {
    missionTyp: "schwachstelle",
    titel: "Daily Mission: Schwachstelle",
    beschreibung: "Fragen aus Bereichen, in denen zuletzt Fehler passiert sind.",
    fragen
  };
}

function baueCheckpointMission() {
  const history = holeHistoryMitFallback();
  const letzteZwanzig = history.slice(-20);
  const fragen = zieheZufaellig(letzteZwanzig, Math.min(6, letzteZwanzig.length));

  return {
    missionTyp: "checkpoint_woche",
    titel: "Daily Mission: Checkpoint",
    beschreibung: "Gemischter Kurz-Checkpoint aus den letzten Lernbereichen.",
    fragen
  };
}

function bauePraxisauftragMission(status, inhaltsIndex) {
  const erledigteSchritte = findeBereitsErledigteSteps(status, inhaltsIndex);

  for (let i = erledigteSchritte.length - 1; i >= 0; i -= 1) {
    const schritt = erledigteSchritte[i];
    const practiceTask = schritt?.microLearning?.practiceTask;
    if (practiceTask) {
      return {
        missionTyp: "praxisauftrag",
        titel: "Daily Mission: Praxisauftrag",
        beschreibung: practiceTask
      };
    }
  }

  return {
    missionTyp: "praxisauftrag",
    titel: "Daily Mission: Praxisauftrag",
    beschreibung:
      "Achte heute bewusst auf einen sauberen, ruhigen und sicheren Ablauf bei einer wiederkehrenden Salonroutine."
  };
}

function baueSpeedDrillMission(status, inhaltsIndex) {
  const erledigteSchritte = findeBereitsErledigteSteps(status, inhaltsIndex);
  const kandidaten = erledigteSchritte.slice(-3);

  return {
    missionTyp: "speed_drill",
    titel: "Daily Mission: Speed Drill",
    beschreibung: "Kurze Wiederholung mit wenigen Fragen aus bereits bearbeiteten Bereichen.",
    stepIds: kandidaten.map((schritt) => schritt.stepId),
    fragenAnzahl: 8
  };
}

export function baueMissionenFuerHeute(status, inhaltsIndex) {
  return [
    baueSchwachstellenMission(),
    baueCheckpointMission(),
    bauePraxisauftragMission(status, inhaltsIndex),
    baueSpeedDrillMission(status, inhaltsIndex)
  ];
}

export function waehleMissionFuerHeute(status, inhaltsIndex) {
  const missionen = baueMissionenFuerHeute(status, inhaltsIndex);
  return missionen[0] || null;
}
