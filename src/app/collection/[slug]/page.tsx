import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/ui/FadeIn";
import OrnamentDivider from "@/components/ui/OrnamentDivider";
import { products, getProduct } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found — Maison Classique" };
  return {
    title: `${product.name} — Maison Classique`,
    description: product.subtitle,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const specs = [
    { label: "Origin", value: product.origin },
    { label: "Atelier", value: product.year },
    { label: "Materials", value: product.material },
    { label: "Dimensions", value: product.dimensions },
  ];

  return (
    <article className="bg-ivory pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Link
          href="/collection"
          className="group inline-flex items-center gap-3 caption-label text-navy/70 hover:text-navy"
        >
          <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
          Back to the Collection
        </Link>

        <div className="mt-12 grid gap-16 pb-28 lg:grid-cols-2">
          {/* Image */}
          <FadeIn>
            <div className="gold-frame relative aspect-[4/5] overflow-hidden bg-marble">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Details */}
          <FadeIn delay={0.1} className="lg:py-6">
            <p className="caption-label text-gold">
              {product.origin} &nbsp;·&nbsp; {product.year}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-navy">
              {product.name}
            </h1>
            <p className="mt-3 text-xl italic text-ink/60">{product.subtitle}</p>

            <OrnamentDivider className="my-8 !mx-0" />

            <p className="text-lg leading-relaxed text-ink/75">
              {product.description}
            </p>

            <dl className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between py-4"
                >
                  <dt className="caption-label text-navy/55">{spec.label}</dt>
                  <dd className="font-display text-lg text-navy">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 font-display text-3xl text-navy">
              {product.price}
            </p>

            <a
              href="mailto:concierge@maisonclassique.com"
              className="classic-frame mt-8 inline-block bg-navy px-10 py-4 caption-label text-ivory transition-colors duration-500 hover:bg-navy-soft"
            >
              Enquire about this piece
            </a>
          </FadeIn>
        </div>

        {/* Provenance band */}
        <section className="relative mb-28 overflow-hidden bg-navy px-8 py-20 text-center text-ivory lg:px-20">
          <span
            aria-hidden
            className="font-script pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] leading-none text-gold-soft opacity-[0.07]"
          >
            Provenance
          </span>
          <div className="relative mx-auto max-w-2xl">
            <p className="caption-label text-gold">Provenance</p>
            <p className="mt-6 font-display text-2xl italic leading-relaxed text-ivory/90 sm:text-3xl">
              “{product.provenance}”
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
