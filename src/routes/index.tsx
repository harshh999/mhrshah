import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { BestSellers } from "@/components/home/BestSellers";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { LocationsSection } from "@/components/home/LocationsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <BestSellers />
      <WhyUs />
      <Testimonials />
      <LocationsSection />
      <FinalCTA />
    </>
  );
}
