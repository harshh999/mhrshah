import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { bestSellers } from "@/data/products";

export function BestSellers() {
  return (
    <section id="favorites" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Customer Favorites"
          title="The most loved across all locations."
          subtitle="From iconic faloodas to indulgent thick shakes — these are the names our regulars ask for by heart."
        />

        <ul className="flex flex-wrap gap-8">
          {bestSellers.map((p) => (
            <li key={p.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border/60 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
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
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-wider text-brand-orange uppercase shadow-sm backdrop-blur">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
