"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerChildren,
  staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SERVICES, PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tiers = [
  { key: "growth" as const, tier: PRICING.growth, highlight: false, direction: "left" as const },
  { key: "scale" as const, tier: PRICING.scale, highlight: true, direction: "right" as const },
];

export function MenuSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
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
                <h3 className="uppercase tracking-[0.15em] font-heading text-lg sm:text-xl text-foreground">
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

        {/* TIERS HEADER */}
        <OrnamentalDivider className="mt-8 mb-6 max-w-xl mx-auto" />
        <FadeInView>
          <h3 className="text-2xl sm:text-3xl text-center text-muted-foreground mb-12">
            Select Your Experience
          </h3>
        </FadeInView>

        {/* PRICING TIERS */}
        <div id="pricing" className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map(({ key, tier, highlight, direction }) => (
            <FadeInView key={key} direction={direction} delay={0.1}>
              <Card
                className={cn(
                  "flex flex-col h-full transition-colors duration-500",
                  highlight
                    ? "border-gold/50 shadow-[0_0_24px_-6px_oklch(0.78_0.08_85/0.15)]"
                    : "border-gold/30"
                )}
              >
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl">{tier.name}</CardTitle>
                  <p className="text-sm italic text-muted-foreground mt-1">
                    {tier.badge}
                  </p>
                  <div className="mt-4">
                    <span className="text-5xl sm:text-6xl font-heading">
                      <span className="text-3xl sm:text-4xl text-muted-foreground">$</span>
                      {tier.price.replace("$", "")}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      {tier.priceDetail}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tier.commitment}
                  </p>
                  {tier.qualifier && (
                    <p className="text-xs text-muted-foreground/70 mt-2 italic">
                      {tier.qualifier}
                    </p>
                  )}
                  {tier.valueProp && (
                    <p className="text-sm italic text-gold mt-3">
                      {tier.valueProp}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="h-px bg-border/50 mb-6" />
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-gold/70 shrink-0">&mdash;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={highlight ? "default" : "outline"}
                    size="lg"
                    onClick={() =>
                      window.open(tier.stripeLink, "_blank", "noopener")
                    }
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
