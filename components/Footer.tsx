import Link from "next/link";
import { event } from "@/event.config";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.07]">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <p className="font-display font-bold text-sm tracking-[0.2em] text-iris mb-1">
            EUDAIMONIA
          </p>
          <p className="font-display text-[0.65rem] tracking-[0.15em] text-white/40 uppercase">
            Feel Free. Feel Safe.
          </p>
          <a
            href={event.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-white transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
            <span className="font-display text-[0.65rem] tracking-[0.15em] uppercase">
              {event.instagramHandle}
            </span>
          </a>
        </div>

        <div>
          <p className="text-white/50 text-xs leading-relaxed">
            Nachtwerk Club (neben Nachtgalerie)
          </p>
          <p className="text-white/30 text-xs">
            Landsbergerstr. 185, 80687 München
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-[0.65rem] tracking-widest font-display uppercase">
          © 2026 EUDAIMONIA
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/impressum"
            className="text-white/40 hover:text-white/80 text-[0.65rem] tracking-widest font-display uppercase transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-white/40 hover:text-white/80 text-[0.65rem] tracking-widest font-display uppercase transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
