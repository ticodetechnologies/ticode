import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

const TrustSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const logos = t("home.trust.logos", { returnObjects: true }) as string[];

  return (
    <section className="section-padding-sm pt-32 section-trust-bg relative z-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <div ref={sectionRef} className="container-tight relative">
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-sm uppercase tracking-[0.35em] text-white/60">{t("home.trust.label")}</p>
          <div className="relative">
            <div className="pointer-events-none absolute -top-6 left-1/2 h-24 w-40 -translate-x-1/2 heading-glow" />
            <h2 className="text-4xl md:text-5xl font-semibold text-white font-heading">
              {t("home.trust.title")}
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl">
            {t("home.trust.subtitle")}
          </p>
          <div className="mt-6 h-px w-48 bg-gradient-to-r from-transparent via-[#00C2FF] to-transparent" />
        </div>
      </div>

      <div className="mt-10 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 animate-[marquee_24s_linear_infinite]">
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="flex gap-8 animate-[marquee_24s_linear_infinite]">
            {logos.map((logo) => (
              <div
                key={`${logo}-duplicate`}
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
