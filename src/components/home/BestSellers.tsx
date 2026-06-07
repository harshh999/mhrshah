import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { bestSellers } from "@/data/products";

export function BestSellers() {
  return (
    <section id="favorites" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Customer Favorites"
          title="Loved by Generations."
          subtitle="From iconic faloodas to indulgent thick shakes — these are the names our regulars ask for by heart."
        />

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((p) => (
            <li key={p.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                {/* Product Photo */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {p.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase shadow-sm">
                      {p.tag}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-brand-orange">
                      ₹{p.price}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            to="/menu"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-charcoal px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            View Full Menu
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
