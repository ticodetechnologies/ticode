import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Navigation2, Eye, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DeliveryFramework = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const baseSteps = [
        { id: "discovery", icon: <Eye className="w-5 h-5" />, number: "01" },
        { id: "strategy", icon: <Navigation2 className="w-5 h-5" />, number: "02" },
        { id: "implementation", icon: <Cpu className="w-5 h-5" />, number: "03" },
        { id: "optimization", icon: <RefreshCw className="w-5 h-5" />, number: "04" },
        { id: "support", icon: <ShieldCheck className="w-5 h-5" />, number: "05" },
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

            // Intro fade
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

            // Timeline line progress animation
            if (trackRef.current && progressRef.current) {
                gsap.to(progressRef.current, {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: trackRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    }
                });
            }

            // Stacking cards & lighting nodes
            cards.forEach((card, i) => {
                const node = card.querySelector(".timeline-node");
                const iconBox = card.querySelector(".icon-box");
                
                // Highlight the timeline node when card hits the center
                ScrollTrigger.create({
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        gsap.to(node, { backgroundColor: "#00C2FF", scale: 1.5, duration: 0.3 });
                        gsap.to(iconBox, { borderColor: "rgba(0,194,255,0.5)", backgroundColor: "rgba(0,194,255,0.1)", duration: 0.3 });
                    },
                    onLeaveBack: () => {
                        gsap.to(node, { backgroundColor: "rgba(255,255,255,0.1)", scale: 1, duration: 0.3 });
                        gsap.to(iconBox, { borderColor: "rgba(255,255,255,0.05)", backgroundColor: "rgba(255,255,255,0)", duration: 0.3 });
                    }
                });

                if (i === 0) return; // First card doesn't stack over anything

                // Stacking blur effect
                gsap.to(cards[i - 1], {
                    scale: 0.94,
                    opacity: 0.4,
                    filter: "blur(4px)",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 15%",
                        scrub: true,
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative font-sans bg-[#040A12] py-20 md:py-32 border-b border-white/5 overflow-hidden" ref={containerRef}>
            {/* Soft ambient backgrounds */}
            <div className="absolute top-0 inset-x-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top,rgba(47,107,255,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30 pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                <div className="framework-intro mx-auto max-w-4xl text-center mb-16 md:mb-32">
                    <div className="mb-8 inline-flex items-center gap-3 w-max mx-auto px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                        <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
                        <span className="text-xs font-bold tracking-widest text-brand-blue uppercase font-mono">
                            {t("home.delivery.badge")}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                        {t("home.delivery.title")}
                    </h2>
                    <p className="mt-8 text-lg md:text-xl font-medium text-slate-400 max-w-3xl mx-auto leading-[1.6]">
                        {t("home.delivery.subtext")}
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto flex">
                    
                    {/* The Scrolling Timeline Track (Left Side) - Hidden on smallest mobile if space is tight, but shown on md+ */}
                    <div className="hidden md:block absolute left-8 lg:left-12 top-0 bottom-10 w-px bg-white/5 z-0" ref={trackRef}>
                        {/* Glowing progress line */}
                        <div 
                            ref={progressRef}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-blue via-accent-cyan to-transparent origin-top scale-y-0 shadow-[0_0_15px_rgba(0,194,255,0.6)]" 
                        />
                    </div>

                    <div className="framework-track relative pb-10 w-full space-y-10 lg:space-y-16 lg:pl-32 md:pl-28">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="framework-card group sticky w-full transform-gpu z-[1] transition-all duration-500"
                                style={{ top: `calc(7rem + ${index * 1.5}rem)` }} // Progressive stacking overlap
                            >
                                <div className="relative bg-[#091422]/70 backdrop-blur-2xl border border-white/5 p-8 lg:p-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center hover:border-brand-blue/20 overflow-hidden transition-all duration-500">
                                    
                                    {/* Responsive timeline node (Shows outside on desktop, acts as connection point) */}
                                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[4.5rem] lg:-translate-x-[5.5rem] w-3 h-3 rounded-full bg-white/10 ring-4 ring-[#040A12] z-10 timeline-node shadow-[0_0_15px_rgba(0,194,255,0)] transition-all duration-300" />

                                    {/* Card Inner Ambient */}
                                    <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute end-0 top-0 w-64 h-64 bg-accent-cyan/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Icon Column */}
                                    <div className="icon-box shrink-0 relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/[0.02] border border-white/5 rounded-2xl text-slate-300 overflow-hidden shadow-inner transition-colors duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                        {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8 relative z-10 text-inherit" })}
                                    </div>

                                    {/* Content Column */}
                                    <div className="flex flex-col flex-1 relative z-10">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                            <div className="text-xs uppercase font-extrabold tracking-[0.2em] text-accent-cyan/70 font-mono">
                                                {t("home.delivery.phase")} {step.number}
                                            </div>
                                            <div className="text-5xl md:text-6xl font-mono font-black text-white/[0.04] select-none leading-none absolute top-4 end-4 sm:relative sm:top-0 sm:end-0 transition-colors group-hover:text-white/[0.08] duration-700">
                                                {step.number}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-extrabold tracking-tight text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all font-heading">
                                            {step.title}
                                        </h3>
                                        <p className="text-[17px] font-medium text-slate-400 leading-relaxed max-w-2xl group-hover:text-slate-300 transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliveryFramework;
