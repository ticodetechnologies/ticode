import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Sparkles, Eye, MessageSquare, Bot, Mic, Cog, Star, Wifi, Layers, Database, Plug, BarChart3, Network } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const capKeys = ['aiDev', 'genAI', 'ml', 'dl', 'cv', 'nlp', 'gpt', 'rag', 'agents', 'voice', 'automation', 'recommend', 'aiot'] as const;
const capIcons: Record<string, React.ReactNode> = {
  aiDev: <Sparkles className="w-6 h-6" />, genAI: <Brain className="w-6 h-6" />, ml: <BarChart3 className="w-6 h-6" />,
  dl: <Layers className="w-6 h-6" />, cv: <Eye className="w-6 h-6" />, nlp: <MessageSquare className="w-6 h-6" />,
  gpt: <Plug className="w-6 h-6" />, rag: <Database className="w-6 h-6" />, agents: <Bot className="w-6 h-6" />,
  voice: <Mic className="w-6 h-6" />, automation: <Cog className="w-6 h-6" />, recommend: <Star className="w-6 h-6" />,
  aiot: <Wifi className="w-6 h-6" />,
};

const AISolutions = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLElement>(null);
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

      // Hero neural net subtle float
      gsap.to('.hero-visual-element', {
        y: -15,
        rotationZ: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Bento Grid Reveal
      gsap.fromTo('.ai-cap-card', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
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
      <SEOHead title={`${t('pages.aiSolutions.label')} | Ticode Technologies`} description={t('pages.aiSolutions.subtitle')} path="/ai-solutions" />

      <main className="min-h-screen bg-[#F8FAFC]">
        {/* --- 1. DARK HERO SECTION --- */}
        <section ref={heroRef} className="relative w-full min-h-[90vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
          {/* Background Texture/Grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          {/* Radial Gradient for focus */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,107,255,0.08)_0%,transparent_70%)]"></div>

          <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 h-full px-6">

            {/* Left: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
              <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-8 self-start">
                <Network className="w-3.5 h-3.5" />
                {t('pages.aiSolutions.label')}
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-tight mb-8">
                <div className="overflow-hidden"><span className="block">AI-Driven</span></div>
                <div className="overflow-hidden"><span className="block">Enterprise</span></div>
                <div className="overflow-hidden"><span className="block text-brand-blue">Intelligence.</span></div>
              </h1>

              <p className="hero-desc text-lg lg:text-xl text-slate-400 font-medium max-w-xl leading-relaxed mb-10">
                {t('pages.aiSolutions.subtitle')}
              </p>

              <div className="hero-desc">
                <a href="#capabilities" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                  Explore Capabilities <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Neural Net Visual / Data Graphic */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative">
              <div className="hero-visual-element relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                {/* Orbit Circles */}
                <div className="absolute inset-0 rounded-full border border-white/5 shadow-[0_0_100px_rgba(45,107,255,0.1)]"></div>
                <div className="absolute inset-12 rounded-full border border-brand-blue/20 blur-[1px]"></div>
                <div className="absolute inset-24 rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-32 rounded-full border border-brand-blue/30 animate-[spin_40s_linear_infinite_reverse]"></div>

                {/* Center Node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-brand-blue/20 rounded-full flex items-center justify-center relative backdrop-blur-sm">
                    <div className="absolute inset-0 bg-brand-blue rounded-full opacity-20 animate-ping"></div>
                    <Brain className="w-12 h-12 text-brand-blue relative z-10" />
                  </div>
                </div>

                {/* Floating Satellites */}
                <div className="absolute top-[10%] left-[20%] w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <div className="absolute bottom-[20%] left-[10%] w-14 h-14 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-xl">
                  <Layers className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="absolute top-[30%] right-[5%] w-16 h-16 bg-white/5 border border-brand-blue/30 backdrop-blur-md rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(45,107,255,0.2)]">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- 2. BRIGHT EXECUTIVE GRID SECTION --- */}
        <section id="capabilities" ref={gridRef} className="w-full py-24 bg-[#F8FAFC]">
          <div className="container px-6">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#0B1521] tracking-tight mb-4">Enterprise AI Capabilities</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Transform every operational layer with purpose-built AI agents, foundational models, and automation.
              </p>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {capKeys.map((key, i) => (
                <div
                  key={key}
                  className={`ai-cap-card group bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/30 hover:-translate-y-1 ${
                    // Make the very first and second items larger in a bento pattern
                    i === 0 ? "md:col-span-2 md:row-span-2 p-8" :
                      i === 7 ? "md:col-span-2" : ""
                    }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue transition-all duration-300">
                    <div className="text-brand-blue group-hover:text-white transition-colors">
                      {capIcons[key]}
                    </div>
                  </div>

                  <h3 className={`font-black text-slate-900 tracking-tight leading-tight mb-3 ${i === 0 ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"}`}>
                    {t(`pages.aiSolutions.items.${key}.title`)}
                  </h3>

                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {t(`pages.aiSolutions.items.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. DARK CTA SECTION --- */}
        <section ref={ctaRef} className="w-full py-24 md:py-32 bg-slate-950 text-center border-t border-slate-800 overflow-hidden relative flex flex-col items-center justify-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

          <div className="cta-content container relative z-10 px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 max-w-4xl mx-auto">
              {t('pages.aiSolutions.ctaTitle')}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto">
              {t('pages.aiSolutions.ctaDesc')}
            </p>

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
                <span>{t('pages.aiSolutions.ctaButton')}</span>
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-y-2 transition-transform rotate-90" />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AISolutions;
