export default function Footer() {
  return (
    <footer className="relative z-10 flex flex-col items-center gap-4 px-6 pb-10 pt-8 text-center">
      {/* Whisper teaser */}
      <p
        className="text-xs font-light italic tracking-wide text-neutral-600 sm:text-sm"
        style={{ fontFamily: "'Saira Condensed', sans-serif" }}
      >
        Every movement leaves a trace. We're mapping them all.
      </p>

      {/* Wordmark + copyright */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="text-lg font-semibold tracking-[0.15em] text-neutral-400"
          style={{ fontFamily: "'SF Compact Rounded', sans-serif" }}
        >
          kinetiq
        </span>
        <span className="text-[10px] uppercase tracking-widest text-neutral-700">
          © 2026
        </span>
      </div>
    </footer>
  );
}
