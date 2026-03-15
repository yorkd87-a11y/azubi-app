export function createVideoAudioGate({
  videoEl,
  containerEl,
  title = "Ton einschalten?",
  text = "Dieses Video ist noch stumm. Für Sprache und Erklärungen bitte den Ton aktivieren.",
  continueMutedLabel = "Stumm weiterschauen",
  enableSoundLabel = "Ton einschalten",
  onEnableSound = null,
  onContinueMuted = null
} = {}) {
  let overlayEl = null;
  let acknowledged = false;
  let resumePlayback = null;

  function removeOverlay() {
    if (!overlayEl) return;
    overlayEl.remove();
    overlayEl = null;
  }

  function ensureOverlay() {
    if (!containerEl) return null;
    if (overlayEl) return overlayEl;

    overlayEl = document.createElement("div");
    overlayEl.className = "video-audio-gate";
    overlayEl.innerHTML = `
      <div class="video-audio-gate-card" role="dialog" aria-modal="true" aria-label="${title}">
        <div class="video-audio-gate-kicker">Ton-Hinweis</div>
        <h3 class="video-audio-gate-title">${title}</h3>
        <p class="video-audio-gate-text">${text}</p>
        <div class="video-audio-gate-actions">
          <button class="video-audio-gate-primary" type="button">${enableSoundLabel}</button>
          <button class="video-audio-gate-secondary" type="button">${continueMutedLabel}</button>
        </div>
      </div>
    `;

    const primaryBtn = overlayEl.querySelector(".video-audio-gate-primary");
    const secondaryBtn = overlayEl.querySelector(".video-audio-gate-secondary");

    primaryBtn?.addEventListener("click", async () => {
      acknowledged = true;
      if (videoEl) {
        videoEl.muted = false;
        if ("volume" in videoEl) {
          videoEl.volume = 1;
        }
      }
      if (typeof onEnableSound === "function") {
        onEnableSound();
      }
      removeOverlay();
      if (typeof resumePlayback === "function") {
        await resumePlayback();
      }
    });

    secondaryBtn?.addEventListener("click", async () => {
      acknowledged = true;
      if (typeof onContinueMuted === "function") {
        onContinueMuted();
      }
      removeOverlay();
      if (typeof resumePlayback === "function") {
        await resumePlayback();
      }
    });

    containerEl.appendChild(overlayEl);
    return overlayEl;
  }

  async function requestConfirmation(onResume) {
    resumePlayback = typeof onResume === "function"
      ? onResume
      : async () => {
          if (videoEl && typeof videoEl.play === "function") {
            await videoEl.play().catch(() => {});
          }
        };

    if (!videoEl || !containerEl || !videoEl.muted || acknowledged) {
      removeOverlay();
      return false;
    }

    if (typeof videoEl.pause === "function") {
      videoEl.pause();
    }
    ensureOverlay();
    return true;
  }

  function reset() {
    acknowledged = false;
    resumePlayback = null;
    removeOverlay();
  }

  function clear() {
    resumePlayback = null;
    removeOverlay();
  }

  function acknowledge() {
    acknowledged = true;
    removeOverlay();
  }

  return {
    requestConfirmation,
    reset,
    clear,
    acknowledge
  };
}
