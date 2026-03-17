"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import Image from "next/image";

export function AboutSofie() {
    return (
        <section id="about-sofie" className="py-24 sm:py-32 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10 hidden lg:block" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInView>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Copy Side */}
                        <div className="flex flex-col space-y-8 order-1 lg:order-2">
                            <div>
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm max-w-max mb-6">
                                    <span className="relative flex h-2 w-2 mr-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Meet The Pastry Chef
                                </div>

                                <h2 className="text-4xl sm:text-5xl tracking-tight mb-2">
                                    Building systems for <span className="text-primary italic">exponential</span> scale.
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Sofie Mor, Co-Founder
                                </p>
                            </div>

                            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    With deep expertise running growth for companies like <a href="https://www.applause.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">Applause</a>, Sofie built systems that capture and retain users through an opinionated, data-informed system.
                                </p>
                                <p>
                                    Sofie blends elite paywall design with full-funnel lifecycle strategies to create predictable revenue generation machines for consumer apps.
                                </p>

                                <blockquote className="border-l-4 border-primary/50 pl-6 py-2 italic font-medium text-foreground bg-primary/5 rounded-r-xl mt-6">
                                    &quot;Growth isn&apos;t a one-time fix. It&apos;s a system that compounds.&quot;
                                </blockquote>
                            </div>
                        </div>

                        {/* Portrait Side */}
                        <div className="order-2 lg:order-1">
                            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl aspect-square transform hover:-translate-y-1 hover:shadow-primary/10 transition-all duration-500">
                                <Image
                                    src="/assets/sofie-portrait.jpeg"
                                    alt="Sofie Mor, Co-Founder at Tapas Growth"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
