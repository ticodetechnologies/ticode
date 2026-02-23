import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useGsapReveal from "@/hooks/useGsapReveal";
import { useTranslation } from "react-i18next";

const AIDiffSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGsapReveal();
  const imageRef = useRef<HTMLDivElement | null>(null);
  const points = t("home.aiStory.points", { returnObjects: true }) as string[];

  useEffect(() => {
    if (!imageRef.current) return;
    const tween = gsap.to(imageRef.current, {
      y: 3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    return () => tween.kill();
  }, []);

  return (
    <section className="section-padding section-ai-story-bg relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(0,194,255,0.05),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />
      <div ref={sectionRef} className="container-tight relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="text-start">
          <div className="relative">
            <div className="pointer-events-none absolute -top-8 left-0 h-28 w-40 heading-glow" />
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("home.aiStory.label")}</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white font-heading">
              {t("home.aiStory.title")}
            </h2>
          </div>
          <p className="mt-6 text-lg text-white/70">
            {t("home.aiStory.body")}
          </p>
          <div className="mt-6 space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-[#00C2FF]" />
                <span className="text-sm uppercase tracking-[0.2em]">{point}</span>
              </div>
            ))}
          </div>
          <Button
            asChild
            className="mt-8 rounded-full bg-[#2563EB] px-8 py-6 text-base font-semibold text-white hover:bg-[#2f6bf0]"
          >
            <Link to="/about">{t("home.aiStory.cta")}</Link>
          </Button>
        </div>

        <div ref={imageRef} className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(0,194,255,0.15),_transparent_60%)]" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)]">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80"
              alt={t("home.aiStory.imageAlt")}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-[rgba(5,12,28,0.82)] p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">{t("home.aiStory.impactLabel")}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-white font-heading">
                {t("home.aiStory.impactText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDiffSection;
