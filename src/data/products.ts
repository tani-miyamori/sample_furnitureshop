export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  origin: string;
  year: string;
  material: string;
  dimensions: string;
  price: string;
  image: string;
  description: string;
  provenance: string;
};

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  {
    slug: "the-windsor-wingback",
    name: "The Windsor Wingback",
    subtitle: "Hand-tufted leather armchair",
    origin: "England",
    year: "Est. 1887",
    material: "Aged calfskin · solid oak frame",
    dimensions: "H 102 · W 84 · D 90 cm",
    price: "€ 5,600",
    image: u("photo-1586023492125-27b2c045efd7"),
    description:
      "A study in restraint and quiet authority. Each Windsor is upholstered by a single craftsman over the course of three weeks, the calfskin drawn taut by hand and finished with a patina that only deepens with the decades.",
    provenance:
      "Modelled on a reading chair commissioned for a private library in Mayfair, the silhouette has remained unchanged for over a century.",
  },
  {
    slug: "salon-canape-louis",
    name: "Salon Canapé Louis",
    subtitle: "Carved giltwood settee",
    origin: "France",
    year: "Est. 1903",
    material: "Hand-carved beech · gold leaf · damask",
    dimensions: "H 96 · W 168 · D 72 cm",
    price: "€ 9,200",
    image: u("photo-1538688525198-9b88f6f53126"),
    description:
      "An exercise in courtly grace. The frame is carved from a single section of seasoned beech, gilded leaf by leaf, then dressed in a woven damask spun on looms that have served the same atelier for five generations.",
    provenance:
      "Inspired by the salons of the Faubourg Saint-Germain, where conversation was considered the highest of the decorative arts.",
  },
  {
    slug: "biblioteca-walnut-cabinet",
    name: "Biblioteca Walnut Cabinet",
    subtitle: "Inlaid display cabinet",
    origin: "Italy",
    year: "Est. 1921",
    material: "Burl walnut · brass · hand-blown glass",
    dimensions: "H 198 · W 120 · D 46 cm",
    price: "€ 12,400",
    image: u("photo-1595428774223-ef52624120d2"),
    description:
      "A cabinet conceived as architecture. The burl walnut is book-matched across its doors so the grain mirrors itself like a turning page, framed in brass drawn to a soft, unlacquered glow.",
    provenance:
      "The marquetry technique descends from the cabinetmakers of Lombardy, who treated furniture as the binding of a great manuscript.",
  },
  {
    slug: "marble-console-imperiale",
    name: "Console Impériale",
    subtitle: "Marble-topped console",
    origin: "Italy",
    year: "Est. 1935",
    material: "Carrara marble · patinated bronze",
    dimensions: "H 88 · W 140 · D 40 cm",
    price: "€ 7,600",
    image: u("photo-1567538096630-e0c55bd6374c"),
    description:
      "Cool Carrara, quarried from the same hillsides Michelangelo favoured, rests upon a frame of patinated bronze. A piece that asks for little and rewards with a lifetime of presence.",
    provenance:
      "Each slab is selected for the movement of its veining, no two consoles alike.",
  },
  {
    slug: "the-heritage-four-poster",
    name: "The Heritage Four-Poster",
    subtitle: "Mahogany bed frame",
    origin: "England",
    year: "Est. 1869",
    material: "Cuban mahogany · hand-turned posts",
    dimensions: "H 224 · W 168 · L 210 cm",
    price: "€ 13,800",
    image: u("photo-1505693416388-ac5ce068fe85"),
    description:
      "Four hand-turned posts rise to a quiet canopy, the mahogany hand-rubbed to a depth of colour that catches the morning light. Built to be inherited.",
    provenance:
      "Turned on a pole lathe by the same workshop that has supplied English country houses since the reign of Victoria.",
  },
  {
    slug: "atelier-writing-desk",
    name: "Atelier Writing Desk",
    subtitle: "Leather-topped bureau",
    origin: "France",
    year: "Est. 1912",
    material: "Rosewood · embossed leather · brass",
    dimensions: "H 78 · W 130 · D 66 cm",
    price: "€ 8,350",
    image: u("photo-1503602642458-232111445657"),
    description:
      "A desk for correspondence of consequence. The rosewood is finished with a hand-embossed leather top, its gilt border tooled by a single artisan in the old manner.",
    provenance:
      "A near-faithful reissue of a bureau plat once kept in a Parisian publishing house.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
