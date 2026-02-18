import { Badge } from "@/components/ui/badge";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

type CaseStudyItem = {
  title: string;
  tag: string;
  metric: string;
  image: string;
  imageAlt: string;
};

const CaseStudiesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const studies = t("home.caseStudies.items", { returnObjects: true }) as CaseStudyItem[];

  return (
    <section className="section-padding section-case-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div ref={sectionRef} className="container-tight relative text-start">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("home.caseStudies.label")}</p>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-semibold text-white font-heading">
              {t("home.caseStudies.title")}
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl">
            {t("home.caseStudies.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {studies.map((study) => (
            <div
              key={study.title}
              className="group relative h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_18px_42px_-28px_rgba(10,14,22,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-40px_rgba(10,14,22,0.7)]"
            >
              <img
                src={study.image}
                alt={study.imageAlt}
                className="h-full w-full object-cover contrast-110 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,12,28,0.96)] via-[rgba(5,12,28,0.55)] to-[rgba(5,12,28,0.25)] transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute top-6 right-6 rounded-full bg-emerald-500/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-100">
                {t("home.caseStudies.impactLabel")}
              </div>
              <div className="absolute inset-x-6 bottom-6 space-y-3">
                <Badge className="border border-white/20 bg-white/10 text-xs uppercase tracking-[0.3em] text-white">
                  {study.tag}
                </Badge>
                <h3 className="text-2xl font-semibold text-white font-heading">
                  {study.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-emerald-200">
                  {study.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
