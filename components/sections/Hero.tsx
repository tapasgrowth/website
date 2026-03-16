"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/reactbits/SplitText";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-black text-white">

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Helped apps add $50M+ in revenue.
        </motion.div>

        <SplitText
          text="We design consumer app paywalls that convert and pricing strategies that grow revenue"
          as="h1"
          className="text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-8"
          delay={0.1}
          staggerDelay={0.04}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-2 text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We find what&apos;s leaking, fix pricing inefficiencies, and turn subscriptions into predictable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-transform">
            <a href="#pricing">Book Your Free Revenue Audit</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm">
            <a href="#services">View Our Framework</a>
          </Button>
        </motion.div>

        {/* Removed redundant footer stats, social proof moved to top */}
      </div>
    </section>
  );
}
