"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { SERVICES } from "@/lib/constants";

export function MenuSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <FadeInView>
          <h2 className="text-4xl sm:text-5xl italic text-center">The Menu</h2>
        </FadeInView>
        <OrnamentalDivider className="mt-6 mb-16 max-w-xl mx-auto" />

        {/* SERVICES LIST */}
        <StaggerChildren staggerDelay={0.2} className="max-w-3xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div key={service.name} variants={staggerItemVariants}>
              <div className="text-center py-8">
                <h3 className="uppercase tracking-[0.15em] text-lg sm:text-xl text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  {service.description}
                </p>
              </div>
              {index < SERVICES.length - 1 && (
                <OrnamentalDivider />
              )}
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
