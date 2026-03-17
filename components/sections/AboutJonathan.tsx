"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import Image from "next/image";

export function AboutJonathan() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10 hidden lg:block" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInView>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Copy Side */}
                        <div className="flex flex-col space-y-8">
                            <div>
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm max-w-max mb-6">
                                    <span className="relative flex h-2 w-2 mr-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Meet The Savory Chef
                                </div>

                                <h2 className="text-4xl sm:text-5xl tracking-tight mb-2">
                                    The mind behind <span className="text-primary italic">4,500+</span> paywalls.
                                </h2>
                                <p className="text-base text-muted-foreground">
                                    Jonathan Parra, Co-Founder
                                </p>
                            </div>

                            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    In the last 2 years alone, I&apos;ve designed over 4,500 mobile app paywalls—more than anyone on Earth. I analyze $100k+ MRR paywalls all day for a living.
                                </p>
                                <p>
                                    I&apos;m not just a designer. I join 6-9 growth calls a week with customers to see how experiments perform and close the loop. This sheer volume of reps has given me a sixth sense for what converts.
                                </p>
                                <blockquote className="border-l-4 border-primary/50 pl-6 py-2 italic font-medium text-foreground bg-primary/5 rounded-r-xl">
                                    &quot;I instinctively know what the results are going to be before I even start work.&quot;
                                </blockquote>
                            </div>
                        </div>

                        {/* Portrait Side */}
                        <div className="order-2 lg:order-2">
                            <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl aspect-square transform hover:-translate-y-1 hover:shadow-primary/10 transition-all duration-500">
                                <Image
                                    src="/assets/jonathan-portrait.jpeg"
                                    alt="Jonathan Parra, Co-Founder at Tapas Growth"
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
