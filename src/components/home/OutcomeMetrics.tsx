import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Clock, Wallet } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const OutcomeMetrics = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<(HTMLDivElement | null)[]>([]);

    const metrics = [
        {
            id: "efficiency",
            value: 27,
            prefix: "+",
            suffix: "%",
            label: "Operational Efficiency Gain",
            icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
        },
        {
            id: "speed",
            value: 2.4,
            prefix: "",
            suffix: "x",
            label: "Deployment Velocity",
            isFloat: true,
            icon: <Clock className="h-6 w-6 text-brand-blue" />,
        },
        {
            id: "cost",
            value: 38,
            prefix: "-",
            suffix: "%",
            label: "Infrastructure TCO Reduction",
            icon: <Wallet className="h-6 w-6 text-brand-blue" />,
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            metricsRef.current.forEach((el, index) => {
                if (!el) return;

                const valObj = { val: 0 };
                const numElement = el.querySelector(".metric-number");
                const targetValue = metrics[index].value;
                const isFloat = metrics[index].isFloat;

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.to(valObj, {
                            val: targetValue,
                            duration: 2,
                            ease: "power2.out",
                            onUpdate: () => {
                                if (numElement) {
                                    numElement.textContent = isFloat
                                        ? valObj.val.toFixed(1)
                                        : Math.round(valObj.val).toString();
                                }
                            },
                        });

                        // Fade up the entire metric block
                        gsap.fromTo(
                            el,
                            { opacity: 0, y: 30 },
                            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                        );
                    },
                    once: true,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-base py-32 md:py-48 border-t border-white/5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="container-tight relative z-10" ref={containerRef}>
                <div className="mb-20">
                    <h2 className="font-heading text-xl md:text-2xl font-bold tracking-[0.2em] text-white/50 uppercase text-center">
                        Verified Execution Metrics
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-0">
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.id}
                            className="relative flex flex-col items-center justify-center opacity-0 px-4 md:px-8 text-center"
                            ref={(el) => (metricsRef.current[index] = el)}
                        >
                            {/* Severe Vertical Separator for desktop */}
                            {index !== metrics.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-32 w-px bg-white/10" />
                            )}

                            <div className="mb-8 opacity-40">
                                {metric.icon}
                            </div>

                            <div className="flex items-baseline justify-center font-mono text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-medium tracking-tighter text-white leading-none drop-shadow-2xl">
                                <span className="text-white/40 text-[3rem] md:text-[4rem] lg:text-[5rem] mr-2 font-normal">{metric.prefix}</span>
                                <span className="metric-number">0</span>
                                <span className="text-accent-cyan text-[3rem] md:text-[4rem] lg:text-[5rem] ml-2 font-normal">{metric.suffix}</span>
                            </div>

                            <div className="mt-8 text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white/60 max-w-[200px] leading-relaxed">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomeMetrics;
