import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ArrowRight, ShieldCheck, Activity, Terminal, Brain, Cloud, Globe, Cpu, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// We will fetch these dynamically using t() inside the component
type ShowcaseItemType = {
    type: string;
    title: string;
    metric: string;
    sub: string;
    iconName: string; // we'll map this to the Lucide component
};

const HeroDirective = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // timerKey resets the auto-advance interval when user clicks an item manually
    const [timerKey, setTimerKey] = useState(0);

    const showcaseItemsRaw = t("home.hero.telemetry", { returnObjects: true }) as any[];
    const iconsMap = [Activity, Brain, ShieldCheck, Cloud, Globe, Cpu];

    const showcaseItems = showcaseItemsRaw.map((item, index) => ({
        ...item,
        icon: iconsMap[index % iconsMap.length],
    }));

    const handleItemClick = (idx: number) => {
        setCurrentIndex(idx);
        setTimerKey(k => k + 1); // reset the interval countdown
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 4000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timerKey]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-anim-item",
                { opacity: 0, y: 30, filter: "blur(4px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                ".hero-metrics-panel",
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.4,
                    delay: 0.6,
                    ease: "power3.out"
                }
            );

            gsap.to(".authority-strip-track", {
                xPercent: -50,
                ease: "none",
                duration: 40,
                repeat: -1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-base pt-28 lg:pt-32 pb-8 lg:pb-12 font-sans border-b border-white/5">
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay" />
            {/* Animated ambient radial glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none animate-[pulse_12s_ease-in-out_2s_infinite]" />
            <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[100px] pointer-events-none animate-[pulse_10s_ease-in-out_4s_infinite]" />

            <div className="container-tight relative z-10 w-full" ref={containerRef}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 lg:pt-4">
                    {/* Left Column: Command Entry */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="hero-anim-item mb-6 flex flex-wrap items-center gap-2 md:gap-3 w-full max-w-max">
                            <span className="relative flex shrink-0 h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                            </span>
                            <span className="text-[10px] sm:text-xs font-bold tracking-[0.1em] text-slate-300 uppercase font-mono break-words">
                                {t("home.hero.systemActive")}
                            </span>
                        </div>

                        {/* Clear, Executive Headline */}
                        <h1 className="hero-anim-item text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] md:leading-[1] tracking-tight text-white flex flex-col gap-1 pb-2">
                            <span className="block">{t("home.hero.headlinePrefix")}</span>
                            <span className="block">{t("home.hero.headlineMain")}</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                                {t("home.hero.headlineSuffix")}
                            </span>
                        </h1>

                        <p className="hero-anim-item mt-4 max-w-lg text-lg text-slate-300 leading-relaxed font-medium">
                            {t(
                                "home.hero.subtext",
                                "Kuwait-headquartered. Board-level IT consulting and AI for the GCC's most demanding enterprises."
                            )}
                        </p>

                        {/* Trust Badges Row */}
                        <div className="hero-anim-item mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 relative z-20">
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-[#005EED]" />
                                <span className="font-medium whitespace-nowrap">{t('home.hero.badge1', '$200M+ Client Value Delivered')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-[#005EED]" />
                                <span className="font-medium whitespace-nowrap">{t('home.hero.badge2', '100+ Enterprise Deployments')}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <ShieldCheck className="w-4 h-4 text-[#005EED]" />
                                <span className="font-medium whitespace-nowrap">{t('home.hero.badge3', 'ISO 27001 Certified')}</span>
                            </div>
                        </div>

                        {/* Social Proof — Trusted-by line */}
                        <div className="hero-anim-item mt-4 flex items-center gap-2.5 relative z-20">
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
                            {/* Primary CTA */}
                            <Link
                                to="/contact"
                                className="group relative w-full sm:w-auto overflow-hidden inline-flex items-center justify-center bg-[#005EED] hover:bg-[#004dc2] px-8 py-4 rounded-full text-sm font-bold tracking-wide text-white transition-all shadow-[0_4px_14px_0_rgba(0,94,237,0.39)] hover:shadow-[0_6px_20px_rgba(0,94,237,0.23)] hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                <span className="relative z-10 flex items-center">
                                    {t("home.hero.ctaPrimary", "Start Your Transformation")}
                                    <ArrowRight className="ms-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                to="/ai-solutions"
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold tracking-wide text-slate-300 transition-all duration-300 hover:text-white border border-white/10 hover:border-white/25 whitespace-nowrap"
                            >
                                <Brain className="h-4 w-4 text-slate-500 group-hover:text-brand-blue transition-colors" />
                                {t('home.hero.ctaSecondary', 'Explore AI Capabilities')}
                            </Link>
                        </div>

                        {/* Clean Data Strip — ps-8 ensures first item is not clipped by the fade mask */}
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

                                {/* Duplicate for infinite loop */}
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

                    {/* Right Column: Clear Enterprise Card */}
                    <div className="lg:col-span-5 hidden lg:block perspective-[1000px]">
                        <div className="hero-metrics-panel relative bg-[#0D1826]/60 backdrop-blur-3xl border border-white/5 p-6 lg:p-8 rounded-[2rem] h-full flex flex-col justify-center min-h-[380px] shadow-[0_20px_60px_-15px_rgba(47,107,255,0.15)] overflow-hidden group hover:border-brand-blue/30 transition-all duration-700">

                            {/* Ambient internal glows */}
                            <div className="absolute top-0 end-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] group-hover:bg-accent-cyan/20 transition-colors duration-700 pointer-events-none" />
                            <div className="absolute bottom-0 start-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] group-hover:bg-brand-blue/15 transition-colors duration-700 pointer-events-none" />

                            <div className="relative z-10 mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono">
                                    {t("home.hero.networkTelemetry")}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white font-mono">
                                    <Activity className="w-4 h-4 text-accent-cyan animate-pulse-glow" />
                                    {t("home.hero.liveNodes")}
                                </div>
                            </div>

                            <div className="relative z-10 w-full flex flex-col gap-2">
                                {showcaseItems.map((item, idx) => {
                                    const isActive = currentIndex === idx;
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={idx}
                                            layout
                                            onClick={() => handleItemClick(idx)}
                                            className={`relative flex flex-col rounded-xl border cursor-pointer transition-all duration-500 overflow-hidden group/item
                                                ${isActive
                                                    ? 'bg-gradient-to-r from-brand-blue/10 via-[#11223A]/40 to-transparent border-brand-blue/40 shadow-[inset_0px_0px_20px_rgba(47,107,255,0.15)] p-4'
                                                    : 'border-transparent p-3 hover:bg-white/[0.03] opacity-50 hover:opacity-100 hover:border-white/10'
                                                }
                                            `}
                                        >
                                            {/* Active Highlight Line */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-indicator"
                                                    className="absolute start-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-brand-blue via-accent-cyan to-brand-blue shadow-[0_0_12px_rgba(0,194,255,0.8)]"
                                                />
                                            )}

                                            <div className="flex items-center gap-4 relative z-10">
                                                <div className={`transition-all duration-500 ${isActive ? 'text-accent-cyan drop-shadow-[0_0_8px_rgba(0,194,255,0.8)]' : 'text-slate-500 group-hover/item:text-slate-400'}`}>
                                                    <Icon className={isActive ? "w-5 h-5" : "w-4 h-4"} />
                                                </div>
                                                <div className={`font-mono transition-all duration-500 tracking-tight ${isActive ? 'text-white text-base font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]' : 'text-slate-400 text-sm group-hover/item:text-slate-300'}`}>
                                                    {item.title}
                                                </div>

                                                {isActive && (
                                                    <div className="ms-auto flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                                                        <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-widest hidden sm:block">
                                                            {t("home.hero.active")}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                                        className="overflow-hidden relative z-10"
                                                    >
                                                        <div className="pt-4 ps-9 flex flex-col gap-3">
                                                            <div className="relative flex items-center gap-3 text-slate-200 group/sub py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:border-brand-blue/30 transition-all duration-300">
                                                                <div className="flex items-center justify-center w-6 h-6 rounded bg-brand-blue/10 border border-brand-blue/20 group-hover/sub:border-accent-cyan/50 transition-colors">
                                                                    <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                                                                </div>
                                                                <span className="font-mono text-[13px] tracking-wide relative">
                                                                    {item.metric}
                                                                </span>
                                                                <div className="absolute inset-0 bg-brand-blue/5 blur-xl opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                            </div>
                                                            <div className="relative flex items-center gap-3 text-slate-400 group/sub py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300">
                                                                <div className="flex items-center justify-center w-6 h-6 rounded bg-white/5 border border-white/10 group-hover/sub:border-white/20 transition-colors">
                                                                    <Terminal className="w-3.5 h-3.5 text-slate-400" />
                                                                </div>
                                                                <span className="font-mono text-[13px] tracking-wide relative">
                                                                    {item.sub}
                                                                </span>
                                                                <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                            </div>
                                                        </div>

                                                        {/* Subtle glowing radial background for active content area */}
                                                        <div className="absolute top-0 end-0 w-32 h-32 bg-brand-blue/10 blur-[40px] rounded-full pointer-events-none" />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Cycle Progress Bar */}
                            <div className="relative z-10 w-full h-1 bg-slate-800/50 mt-6 overflow-hidden rounded-full">
                                <motion.div
                                    key={`progress-${currentIndex}`}
                                    className="h-full bg-gradient-to-r from-brand-blue to-accent-cyan origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 4, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroDirective;
