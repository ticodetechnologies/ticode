import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const TrustedLogos = () => {
    const { t } = useTranslation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const logos = t("home.trust.logos", { returnObjects: true }) as string[];

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
        <div className="w-full bg-[#0A111A] border-y border-white/[0.07] py-7 overflow-hidden relative" ref={scrollRef}>
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A111A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A111A] to-transparent z-10 pointer-events-none" />

            <div className="container-tight flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0 flex items-center gap-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500 font-mono whitespace-nowrap">
                        {t("home.trust.label")}
                    </span>
                    <div className="hidden md:block w-px h-5 bg-white/10" />
                </div>

                <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                    <div className="logo-track flex items-center gap-14 sm:gap-20 w-max">
                        {/* First Set */}
                        {logos.map((logo, idx) => (
                            <span key={`logo-1-${idx}`} className="text-base sm:text-lg font-black tracking-tight text-white/40 whitespace-nowrap transition-colors duration-300 hover:text-white/75 cursor-default uppercase">
                                {logo}
                            </span>
                        ))}
                        {/* Duplicate for seamless looping */}
                        {logos.map((logo, idx) => (
                            <span key={`logo-2-${idx}`} className="text-base sm:text-lg font-black tracking-tight text-white/40 whitespace-nowrap transition-colors duration-300 hover:text-white/75 cursor-default uppercase">
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
