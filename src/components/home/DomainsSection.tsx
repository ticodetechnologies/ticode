import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Landmark, HeartPulse, Building2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

gsap.registerPlugin(ScrollTrigger);

const baseIndustriesData = [
    {
        id: "finance",
        icon: <Landmark className="h-8 w-8 text-brand-blue/70 transition-colors group-hover:text-brand-blue" />,
        link: "/industries"
    },
    {
        id: "healthcare",
        icon: <HeartPulse className="h-8 w-8 text-brand-blue/70 transition-colors group-hover:text-brand-blue" />,
        link: "/industries"
    },
    {
        id: "government",
        icon: <Building2 className="h-8 w-8 text-brand-blue/70 transition-colors group-hover:text-brand-blue" />,
        link: "/industries"
    },
    {
        id: "energy",
        icon: <Zap className="h-8 w-8 text-brand-blue/70 transition-colors group-hover:text-brand-blue" />,
        link: "/industries"
    }
];

const DomainsSection = () => {
    const { t } = useTranslation();
    const { isRTL } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const translatedDomains = t("home.domains.items", { returnObjects: true }) as any[];

    const industriesData = baseIndustriesData.map((base, index) => {
        const translation = (translatedDomains && translatedDomains[index]) || {};
        return {
            ...base,
            title: translation.title,
            subtitle: translation.subtitle,
            description: translation.description,
            features: translation.features || [],
        };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".domain-anim-el",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            gsap.fromTo(
                ".domain-anim-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-[#0E1A2B] py-12 md:py-20 font-sans border-b border-white/5" ref={containerRef}>
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-50" />

            <div className="container-tight relative z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-3xl">
                        <div className="domain-anim-el mb-8 flex items-center gap-3 w-max">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
                                {t("home.domains.badge")}
                            </span>
                        </div>
                        <h2 className="domain-anim-el text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-5xl leading-tight pb-2">
                            {t("home.domains.title")}
                        </h2>
                    </div>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]" ref={gridRef}>
                    {industriesData.map((industry) => (
                        <Link
                            key={industry.id}
                            to={industry.link}
                            className="domain-anim-card group flex flex-col justify-between bg-[#0E1A2B] p-6 md:p-14 transition-colors hover:bg-[#111C2D] relative overflow-hidden"
                        >
                            {/* Gradient Border top on Hover */}
                            <div className={`absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-brand-blue to-accent-cyan transform scale-x-0 ${isRTL ? 'origin-right' : 'origin-left'} transition-transform duration-500 ease-out group-hover:scale-x-100 z-20`} />

                            {/* Inner ambient glow */}
                            <div className="absolute top-0 end-0 w-48 h-48 bg-brand-blue/10 rounded-full blur-[60px] group-hover:bg-accent-cyan/15 transition-colors duration-700 pointer-events-none z-0" />

                            <div className="relative z-10 mb-10 flex items-start justify-between">
                                <div className="inline-flex p-4 rounded-2xl bg-white/[0.02] ring-1 ring-white/10 ring-inset shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:bg-brand-blue/10 group-hover:ring-brand-blue/30 group-hover:shadow-[0_0_20px_rgba(47,107,255,0.15)]">
                                    <div className="text-brand-blue group-hover:text-accent-cyan transition-colors">
                                        {industry.icon}
                                    </div>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-white/20 transition-all duration-300 group-hover:bg-brand-blue/10 group-hover:text-accent-cyan">
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>

                            <div className="relative z-10 flex-grow">
                                <h3 className="mb-4 text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                                    {industry.title}
                                </h3>
                                <p className="mb-10 text-base font-medium leading-[1.7] text-white/60 max-w-md group-hover:text-white/80 transition-colors">
                                    {industry.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto pt-4">
                                <div className="flex flex-wrap gap-2">
                                    {industry.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="bg-white/[0.03] border border-white/5 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide text-white/50 font-mono transition-all group-hover:bg-white/[0.08] group-hover:text-white group-hover:border-white/10 shadow-sm"
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DomainsSection;
