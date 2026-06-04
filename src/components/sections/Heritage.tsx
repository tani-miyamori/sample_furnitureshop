import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import DecorativeScript from "@/components/ui/DecorativeScript";

export default function Heritage() {
  return (
    <section className="relative overflow-hidden bg-navy py-32 text-ivory">
      <DecorativeScript className="absolute right-6 top-10 text-[16vw] !text-gold-soft !opacity-[0.08]">
        Héritage
      </DecorativeScript>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <FadeIn>
          <div className="gold-frame relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="A craftsman's atelier with timber and tools"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="caption-label text-gold">A Century &amp; a Half</p>
          <h2 className="mt-5 font-display text-5xl leading-tight">
            Built by hand,
            <br />
            <span className="italic text-gold-soft">kept for generations</span>
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ivory/75">
            Since 1869 we have travelled the workshops of Europe in search of
            the rare and the enduring. We favour the maker who still works to
            the rhythm of the hand — the carver, the gilder, the upholsterer
            whose craft is measured in decades, not days.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ivory/75">
            What we offer is not merely beautiful. It is permanent.
          </p>

          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-display text-4xl text-gold-soft">150+</p>
              <p className="caption-label mt-2 text-ivory/55">Years of trade</p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold-soft">3</p>
              <p className="caption-label mt-2 text-ivory/55">European ateliers</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
