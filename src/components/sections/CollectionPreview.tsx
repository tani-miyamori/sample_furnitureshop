import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import OrnamentDivider from "@/components/ui/OrnamentDivider";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function CollectionPreview() {
  const featured = products.slice(0, 3);

  return (
    <section className="relative bg-marble py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="text-center">
          <p className="caption-label text-gold">Curated Works</p>
          <h2 className="mt-4 font-display text-5xl text-navy">The Collection</h2>
          <OrnamentDivider className="mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-ink/65 italic">
            A small selection from the gallery, each presented as one might
            hang a painting — with room to breathe.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <ProductCard product={product} index={i} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20 text-center">
          <Link
            href="/collection"
            className="group inline-flex items-center gap-3 caption-label text-navy"
          >
            View the full collection
            <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
