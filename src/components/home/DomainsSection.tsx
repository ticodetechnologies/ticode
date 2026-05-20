import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Landmark, HeartPulse, Building2, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// Per-industry visual identity
const industryThemes = [
    {
        id: "finance",
        Icon: Landmark,
        link: "/industries",
        accent:    "#2F6BFF",
        iconBg:    "bg-brand-blue/10 border-brand-blue/30",
        iconClr:   "text-brand-blue",
        topLine:   "from-brand-blue via-brand-blue/40 to-transparent",
        tagBg:     "bg-brand-blue/10 border-brand-blue/20 text-brand-blue/80",
        tagHover:  "group-hover:bg-brand-blue/20 group-hover:border-brand-blue/40 group-hover:text-brand-blue",
        arrowBg:   "group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 group-hover:text-brand-blue",
        glow:      "group-hover:shadow-[0_24px_60px_-15px_rgba(47,107,255,0.25)]",
        border:    "group-hover:border-brand-blue/30",
    },
    {
        id: "healthcare",
        Icon: HeartPulse,
        link: "/industries",
        accent:    "#00C2FF",
        iconBg:    "bg-accent-cyan/10 border-accent-cyan/30",
        iconClr:   "text-accent-cyan",
        topLine:   "from-accent-cyan via-accent-cyan/40 to-transparent",
        tagBg:     "bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan/80",
        tagHover:  "group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan/40 group-hover:text-accent-cyan",
        arrowBg:   "group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 group-hover:text-accent-cyan",
        glow:      "group-hover:shadow-[0_24px_60px_-15px_rgba(0,194,255,0.2)]",
        border:    "group-hover:border-accent-cyan/30",
    },
    {
        id: "government",
        Icon: Building2,
        link: "/industries",
        accent:    "#8B5CF6",
        iconBg:    "bg-violet-500/10 border-violet-500/30",
        iconClr:   "text-violet-400",
        topLine:   "from-violet-500 via-violet-500/40 to-transparent",
        tagBg:     "bg-violet-500/10 border-violet-500/20 text-violet-400/80",
        tagHover:  "group-hover:bg-violet-500/20 group-hover:border-violet-500/40 group-hover:text-violet-400",
        arrowBg:   "group-hover:bg-violet-500/10 group-hover:border-violet-500/30 group-hover:text-violet-400",
        glow:      "group-hover:shadow-[0_24px_60px_-15px_rgba(139,92,246,0.2)]",
        border:    "group-hover:border-violet-500/30",
    },
    {
        id: "energy",
        Icon: Zap,
        link: "/industries",
        accent:    "#F59E0B",
        iconBg:    "bg-amber-500/10 border-amber-500/30",
        iconClr:   "text-amber-400",
        topLine:   "from-amber-500 via-amber-500/40 to-transparent",
        tagBg:     "bg-amber-500/10 border-amber-500/20 text-amber-400/80",
        tagHover:  "group-hover:bg-amber-500/20 group-hover:border-amber-500/40 group-hover:text-amber-400",
        arrowBg:   "group-hover:bg-amber-500/10 group-hover:border-amber-500/30 group-hover:text-amber-400",
        glow:      "group-hover:shadow-[0_24px_60px_-15px_rgba(245,158,11,0.2)]",
        border:    "group-hover:border-amber-500/30",
    },
];

const DomainsSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const translatedDomains = t("home.domains.items", { returnObjects: true }) as any[];

    const industriesData = industryThemes.map((theme, index) => {
        const translation = (translatedDomains && translatedDomains[index]) || {};
        return {
            ...theme,
            title:       translation.title       || "",
            description: translation.description || "",
            features:    translation.features    || [],
        };
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".domain-anim-el",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
            );
            gsap.fromTo(
                ".domain-anim-card",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, stagger: 0.12, duration: 1, ease: "power2.out",
                  scrollTrigger: { trigger: gridRef.current, start: "top 80%" } }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-[#0B1729] py-16 md:py-24 font-sans border-b border-white/5" ref={containerRef}>
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />
            <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container-tight relative z-10">
                {/* Header */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="domain-anim-el mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
                                {t("home.domains.badge")}
                            </span>
                        </div>
                        <h2 className="domain-anim-el text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            {t("home.domains.title")}
                        </h2>
                    </div>
                    <Link
                        to="/industries"
                        className="domain-anim-el shrink-0 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors group"
                    >
                        {t("home.domains.explore", "View All Industries")}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* 2×2 Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6" ref={gridRef}>
                    {industriesData.map((industry) => {
                        const Icon = industry.Icon;
                        return (
                            <Link
                                key={industry.id}
                                to={industry.link}
                                className={`domain-anim-card group relative flex flex-col bg-[#0D1E33] rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-500 hover:-translate-y-1 ${industry.glow} ${industry.border}`}
                            >
                                {/* Top accent line */}
                                <div className={`h-[2px] w-full bg-gradient-to-r ${industry.topLine} flex-shrink-0`} />

                                {/* Inner hover glow */}
                                <div className="absolute top-0 end-0 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{ background: `${industry.accent}18` }} />

                                <div className="flex flex-col flex-1 p-7 md:p-8">
                                    {/* Top row: icon + arrow */}
                                    <div className="flex items-start justify-between mb-7">
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl border ${industry.iconBg} ${industry.iconClr} transition-all duration-300`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className={`flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/25 transition-all duration-300 ${industry.arrowBg}`}>
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>

                                    {/* Title + Description */}
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3 leading-snug">
                                        {industry.title}
                                    </h3>
                                    <p className="text-[15px] font-medium leading-[1.7] text-slate-400 group-hover:text-slate-300 transition-colors duration-300 flex-1 mb-7">
                                        {industry.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="border-t border-white/[0.06] mb-5" />

                                    {/* Feature tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {industry.features.map((feature, i) => (
                                            <span
                                                key={i}
                                                className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide font-mono border transition-all duration-300 ${industry.tagBg} ${industry.tagHover}`}
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DomainsSection;
