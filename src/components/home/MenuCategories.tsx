import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { categories } from "@/data/categories";

export function MenuCategories() {
  return (
    <section id="categories" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Menu"
          title="A treat for every craving."
          subtitle="Seven categories. Over a hundred favourites. Made fresh, every single day."
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c) => (
            <li key={c.id}>
              <Link
                to="/menu"
                hash={c.id}
                aria-label={`Browse ${c.name} — ${c.itemCount}`}
                className="group block overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              >
                <article className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  />
                  {/* Item count badge */}
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-purple uppercase shadow-sm backdrop-blur">
                    {c.itemCount}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-2xl">{c.name}</h3>
                    <p className="mt-1 text-sm text-white/85">{c.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase">
                      Explore
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            to="/menu"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-charcoal px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            View Complete Menu
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
