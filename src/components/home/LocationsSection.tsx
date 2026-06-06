import { MapPin, Phone, Navigation } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { locations, mapsHref } from "@/data/locations";
import { brand } from "@/data/brand";

export function LocationsSection() {
  return (
    <section id="locations" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Locations"
          title="Visit your nearest branch."
          subtitle={`Five cheerful neighbourhood parlours across Vadodara — open ${brand.hours}.`}
        />

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {locations.map((loc) => (
            <li key={loc.id} id={loc.id} className="scroll-mt-24">
              <article className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[image:var(--gradient-warm)] text-white">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="font-display text-lg text-foreground">{loc.name}</h3>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {loc.address}
                </p>

                <a
                  href={brand.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-orange"
                >
                  <Phone className="size-4" />
                  {loc.phone}
                </a>

                <a
                  href={mapsHref(loc.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold text-background transition-colors hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                >
                  <Navigation className="size-4" />
                  Get Directions
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
