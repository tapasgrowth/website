import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { Stats } from "@/components/sections/Stats";
import { AboutChef } from "@/components/sections/AboutChef";
import { MenuSection } from "@/components/sections/MenuSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemAgitation />
        <Stats />
        <AboutChef />
        <MenuSection />
      </main>
      <Footer />
    </>
  );
}
