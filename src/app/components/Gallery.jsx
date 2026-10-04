"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Grid2X2, X, ZoomIn } from "lucide-react";
import Reveal from "./Reveal";
import { villaImages } from "./villa-data";

const filters = ["Semua", "Villa", "Kamar", "Sekitar"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [activeIndex, setActiveIndex] = useState(null);
  const filteredImages = villaImages.gallery.filter(
    (image) => activeFilter === "Semua" || image.category === activeFilter,
  );
  const activeImage = activeIndex === null ? null : filteredImages[activeIndex];

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    document.addEventListener("keydown", closeWithEscape);
    document.body.style.overflow = activeImage ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeWithEscape);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  const moveLightbox = (direction) => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex + direction + filteredImages.length) % filteredImages.length;
    });
  };

  return (
    <section id="gallery" className="overflow-hidden bg-paper-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta">Ruang & ritme</p>
            <h2 className="max-w-xl font-serif text-5xl leading-[0.92] text-ink md:text-7xl">Lihat lebih dekat.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted md:text-right">Pilih sudut yang ingin kamu lihat, lalu buka foto untuk menjelajah satu per satu.</p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center gap-2 border-y border-ink/15 py-4">
          <div className="mr-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
            <Grid2X2 size={14} strokeWidth={1.5} aria-hidden="true" />
            <span>Galeri</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setActiveIndex(null);
              }}
              className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                activeFilter === filter ? "bg-ink text-paper" : "text-muted hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
          <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">{filteredImages.length} foto</span>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <Reveal key={image.label} delay={index * 70} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative block w-full overflow-hidden text-left ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                aria-label={`Buka foto: ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper lg:p-7">
                  <div>
                    <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#f0a27d]">{image.label} / {image.category}</p>
                    <h3 className="font-serif text-2xl leading-none lg:text-3xl">{image.title}</h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-paper/40 text-paper transition group-hover:border-[#f0a27d] group-hover:text-[#f0a27d]">
                    <ZoomIn size={15} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label="Preview foto gallery">
          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Tutup preview foto" className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-paper/30 text-paper transition hover:border-[#f0a27d] hover:text-[#f0a27d] sm:right-8 sm:top-8">
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => moveLightbox(-1)} aria-label="Foto sebelumnya" className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 text-paper transition hover:border-[#f0a27d] hover:text-[#f0a27d] sm:left-8">
            <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <div className="relative h-[72vh] w-full max-w-5xl">
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" className="object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-5 pb-5 pt-20 text-paper sm:px-8 sm:pb-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#f0a27d]">{activeImage.label} / {activeImage.category}</p>
              <p className="mt-2 font-serif text-3xl">{activeImage.title}</p>
            </div>
          </div>
          <button type="button" onClick={() => moveLightbox(1)} aria-label="Foto berikutnya" className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-paper/30 text-paper transition hover:border-[#f0a27d] hover:text-[#f0a27d] sm:right-8">
            <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-[0.2em] text-paper/50">{activeIndex + 1} / {filteredImages.length}</p>
        </div>
      )}
    </section>
  );
}
