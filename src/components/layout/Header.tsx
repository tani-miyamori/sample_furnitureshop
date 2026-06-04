"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "/collection", label: "Collection" },
  { href: "/heritage", label: "Heritage" },
  { href: "/#enquire", label: "Enquire" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "bg-ivory/95 py-4 shadow-[0_1px_0_0_rgba(11,27,61,0.12)] backdrop-blur"
          : "bg-transparent py-7"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className={`font-display text-xl tracking-[0.35em] transition-colors duration-700 ${
            scrolled ? "text-navy" : "text-ivory"
          }`}
        >
          MAISON
          <span className="text-gold">·</span>
          CLASSIQUE
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative caption-label transition-colors duration-700 ${
                scrolled ? "text-navy" : "text-ivory/90"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
