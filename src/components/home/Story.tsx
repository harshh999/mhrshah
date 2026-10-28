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
    <section id="story" className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[image:var(--gradient-cta)] blur-2xl opacity-70" />
            
            {/* Storefront Photo */}
            <div className="relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              <img
                src="/images/story/story-store.jpg"
                alt="Shree Rajrajeshwari parlour storefront"
                width={1200}
                height={1400}
                loading="lazy"
                className="aspect-[4/4.5] size-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] sm:block">
              <div className="font-display text-xl font-bold text-brand-orange">
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
              subtitle="For over four decades, Shree Rajrajeshwari has been serving pure fruit goodness across Vadodara."
              align="left"
              className="mb-4 max-w-none"
            />

            <div className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                From a humble family shop in 1980 to beloved outlets citywide, we still make every juice and slow-churned ice cream the exact same honest way — handpicked fresh seasonal fruits, zero artificial additives, and recipes loved across generations.
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-[var(--radius-card)] border border-border/60 bg-card p-4 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-cream text-lg">
                    {p.emoji}
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#locations"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded cursor-pointer"
            >
              Visit your nearest branch →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
