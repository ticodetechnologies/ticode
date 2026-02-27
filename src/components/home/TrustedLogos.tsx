import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
    "Kuwait Finance House",
    "Gulf Bank",
    "Ooredoo",
    "Zain",
    "Saudi Aramco",
    "PIF",
    "Etisalat",
    "NBK",
    "Agility"
];

const TrustedLogos = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite scroll effect for logos
            gsap.to(".logo-track", {
                xPercent: -50,
                ease: "none",
                duration: 35,
                repeat: -1
            });
        }, scrollRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-[#0A111A] border-b border-white/5 py-8 overflow-hidden relative" ref={scrollRef}>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A111A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A111A] to-transparent z-10 pointer-events-none" />

            <div className="container-tight flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono bg-white/5 px-3 py-1.5 rounded-md border border-white/10">Trusted By</span>
                </div>

                <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                    <div className="logo-track flex items-center gap-12 sm:gap-16 w-max">
                        {/* First Set */}
                        {logos.map((logo, idx) => (
                            <span key={`logo-1-${idx}`} className="text-xl sm:text-2xl font-black tracking-tighter text-white/20 whitespace-nowrap transition-colors hover:text-white/60 cursor-default">
                                {logo}
                            </span>
                        ))}
                        {/* Duplicate for seamless looping */}
                        {logos.map((logo, idx) => (
                            <span key={`logo-2-${idx}`} className="text-xl sm:text-2xl font-black tracking-tighter text-white/20 whitespace-nowrap transition-colors hover:text-white/60 cursor-default">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedLogos;
