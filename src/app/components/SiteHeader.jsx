"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#story", label: "Cerita" },
  { href: "#gallery", label: "Galeri" },
  { href: "#journal", label: "Jurnal" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? "border-white/10 bg-ink/95 py-4 text-paper backdrop-blur-md"
          : "border-transparent bg-transparent py-6 text-white"
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 lg:px-12">
        <a href="#home" className="group flex items-center gap-3" aria-label="Villa Aura home">
          <span className="font-serif text-3xl leading-none tracking-[0.12em]">VA</span>
          <span className="hidden border-l border-current/40 pl-3 text-[9px] font-semibold uppercase tracking-[0.3em] opacity-70 sm:block">
            Private villa
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-75 transition hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#booking"
            className="hidden border border-terracotta px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-terracotta transition hover:bg-terracotta hover:text-paper sm:block"
          >
            Cek ketersediaan
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center border border-current/30 text-lg md:hidden"
          >
            {isOpen ? <X size={18} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={18} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="absolute inset-x-0 top-full border-b border-white/10 bg-ink px-6 py-6 text-paper md:hidden" aria-label="Navigasi mobile">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold uppercase tracking-[0.22em]"
              >
                {item.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
              Cek ketersediaan
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}