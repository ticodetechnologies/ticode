import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ShieldCheck, TrendingUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const CaseEvidence = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".evidence-anim-title",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
            );
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 35 },
                { opacity: 1, y: 0, duration: 1.1, ease: "power2.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 75%",
                    onEnter: () => {
                        if (counterRef.current) {
                            gsap.to({ val: 0 }, {
                                val: 340, duration: 2.2, ease: "power2.out", delay: 0.4,
                                onUpdate: function () {
                                    if (counterRef.current) counterRef.current.innerText = Math.round(this.targets()[0].val).toString();
                                }
                            });
                        }
                    }
                  }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-[#070F1C] py-20 md:py-32 border-b border-white/5 font-sans overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-25 pointer-events-none" />
            <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-blue/6 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-accent-cyan/4 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                {/* Header */}
                <div className="evidence-anim-title mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
                                {t("home.evidence.badge")}
                            </span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-5xl leading-tight pb-2">
                            {t("home.evidence.title")}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                                {t("home.evidence.titleHighlight")}
                            </span>
                        </h2>
                    </div>
                    <Link
                        to="/case-studies"
                        className="group hidden md:inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-mono shrink-0"
                    >
                        {t("home.evidence.accessArchive")}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Main Card */}
                <div
                    ref={cardRef}
                    className="flex flex-col lg:flex-row border border-white/[0.10] bg-[#0D1E33] overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]"
                >
                    {/* Top accent line — always visible */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-blue via-accent-cyan/60 to-transparent rounded-t-[1.75rem] hidden" />

                    {/* Left Visual Panel */}
                    <div className="relative w-full lg:w-[42%] bg-[#071018] border-b lg:border-b-0 lg:border-e border-white/[0.08] flex flex-col justify-center p-8 lg:p-10 overflow-hidden">
                        {/* Top accent line */}
                        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-blue/40 to-transparent" />

                        {/* Background glow */}
                        <div className="absolute top-0 end-0 w-64 h-64 rounded-full bg-brand-blue/8 blur-[80px] pointer-events-none" />

                        {/* Network state card */}
                        <div className="relative z-10 w-full bg-[#0D1826] border border-brand-blue/20 rounded-2xl overflow-hidden shadow-[0_8px_30px_-8px_rgba(47,107,255,0.15)] hover:border-brand-blue/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgba(47,107,255,0.25)]">
                            {/* Card top accent */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-brand-blue via-brand-blue/50 to-transparent" />

                            <div className="p-6">
                                {/* Header row */}
                                <div className="flex items-center justify-between mb-7">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-blue/10 border border-brand-blue/30">
                                            <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                                            {t("home.evidence.networkState")}
                                        </span>
                                    </div>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
                                    </span>
                                </div>

                                {/* Before row */}
                                <div className="flex items-end justify-between border-b border-white/[0.06] pb-5 mb-5">
                                    <div>
                                        <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-slate-600 mb-1.5 font-mono">
                                            {t("home.evidence.stateLegacy")}
                                        </div>
                                        <div className="text-sm font-medium text-slate-500">
                                            {t("home.evidence.queryRes")}
                                        </div>
                                    </div>
                                    <div className="font-mono text-2xl text-slate-600 line-through decoration-slate-600/50">
                                        4,250<span className="text-base">ms</span>
                                    </div>
                                </div>

                                {/* After row */}
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-brand-blue mb-1.5 font-mono">
                                            {t("home.evidence.stateSovereign")}
                                        </div>
                                        <div className="text-sm font-bold text-white">
                                            {t("home.evidence.queryRes")}
                                        </div>
                                    </div>
                                    <div className="font-mono text-4xl font-black text-white tracking-tight">
                                        12<span className="text-xl text-brand-blue/70 font-sans">ms</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom label */}
                        <div className="relative z-10 mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 font-mono">
                            <span className="h-px flex-1 bg-white/[0.05]" />
                            VERIFIED DEPLOYMENT · GCC BANKING SECTOR
                            <span className="h-px flex-1 bg-white/[0.05]" />
                        </div>
                    </div>

                    {/* Right Content Panel */}
                    <div className="flex flex-col justify-center p-8 lg:p-12 w-full lg:w-[58%] bg-[#0D1E33] relative">
                        {/* Watermark quote */}
                        <div className="absolute top-8 end-8 text-[9rem] font-serif leading-none text-white/[0.025] select-none pointer-events-none">
                            "
                        </div>

                        {/* Extract label */}
                        <div className="mb-4 inline-flex items-center gap-2 w-max px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 font-mono">
                                {t("home.evidence.extract")}
                            </span>
                        </div>

                        {/* Quote */}
                        <blockquote className="mb-10 border-s-[3px] border-brand-blue ps-6 py-1 relative z-10">
                            <p className="text-xl md:text-2xl leading-[1.6] text-white font-bold tracking-tight">
                                {t("home.evidence.quote")}
                            </p>
                        </blockquote>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-white/[0.07]">
                            {/* Metric 1 — Operational Yield */}
                            <div className="group/metric">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-accent-cyan/10 border border-accent-cyan/25">
                                        <TrendingUp className="w-3 h-3 text-accent-cyan" />
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-accent-cyan/70 font-mono">
                                        {t("home.evidence.operationalYield")}
                                    </span>
                                </div>
                                <div className="font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-accent-cyan to-white">
                                    <span className="text-4xl md:text-5xl">
                                        <span ref={counterRef}>0</span>
                                    </span>
                                    <span className="text-2xl md:text-3xl opacity-75">%</span>
                                </div>
                            </div>

                            {/* Metric 2 — Zero Risk */}
                            <div className="group/metric">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/25">
                                        <Lock className="w-3 h-3 text-emerald-400" />
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400/70 font-mono">
                                        {t("home.evidence.dataExfiltrationRisk")}
                                    </span>
                                </div>
                                <div className="font-mono font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-white">
                                    <span className="text-4xl md:text-5xl">
                                        {t("home.evidence.zero")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="flex items-center gap-4">
                            <div className="h-14 w-14 overflow-hidden bg-brand-blue/10 border-2 border-brand-blue/30 rounded-xl shrink-0 shadow-[0_0_20px_rgba(47,107,255,0.2)]">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                                    alt="Executive"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-base text-white tracking-tight">
                                    {t("home.evidence.testimonialName")}
                                </div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 font-mono">
                                    {t("home.evidence.testimonialRole")}
                                </div>
                            </div>
                            <div className="ms-auto">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                                    VERIFIED
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 flex justify-center md:hidden evidence-anim-title">
                    <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-bold text-white hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300"
                    >
                        {t("home.evidence.accessFullArchiveBtn")}
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaseEvidence;
