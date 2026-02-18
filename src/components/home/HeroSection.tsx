import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

type StatItem = { value: string; label: string };

const HeroSection = () => {
  const { t } = useTranslation();
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  const trustPoints = t("home.hero.trustPoints", { returnObjects: true }) as string[];
  const stats = t("home.hero.stats", { returnObjects: true }) as StatItem[];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1, delay: 0.2 }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1, delay: 0.3 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-10 overflow-hidden pb-44 pt-32 lg:pb-52 section-hero-bg">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-20 mx-auto h-80 w-[460px] hero-glow" />
      </div>
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-[0.02]" />

      <div className="container-tight relative">
        <div className="max-w-4xl relative text-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
            {t("home.hero.badge")}
          </div>

          <h1
            ref={headlineRef}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-extrabold leading-[1.08] tracking-[-0.005em] text-white font-heading"
          >
            {t("home.hero.headline.line1")}{" "}
            <span className="text-gradient-cyan">{t("home.hero.headline.highlight1")}</span>{" "}
            {t("home.hero.headline.line2")}{" "}
            <span className="text-gradient-cyan">{t("home.hero.headline.highlight2")}</span>{" "}
            {t("home.hero.headline.line3")}
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl">
            {t("home.hero.subtext")}
          </p>

          <div ref={buttonsRef} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-[#2563EB] px-8 py-6 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(37,99,235,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#2f6bf0]"
            >
              <Link to="/contact">
                {t("home.hero.ctaPrimary")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 px-8 py-6 text-base font-semibold text-white hover:border-white/70 hover:bg-white/10"
            >
              <Link to="/ai-solutions">{t("home.hero.ctaSecondary")}</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-[#00C2FF]" />
                <span className="font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-tight relative z-20 translate-y-1/2">
        <div ref={statsRef} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="glass-card-strong border-white/35 bg-white/5 text-center shadow-[0_12px_22px_-16px_rgba(6,10,18,0.6)] transition-all duration-300 hover:border-white/45 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="text-5xl lg:text-6xl font-semibold text-gradient-emerald metric-glow flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#00C875]" />
                  {stat.value}
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
          <TrendingUp className="h-4 w-4 text-[#00C875]" />
          {t("home.hero.benchmark")}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
