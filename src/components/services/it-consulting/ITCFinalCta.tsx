import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ITCFinalCta = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const magneticAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".cta-element",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Magnetic Button Interaction
            const magneticArea = magneticAreaRef.current;
            const button = buttonRef.current;

            if (magneticArea && button) {
                const hoverArea = (e: MouseEvent) => {
                    const rect = magneticArea.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(button, {
                        x: x * 0.5, // Magnetism strength
                        y: y * 0.5,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                };

                const resetArea = () => {
                    gsap.to(button, {
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.3)"
                    });
                };

                magneticArea.addEventListener("mousemove", hoverArea);
                magneticArea.addEventListener("mouseleave", resetArea);

                return () => {
                    magneticArea.removeEventListener("mousemove", hoverArea);
                    magneticArea.removeEventListener("mouseleave", resetArea);
                };
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#0B1623] py-40 md:py-60 overflow-hidden z-10 border-t border-white/5">
            {/* Massive Spotlight Glow */}
            <div className="absolute inset-x-0 bottom-0 h-full w-full bg-[radial-gradient(circle_at_bottom_center,rgba(0,209,178,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none opacity-50" />

            <div className="container-tight relative z-10 flex flex-col items-center justify-center text-center">
                <div className="cta-element mb-8 inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-[#2F6BFF]/20 to-transparent border border-[#2F6BFF]/30 text-[#00D1B2]">
                    <Fingerprint className="h-8 w-8" />
                </div>

                <h2 className="cta-element font-heading text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-[-0.03em] text-white leading-[0.95] max-w-6xl mb-8 drop-shadow-[0_0_40px_rgba(47,107,255,0.2)]">
                    Redefine Operational
                    <span className="block text-[#00D1B2] mix-blend-screen opacity-90 pb-2">Sovereignty.</span>
                </h2>

                <p className="cta-element font-sans text-xl md:text-[1.35rem] font-medium leading-[1.6] text-white/60 max-w-2xl mb-16 tracking-tight">
                    Engineered exclusively for GCC enterprise leaders. Transition from legacy debt to absolute structural command.
                </p>

                <div className="cta-element relative flex flex-col items-center">
                    <div
                        ref={magneticAreaRef}
                        className="absolute inset-[-4rem] z-20 cursor-pointer"
                    />

                    {/* Inner glowing aura */}
                    <div className="absolute inset-0 rounded-full bg-[#00D1B2] blur-[40px] opacity-20 animate-pulse pointer-events-none" />

                    <Link
                        ref={buttonRef}
                        to="/contact"
                        className="group relative z-10 flex items-center justify-center overflow-hidden rounded-full bg-[#111F2E] border border-[#2F6BFF]/60 px-12 py-7 text-lg font-black tracking-wide text-white shadow-[0_20px_40px_-10px_rgba(47,107,255,0.5)] transition-all duration-300 hover:scale-[1.03]"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#2F6BFF] to-[#00D1B2] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <span className="relative z-10 flex items-center drop-shadow-md">
                            Initiate Engagement
                            <ArrowRight className="ms-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Link>

                    <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#00D1B2]/60">
                        Board-Level Execution Model
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ITCFinalCta;
