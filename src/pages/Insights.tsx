import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Lightbulb, TerminalSquare, Compass } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const { t } = useTranslation();
  const articles = t('pages.insights.articles', { returnObjects: true }) as { title: string; category: string; date: string; summary: string }[];

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

      // Hero compass nod float
      gsap.to('.hero-visual-element', {
        y: -15,
        rotationZ: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Bento Grid Reveal
      gsap.fromTo('.insight-article-card', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
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
      <SEOHead title={`${t('nav.insights')} | Ticode Technologies`} description={t('pages.insights.subtitle')} path="/insights" type="website" />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* --- 1. DARK HERO SECTION --- */}
        <section ref={heroRef} className="relative w-full min-h-[85vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Background Texture/Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          {/* Radial Gradient for focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,107,255,0.08)_0%,transparent_70%)]"></div>

          <div className="container relative z-10 flex flex-col items-center text-center h-full px-6 max-w-4xl mx-auto">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-10">
              <BookOpen className="w-3.5 h-3.5" />
              {t('nav.insights')}
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
              <div className="overflow-hidden"><span className="block">Expert Perspectives &</span></div>
              <div className="overflow-hidden"><span className="block text-brand-blue">Industry Analysis.</span></div>
            </h1>

            <p className="hero-desc text-lg lg:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-16">
              {t('pages.insights.subtitle')}
            </p>

            {/* Abstract Compass Nod */}
            <div className="hero-visual-element relative w-full max-w-xs h-[150px] pointer-events-none mt-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative backdrop-blur-sm bg-white/5">
                  <div className="absolute inset-2 border border-brand-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <Compass className="w-8 h-8 text-brand-blue relative z-10 animate-pulse" />
                </div>
                <div className="absolute top-[20%] start-[8%] w-10 h-10 rounded-full border border-emerald-500/30 flex items-center justify-center bg-emerald-500/5 backdrop-blur-sm">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="absolute bottom-[20%] end-[8%] w-12 h-12 rounded-full border border-[#8B5CF6]/30 flex items-center justify-center bg-[#8B5CF6]/5 backdrop-blur-sm">
                  <TerminalSquare className="w-5 h-5 text-[#8B5CF6]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. BRIGHT EXECUTIVE INSIGHTS GRID SECTION --- */}
        <section ref={listRef} className="w-full pb-32 -mt-12 space-y-16 px-6 relative z-10">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a, i) => (
                <article
                  key={i}
                  className="insight-article-card group flex flex-col bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-blue/5 hover:border-brand-blue/30 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[10px] tracking-widest uppercase transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      {a.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 tracking-wider">
                      {a.date}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4 group-hover:text-brand-blue transition-colors">
                    {a.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8 flex-1">
                    {a.summary}
                  </p>

                  <div className="flex items-center gap-2 mt-auto text-sm font-bold text-slate-400 group-hover:text-brand-blue transition-colors">
                    {t('pages.insights.readMore')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. DARK CTA SECTION --- */}
        <section ref={ctaRef} className="w-full py-24 md:py-32 bg-slate-950 text-center border-t border-slate-800 overflow-hidden relative flex flex-col items-center justify-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          <div className="cta-content container relative z-10 px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-16 max-w-4xl mx-auto">
              Transform Insights into Action.
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

export default Insights;
