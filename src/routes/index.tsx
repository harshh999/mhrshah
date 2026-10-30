import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { LocationsSection } from "@/components/home/LocationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const footerEl = document.getElementById("site-footer");
    if (!heroEl || !footerEl) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        // Show the button when hero is no longer intersecting the viewport
        setShowFloatingCTA(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      },
    );

    heroObserver.observe(heroEl);
    footerObserver.observe(footerEl);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <Story />
      <WhyUs />
      <Testimonials />
      <LocationsSection />
      <FinalCTA />

      {/* Floating Explore Menu CTA */}
      <Link
        to="/menu"
        aria-label="Explore Menu"
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-orange px-6 text-sm font-semibold text-white shadow-[var(--shadow-lift)] border border-white/20 transition-all duration-300 ease-out hover:bg-orange-600 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2",
          showFloatingCTA && !isFooterVisible
            ? "translate-y-0 opacity-100 pointer-events-auto visible shadow-2xl"
            : "translate-y-4 opacity-0 pointer-events-none invisible",
        )}
      >
        <span>Explore Menu</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </>
  );
}
