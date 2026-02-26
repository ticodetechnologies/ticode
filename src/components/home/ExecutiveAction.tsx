import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExecutiveAction = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".cta-anim",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#0C1117] py-12 md:py-20 border-b border-[#1F2937] font-sans"
        >
            <div className="container-tight relative z-10 flex flex-col items-center justify-center text-center">
                <div className="cta-anim mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                    <span className="h-1.5 w-1.5 bg-[#2563EB]" />
                    Executive Command
                </div>

                <h2 className="cta-anim text-5xl font-bold tracking-tight text-[#F9FAFB] md:text-7xl lg:text-[7.5rem] leading-none mb-8">
                    Initiate Strategic
                    <span className="block text-[#9CA3AF] mt-2">
                        Engagement.
                    </span>
                </h2>

                <p className="cta-anim mt-4 text-lg md:text-xl font-medium leading-relaxed text-[#9CA3AF] max-w-2xl">
                    Execute your organization's sovereign digital architecture with the Ticode Engineering Board.
                </p>

                <div className="cta-anim mt-16 flex flex-col sm:flex-row items-center justify-center w-full">
                    <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center bg-[#2563EB] text-[#F9FAFB] px-10 py-5 text-base font-semibold transition-colors hover:bg-[#1D4ED8] w-full sm:w-auto"
                    >
                        Schedule Technical Audit
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveAction;
