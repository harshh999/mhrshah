import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  // Double the items for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-cream py-24 sm:py-32 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our customers say."
          subtitle="Don't just take our word for it — hear from the families who keep coming back."
        />
      </Container>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-24" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-24" />

        <div
          className="flex gap-6 px-6 animate-[scroll-marquee_30s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <article
              key={`${t.id}-${i}`}
              className="w-[320px] sm:w-[380px] shrink-0 rounded-[var(--radius-card)] border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>
              <Quote className="size-6 text-brand-orange/30 mb-2" />
              <p className="text-sm leading-relaxed text-foreground/80 italic">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-[image:var(--gradient-premium)] text-white text-sm font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.area}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
