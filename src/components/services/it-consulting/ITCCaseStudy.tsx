import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, ArrowRight, Activity, Zap, Building } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ITCCaseStudy = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLDivElement | null)[]>([]);
    const quoteRef = useRef<HTMLQuoteElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".case-element",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.fromTo(
                ".metric-reveal",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".metric-reveal",
                        start: "top 85%"
                    }
                }
            );

            if (quoteRef.current) {
                const words = quoteRef.current.innerText.split(' ');
                quoteRef.current.innerHTML = '';
                words.forEach(word => {
                    const span = document.createElement('span');
                    span.innerText = word + ' ';
                    span.className = 'inline-block opacity-0 translate-y-3';
                    quoteRef.current!.appendChild(span);
                });

                gsap.to(quoteRef.current.children, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: quoteRef.current,
                        start: "top 80%"
                    }
                });
            }

            counterRefs.current.forEach((el) => {
                if (!el) return;
                const targetValue = parseFloat(el.getAttribute("data-target") || "0");
                const obj = { val: 0 };

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.to(obj, {
                            val: targetValue,
                            duration: 2.5,
                            ease: "expo.out",
                            onUpdate: () => {
                                el.innerText = obj.val.toFixed(0);
                            }
                        });
                    },
                    once: true
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#02080D] py-12 md:py-20 overflow-hidden z-10 border-t border-white/5">
            {/* Cinematic Background Image Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center pointer-events-none opacity-10 mix-blend-luminosity grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02080D] via-[#0B1623]/80 to-[#02080D] pointer-events-none" />

            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[#2F6BFF]/5 blur-[150px] pointer-events-none" />

            <div className="container-tight relative z-10">
                <div className="case-element mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#00D1B2]">
                            Executive Case Study
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-black tracking-[-0.02em] text-white leading-[1.05]">
                            Regulated Financial <br />
                            <span className="text-[#2F6BFF]">Services Transformation.</span>
                        </h2>
                    </div>
                    <Link
                        to="/case-studies"
                        className="group hidden md:inline-flex items-center text-sm font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                    >
                        View Full Archive
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Data/Metrics Panel */}
                    <div className="case-element lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/5 bg-[#111F2E] p-8 md:p-12 overflow-hidden relative">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--tw-gradient-stops))', background: 'radial-gradient(#00D1B2 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                        <div className="relative z-10 mb-16">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#00D1B2] mb-3 block">Structural Challenge</h3>
                            <p className="text-[1.1rem] font-medium leading-[1.65] font-sans text-white/80">
                                A Tier-1 GCC financial institution required immediate architectural consolidation to meet stringent regulatory audits without inflating run-rate operational costs.
                            </p>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 border-t border-white/10 pt-10 mt-auto">
                            <div className="metric-reveal relative group">
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#2F6BFF] mb-4">
                                    Operational Cost Impact
                                </div>
                                <div>
                                    <div className="flex items-start gap-2 text-white/60 mb-3">
                                        <Zap className="h-4 w-4 shrink-0 mt-0.5 text-white/40 group-hover:text-[#00D1B2] transition-colors" />
                                        <span className="text-sm leading-snug font-medium font-sans">Platform consolidation reduced OPEX run-rate instantly.</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-4 text-[2.5rem] font-mono font-black text-white mix-blend-screen group-hover:text-[#00D1B2] transition-colors duration-500">
                                        <div ref={(el) => (counterRefs.current[0] = el)} data-target="22">0</div>
                                        <span className="text-xl">% Red.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="metric-reveal relative before:hidden sm:before:block before:absolute before:-left-3 lg:before:-left-6 before:top-0 before:h-full before:w-px before:bg-white/5 group">
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-[#00D1B2] mb-4">
                                    Audit Readiness
                                </div>
                                <div>
                                    <div className="flex items-start gap-2 text-white/60 mb-3">
                                        <Activity className="h-4 w-4 shrink-0 mt-0.5 text-white/40 group-hover:text-[#00D1B2] transition-colors" />
                                        <span className="text-sm leading-snug font-medium font-sans">Compliance matrix mapped and verified ahead of schedule.</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-4 text-[2.5rem] font-mono font-black text-white mix-blend-screen group-hover:text-[#00D1B2] transition-colors duration-500">
                                        <div ref={(el) => (counterRefs.current[1] = el)} data-target="11">0</div>
                                        <span className="text-xl">Wks</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Editorial Quote Panel */}
                    <div className="case-element lg:col-span-5 relative flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#111F2E] to-[#0B1623] border border-white/5 p-10 md:p-14 overflow-hidden shadow-2xl">

                        {/* Dramatic Lighting Effect */}
                        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,209,178,0.05)_0%,transparent_60%)] pointer-events-none" />

                        {/* Client Blueprint Silhouette */}
                        <Building className="absolute -bottom-10 -right-10 h-64 w-64 text-white opacity-[0.02] -rotate-12 pointer-events-none" />

                        <Quote className="h-10 w-10 text-[#2F6BFF] mb-8 shrink-0 opacity-50 relative z-10" />

                        <blockquote ref={quoteRef} className="relative z-10 text-[1.35rem] font-serif font-medium leading-[1.6] text-white/90 mb-10 italic">
                            "Ticode Technologies modernized our operation deeply. They delivered boardroom clarity disguised as elegant technology, securing our compliance posture for the next decade."
                        </blockquote>

                        <div className="relative z-10 mt-auto pt-8 border-t border-white/5">
                            <div className="text-lg font-bold text-white tracking-wide font-heading">Chief Operating Officer</div>
                            <div className="text-[10px] uppercase font-bold text-[#00D1B2] font-mono tracking-[0.2em] mt-2">Tier-1 GCC Financial Entity</div>
                        </div>
                    </div>

                </div>

                <div className="mt-10 flex justify-center md:hidden">
                    <Link
                        to="/case-studies"
                        className="inline-flex items-center justify-center w-full rounded-full border border-white/10 bg-white/5 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                        View Full Archive
                        <ArrowRight className="ml-3 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ITCCaseStudy;
