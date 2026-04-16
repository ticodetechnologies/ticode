import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fingerprint, Zap, Shield, Sparkles } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import { useLanguage } from "@/hooks/useLanguage";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    industry: IndustryData;
}

const LuxurySolutions = ({ industry }: Props) => {
    const { isRTL } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".solution-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const icons = [
        <Fingerprint className="h-6 w-6 text-brand-blue" key="1" />,
        <Zap className="h-6 w-6 text-brand-blue" key="2" />,
        <Shield className="h-6 w-6 text-brand-blue" key="3" />,
        <Sparkles className="h-6 w-6 text-brand-blue" key="4" />
    ];

    return (
        <section ref={containerRef} className="relative bg-white py-24 md:py-32 border-b border-slate-200">
            <div className="container-tight relative z-10">
                <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                        Intelligent Operations <span className="text-slate-400">Architecture.</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl">
                        Our proprietary solutions bridge the gap between high-touch {industry.title.toLowerCase()} service and high-performance digital infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {industry.solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="solution-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl cursor-default"
                        >
                            <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-blue to-accent-cyan scale-x-0 transition-transform duration-500 ${isRTL ? 'origin-right' : 'origin-left'} group-hover:scale-x-100`} />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 transition-colors duration-300 group-hover:bg-brand-blue/5">
                                    {icons[index % icons.length]}
                                </div>

                                <h3 className="mb-3 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue">
                                    {solution.title}
                                </h3>

                                <p className="text-base font-medium leading-relaxed text-slate-600">
                                    {solution.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LuxurySolutions;
