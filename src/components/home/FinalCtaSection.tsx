import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Zap } from "lucide-react";
import gsap from "gsap";

const FinalCtaSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Slow ambient pulse for the background mesh nodes
        if (bgRef.current) {
            const orbs = bgRef.current.querySelectorAll('.mesh-orb');
            orbs.forEach((orb, i) => {
                gsap.to(orb, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 2
                });
            });
        }

        // Standard subtle hover/magnetic movement for the pill button
        const button = buttonRef.current;
        if (!button) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "power3.out" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = button.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * 0.15); // subtle movement
            yTo(y * 0.15);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="relative overflow-hidden bg-[#040A12] py-24 md:py-36 min-h-[80vh] flex items-center justify-center border-t border-white/5" ref={containerRef}>
            {/* Dark Ambient Mesh Background */}
            <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-70">
                <div className="mesh-orb absolute top-[20%] left-[30%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px]" />
                <div className="mesh-orb absolute bottom-[10%] right-[20%] w-[700px] h-[700px] bg-accent-cyan/10 rounded-full blur-[180px]" />
                <div className="mesh-orb absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[200px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#040A12_100%)] opacity-80" />
            </div>

            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30 z-0 pointer-events-none" />

            <div className="container-tight relative z-10 text-center flex flex-col items-center">

                <div className="mb-12 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <Zap className="h-4 w-4 text-accent-cyan fill-accent-cyan/20 animate-pulse" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white uppercase font-mono">
                        {t("home.finalCta.badge", "Execution Ready")}
                    </span>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-white leading-[1.05] max-w-5xl mx-auto mb-10 font-sans">
                    {t("home.finalCta.title", "Accelerate Your")}
                    <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500"> {t("home.finalCta.titleHighlight", "Enterprise.")}</span>
                </h2>

                <p className="text-lg md:text-xl font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed mb-16">
                    {t("home.finalCta.subtitle", "Transform your operational capacity with our strategic IT and comprehensive AI solutions.")}
                </p>

                {/* The Sleek Layered Pill Button */}
                <Link
                    to="/contact"
                    ref={buttonRef}
                    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#091422] rounded-full text-white overflow-hidden border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,1)] hover:border-brand-blue/50 transition-colors duration-500"
                >
                    {/* Hover internal glows */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-accent-cyan/10 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_15px_rgba(0,194,255,0.8)]" />

                    <span className="relative z-10 text-base font-bold tracking-widest uppercase font-mono">
                        {t("home.finalCta.primaryCta", "Initiate Strategic Engagement")}
                    </span>

                    <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-500">
                        <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default FinalCtaSection;
