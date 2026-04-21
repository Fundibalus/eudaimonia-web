"use client";

import { motion } from "framer-motion";
import { lineup, event } from "@/event.config";
import ShaderBackground from "@/components/ui/shader-background";
import { ButtonColorful } from "@/components/ui/button-colorful";

const viewport = { once: true, margin: "-60px" } as const;

export default function Lineup() {
  return (
    <section className="relative pt-24 pb-10 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <ShaderBackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 bg-black/50 backdrop-blur-sm rounded-sm px-6 py-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="font-display text-[0.7rem] tracking-[0.3em] text-white/80 uppercase mb-12 text-center w-full"
        >
          Lineup 02.05.26
        </motion.p>

        <div className="flex flex-col gap-6">
          {lineup.map((act, i) => (
            <motion.div
              key={act.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-sm bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] p-6 sm:p-8 hover:border-white/15 transition-colors duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(168,85,247,0.08), transparent 70%)" }}
              />
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-display text-xs tracking-[0.2em] text-white/40 block mb-1">
                    {act.time}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-wide text-iris">
                    {act.name}
                    {act.origin && (
                      <span className="text-white/40 font-normal text-base ml-2">
                        ({act.origin})
                      </span>
                    )}
                  </h3>
                </div>
                {act.genre && (
                  <span className="font-display text-[0.6rem] tracking-widest text-white/30 uppercase text-right shrink-0 mt-1">
                    {act.genre}
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{act.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 pt-8 border-t border-white/[0.07]"
        >
          <p className="text-white/30 text-xs leading-relaxed">
            EUDAIMONIA ist alles, was du daraus machst:{" "}
            <span className="text-white/80">Eskapismus. Hedonismus. Leichtigkeit. Connection.</span>{" "}
            Oder einfach ein Moment, in dem du dich selbst wieder spürst.
          </p>
          <p className="text-white/70 text-xs mt-2">Komm früh. Bleib lang.</p>

          <div className="mt-8 flex justify-center">
            <ButtonColorful
              label="Tickets"
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
