import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--gradient-cta)] px-6 py-16 text-center shadow-[var(--shadow-lift)] sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-[image:var(--gradient-warm)] opacity-25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 size-80 rounded-full bg-brand-red/25 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium tracking-wider text-brand-blue uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand-red" />
              Treat yourself
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Ready for something{" "}
              <span className="bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
                refreshing?
              </span>
            </h2>
            <p className="mt-4 text-base text-foreground/75 sm:text-lg">
              Visit your nearest Shree Rajrajeshwari Ice Cream & Juice Parlour
              today. Open daily, all year round.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/menu"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-colors hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              >
                Explore Menu
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-7 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                <MapPin className="size-4" />
                Find Locations
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
