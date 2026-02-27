import { useCallback } from "react";
import gsap from "gsap";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

type IndustryItem = {
  title: string;
  subtitle: string;
  image: string;
};

const IndustriesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const items = t("home.industries.items", { returnObjects: true }) as IndustryItem[];

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    const rotateY = ((x / rect.width) - 0.5) * 6;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.2,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="section-padding section-industries-bg relative overflow-hidden section-glass">
      <div className="pointer-events-none absolute inset-0 bg-network-pattern opacity-12" />
      <div className="pointer-events-none absolute inset-0 noise-overlay opacity-70" />
      <div ref={sectionRef} className="container-tight relative text-start">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("home.industries.label")}</p>
          <div className="relative">
            <div className="pointer-events-none absolute -top-8 start-0 h-28 w-36 heading-glow" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-heading">
              {t("home.industries.title")}
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl">
            {t("home.industries.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((industry) => (
            <div
              key={industry.title}
              className="group relative h-64 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-[0_14px_30px_-22px_rgba(6,10,18,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00C2FF] hover:shadow-[0_0_28px_-14px_rgba(0,194,255,0.35)]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,12,28,0.85)] via-[rgba(5,12,28,0.45)] to-[rgba(5,12,28,0.18)] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-6 start-6 end-6 transition-transform duration-300 group-hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("home.industries.cardLabel")}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white font-heading">
                  {industry.title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{industry.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
