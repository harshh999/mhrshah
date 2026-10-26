import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/layout/Container";
import { brand } from "@/data/brand";

const stats = [
  { value: "40+", label: "Years of Trust" },
  { value: "100+", label: "Menu Items" },
  { value: "Fresh", label: "Fruits Daily" },
];

export function Hero() {
  return (
    <section id="hero" className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden">
      {/* Background video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero/hero.jpg"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <Container className="relative w-full py-28 sm:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center text-white">
          <div className="animate-[scale-in_0.7s_ease-out_both]">
            <BrandLogo size="xl" variant="light" />
          </div>

          <span
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-white/90 uppercase backdrop-blur animate-[fade-in_0.8s_ease-out_0.1s_both]"
          >
            <span className="size-1.5 rounded-full bg-brand-orange" />
            Since {brand.foundedYear} · Serving Vadodara
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl animate-[fade-up_0.8s_ease-out_0.15s_both]">
            {brand.taglineMain}
            <br />
            <span className="bg-[image:linear-gradient(135deg,#FFD180_0%,#FFAB40_100%)] bg-clip-text text-transparent">
              {brand.taglineSub}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-[fade-up_0.9s_ease-out_0.25s_both]">
            Serving handcrafted juices, premium milkshakes, faloodas, smoothies
            and ice creams loved by generations.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center animate-[fade-up_1s_ease-out_0.35s_both]">
            <Link
              to="/menu"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-7 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:bg-orange-600 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              Explore Menu
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/locations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MapPin className="size-4" />
              Find Location
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-12 flex items-center gap-8 animate-[fade-up_1.1s_ease-out_0.45s_both]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-8 w-px bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <ChevronDown
            aria-hidden
            className="size-6 text-white/80 animate-[scroll-cue_1.8s_ease-in-out_infinite]"
          />
        </div>
      </Container>
    </section>
  );
}
