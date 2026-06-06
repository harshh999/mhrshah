import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Container } from "@/components/layout/Container";
import { brand } from "@/data/brand";
import { images } from "@/data/images";

const heroImg = images.hero.image;

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100dvh] w-full items-center overflow-hidden">
      {/* Background image (LCP) */}
      {/* <img
        src={heroImg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      /> */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Warm overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0_0_0/0.30)_0%,oklch(0_0_0/0.70)_100%)]"
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
            Serving customers since {brand.foundedYear}
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl animate-[fade-up_0.8s_ease-out_0.15s_both]">
            Fresh Flavours{" "}
            <span className="bg-[image:linear-gradient(135deg,#FFD180_0%,#FFAB40_100%)] bg-clip-text text-transparent">
              for Every Generation.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-[fade-up_0.9s_ease-out_0.25s_both]">
            Built on tradition, driven by quality, and loved by generations.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center animate-[fade-up_1s_ease-out_0.35s_both]">
            <Link
              to="/menu"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-warm)] px-7 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            >
              Explore Menu
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/locations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MapPin className="size-4" />
              Find Locations
            </Link>
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
