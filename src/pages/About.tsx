import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Globe, Layers, Handshake, Languages, Component } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const valueKeys = ['integrity', 'innovation', 'regional', 'scalable', 'partnership', 'bilingual'] as const;
const valueIcons: Record<string, React.ReactNode> = {
  integrity: <Shield className="h-6 w-6 text-emerald-500" />,
  innovation: <Brain className="h-6 w-6 text-brand-blue" />,
  regional: <Globe className="h-6 w-6 text-amber-500" />,
  scalable: <Layers className="h-6 w-6 text-brand-blue" />,
  partnership: <Handshake className="h-6 w-6 text-rose-500" />,
  bilingual: <Languages className="h-6 w-6 text-[#8B5CF6]" />,
};

const About = () => {
  const { t } = useTranslation();

  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
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

      // Hero background element float
      gsap.to('.hero-visual-element', {
        y: -15,
        rotationZ: -2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Story / Approach Reveal
      gsap.fromTo('.story-block', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // 3. Values Grid Reveal
      gsap.fromTo('.value-card', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // 4. CTA Pull
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
      <SEOHead title={`${t('pages.about.label')} | Ticode Technologies`} description={t('pages.about.subtitle')} path="/about" />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* --- 1. DARK HERO SECTION --- */}
        <section ref={heroRef} className="relative w-full min-h-[85vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Background Texture/Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          {/* Radial Gradient for focus */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,107,255,0.06)_0%,transparent_70%)]"></div>

          <div className="container relative z-10 flex flex-col items-center text-center h-full px-6 max-w-5xl mx-auto">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-10">
              <Component className="w-3.5 h-3.5" />
              {t('pages.about.label')}
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
              <div className="overflow-hidden"><span className="block">Engineering the</span></div>
              <div className="overflow-hidden"><span className="block text-brand-blue">Digital Future of the GCC.</span></div>
            </h1>

            <p className="hero-desc text-lg lg:text-xl text-slate-400 font-medium max-w-2xl leading-relaxed mb-16">
              {t('pages.about.subtitle')}
            </p>

            {/* Abstract Structure Visual */}
            <div className="hero-visual-element relative w-full h-[150px] max-w-sm pointer-events-none mt-4 opacity-70">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-brand-blue/20 rounded-xl rotate-45 backdrop-blur-md bg-white/5 flex items-center justify-center">
                <div className="w-16 h-16 border border-emerald-500/30 rounded-lg -rotate-45 bg-emerald-500/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. BRIGHT EXECUTIVE STORY SECTION --- */}
        <section ref={storyRef} className="w-full py-32 bg-white relative z-10 border-b border-slate-100">
          <div className="container max-w-4xl mx-auto px-6 space-y-24">

            {/* Mission */}
            <div className="story-block grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {t('pages.about.missionTitle')}
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                {t('pages.about.missionDesc')}
              </p>
            </div>

            <div className="story-block w-full h-px bg-slate-100"></div>

            {/* Story */}
            <div className="story-block grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {t('pages.about.storyTitle')}
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                {t('pages.about.storyDesc')}
              </p>
            </div>

            <div className="story-block w-full h-px bg-slate-100"></div>

            {/* Approach */}
            <div className="story-block grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {t('pages.about.approachTitle')}
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                {t('pages.about.approachDesc')}
              </p>
            </div>

          </div>
        </section>

        {/* --- 3. BENTO GRID VALUES SECTION --- */}
        <section ref={valuesRef} className="w-full py-32 bg-[#F8FAFC]">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-4">
                Core Precepts
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                {t('pages.about.valuesTitle')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueKeys.map((key) => (
                <div
                  key={key}
                  className="value-card bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-blue/5 hover:border-brand-blue/30 transition-all duration-500 group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue/5 group-hover:border-brand-blue/20 transition-all duration-500">
                    {valueIcons[key]}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-4 group-hover:text-brand-blue transition-colors">
                    {t(`pages.about.values.${key}.title`)}
                  </h4>

                  <p className="text-slate-500 font-medium leading-relaxed flex-1">
                    {t(`pages.about.values.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. DARK CTA SECTION --- */}
        <section ref={ctaRef} className="w-full py-24 md:py-32 bg-slate-950 text-center border-t border-slate-800 overflow-hidden relative flex flex-col items-center justify-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          <div className="cta-content container relative z-10 px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-16 max-w-4xl mx-auto">
              {t('pages.about.ctaTitle')}
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

export default About;
