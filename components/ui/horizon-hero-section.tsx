"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { event } from "@/event.config";

const Warp = dynamic(
  () => import("@paper-design/shaders-react").then((m) => ({ default: m.Warp })),
  { ssr: false },
);

const TOTAL_SECTIONS = 2;

export default function HorizonHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [shaderReady, setShaderReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShaderReady(true), 400);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const maxScroll = container.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setCurrentSection(0);
        return;
      }
      const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      const sectionFloat = progress * TOTAL_SECTIONS;
      const newSection = Math.min(Math.floor(sectionFloat), TOTAL_SECTIONS - 1);
      setCurrentSection(newSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    <div key="logo" className="flex flex-col items-center gap-6 px-6">
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[min(360px,70vw)] h-[min(360px,70vw)]"
        style={{ opacity: 0 }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.2) 35%, transparent 65%)",
          }}
        />
        <img
          src="/logo.webp"
          alt="EUDAIMONIA"
          width={720}
          height={669}
          decoding="async"
          fetchPriority="high"
          className="relative w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <p
          className="font-display font-bold text-2xl sm:text-3xl tracking-widest text-iris"
          style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1', fontVariantNumeric: "lining-nums tabular-nums" }}
        >
          {event.date} &nbsp;·&nbsp; {event.time}
        </p>
        <p className="font-display text-sm tracking-[0.2em] text-white/60 uppercase mt-1">
          {event.venue}
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <ButtonColorful label="Tickets" href={event.ticketUrl} target="_blank" rel="noopener noreferrer" />
      </motion.div>
    </div>,

    <div key="feel" className="flex flex-col items-center gap-2 px-6 text-center">
      <h2
        className="font-editorial italic text-white"
        style={{
          fontSize: "clamp(3.5rem,15vw,9.5rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          filter: "drop-shadow(0 0 50px rgba(168,85,247,0.4))",
        }}
      >
        Feel free.
      </h2>
      <h2
        className="font-editorial italic text-white"
        style={{
          fontSize: "clamp(3.5rem,15vw,9.5rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.02em",
          filter: "drop-shadow(0 0 50px rgba(168,85,247,0.4))",
        }}
      >
        Feel safe.
      </h2>
      <p className="font-display text-white/50 text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase mt-10">
        Queer & FLINTA* Friendly · Awareness Concept
      </p>
    </div>,
  ];

  return (
    <div ref={containerRef} style={{ height: `${TOTAL_SECTIONS * 100}vh`, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", clipPath: "inset(0)" }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(290, 85%, 22%) 0%, hsl(280, 90%, 12%) 45%, hsl(270, 100%, 4%) 90%)",
          }}
        />
        {shaderReady && (
          <div
            className="absolute inset-0 z-0"
            style={{ animation: "fade-in 1.2s ease forwards" }}
          >
            <Warp
              style={{ height: "100%", width: "100%" }}
              proportion={0.45}
              softness={1}
              distortion={0.25}
              swirl={0.8}
              swirlIterations={10}
              shape="checks"
              shapeScale={0.1}
              scale={1}
              rotation={0}
              speed={1.2}
              colors={[
                "hsl(270, 100%, 4%)",
                "hsl(280, 90%, 18%)",
                "hsl(260, 95%, 10%)",
                "hsl(290, 85%, 28%)",
              ]}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 pointer-events-none z-10" />

        {sections.map((section, i) => (
          <div
            key={i}
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              opacity: currentSection === i ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: currentSection === i ? "auto" : "none",
            }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}
