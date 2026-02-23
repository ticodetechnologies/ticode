import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { Cpu, ShieldAlert, Workflow, ArrowRight, Network } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const domainsData = [
    {
        id: "ai",
        title: "AI Strategy & Deployment",
        subtitle: "Sovereign Intelligence",
        description:
            "Design, train, and deploy private AI models hosted within GCC borders, ensuring zero data leakage.",
        icon: <Cpu className="h-8 w-8 text-brand-blue" />,
        features: ["Private LLMs", "Agentic Systems", "Predictive Analytics"],
        link: "/ai-solutions"
    },
    {
        id: "cloud",
        title: "Cloud Infrastructure",
        subtitle: "Zero-Trust Layout",
        description:
            "Architect multi-cloud, high-availability networks designed for absolute redundancy and compliance.",
        icon: <Workflow className="h-8 w-8 text-brand-blue" />,
        features: ["Orchestration", "Disaster Recovery", "Infrastructure as Code"],
        link: "/services/cloud-infrastructure"
    },
    {
        id: "governance",
        title: "Data Governance",
        subtitle: "Immutable Compliance",
        description:
            "Institute executive data lakes with end-to-end encryption, centralizing fragmented data silos.",
        icon: <ShieldAlert className="h-8 w-8 text-brand-blue" />,
        features: ["Master Data", "Data Localization", "Real-time Compliance"],
        link: "/services/data-analytics"
    },
    {
        id: "integration",
        title: "Enterprise Integration",
        subtitle: "Seamless Connectivity",
        description:
            "Unify disparate operational systems into a monolithic, secure enterprise service bus for real-time syncing.",
        icon: <Network className="h-8 w-8 text-brand-blue" />,
        features: ["API Gateways", "Event-Driven", "Legacy Modernization"],
        link: "/services/software-development"
    }
];

const DomainsSection = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".domain-card",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-base py-16 md:py-48 lg:py-64" ref={containerRef}>
            <div className="container-tight relative z-10">
                <div className="mb-16 md:mb-28 max-w-4xl text-left">
                    <h2 className="font-heading text-4xl font-black tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                        Enterprise Transformation Domains.
                    </h2>
                    <p className="mt-6 md:mt-10 text-lg md:text-[1.4rem] tracking-tight text-text-primary/70">
                        {t("home.stack.subtext", "Core operational pillars engineered for sovereign organizational change. Uncompromising scale with localized security.")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {domainsData.map((domain) => (
                        <Link
                            key={domain.id}
                            to={domain.link}
                            className="domain-card group flex flex-col justify-between rounded-[2.5rem] border border-white/5 bg-surface-1 p-8 md:p-14 transition-all duration-500 hover:-translate-y-3 hover:border-brand-blue/40 hover:bg-surface-2 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(45,107,255,0.25)]"
                        >
                            <div className="flex items-start justify-between mb-8 md:mb-10">
                                <div className="inline-flex rounded-2xl bg-brand-blue/10 p-5 md:p-6 ring-1 ring-brand-blue/20 transition-colors group-hover:bg-brand-blue group-hover:ring-brand-blue/50">
                                    <div className="text-brand-blue group-hover:text-white transition-colors">
                                        {domain.icon}
                                    </div>
                                </div>
                                <div className="rounded-full bg-white/5 p-4 text-white transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:bg-brand-blue shadow-lg">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>

                            <div>
                                <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent-cyan mb-3 md:mb-4">
                                    {domain.subtitle}
                                </div>
                                <h3 className="mb-4 md:mb-6 text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                                    {domain.title}
                                </h3>
                                <p className="mb-8 md:mb-10 text-base md:text-xl leading-relaxed text-text-primary/70">
                                    {domain.description}
                                </p>
                            </div>

                            <div className="mt-auto border-t border-white/5 pt-6 md:pt-8">
                                <div className="flex flex-wrap gap-3">
                                    {domain.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
                                        >
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DomainsSection;
