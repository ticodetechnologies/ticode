import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Server, Database, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const basePillars = [
    {
        id: "ai-strategy",
        icon: <Brain className="h-5 w-5 text-brand-blue" />,
        metricValue: 74,
        metricPrefix: "",
        metricSuffix: "%",
        metricDecimals: 0,
        isStaticString: false,
        link: "/ai-solutions",
        delay: 0
    },
    {
        id: "cloud-infrastructure",
        icon: <Server className="h-5 w-5 text-accent-cyan" />,
        metricValue: 99.999,
        metricPrefix: "",
        metricSuffix: "%",
        metricDecimals: 3,
        isStaticString: false,
        link: "/services/cloud-infrastructure",
        delay: 0.1
    },
    {
        id: "data-governance",
        icon: <Database className="h-5 w-5 text-brand-blue" />,
        metricValue: 0,
        metricPrefix: "",
        metricSuffix: "",
        isStaticString: true,
        link: "/services/data-analytics",
        delay: 0.2
    },
];

const StrategicPillars = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const translatedPillars = t("home.pillars.items", { returnObjects: true }) as any[];

    // Combine base metric data (numbers, prefixes, links) with translated labels
    const pillars = basePillars.map((base, index) => {
        const translation = (translatedPillars && translatedPillars[index]) || {};
        return {
            ...base,
            title: translation.title,
            outcome: translation.outcome,
            metricText: translation.metricText,
            governance: translation.governance,
        };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".pillar-anim-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    },
                    onStart: () => {
                        counterRefs.current.forEach((el, index) => {
                            if (!el) return;
                            const target = parseFloat(el.getAttribute('data-target') || '0');
                            const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
                            if (target === 0) return;
                            gsap.to({ val: 0 }, {
                                val: target,
                                duration: 2,
                                ease: "power2.out",
                                delay: pillars[index].delay,
                                onUpdate: function () {
                                    el.innerText = (this.targets()[0].val).toFixed(decimals);
                                }
                            });
                        });
                    }
                }
            );

            gsap.fromTo(
                ".pillar-anim-header",
                { opacity: 0, y: 20 },
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
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-base py-12 md:py-20 font-sans border-b border-white/5 overflow-hidden">
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />

            <div className="container-tight relative z-10 w-full">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pillar-anim-header mb-20">
                    <div className="max-w-3xl">
                        <div className="mb-6 flex items-center gap-3 w-max">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
                                {t("home.pillars.badge")}
                            </span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-5xl leading-tight pb-2">
                            {t("home.pillars.title")} <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                                {t("home.pillars.titleHighlight")}
                            </span>
                        </h2>
                        <p className="mt-6 text-lg font-medium text-slate-400 max-w-2xl leading-relaxed">
                            {t(
                                "home.solutions.subtext",
                                "We bridge the gap between legacy stagnation and next-generation intelligence, delivering structurally sound digital architectures."
                            )}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.id}
                            className="pillar-anim-card group relative flex flex-col justify-between bg-[#111C2D]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(0,194,255,0.15)] hover:border-brand-blue/40 overflow-hidden"
                        >
                            <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-brand-blue to-accent-cyan opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-in-out" />

                            {/* Inner ambient glow on hover */}
                            <div className="absolute top-0 end-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px] group-hover:bg-accent-cyan/15 transition-colors duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-8 inline-flex bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-4 text-accent-cyan transition-colors group-hover:bg-brand-blue/20">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-white mb-4 transition-colors group-hover:text-accent-cyan">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-slate-400">
                                    {pillar.outcome}
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 space-y-5 border-t border-white/5 pt-8 transition-colors group-hover:border-white/10">
                                <div className="group-hover:bg-white/[0.03] -mx-4 px-4 py-3 rounded-xl transition-colors">
                                    <div className="text-xs uppercase font-semibold tracking-widest text-slate-500 font-mono group-hover:text-accent-cyan transition-colors">
                                        {t("home.pillars.measurableImpact")}
                                    </div>
                                    <div className="mt-2 text-3xl font-bold font-mono text-white flex flex-col sm:flex-row sm:items-baseline gap-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                        {pillar.isStaticString ? (
                                            <span className="text-[1.5rem] leading-[1.2] pb-1">{pillar.metricText}</span>
                                        ) : (
                                            <>
                                                <span>
                                                    <span className="text-slate-500 text-xl font-medium me-0.5">{pillar.metricPrefix}</span>
                                                    <span
                                                        ref={(el) => (counterRefs.current[index] = el)}
                                                        data-target={pillar.metricValue}
                                                        data-decimals={pillar.metricDecimals}
                                                    >
                                                        0
                                                    </span>
                                                    <span className="text-slate-500 text-xl font-medium ms-0.5">{pillar.metricSuffix}</span>
                                                </span>
                                                <span className="text-sm font-sans font-medium text-slate-500 tracking-normal hidden md:inline-block group-hover:text-slate-300">
                                                    {pillar.metricText}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    {!pillar.isStaticString && (
                                        <div className="text-xs font-sans font-medium text-slate-500 tracking-normal mt-1 md:hidden group-hover:text-slate-300">
                                            {pillar.metricText}
                                        </div>
                                    )}
                                </div>
                                <div className="pt-2">
                                    <div className="text-xs uppercase font-semibold tracking-widest text-slate-500 font-mono">
                                        {t("home.pillars.executionStandard")}
                                    </div>
                                    <div className="mt-1 text-sm font-medium text-slate-300">
                                        {pillar.governance}
                                    </div>
                                </div>
                            </div>

                            <Link
                                to={pillar.link}
                                className="mt-10 inline-flex items-center justify-center w-full px-4 py-3.5 bg-brand-blue/10 border border-brand-blue/30 text-white hover:text-white rounded-[1rem] text-sm font-bold tracking-wide transition-all group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:shadow-[0_4px_14px_0_rgba(47,107,255,0.39)]"
                            >
                                {t("home.pillars.exploreDetails")}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicPillars;
