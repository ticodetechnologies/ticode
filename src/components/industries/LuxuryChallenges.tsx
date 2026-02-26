import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertCircle, Target, Activity, ShieldAlert, Cpu } from "lucide-react";
import type { IndustryData } from "@/data/industries";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    industry: IndustryData;
}

const LuxuryChallenges = ({ industry }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".challenge-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Generic fallback metrics for interactive card displays
    const mockMetrics = [
        { val: "32%", lbl: "Efficiency Loss" },
        { val: "4.5x", lbl: "Cost Multiplier" },
        { val: "68%", lbl: "System Latency" },
        { val: "Risk", lbl: "Compliance Gap" }
    ];

    const icons = [
        <Activity className="h-6 w-6 text-brand-blue" key="1" />,
        <Target className="h-6 w-6 text-brand-blue" key="2" />,
        <ShieldAlert className="h-6 w-6 text-brand-blue" key="3" />,
        <Cpu className="h-6 w-6 text-brand-blue" key="4" />
    ];

    return (
        <section ref={containerRef} className="relative bg-[#F8FAFC] py-24 md:py-32 border-b border-slate-200">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 shadow-sm">
                        <AlertCircle className="h-4 w-4" />
                        Industry Friction
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 max-w-3xl">
                        The Core Challenges in <span className="text-slate-400">Legacy Operations.</span>
                    </h2>
                    <p className="max-w-2xl text-lg text-slate-600 font-medium leading-relaxed">
                        {industry.title} leaders face mounting pressure as generic or outdated technology platforms fail to meet the demands of modern operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industry.challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="challenge-card group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl"
                        >
                            {/* Accent Top Border mimicking the reference style */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent transition-colors group-hover:via-brand-blue" />

                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 transition-colors duration-300 group-hover:bg-brand-blue/5">
                                {icons[index % icons.length]}
                            </div>

                            <div>
                                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-blue">
                                    {challenge.title}
                                </h3>
                                <p className="text-base text-slate-600 leading-relaxed font-medium">
                                    {challenge.desc}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Impact Metric</div>
                                <div className="font-mono text-xl font-black text-slate-900 tracking-tight">
                                    {mockMetrics[index % mockMetrics.length].val}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LuxuryChallenges;
