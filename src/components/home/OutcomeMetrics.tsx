import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

// We'll map these statically configured options with the translated labels
type BaseMetricType = {
    id: string;
    value: number;
    prefix: string;
    suffix: string;
    isFloat?: boolean;
};

const baseMetrics: BaseMetricType[] = [
    { id: "efficiency", value: 34, prefix: "+", suffix: "%" },
    { id: "speed", value: 2.3, prefix: "", suffix: "x", isFloat: true },
    { id: "cost", value: 25, prefix: "-", suffix: "%" },
];

const OutcomeMetrics = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<(HTMLDivElement | null)[]>([]);

    const translatedMetrics = t("home.metrics.items", { returnObjects: true }) as any[];

    // Combine base metric data (numbers, prefixes) with translated labels
    const metrics = baseMetrics.map((base, index) => {
        const translation = translatedMetrics[index] || {};
        return {
            ...base,
            label: translation.label,
            before: translation.before,
            after: translation.after,
        };
    });

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
                            duration: 2.5,
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
    }, [metrics]);

    return (
        <section className="relative overflow-hidden bg-[#040A12] py-20 md:py-32 font-sans border-b border-white/5" ref={containerRef}>
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-50" />
            <div className="absolute top-0 start-1/2 w-[800px] h-[600px] -translate-x-1/2 bg-accent-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                <div className="mb-24 flex flex-col items-center justify-center text-center metric-title">
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                        <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
                        <span className="text-xs font-bold tracking-widest text-accent-cyan uppercase font-mono">
                            {t("home.metrics.verifiedImpact")}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 w-full pt-10">
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.id}
                            className="relative flex flex-col items-center justify-center text-center group bg-white/[0.02] backdrop-blur-[40px] rounded-[2.5rem] border border-white/10 p-10 lg:p-14 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 shadow-[inset_0_0_30px_rgba(255,255,255,0.02),0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden min-h-[400px]"
                            ref={(el) => (metricsRef.current[index] = el)}
                        >
                            {/* Abstract Data Background Graphic */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 flex items-center justify-center pointer-events-none mix-blend-screen scale-110 group-hover:scale-100 transition-transform">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-[150%] text-brand-blue stroke-current pointer-events-none">
                                    <path fill="none" strokeWidth="1" d="M0,100 C40,150 60,50 100,100 C140,150 160,50 200,100 M0,80 C40,130 60,30 100,80 C140,130 160,30 200,80 M0,120 C40,170 60,70 100,120 C140,170 160,70 200,120" />
                                </svg>
                            </div>

                            {/* Glowing Top Line on Hover */}
                            <div className="absolute top-0 inset-x-0 mx-auto w-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                            {/* Ambient background glow inside card */}
                            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Number Readout */}
                            <div className="flex items-baseline justify-center text-[5.5rem] lg:text-[7.5rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 group-hover:from-white group-hover:to-accent-cyan transition-all duration-700 font-mono relative z-10 drop-shadow-sm">
                                <span className="text-white/40 text-4xl lg:text-5xl me-1 font-medium font-sans mix-blend-screen">{metric.prefix}</span>
                                <span className="metric-number">0</span>
                                <span className="text-white/40 text-4xl lg:text-5xl ms-2 font-medium font-sans mix-blend-screen">{metric.suffix}</span>
                            </div>

                            <div className="mt-8 text-lg md:text-xl font-bold text-white max-w-[220px] leading-snug relative z-10 mx-auto transition-colors group-hover:text-accent-cyan">
                                {metric.label}
                            </div>

                            {/* Before / After Metrics Strip */}
                            <div className="mt-10 w-full mx-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out border-t border-white/10 pt-8 relative z-10 flex justify-between gap-4">
                                <div className="flex flex-col text-start">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1 font-mono">{t("home.metrics.statusLegacy")}</span>
                                    <span className="text-sm font-medium text-slate-400 line-through decoration-slate-600">{metric.before}</span>
                                </div>
                                <div className="flex flex-col text-end">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-blue mb-1 font-mono inline-flex items-center justify-end gap-2">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-blue"></span>
                                        </span>
                                        {t("home.metrics.statusSovereign")}
                                    </span>
                                    <span className="text-base text-white font-bold">{metric.after}</span>
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
