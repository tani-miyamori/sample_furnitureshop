"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[680px] items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=80"
        alt="A vintage European drawing room with a velvet sofa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Royal navy veil for legibility & mood */}
      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/70" />

      {/* Faint calligraphic flourish behind the logo */}
      <span
        aria-hidden
        className="font-script pointer-events-none absolute select-none text-[28vw] leading-none text-gold-soft opacity-[0.10]"
      >
        Élégance
      </span>

      <motion.div
        className="relative z-10 px-6 text-center text-ivory"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="caption-label text-gold-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          European Heritage Furniture · Since 1869
        </motion.p>

        <h1 className="mt-6 font-display text-6xl font-medium tracking-[0.18em] sm:text-7xl lg:text-8xl">
          MAISON
          <span className="mx-3 align-middle text-gold">·</span>
          CLASSIQUE
        </h1>

        <div className="mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gold/60" />
          <p className="font-display text-lg italic text-ivory/85">
            The art of living, inherited
          </p>
          <span className="h-px w-16 bg-gold/60" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-ivory/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="caption-label">Scroll</span>
        <div className="mx-auto mt-3 h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}
