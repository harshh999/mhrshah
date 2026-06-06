import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";
import { brand } from "@/data/brand";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/locations", label: "Locations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md shadow-[var(--shadow-card)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container as="div" className="flex h-20 items-center justify-between sm:h-24">
        <Link
          to="/"
          aria-label={brand.fullName}
          className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          onClick={() => setOpen(false)}
        >
          <BrandLogo size="sm" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span
              className={cn(
                "font-display text-base font-semibold tracking-tight",
                scrolled || open ? "text-foreground" : "text-white drop-shadow",
              )}
            >
              {brand.short}
            </span>
            <span
              className={cn(
                "text-[10px] tracking-[0.18em] uppercase",
                scrolled || open ? "text-muted-foreground" : "text-white/80",
              )}
            >
              Ice Cream · Juice · Falooda
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    scrolled
                      ? "text-foreground/80 hover:bg-cream hover:text-foreground"
                      : "text-white/90 hover:bg-white/15 hover:text-white",
                  )}
                  activeProps={{
                    className: cn(
                      "rounded-full px-4 py-2 text-sm font-semibold",
                      scrolled
                        ? "bg-cream text-foreground"
                        : "bg-white/20 text-white",
                    ),
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/menu"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[image:var(--gradient-warm)] px-5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            Explore Menu
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full transition-colors md:hidden",
            scrolled || open
              ? "text-foreground hover:bg-cream"
              : "text-white hover:bg-white/15",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          "overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-cream"
                  activeProps={{
                    className:
                      "block rounded-xl bg-cream px-4 py-3 text-base font-semibold text-foreground",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/menu"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full bg-[image:var(--gradient-warm)] px-5 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
          >
            Explore Menu
          </Link>
        </Container>
      </div>
    </header>
  );
}
