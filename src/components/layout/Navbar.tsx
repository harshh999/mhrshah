import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";
import { brand } from "@/data/brand";

const links = [
  { to: "/", label: "Home", isAnchor: false },
  { to: "/menu", label: "Menu", isAnchor: false },
  { to: "/#locations", label: "Locations", isAnchor: true },
  { to: "/contact", label: "Contact", isAnchor: false },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLocationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (window.location.hash.startsWith("#/menu") || window.location.hash.startsWith("#/contact")) {
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          ? "border-b border-white/20 bg-[var(--cream)]/80 backdrop-blur-xl shadow-[var(--shadow-card)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container as="div" className="flex h-20 items-center justify-between px-4 sm:px-10 sm:h-24">
        <Link
          to="/"
          aria-label={brand.fullName}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange mr-2"
          onClick={() => setOpen(false)}
        >
          <BrandLogo size="sm" className="size-9 sm:size-10 shrink-0" />
          <div className="flex flex-col leading-tight min-w-0">
            <span
              className={cn(
                "font-display text-[15px] sm:text-base font-semibold tracking-tight truncate",
                scrolled || open ? "text-foreground" : "text-white drop-shadow",
              )}
            >
              {brand.short}
            </span>
            <span
              className={cn(
                "text-[8.5px] xs:text-[9.5px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] uppercase truncate",
                scrolled || open ? "text-muted-foreground" : "text-white/80",
              )}
            >
              Juice · Ice Cream · Falooda
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                {l.isAnchor ? (
                  <a
                    href="#locations"
                    onClick={handleLocationsClick}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer",
                      scrolled
                        ? "text-foreground/80 hover:bg-cream hover:text-foreground"
                        : "text-white/90 hover:bg-white/15 hover:text-white"
                    )}
                  >
                    {l.label}
                  </a>
                ) : (
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange",
                      scrolled
                        ? (isActive
                            ? "bg-cream text-foreground font-semibold"
                            : "text-foreground/80 hover:bg-cream hover:text-foreground")
                        : (isActive
                            ? "bg-white/20 text-white font-semibold"
                            : "text-white/90 hover:bg-white/15 hover:text-white")
                    )}
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/menu"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all hover:bg-orange-600 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            Order Now
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full transition-colors md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange",
            scrolled || open
              ? "text-foreground hover:bg-cream"
              : "text-white hover:bg-white/15",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile menu — full screen slide-in */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 bg-background/95 backdrop-blur-xl md:hidden transition-all duration-300",
          open
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <Container className="flex flex-col gap-2 pt-8">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                {l.isAnchor ? (
                  <a
                    href="#locations"
                    onClick={handleLocationsClick}
                    className="block rounded-xl px-4 py-4 text-lg font-medium text-foreground/80 hover:bg-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer"
                  >
                    {l.label}
                  </a>
                ) : (
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    end={l.to === "/"}
                    className={({ isActive }) => cn(
                      "block rounded-xl px-4 py-4 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange",
                      isActive
                        ? "bg-cream font-semibold text-foreground"
                        : "text-foreground/80 hover:bg-cream"
                    )}
                  >
                    {l.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/menu"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 text-base font-semibold text-white shadow-[var(--shadow-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            Order Now
            <ArrowRight className="size-5" />
          </Link>
        </Container>
      </div>
    </header>
  );
}
