import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import gsap from "gsap";

const FinalCtaSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Magnetic button effect
    const button = buttonRef.current;
    const buttonText = textRef.current;

    if (!button || !buttonText) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const xTextTo = gsap.quickTo(buttonText, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTextTo = gsap.quickTo(buttonText, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.2);
      yTo(y * 0.2);

      xTextTo(x * 0.1);
      yTextTo(y * 0.1);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      xTextTo(0);
      yTextTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0E1A2B] py-12 md:py-20 border-t border-white/5" ref={containerRef}>
      {/* Soft background grid texture */}
      <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />

      {/* Massive Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-blue/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-tight relative z-10 text-center flex flex-col items-center">

        <div className="mb-10 inline-flex items-center gap-3 w-max">
          <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
            Execution Ready
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tighter text-white leading-[1.1] max-w-5xl mx-auto mb-8 font-sans">
          Accelerate Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">Enterprise.</span>
        </h2>

        <p className="mt-6 text-lg font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed mb-16">
          {t("home.finalCta.subtitle", "Transform your operational capacity with our strategic IT and comprehensive AI solutions.")}
        </p>

        <Link
          to="/contact"
          ref={buttonRef}
          className="group relative inline-flex items-center justify-center w-[240px] h-[240px] md:w-[280px] md:h-[280px] bg-gradient-to-tr from-brand-blue to-accent-cyan rounded-full text-white overflow-hidden shadow-[0_20px_40px_-15px_rgba(47,107,255,0.4)]"
        >
          <div className="absolute inset-0 bg-white/10 transform translate-y-full rounded-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <div className="absolute inset-0 border border-white/20 rounded-full scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />

          <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center gap-4 w-full h-full">
            <span className="text-sm font-bold tracking-widest uppercase text-center px-8 leading-relaxed font-mono">
              {t("home.finalCta.primaryCta", "Initiate Strategic Engagement")}
            </span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FinalCtaSection;
