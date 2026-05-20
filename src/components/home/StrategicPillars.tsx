import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Server, Database, Brain, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Per-pillar visual identity
const pillarThemes = [
    {
        id: "ai-strategy",
        Icon: Brain,
        link: "/ai-solutions",
        delay: 0,
        iconBg:   "bg-violet-500/10 border-violet-500/30",
        iconClr:  "text-violet-400",
        topLine:  "from-violet-500 via-violet-400/50 to-transparent",
        border:   "hover:border-violet-500/40",
        shadow:   "hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]",
        titleHov: "group-hover:text-violet-300",
        metricClr:"text-violet-400",
        labelClr: "text-violet-400/60 group-hover:text-violet-400",
        btnBase:  "bg-violet-500/10 border-violet-500/25 text-violet-300",
        btnHov:   "hover:bg-violet-500 hover:border-violet-500 hover:text-white hover:shadow-[0_4px_14px_rgba(139,92,246,0.4)]",
        checkClr: "text-violet-400",
        glowBg:   "bg-violet-500/8",
    },
    {
        id: "cloud-infrastructure",
        Icon: Server,
        link: "/services/cloud-infrastructure",
        delay: 0.1,
        iconBg:   "bg-accent-cyan/10 border-accent-cyan/30",
        iconClr:  "text-accent-cyan",
        topLine:  "from-accent-cyan via-accent-cyan/50 to-transparent",
        border:   "hover:border-accent-cyan/40",
        shadow:   "hover:shadow-[0_20px_50px_-15px_rgba(0,194,255,0.2)]",
        titleHov: "group-hover:text-accent-cyan",
        metricClr:"text-accent-cyan",
        labelClr: "text-accent-cyan/60 group-hover:text-accent-cyan",
        btnBase:  "bg-accent-cyan/10 border-accent-cyan/25 text-cyan-300",
        btnHov:   "hover:bg-accent-cyan hover:border-accent-cyan hover:text-[#040A12] hover:shadow-[0_4px_14px_rgba(0,194,255,0.4)]",
        checkClr: "text-accent-cyan",
        glowBg:   "bg-accent-cyan/8",
    },
    {
        id: "data-governance",
        Icon: Database,
        link: "/services/data-analytics",
        delay: 0.2,
        iconBg:   "bg-emerald-500/10 border-emerald-500/30",
        iconClr:  "text-emerald-400",
        topLine:  "from-emerald-500 via-emerald-400/50 to-transparent",
        border:   "hover:border-emerald-500/40",
        shadow:   "hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.2)]",
        titleHov: "group-hover:text-emerald-300",
        metricClr:"text-emerald-400",
        labelClr: "text-emerald-400/60 group-hover:text-emerald-400",
        btnBase:  "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
        btnHov:   "hover:bg-emerald-500 hover:border-emerald-500 hover:text-white hover:shadow-[0_4px_14px_rgba(16,185,129,0.4)]",
        checkClr: "text-emerald-400",
        glowBg:   "bg-emerald-500/8",
    },
];

const basePillars = [
    { metricValue: 74,     metricPrefix: "", metricSuffix: "%", metricDecimals: 0, isStaticString: false },
    { metricValue: 99.999, metricPrefix: "", metricSuffix: "%", metricDecimals: 3, isStaticString: false },
    { metricValue: 0,      metricPrefix: "", metricSuffix: "",  isStaticString: true },
];

const StrategicPillars = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRefs  = useRef<(HTMLSpanElement | null)[]>([]);

    const translatedPillars = t("home.pillars.items", { returnObjects: true }) as any[];

    const pillars = pillarThemes.map((theme, index) => {
        const tr   = (translatedPillars && translatedPillars[index]) || {};
        const base = basePillars[index];
        return { ...theme, ...base, title: tr.title, outcome: tr.outcome, metricText: tr.metricText, governance: tr.governance };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".pillar-anim-header",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
            );

            gsap.fromTo(".pillar-anim-card",
                { opacity: 0, y: 35 },
                {
                    opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: "power2.out",
                    scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
                    onStart: () => {
                        counterRefs.current.forEach((el, i) => {
                            if (!el) return;
                            const target   = parseFloat(el.getAttribute('data-target') || '0');
                            const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
                            if (target === 0) return;
                            gsap.to({ val: 0 }, {
                                val: target, duration: 2.2, ease: "power2.out", delay: pillars[i].delay,
                                onUpdate: function () { el.innerText = (this.targets()[0].val).toFixed(decimals); }
                            });
                        });
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-base py-16 md:py-24 font-sans border-b border-white/5 overflow-hidden">
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-25" />
            <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                {/* Header */}
                <div className="pillar-anim-header flex flex-col items-center text-center mb-12">
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
                            {t("home.pillars.badge")}
                        </span>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl leading-tight pb-2 max-w-3xl">
                        {t("home.pillars.title")} <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                            {t("home.pillars.titleHighlight")}
                        </span>
                    </h2>
                    <p className="mt-5 text-lg font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t("home.solutions.subtext", "We bridge the gap between legacy stagnation and next-generation intelligence, delivering structurally sound digital architectures.")}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.Icon;
                        return (
                            <div
                                key={pillar.id}
                                className={`pillar-anim-card group relative flex flex-col bg-[#0D1E33] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${pillar.border} ${pillar.shadow}`}
                            >
                                {/* Top accent line — always visible */}
                                <div className={`h-[3px] w-full flex-shrink-0 bg-gradient-to-r ${pillar.topLine}`} />

                                {/* Hover corner glow */}
                                <div className={`absolute top-0 end-0 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${pillar.glowBg}`} />

                                <div className="flex flex-col flex-1 p-7 lg:p-8">
                                    {/* Icon */}
                                    <div className={`mb-6 inline-flex items-center justify-center w-13 h-13 w-[52px] h-[52px] rounded-xl border ${pillar.iconBg} ${pillar.iconClr} transition-all duration-300`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    {/* Title + description */}
                                    <h3 className={`text-xl font-bold tracking-tight text-white mb-3 transition-colors duration-300 ${pillar.titleHov}`}>
                                        {pillar.title}
                                    </h3>
                                    <p className="text-[14px] font-medium leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-7">
                                        {pillar.outcome}
                                    </p>

                                    {/* Divider */}
                                    <div className="border-t border-white/[0.06] mb-6" />

                                    {/* Measurable Impact */}
                                    <div className="mb-5">
                                        <div className={`text-[10px] font-bold uppercase tracking-[0.18em] font-mono mb-2 transition-colors ${pillar.labelClr}`}>
                                            {t("home.pillars.measurableImpact")}
                                        </div>
                                        <div className={`font-mono font-black tracking-tighter leading-none ${pillar.metricClr}`}>
                                            {pillar.isStaticString ? (
                                                <span className="text-2xl leading-snug">{pillar.metricText}</span>
                                            ) : (
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-4xl">
                                                        <span
                                                            ref={(el) => (counterRefs.current[index] = el)}
                                                            data-target={pillar.metricValue}
                                                            data-decimals={pillar.metricDecimals}
                                                        >0</span>
                                                        <span className="text-xl opacity-75">{pillar.metricSuffix}</span>
                                                    </span>
                                                    <span className="text-xs font-sans font-medium text-slate-500 ms-1 group-hover:text-slate-400 transition-colors">
                                                        {pillar.metricText}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Execution Standard */}
                                    <div className="flex items-start gap-2.5 mb-7">
                                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${pillar.checkClr}`} />
                                        <div>
                                            <div className={`text-[10px] font-bold uppercase tracking-[0.18em] font-mono mb-1 transition-colors ${pillar.labelClr}`}>
                                                {t("home.pillars.executionStandard")}
                                            </div>
                                            <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                                                {pillar.governance}
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-auto">
                                        <Link
                                            to={pillar.link}
                                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide border transition-all duration-300 ${pillar.btnBase} ${pillar.btnHov}`}
                                        >
                                            {t("home.pillars.exploreDetails")}
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </Link>
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

export default StrategicPillars;
