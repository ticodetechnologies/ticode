import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pipelinePoints = [
    { title: "Discovery", desc: "Diagnostic across strategy, risk posture, and architecture health." },
    { title: "Strategy", desc: "Enterprise roadmap tied to financial outcomes and regulatory gates." },
    { title: "Execution", desc: "Program management with value tracking and executive visibility." },
    { title: "Governance", desc: "Decision rights, risk controls embedded into the operating rhythm." },
    { title: "Optimization", desc: "Continuous cost and compliance improvements with targets." }
];

const ITCDeliveryTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

    const mobileProgressRef = useRef<HTMLDivElement>(null);
    const mobileNodesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".pg-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%"
                    }
                }
            );

            // Setup GSAP MatchMedia for Desktop vs Mobile logic
            const mm = gsap.matchMedia();
            const stepsCount = pipelinePoints.length;

            function activateNode(activeIndex: number, isDesktop: boolean) {
                const nodeArray = isDesktop ? nodesRef.current : mobileNodesRef.current;

                nodeArray.forEach((node, i) => {
                    if (!node) return;

                    const dot = node.querySelector('.tl-dot');
                    const textContainer = node.querySelector('.tl-text');
                    const icon = node.querySelector('.tl-icon');

                    if (i === activeIndex) {
                        gsap.to([dot, textContainer], { opacity: 1, duration: 0.5 });
                        gsap.to(dot, { scale: 1.3, borderColor: "#00D1B2", backgroundColor: "#0B1623", boxShadow: "0 0 20px rgba(0,209,178,0.6)", duration: 0.5 });
                        if (icon) gsap.to(icon, { opacity: 1, scale: 1, duration: 0.5 });
                    } else if (i < activeIndex) {
                        gsap.to([dot, textContainer], { opacity: 0.5, duration: 0.5 });
                        gsap.to(dot, { scale: 1, borderColor: "#2F6BFF", backgroundColor: "#2F6BFF", boxShadow: "none", duration: 0.5 });
                        if (icon) gsap.to(icon, { opacity: 0, scale: 0, duration: 0.5 });
                    } else {
                        gsap.to([dot, textContainer], { opacity: 0.2, duration: 0.5 });
                        gsap.to(dot, { scale: 1, borderColor: "rgba(255,255,255,0.2)", backgroundColor: "transparent", boxShadow: "none", duration: 0.5 });
                        if (icon) gsap.to(icon, { opacity: 0, scale: 0, duration: 0.5 });
                    }
                });
            }

            mm.add("(min-width: 1024px)", () => {
                // Desktop: Pin the section and draw line left-to-right as user scrolls
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000",
                    pin: true,
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.set(progressRef.current, { width: `${progress * 100}%` });

                        // Calculate active node based on scrub progress (distribute evenly)
                        const activeIndex = Math.min(stepsCount - 1, Math.floor(progress * (stepsCount + 1))); // +1 gives space at the end
                        activateNode(activeIndex, true);
                    }
                });
            });

            mm.add("(max-width: 1023px)", () => {
                // Mobile: Vertical progress scrub without pinning
                gsap.to(mobileProgressRef.current, {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                });

                mobileNodesRef.current.forEach((node, index) => {
                    if (!node) return;
                    ScrollTrigger.create({
                        trigger: node,
                        start: "top 60%",
                        onEnter: () => activateNode(index, false),
                        onEnterBack: () => activateNode(index, false),
                    });
                });

                // Reset initially
                activateNode(-1, false);
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#070D14] py-12 md:py-20 overflow-hidden z-10 border-t border-b border-white/5">
            <div className="container-tight relative z-10">
                <div className="pg-header text-center max-w-3xl mx-auto mb-24 md:mb-32">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-black tracking-[-0.02em] text-white leading-[1.05] mb-6">
                        The Delivery Pipeline.
                    </h2>
                    <p className="text-lg font-medium text-white/60 font-sans mt-6">
                        Risk-controlled delivery governed by quantifiable board-level outcomes. A staged approach to guarantee architectural sovereignty.
                    </p>
                </div>

                {/* Horizontal Timeline Layout for Desktop, Vertical for Mobile */}
                <div className="relative hidden lg:block" ref={timelineRef}>
                    {/* Background track */}
                    <div className="absolute top-[18px] left-[5%] right-[5%] h-[2px] bg-white/5" />

                    {/* Animated Fill Track */}
                    <div
                        ref={progressRef}
                        className="absolute top-[18px] left-[5%] h-[2px] bg-gradient-to-r from-[#2F6BFF] to-[#00D1B2] w-0 drop-shadow-[0_0_10px_rgba(0,209,178,0.8)]"
                    />

                    <div className="flex justify-between relative px-[5%]">
                        {pipelinePoints.map((point, index) => (
                            <div
                                key={index}
                                ref={(el) => (nodesRef.current[index] = el)}
                                className="relative flex flex-col items-center w-[18%] pt-10 group"
                            >
                                {/* The Dot */}
                                <div className="tl-dot absolute top-0 w-10 h-10 -ml-5 left-1/2 rounded-full border-4 border-white/10 bg-[#0B1623] z-10 flex items-center justify-center transition-all">
                                    <Check className="tl-icon h-4 w-4 text-[#00D1B2] opacity-0 scale-0" strokeWidth={3} />
                                </div>

                                <div className="tl-text text-center opacity-20 transition-all duration-500 mt-6">
                                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#00D1B2] mb-3">
                                        Phase 0{index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-white tracking-tight mb-2">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm font-medium leading-[1.6] text-white/70 font-sans">
                                        {point.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile/Tablet Fallback (Vertical) */}
                <div className="flex flex-col gap-12 lg:hidden ml-6 relative">
                    <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-white/5" />

                    {/* Vertical Animated Progress Line */}
                    <div
                        ref={mobileProgressRef}
                        className="absolute top-0 left-[19px] w-[2px] bg-gradient-to-b from-[#2F6BFF] to-[#00D1B2] drop-shadow-[0_0_10px_rgba(0,209,178,0.8)]"
                        style={{ height: '0%' }}
                    />

                    {pipelinePoints.map((point, index) => (
                        <div
                            key={index}
                            ref={(el) => (mobileNodesRef.current[index] = el)}
                            className="relative pl-16 group"
                        >
                            <div className="tl-dot absolute top-0 -ml-5 left-[19px] w-10 h-10 rounded-full border border-white/10 bg-[#0B1623] text-[#00D1B2] flex items-center justify-center font-bold font-mono text-sm transition-all duration-500 z-10">
                                {index + 1}
                            </div>
                            <div className="tl-text opacity-20 transition-opacity duration-500">
                                <h3 className="text-xl font-bold font-heading text-white tracking-tight mb-2">
                                    {point.title}
                                </h3>
                                <p className="text-base font-medium font-sans leading-[1.6] text-white/60">
                                    {point.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ITCDeliveryTimeline;
