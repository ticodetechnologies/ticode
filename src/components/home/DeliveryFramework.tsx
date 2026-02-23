import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Navigation2, Eye, ShieldCheck, Cpu, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DeliveryFramework = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = [
        {
            id: "discovery",
            icon: <Eye className="w-6 h-6" />,
            title: "Discovery",
            desc: "Audit existing technical debt and map organizational risk.",
            number: "01",
        },
        {
            id: "strategy",
            icon: <Navigation2 className="w-6 h-6" />,
            title: "Strategy",
            desc: "Blueprint sovereign architectures aligned with GCC directives.",
            number: "02",
        },
        {
            id: "implementation",
            icon: <Cpu className="w-6 h-6" />,
            title: "Implementation",
            desc: "Deploy proprietary environments with zero business disruption.",
            number: "03",
        },
        {
            id: "optimization",
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Optimization",
            desc: "Fine-tune AI workloads for maximum operational efficiency.",
            number: "04",
        },
        {
            id: "support",
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Governance",
            desc: "Continuous sovereign oversight and absolute infrastructure security.",
            number: "05",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".framework-panel");

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 75%",
                onEnter: () => {
                    gsap.fromTo(
                        items,
                        { opacity: 0, y: 20 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power2.out"
                        }
                    );

                    gsap.to(".timeline-fill", {
                        scaleX: 1,
                        duration: 1.5,
                        ease: "power2.inOut",
                        delay: 0.2
                    });
                },
                once: true,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-base via-surface-1 to-[#0B1524] py-24 md:py-32 lg:py-48 border-t border-white/5" ref={containerRef}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(45,107,255,0.03)_0%,transparent_70%)] pointer-events-none" />
            <div className="container-tight relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-16 md:mb-24">
                    <h2 className="font-heading text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl drop-shadow-md">
                        Execution Framework.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                        {t(
                            "home.delivery.subtext",
                            "A structured, board-approved methodology for implementing sovereign digital transformations."
                        )}
                    </p>
                </div>

                <div className="relative mt-20">
                    {/* Continuous horizontal line for connecting the process */}
                    <div className="hidden lg:block absolute top-[1.25rem] left-[10%] w-[80%] h-px bg-white/10 z-0" />

                    {/* Animated Fill Line */}
                    <div className="hidden lg:block absolute top-[1.25rem] left-[10%] w-[80%] h-px z-0">
                        <div className="timeline-fill absolute top-0 left-0 h-full bg-gradient-to-r from-brand-blue/50 to-white/50 origin-left w-full scale-x-0" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-5 relative z-10">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="framework-panel flex flex-col relative group opacity-0 lg:pt-14"
                            >
                                {/* Timeline Node (Circle on the line) */}
                                <div className="hidden lg:flex absolute top-[0.95rem] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#0F2A43] border border-white/30 z-10 transition-all duration-500 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

                                {/* Elevated Panel - Strict Structure & High Contrast */}
                                <div className="relative z-10 flex w-full flex-col h-full rounded-xl border border-white/10 bg-[#0F2A43] p-6 lg:p-8 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#12314F] overflow-hidden">

                                    {/* Subdued Icon */}
                                    <div className="mb-6 opacity-40 transition-opacity duration-500 group-hover:opacity-100 text-white relative z-10">
                                        {step.icon}
                                    </div>

                                    {/* Muted Watermark Number / Step Label */}
                                    <div className="mb-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/40">
                                        STEP {step.number}
                                    </div>

                                    {/* Title (Pure White) */}
                                    <h3 className="mb-4 text-xl md:text-2xl font-black font-heading tracking-tight text-white relative z-10">
                                        {step.title}
                                    </h3>

                                    {/* Description (High Contrast text-white/80) */}
                                    <p className="text-base leading-relaxed font-medium text-white/80 relative z-10">
                                        {step.desc}
                                    </p>
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
