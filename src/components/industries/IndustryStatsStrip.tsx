import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
    label: string;
    value: string;
    suffix?: string;
}

interface Props {
    stats: Stat[];
}

const IndustryStatsStrip = ({ stats }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".stat-item",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                    }
                }
            );

            // Animate counters
            counterRefs.current.forEach((el) => {
                if (!el) return;
                const target = parseInt(el.getAttribute("data-target") || "0", 10);

                gsap.to(el, {
                    innerHTML: target,
                    duration: 1.5,
                    ease: "power2.out",
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#0B1521] py-8 border-y border-white/10 relative overflow-hidden z-20">
            {/* Subtle light leak */}
            <div className="absolute top-0 end-1/4 w-96 h-96 bg-brand-blue/10 blur-[100px] pointer-events-none rounded-full" />

            <div className="container-tight">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="stat-item flex flex-col items-center justify-center text-center px-4">
                            <div className="flex items-baseline gap-1 text-3xl font-black text-white tracking-tight mb-1">
                                <div ref={(el) => (counterRefs.current[idx] = el)} data-target={stat.value.replace(/[^0-9]/g, '')}>
                                    0
                                </div>
                                <span className="text-xl text-brand-blue">{stat.suffix || stat.value.replace(/[0-9]/g, '')}</span>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-[#00D1B2]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryStatsStrip;
