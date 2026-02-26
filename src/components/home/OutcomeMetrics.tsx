import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OutcomeMetrics = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<(HTMLDivElement | null)[]>([]);

    const metrics = [
        {
            id: "efficiency",
            value: 19,
            prefix: "+",
            suffix: "%",
            label: "Enterprise Efficiency Yield",
            before: "Fragmented Operations",
            after: "Unified Sovereign Architecture"
        },
        {
            id: "speed",
            value: 1.7,
            prefix: "",
            suffix: "x",
            label: "Speed to Market Acceleration",
            isFloat: true,
            before: "Legacy Deployment Cycles",
            after: "Accelerated Digital Ecosystems"
        },
        {
            id: "cost",
            value: 27,
            prefix: "-",
            suffix: "%",
            label: "Infrastructure Cost Reduction",
            before: "Compounding Tech Debt",
            after: "Optimized Cloud Spend"
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".metric-title",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            metricsRef.current.forEach((el, index) => {
                if (!el) return;

                const valObj = { val: 0 };
                const numElement = el.querySelector(".metric-number");
                const targetValue = metrics[index].value;
                const isFloat = metrics[index].isFloat;

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.fromTo(
                            el,
                            { opacity: 0, y: 30 },
                            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: index * 0.1 }
                        );

                        gsap.to(valObj, {
                            val: targetValue,
                            duration: 2,
                            ease: "power2.out",
                            delay: index * 0.1,
                            onUpdate: () => {
                                if (numElement) {
                                    numElement.textContent = isFloat
                                        ? valObj.val.toFixed(1)
                                        : Math.round(valObj.val).toString();
                                }
                            },
                        });
                    },
                    once: true,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative overflow-hidden bg-base py-12 md:py-20 font-sans border-b border-white/5" ref={containerRef}>
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />

            <div className="container-tight relative z-10 w-full">
                <div className="mb-24 flex flex-col items-center justify-center text-center metric-title">
                    <div className="mb-6 inline-flex items-center gap-3 w-max">
                        <span className="h-2 w-2 rounded-full bg-brand-blue" />
                        <span className="text-xs font-bold tracking-widest text-white/50 uppercase font-mono">
                            Verified Executive Impact
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8 lg:gap-12 w-full pt-10">
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.id}
                            className="relative flex flex-col items-center justify-center text-center group bg-[#0D1826]/60 backdrop-blur-xl rounded-[2rem] border border-white/5 p-10 lg:p-12 hover:border-brand-blue/30 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(47,107,255,0.15)] overflow-hidden"
                            ref={(el) => (metricsRef.current[index] = el)}
                        >
                            {/* Glowing Top Line on Hover */}
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Ambient background glow inside card */}
                            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex items-baseline justify-center text-[5rem] lg:text-[7rem] font-bold tracking-tighter text-white leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-500 font-mono relative z-10">
                                <span className="text-white/30 text-4xl lg:text-5xl mr-1 font-medium font-sans">{metric.prefix}</span>
                                <span className="metric-number">0</span>
                                <span className="text-white/30 text-4xl lg:text-5xl ml-2 font-medium font-sans">{metric.suffix}</span>
                            </div>

                            <div className="mt-6 text-lg font-bold text-white max-w-[200px] leading-snug relative z-10 mx-auto transition-colors group-hover:text-accent-cyan">
                                {metric.label}
                            </div>

                            {/* Before / After Metrics Strip */}
                            <div className="mt-8 w-full mx-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out border-t border-white/5 pt-6 relative z-10">
                                <div className="flex flex-col gap-4 text-left">
                                    <div className="flex flex-col justify-center">
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-0.5 font-mono">Status: Legacy</span>
                                        <span className="text-sm font-medium text-white/40 line-through decoration-white/20">{metric.before}</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue mb-0.5 font-mono flex items-center gap-2">
                                            Status: Sovereign
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-blue"></span>
                                            </span>
                                        </span>
                                        <span className="text-sm text-white font-bold">{metric.after}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomeMetrics;
