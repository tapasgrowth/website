import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AboutJonathan } from "@/components/sections/AboutJonathan";
import { AboutSofie } from "@/components/sections/AboutSofie";
import { MenuSection } from "@/components/sections/MenuSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <ProblemAgitation />
        <HowItWorks />
        <AboutJonathan />
        <AboutSofie />
        <MenuSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
