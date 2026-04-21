"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Replace these src values with real image paths when available.
// e.g. "/gallery/photo-01.jpg"
const PHOTOS: { src: string | null; alt: string }[] = [
  { src: null, alt: "Party Foto 1" },
  { src: null, alt: "Party Foto 2" },
  { src: null, alt: "Party Foto 3" },
  { src: null, alt: "Party Foto 4" },
  { src: null, alt: "Party Foto 5" },
  { src: null, alt: "Party Foto 6" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="pt-10 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-display text-[0.7rem] tracking-[0.3em] text-white/40 uppercase mb-2">
            Erinnerungen
          </p>
          <h2 className="font-display font-bold text-2xl text-white/80">
            Die Nacht in Bildern
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white/[0.03] border border-white/[0.07] group"
            >
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  {/* Placeholder shimmer */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(168,85,247,0.15), transparent 70%)",
                    }}
                  />
                  <span className="text-iris font-display text-2xl">✦</span>
                  <span className="font-display text-[0.6rem] tracking-[0.2em] text-white/25 uppercase">
                    Fotos folgen
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="font-display text-xs tracking-[0.3em] uppercase px-6 py-3 rounded-sm border border-white/15 text-white/50 cursor-not-allowed"
          >
            Zur Galerie (Soon)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
