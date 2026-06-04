import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import OrnamentDivider from "@/components/ui/OrnamentDivider";
import DecorativeScript from "@/components/ui/DecorativeScript";

export const metadata: Metadata = {
  title: "Heritage — Maison Classique",
  description:
    "A century and a half in the workshops of Europe. The story of Maison Classique.",
};

const chapters = [
  {
    year: "1869",
    title: "A house is founded",
    text: "In a narrow workshop off a Mayfair mews, the first chairs are turned by hand. Word travels quietly, as the best things do, through the drawing rooms of London.",
  },
  {
    year: "1903",
    title: "Across the Channel",
    text: "An alliance is struck with a gilding atelier in Saint-Germain. The carved giltwood of the French court enters the collection, leaf by patient leaf.",
  },
  {
    year: "1921",
    title: "The Milanese hand",
    text: "From Lombardy comes the art of marquetry — walnut book-matched like the pages of a manuscript. The house learns to treat furniture as fine binding.",
  },
  {
    year: "Today",
    title: "Custodians, still",
    text: "Three ateliers, one standard. We remain a house of the hand, offering objects made to be inherited rather than replaced.",
  },
];

export default function HeritagePage() {
  return (
    <div className="bg-ivory">
      {/* Hero band */}
      <section className="relative flex h-[70vh] min-h-[480px] items-center justify-center overflow-hidden text-center text-ivory">
        <Image
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2000&q=80"
          alt="A grand classical interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <span
          aria-hidden
          className="font-script pointer-events-none absolute select-none text-[26vw] leading-none text-gold-soft opacity-[0.10]"
        >
          Héritage
        </span>
        <div className="relative px-6">
          <p className="caption-label text-gold-soft">Since 1869</p>
          <h1 className="mt-5 font-display text-6xl tracking-wide sm:text-7xl">
            Our Heritage
          </h1>
          <div className="mx-auto mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-gold/60" />
            <p className="font-display text-lg italic text-ivory/85">
              The art of living, inherited
            </p>
            <span className="h-px w-14 bg-gold/60" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden py-28">
        <DecorativeScript className="absolute -top-8 left-1/2 -translate-x-1/2 text-[18vw]">
          Histoire
        </DecorativeScript>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="font-display text-3xl leading-[1.55] text-navy sm:text-4xl">
              For over a century and a half, a single conviction has guided the
              house: that the finest objects are not bought, but kept.
            </p>
            <OrnamentDivider className="mt-10" />
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-marble py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-20">
            {chapters.map((c, i) => (
              <FadeIn key={c.year} delay={(i % 2) * 0.1}>
                <div className="grid gap-6 sm:grid-cols-[160px_1fr] sm:gap-12">
                  <div className="sm:text-right">
                    <p className="font-display text-5xl text-gold">{c.year}</p>
                  </div>
                  <div className="border-l border-navy/15 pl-8">
                    <h3 className="font-display text-3xl text-navy">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink/70">
                      {c.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden bg-navy py-28 text-center text-ivory">
        <div className="relative mx-auto max-w-2xl px-6">
          <span className="font-script block text-6xl text-gold-soft">
            Maison Classique
          </span>
          <OrnamentDivider tone="gold" className="mt-6" />
          <p className="mx-auto mt-8 text-lg leading-relaxed text-ivory/75">
            We invite you to begin your own chapter — in person, in one of our
            three European ateliers, or by private appointment.
          </p>
        </div>
      </section>
    </div>
  );
}
