import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Cpu, ShieldAlert, Workflow, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
    ai: <Cpu className="h-8 w-8 text-brand-blue" />,
    cloud: <Workflow className="h-8 w-8 text-brand-blue" />,
    governance: <ShieldAlert className="h-8 w-8 text-brand-blue" />,
};

const StickyStack = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const translatedPanels = t("home.stack.panels", { returnObjects: true }) as any[];

    const panelsData = (translatedPanels || []).map((panel) => ({
        ...panel,
        icon: iconMap[panel.id as keyof typeof iconMap],
    }));

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray<HTMLElement>(".sticky-panel");

            panels.forEach((panel, i) => {
                if (i === panels.length - 1) return; // Last panel doesn't react

                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    endTrigger: ".sticky-stack-container",
                    end: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    animation: gsap.to(panel, {
                        scale: 0.92,
                        opacity: 0.6,
                        filter: "blur(12px)",
                        ease: "none",
                    }),
                    scrub: true,
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-surface-1 py-12 lg:py-24" ref={containerRef}>
            <div className="container-tight mb-16 max-w-3xl text-center">
                <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-5xl">
                    {t("home.stack.title")}
                </h2>
                <p className="mt-6 text-lg text-text-primary/60">
                    {t("home.stack.subtext")}
                </p>
            </div>

            <div className="sticky-stack-container relative mx-auto max-w-5xl">
                {panelsData.map((panel, idx) => (
                    <div
                        key={panel.id}
                        className={`sticky-panel flex h-[70vh] min-h-[500px] w-full items-center justify-center pt-[10vh] ${idx !== panelsData.length - 1 ? "absolute top-0 start-0" : "relative"
                            }`}
                        style={{ zIndex: idx }}
                    >
                        <div className="flex w-full max-w-4xl flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-base p-10 shadow-2xl md:flex-row md:items-center lg:p-16">
                            <div className="md:w-1/2">
                                <div className="mb-6 inline-flex rounded-2xl bg-brand-blue/10 p-4 ring-1 ring-brand-blue/20">
                                    {panel.icon}
                                </div>
                                <div className="text-sm font-semibold uppercase tracking-wider text-accent-cyan mb-2">
                                    {panel.subtitle}
                                </div>
                                <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                                    {panel.title}
                                </h3>
                                <p className="mb-8 text-base leading-relaxed text-text-primary/70">
                                    {panel.description}
                                </p>
                                <button className="group inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-brand-blue">
                                    {t("home.stack.reviewCapabilities")}
                                    <ArrowRight className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>

                            <div className="mt-10 md:mt-0 md:w-5/12">
                                <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-surface-2 p-6">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">
                                        {t("home.stack.keyImplementations")}
                                    </div>
                                    {panel.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 text-sm font-medium text-white/90"
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StickyStack;
