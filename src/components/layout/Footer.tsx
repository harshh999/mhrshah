import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock } from "lucide-react";
import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";
import { brand } from "@/data/brand";
import { locations } from "@/data/locations";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/#locations", label: "Locations", isAnchor: true },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  const handleScrollTo = (id: string) => {
    if (window.location.hash.startsWith("#/menu") || window.location.hash.startsWith("#/contact")) {
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative mt-24 bg-brand-charcoal text-white">
      <Container className="relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <BrandLogo size="md" variant="light" />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">{brand.short}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                Since {brand.foundedYear}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            {brand.description}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            >
              <Instagram className="size-4" />
              {brand.instagramHandle}
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                {"isAnchor" in l && l.isAnchor ? (
                  <a
                    href="#locations"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo("locations");
                    }}
                    className="text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded cursor-pointer"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.to}
                    className="text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal rounded"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 size-4 shrink-0" />
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {brand.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0" />
              <span>{brand.hours}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{brand.city}</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Our Branches
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {locations.map((loc) => (
              <li key={loc.id}>
                <a
                  href={`#${loc.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(loc.id);
                  }}
                  className="text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded cursor-pointer"
                >
                  {loc.name}, Vadodara
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {brand.fullName}. All rights reserved.</p>
          <p>Made with care in {brand.city}.</p>
        </Container>
      </div>
    </footer>
  );
}
