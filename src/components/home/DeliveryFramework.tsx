import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Navigation2, Eye, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Per-step accent colors for visual variety
const stepAccents = [
    { icon: "text-accent-cyan", iconBg: "bg-accent-cyan/10 border-accent-cyan/30", line: "from-accent-cyan/80", num: "text-accent-cyan/20" },
    { icon: "text-brand-blue",  iconBg: "bg-brand-blue/10 border-brand-blue/30",  line: "from-brand-blue/80",  num: "text-brand-blue/20" },
    { icon: "text-violet-400",  iconBg: "bg-violet-500/10 border-violet-500/30",  line: "from-violet-400/80",  num: "text-violet-400/20" },
    { icon: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/30",line: "from-emerald-400/80", num: "text-emerald-400/20" },
    { icon: "text-amber-400",   iconBg: "bg-amber-500/10 border-amber-500/30",    line: "from-amber-400/80",   num: "text-amber-400/20" },
];

const DeliveryFramework = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const baseSteps = [
        { id: "discovery",      icon: <Eye className="w-6 h-6" />,       number: "01" },
        { id: "strategy",       icon: <Navigation2 className="w-6 h-6" />,number: "02" },
        { id: "implementation", icon: <Cpu className="w-6 h-6" />,        number: "03" },
        { id: "optimization",   icon: <RefreshCw className="w-6 h-6" />,  number: "04" },
        { id: "support",        icon: <ShieldCheck className="w-6 h-6" />,number: "05" },
    ];

    const translatedSteps = t("home.delivery.steps", { returnObjects: true }) as any[];

    const steps = baseSteps.map((base, index) => {
        const translation = (translatedSteps && translatedSteps[index]) || {};
        return { ...base, title: translation.title, desc: translation.desc };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);

            gsap.fromTo(
                ".framework-intro",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 75%" } }
            );

            if (trackRef.current && progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleY: 1, ease: "none",
                    scrollTrigger: {
                        trigger: trackRef.current,
                        start: "top center", end: "bottom center", scrub: true,
                    }
                });
            }

            cards.forEach((card, i) => {
                const node = card.querySelector(".timeline-node");
                const nodeRing = card.querySelector(".timeline-ring");

                ScrollTrigger.create({
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        gsap.to(node,    { backgroundColor: "#00C2FF", scale: 1.4, duration: 0.4, ease: "back.out" });
                        gsap.to(nodeRing,{ opacity: 1, scale: 1.8, duration: 0.4 });
                    },
                    onLeaveBack: () => {
                        gsap.to(node,    { backgroundColor: "rgba(47,107,255,0.4)", scale: 1, duration: 0.3 });
                        gsap.to(nodeRing,{ opacity: 0, scale: 1, duration: 0.3 });
                    }
                });

                if (i === 0) return;
                gsap.to(cards[i - 1], {
                    scale: 0.96, opacity: 0.5, filter: "blur(3px)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", end: "top 20%", scrub: true,
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative font-sans bg-[#040A12] py-16 md:py-24 border-b border-white/5 overflow-hidden" ref={containerRef}>
            {/* Ambient top glow */}
            <div className="absolute top-0 inset-x-0 h-[600px] w-full bg-[radial-gradient(ellipse_at_top,rgba(47,107,255,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-20 pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                {/* Section Header */}
                <div className="framework-intro mx-auto max-w-4xl text-center mb-12 md:mb-16">
                    <div className="mb-8 inline-flex items-center gap-3 w-max mx-auto px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/25">
                        <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
                        <span className="text-xs font-bold tracking-widest text-accent-cyan uppercase font-mono">
                            {t("home.delivery.badge")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                        {t("home.delivery.title")}
                    </h2>
                    <p className="mt-6 text-lg md:text-xl font-medium text-slate-400 max-w-3xl mx-auto leading-[1.7]">
                        {t("home.delivery.subtext")}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto flex">
                    {/* Timeline track */}
                    <div className="hidden md:block absolute left-6 lg:left-8 top-8 bottom-8 w-px bg-white/[0.08] z-0" ref={trackRef}>
                        <div
                            ref={progressRef}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-blue via-accent-cyan to-emerald-400 origin-top scale-y-0"
                            style={{ filter: "drop-shadow(0 0 6px rgba(0,194,255,0.7))" }}
                        />
                    </div>

                    <div className="relative pb-4 w-full space-y-6 md:pl-24 lg:pl-28">
                        {steps.map((step, index) => {
                            const accent = stepAccents[index];
                            return (
                                <div
                                    key={step.id}
                                    ref={(el) => (cardsRef.current[index] = el)}
                                    className="group sticky w-full transform-gpu"
                                    style={{ top: `calc(6rem + ${index * 1.2}rem)` }}
                                >
                                    {/* Timeline node */}
                                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[4.75rem] lg:-translate-x-[5.75rem] z-10">
                                        <div className="timeline-ring absolute inset-0 w-5 h-5 -translate-x-1 -translate-y-1 rounded-full bg-brand-blue/20 opacity-0 scale-1" />
                                        <div className="timeline-node w-3 h-3 rounded-full bg-brand-blue/40 ring-[3px] ring-[#040A12] shadow-[0_0_12px_rgba(47,107,255,0.4)] transition-all duration-300" />
                                    </div>

                                    {/* Card */}
                                    <div className="relative bg-[#0D1E33] border border-white/[0.10] rounded-2xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-white/[0.18] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">

                                        {/* Top accent line — always visible */}
                                        <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${accent.line} via-transparent to-transparent`} />

                                        {/* Left border stripe */}
                                        <div className={`absolute top-0 start-0 bottom-0 w-[3px] bg-gradient-to-b ${accent.line} via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                                        {/* Inner hover glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                        <div className="flex flex-col sm:flex-row gap-6 lg:gap-10 items-start sm:items-center p-6 lg:p-8 ps-8 lg:ps-10">
                                            {/* Icon */}
                                            <div className={`icon-box shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl border ${accent.iconBg} ${accent.icon} transition-all duration-500 shadow-inner`}>
                                                {React.cloneElement(step.icon as React.ReactElement, { className: "w-7 h-7" })}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 relative z-10 min-w-0">
                                                <div className="flex items-center justify-between gap-4 mb-2">
                                                    <span className={`text-[10px] font-extrabold tracking-[0.2em] uppercase font-mono ${accent.icon}`}>
                                                        {t("home.delivery.phase")} {step.number}
                                                    </span>
                                                    <span className={`text-6xl font-mono font-black select-none leading-none ${accent.num} group-hover:opacity-100 transition-opacity duration-500 shrink-0`}>
                                                        {step.number}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-3 leading-snug">
                                                    {step.title}
                                                </h3>
                                                <p className="text-[15px] font-medium text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryFramework;
