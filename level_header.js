// level_header.js
// KÃ¼mmert sich um die Anzeige des Level-/Abschnitt-Headers in der Map

/**
 * Ermittelt anhand des aktuellen Lesson-Index,
 * in welchem Abschnitt wir uns befinden.
 */
export function getLevelSectionInfo(module, lessonIndex) {
  const levelNumber = module.levelNumber ?? 1;
  const levelTitle =
    module.levelTitle || module.title || "Dein Lernpfad";

  let sectionNumber = null;
  let sectionTitle = "Abschnitt";

  if (Array.isArray(module.sections)) {
    for (const section of module.sections) {
      const start = section.startLessonIndex ?? 0;
      const end = section.endLessonIndex ?? start;

      if (lessonIndex >= start && lessonIndex <= end) {
        sectionNumber = section.sectionNumber ?? null;
        sectionTitle = section.sectionTitle || sectionTitle;
        break;
      }
    }
  }

  return {
    levelNumber,
    levelTitle,
    sectionNumber,
    sectionTitle,
    yearLabel: module.yearLabel || null
  };
}

/**
 * Rendert den Header in das Ã¼bergebene Container-Element.
 * lessonIndex = Referenz-Lektion (z.B. maxUnlockedLessonIndex)
 */
export function renderLevelHeader(containerEl, module, lessonIndex = 0) {
  if (!containerEl || !module) return;

  const info = getLevelSectionInfo(module, lessonIndex);

  const breadcrumbParts = [];
  if (info.yearLabel) {
    breadcrumbParts.push(info.yearLabel);
  }
  breadcrumbParts.push(`Level ${info.levelNumber}`);
  if (info.sectionTitle) {
    breadcrumbParts.push(info.sectionTitle);
  }

  const totalSteps = Array.isArray(module.lessons) ? module.lessons.length : 0;
  const doneSteps = Math.max(0, Math.min(lessonIndex + 1, totalSteps));
  const progressPercent =
    totalSteps > 0 ? Math.max(0, Math.min(100, Math.round((doneSteps / totalSteps) * 100))) : 0;
  const progressHint =
    totalSteps > 0 && doneSteps >= Math.max(1, Math.floor(totalSteps * 0.8))
      ? " - Fast geschafft"
      : "";

  containerEl.innerHTML = `
    <div class="level-header-card">
      <div class="level-header-meta-line">${breadcrumbParts.join(" · ")}</div>

      <h2 class="level-header-title">${info.levelTitle}</h2>

      <div class="level-header-progress" aria-label="Fortschritt im Lernpfad">
        <div class="level-header-progress-top">
          <span class="level-header-progress-text">${doneSteps} von ${totalSteps} Schritten</span>
          <span class="level-header-progress-percent">${progressPercent}%</span>
        </div>
        <div class="level-header-progress-track">
          <div class="level-header-progress-fill" style="width:${progressPercent}%"></div>
        </div>
      </div>

      <div class="level-header-status">
        ${doneSteps}/${totalSteps} Schritte freigeschaltet${progressHint}
      </div>
    </div>
  `;
}



