import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const collapseModules = [
    {
        id: "fragmentation",
        title: "Operational Fragmentation",
        metricValue: 40,
        metricPrefix: "",
        metricSuffix: "%",
        impact: "Average efficiency leakage from disconnected legacy systems.",
        isCritical: false,
        progressColor: "bg-brand-blue"
    },
    {
        id: "stagnation",
        title: "Transformation Stagnation",
        metricValue: 2,
        metricPrefix: "$",
        metricSuffix: "M+",
        impact: "Annual capital dissolved in siloed consulting efforts failing to deliver ROI.",
        isCritical: false,
        progressColor: "bg-accent-cyan"
    },
    {
        id: "sovereignty",
        title: "Data Sovereignty Gaps",
        metricValue: 0,
        metricText: "Critical",
        impact: "Non-compliance with GCC data localization exposes the board to regulatory liability.",
        isCritical: true,
        progressColor: "bg-red-500"
    }
];

const TransformationCollapse = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".collapse-anim-item",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.utils.toArray('.collapse-card').forEach((card: any, index: number) => {
                const counter = counterRefs.current[index];
                if (!counter) return;

                const target = parseFloat(counter.getAttribute('data-target') || '0');
                if (target === 0) return;

                // Animate counter on hover
                card.addEventListener('mouseenter', () => {
                    gsap.fromTo({ val: 0 }, { val: 0 }, {
                        val: target,
                        duration: 1.5,
                        ease: "power2.out",
                        onUpdate: function () {
                            counter.innerText = Math.round(this.targets()[0].val).toString();
                        }
                    });
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-base py-32 font-sans border-b border-slate-200"
        >
            <div className="container-tight relative z-10 w-full">
                <div className="text-center mb-20">
                    <div className="collapse-anim-item mx-auto mb-6 flex items-center justify-center gap-3 w-max">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-bold tracking-[0.1em] text-slate-500 uppercase font-mono">
                            Systemic Vulnerability
                        </span>
                    </div>
                    <h2 className="collapse-anim-item text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Where Enterprise Transformations <br />
                        <span className="text-slate-500">Collapse.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collapseModules.map((module, index) => (
                        <div
                            key={module.id}
                            className="collapse-anim-item collapse-card group relative flex flex-col justify-between bg-white border border-slate-200 rounded-[1.5rem] p-8 transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(47,107,255,0.15)] hover:border-brand-blue/40 overflow-hidden cursor-default"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-accent-cyan opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4 group-hover:text-brand-blue transition-colors duration-300">
                                    {module.title}
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-slate-600 mb-8 min-h-[60px]">
                                    {module.impact}
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col border-t border-slate-100 pt-6">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2 flex items-center gap-2 font-mono">
                                    {module.isCritical && (
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                    )}
                                    Risk Metric
                                </div>

                                <div className="text-4xl font-mono font-bold tracking-tight text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-accent-cyan transition-all duration-300">
                                    {module.metricText ? (
                                        <span className="text-red-500/90 group-hover:text-red-500 transition-colors drop-shadow-sm">{module.metricText}</span>
                                    ) : (
                                        <>
                                            <span className="text-slate-400/80 text-2xl mr-1">{module.metricPrefix}</span>
                                            <span ref={(el) => (counterRefs.current[index] = el)} data-target={module.metricValue}>
                                                {module.metricValue}
                                            </span>
                                            <span className="text-slate-400/80 text-2xl ml-1">{module.metricSuffix}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransformationCollapse;
