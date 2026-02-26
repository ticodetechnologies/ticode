import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Target, Activity, Zap, CheckCircle2, Factory } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const caseKeys = ['challenge', 'strategy', 'implementation', 'outcome'] as const;

const keyIcons: Record<string, React.ReactNode> = {
  challenge: <Target className="w-5 h-5 text-rose-500" />,
  strategy: <Activity className="w-5 h-5 text-amber-500" />,
  implementation: <Zap className="w-5 h-5 text-brand-blue" />,
  outcome: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
};

const CaseStudies = () => {
  const { t } = useTranslation();
  const studies = t('pages.caseStudies.studies', { returnObjects: true }) as { title: string; industry: string; challenge: string; strategy: string; implementation: string; outcome: string }[];

  const heroRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const magneticButtonRef = useRef<HTMLAnchorElement>(null);
  const magneticTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
        .fromTo('.hero-title .overflow-hidden span', {
          y: 60,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out"
        }, 0.3)
        .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.6)
        .fromTo('.hero-visual-element', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }, 0.4);

      // Hero data nodes float
      gsap.to('.hero-visual-element', {
        y: -15,
        rotationZ: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Case Studies List Reveal
      gsap.fromTo('.case-study-card', {
        y: 60,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      // 3. CTA Pull
      gsap.fromTo('.cta-content', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });

      // Magnetic Button Effect for final CTA
      const button = magneticButtonRef.current;
      const text = magneticTextRef.current;

      if (button && text) {
        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const { clientX, clientY } = e;
          const x = (clientX - (rect.left + rect.width / 2)) * 0.2;
          const y = (clientY - (rect.top + rect.height / 2)) * 0.2;

          xTo(x);
          yTo(y);
          textXTo(x * 0.5);
          textYTo(y * 0.5);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
          textXTo(0);
          textYTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          button.removeEventListener("mousemove", handleMouseMove);
          button.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEOHead title={`${t('caseStudies.title')} | Ticode Technologies`} description={t('pages.caseStudies.subtitle')} path="/case-studies" />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* --- 1. DARK HERO SECTION --- */}
        <section ref={heroRef} className="relative w-full min-h-[85vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Background Texture/Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          {/* Radial Gradient for focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,107,255,0.06)_0%,transparent_70%)]"></div>

          <div className="container relative z-10 flex flex-col items-center text-center h-full px-6 max-w-5xl mx-auto">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-10">
              <FileText className="w-3.5 h-3.5" />
              {t('caseStudies.title')}
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
              <div className="overflow-hidden"><span className="block">Real-World Impact,</span></div>
              <div className="overflow-hidden"><span className="block text-brand-blue">Measurable Outcomes.</span></div>
            </h1>

            <p className="hero-desc text-lg lg:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-16">
              {t('pages.caseStudies.subtitle')}
            </p>

            {/* Abstract Data Nodes Visual */}
            <div className="hero-visual-element relative w-full h-[200px] max-w-4xl opacity-80 pointer-events-none">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
              <div className="absolute top-1/2 left-[15%] w-16 h-16 -mt-8 bg-brand-blue/10 border border-brand-blue/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                <Activity className="w-6 h-6 text-brand-blue" />
              </div>
              <div className="absolute top-1/2 left-[50%] -translate-x-1/2 w-24 h-24 -mt-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(45,107,255,0.15)] z-10">
                <Factory className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-1/2 right-[15%] w-16 h-16 -mt-8 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. BRIGHT EXPANSIVE BENTO LIST SECTION --- */}
        <section ref={listRef} className="w-full pb-32 -mt-12 space-y-16 px-6 relative z-10">
          <div className="container max-w-5xl mx-auto space-y-12">

            {studies.map((s, i) => (
              <div
                key={i}
                className="case-study-card bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-brand-blue/5 overflow-hidden relative group"
              >
                {/* Top Header: Industry & Title */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 border-b border-slate-100 pb-10">
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold tracking-widest uppercase mb-4">
                      {s.industry}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-brand-blue transition-colors duration-300">
                      {s.title}
                    </h2>
                  </div>
                </div>

                {/* Bottom Grid: The 4 Metrics/Stages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

                  {/* Challenge */}
                  <div className="flex flex-col">
                    <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                      {keyIcons.challenge} {t(`caseStudies.challenge`)}
                    </div>
                    <p className="text-base text-slate-600 font-medium leading-relaxed">
                      {s.challenge}
                    </p>
                  </div>

                  {/* Strategy */}
                  <div className="flex flex-col">
                    <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                      {keyIcons.strategy} {t(`caseStudies.strategy`)}
                    </div>
                    <p className="text-base text-slate-600 font-medium leading-relaxed">
                      {s.strategy}
                    </p>
                  </div>

                  {/* Implementation */}
                  <div className="flex flex-col">
                    <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                      {keyIcons.implementation} {t(`caseStudies.implementation`)}
                    </div>
                    <p className="text-base text-slate-600 font-medium leading-relaxed">
                      {s.implementation}
                    </p>
                  </div>

                  {/* Business Impact / Outcome (Highlighted Bento Box) */}
                  <div className="flex flex-col bg-[#F8FAFC] p-6 rounded-2xl border border-slate-100 group-hover:bg-brand-blue/5 group-hover:border-brand-blue/20 transition-colors">
                    <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-4 flex items-center gap-2 group-hover:text-brand-blue transition-colors">
                      {keyIcons.outcome} {t(`caseStudies.outcome`)}
                    </div>
                    <p className="text-base font-bold text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors">
                      {s.outcome}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* --- 3. DARK CTA SECTION --- */}
        <section ref={ctaRef} className="w-full py-24 md:py-32 bg-slate-950 text-center border-t border-slate-800 overflow-hidden relative flex flex-col items-center justify-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          <div className="cta-content container relative z-10 px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-16 max-w-4xl mx-auto">
              {t('pages.caseStudies.ctaTitle')}
            </h2>

            {/* Massive Magnetic Button */}
            <Link
              to="/contact"
              ref={magneticButtonRef}
              className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 rounded-full bg-brand-blue text-white group cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-20"></div>
              <div className="absolute inset-4 rounded-full border border-white/20"></div>
              <span
                ref={magneticTextRef}
                className="relative z-10 font-black text-2xl md:text-3xl lg:text-4xl tracking-tight flex flex-col items-center gap-2 md:gap-4 text-center px-8"
              >
                <span>{t('nav.bookConsultation')}</span>
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-y-2 transition-transform rotate-90" />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudies;
