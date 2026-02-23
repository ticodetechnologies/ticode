import { Badge } from "@/components/ui/badge";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

type CapabilityGroup = {
  title: string;
  items: string[];
};

const AICapabilitiesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const groups = t("home.aiCapabilities.groups", { returnObjects: true }) as CapabilityGroup[];

  return (
    <section className="section-padding section-ai-stack-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(79,70,229,0.05)]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div ref={sectionRef} className="container-tight relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4 text-start">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">{t("home.aiCapabilities.label")}</p>
            <div className="relative">
              <div className="pointer-events-none absolute -top-8 left-0 h-28 w-44 heading-glow" />
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground font-heading max-w-xl">
                {t("home.aiCapabilities.title")}
              </h2>
            </div>
            <p className="text-lg text-foreground/70 max-w-lg">
              {t("home.aiCapabilities.subtitleLine1")}<br />
              {t("home.aiCapabilities.subtitleLine2")}
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 bg-[radial-gradient(circle,rgba(79,70,229,0.08),transparent_70%)]" />
            <div className="grid gap-6">
              {groups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-[#111C2F] p-6 transition-all duration-300 hover:shadow-[0_0_30px_-16px_rgba(79,70,229,0.35)]"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">{group.title}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        className="w-full justify-start px-4 py-2 text-xs text-foreground/90 bg-white/5 border border-white/15 transition-all duration-300 hover:text-white hover:bg-[rgba(79,70,229,0.12)]"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilitiesSection;
