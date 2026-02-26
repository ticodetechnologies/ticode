import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const CaseEvidence = () => {
    const containerRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.fromTo(
                ".evidence-anim-title",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative bg-base py-12 md:py-20 border-b border-white/5 font-sans overflow-hidden" ref={containerRef}>
            {/* Soft background grid texture */}
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />

            <div className="container-tight relative z-10 w-full">
                <div className="mx-auto max-w-[1200px]">
                    <div className="evidence-anim-title mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="mb-8 inline-flex items-center gap-3 w-max">
                                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                                <span className="text-xs font-bold tracking-widest text-white/50 uppercase font-mono">
                                    Objective Proof
                                </span>
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-5xl pb-2">
                                Verified Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">Impact.</span>
                            </h2>
                        </div>
                        <Link
                            to="/case-studies"
                            className="group hidden items-center text-sm font-bold text-white/60 transition-colors hover:text-brand-blue md:flex uppercase tracking-widest font-mono"
                        >
                            Access Full Archive
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div
                        ref={cardRef}
                        className="flex flex-col lg:flex-row border border-white/10 bg-[#0B1521] overflow-hidden rounded-[2rem] shadow-[0_20px_40px_-20px_rgba(47,107,255,0.15)] group/card"
                    >
                        {/* Visual Side */}
                        <div className="relative w-full lg:w-2/5 min-h-[400px] bg-[#071018] border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col items-center justify-center p-8 overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-overlay scale-105 transition-transform duration-1000 group-hover/card:scale-100 grayscale"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-[#071018]/50 pointer-events-none"></div>

                            <div className="relative z-10 w-full p-8 bg-[#0B1521] border border-white/10 shadow-lg transition-all duration-500 hover:border-brand-blue/30 hover:shadow-brand-blue/10 rounded-2xl group-hover/card:-translate-y-1">
                                {/* Status header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-white/40" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 font-mono">Network State</span>
                                    </div>
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                                    </span>
                                </div>

                                {/* Before */}
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/5 pb-4 mb-4 gap-2">
                                    <div>
                                        <div className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1 font-mono">State: Legacy</div>
                                        <div className="text-sm font-medium text-white/50">Query Res</div>
                                    </div>
                                    <div className="font-mono text-2xl text-white/40 line-through decoration-white/20">
                                        4,250ms
                                    </div>
                                </div>

                                {/* After */}
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pt-2">
                                    <div>
                                        <div className="text-[10px] uppercase font-bold tracking-widest text-brand-blue mb-1 font-mono">State: Sovereign</div>
                                        <div className="text-sm font-bold text-white">Query Res</div>
                                    </div>
                                    <div className="font-mono text-4xl font-bold text-white tracking-tight">
                                        12<span className="text-xl text-white/50 font-sans">ms</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex flex-col justify-center p-8 lg:p-14 w-full lg:w-3/5 bg-[#0B1521] relative">
                            {/* Quote Icon watermark */}
                            <div className="absolute top-10 right-10 text-[120px] font-serif leading-none text-white/[0.02] select-none pointer-events-none">
                                "
                            </div>

                            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50 font-mono">
                                Extract: Board Protocol Memo
                            </div>
                            <blockquote className="mb-12 border-l-4 border-brand-blue pl-6 py-2 relative z-10">
                                <p className="text-xl md:text-2xl leading-[1.6] text-white font-bold">
                                    "The velocity of digital transformation requires an infrastructure that can scale with absolute security. Ticode engineered that foundation."
                                </p>
                            </blockquote>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 border-b border-white/5 pb-10">
                                <div className="group/metric">
                                    <div className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tighter group-hover/metric:text-transparent group-hover/metric:bg-clip-text group-hover/metric:bg-gradient-to-r group-hover/metric:from-brand-blue group-hover/metric:to-accent-cyan transition-all">
                                        340<span className="text-white/50 font-sans text-3xl md:text-4xl">%</span>
                                    </div>
                                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/50 font-mono">
                                        Operational Yield
                                    </div>
                                </div>
                                <div className="group/metric">
                                    <div className="text-4xl md:text-5xl font-bold font-mono text-white tracking-tighter group-hover/metric:text-transparent group-hover/metric:bg-clip-text group-hover/metric:bg-gradient-to-r group-hover/metric:from-brand-blue group-hover/metric:to-accent-cyan transition-all">
                                        Zero
                                    </div>
                                    <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/50 font-mono">
                                        Data Exfiltration Risk
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="h-16 w-16 overflow-hidden bg-white/5 border border-white/10 rounded-[1rem] shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                                        alt="Executive Profiler"
                                        className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-white tracking-tight">Ibrahim Al-Rashid</div>
                                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider mt-1 font-mono">
                                        Chief Technology Officer, <br className="md:hidden" /> Top-Tier GCC Bank
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center md:hidden evidence-anim-title">
                        <Button
                            asChild
                            variant="default"
                            className="w-full bg-gradient-to-r from-brand-blue to-accent-cyan text-white hover:opacity-90 rounded-[1rem] py-6 h-auto tracking-wide font-bold text-sm shadow-[0_4px_14px_0_rgba(47,107,255,0.39)]"
                        >
                            <Link to="/case-studies">
                                Access Full Archive <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseEvidence;
