"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { event } from "@/event.config";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id"?: string },
        HTMLElement
      >;
    }
  }
}

export default function InstagramFeed() {
  if (!event.beholdFeedId) return null;

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <p className="font-display text-[0.7rem] tracking-[0.3em] text-white/80 uppercase">
            Instagram
          </p>
          <a
            href={event.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[0.65rem] tracking-[0.25em] text-white/40 hover:text-white/80 uppercase transition-colors"
          >
            {event.instagramHandle} →
          </a>
        </motion.div>

        <Script
          src="https://w.behold.so/widget.js"
          type="module"
          strategy="lazyOnload"
        />
        <behold-widget feed-id={event.beholdFeedId} />
      </div>
    </section>
  );
}
