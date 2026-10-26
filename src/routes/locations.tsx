import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { LocationsSection } from "@/components/home/LocationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { brand } from "@/data/brand";
import { locations, mapsHref } from "@/data/locations";
import { Clock, Phone, Navigation, MapPin } from "lucide-react";

export default function LocationsPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-12 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Our Branches"
            title="Five parlours. One family."
            subtitle={`Open ${brand.hours} · Call ${brand.phone}`}
          />
        </Container>
      </section>

      <LocationsSection />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-10">
            {locations.map((loc) => (
              <article
                key={loc.id}
                id={`map-${loc.id}`}
                className="grid gap-6 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)] md:grid-cols-5"
              >
                <div className="p-7 md:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-[image:var(--gradient-warm)] text-white">
                      <MapPin className="size-5" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{loc.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {loc.address}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <Phone className="size-4 text-brand-orange" />
                      <a href={brand.phoneHref} className="hover:text-brand-orange">
                        {loc.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="size-4 text-brand-orange" />
                      {brand.hours}
                    </li>
                  </ul>
                  <a
                    href={mapsHref(loc.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-colors hover:bg-brand-purple"
                  >
                    <Navigation className="size-4" />
                    Get Directions
                  </a>
                </div>
                <div className="bg-cream md:col-span-3">
                  <iframe
                    title={`Map of ${loc.name} branch`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapsQuery)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[320px]"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
