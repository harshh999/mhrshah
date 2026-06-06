import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { menu } from "@/data/menu";
import { brand } from "@/data/brand";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: `Menu & Prices — ${brand.fullName}` },
      {
        name: "description",
        content:
          "Explore our full menu — fresh juices, milkshakes, thick shakes, ice creams, faloodas, smoothies, lassi, mocktails & fruit shorts. Made fresh daily across 5 locations in Vadodara.",
      },
      { property: "og:title", content: `Menu — ${brand.short}` },
      {
        property: "og:description",
        content:
          "150+ favourites across juices, shakes, faloodas, ice creams, smoothies, lassi and mocktails.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [activeId, setActiveId] = useState<string>(menu[0]?.id ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll-spy for category navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full bg-brand-orange/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 size-96 rounded-full bg-brand-red/10 blur-3xl"
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium tracking-wider text-brand-blue uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand-orange" />
              Our Menu
            </div>
            <h1 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              150+ ways to{" "}
              <span className="bg-[image:var(--gradient-warm)] bg-clip-text text-transparent">
                treat yourself
              </span>
              .
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Hand-picked classics and house signatures, made the honest way
              with quality ingredients. Prices in ₹.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-start animate-fade-in">
            {/* Desktop Sticky Category Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28 max-h-[calc(100vh-10rem)] overflow-y-auto space-y-4 rounded-3xl border border-border/60 bg-card p-5 shadow-[var(--shadow-card)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <h3 className="px-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/80">
                  Categories
                </h3>
                <nav className="flex flex-col gap-1.5">
                  {menu.map((s) => {
                    const isActive = activeId === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => handleScrollToSection(s.id)}
                        className={cn(
                          "w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl text-left text-sm font-medium transition-all duration-200 cursor-pointer",
                          isActive
                            ? "bg-[image:var(--gradient-warm)] text-white shadow-md font-semibold animate-scale-in"
                            : "text-foreground/75 hover:bg-cream hover:text-brand-orange"
                        )}
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <span className="text-base">{s.theme.emoji}</span>
                          <span className="truncate">{s.name}</span>
                        </span>
                        <span className={cn(
                          "text-xs font-semibold tabular-nums px-2 py-0.5 rounded-full",
                          isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                        )}>
                          {s.items.length}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Sections Column */}
            <div className="space-y-16 lg:col-span-9 lg:space-y-24">
              {menu.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  className="scroll-mt-24 lg:scroll-mt-28"
                >
                  {/* Themed banner */}
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-3xl bg-gradient-to-br p-7 shadow-[var(--shadow-card)] sm:p-10",
                      section.theme.gradient,
                    )}
                  >
                    <div className="relative max-w-2xl">
                      <h2
                        className={cn(
                          "font-display text-3xl font-bold tracking-tight sm:text-5xl",
                          section.theme.accent,
                        )}
                      >
                        {section.name}
                      </h2>
                      {section.description && (
                        <p
                          className={cn(
                            "mt-3 max-w-xl text-sm sm:text-base",
                            section.theme.accent,
                            "opacity-90",
                          )}
                        >
                          {section.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Items grid */}
                  <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-card)]">
                    {section.altLabel && (
                      <div className="hidden grid-cols-[1fr_auto_auto] gap-x-6 border-b border-border/60 bg-cream px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:grid">
                        <span>Item</span>
                        <span className="text-right">Plain</span>
                        <span className="w-24 text-right">{section.altLabel}</span>
                      </div>
                    )}
                    <ul className="grid grid-cols-1 md:grid-cols-2">
                      {section.items.map((item, idx) => (
                        <li
                          key={item.name}
                          className={cn(
                            "flex items-baseline justify-between gap-4 border-border/60 px-6 py-4",
                            idx < section.items.length - 1 && "border-b",
                            "md:[&:nth-child(odd)]:border-r",
                            "md:[&:nth-last-child(2):nth-child(odd)]:border-b-0",
                          )}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-baseline gap-2">
                              <h3 className="font-display text-[15px] font-semibold text-foreground sm:text-base">
                                {item.name}
                              </h3>
                              {item.badge && (
                                <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-brand-orange uppercase">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="mt-1 text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <div className={cn(
                            "flex shrink-0 tabular-nums",
                            item.priceAlt !== undefined 
                              ? "flex-col items-end justify-center gap-1 sm:flex-row sm:items-baseline sm:gap-3" 
                              : "items-baseline"
                          )}>
                            <div className="flex items-baseline gap-1 sm:block">
                              {item.priceAlt !== undefined && (
                                <span className="text-[10px] font-medium text-muted-foreground sm:hidden mr-0.5">
                                  Plain:
                                </span>
                              )}
                              <span className="font-display text-base font-bold text-foreground">
                                ₹{item.price}
                              </span>
                            </div>
                            {item.priceAlt !== undefined && (
                              <div className="flex items-baseline gap-1 sm:block">
                                <span className="text-[10px] font-semibold text-brand-orange sm:hidden mr-0.5">
                                  Ice Cream:
                                </span>
                                <span className="font-display text-sm font-semibold text-brand-orange">
                                  ₹{item.priceAlt}
                                </span>
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl border border-border/60 bg-cream p-8 text-center shadow-[var(--shadow-card)] sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Hungry yet?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Walk in to your nearest branch — our team is always happy to recommend.
            </p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/locations"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:bg-brand-blue"
              >
                <MapPin className="size-4" />
                Find a location
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={brand.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-white px-6 text-sm font-semibold text-foreground hover:border-brand-orange hover:text-brand-orange"
              >
                Call {brand.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile Floating Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed bottom-6 right-6 z-40 lg:hidden flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-2xl hover:scale-105 active:scale-95 duration-200 transition-all border border-white/10 cursor-pointer"
      >
        <BookOpen className="size-4" />
        <span>Menu</span>
      </button>

      {/* Mobile Category Navigation Modal */}
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent className="max-w-[90vw] sm:max-w-md rounded-3xl p-6 overflow-hidden max-h-[80vh] flex flex-col border border-border/60 shadow-[var(--shadow-lift)] bg-background">
          <DialogHeader className="pb-4 border-b border-border/60">
            <DialogTitle className="font-display text-lg font-bold flex items-center gap-2 text-foreground">
              <BookOpen className="size-5 text-brand-orange" />
              Browse Categories
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground mt-1">
              Select a category to jump directly to it
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto py-4 space-y-2 pr-1 [scrollbar-width:thin]">
            {menu.map((s) => {
              const isActive = activeId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Slight delay to allow modal close animation and body scroll unlock to finish
                    setTimeout(() => {
                      handleScrollToSection(s.id);
                    }, 200);
                  }}
                  className="w-full flex items-center justify-between py-2 px-1 text-sm font-medium transition-colors hover:text-brand-orange cursor-pointer group"
                >
                  <span className="flex items-center gap-3 shrink-0">
                    <span className="text-base select-none">{s.theme.emoji}</span>
                    <span className={cn(
                      isActive ? "text-brand-orange font-bold" : "text-foreground group-hover:text-brand-orange"
                    )}>
                      {s.name}
                    </span>
                  </span>
                  {/* Dot Leader Line */}
                  <span className="mx-2 flex-1 border-b border-dotted border-border/60" />
                  <span className={cn(
                    "shrink-0 font-semibold tabular-nums text-xs px-2 py-0.5 rounded-full",
                    isActive ? "bg-brand-orange text-white" : "bg-muted text-muted-foreground group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                  )}>
                    {s.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
