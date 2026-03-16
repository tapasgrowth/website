"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import {
    StaggerChildren,
    staggerItemVariants,
} from "@/components/animations/StaggerChildren";

const PROBLEMS = [
    {
        title: "High Acquisition Cost, Low ROI",
        description: "You're spending thousands on acquisition, but your ROI stays low because your paywall isn't converting.",
    },
    {
        title: "Fruitless A/B Testing",
        description: "You've run A/B tests, but nothing moved the needle—no real wins, no meaningful uplifts.",
    },
    {
        title: "No Revenue System",
        description: "You don't have a clear revenue system, just one fragile paywall that's carrying all the weight.",
    },
];

export function ProblemAgitation() {
    return (
        <section className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_20%)] opacity-5"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeInView>
                    <div className="text-center md:text-left md:flex md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl sm:text-5xl tracking-tight text-foreground">
                                Why your paywall isn&apos;t working.
                            </h2>
                        </div>
                    </div>
                </FadeInView>

                <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROBLEMS.map((problem, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItemVariants}
                            className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="h-12 w-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-6 font-medium text-xl group-hover:scale-110 transition-transform">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl mb-3">{problem.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </StaggerChildren>

                <FadeInView delay={0.4}>
                    <div className="mt-20 p-8 sm:p-12 bg-primary/5 rounded-3xl border border-primary/10 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl sm:text-3xl mb-4">You&apos;re not alone.</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Most apps leak revenue through small design, pricing, and lifecycle gaps.
                            Every week, those blind spots cost millions. We uncover, test, and fix them
                            using a system built on behavioral economics.
                        </p>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
