import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Crosshair, Network, Cpu, LineChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
    {
        title: "Governance & Decision Rights",
        desc: "Executive governance model that aligns investments, risk, and accountability to board priorities.",
        icon: ShieldCheck
    },
    {
        title: "Portfolio Value Management",
        desc: "Outcome-based portfolio control with financial visibility, benefit tracking, and priority governance.",
        icon: LineChart
    },
    {
        title: "Architecture Blueprint",
        desc: "Enterprise-wide blueprint to reduce technical debt, improve resilience, and enable scalable growth.",
        icon: Network
    },
    {
        title: "Risk & Control Operations",
        desc: "Regulatory alignment, security posture elevation, and audit-ready controls built into delivery.",
        icon: Crosshair
    },
    {
        title: "Change Enablement",
        desc: "Operating model design and executive change management to sustain adoption and performance.",
        icon: Cpu
    }
];

const ITCSolutions = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".sol-card",
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#0B1623] py-12 md:py-20 overflow-hidden z-10">
            <div className="container-tight relative z-10">
                <div className="mb-20 flex flex-col items-center text-center">
                    <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#00D1B2]">
                        <span className="h-px w-6 bg-[#2F6BFF]" />
                        Strategic Competencies
                        <span className="h-px w-6 bg-[#2F6BFF]" />
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-black tracking-[-0.03em] text-white">
                        Sovereign Enterprise
                        <span className="block text-[#2F6BFF] mt-2 pb-2 drop-shadow-[0_0_30px_rgba(47,107,255,0.2)]">Execution Frameworks.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {solutions.map((sol, index) => {
                        const Icon = sol.icon;
                        return (
                            <div
                                key={index}
                                className={`sol-card group relative overflow-hidden rounded-[1.25rem] border border-white/5 bg-[#111F2E] p-10 md:p-12 transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:bg-[#162A3D] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${index === solutions.length - 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
                            >
                                {/* Animated Border Gradient Sweep */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D1B2]/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse -z-10 transition-opacity duration-700 pointer-events-none" />

                                {/* Glowing Top-Right Dot */}
                                <div className="absolute top-8 right-8 h-1.5 w-1.5 rounded-full bg-[#00D1B2] opacity-0 group-hover:opacity-100 shadow-[0_0_12px_#00D1B2] transition-all duration-700 pointer-events-none" />

                                {/* AI Pulse Ring */}
                                <div className="absolute top-1/2 right-0 h-48 w-48 -translate-y-1/2 translate-x-1/2 rounded-full border border-[#2F6BFF]/0 transition-all duration-700 scale-50 opacity-0 group-hover:scale-150 group-hover:border-[#2F6BFF]/10 group-hover:opacity-100 group-hover:bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.05)_0%,transparent_70%)] pointer-events-none" />

                                <div className="relative z-10 flex flex-col items-start">
                                    <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2F6BFF]/20 to-transparent border border-[#2F6BFF]/30 text-[#00D1B2] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,209,178,0.2)]">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="mb-4 text-2xl font-black tracking-tight text-white font-heading relative inline-block group-hover:text-[#00D1B2] transition-colors duration-500">
                                        {sol.title}
                                        {/* Animated Underline Reveal */}
                                        <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#2F6BFF] to-[#00D1B2] transition-all duration-500 group-hover:w-full" />
                                    </h3>

                                    <p className="mt-2 text-base font-medium leading-[1.7] text-white/60 group-hover:text-white transition-colors duration-500 font-sans">
                                        {sol.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ITCSolutions;
