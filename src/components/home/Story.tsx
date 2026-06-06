import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { brand } from "@/data/brand";
import { images } from "@/data/images";

const storyImg = images.story.store;

const pillars = [
  {
    icon: Heart,
    title: "Family-run",
    description:
      "Three generations behind the counter — the same family, the same recipes.",
  },
  {
    icon: Sparkles,
    title: "Made fresh, daily",
    description:
      "Fruits handpicked every morning. No pre-mixes, no shortcuts — ever.",
  },
  {
    icon: Users,
    title: "Loved by locals",
    description:
      "A neighbourhood name Vadodara families have grown up with.",
  },
];

export function Story() {
  return (
    <section id="story" className="py-32 sm:py-48">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[image:var(--gradient-cta)] blur-2xl opacity-70" />
            <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-card)]">
              <img
                src={storyImg}
                alt="Families enjoying ice cream and juices at our parlour"
                width={1200}
                height={1400}
                loading="lazy"
                className="aspect-[5/6] size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)] sm:block">
              <div className="font-display text-2xl font-bold text-brand-orange">
                Since {brand.foundedYear}
              </div>
              <div className="text-xs text-muted-foreground">
                Vadodara's favourite
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Serving customers since 1980."
              subtitle="What started as a single neighbourhood parlour in Vadodara has stayed true to one promise — fresh fruits, real cream, honest recipes, and a smile across the counter."
              align="left"
              className="mb-8 max-w-none"
            />

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                For over four decades, Rajrajeshwari has been part of the
                everyday rhythm of Vadodara — the after-school treat, the
                Sunday family outing, the quick orange juice on the way home.
              </p>
              <p>
                Every morning, our team handpicks fresh seasonal fruits and
                prepares ice cream the slow, honest way. The same way we did
                in 1980. The same way we always will.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)]"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cream text-brand-orange">
                    <p.icon className="size-5" />
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
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-accent"
            >
              Visit your nearest branch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
