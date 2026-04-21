"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: "✦",
    title: "Feel Free",
    desc: "Dein Abend, deine Regeln. Kein Dress Code, kein Zwang. Nur du.",
  },
  {
    icon: "◈",
    title: "Feel Safe",
    desc: "Awareness-Team vor Ort. Grenzüberschreitungen werden nicht toleriert.",
  },
  {
    icon: "◇",
    title: "Queer & Flinta Friendly",
    desc: "Ein Raum, der queere Menschen und FLINTA* zentriert und willkommen heißt.",
  },
  {
    icon: "◎",
    title: "Awareness Concept",
    desc: "Awareness-Team vor Ort. Bewusste Türpolitik. Nur Ja bedeutet Ja.",
  },
];

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="glow-blob w-[700px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{ background: "radial-gradient(ellipse, #9333ea, transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-[0.7rem] tracking-[0.3em] text-white/40 uppercase mb-12 text-center"
        >
          Our Values
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 rounded-sm overflow-hidden">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black p-6 flex flex-col gap-3 group hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="text-iris font-display text-xl">{v.icon}</span>
              <h3 className="font-display font-bold text-sm tracking-wide text-white">
                {v.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
