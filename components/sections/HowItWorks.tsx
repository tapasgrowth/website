"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { FRAMEWORK_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="framework" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-4xl sm:text-5xl text-center">
            Our Recipe for Growth
          </h2>
        </FadeInView>
        <OrnamentalDivider className="mt-6 mb-16 max-w-xl mx-auto" />

        <StaggerChildren
          staggerDelay={0.15}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FRAMEWORK_STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItemVariants}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-xl mb-5 group-hover:scale-110 transition-transform">
                {step.step}
              </div>
              <h3 className="text-lg sm:text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
