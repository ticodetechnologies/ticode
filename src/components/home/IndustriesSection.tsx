import { useCallback } from "react";
import gsap from "gsap";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";
import { ArrowRight, Landmark, HeartPulse, Building2, Zap } from "lucide-react";

type DomainItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

const IndustriesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const domains = t("home.domains.items", { returnObjects: true }) as DomainItem[];

  // Fallback map in case the JSON data indices change
  const industryIcons: Record<string, React.ReactNode> = {
    finance: <Landmark className="w-5 h-5 text-brand-blue" />,
    healthcare: <HeartPulse className="w-5 h-5 text-brand-blue" />,
    government: <Building2 className="w-5 h-5 text-brand-blue" />,
    energy: <Zap className="w-5 h-5 text-brand-blue" />
  };

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -4;
    const rotateY = ((x / rect.width) - 0.5) * 4;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="section-padding bg-[#040A12] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 start-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-accent-cyan/5 blur-[100px] rounded-full pointer-events-none" />

      <div ref={sectionRef} className="container-tight relative z-10 text-start">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono font-bold">
              {t("home.domains.badge")}
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-heading">
            {t("home.domains.title")}
          </h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          {domains.slice(0, 4).map((domain, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={domain.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative bg-[#09121D] p-10 lg:p-12 hover:bg-[#0C1724] transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[380px]"
              >
                {/* Active Top Border Gradient for the first active panel */}
                {isFirst && (
                  <div className="absolute top-0 start-0 w-full h-[2px] bg-gradient-to-r from-brand-blue via-accent-cyan to-transparent shadow-[0_0_15px_rgba(0,194,255,0.6)]" />
                )}

                {/* Subtle Hover Radial Glow */}
                <div className="absolute -top-32 -end-32 w-64 h-64 bg-brand-blue/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-start gap-8">
                  {/* Top Header: Icon & Arrow */}
                  <div className="w-full flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300">
                      {industryIcons[domain.id] || <Building2 className="w-5 h-5" />}
                    </div>
                    {/* Arrow CTA */}
                    <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-transparent group-hover:bg-brand-blue group-hover:border-brand-blue/50 flex items-center justify-center transition-all duration-300 shadow-none group-hover:shadow-[0_0_15px_rgba(47,107,255,0.5)]">
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div>
                    <h3 className="text-2xl lg:text-[28px] font-bold text-white mb-4 tracking-tight">
                      {domain.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-400 font-medium max-w-[90%] group-hover:text-slate-300 transition-colors">
                      {domain.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Tags / Features */}
                <div className="relative z-10 mt-10 flex flex-wrap gap-2.5">
                  {domain.features?.map((feature, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-slate-400 group-hover:border-white/20 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
