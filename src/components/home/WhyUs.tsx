import { Leaf, IceCream2, ChefHat, Users, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { features } from "@/data/features";

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  IceCream2,
  ChefHat,
  Users,
};

export function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why people love us"
          title="Made fresh. Served with care."
          subtitle="The little things we never compromise on — even after all these years."
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = iconMap[f.icon] ?? Leaf;
            return (
              <li key={f.title}>
                <article className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-warm)] text-white shadow-[var(--shadow-glow)] transition-transform duration-500 group-hover:rotate-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-display text-lg text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
