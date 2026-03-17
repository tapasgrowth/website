import { FadeInView } from "@/components/animations/FadeInView";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { COMPANY, PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tiers = [
  { key: "growth" as const, tier: PRICING.growth, highlight: false, direction: "left" as const },
  { key: "scale" as const, tier: PRICING.scale, highlight: true, direction: "right" as const },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TIERS HEADER */}
        <FadeInView>
          <h2 className="text-center text-4xl sm:text-5xl tracking-tight mb-4">
            Select Your Experience
          </h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-12">
            Traditional agencies charge flat fees with no accountability. We put skin in the game.
          </p>
        </FadeInView>

        {/* PRICING TIERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {tiers.map(({ key, tier, highlight, direction }) => (
            <FadeInView key={key} direction={direction} delay={0.1}>
              <div className={cn("relative", highlight && "lg:scale-[1.03")}>
                {/* "Most Popular" badge — outside Card to avoid overflow-hidden clipping */}
                {"badge" in tier && highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground tracking-wide uppercase">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <Card
                  className={cn(
                    "flex flex-col h-full transition-all duration-500",
                    highlight
                      ? "border-primary/30 shadow-[0_0_32px_-4px_oklch(0.22_0.004_286/0.12)]"
                      : "border-border"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl">{tier.name}</CardTitle>
                    {!highlight && "badge" in tier && (
                      <p className="text-sm italic text-muted-foreground mt-1">
                        {tier.badge}
                      </p>
                    )}
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
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        {tier.qualifier}
                      </p>
                    )}
                    {tier.valueProp && (
                      <p className={cn(
                        "text-sm font-medium mt-3",
                        highlight ? "text-primary" : "text-muted-foreground"
                      )}>
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
                          <span className={cn(
                            "shrink-0",
                            highlight ? "text-primary/60" : "text-gold/70"
                          )}>&mdash;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={cn(
                        "w-full",
                        highlight && "h-12 text-base"
                      )}
                      variant={highlight ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <a href={COMPANY.bookingUrl} target="_blank" rel="noopener">
                        {tier.cta}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
