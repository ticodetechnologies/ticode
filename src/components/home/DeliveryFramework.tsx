import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Navigation2, Eye, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DeliveryFramework = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const baseSteps = [
        {
            id: "discovery",
            icon: <Eye className="w-5 h-5" />,
            number: "01",
        },
        {
            id: "strategy",
            icon: <Navigation2 className="w-5 h-5" />,
            number: "02",
        },
        {
            id: "implementation",
            icon: <Cpu className="w-5 h-5" />,
            number: "03",
        },
        {
            id: "optimization",
            icon: <RefreshCw className="w-5 h-5" />,
            number: "04",
        },
        {
            id: "support",
            icon: <ShieldCheck className="w-5 h-5" />,
            number: "05",
        },
    ];

    const translatedSteps = t("home.delivery.steps", { returnObjects: true }) as any[];

    const steps = baseSteps.map((base, index) => {
        const translation = (translatedSteps && translatedSteps[index]) || {};
        return {
            ...base,
            title: translation.title,
            desc: translation.desc,
        };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);

            gsap.fromTo(
                ".framework-intro",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Sticky Stacking Logic
            cards.forEach((card, i) => {
                if (i === 0) return; // First card doesn't need to stack over anything

                gsap.to(cards[i - 1], {
                    scale: 0.95,
                    opacity: 0.5,
                    filter: "blur(2px)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: true,
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative font-sans bg-[#0E1A2B] py-12 md:py-20 border-b border-white/5" ref={containerRef}>
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-50" />

            <div className="container-tight relative z-10">
                <div className="framework-intro mx-auto max-w-4xl text-center mb-16 md:mb-24">
                    <div className="mb-8 inline-flex items-center gap-3 w-max mx-auto">
                        <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                        <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
                            {t("home.delivery.badge")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        {t("home.delivery.title")}
                    </h2>
                    <p className="mt-6 text-lg font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t("home.delivery.subtext")}
                    </p>
                </div>

                <div className="framework-track relative pb-10 max-w-4xl mx-auto space-y-6 lg:space-y-12">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="framework-card group sticky top-24 lg:top-32 w-full bg-[#0D1826]/70 backdrop-blur-2xl border border-white/5 p-8 lg:p-12 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] flex flex-col md:flex-row gap-8 items-start md:items-center transform-gpu z-[1] transition-all duration-500 hover:border-brand-blue/30 overflow-hidden"
                            style={{ top: `calc(6rem + ${index * 2}rem)` }}
                        >
                            {/* Glowing Left Edge Line on Hover */}
                            <div className="absolute start-0 inset-y-0 w-[2px] bg-gradient-to-b from-brand-blue via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_15px_rgba(54,224,255,0.5)]" />

                            <div className="absolute top-0 end-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] group-hover:bg-accent-cyan/10 transition-colors duration-700 pointer-events-none" />

                            {/* Graphic/Icon Column */}
                            <div className="flex-shrink-0 relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-[#0B1E2D] border border-white/5 rounded-[1.5rem] text-accent-cyan overflow-hidden shadow-inner group-hover:border-brand-blue/30 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent pointer-events-none" />
                                {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 md:w-10 md:h-10 relative z-10" })}
                            </div>

                            {/* Content Column */}
                            <div className="flex flex-col flex-1 ps-0 md:ps-4 relative z-10">
                                <div className="text-xs uppercase font-semibold tracking-widest text-slate-500 mb-3 font-mono group-hover:text-accent-cyan transition-colors">
                                    {t("home.delivery.phase")} {step.number}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                    {step.title}
                                </h3>
                                <p className="text-base md:text-lg font-medium text-slate-400 leading-relaxed max-w-xl group-hover:text-slate-300 transition-colors">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Ambient Number */}
                            <div className="absolute top-4 end-8 text-7xl md:text-9xl font-mono font-black text-white/[0.02] select-none pointer-events-none transition-colors group-hover:text-brand-blue/10 duration-700">
                                {step.number}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeliveryFramework;
