import { Link } from "react-router-dom";
import { Store } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { brand } from "@/data/brand";

const pillars = [
  {
    emoji: "🍊",
    title: "Fresh Ingredients",
    description: "Daily sourced, seasonal fruits — no frozen, no artificial.",
  },
  {
    emoji: "🏪",
    title: "Family Legacy",
    description: "Serving generations since 1980 — the same family, the same recipes.",
  },
  {
    emoji: "⚡",
    title: "Made Fresh",
    description: "Prepared after every order — nothing pre-made, nothing stale.",
  },
];

export function Story() {
  return (
    <section id="story" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[image:var(--gradient-cta)] blur-2xl opacity-70" />
            
            {/* Shop Photo Placeholder Box */}
            <div className="relative flex aspect-[5/6] w-full flex-col items-center justify-center rounded-[var(--radius-card)] border-2 border-dashed border-stone-300 bg-stone-100 p-8 text-center text-stone-400 shadow-[var(--shadow-card)]">
              <Store className="size-16 stroke-[1.2] text-stone-400 mb-4" />
              <span className="font-display text-xl font-bold tracking-wide text-stone-600">Shop Photo</span>
              <span className="text-sm text-stone-400 mt-2 max-w-[240px]">
                Client will replace this placeholder with a real storefront photo later.
              </span>
            </div>

            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)] sm:block">
              <div className="font-display text-2xl font-bold text-brand-orange">
                Since {brand.foundedYear}
              </div>
              <div className="text-xs text-muted-foreground">
                Family Owned Since {brand.foundedYear}
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Vadodara's Favourite Juice & Ice Cream Destination"
              subtitle="For over four decades, Shree Rajrajeshwari Juice & Ice Cream Parlour has been a beloved part of Vadodara's fabric."
              align="left"
              className="mb-8 max-w-none"
            />

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                What began as a small family venture in 1980 has grown into a
                trusted destination with multiple locations across the city —
                each one serving the same promise: real fruits, fresh
                preparation, and flavors that bring generations together.
              </p>
              <p>
                Every morning, our team handpicks fresh seasonal fruits and
                prepares ice cream the slow, honest way. The same way we did
                in 1980. The same way we always will.
              </p>
              <p>
                Whether you're stopping by for our legendary Rajbhog Falooda after dinner or picking up a cold-pressed juice to beat the afternoon heat, you will experience the same care and premium quality that has defined us for over forty years.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-[var(--radius-card)] border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cream text-xl">
                    {p.emoji}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </li>
              ))}
            </ul>

            <Link
              to="/locations"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
            >
              Visit your nearest branch →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
