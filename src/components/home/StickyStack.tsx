import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Cpu, ShieldAlert, Workflow, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
    {
        id: "ai",
        title: "AI Strategy & Deployment",
        subtitle: "Sovereign Intelligence Models",
        description:
            "Design, train, and deploy private AI models hosted within GCC borders, ensuring zero data leakage while accelerating cognitive enterprise capabilities.",
        icon: <Cpu className="h-8 w-8 text-brand-blue" />,
        features: ["Private LLM Deployment", "Agentic Workflows", "Predictive Analytics"],
    },
    {
        id: "cloud",
        title: "Cloud Infrastructure",
        subtitle: "Zero-Trust Architecture",
        description:
            "Architect multi-cloud, high-availability networks designed for absolute redundancy, scale, and compliance with national cybersecurity frameworks.",
        icon: <Workflow className="h-8 w-8 text-brand-blue" />,
        features: ["Multi-Cloud Orchestration", "Disaster Recovery", "Infrastructure as Code"],
    },
    {
        id: "governance",
        title: "Data Governance",
        subtitle: "Immutable Compliance",
        description:
            "Institute executive data lakes with end-to-end encryption, centralizing fragmented data silos into a single, board-ready source of truth.",
        icon: <ShieldAlert className="h-8 w-8 text-brand-blue" />,
        features: ["Master Data Management", "Data Localization", "Real-time Compliance"],
    },
];

const StickyStack = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

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
                    Enterprise Transformation Domains.
                </h2>
                <p className="mt-6 text-lg text-text-primary/60">
                    {t("home.stack.subtext", "Core pillars of sovereign organizational change.")}
                </p>
            </div>

            <div className="sticky-stack-container relative mx-auto max-w-5xl">
                {panelsData.map((panel, idx) => (
                    <div
                        key={panel.id}
                        className={`sticky-panel flex h-[70vh] min-h-[500px] w-full items-center justify-center pt-[10vh] ${idx !== panelsData.length - 1 ? "absolute top-0 left-0" : "relative"
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
                                    Review Capabilities
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>

                            <div className="mt-10 md:mt-0 md:w-5/12">
                                <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-surface-2 p-6">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-2">
                                        Key Implementations
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
