import FadeIn from "@/components/ui/FadeIn";
import OrnamentDivider from "@/components/ui/OrnamentDivider";
import DecorativeScript from "@/components/ui/DecorativeScript";

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden py-32">
      <DecorativeScript className="absolute -top-10 left-1/2 -translate-x-1/2 text-[18vw]">
        Maison
      </DecorativeScript>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <p className="caption-label text-gold">Our Philosophy</p>
          <OrnamentDivider className="mt-6" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 font-display text-3xl leading-[1.5] text-navy sm:text-4xl">
            We do not sell furniture. We are custodians of objects that have
            outlived their makers — and will outlive us.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
            Each piece in our gallery is sourced from the ateliers of England,
            France, and Italy, where the same families have shaped wood, gilded
            leaf, and dressed leather for generations. To bring one home is to
            inherit a quiet chapter of European history.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
