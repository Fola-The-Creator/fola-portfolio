/** Sits on top of the stand-in image for work that cannot be named. */
export function ConfidentialBadge() {
  return (
    <span className="absolute top-4 left-4 z-10 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
      Under NDA
    </span>
  );
}
