import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Database, Globe, Box } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import IndustryHeroVisual from "./IndustryHeroVisual";

interface Props {
    industry: IndustryData;
}

const LuxuryHero = ({ industry }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-stagger",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.1,
                }
            );

            gsap.fromTo(
                ".metric-panel",
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.6,
                }
            );

            gsap.to(".bg-particle", {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                opacity: "random(0.1, 0.4)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Dynamically map solution titles to chips
    const icons = [<Globe className="w-3 h-3" key="1" />, <Database className="w-3 h-3" key="2" />, <BarChart3 className="w-3 h-3" key="3" />, <Box className="w-3 h-3" key="4" />];
    const chips = industry.solutions.slice(0, 4).map((sol, index) => ({
        label: sol.title,
        icon: icons[index % icons.length]
    }));

    // Split headline for stacking (if it's long)
    const splitHeadline = () => {
        const words = industry.headline.split(' ');
        if (words.length <= 4) {
            return (
                <span className="block drop-shadow-lg">{industry.headline}</span>
            );
        }
        const midPoint = Math.ceil(words.length / 2);
        return (
            <>
                <span className="block drop-shadow-lg">{words.slice(0, midPoint).join(' ')}</span>
                <span className="block bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent mt-2 drop-shadow-[0_0_40px_rgba(45,107,255,0.3)]">
                    {words.slice(midPoint).join(' ')}
                </span>
            </>
        );
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] pt-40 pb-24 flex items-center overflow-hidden bg-[#F8FAFC]"
        >
            {/* Bright Agency Core Gradients */}
            <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,209,178,0.04)_0%,transparent_60%)] pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-center">

                    <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="hero-stagger mb-8 flex flex-wrap gap-3">
                            {chips.map((chip, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 shadow-sm transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
                                >
                                    <span className="text-brand-blue">{chip.icon}</span>
                                    {chip.label}
                                </div>
                            ))}
                        </div>

                        <h1 className="hero-stagger font-heading text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.05]">
                            {/* Adjusted split rendering for Slate text and blue highlights */}
                            {industry.headline.split(' ').map((word, i, arr) => {
                                const isHighlight = i >= Math.ceil(arr.length / 2);
                                return (
                                    <span key={i} className={isHighlight ? "text-brand-blue" : "text-slate-900"}>
                                        {word}{' '}
                                        {isHighlight && i === arr.length - 1 ? '' : ''}
                                        {i === Math.ceil(arr.length / 2) - 1 ? <br /> : ''}
                                    </span>
                                );
                            })}
                        </h1>

                        <p className="hero-stagger mt-8 max-w-xl text-lg font-medium leading-[1.6] text-slate-600">
                            {industry.summary}
                        </p>

                        <div className="hero-stagger mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-blue px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-brand-blue/40"
                            >
                                <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-black/20 to-transparent transition-transform duration-300 group-hover:translate-y-0" />
                                <span className="relative z-10 flex items-center tracking-wide">
                                    Book a Strategy Call
                                    <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs font-bold text-slate-600 leading-tight">
                                    Trusted by 500+<br />
                                    <span className="text-slate-400 font-medium">Enterprise Leaders</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="hero-stagger mt-10 flex items-center gap-6 opacity-60 grayscale">
                            <div className="flex items-center gap-2 font-bold text-slate-800 text-sm tracking-wider uppercase"><Database className="h-5 w-5" /> ISO 27001</div>
                            <div className="flex items-center gap-2 font-bold text-slate-800 text-sm tracking-wider uppercase"><Globe className="h-5 w-5" /> GCC Compliant</div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 metric-panel relative hidden lg:block h-[600px] w-full flex items-center justify-center">
                        <IndustryHeroVisual slug={industry.slug} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LuxuryHero;
