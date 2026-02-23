import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, SplitSquareVertical, AlertTriangle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const collapseModules = [
    {
        id: "fragmentation",
        icon: <SplitSquareVertical className="h-6 w-6 text-brand-blue" />,
        title: "Operational Fragmentation",
        metric: "40%",
        impact: "Average efficiency leakage from disconnected legacy systems.",
    },
    {
        id: "sovereignty",
        icon: <ShieldAlert className="h-6 w-6 text-accent-cyan" />,
        title: "Data Sovereignty Gaps",
        metric: "Critical",
        impact: "Non-compliance with GCC data localization exposes the board to regulatory liability.",
    },
    {
        id: "stagnation",
        icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
        title: "Transformation Stagnation",
        metric: "$2M+",
        impact: "Annual capital dissolved in siloed consulting efforts failing to deliver ROI.",
    },
];

const TransformationCollapse = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".collapse-el",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-base py-32 md:py-48 border-t border-white/5"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
                    {/* Left: Bold Structural Statements */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="collapse-el mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                            <span className="h-px w-6 bg-brand-blue" />
                            Systemic Vulnerability
                        </div>
                        <h2 className="collapse-el font-heading text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.05]">
                            Where Enterprise Transformations <br className="hidden lg:block" /><span className="text-white/40">Collapse.</span>
                        </h2>
                        <p className="collapse-el mt-8 text-lg font-medium leading-[1.6] text-white/70 max-w-md">
                            Without authoritative digital governance, organizations face compounding infrastructural decay. Superficial AI integrations fail at the board level.
                        </p>
                    </div>

                    {/* Right: Elevated Impact Modules */}
                    <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-10">
                        {collapseModules.map((module) => (
                            <div
                                key={module.id}
                                className="collapse-el group relative overflow-hidden rounded-xl border border-white/10 bg-surface-1 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] bg-gradient-to-r from-surface-1 to-[#0a1829]"
                            >
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-blue to-accent-cyan opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pl-2">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="rounded-lg bg-base p-3 ring-1 ring-white/10 text-white/70">
                                                {module.icon}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white">
                                                {module.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                                            {module.impact}
                                        </p>
                                    </div>

                                    <div className="flex-shrink-0 text-left md:text-right mt-2 md:mt-0">
                                        <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
                                            Risk Metric
                                        </div>
                                        <div className="font-mono text-3xl font-bold text-white drop-shadow-md">
                                            {module.metric}
                                        </div>
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

export default TransformationCollapse;
