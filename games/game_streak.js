export function renderGameStreakMarkup(initialStreak = 0) {
  return `
    <div class="gm-streak">
      <span class="gm-streak-label">Serie</span>
      <span class="gm-streak-value">${initialStreak} 🔥</span>
    </div>
  `;
}

export function updateGameStreakUI(element, streak) {
  if (!element) return;
  element.textContent = `${Math.max(0, Number(streak) || 0)} 🔥`;
}
