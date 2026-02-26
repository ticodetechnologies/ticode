import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, ArrowRight, TrendingUp, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import type { IndustryData } from "@/data/industries";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    industry: IndustryData;
}

const LuxuryCaseStudy = ({ industry }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".case-element",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            counterRefs.current.forEach((el) => {
                if (!el) return;
                const targetValue = parseInt(el.getAttribute("data-target") || "0");
                const obj = { val: 0 };

                ScrollTrigger.create({
                    trigger: el,
                    start: "top 85%",
                    onEnter: () => {
                        gsap.to(obj, {
                            val: targetValue,
                            duration: 2,
                            ease: "power2.out",
                            onUpdate: () => {
                                el.innerText = Math.round(obj.val).toString();
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
        <section ref={containerRef} className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-slate-200">
            <div className="container-tight relative z-10">
                <div className="case-element mb-16 md:mb-20 flex flex-col items-center text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
                        How We Transform <span className="text-slate-400">{industry.title} Operations.</span>
                    </h2>
                    <p className="max-w-2xl text-lg text-slate-600 font-medium leading-relaxed">
                        A structured, data-driven methodology to guarantee seamless digital infrastructure integration.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-slate-200" />

                    <div className="space-y-12 relative z-10">
                        {/* Step 1 */}
                        <div className="case-element relative pl-20 md:pl-24">
                            <div className="absolute left-0 h-14 w-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-blue font-black text-xl shadow-sm">
                                01
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">The Challenge</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{industry.caseStudy.challenge}</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="case-element relative pl-20 md:pl-24">
                            <div className="absolute left-0 h-14 w-14 rounded-2xl bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-black text-xl shadow-sm">
                                02
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Cpu className="h-5 w-5 text-brand-blue" />
                                    <h3 className="text-xl font-bold text-slate-900">Strategic Response</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-medium">{industry.caseStudy.strategy}</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="case-element relative pl-20 md:pl-24">
                            <div className="absolute left-0 h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-black text-xl shadow-sm">
                                03
                            </div>
                            <div className="bg-white rounded-2xl border border-emerald-100 bg-emerald-50/30 p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Measured Outcome</h3>
                                <p className="text-slate-700 leading-relaxed font-medium mb-6">{industry.caseStudy.outcome}</p>

                                <div className="flex items-baseline gap-1 mt-auto">
                                    <div className="text-4xl font-mono font-black text-emerald-600 tracking-tight">
                                        <div ref={(el) => (counterRefs.current[0] = el)} data-target="100" className="inline-block">0</div>%
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-3">Efficiency Gain</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integrated Testimonial */}
                <div className="case-element mt-20 max-w-4xl mx-auto">
                    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden">
                        <Quote className="h-10 w-10 text-brand-blue/20 mx-auto mb-6" />
                        <blockquote className="text-xl md:text-2xl font-serif font-medium leading-relaxed text-slate-800 mb-8 italic">
                            "The Ticode sovereign infrastructure modernized our operation deeply. They delivered boardroom clarity disguised as elegant technology."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-12 w-12 rounded-full overflow-hidden ring-4 ring-white shadow-sm">
                                <img src="https://i.pravatar.cc/150?img=11" alt="Executive" className="h-full w-full object-cover" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900">Executive Director</div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">Tier-1 {industry.title} Entity</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-900 hover:bg-slate-50 hover:border-brand-blue/30 transition-all shadow-sm group"
                    >
                        Schedule an Assessment
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LuxuryCaseStudy;
