import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { ServicesMenu } from "@/components/sections/ServicesMenu";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesMenu />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}