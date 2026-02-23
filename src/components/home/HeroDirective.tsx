import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const HeroDirective = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const bgGlowRef = useRef<HTMLDivElement>(null);
    const networkDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-stagger",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power2.out",
                }
            );

            // 1. Network Status Pulse
            if (networkDotRef.current) {
                gsap.fromTo(networkDotRef.current,
                    { scale: 1, opacity: 1 },
                    {
                        scale: 1.8,
                        opacity: 0.2,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    }
                );
            }

            // 3. Background Depth Shift
            if (bgGlowRef.current) {
                gsap.to(bgGlowRef.current, {
                    x: "8%",
                    y: "12%",
                    duration: 18,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // 2. Metric Entrance
            gsap.fromTo(
                ".metric-entrance",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 0.6
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-base pt-24 md:pt-36 pb-16 md:pb-20">
            {/* Immersive Background with Subtle Deep Radial Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(45,107,255,0.15)_0%,transparent_60%)]" />
                <div className="absolute inset-0 noise-overlay opacity-[0.03]" />
            </div>

            <div className="container-tight relative z-10" ref={containerRef}>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center pt-8">
                    {/* Left Column: Command Entry */}
                    <div className="lg:col-span-7 text-left">
                        {/* Executive Data Strip */}
                        <div className="hero-stagger mb-8 flex flex-wrap items-center justify-start gap-4 text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
                                </span>
                                System Operational
                            </div>
                            <div className="text-white/20 hidden md:block">—</div>
                            <div className="text-white/60">GCC Node Active</div>
                        </div>

                        {/* Dramatic Headline Hierarchy - Sovereign Authority */}
                        <h1 className="hero-stagger font-heading text-[2.75rem] font-black leading-[1.05] tracking-[-0.02em] text-white md:text-[4.5rem] lg:text-[5.5rem] drop-shadow-2xl">
                            <span className="block text-white/90">Sovereign Digital</span>
                            <span className="block bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(45,107,255,0.4)]">
                                Transformation.
                            </span>
                        </h1>

                        {/* Executive Summary Line */}
                        <p className="hero-stagger mt-6 md:mt-8 max-w-xl text-base md:text-lg font-medium leading-[1.65] text-white/80 tracking-normal xl:text-xl">
                            {t(
                                "home.hero.subtext",
                                "Engineered for the enterprise. Built for GCC scale. Absolute security."
                            )}
                        </p>

                        {/* Actions */}
                        <div className="hero-stagger mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto">
                            <Button
                                asChild
                                size="lg"
                                className="group relative h-auto overflow-hidden rounded-xl bg-brand-blue px-8 py-4 sm:py-6 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-transparent hover:border-white/20 w-full sm:w-auto"
                            >
                                <Link to="/contact">
                                    <span className="relative z-10 flex items-center">
                                        {t("home.hero.ctaPrimary", "Contact Partner")}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-auto rounded-xl border border-white/20 bg-transparent px-8 py-4 sm:py-6 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
                            >
                                <Link to="/case-studies">
                                    <span className="relative z-10 flex items-center justify-center text-white">
                                        {t("home.hero.ctaSecondary", "View Case Studies")}
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Executive Performance Module */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <div className="hero-stagger group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1521] p-8 shadow-2xl h-full flex flex-col justify-center min-h-[400px] transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-white/20">
                            {/* Inner ambient glow + 4. Hover effect on border */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent transition-opacity duration-[250ms] group-hover:via-accent-cyan/80" />

                            {/* 3. Background Depth layer */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                                <div ref={bgGlowRef} className="absolute -inset-[50%] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08)_0%,transparent_50%)]" />
                            </div>

                            <div className="relative z-10 mb-8 flex items-center justify-between border-b border-white/10 pb-4 transition-colors duration-[250ms] group-hover:border-white/20">
                                <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
                                    Network Status
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
                                    99.999%
                                    <div className="relative flex h-1.5 w-1.5 items-center justify-center">
                                        {/* GSAP controlled pulse layer */}
                                        <div ref={networkDotRef} className="absolute h-full w-full rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                                        {/* Static core */}
                                        <div className="absolute h-1 w-1 rounded-full bg-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div>
                                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">
                                        Active Board Implementations
                                    </div>
                                    <div className="metric-entrance font-mono text-4xl font-black text-white opacity-0">$45M+</div>
                                </div>

                                <div>
                                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">
                                        Infrastructure Risk Mitigation
                                    </div>
                                    <div className="metric-entrance font-mono text-4xl font-black text-white opacity-0">Tier-1</div>
                                </div>

                                <div>
                                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">
                                        Data Sovereignty Compliance
                                    </div>
                                    <div className="metric-entrance flex items-center gap-3 opacity-0">
                                        <div className="font-mono text-4xl font-black text-white">100%</div>
                                        <ShieldCheck className="h-6 w-6 text-brand-blue" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Micro Trust Row - Reduced Spacing to keep above fold */}
                <div className="hero-stagger mt-12 md:mt-16 border-t border-white/10 pt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                    <div className="flex items-center gap-3 group">
                        <ShieldCheck className="h-4 w-4 text-surface-2 transition-colors duration-500 group-hover:text-accent-cyan" />
                        ISO-Aligned Delivery
                    </div>
                    <div className="flex items-center gap-3 group">
                        <ShieldCheck className="h-4 w-4 text-surface-2 transition-colors duration-500 group-hover:text-accent-cyan" />
                        GCC Regulatory Expertise
                    </div>
                    <div className="flex items-center gap-3 group">
                        <ShieldCheck className="h-4 w-4 text-surface-2 transition-colors duration-500 group-hover:text-accent-cyan" />
                        Board-Level Advisory
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroDirective;
