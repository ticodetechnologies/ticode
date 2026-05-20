import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, ServerCrash, Unlock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

// Per-card visual identity + risk config
const cardThemes = [
    {
        iconBg:    "bg-brand-blue/15 border-brand-blue/35",
        iconClr:   "text-brand-blue",
        topLine:   "bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent",
        border:    "border-brand-blue/20 hover:border-brand-blue/50",
        shadow:    "hover:shadow-[0_24px_60px_-15px_rgba(47,107,255,0.22)]",
        metricClr: "text-brand-blue",
        metricGlow:"group-hover:drop-shadow-[0_0_20px_rgba(47,107,255,0.5)]",
        barColor:  "bg-brand-blue",
        labelClr:  "text-brand-blue/70 group-hover:text-brand-blue",
        badge:     "bg-brand-blue/10 border-brand-blue/30 text-brand-blue",
        badgeTxt:  "HIGH",
        barPct:    65,
    },
    {
        iconBg:    "bg-amber-500/15 border-amber-500/35",
        iconClr:   "text-amber-400",
        topLine:   "bg-gradient-to-r from-amber-500 via-amber-500/60 to-transparent",
        border:    "border-amber-500/20 hover:border-amber-500/50",
        shadow:    "hover:shadow-[0_24px_60px_-15px_rgba(245,158,11,0.2)]",
        metricClr: "text-amber-400",
        metricGlow:"group-hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]",
        barColor:  "bg-amber-400",
        labelClr:  "text-amber-400/70 group-hover:text-amber-400",
        badge:     "bg-amber-500/10 border-amber-500/30 text-amber-400",
        badgeTxt:  "HIGH",
        barPct:    78,
    },
    {
        iconBg:    "bg-red-500/15 border-red-500/35",
        iconClr:   "text-red-400",
        topLine:   "bg-gradient-to-r from-red-500 via-red-500/60 to-transparent",
        border:    "border-red-500/20 hover:border-red-500/50",
        shadow:    "hover:shadow-[0_24px_60px_-15px_rgba(239,68,68,0.2)]",
        metricClr: "text-red-400",
        metricGlow:"group-hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]",
        barColor:  "bg-red-500",
        labelClr:  "text-red-400/70 group-hover:text-red-400",
        badge:     "bg-red-500/10 border-red-500/30 text-red-400",
        badgeTxt:  "CRITICAL",
        barPct:    94,
    },
];

const baseChallenges = [
    { id: "strategy",     icon: Users,       target: 40, prefix: "",  suffix: "%" },
    { id: "architecture", icon: ServerCrash, target: 2,  prefix: "$", suffix: "M+" },
    { id: "compliance",   icon: Unlock,      target: 0,  prefix: "",  suffix: "" },
];

const ITCHallenges = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const barRefs    = useRef<(HTMLDivElement | null)[]>([]);

    const translatedItems = t("home.itChallenges.items", { returnObjects: true }) as any[];

    const challenges = baseChallenges.map((base, index) => {
        const tr = (translatedItems && translatedItems[index]) || {};
        return { ...base, title: tr.title || "", desc: tr.desc || "", metricLabel: tr.metricLabel || "", textValue: tr.textValue };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".risk-panel",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.1, stagger: 0.18, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 70%" } }
            );

            challenges.forEach((challenge, idx) => {
                const numEl = metricRefs.current[idx];
                const bar   = barRefs.current[idx];
                const theme = cardThemes[idx];

                if (challenge.target > 0 && numEl) {
                    const obj = { val: 0 };
                    gsap.to(obj, {
                        scrollTrigger: { trigger: containerRef.current, start: "top 60%" },
                        val: challenge.target,
                        duration: 2.5,
                        delay: 0.4 + idx * 0.2,
                        ease: "expo.out",
                        onUpdate: () => { numEl.innerText = Math.round(obj.val).toString(); }
                    });
                }

                if (bar) {
                    gsap.fromTo(bar,
                        { scaleX: 0 },
                        { scaleX: 1, duration: 1.6, ease: "power2.out",
                          delay: 0.7 + idx * 0.2, transformOrigin: "left",
                          scrollTrigger: { trigger: containerRef.current, start: "top 60%" } }
                    );
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#040A12] py-16 md:py-24 overflow-hidden z-10 border-b border-white/5">
            {/* Ambient glows */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="absolute top-1/2 start-0 h-[700px] w-[700px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 end-0 h-[500px] w-[500px] translate-y-1/3 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="container-tight relative z-10">
                {/* Header */}
                <div className="mb-12 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 font-mono shadow-[0_0_20px_rgba(245,158,11,0.12)]">
                        <AlertTriangle className="h-4 w-4" />
                        {t("home.itChallenges.badge")}
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                        {t("home.itChallenges.title")} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
                            {t("home.itChallenges.titleHighlight")}
                        </span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-400 font-medium leading-[1.65] max-w-3xl">
                        {t("home.itChallenges.subtext")}
                    </p>
                </div>

                {/* Cards — equal height, no stagger */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {challenges.map((challenge, idx) => {
                        const Icon  = challenge.icon;
                        const theme = cardThemes[idx];
                        return (
                            <div
                                key={idx}
                                className={`risk-panel group relative flex flex-col overflow-hidden rounded-2xl border bg-[#0D1826] transition-all duration-500 hover:-translate-y-2 ${theme.border} ${theme.shadow}`}
                            >
                                {/* Top accent line — solid, always visible */}
                                <div className={`h-[3px] w-full flex-shrink-0 ${theme.topLine}`} />

                                <div className="flex flex-col flex-1 p-6 lg:p-7">
                                    {/* Icon + severity badge */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${theme.iconBg} ${theme.iconClr} transition-all duration-300`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className={`text-[10px] font-extrabold tracking-[0.18em] uppercase font-mono px-3 py-1 rounded-full border ${theme.badge}`}>
                                            {theme.badgeTxt}
                                        </span>
                                    </div>

                                    {/* Title + description */}
                                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-3">
                                        {challenge.title}
                                    </h3>
                                    <p className="text-[14px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300 flex-1">
                                        {challenge.desc}
                                    </p>

                                    {/* Divider */}
                                    <div className="border-t border-white/[0.06] my-6" />

                                    {/* Metric */}
                                    <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 font-mono ${theme.labelClr} transition-colors`}>
                                        {challenge.metricLabel}
                                    </div>

                                    <div className={`font-mono text-5xl font-black tracking-tighter mb-6 ${theme.metricClr} ${theme.metricGlow} transition-all duration-500`}>
                                        {challenge.textValue ? (
                                            <span className="font-mono">{challenge.textValue}</span>
                                        ) : (
                                            <div className="flex items-baseline gap-0.5">
                                                {challenge.prefix && <span className="text-2xl opacity-75 me-0.5">{challenge.prefix}</span>}
                                                <span ref={(el) => (metricRefs.current[idx] = el)}>0</span>
                                                {challenge.suffix && <span className="text-2xl opacity-75 ms-0.5">{challenge.suffix}</span>}
                                            </div>
                                        )}
                                    </div>

                                    {/* Risk level bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 font-mono">Risk Level</span>
                                            <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${theme.labelClr} transition-colors`}>
                                                {theme.barPct}%
                                            </span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                            <div
                                                ref={(el) => (barRefs.current[idx] = el)}
                                                className={`h-full rounded-full ${theme.barColor}`}
                                                style={{ width: `${theme.barPct}%`, transform: "scaleX(0)", transformOrigin: "left" }}
                                            />
                                        </div>
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

export default ITCHallenges;
