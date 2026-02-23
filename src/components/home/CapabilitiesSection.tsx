import { ArrowUpRight } from "lucide-react";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

type CapabilityItem = {
  title: string;
  description: string;
  tags: string[];
  outcomeLabel: string;
  outcomeValue: string;
  outcomeSuffix: string;
  outcomeDesc: string;
  outcomeLink: string;
};

const gradients = [
  "from-[hsl(218_83%_53%)] via-[hsl(210_100%_60%)] to-[hsl(193_100%_50%)]",
  "from-[hsl(218_83%_53%)] via-[hsl(210_100%_60%)] to-[hsl(193_100%_50%)]",
  "from-[hsl(218_83%_53%)] via-[hsl(210_100%_60%)] to-[hsl(193_100%_50%)]",
];

const CapabilitiesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const items = t("home.capabilities.items", { returnObjects: true }) as CapabilityItem[];

  return (
    <section className="section-padding section-capabilities-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div ref={sectionRef} className="container-tight relative text-start">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("home.capabilities.label")}</p>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-heading">
              {t("home.capabilities.title")}
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl">
            {t("home.capabilities.subtitle")}
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {items.map((capability, index) => (
            <div
              key={capability.title}
              className="group flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_-16px_rgba(37,99,235,0.35)] lg:flex-row lg:items-center"
            >
              <div className="flex-1">
                <div className={`h-1 w-24 rounded-full bg-gradient-to-r ${gradients[index % gradients.length]}`} />
                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white font-heading">
                  {capability.title}
                </h3>
                <p className="mt-4 text-lg text-white/70 max-w-xl">{capability.description}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative h-56 flex-1">
                <div className="relative h-full w-full rounded-3xl border border-white/15 bg-[rgba(6,14,32,0.6)] p-6">
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="text-sm uppercase tracking-[0.3em] text-white/60">
                      {capability.outcomeLabel}
                    </div>
                    <div className="text-4xl font-semibold text-white animate-[fade-in_0.8s_ease-out_forwards]">
                      {capability.outcomeValue}
                      <span className="text-white/60"> {capability.outcomeSuffix}</span>
                    </div>
                    <div className="text-white/70">{capability.outcomeDesc}</div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#00C2FF]">
                      {capability.outcomeLink} <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
