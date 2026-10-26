import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--gradient-premium)] px-6 py-16 text-center shadow-[var(--shadow-lift)] sm:px-12 sm:py-20">
          {/* Animated background blobs */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/15 blur-3xl animate-[float_6s_ease-in-out_infinite]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 size-80 rounded-full bg-white/10 blur-3xl animate-[float_8s_ease-in-out_infinite_1s]"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              Ready For Something{" "}
              <span className="underline decoration-white/40 decoration-2 underline-offset-4">
                Refreshing?
              </span>
            </h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">
              Visit Shree Rajrajeshwari Juice & Ice Cream Parlour today
              and experience the flavours loved by Vadodara for generations.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/menu"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand-orange transition-all hover:bg-white/90 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-purple"
              >
                Explore Menu
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/locations"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MapPin className="size-4" />
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
