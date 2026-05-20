import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { TrendingUp, Zap, TrendingDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type BaseMetricType = {
    id: string;
    value: number;
    prefix: string;
    suffix: string;
    isFloat?: boolean;
};

const baseMetrics: BaseMetricType[] = [
    { id: "efficiency", value: 34, prefix: "+", suffix: "%" },
    { id: "speed",      value: 2.3, prefix: "",  suffix: "x", isFloat: true },
    { id: "cost",       value: 25,  prefix: "-", suffix: "%" },
];

// Per-card design tokens
const cardThemes = [
    {
        icon: TrendingUp,
        accent:    "text-accent-cyan",
        iconBg:    "bg-accent-cyan/10 border-accent-cyan/25",
        topLine:   "from-accent-cyan via-accent-cyan/30 to-transparent",
        numColor:  "from-accent-cyan to-white",
        prefixClr: "text-accent-cyan/70",
        barColor:  "bg-accent-cyan",
        badgeClr:  "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
        pct: 85,
    },
    {
        icon: Zap,
        accent:    "text-brand-blue",
        iconBg:    "bg-brand-blue/10 border-brand-blue/25",
        topLine:   "from-brand-blue via-brand-blue/30 to-transparent",
        numColor:  "from-brand-blue to-white",
        prefixClr: "text-brand-blue/70",
        barColor:  "bg-brand-blue",
        badgeClr:  "text-brand-blue border-brand-blue/30 bg-brand-blue/10",
        pct: 70,
    },
    {
        icon: TrendingDown,
        accent:    "text-emerald-400",
        iconBg:    "bg-emerald-500/10 border-emerald-500/25",
        topLine:   "from-emerald-400 via-emerald-400/30 to-transparent",
        numColor:  "from-emerald-400 to-white",
        prefixClr: "text-emerald-400/70",
        barColor:  "bg-emerald-400",
        badgeClr:  "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        pct: 60,
    },
];

const OutcomeMetrics = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<(HTMLDivElement | null)[]>([]);
    const barRefs = useRef<(HTMLDivElement | null)[]>([]);

    const translatedMetrics = t("home.metrics.items", { returnObjects: true }) as any[];

    const metrics = baseMetrics.map((base, index) => {
        const translation = translatedMetrics[index] || {};
        return { ...base, label: translation.label, before: translation.before, after: translation.after };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".metric-title",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
            );

            metricsRef.current.forEach((el, index) => {
                if (!el) return;
                const valObj = { val: 0 };
                const numElement = el.querySelector(".metric-number");
                const targetValue = metrics[index].value;
                const isFloat = metrics[index].isFloat;
                const bar = barRefs.current[index];
                const theme = cardThemes[index];

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 90%",
                    onEnter: () => {
                        gsap.fromTo(el,
                            { opacity: 0, y: 40 },
                            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: index * 0.15 }
                        );
                        gsap.to(valObj, {
                            val: targetValue,
                            duration: 2.2,
                            ease: "power2.out",
                            delay: 0.3 + index * 0.15,
                            onUpdate: () => {
                                if (numElement) {
                                    numElement.textContent = isFloat
                                        ? valObj.val.toFixed(1)
                                        : Math.round(valObj.val).toString();
                                }
                            },
                        });
                        if (bar) {
                            gsap.fromTo(bar,
                                { scaleX: 0 },
                                { scaleX: 1, duration: 1.8, ease: "power2.out", delay: 0.5 + index * 0.15, transformOrigin: "left" }
                            );
                        }
                    },
                    once: true,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [metrics]);

    return (
        <section className="relative overflow-hidden bg-[#070F1C] py-16 md:py-24 font-sans border-b border-white/5" ref={containerRef}>
            {/* Background */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />
            <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-blue/8 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 start-1/4 w-[500px] h-[300px] bg-accent-cyan/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container-tight relative z-10 w-full">

                {/* Section Header */}
                <div className="metric-title text-center mb-12 md:mb-16">
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                        <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
                        <span className="text-xs font-bold tracking-widest text-accent-cyan uppercase font-mono">
                            {t("home.metrics.verifiedImpact")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        The business case must <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                            survive the boardroom.
                        </span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                        We frame every modernization effort around measurable change, auditability, and decision speed before implementation starts.
                    </p>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                    {metrics.map((metric, index) => {
                        const theme = cardThemes[index];
                        const Icon = theme.icon;
                        return (
                            <div
                                key={metric.id}
                                ref={(el) => (metricsRef.current[index] = el)}
                                className="group relative flex flex-col bg-[#0D1E33] rounded-[1.75rem] border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-white/[0.16] hover:-translate-y-1 hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)]"
                            >
                                {/* Top accent line */}
                                <div className={`h-[2px] w-full bg-gradient-to-r ${theme.topLine} flex-shrink-0`} />

                                <div className="flex flex-col flex-1 p-7 lg:p-8">
                                    {/* Top row: icon + badge */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`flex items-center justify-center w-11 h-11 rounded-xl border ${theme.iconBg} ${theme.accent} transition-all duration-300`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.18em] font-mono px-3 py-1 rounded-full border ${theme.badgeClr}`}>
                                            VERIFIED
                                        </span>
                                    </div>

                                    {/* Big Number */}
                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className={`text-2xl font-bold font-mono ${theme.prefixClr}`}>
                                            {metric.prefix}
                                        </span>
                                        <span className={`text-[5rem] lg:text-[5.5rem] font-black font-mono leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${theme.numColor}`}>
                                            <span className="metric-number">0</span>
                                        </span>
                                        <span className={`text-2xl font-bold font-mono ${theme.prefixClr} self-start mt-4`}>
                                            {metric.suffix}
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <div className={`text-base font-bold leading-snug mb-8 ${theme.accent}`}>
                                        {metric.label}
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-white/[0.07] mb-6" />

                                    {/* Before / After — always visible */}
                                    <div className="flex justify-between gap-4 mb-6">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600 font-mono">
                                                {t("home.metrics.statusLegacy", "STATUS: LEGACY")}
                                            </span>
                                            <span className="text-sm font-medium text-slate-500 line-through decoration-slate-600/60">
                                                {metric.before}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1 text-end">
                                            <span className={`text-[10px] font-bold uppercase tracking-[0.16em] font-mono inline-flex items-center justify-end gap-1.5 ${theme.accent}`}>
                                                <span className="relative flex h-1.5 w-1.5">
                                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.barColor}`}></span>
                                                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${theme.barColor}`}></span>
                                                </span>
                                                {t("home.metrics.statusSovereign", "STATUS: SOVEREIGN")}
                                            </span>
                                            <span className="text-sm font-bold text-white">
                                                {metric.after}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                        <div
                                            ref={(el) => (barRefs.current[index] = el)}
                                            className={`h-full rounded-full ${theme.barColor} shadow-[0_0_8px_currentColor]`}
                                            style={{ width: `${theme.pct}%`, transform: "scaleX(0)", transformOrigin: "left" }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-[10px] text-slate-600 font-mono">0%</span>
                                        <span className={`text-[10px] font-mono font-bold ${theme.accent}`}>{theme.pct}% improvement</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OutcomeMetrics;
