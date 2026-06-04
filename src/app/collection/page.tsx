import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import OrnamentDivider from "@/components/ui/OrnamentDivider";
import DecorativeScript from "@/components/ui/DecorativeScript";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "The Collection — Maison Classique",
  description:
    "The complete gallery of imported European classic furniture, presented as a museum of living objects.",
};

export default function CollectionPage() {
  return (
    <div className="bg-ivory">
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy pb-24 pt-44 text-center text-ivory">
        <DecorativeScript className="absolute left-1/2 top-24 -translate-x-1/2 text-[20vw] !text-gold-soft !opacity-[0.08]">
          Galerie
        </DecorativeScript>
        <div className="relative px-6">
          <p className="caption-label text-gold">The Gallery</p>
          <h1 className="mt-5 font-display text-6xl">The Collection</h1>
          <OrnamentDivider tone="gold" className="mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-ivory/70 italic">
            Each work is catalogued with the care of an archive — its origin,
            its year, the hands that made it.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.slug} delay={(i % 3) * 0.1}>
              <ProductCard product={product} index={i} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
