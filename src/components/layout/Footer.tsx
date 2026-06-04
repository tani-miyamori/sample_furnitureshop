import Link from "next/link";
import OrnamentDivider from "@/components/ui/OrnamentDivider";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <p className="font-script text-5xl text-gold-soft">Maison Classique</p>
          <OrnamentDivider tone="gold" className="mt-6" />
        </div>

        <div className="mt-16 grid gap-12 border-t border-gold/20 pt-12 text-center md:grid-cols-3 md:text-left">
          <div>
            <h4 className="caption-label text-gold">The House</h4>
            <ul className="mt-5 space-y-3 text-ivory/75">
              <li>
                <Link href="/heritage" className="hover:text-gold-soft">
                  Heritage
                </Link>
              </li>
              <li>
                <Link href="/collection" className="hover:text-gold-soft">
                  The Collection
                </Link>
              </li>
              <li>Atelier &amp; Craft</li>
            </ul>
          </div>
          <div>
            <h4 className="caption-label text-gold">Enquiries</h4>
            <ul className="mt-5 space-y-3 text-ivory/75">
              <li>Private Viewings</li>
              <li>Bespoke Commissions</li>
              <li>concierge@maisonclassique.com</li>
            </ul>
          </div>
          <div>
            <h4 className="caption-label text-gold">Ateliers</h4>
            <ul className="mt-5 space-y-3 text-ivory/75">
              <li>London · Mayfair</li>
              <li>Paris · Saint-Germain</li>
              <li>Milano · Brera</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center caption-label text-ivory/45">
          © {new Date().getFullYear()} Maison Classique — European Heritage Furniture
        </p>
      </div>
    </footer>
  );
}
