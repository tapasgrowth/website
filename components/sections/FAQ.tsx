"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-4xl sm:text-5xl italic text-center">
            Frequently Asked Questions
          </h2>
        </FadeInView>
        <OrnamentalDivider className="mt-6 mb-16 max-w-xl mx-auto" />

        <FadeInView>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInView>
      </div>
    </section>
  );
}
