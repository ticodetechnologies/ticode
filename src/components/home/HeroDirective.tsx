import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ArrowRight, ShieldCheck, Activity, Terminal, Brain, Cloud, Globe, Cpu, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Per-item accent color identity — Finance, AI, Healthcare, Cloud, Logistics, Software
const itemAccents = [
    {
        iconClr:      "text-brand-blue",
        iconInactive: "text-brand-blue/40",
        iconGlow:     "drop-shadow-[0_0_8px_rgba(47,107,255,0.8)]",
        bgActive:     "from-brand-blue/10 via-[#0D1E33] to-transparent",
        borderActive: "border-brand-blue/40",
        shadowActive: "shadow-[inset_0px_0px_20px_rgba(47,107,255,0.12)]",
        indicator:    "from-brand-blue via-accent-cyan to-brand-blue",
        indicatorGlow:"shadow-[0_0_12px_rgba(47,107,255,0.7)]",
        dot:          "bg-brand-blue",
        subIcon1Bg:   "bg-brand-blue/10 border-brand-blue/25",
        subIcon1Clr:  "text-accent-cyan",
        subBorder1:   "border-brand-blue/25 hover:border-brand-blue/50",
        hoverBorder:  "hover:border-brand-blue/20",
    },
    {
        iconClr:      "text-violet-400",
        iconInactive: "text-violet-400/40",
        iconGlow:     "drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]",
        bgActive:     "from-violet-500/10 via-[#0D1E33] to-transparent",
        borderActive: "border-violet-500/40",
        shadowActive: "shadow-[inset_0px_0px_20px_rgba(139,92,246,0.12)]",
        indicator:    "from-violet-500 via-violet-400 to-violet-500",
        indicatorGlow:"shadow-[0_0_12px_rgba(139,92,246,0.7)]",
        dot:          "bg-violet-500",
        subIcon1Bg:   "bg-violet-500/10 border-violet-500/25",
        subIcon1Clr:  "text-violet-400",
        subBorder1:   "border-violet-500/25 hover:border-violet-500/50",
        hoverBorder:  "hover:border-violet-500/20",
    },
    {
        iconClr:      "text-emerald-400",
        iconInactive: "text-emerald-400/40",
        iconGlow:     "drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]",
        bgActive:     "from-emerald-500/10 via-[#0D1E33] to-transparent",
        borderActive: "border-emerald-500/40",
        shadowActive: "shadow-[inset_0px_0px_20px_rgba(16,185,129,0.12)]",
        indicator:    "from-emerald-500 via-emerald-400 to-emerald-500",
        indicatorGlow:"shadow-[0_0_12px_rgba(16,185,129,0.7)]",
        dot:          "bg-emerald-400",
        subIcon1Bg:   "bg-emerald-500/10 border-emerald-500/25",
        subIcon1Clr:  "text-emerald-400",
        subBorder1:   "border-emerald-500/25 hover:border-emerald-500/50",
        hoverBorder:  "hover:border-emerald-500/20",
    },
    {
        iconClr:      "text-accent-cyan",
        iconInactive: "text-accent-cyan/40",
        iconGlow:     "drop-shadow-[0_0_8px_rgba(0,194,255,0.8)]",
        bgActive:     "from-accent-cyan/10 via-[#0D1E33] to-transparent",
        borderActive: "border-accent-cyan/40",
        shadowActive: "shadow-[inset_0px_0px_20px_rgba(0,194,255,0.12)]",
        indicator:    "from-accent-cyan via-brand-blue to-accent-cyan",
        indicatorGlow:"shadow-[0_0_12px_rgba(0,194,255,0.7)]",
        dot:          "bg-accent-cyan",
        subIcon1Bg:   "bg-accent-cyan/10 border-accent-cyan/25",
        subIcon1Clr:  "text-accent-cyan",
        subBorder1:   "border-accent-cyan/25 hover:border-accent-cyan/50",
        hoverBorder:  "hover:border-accent-cyan/20",
    },
    {
        iconClr:      "text-amber-400",
        iconInactive: "text-amber-400/40",
        iconGlow:     "drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]",
        bgActive:     "from-amber-500/10 via-[#0D1E33] to-transparent",
        borderActive: "border-amber-500/40",
        shadowActive: "shadow-[inset_0px_0px_20px_rgba(245,158,11,0.12)]",
        indicator:    "from-amber-500 via-amber-400 to-amber-500",
        indicatorGlow:"shadow-[0_0_12px_rgba(245,158,11,0.7)]",
        dot:          "bg-amber-400",
        subIcon1Bg:   "bg-amber-500/10 border-amber-500/25",
        subIcon1Clr:  "text-amber-400",
        subBorder1:   "border-amber-500/25 hover:border-amber-500/50",
        hoverBorder:  "hover:border-amber-500/20",
    },
    {
        iconClr:      "text-rose-400",
        iconInactive: "text-rose-400/40",
        iconGlow:     "drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]",
        bgActive:     "from-rose-500/10 via-[#0D1E33] to-transparent",
        borderActive: "border-rose-500/40",
        shadowActive: "shadow-[inset_0px_0px_20px_rgba(244,63,94,0.12)]",
        indicator:    "from-rose-500 via-rose-400 to-rose-500",
        indicatorGlow:"shadow-[0_0_12px_rgba(244,63,94,0.7)]",
        dot:          "bg-rose-400",
        subIcon1Bg:   "bg-rose-500/10 border-rose-500/25",
        subIcon1Clr:  "text-rose-400",
        subBorder1:   "border-rose-500/25 hover:border-rose-500/50",
        hoverBorder:  "hover:border-rose-500/20",
    },
];

const HeroDirective = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timerKey, setTimerKey] = useState(0);

    const showcaseItemsRaw = t("home.hero.telemetry", { returnObjects: true }) as any[];
    const iconsMap = [Activity, Brain, ShieldCheck, Cloud, Globe, Cpu];

    const showcaseItems = showcaseItemsRaw.map((item, index) => ({
        ...item,
        icon: iconsMap[index % iconsMap.length],
    }));

    const handleItemClick = (idx: number) => {
        setCurrentIndex(idx);
        setTimerKey(k => k + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 4000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timerKey]);

    useEffect(() => {
        const rtl = document.documentElement.dir === 'rtl';
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-anim-item",
                { opacity: 0, y: 30, filter: "blur(4px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out" }
            );
            gsap.fromTo(
                ".hero-metrics-panel",
                { opacity: 0, x: rtl ? -40 : 40 },
                { opacity: 1, x: 0, duration: 1.4, delay: 0.6, ease: "power3.out" }
            );
            gsap.to(".authority-strip-track", {
                xPercent: rtl ? 50 : -50,
                ease: "none",
                duration: 40,
                delay: 1.5,
                repeat: -1
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative flex min-h-[88dvh] items-center overflow-hidden bg-base pt-28 lg:pt-[7.5rem] pb-10 lg:pb-14 font-sans border-b border-white/5">
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute -top-32 -start-20 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_2s_infinite]" />
            <div className="absolute -bottom-20 end-0 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[100px] pointer-events-none animate-[pulse_10s_ease-in-out_4s_infinite]" />

            <div className="container-tight relative z-10 w-full" ref={containerRef}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center pt-2 md:pt-4">

                    {/* Left Column */}
                    <div className="md:col-span-7 flex flex-col justify-center">
                        <div className="hero-anim-item mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-max">
                            <span className="relative flex shrink-0 h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
                                {t("home.hero.systemActive")}
                            </span>
                        </div>

                        <h1 className="hero-anim-item text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] md:leading-[1] tracking-tight text-white flex flex-col gap-1 pb-2">
                            <span className="block">{t("home.hero.headlinePrefix")}</span>
                            <span className="block">{t("home.hero.headlineMain")}</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                                {t("home.hero.headlineSuffix")}
                            </span>
                        </h1>

                        <p className="hero-anim-item mt-4 max-w-lg text-lg text-slate-400 leading-relaxed font-medium">
                            {t("home.hero.subtext", "Kuwait-headquartered. Board-level IT consulting and AI for the GCC's most demanding enterprises.")}
                        </p>

                        {/* Trust Signals Row */}
                        <div className="hero-anim-item mt-7 flex items-center flex-wrap gap-x-4 gap-y-2 relative z-20">
                            <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                                <span>{t('home.hero.badge1', 'Kuwait Headquartered')}</span>
                            </div>
                            <div className="w-px h-4 bg-white/15 shrink-0" />
                            <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue/70 shrink-0" />
                                <span>{t('home.hero.badge2', 'GCC Enterprise Focus')}</span>
                            </div>
                            <div className="w-px h-4 bg-white/15 shrink-0" />
                            <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-400">
                                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue/70 shrink-0" />
                                <span>{t('home.hero.badge3', 'ISO 27001 Certified')}</span>
                            </div>
                        </div>

                        {/* Trusted-by line */}
                        <div className="hero-anim-item mt-5 flex items-center gap-2.5 relative z-20">
                            <div className="flex items-center -space-x-1.5">
                                {['KF', 'ZN', 'NB', 'AR'].map((abbr, i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue/40 to-accent-cyan/20 border border-white/10 flex items-center justify-center text-[8px] font-bold text-white/60 font-mono">
                                        {abbr}
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs text-slate-400 font-medium">
                                {t('home.hero.trustedBy', 'Trusted by KFH, Zain, NBK, Aramco & 96+ GCC enterprises')}
                            </span>
                        </div>

                        <div className="hero-anim-item mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-20 w-full">
                            <Link
                                to="/contact"
                                className="group relative w-full sm:w-auto overflow-hidden inline-flex items-center justify-center bg-[#005EED] hover:bg-[#004dc2] px-8 py-4 rounded-full text-sm font-bold tracking-wide text-white transition-all shadow-[0_4px_14px_0_rgba(0,94,237,0.39)] hover:shadow-[0_6px_20px_rgba(0,94,237,0.23)] hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none" />
                                <span className="relative z-10 flex items-center">
                                    {t("home.hero.ctaPrimary", "Start Your Transformation")}
                                    <ArrowRight className="ms-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                            <Link
                                to="/case-studies"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold tracking-wide text-slate-300 transition-all duration-300 hover:text-white border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.07] whitespace-nowrap"
                            >
                                <Brain className="h-4 w-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                                {t('home.hero.ctaSecondary', 'Explore AI Capabilities')}
                            </Link>
                        </div>

                        {/* Authority Strip */}
                        <div className="hero-anim-item mt-8 overflow-hidden w-full relative border-t border-white/5 pt-5 [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
                            <div className="authority-strip-track flex w-max items-center gap-16 ps-8 text-sm uppercase tracking-wider text-slate-400 font-medium">
                                <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip1', 'GCC Compliance')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><Activity className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip2', 'Board-Level Advisory')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip3', 'ISO Certified Standards')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><Activity className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip4', 'Strategic Architecture')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip1', 'GCC Compliance')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><Activity className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip2', 'Board-Level Advisory')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip3', 'ISO Certified Standards')}</div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-3"><Activity className="w-4 h-4 text-brand-blue" /> {t('home.hero.strip4', 'Strategic Architecture')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Telemetry Panel */}
                    <div className="md:col-span-5 hidden md:block">
                        <div className="hero-metrics-panel relative bg-[#0D1E33] border border-white/[0.10] p-6 md:p-8 rounded-[2rem] h-full flex flex-col justify-center min-h-[380px] shadow-[0_20px_60px_-15px_rgba(47,107,255,0.2)] overflow-hidden group hover:border-brand-blue/30 transition-all duration-700">
                            {/* Top accent line */}
                            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-blue via-accent-cyan/60 to-transparent rounded-t-[2rem]" />

                            {/* Ambient glows */}
                            <div className="absolute top-0 end-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] group-hover:bg-accent-cyan/20 transition-colors duration-700 pointer-events-none" />
                            <div className="absolute bottom-0 start-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] group-hover:bg-brand-blue/15 transition-colors duration-700 pointer-events-none" />

                            {/* Panel header */}
                            <div className="relative z-10 mb-5 flex items-center justify-between border-b border-white/[0.08] pb-4">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                                    {t("home.hero.networkTelemetry")}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white font-mono">
                                    <Activity className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
                                    {t("home.hero.liveNodes")}
                                </div>
                            </div>

                            {/* Items list */}
                            <div className="relative z-10 w-full flex flex-col gap-1.5">
                                {showcaseItems.map((item, idx) => {
                                    const isActive = currentIndex === idx;
                                    const accent = itemAccents[idx % itemAccents.length];
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={idx}
                                            layout
                                            onClick={() => handleItemClick(idx)}
                                            className={`relative flex flex-col rounded-xl border cursor-pointer transition-all duration-400 overflow-hidden
                                                ${isActive
                                                    ? `bg-gradient-to-r ${accent.bgActive} ${accent.borderActive} ${accent.shadowActive} p-4`
                                                    : `border-transparent p-3 opacity-75 hover:opacity-100 hover:bg-white/[0.03] ${accent.hoverBorder}`
                                                }
                                            `}
                                        >
                                            {/* Active left indicator bar */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-indicator"
                                                    className={`absolute start-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${accent.indicator} ${accent.indicatorGlow}`}
                                                />
                                            )}

                                            <div className="flex items-start gap-3.5 relative z-10">
                                                <div className={`mt-0.5 shrink-0 transition-all duration-400 ${isActive ? `${accent.iconClr} ${accent.iconGlow}` : accent.iconInactive}`}>
                                                    <Icon className={isActive ? "w-5 h-5" : "w-4 h-4"} />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className={`font-mono tracking-tight transition-all duration-400 leading-snug ${isActive ? 'text-white text-sm font-bold' : 'text-slate-400 text-sm'}`}>
                                                        {item.title}
                                                    </div>
                                                    {/* Metric teaser shown only when inactive */}
                                                    {!isActive && (
                                                        <div className="text-[10px] font-mono text-slate-600 mt-0.5 truncate">
                                                            {item.metric}
                                                        </div>
                                                    )}
                                                </div>

                                                {isActive && (
                                                    <div className="ms-auto shrink-0 flex items-center gap-1.5">
                                                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${accent.iconClr}`} />
                                                        <span className={`text-[9px] font-mono uppercase tracking-widest ${accent.iconClr}`}>
                                                            {t("home.hero.active")}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Expanded content when active */}
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                                                        className="overflow-hidden relative z-10"
                                                    >
                                                        <div className="pt-3 ps-8 flex flex-col gap-2">
                                                            {/* Primary sub-item: outcome metric — prominent */}
                                                            <div className={`relative flex items-center gap-3 py-2 px-3 rounded-lg bg-white/[0.06] border ${accent.subBorder1} transition-all duration-300`}>
                                                                <div className={`flex items-center justify-center w-5 h-5 rounded border ${accent.subIcon1Bg}`}>
                                                                    <ShieldCheck className={`w-3 h-3 ${accent.subIcon1Clr}`} />
                                                                </div>
                                                                <span className="font-mono text-[12px] tracking-wide text-white font-semibold">
                                                                    {item.metric}
                                                                </span>
                                                            </div>
                                                            {/* Secondary sub-item: capability tag — dimmer */}
                                                            <div className="relative flex items-center gap-3 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/[0.06] transition-all duration-300">
                                                                <div className="flex items-center justify-center w-5 h-5 rounded bg-white/[0.04] border border-white/[0.08]">
                                                                    <Terminal className="w-3 h-3 text-slate-600" />
                                                                </div>
                                                                <span className="font-mono text-[11px] tracking-wide text-slate-500">
                                                                    {item.sub}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Dot-segment progress — one dot per item */}
                            <div className="relative z-10 flex items-center gap-2 mt-5">
                                {showcaseItems.map((_, idx) => {
                                    const isActive = currentIndex === idx;
                                    const accent = itemAccents[idx % itemAccents.length];
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleItemClick(idx)}
                                            className={`relative h-1.5 rounded-full cursor-pointer overflow-hidden transition-all duration-500 ${
                                                isActive
                                                    ? 'flex-1 bg-white/10'
                                                    : 'w-3 bg-slate-700/50 hover:bg-slate-600/70'
                                            }`}
                                            aria-label={`Go to item ${idx + 1}`}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    key={`fill-${currentIndex}-${timerKey}`}
                                                    className={`absolute inset-y-0 left-0 rounded-full ${accent.dot}`}
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 4, ease: "linear" }}
                                                />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroDirective;
