import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, FileCheck2, MapPin, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

type ProofItem = {
    buyer: string;
    problem: string;
    solution: string;
    result: string;
    note: string;
};

const ClientProofSection = () => {
    const { t } = useTranslation();
    const proofItems = t("home.proof.items", { returnObjects: true }) as ProofItem[];
    const steps = t("home.proof.steps", { returnObjects: true }) as string[];

    return (
        <section className="relative overflow-hidden bg-[#08111F] py-16 md:py-24 font-sans border-b border-white/5">
            <div className="absolute inset-0 texture-grid-navy opacity-25 pointer-events-none" />
            <div className="container-tight relative z-10">
                <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
                    <div className="lg:sticky lg:top-28">
                        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-accent-cyan/20 bg-accent-cyan/10 px-4 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                                {t("home.proof.badge")}
                            </span>
                        </div>
                        <h2 className="max-w-xl text-4xl font-extrabold tracking-tight text-white md:text-5xl leading-tight">
                            {t("home.proof.title")}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                                {t("home.proof.titleHighlight")}
                            </span>
                        </h2>
                        <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-slate-400">
                            {t("home.proof.subtitle")}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                            <div className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" />
                                <div>
                                    <div className="text-sm font-bold text-white">{t("home.proof.trust.local.title")}</div>
                                    <div className="mt-1 text-sm text-slate-500">{t("home.proof.trust.local.copy")}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                                <div>
                                    <div className="text-sm font-bold text-white">{t("home.proof.trust.neutral.title")}</div>
                                    <div className="mt-1 text-sm text-slate-500">{t("home.proof.trust.neutral.copy")}</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                                <div>
                                    <div className="text-sm font-bold text-white">{t("home.proof.trust.response.title")}</div>
                                    <div className="mt-1 text-sm text-slate-500">{t("home.proof.trust.response.copy")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/[0.10] bg-[#0D1E33] overflow-hidden shadow-[0_24px_70px_-32px_rgba(0,0,0,0.9)]">
                        <div className="grid border-b border-white/[0.08] bg-white/[0.025] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 font-mono sm:grid-cols-[0.9fr_1.1fr_1.1fr_0.9fr]">
                            <span>{t("home.proof.table.buyer")}</span>
                            <span className="hidden sm:block">{t("home.proof.table.problem")}</span>
                            <span className="hidden sm:block">{t("home.proof.table.solution")}</span>
                            <span className="hidden sm:block">{t("home.proof.table.result")}</span>
                        </div>

                        <div className="divide-y divide-white/[0.08]">
                            {proofItems.map((item) => (
                                <div key={item.buyer} className="grid gap-4 px-5 py-6 transition-colors hover:bg-white/[0.025] sm:grid-cols-[0.9fr_1.1fr_1.1fr_0.9fr]">
                                    <div>
                                        <div className="text-base font-extrabold text-white">{item.buyer}</div>
                                        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300 font-mono">
                                            <FileCheck2 className="h-3 w-3" />
                                            {item.note}
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed text-slate-400">{item.problem}</p>
                                    <p className="text-sm font-medium leading-relaxed text-slate-300">{item.solution}</p>
                                    <div className="flex items-start gap-2 text-sm font-bold leading-relaxed text-white">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                                        {item.result}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-6 border-t border-white/[0.08] bg-[#07111F] p-5 md:grid-cols-[1fr_auto] md:items-center">
                            <div>
                                <div className="text-sm font-bold text-white">{t("home.proof.call.title")}</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {steps.map((step, index) => (
                                        <span key={step} className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                            <span className="font-mono text-accent-cyan">0{index + 1}</span>
                                            {step}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
                            >
                                {t("home.proof.call.cta")}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientProofSection;
