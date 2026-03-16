"use client";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { FadeInView } from "@/components/animations/FadeInView";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section id="stats" className="bg-muted/50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl sm:text-5xl font-heading font-medium text-primary"
                />
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
