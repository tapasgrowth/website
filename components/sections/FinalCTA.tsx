"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";


export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-primary text-primary-foreground">

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInView>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Ready to stop guessing on how to run paywall experiments?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free revenue audit. We&apos;ll show you exactly where your
            app is leaking revenue — no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-transform w-full sm:w-auto"
            >
              <a href={COMPANY.bookingUrl} target="_blank" rel="noopener">
                Book Your Free Revenue Audit
              </a>
            </Button>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
