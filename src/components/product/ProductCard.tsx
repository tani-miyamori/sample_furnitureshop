import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index: number;
};

/** Museum-caption styled card: generous whitespace, navy accents, numbered. */
export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <Link href={`/collection/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-marble">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 font-display text-sm italic text-ivory drop-shadow">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-6 text-center">
        <p className="caption-label text-gold">
          {product.origin} &nbsp;·&nbsp; {product.year}
        </p>
        <h3 className="mt-3 font-display text-2xl text-navy transition-colors group-hover:text-gold">
          {product.name}
        </h3>
        <p className="mt-2 text-ink/60 italic">{product.subtitle}</p>
        <div className="mx-auto mt-4 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20" />
        <p className="mt-4 font-display text-lg text-navy/80">{product.price}</p>
      </div>
    </Link>
  );
}
