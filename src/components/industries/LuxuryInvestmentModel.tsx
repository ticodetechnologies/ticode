import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator } from "lucide-react";
import type { IndustryData } from "@/data/industries";
import EstimationCalculator from "@/components/EstimationCalculator";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    industry: IndustryData;
}

const LuxuryInvestmentModel = ({ industry }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".invest-element",
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
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#F7F9FC] py-32 md:py-40 overflow-hidden border-b border-slate-200">
            <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.03)_0%,transparent_60%)] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="invest-element mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm">
                        <Calculator className="h-4 w-4 text-brand-blue" />
                        Executive Planning
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6">
                        Strategic Investment <span className="text-brand-blue">Model.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 font-medium leading-relaxed">
                        Calculate the foundational investment required to transform your {industry.title.toLowerCase()} operations into an intelligent, AI-synchronized digital network.
                    </p>
                </div>

                <div className="invest-element mx-auto max-w-3xl relative">
                    <div className="absolute -inset-4 rounded-3xl bg-slate-200/50 -z-10 blur-xl pointer-events-none" />
                    <div className="rounded-3xl border border-slate-200/60 bg-white p-2 md:p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                        <div className="rounded-2xl overflow-hidden ring-1 ring-slate-100">
                            {/* The EstimationCalculator itself is global, so it adapts to the container. If internal changes are needed, we can update it later. */}
                            <EstimationCalculator fields={industry.calculatorFields} baseRate={industry.calculatorBaseRate} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryInvestmentModel;
