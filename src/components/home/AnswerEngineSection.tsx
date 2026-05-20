import { Link } from "react-router-dom";
import { ArrowRight, SearchCheck } from "lucide-react";

export const homeAeoFaqs = [
    {
        q: "What does Ticode Technologies do?",
        a: "Ticode Technologies is a Kuwait-based enterprise technology company providing IT consulting, AI solutions, cloud infrastructure, software development, data analytics, and digital transformation services for regulated GCC organizations.",
    },
    {
        q: "Who does Ticode Technologies work with?",
        a: "Ticode works with executive, technology, and operations teams in sectors such as banking, healthcare, public sector, logistics, energy, insurance, real estate, and retail across Kuwait and the GCC.",
    },
    {
        q: "How does Ticode start an enterprise technology engagement?",
        a: "Most engagements begin with a current-state review, risk and opportunity map, and a practical recommendation for the next 90 days before a larger implementation commitment is made.",
    },
    {
        q: "Does Ticode support AI readiness and implementation?",
        a: "Yes. Ticode helps organizations assess AI readiness, identify secure AI use cases, prepare data and infrastructure, and implement AI workflows with governance, access control, and regional compliance in mind.",
    },
];

const AnswerEngineSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#08111F] py-16 md:py-24 border-b border-white/5 font-sans">
            <div className="absolute inset-0 texture-grid-navy opacity-20 pointer-events-none" />
            <div className="container-tight relative z-10">
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
                            <SearchCheck className="h-4 w-4 text-accent-cyan" />
                            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                                Answer Engine Ready
                            </span>
                        </div>
                        <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                            Direct answers for high-intent buyers.
                        </h2>
                        <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-slate-400">
                            Search engines and AI answer systems need clear, factual explanations. This section states exactly who Ticode serves, what we do, and how an engagement starts.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600"
                        >
                            Ask about your use case
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {homeAeoFaqs.map((item) => (
                            <article key={item.q} className="rounded-2xl border border-white/[0.08] bg-[#0D1E33] p-6">
                                <h3 className="text-lg font-extrabold leading-snug text-white">{item.q}</h3>
                                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-400">{item.a}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnswerEngineSection;
