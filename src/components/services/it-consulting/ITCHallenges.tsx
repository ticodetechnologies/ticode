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
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
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
                            trigger: ".risk-panel",
                            start: "top 70%",
                        },
                        val: challenge.target,
                        duration: 2.5,
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
        <section ref={containerRef} className="relative bg-[#071826] py-12 md:py-20 overflow-hidden z-10">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-50" />

            <div className="absolute top-1/2 start-0 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#2F6BFF]/5 blur-[120px] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#36E0FF]">
                            <AlertTriangle className="h-4 w-4" />
                            {t("home.itChallenges.badge")}
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
                            {t("home.itChallenges.title")} <br className="hidden md:block" />
                            <span className="text-white/50">{t("home.itChallenges.titleHighlight")}</span>
                        </h2>
                    </div>
                    <div className="max-w-sm text-white/75 font-medium leading-[1.6]">
                        {t("home.itChallenges.subtext")}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {challenges.map((challenge, idx) => {
                        const Icon = challenge.icon;
                        return (
                            <div
                                key={idx}
                                className="risk-panel group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1F33] p-6 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#2F6BFF]/50 hover:shadow-[0_20px_40px_-10px_rgba(43,179,255,0.15)]"
                            >
                                {/* Left Glowing Accent Line */}
                                <div className="absolute start-0 top-0 h-full w-1 bg-[#2F6BFF] opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_20px_#36E0FF]" />

                                <div className="absolute inset-0 bg-gradient-to-r from-[#2F6BFF]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 flex-1 relative z-10">
                                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-colors duration-500 ${challenge.isCritical ? "group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]" : "group-hover:border-[#36E0FF]/40 group-hover:bg-[#36E0FF]/10"}`}>
                                        <Icon className={`h-7 w-7 text-white transition-colors duration-500 ${challenge.isCritical ? "group-hover:text-red-500" : "group-hover:text-[#36E0FF]"}`} />
                                    </div>
                                    <div className="max-w-2xl">
                                        <h3 className={`mb-3 text-2xl font-black text-white font-heading tracking-tight transition-colors duration-500 ${challenge.isCritical ? "group-hover:text-red-400" : "group-hover:text-[#36E0FF]"}`}>
                                            {challenge.title}
                                        </h3>
                                        <p className="text-base text-white/70 leading-relaxed font-medium font-sans">
                                            {challenge.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side Animated Risk Metric */}
                                <div className="relative z-10 w-full md:w-auto overflow-hidden self-stretch md:self-auto flex items-center md:border-s border-white/10 md:ps-10">
                                    <div className="flex flex-col transition-all duration-500 md:translate-x-8 md:opacity-50 group-hover:translate-x-0 group-hover:opacity-100">
                                        <div className={`text-[0.65rem] font-bold uppercase tracking-[0.2em] ${challenge.isCritical ? "text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "text-[#36E0FF] drop-shadow-[0_0_10px_rgba(54,224,255,0.8)]"} mb-2 font-sans`}>
                                            {challenge.metricLabel}
                                        </div>
                                        <div className={`font-mono text-4xl font-black tracking-tighter mix-blend-screen transition-colors duration-500 ${challenge.isCritical ? "text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]" : "text-white"}`}>
                                            {challenge.textValue ? (
                                                challenge.textValue
                                            ) : (
                                                <>
                                                    {challenge.prefix}
                                                    <span ref={(el) => (metricRefs.current[idx] = el)}>0</span>
                                                    {challenge.suffix}
                                                </>
                                            )}
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
