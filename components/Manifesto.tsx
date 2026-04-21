"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Manifesto() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Pull quote */}
        <FadeIn>
          <p className="font-display font-bold uppercase tracking-widest text-iris leading-[1.1] mb-16" style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}>
            Was bedeutet es eigentlich, sich wirklich frei zu fühlen?
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 font-light">
            EUDAIMONIA ist mehr als nur eine Party. Der Begriff — geprägt von
            Aristoteles — beschreibt ein erfülltes Leben, ein echtes Gefühl von
            Glück. Nicht oberflächlich. Sondern tief. Echt. Selbstbestimmt.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-editorial italic text-white/55 text-xl sm:text-2xl leading-relaxed mb-12">
            Und genau das holen wir in die Nacht.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="border-l border-white/15 pl-6 mb-12">
            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-light">
              In einer Clubkultur, in der Grenzüberschreitungen für viele fast
              schon „normal" geworden sind, setzt EUDAIMONIA bewusst einen
              Gegenraum: Einen Ort, an dem du tanzen kannst, ohne Angst vor
              übergriffigem Verhalten. Einen Ort, an dem Konsens zählt — und
              nur Ja auch wirklich Ja bedeutet.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed font-light">
            Mit Awareness-Team und bewusster Selektion am Einlass schaffen wir
            einen Space, der queerfreundlich ist, FLINTA* zentriert denkt —
            aber offen für alle bleibt, die diese Werte respektieren.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
