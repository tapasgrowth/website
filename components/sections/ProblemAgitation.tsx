"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import {
    StaggerChildren,
    staggerItemVariants,
} from "@/components/animations/StaggerChildren";
import Image from "next/image";

const PROBLEMS = [
    {
        title: "High Acquisition Cost, Low ROI",
        description: "You're spending thousands on acquiring consumer app installs, but your ROI stays low because your paywall isn't converting.",
    },
    {
        title: "A/B Tests That Go Nowhere",
        description: "You've run A/B tests on your onboarding, but nothing moved the needle—no real wins, no meaningful uplifts.",
    },
    {
        title: "One Fragile Paywall",
        description: "You don't have a clear revenue scaling system, just one fragile paywall that's carrying all the weight.",
    },
];

export function ProblemAgitation() {
    return (
        <section className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="absolute inset-0 py-24"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">

                <div className="w-full lg:w-1/2">
                    <FadeInView>
                        <div className="mb-12">
                            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6">
                                Why your paywall isn&apos;t converting.
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Most consumer apps leak revenue through small design, pricing, and lifecycle gaps. Every week, those blind spots cost millions.
                            </p>
                        </div>
                    </FadeInView>

                    <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-4">
                        {PROBLEMS.map((problem, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItemVariants}
                                className="bg-card p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div>
                                    <h3 className="text-xl mb-2">{problem.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </StaggerChildren>
                </div>

                <div className="w-full lg:w-1/2 perspective-1000 hidden lg:block">
                    <FadeInView delay={0.3} direction="up">
                        <div className="relative w-full aspect-[1/1] rounded-[2rem] overflow-hidden rotate-[-2deg] hover:rotate-0 transition-all duration-700 shadow-2xl border border-white/10">
                            <Image
                                src="/assets/paywall-example.png"
                                alt="Mobile app paywall design wireframe"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                        </div>
                    </FadeInView>
                </div>

            </div>
        </section>
    );
}
