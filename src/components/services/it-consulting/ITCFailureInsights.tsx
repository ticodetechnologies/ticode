import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const insights = [
    {
        title: "Vendor Capture",
        desc: "Over-reliance on a single provider reduces negotiating power and exit options, locking the enterprise into rising costs."
    },
    {
        title: "Change Without Model",
        desc: "Transformation fails when people, process, and accountability are not redesigned to sustain new capabilities."
    },
    {
        title: "Siloed Deployments",
        desc: "Point-solutions deployed without architectural foresight fracture the data layer and prevent holistic AI scaling."
    }
];

const ITCFailureInsights = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".insight-text-parallax", {
                y: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Left text fades up
            gsap.fromTo(
                ".insight-text-stagger",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    },
                }
            );

            // Right side cards scroll reveal from right
            gsap.fromTo(
                ".insight-card",
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#02080D] py-12 md:py-20 overflow-hidden border-t border-b border-white/5">
            {/* Spotlights */}
            <div className="absolute top-0 end-0 h-[800px] w-[800px] bg-[radial-gradient(circle_at_top_right,rgba(43,179,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: Dramatic Typography */}
                    <div className="insight-text-parallax lg:sticky lg:top-40 flex flex-col relative">
                        {/* Subtle dark spotlight behind headline */}
                        <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.8)_0%,transparent_60%)] -z-10 pointer-events-none blur-xl" />

                        <div className="insight-text-stagger mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                            <XCircle className="h-5 w-5 text-red-500" />
                        </div>
                        <h2 className="insight-text-stagger font-heading text-4xl md:text-5xl lg:text-[4rem] font-black tracking-[-0.03em] text-white leading-[1.05] mb-8 drop-shadow-2xl">
                            Why Digital <br />
                            <span className="text-white/30">Transformations Fail.</span>
                        </h2>
                        <p className="insight-text-stagger text-lg font-medium leading-[1.6] text-white/60 font-sans max-w-md">
                            The industry standard model of generic capability deployment breeds technical debt. Board-level governance is the only antidote to transformation fatigue.
                        </p>
                    </div>

                    {/* Right: Insights Cards */}
                    <div className="flex flex-col gap-8 [perspective:1000px]">
                        {insights.map((insight, idx) => (
                            <div
                                key={idx}
                                className="insight-card group relative overflow-hidden rounded-3xl bg-[#0B1F33] border border-white/5 p-10 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:[transform:rotateY(-3deg)_translateY(-5px)] hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)] hover:border-red-500/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="text-[#36E0FF] group-hover:text-red-400 transition-colors duration-500 text-xl font-mono font-bold mb-6 opacity-50 group-hover:opacity-100">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
                                    {insight.title}
                                </h3>
                                <p className="text-base font-medium leading-[1.7] text-white/70 font-sans text-pretty">
                                    {insight.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ITCFailureInsights;
