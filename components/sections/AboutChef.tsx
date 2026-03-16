"use client";

import { FadeInView } from "@/components/animations/FadeInView";

export function AboutChef() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-muted/30 border-y border-border/50 relative overflow-hidden">
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
                                    Meet The Chef
                                </div>

                                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4">
                                    The mind behind <span className="text-primary italic">4,500+</span> paywalls.
                                </h2>
                            </div>

                            <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    In the last 2 years alone, I've designed over 4,500 mobile app paywalls—more than anyone on Earth. I analyze $100k+ MRR paywalls all day for a living.
                                </p>
                                <p>
                                    I'm not just a designer. I join 6-9 growth calls a week with customers to see how experiments perform and close the loop. This sheer volume of reps has given me a sixth sense for what converts.
                                </p>
                                <blockquote className="border-l-4 border-primary/50 pl-6 py-2 italic font-medium text-foreground bg-primary/5 rounded-r-xl">
                                    "I instinctively know what the results are going to be before I even start work."
                                </blockquote>
                            </div>
                        </div>

                        {/* Video Side */}
                        <div className="relative w-full rounded-[2rem] overflow-hidden bg-card border border-border shadow-2xl p-2 sm:p-4 aspect-video transform hover:-translate-y-1 hover:shadow-primary/10 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

                            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden z-10 bg-[#0f0f0f]">
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
                            </div>
                        </div>
                    </div>
                </FadeInView>
            </div>
        </section>
    );
}
