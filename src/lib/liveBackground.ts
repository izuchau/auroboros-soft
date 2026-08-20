/** True when animated background layers should stay disabled (mobile / touch / reduced motion). */
export function isLiveBackgroundLite(): boolean {
  if (typeof window === 'undefined') return false;

  return (
    window.matchMedia('(max-width: 767px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  );
}

declare global {
  interface Window {
    __LIVE_BG_LITE__?: boolean;
  }
}

export function markLiveBackgroundLite(): void {
  if (!isLiveBackgroundLite()) return;
  document.documentElement.classList.add('live-bg-lite');
  window.__LIVE_BG_LITE__ = true;
}
