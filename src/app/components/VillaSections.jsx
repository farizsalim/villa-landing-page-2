import Image from "next/image";
import {
  ArrowUpRight,
  Globe2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { FaAirbnb, FaWhatsapp } from "react-icons/fa";
import { SiBookingdotcom } from "react-icons/si";
import Reveal from "./Reveal";
import { bookingOptions, reviews, villaImages } from "./villa-data";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[720px] items-end overflow-hidden bg-forest text-paper lg:min-h-screen">
      <Image
        src={villaImages.hero.src}
        alt={villaImages.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/15" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/55 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 pb-20 pt-40 lg:px-12 lg:pb-28">
        <div className="max-w-3xl">
          <p className="animate-rise-in mb-6 text-[10px] font-bold uppercase tracking-[0.35em] text-[#f0a27d]">Tegallalang, Ubud</p>
          <h1 className="animate-rise-in text-balance font-serif text-6xl leading-[0.86] tracking-[-0.02em] text-white delay-150 sm:text-8xl lg:text-[9.5rem]">
            Stay close
            <br />
            <span className="italic text-[#f0a27d]">to wonder.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="animate-rise-in max-w-sm text-sm leading-7 text-white/75 delay-300">
              Sebuah villa privat untuk mereka yang ingin melambat, mendengar alam, dan pulang dengan cerita baru.
            </p>
            <a href="#booking" className="animate-rise-in inline-flex w-fit items-center gap-4 border-b border-[#f0a27d] pb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white delay-300 transition hover:text-[#f0a27d]">
              Mulai perjalanan <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 hidden items-center gap-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white/60 lg:flex lg:right-12">
        <span>Scroll untuk menjelajah</span>
        <span className="h-px w-16 bg-white/50" />
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="bg-paper py-24 lg:py-36">
      <Reveal className="mx-auto grid max-w-[1360px] gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-28 lg:px-12">
        <div className="relative lg:pl-12">
          <div className="absolute -left-1 top-10 hidden h-40 w-px bg-terracotta lg:block" />
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={villaImages.story.src} alt={villaImages.story.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-7 -right-4 bg-terracotta px-6 py-5 text-paper sm:-right-8">
            <p className="font-serif text-4xl leading-none">450</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em]">m² of quiet</p>
          </div>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta">The Villa Aura story</p>
          <h2 className="max-w-2xl font-serif text-5xl leading-[0.93] text-ink sm:text-6xl lg:text-8xl">Dibuat untuk merasa hadir.</h2>
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 sm:grid-cols-2">
            <p className="text-sm leading-7 text-muted">Kami percaya kemewahan bukan tentang memiliki lebih banyak. Ia tentang memiliki ruang untuk memperhatikan: cahaya pagi, suara air, dan percakapan yang tidak terburu-buru.</p>
            <p className="text-sm leading-7 text-muted">Material lokal, garis arsitektur yang bersih, dan pemandangan hutan Ubud menyusun tempat tinggal yang hangat. Tidak dibuat untuk dipamerkan, dibuat untuk dirasakan.</p>
          </div>
          <div className="mt-10 flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.22em] text-ink">
            <span className="h-px w-12 bg-terracotta" />
            <span>Slow living, deeply personal</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Journal() {
  return (
    <section id="journal" className="bg-forest py-24 text-paper lg:py-32">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-12">
        <Reveal className="flex flex-col justify-between gap-6 border-b border-paper/20 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0a27d]">A few good words</p>
            <h2 className="font-serif text-5xl leading-none sm:text-6xl">Dari mereka yang pernah tinggal.</h2>
          </div>
          <p className="max-w-xs text-xs leading-6 text-paper/60">Tiga malam, lima hari, atau sekadar satu sore. Setiap kunjungan punya ritmenya sendiri.</p>
        </Reveal>

        <Reveal delay={100} className="flex flex-col justify-between gap-6 border-b border-paper/20 py-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center bg-paper text-xl font-bold text-[#4285f4]">G</div>
            <div>
              <p className="text-sm font-bold text-paper">Google Reviews</p>
              <p className="mt-1 text-xs text-paper/55">Pengalaman tamu terverifikasi</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-serif text-5xl leading-none text-[#f0a27d]">4.9</span>
            <div>
              <div className="flex gap-1 text-[#f0a27d]" aria-label="Rating 4.9 dari 5">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}
              </div>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-paper/55">120+ ulasan publik</p>
            </div>
            <span className="flex items-center gap-2 border border-paper/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-paper/70"><ShieldCheck size={13} strokeWidth={1.5} aria-hidden="true" /> Terverifikasi</span>
          </div>
        </Reveal>

        <div className="grid gap-0 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 100} className={`border-b border-paper/20 py-10 md:border-b-0 md:px-8 md:py-12 ${index > 0 ? "md:border-l" : "md:pl-0"}`}>
              <p className="mb-10 font-serif text-5xl text-[#f0a27d]">“</p>
              <blockquote className="min-h-32 text-lg leading-8 text-paper/90">{review.quote}</blockquote>
              <div className="mt-8 flex items-start justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.18em]">
                <div>
                  <p>{review.name}</p>
                  <p className="mt-2 text-paper/45">{review.detail}</p>
                </div>
                <div className="text-right text-paper/45">
                  <div className="mb-2 flex justify-end gap-0.5 text-[#f0a27d]">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={11} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />)}</div>
                  <p>{review.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="bg-paper-deep py-24 lg:py-32">
      <Reveal className="mx-auto grid max-w-[1360px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24 lg:px-12">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta">Find your way here</p>
          <h2 className="font-serif text-6xl leading-[0.9] text-ink">Di antara hijau dan hening.</h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-muted">Villa Aura berada di Tegallalang, 20 menit dari pusat Ubud dan dikelilingi sawah, studio kerajinan, serta jalur-jalur kecil untuk tersesat dengan sengaja.</p>
          <div className="mt-10 border-t border-ink/15 pt-6 text-xs leading-6 text-muted">
            <p className="font-bold uppercase tracking-[0.18em] text-ink">Tegallalang, Gianyar</p>
            <p className="mt-1">45 menit dari Bandara Ngurah Rai / 20 menit ke pusat Ubud</p>
          </div>
        </div>
        <div className="relative min-h-[390px] overflow-hidden border border-ink/15 bg-paper lg:min-h-[510px]">
          <iframe
            title="Peta lokasi Villa Aura di Tegallalang, Ubud"
            src="https://www.google.com/maps?q=Tegallalang%2C%20Ubud%2C%20Bali&output=embed&z=13"
            className="absolute inset-0 h-full w-full border-0 grayscale-[0.25]"
            loading="lazy"
            allowFullScreen
          />
          <div className="pointer-events-none absolute left-5 top-5 bg-ink px-4 py-3 text-paper shadow-lg lg:left-7 lg:top-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#f0a27d]">Villa Aura / Bali</p>
            <p className="mt-1 font-serif text-xl leading-none">Tegallalang, Ubud</p>
          </div>
          <a href="https://maps.google.com/?q=Tegallalang,Ubud,Bali" target="_blank" rel="noreferrer" className="absolute bottom-5 left-5 flex items-center gap-3 bg-paper px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-ink shadow-lg transition hover:bg-terracotta hover:text-paper lg:bottom-7 lg:left-7">
            Buka di Maps <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Booking() {
  const iconForPlatform = (icon) => {
    if (icon === "whatsapp") return FaWhatsapp;
    if (icon === "airbnb") return FaAirbnb;
    if (icon === "agoda") return Globe2;
    return SiBookingdotcom;
  };

  return (
    <section id="booking" className="bg-terracotta px-6 py-24 text-paper lg:px-12 lg:py-32">
      <Reveal className="mx-auto max-w-[1360px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-paper/70">Your stay begins here</p>
            <h2 className="max-w-3xl font-serif text-6xl leading-[0.88] sm:text-8xl">Berikan ruang untuk sesuatu yang baru.</h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm leading-7 text-paper/80">Hanya tiga villa, satu pengalaman yang sangat personal. Hubungi kami untuk mengecek tanggal dan mulai merencanakan jeda Anda.</p>
            <a href="mailto:stay@villaaura.id" className="mt-8 inline-flex items-center gap-4 border-b border-paper pb-3 text-[10px] font-bold uppercase tracking-[0.22em] transition hover:text-ink">
              stay@villaaura.id <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-3 border-t border-paper/30 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {bookingOptions.map((option) => {
            const Icon = iconForPlatform(option.icon);
            return (
              <a key={option.name} href={option.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border border-paper/30 px-5 py-4 transition hover:border-paper hover:bg-paper hover:text-terracotta">
                <span className="flex items-center gap-4">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-bold">{option.name}</span>
                    <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.15em] opacity-60">{option.detail}</span>
                  </span>
                </span>
                <ArrowUpRight size={16} strokeWidth={1.5} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-paper lg:px-12">
      <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <a href="#home" className="font-serif text-3xl tracking-[0.12em]">VA</a>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/45">© 2026 Villa Aura / Ubud, Bali</p>
        <a href="mailto:stay@villaaura.id" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/70 transition hover:text-terracotta">stay@villaaura.id</a>
      </div>
    </footer>
  );
}
