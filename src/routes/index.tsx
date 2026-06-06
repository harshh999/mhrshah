import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { BestSellers } from "@/components/home/BestSellers";
import { WhyUs } from "@/components/home/WhyUs";
import { LocationsSection } from "@/components/home/LocationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.fullName} — Fresh Juice, Ice Cream & Falooda in Vadodara` },
      {
        name: "description",
        content: `Family-loved juice & ice cream parlour, serving Vadodara since ${brand.foundedYear}. Fresh juices, thick shakes, faloodas, ice creams & desserts made daily across 5 locations.`,
      },
      { property: "og:title", content: `${brand.fullName} — Vadodara` },
      {
        property: "og:description",
        content: `Family-loved juice & ice cream parlour, serving since ${brand.foundedYear}. 5 locations across Vadodara. Open ${brand.hours}.`,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <BestSellers />
      <WhyUs />
      <LocationsSection />
      <FinalCTA />
    </>
  );
}
