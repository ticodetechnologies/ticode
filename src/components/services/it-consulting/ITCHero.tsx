import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ITCHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const metricPanelRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-stagger",
                { opacity: 0, y: 30 }, // Reduced y for stability
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.1,
                }
            );

            gsap.fromTo(
                ".metric-panel",
                { opacity: 0, y: 30 }, // Flow from bottom-up for mobile compatibility
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    delay: 0.4,
                }
            );

            gsap.to(".bg-particle", {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                opacity: "random(0.05, 0.25)", // Reduced noise intensity
                duration: "random(4, 8)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(metricPanelRef.current, {
                y: -10, // Smoother, tighter float
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2
            });

            gsap.to(".bg-gradient-parallax", {
                y: 100, // Reduced parity shift
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Count up animations
            const targets = [11, 22, 99.99, 1];
            counterRefs.current.forEach((el, index) => {
                if (!el) return;
                const obj = { val: 0 };
                const isDecimal = index === 2;

                gsap.to(obj, {
                    val: targets[index],
                    duration: 2.5,
                    ease: "power2.out",
                    delay: 1 + (index * 0.1),
                    onUpdate: () => {
                        el.innerText = isDecimal
                            ? obj.val.toFixed(2)
                            : Math.round(obj.val).toString();
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0B1623] pt-32 pb-24 lg:pt-40 lg:pb-32"
        >
            {/* Reduced Intensity Background Elements */}
            <div className="bg-gradient-parallax absolute inset-x-0 -top-20 h-[1000px] bg-[radial-gradient(ellipse_at_top_right,rgba(43,179,255,0.07)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(47,107,255,0.05)_0%,transparent_60%)] pointer-events-none" />

            {/* Subtle Grid Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

            {/* Light Particle Dots */}
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    key={i}
                    className="bg-particle absolute w-1 h-1 rounded-full bg-[#36E0FF] blur-[1px]"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <div className="container-tight relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

                    {/* Left Column - 60% */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="hero-stagger mb-6 flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#36E0FF] opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#36E0FF]"></span>
                            </span>
                            <span className="text-xs font-bold tracking-[0.2em] text-[#36E0FF] uppercase">
                                System Operational — GCC Node Active
                            </span>
                        </div>

                        {/* Strictly Controlled Line Structure Headline */}
                        <h1 className="hero-stagger flex flex-col font-heading font-[800] tracking-[-0.02em] text-white leading-[1.05] text-[clamp(2.5rem,5.5vw,4.5rem)] lg:text-[4.5rem] xl:text-[5.5rem] gap-1">
                            <span className="block tracking-[-0.03em]">Board-Level IT Consulting</span>
                            <span className="block tracking-[-0.03em]">
                                For <span className="text-[#2F6BFF] drop-shadow-[0_0_30px_rgba(47,107,255,0.3)]">Risk-Resilient</span>
                            </span>
                            <span className="block text-[#2F6BFF] drop-shadow-[0_0_30px_rgba(47,107,255,0.3)] tracking-[-0.03em]">
                                Transformation.
                            </span>
                        </h1>

                        <p className="hero-stagger mt-6 max-w-xl text-lg md:text-xl font-medium leading-relaxed text-white/75 font-sans">
                            Governance-first advisory that aligns technology with enterprise strategy, reduces operational and regulatory risk, and delivers board-validated outcomes across your organization.
                        </p>

                        <div className="hero-stagger mt-8 relative inline-flex group self-start">
                            {/* Glow pulse every 3s */}
                            <div className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-[#2F6BFF]/30 to-[#00D1B2]/30 blur-xl opacity-40 animate-[pulse_3s_ease-in-out_infinite] group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                            <Link
                                to="/contact"
                                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#111F2E] border border-[#2F6BFF]/40 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:border-[#00D1B2] hover:bg-[#162A3D]"
                            >
                                <span className="relative z-10 flex items-center">
                                    Initiate Sovereign Engagement
                                    <ArrowRight className="ms-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 metric-panel relative perspective-1000 z-20 mt-8 lg:mt-0" ref={metricPanelRef}>
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2F6BFF]/5 to-transparent blur-3xl opacity-40" />

                        <div className="group/panel relative overflow-hidden rounded-3xl border border-white/5 bg-[#111F2E]/80 backdrop-blur-2xl p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-all duration-500 hover:border-[#00D1B2]/30 hover:shadow-[0_20px_40px_rgba(0,209,178,0.15)] hover:-translate-y-1">
                            <div className="absolute top-0 end-0 h-[300px] w-[300px] rounded-full bg-[#00D1B2]/5 blur-[80px] pointer-events-none" />

                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-5 relative z-10">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-slate-400">
                                    Executive Metrics Array
                                </h3>
                                <Activity className="h-4 w-4 text-[#00D1B2]" />
                            </div>

                            <div className="space-y-6 lg:space-y-8 relative z-10">
                                {/* Metric 1 */}
                                <div className="group transition-all duration-500 rounded-xl">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <div className="text-white/75 text-sm font-medium font-sans group-hover/panel:text-white transition-colors duration-500">Audit-Ready Delivery</div>
                                        <div className="flex items-baseline gap-1 transition-all duration-500">
                                            <span className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight" ref={(el) => (counterRefs.current[0] = el)}>0</span>
                                            <span className="text-xs uppercase font-bold text-[#00D1B2] font-mono tracking-widest">Wks</span>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#2F6BFF] w-[90%] rounded-full relative group-hover:w-[95%] transition-all duration-700" />
                                    </div>
                                </div>

                                {/* Metric 2 */}
                                <div className="group transition-all duration-500 rounded-xl">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <div className="text-white/75 text-sm font-medium font-sans group-hover/panel:text-white transition-colors duration-500">OPEX Cost Reduction</div>
                                        <div className="flex items-baseline gap-1 transition-all duration-500">
                                            <span className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight" ref={(el) => (counterRefs.current[1] = el)}>0</span>
                                            <span className="text-sm font-bold text-[#00D1B2] font-mono">%</span>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#2F6BFF] w-[75%] rounded-full relative group-hover:w-[85%] transition-all duration-700" />
                                    </div>
                                </div>

                                {/* Metric 3 */}
                                <div className="group transition-all duration-500 rounded-xl">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <div className="text-white/75 text-sm font-medium font-sans group-hover/panel:text-white transition-colors duration-500">System Availability</div>
                                        <div className="flex items-baseline gap-1 transition-all duration-500">
                                            <span className="text-3xl lg:text-4xl font-mono font-bold text-white tracking-tight" ref={(el) => (counterRefs.current[2] = el)}>0.00</span>
                                            <span className="text-sm font-bold text-[#00D1B2] font-mono">%</span>
                                        </div>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#2F6BFF] w-[99%] rounded-full relative" />
                                    </div>
                                </div>

                                {/* Metric 4 */}
                                <div className="pt-5 border-t border-white/5 transition-all duration-500 rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-xl bg-[#2F6BFF]/10 border border-[#2F6BFF]/30 flex items-center justify-center transition-colors duration-500 hover:bg-[#2F6BFF]/20">
                                                <ShieldCheck className="h-5 w-5 lg:h-6 lg:w-6 text-[#00D1B2]" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold tracking-tight font-sans transition-all duration-500">Tier-<span ref={(el) => (counterRefs.current[3] = el)}>0</span> Risk Mitigation</div>
                                                <div className="text-slate-400 text-[10px] tracking-widest uppercase font-bold mt-1 font-mono">GCC Compliance Framework</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ITCHero;
