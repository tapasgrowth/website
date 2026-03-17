"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/reactbits/SplitText";
import FaultyTerminal from "@/components/reactbits/FaultyTerminal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground py-32 sm:py-40">
      <FaultyTerminal
        tint="#22c55e"
        scale={1.5}
        brightness={0.2}
        scanlineIntensity={0.5}
        curvature={0.1}
        mouseReact
        mouseStrength={0.5}
        noiseAmp={1}
        digitSize={1.2}
        timeScale={0.5}
        pageLoadAnimation
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy Side */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            4,500+ paywalls designed
          </motion.div>

          <SplitText
            text="Your paywall is leaking revenue."
            as="h1"
            className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight leading-none"
            delay={0.1}
            staggerDelay={0.06}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-2 text-lg sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            We audit your existing paywalls. Run design and pricing experiments, and turn subscriptions into predictable growth for top consumer apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-transform w-full sm:w-auto">
              <a href="#framework">View Our Framework</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full hover:scale-105 transition-transform w-full sm:w-auto">
              <a href="#pricing">See Pricing</a>
            </Button>
          </motion.div>
        </div>

        {/* Video Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl aspect-video"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lkwX_kc0NS8"
            title="Superwall Podcast Interview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
