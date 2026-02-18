import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

const FinalCtaSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 section-cta-animated shadow-[inset_0_0_36px_rgba(0,0,0,0.25)] cta-shimmer" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div ref={sectionRef} className="container-tight relative text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">{t("home.finalCta.label")}</p>
        <div className="relative">
          <h2 className="mt-4 text-4xl md:text-6xl lg:text-[4.5rem] font-semibold text-white font-heading">
            {t("home.finalCta.title")}
          </h2>
        </div>
        <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
          {t("home.finalCta.subtitle")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-10 py-6 text-base font-semibold text-[#0b1220] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(10,14,22,0.7)]"
          >
            <Link to="/contact">{t("home.finalCta.primaryCta")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/75 bg-transparent px-10 py-6 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_20px_40px_-22px_rgba(10,14,22,0.7)]"
          >
            <Link to="/case-studies">{t("home.finalCta.secondaryCta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
