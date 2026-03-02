// core/lesson_summary.js

/**
 * LessonSession
 *  - pro Lektion anlegen
 *  - pro Frage Ergebnis registrieren
 *  - am Ende finish() aufrufen → Stats für das Summary
 */
export class LessonSession {
  constructor({ lessonId }) {
    this.lessonId = lessonId;
    this.startedAt = performance.now();
    this.correctCount = 0;
    this.totalCount = 0;
    this.xpEarned = 0;
  }

  /**
   * registerQuestionResult
   * @param {Object} params
   * @param {boolean} params.isCorrect
   * @param {number} [params.xp] - XP für diese Frage (optional)
   */
  registerQuestionResult({ isCorrect, xp = 0 }) {
    this.totalCount += 1;
    if (isCorrect) {
      this.correctCount += 1;
    }
    if (typeof xp === "number" && xp > 0) {
      this.xpEarned += xp;
    }
  }

  /**
   * finish
   * @returns {{ lessonId:string, xpEarned:number, correctCount:number, totalCount:number, timeMs:number }}
   */
  finish() {
    const now = performance.now();
    const timeMs = now - this.startedAt;
    return {
      lessonId: this.lessonId,
      xpEarned: this.xpEarned,
      correctCount: this.correctCount,
      totalCount: this.totalCount,
      timeMs
    };
  }
}

// interner Verweis, damit wir alte Overlays sauber schließen
let activeOverlay = null;

/**
 * showLessonSummary
 *
 * @param {Object} params
 * @param {HTMLElement} [params.mountNode=document.body] - wohin das Overlay gehängt wird
 * @param {Object} params.stats
 * @param {number} params.stats.xpEarned
 * @param {number} params.stats.correctCount
 * @param {number} params.stats.totalCount
 * @param {number} params.stats.timeMs
 * @param {Object} params.videoConfig
 * @param {string} [params.videoConfig.perfect]   - Video-URL für 100%
 * @param {string} [params.videoConfig.notPerfect] - Video-URL für <100%
 * @param {Function} [params.onContinue] - Callback: ({ action: "retry" | "continue" })
 */
export function showLessonSummary({
  mountNode = document.body,
  stats,
  videoConfig = {},
  onContinue
}) {
  if (!stats) return;

  const { xpEarned, correctCount, totalCount, timeMs } = stats;
  const percent =
    totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  // Zeit in mm:ss
  const secondsTotal = Math.round(timeMs / 1000);
  const minutes = Math.floor(secondsTotal / 60);
  const seconds = secondsTotal % 60;
  const timeLabel =
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    " min";

  // altes Overlay weg
  if (activeOverlay && activeOverlay.parentNode) {
    activeOverlay.parentNode.removeChild(activeOverlay);
  }

  const overlay = document.createElement("div");
  overlay.className = "ls-overlay";

  const card = document.createElement("div");
  card.className = "ls-card";
  overlay.appendChild(card);

  // Titel
  const headline = document.createElement("h2");
  headline.className = "ls-title";
  headline.textContent = "Lektion abgeschlossen!";
  card.appendChild(headline);

  // Optional: Untertitel mit Prozent
  const subtitle = document.createElement("p");
  subtitle.className = "ls-subtitle";
  subtitle.textContent =
    percent === 100
      ? "Perfekt! Du hast alle Fragen richtig beantwortet. 🙌"
      : `Gut gemacht – du hast ${percent}% der Fragen richtig beantwortet.`;
  card.appendChild(subtitle);

  // Video-Wrapper
  const videoWrapper = document.createElement("div");
  videoWrapper.className = "ls-video-wrapper";

  const video = document.createElement("video");
  video.className = "ls-video";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  const sourceUrl =
    percent === 100 && videoConfig.perfect
      ? videoConfig.perfect
      : videoConfig.notPerfect || videoConfig.perfect || null;

  if (sourceUrl) {
    const source = document.createElement("source");
    source.src = sourceUrl;
    source.type = "video/mp4";
    video.appendChild(source);
  } else {
    videoWrapper.classList.add("ls-video-wrapper--empty");
  }

  videoWrapper.appendChild(video);
  card.appendChild(videoWrapper);

  // Badges
  const badgesRow = document.createElement("div");
  badgesRow.className = "ls-badges";

  badgesRow.appendChild(
    createBadge("XP gesammelt", `${xpEarned} XP`, "xp")
  );
  badgesRow.appendChild(
    createBadge(
      "Korrekte Antworten",
      `${correctCount}/${totalCount} (${percent}%)`,
      "correct"
    )
  );
  badgesRow.appendChild(
    createBadge("Lektionszeit", timeLabel, "time")
  );

  card.appendChild(badgesRow);

  // Buttons
  const buttonRow = document.createElement("div");
  buttonRow.className = "ls-actions";

  const againBtn = document.createElement("button");
  againBtn.className = "ls-btn ls-btn-secondary ls-btn-again";
  againBtn.textContent = "Lektion wiederholen";
  againBtn.addEventListener("click", () => {
    cleanup();
    if (onContinue) onContinue({ action: "retry" });
  });

  const continueBtn = document.createElement("button");
  continueBtn.className = "ls-btn ls-btn-primary ls-btn-continue";
  continueBtn.textContent = "Zurück zur Karte";
  continueBtn.addEventListener("click", () => {
    cleanup();
    if (onContinue) onContinue({ action: "continue" });
  });

  buttonRow.appendChild(againBtn);
  buttonRow.appendChild(continueBtn);
  card.appendChild(buttonRow);

  // Overlay montieren
  mountNode.appendChild(overlay);
  activeOverlay = overlay;

  // Klick auf dunklen Hintergrund → nur schließen, keine Aktion
  overlay.addEventListener("click", (ev) => {
    if (ev.target === overlay) {
      cleanup();
      if (onContinue) onContinue({ action: "continue" });
    }
  });

  function cleanup() {
    if (overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
    if (activeOverlay === overlay) {
      activeOverlay = null;
    }
  }
}

function createBadge(label, value, type) {
  const badge = document.createElement("div");
  badge.className = "ls-badge ls-badge-" + type;

  const valueEl = document.createElement("div");
  valueEl.className = "ls-badge-value";
  valueEl.textContent = value;

  const labelEl = document.createElement("div");
  labelEl.className = "ls-badge-label";
  labelEl.textContent = label;

  badge.appendChild(valueEl);
  badge.appendChild(labelEl);
  return badge;
}
