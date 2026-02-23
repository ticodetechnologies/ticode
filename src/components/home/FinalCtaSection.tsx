import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="absolute inset-0 section-cta-animated shadow-[inset_0_0_36px_rgba(0,0,0,0.25)] cta-shimmer" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div ref={sectionRef} className="container-tight relative text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">{t("home.finalCta.label")}</p>
        <div className="relative">
          <h2 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.02em] text-white font-heading">
            {t("home.finalCta.title")}
          </h2>
        </div>
        <p className="mt-6 text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
          {t("home.finalCta.subtitle")}
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="group relative h-auto overflow-hidden rounded-xl bg-brand-blue px-8 py-4 sm:px-10 sm:py-6 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-transparent hover:border-white/20 w-full sm:w-auto"
          >
            <Link to="/contact">
              <span className="relative z-10 flex items-center justify-center">
                {t("home.finalCta.primaryCta")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-auto rounded-xl border border-white/20 bg-transparent px-8 py-4 sm:px-10 sm:py-6 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-white/5 hover:border-white/40 hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
          >
            <Link to="/case-studies">
              <span className="relative z-10 flex items-center justify-center text-white">
                {t("home.finalCta.secondaryCta")}
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
