import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calculator, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ITCInvestmentModel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const shimmerRef = useRef<HTMLDivElement>(null);

    // Calculator State
    const [scope, setScope] = useState<number>(1); // 1, 1.8, 3
    const [complexity, setComplexity] = useState<number>(1); // 1, 1.5, 2.2
    const [duration, setDuration] = useState<number>(3); // 1 to 12
    const [displayedTotal, setDisplayedTotal] = useState<number>(8000); // Base rate
    const [isRecalculating, setIsRecalculating] = useState(false);

    const baseRate = 8000;

    // Calculate total based on formula
    const targetTotal = Math.round(baseRate * scope * complexity * duration);

    // AI Recalculation Shimmer and Counter Animation
    useEffect(() => {
        if (!priceRef.current) return;

        setIsRecalculating(true);
        const obj = { val: displayedTotal };

        // Count up animation
        gsap.to(obj, {
            val: targetTotal,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => setDisplayedTotal(Math.round(obj.val)),
            onComplete: () => setIsRecalculating(false)
        });

        // AI Recalculating shimmer effect
        if (shimmerRef.current) {
            gsap.fromTo(
                shimmerRef.current,
                { opacity: 0.8, x: "-100%" },
                { opacity: 0, x: "100%", duration: 1.5, ease: "power2.out" }
            );
        }

    }, [targetTotal]); // Run immediately when targetTotal changes

    // Enter animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".invest-element",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
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

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-KW', { style: 'currency', currency: 'KWD', maximumFractionDigits: 0 }).format(value);
    };

    return (
        <section ref={containerRef} className="relative bg-[#0B1623] py-12 md:py-20 overflow-hidden z-10 border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,178,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="invest-element mb-16 text-center max-w-3xl mx-auto">
                    <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#00D1B2]">
                        <Calculator className="h-4 w-4" />
                        Executive Planning Board
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-white">
                        Strategic Investment
                        <span className="block text-[#2F6BFF] mt-2">Model.</span>
                    </h2>
                    <p className="mt-8 text-lg font-medium leading-[1.6] text-white/60 font-sans">
                        Model the baseline investment required to initiate a board-level digital governance transformation. Calculations cover strategy, architecture, and compliance mandates.
                    </p>
                </div>

                <div className="invest-element mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

                        {/* Left Side: Inputs */}
                        <div className="lg:col-span-7 bg-[#111F2E] rounded-t-3xl lg:rounded-s$1-3xl lg:rounded-tr-none border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Inner glow line */}
                            <div className="absolute top-0 bottom-0 end-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

                            <h3 className="text-xl font-bold text-white tracking-tight font-heading mb-10 flex items-center gap-3">
                                <Cpu className="h-5 w-5 text-[#00D1B2]" />
                                Operational Parameters
                            </h3>

                            <div className="space-y-10 focus-within:relative">
                                {/* Scope Selector */}
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
                                        Deployment Scope
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: "Department", value: 1 },
                                            { label: "Division", value: 1.8 },
                                            { label: "Enterprise", value: 3 }
                                        ].map((opt) => (
                                            <button
                                                key={opt.label}
                                                onClick={() => setScope(opt.value)}
                                                className={`py-3 px-2 text-xs md:text-sm font-bold font-mono uppercase tracking-widest rounded-xl border transition-all duration-300 ${scope === opt.value
                                                    ? "bg-[#2F6BFF]/20 border-[#00D1B2] text-[#00D1B2] shadow-[0_0_15px_rgba(0,209,178,0.2)]"
                                                    : "bg-black/20 border-white/5 text-white/50 hover:border-white/20 hover:text-white"
                                                    }`}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Complexity Selector */}
                                <div>
                                    <label className="block text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
                                        System Complexity
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: "Standard", value: 1 },
                                            { label: "Complex", value: 1.5 },
                                            { label: "Critical", value: 2.2 }
                                        ].map((opt) => (
                                            <button
                                                key={opt.label}
                                                onClick={() => setComplexity(opt.value)}
                                                className={`py-3 px-2 text-xs md:text-sm font-bold font-mono uppercase tracking-widest rounded-xl border transition-all duration-300 ${complexity === opt.value
                                                    ? "bg-[#2F6BFF]/20 border-[#00D1B2] text-[#00D1B2] shadow-[0_0_15px_rgba(0,209,178,0.2)]"
                                                    : "bg-black/20 border-white/5 text-white/50 hover:border-white/20 hover:text-white"
                                                    }`}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Duration Slider */}
                                <div className="group p-4 -mx-4 rounded-xl transition-all duration-300 focus-within:bg-[#162A3D] hover:bg-[#162A3D]">
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="block text-sm font-bold uppercase tracking-widest text-white/50">
                                            Engagement Timeline
                                        </label>
                                        <span className="text-[#00D1B2] font-mono font-bold text-lg">{duration} Months</span>
                                    </div>
                                    <div className="relative h-2 w-full bg-black/30 rounded-full overflow-hidden mb-2">
                                        <div
                                            className="absolute top-0 start-0 h-full bg-[#2F6BFF] rounded-full group-hover:shadow-[0_0_10px_rgba(47,107,255,0.5)] transition-shadow duration-300"
                                            style={{ width: `${((duration - 1) / 11) * 100}%` }}
                                        />
                                        <input
                                            type="range"
                                            min="1"
                                            max="12"
                                            step="1"
                                            value={duration}
                                            onChange={(e) => setDuration(Number(e.target.value))}
                                            className="absolute top-0 start-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Output Pricing Panel */}
                        <div className="lg:col-span-5 bg-[#0B1623] rounded-b-3xl lg:rounded-e$1-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">

                            {/* Radial Backdrop for numbers */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.1)_0%,transparent_70%)] pointer-events-none" />

                            {/* The Shimmer Div */}
                            <div
                                ref={shimmerRef}
                                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#00D1B2]/10 to-transparent transform -skew-x-12 pointer-events-none z-20"
                                style={{ opacity: 0 }}
                            />

                            <div className="relative z-10 text-center">
                                <div className="text-[10px] font-bold uppercase font-mono tracking-[0.2em] text-white/50 border-b border-white/5 pb-4 mb-8 flex items-center justify-between">
                                    <span>Projected CAPEX Estimate</span>
                                    <span className={`text-[#00D1B2] transition-opacity duration-300 ${isRecalculating ? 'opacity-100 animate-pulse' : 'opacity-0'}`}>
                                        AI Recalculating...
                                    </span>
                                </div>

                                <div className="relative" ref={priceRef}>
                                    <span className="text-4xl sm:text-5xl md:text-[4rem] font-bold font-mono text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                        {formatCurrency(displayedTotal)}
                                    </span>
                                </div>

                                <p className="mt-8 text-xs font-medium font-sans leading-[1.6] text-white/40">
                                    Estimates cover phase 1 diagnostic, architectural blueprinting, and initial governance matrix setup. Excludes software licensing.
                                </p>

                                <button className="mt-10 w-full rounded-full bg-white/5 border border-white/10 py-4 text-[10px] tracking-[0.2em] uppercase font-mono font-bold text-white transition-colors duration-300 hover:bg-[#2F6BFF] hover:border-[#2F6BFF]">
                                    Request Formal Proposal
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ITCInvestmentModel;
