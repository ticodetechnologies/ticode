import { useTranslation } from "react-i18next";
import { Server, Database, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StrategicPillars = () => {
    const { t } = useTranslation();

    const pillars = [
        {
            id: "ai-strategy",
            icon: <Brain className="h-6 w-6 text-brand-blue" />,
            title: "Sovereign AI Subsystems",
            outcome: "Deploy localized, proprietary LLMs for secure enterprise workflows.",
            metric: "74% Faster Data Retrieval",
            governance: "100% On-Premise GCC Hosting",
            link: "/ai-solutions",
        },
        {
            id: "cloud-infrastructure",
            icon: <Server className="h-6 w-6 text-brand-blue" />,
            title: "Resilient Cloud Architecture",
            outcome: "Architect zero-trust, high-availability multi-cloud environments.",
            metric: "99.999% Service Uptime",
            governance: "ISO 27001 Compliant Framework",
            link: "/services/cloud-infrastructure",
        },
        {
            id: "data-governance",
            icon: <Database className="h-6 w-6 text-brand-blue" />,
            title: "Executive Data Lakes",
            outcome: "Centralize corporate data for unified boardroom analytics and reporting.",
            metric: "Single Source of Truth",
            governance: "End-to-End Encryption Layer",
            link: "/services/data-analytics",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-base py-16 md:py-32 lg:py-48">
            <div className="container-tight relative z-10">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="font-heading text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl lg:text-6xl drop-shadow-xl">
                            Strategic Transformation <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Pillars.</span>
                        </h2>
                        <p className="mt-6 text-lg text-text-primary/60">
                            {t(
                                "home.solutions.subtext",
                                "Built exclusively for the regional C-Suite, our frameworks bridge the gap between legacy operations and next-generation intelligence."
                            )}
                        </p>
                    </div>
                    <Button
                        asChild
                        variant="outline"
                        className="hidden shrink-0 rounded-full border-white/20 bg-transparent px-8 py-6 text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5 lg:inline-flex"
                    >
                        <Link to="/services">
                            View All Capabilities <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/5 bg-surface-1 p-8 md:p-12 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-brand-blue/40 hover:bg-surface-2 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.25)]"
                        >
                            {/* Gradient Accent Line */}
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-blue to-accent-cyan opacity-80" />

                            <div className="relative z-10">
                                <div className="mb-6 md:mb-8 inline-flex rounded-2xl bg-brand-blue/10 p-4 md:p-5 ring-1 ring-brand-blue/20">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
                                    {pillar.title}
                                </h3>
                                <p className="mt-3 md:mt-5 text-base md:text-lg leading-relaxed text-text-primary/70">
                                    {pillar.outcome}
                                </p>
                            </div>

                            <div className="relative z-10 mt-10 md:mt-12 space-y-4 border-t border-white/10 pt-6 md:pt-8">
                                <div>
                                    <div className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted">
                                        Measured Impact
                                    </div>
                                    <div className="mt-3 md:mt-4 font-mono text-3xl md:text-4xl lg:text-5xl font-black text-accent-cyan metric-glow drop-shadow-lg">
                                        {pillar.metric}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="text-xs font-bold uppercase tracking-widest text-text-muted">
                                        Governance Standard
                                    </div>
                                    <div className="mt-2 text-base font-semibold text-white/90">
                                        {pillar.governance}
                                    </div>
                                </div>
                            </div>

                            <Link
                                to={pillar.link}
                                className="relative mt-8 md:mt-12 flex items-center justify-between overflow-hidden rounded-full bg-white/5 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                            >
                                <span className="relative z-10">Explore Capability</span>
                                <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-blue-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center lg:hidden">
                    <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white/20 bg-transparent px-8 py-6 text-sm font-semibold text-white transition-all hover:bg-white/5"
                    >
                        <Link to="/services">
                            View All Capabilities <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default StrategicPillars;
