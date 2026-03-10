import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, ServerCrash, Unlock, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const baseChallenges = [
    {
        id: "strategy",
        icon: Users,
        target: 40,
        prefix: "",
        suffix: "%",
        isCritical: false
    },
    {
        id: "architecture",
        icon: ServerCrash,
        target: 2,
        prefix: "$",
        suffix: "M+",
        isCritical: false
    },
    {
        id: "compliance",
        icon: Unlock,
        target: 0,
        prefix: "",
        suffix: "",
        isCritical: true
    }
];

const ITCHallenges = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const translatedItems = t("home.itChallenges.items", { returnObjects: true }) as any[];

    const challenges = baseChallenges.map((base, index) => {
        const translation = (translatedItems && translatedItems[index]) || {};
        return {
            ...base,
            title: translation.title || "",
            desc: translation.desc || "",
            metricLabel: translation.metricLabel || "",
            textValue: translation.textValue
        };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".risk-panel",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                }
            );

            // Animate metric numbers
            challenges.forEach((challenge, idx) => {
                if (challenge.target > 0) {
                    const el = metricRefs.current[idx];
                    if (!el) return;

                    const obj = { val: 0 };
                    gsap.to(obj, {
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 60%",
                        },
                        val: challenge.target,
                        duration: 3,
                        delay: 0.5 + (idx * 0.2),
                        ease: "expo.out",
                        onUpdate: () => {
                            el.innerText = Math.round(obj.val).toString();
                        }
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#040A12] py-20 md:py-32 overflow-hidden z-10 border-b border-white/5">
            {/* Ambient Base Glows */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
            <div className="absolute top-1/2 start-0 h-[800px] w-[800px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 end-0 h-[600px] w-[600px] translate-y-1/3 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold uppercase tracking-[0.2em] text-red-400 font-mono shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                        <AlertTriangle className="h-4 w-4" />
                        {t("home.itChallenges.badge")}
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                        {t("home.itChallenges.title")} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">{t("home.itChallenges.titleHighlight")}</span>
                    </h2>
                    <p className="mt-8 text-lg md:text-xl text-slate-400 font-medium leading-[1.6] max-w-3xl">
                        {t("home.itChallenges.subtext")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {challenges.map((challenge, idx) => {
                        const Icon = challenge.icon;
                        const isRisk = challenge.isCritical || idx === 1; // Enhance risk feel for middle card too
                        
                        // Calculate staggered margin for dynamic layout
                        const staggerMargin = idx === 0 ? "lg:mt-0" : idx === 1 ? "lg:mt-12" : "lg:mt-24";
                        
                        return (
                            <div
                                key={idx}
                                className={`risk-panel group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border bg-[#091422]/80 backdrop-blur-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-3 min-h-[480px] ${staggerMargin} ${isRisk ? "border-red-500/10 hover:border-red-500/40 hover:shadow-[0_20px_50px_-15px_rgba(239,68,68,0.2)]" : "border-brand-blue/10 hover:border-brand-blue/40 hover:shadow-[0_20px_50px_-15px_rgba(47,107,255,0.2)]"}`}
                            >
                                {/* Top Ambient Glow inside card */}
                                <div className={`absolute top-0 inset-x-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${isRisk ? "bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.6)]" : "bg-gradient-to-r from-transparent via-brand-blue to-transparent shadow-[0_0_15px_rgba(47,107,255,0.6)]"}`} />

                                <div className={`absolute top-0 start-0 w-full h-full bg-gradient-to-b from-transparent to-transparent opacity-0 transition-opacity duration-700 pointer-events-none group-hover:opacity-100 ${isRisk ? "via-red-500/5 to-red-500/5" : "via-brand-blue/5 to-brand-blue/5"}`} />

                                <div className="flex flex-col gap-8 relative z-10 w-full">
                                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors duration-500 shadow-inner ${isRisk ? "group-hover:border-red-500/30 group-hover:bg-red-500/10" : "group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10"}`}>
                                        <Icon className={`h-7 w-7 text-slate-300 transition-colors duration-500 ${isRisk ? "group-hover:text-red-400" : "group-hover:text-brand-blue"}`} />
                                    </div>
                                    <div>
                                        <h3 className="mb-4 text-2xl font-bold text-white tracking-tight leading-snug">
                                            {challenge.title}
                                        </h3>
                                        <p className="text-[15px] text-slate-400 leading-relaxed font-medium">
                                            {challenge.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Animated Risk Metric */}
                                <div className={`mt-12 pt-8 border-t border-white/5 relative z-10 w-full flex flex-col transition-all duration-500 group-hover:bg-white/[0.02] -mx-8 px-8 -mb-8 pb-8 rounded-b-[2rem]`}>
                                    <div className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 font-mono ${isRisk ? "text-red-400/80 group-hover:text-red-400" : "text-brand-blue/80 group-hover:text-brand-blue"} transition-colors`}>
                                        {challenge.metricLabel}
                                    </div>
                                    <div className={`font-mono text-5xl lg:text-6xl font-black tracking-tighter ${isRisk ? "text-red-500 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" : "text-brand-blue group-hover:drop-shadow-[0_0_15px_rgba(47,107,255,0.5)]"} transition-all duration-500`}>
                                        {challenge.textValue ? (
                                            challenge.textValue
                                        ) : (
                                            <div className="flex items-baseline gap-1">
                                                {challenge.prefix && <span className="text-3xl text-inherit opacity-70">{challenge.prefix}</span>}
                                                <span ref={(el) => (metricRefs.current[idx] = el)}>0</span>
                                                {challenge.suffix && <span className="text-3xl text-inherit opacity-70">{challenge.suffix}</span>}
                                            </div>
                                        )}
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
