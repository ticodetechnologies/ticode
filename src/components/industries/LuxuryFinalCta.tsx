import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { IndustryData } from "@/data/industries";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    industry: IndustryData;
}

const LuxuryFinalCta = ({ industry }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const magneticAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".cta-element",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            const magneticArea = magneticAreaRef.current;
            const button = buttonRef.current;

            if (magneticArea && button) {
                const hoverArea = (e: MouseEvent) => {
                    const rect = magneticArea.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    gsap.to(button, {
                        x: x * 0.4,
                        y: y * 0.4,
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
        <section ref={containerRef} className="relative bg-[#0A101A] py-40 md:py-64 overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,107,255,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="container-tight relative z-10 flex flex-col items-center justify-center text-center">
                <h2 className="cta-element font-heading text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tight text-white leading-[0.9] max-w-6xl mb-8 drop-shadow-2xl">
                    Transform {industry.title}
                    <span className="block text-white/40 mt-3">Intelligence.</span>
                </h2>

                <p className="cta-element text-xl md:text-2xl font-medium leading-relaxed text-white/50 max-w-2xl mb-20 tracking-wide">
                    AI-driven automation built for GCC leaders.
                </p>

                <div className="cta-element relative flex items-center justify-center">
                    <div
                        ref={magneticAreaRef}
                        className="absolute -inset-16 z-20 cursor-pointer"
                    />

                    <div className="absolute inset-0 rounded-full bg-brand-blue blur-[60px] opacity-20 animate-pulse pointer-events-none -m-8" />

                    <Link
                        ref={buttonRef}
                        to="/contact"
                        className="group relative z-10 flex items-center justify-center overflow-hidden rounded-full bg-brand-blue px-14 py-8 text-xl font-bold text-white shadow-[0_20px_40px_-10px_rgba(45,107,255,0.4)] transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600"
                    >
                        <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-black/20 to-transparent transition-transform duration-300 group-hover:translate-y-0" />

                        <span className="relative z-10 flex items-center tracking-wide">
                            Initiate Intelligence
                            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LuxuryFinalCta;
