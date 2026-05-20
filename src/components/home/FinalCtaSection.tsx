import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, MapPin, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
    { icon: MapPin,       label: "Kuwait City HQ",        sub: "On-the-ground GCC team" },
    { icon: ShieldCheck,  label: "Vendor-Neutral",         sub: "No product bias, ever" },
    { icon: Clock,        label: "Fast Response",          sub: "Reply within one business day" },
];

const FinalCtaSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        gsap.fromTo(
            ".cta-anim",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out",
              scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
        );

        const button = buttonRef.current;
        if (!button) return;
        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "power3.out" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "power3.out" });
        const move = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = button.getBoundingClientRect();
            xTo((clientX - (left + width / 2)) * 0.15);
            yTo((clientY - (top + height / 2)) * 0.15);
        };
        const reset = () => { xTo(0); yTo(0); };
        button.addEventListener("mousemove", move);
        button.addEventListener("mouseleave", reset);
        return () => { button.removeEventListener("mousemove", move); button.removeEventListener("mouseleave", reset); };
    }, []);

    return (
        <section
            className="relative overflow-hidden bg-[#F4F7FB] py-20 md:py-24 flex items-center justify-center border-t border-slate-200/80 font-sans"
            ref={containerRef}
        >
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.35]"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />

            <div className="container-tight relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">

                {/* Badge */}
                <div className="cta-anim mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-blue/8 border border-brand-blue/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-brand-blue uppercase font-mono">
                        {t("home.finalCta.badge", "Let's Work Together")}
                    </span>
                </div>

                {/* Headline */}
                <h2 className="cta-anim text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
                    {t("home.finalCta.title", "Ready to Transform")}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                        {t("home.finalCta.titleHighlight", "Your Enterprise?")}
                    </span>
                </h2>

                {/* Subtext */}
                <p className="cta-anim text-lg md:text-xl font-medium text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
                    {t("home.finalCta.subtitle", "Book a no-obligation strategy call with our Kuwait-based team. We'll map your current state and show you exactly what's possible.")}
                </p>

                {/* CTA Buttons */}
                <div className="cta-anim flex flex-col sm:flex-row items-center gap-4 mb-14">
                    {/* Primary */}
                    <Link
                        to="/contact"
                        ref={buttonRef}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-blue rounded-full text-white overflow-hidden border border-brand-blue shadow-[0_12px_40px_-10px_rgba(47,107,255,0.45)] hover:shadow-[0_16px_50px_-10px_rgba(47,107,255,0.55)] hover:bg-blue-600 transition-all duration-400"
                    >
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                        <span className="relative z-10 text-sm font-bold tracking-wide">
                            {t("home.finalCta.primaryCta", "Book a Free Consultation")}
                        </span>
                        <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                    </Link>

                    {/* Secondary */}
                    <Link
                        to="/services"
                        className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-slate-600 border border-slate-300/60 bg-white/50 hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
                    >
                        Explore Our Services
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Divider */}
                <div className="cta-anim w-full max-w-lg h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent mb-12" />

                {/* Trust items */}
                <div className="cta-anim grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
                    {trustItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex flex-col items-center gap-2 text-center">
                                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-blue/8 border border-brand-blue/15">
                                    <Icon className="w-4 h-4 text-brand-blue" />
                                </div>
                                <div className="text-sm font-bold text-slate-800">{item.label}</div>
                                <div className="text-[12px] text-slate-400 font-medium leading-snug">{item.sub}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
