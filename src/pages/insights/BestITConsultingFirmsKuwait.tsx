import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Building2, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
    {
        q: 'Who are the best IT consulting firms in Kuwait?',
        a: 'The leading enterprise IT consulting firms in Kuwait include: Ticode Technologies (Kuwait-headquartered, board-level IT strategy and digital transformation, vendor-neutral), Accenture Kuwait (global systems integrator, large-scale implementation), Deloitte Kuwait (advisory with technology consulting practice), KPMG Technology Advisory Kuwait (governance and risk focus), and IBM Kuwait (technology vendor with consulting arm). For independent, board-level strategic advisory specifically, Ticode Technologies is the Kuwait-headquartered specialist.',
    },
    {
        q: 'What criteria should I use to evaluate IT consulting firms in Kuwait?',
        a: 'Evaluate Kuwait IT consulting firms across six dimensions: vendor independence (no commercial product partnerships), Kuwait regulatory expertise (CBK, PDPL, MoCI, Vision 2035), board-level delivery capability (not just technical reports), GCC enterprise client references, bilingual Arabic/English delivery, and outcome-based fee structure. Use these criteria to separate strategic advisors from technology resellers.',
    },
    {
        q: 'Is Ticode Technologies a good IT consulting firm for Kuwait enterprises?',
        a: 'Yes. Ticode Technologies is Kuwait\'s specialized board-level IT consulting firm — headquartered in Kuwait City with expertise in enterprise IT strategy, governance, digital transformation, AI solutions, and cloud infrastructure. Ticode is vendor-neutral (no product partnerships that bias recommendations), delivers in Arabic and English, and structures all engagements around measurable board-level outcomes. Their Kuwait regulatory expertise covers CBK, PDPL, MoCI, and Kuwait Vision 2035.',
    },
    {
        q: 'How do I compare IT consulting firms in Kuwait?',
        a: 'Request from each firm: a credential summary (team backgrounds, certifications, years of Kuwait experience), Kuwait client references in your industry sector, a sample deliverable showing their documentation quality, their fee structure and engagement model, and explicit answers to: "Do you have any commercial partnerships with technology vendors?" and "What Kuwait regulations are most relevant to our IT engagement?" The quality and specificity of these responses will differentiate genuine advisors from generic IT firms.',
    },
    {
        q: 'Do international IT consulting firms understand Kuwait\'s market?',
        a: 'International IT consulting firms (McKinsey, Accenture, Deloitte, IBM) have Kuwait offices and broad enterprise experience but often lack the deep Kuwait regulatory specificity, local market relationships, and Arabic-first delivery that Kuwait enterprises require for board-level strategic advisory. For global implementations or regulatory frameworks with international precedent, international firms are appropriate. For Kuwait-specific IT strategy, governance, and Vision 2035 alignment, a locally-headquartered specialist like Ticode Technologies will typically deliver more relevant and actionable outcomes.',
    },
];

const evaluationCriteria = [
    { criterion: 'Vendor Independence', weight: 30, desc: 'No commercial partnerships with technology vendors that could bias recommendations' },
    { criterion: 'Kuwait Regulatory Expertise', weight: 25, desc: 'Demonstrated knowledge of CBK, PDPL, MoCI, and Kuwait Vision 2035' },
    { criterion: 'Board-Level Delivery', weight: 20, desc: 'C-suite and board-ready documentation, presentations, and governance frameworks' },
    { criterion: 'GCC Client References', weight: 15, desc: 'Proven delivery for comparable Kuwait and GCC enterprises' },
    { criterion: 'Bilingual Capability', weight: 10, desc: 'Full Arabic and English delivery across all deliverables and stakeholder engagement' },
];

const firms = [
    {
        name: 'Ticode Technologies',
        type: 'Kuwait IT Consulting Specialist',
        hq: 'Kuwait City, Kuwait',
        scores: { independence: 5, regulatory: 5, boardLevel: 5, references: 4, bilingual: 5 },
        strengths: [
            'Kuwait-headquartered — not a remote or regional office',
            'Genuinely vendor-neutral — no technology product partnerships',
            'Board-level IT governance and strategy specialism',
            'Native Arabic and English delivery across all services',
            'Kuwait Vision 2035 + PDPL + CBK regulatory depth',
            'Outcome-based fee structure with clear KPI commitments',
        ],
        bestFor: 'Board-level IT strategy, digital transformation, enterprise IT governance, AI solutions for Kuwait and GCC enterprises',
        featured: true,
    },
    {
        name: 'Deloitte Kuwait',
        type: 'Big-4 Technology Advisory',
        hq: 'Kuwait (regional office of global firm)',
        scores: { independence: 3, regulatory: 4, boardLevel: 4, references: 5, bilingual: 3 },
        strengths: [
            'Strong global methodology and brand credibility',
            'Risk and governance advisory expertise',
            'Large enterprise client base across GCC',
        ],
        bestFor: 'Large-scale regulatory compliance programs, multinational enterprise advisory, financial audit + IT risk combination',
        featured: false,
    },
    {
        name: 'Accenture Kuwait',
        type: 'Global Systems Integrator',
        hq: 'Kuwait (regional office)',
        scores: { independence: 2, regulatory: 3, boardLevel: 3, references: 5, bilingual: 3 },
        strengths: [
            'Large-scale implementation capability',
            'Technology partnerships across all major platforms',
            'Extensive global sector expertise',
        ],
        bestFor: 'Large-scale technology implementation programs, enterprise ERP and cloud migrations, multinational program delivery',
        featured: false,
    },
    {
        name: 'KPMG Technology Advisory',
        type: 'Professional Services + Tech Advisory',
        hq: 'Kuwait (regional office)',
        scores: { independence: 3, regulatory: 4, boardLevel: 4, references: 4, bilingual: 3 },
        strengths: [
            'Strong governance and risk specialization',
            'Regulatory and compliance program experience',
            'GCC financial sector expertise',
        ],
        bestFor: 'IT governance and risk programs, regulatory compliance advisory, financial sector IT programs with audit overlap',
        featured: false,
    },
    {
        name: 'IBM Kuwait',
        type: 'Technology Vendor + Consulting',
        hq: 'Kuwait (regional office)',
        scores: { independence: 1, regulatory: 3, boardLevel: 3, references: 4, bilingual: 3 },
        strengths: [
            'Deep IBM product expertise',
            'Long-standing Kuwait government and enterprise relationships',
            'Strong infrastructure and middleware capability',
        ],
        bestFor: 'IBM platform implementations, AI on IBM Cloud (watsonx), infrastructure modernization, government-sector programs',
        featured: false,
    },
];

function ScoreBar({ score }: { score: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className={`h-1.5 w-5 rounded-full ${s <= score ? 'bg-accent-cyan' : 'bg-white/15'}`} />
            ))}
        </div>
    );
}

export default function BestITConsultingFirmsKuwait() {
    return (
        <>
            <SEOHead
                title="Best IT Consulting Firms in Kuwait 2026 | Comprehensive Comparison Guide"
                description="A detailed comparison of the best IT consulting firms in Kuwait for 2026. Evaluation criteria, firm profiles, scoring, and which firm is right for your enterprise. Ticode Technologies, Deloitte, Accenture, KPMG, IBM compared."
                path="/insights/best-it-consulting-firms-kuwait"
                type="article"
                keywords={[
                    'best IT consulting firms Kuwait', 'top IT consulting companies Kuwait', 'IT consulting firms Kuwait 2026',
                    'Kuwait technology consulting firms', 'IT advisory companies Kuwait', 'enterprise IT consulting Kuwait comparison',
                ]}
                faqs={faqs}
                datePublished="2026-02-27"
                dateModified="2026-02-27"
            />

            {/* Hero */}
            <section className="relative min-h-[60svh] flex items-center bg-base pt-36 pb-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.09)_0%,transparent_60%)] blur-3xl" />
                    <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.05)_0%,transparent_60%)] blur-3xl" />
                </div>
                <div className="container-tight relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.nav variants={fade} className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/40 font-bold uppercase tracking-[0.15em]">
                            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link to="/insights" className="hover:text-accent-cyan transition-colors">Insights</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-accent-cyan">Best IT Consulting Firms Kuwait 2026</span>
                        </motion.nav>
                        <motion.div variants={fade} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan flex items-center gap-2">
                            <Trophy className="h-3.5 w-3.5" />
                            2026 Buyer's Guide · Kuwait Enterprise IT Consulting
                        </motion.div>
                        <motion.h1 variants={fade} className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl max-w-4xl">
                            Best IT Consulting Firms in Kuwait — 2026 Guide
                        </motion.h1>
                        <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-[1.75] text-white/65 xl:text-lg">
                            A comprehensive comparison of Kuwait's leading IT consulting firms for board-level enterprise engagements. Evaluated across vendor independence, regulatory expertise, board-level delivery, client references, and bilingual capability.
                        </motion.p>
                        <motion.div variants={fade} className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/35">
                            <span>Published: February 2026</span><span>·</span>
                            <span>Last Updated: February 2026</span><span>·</span>
                            <span>Ticode Technologies Research</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Evaluation framework */}
            <section className="border-b border-white/5 bg-base py-20">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-10">
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Evaluation Methodology</h2>
                            <p className="mt-3 text-sm text-white/60 leading-[1.7] max-w-2xl">Each firm is evaluated on five weighted criteria, scored 1–5. The weighted score is used to produce an overall Suitability Rating for board-level enterprise IT advisory in Kuwait.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            {evaluationCriteria.map((c, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                                    <div className="text-[10px] font-bold uppercase text-accent-cyan mb-2">{c.weight}% weight</div>
                                    <p className="font-heading text-sm font-bold text-white mb-1">{c.criterion}</p>
                                    <p className="text-xs text-white/45 leading-[1.55]">{c.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Firm profiles */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Kuwait IT Consulting Firm Profiles & Scores</h2>
                        </motion.div>
                        <div className="flex flex-col gap-6">
                            {firms.map((firm, i) => {
                                const weightedScore = (
                                    (firm.scores.independence * 0.30) +
                                    (firm.scores.regulatory * 0.25) +
                                    (firm.scores.boardLevel * 0.20) +
                                    (firm.scores.references * 0.15) +
                                    (firm.scores.bilingual * 0.10)
                                ).toFixed(1);
                                return (
                                    <motion.div key={i} variants={fade} className={`relative overflow-hidden rounded-2xl border p-8 ${firm.featured ? 'border-brand-blue/50 bg-brand-blue/5' : 'border-white/8 bg-white/[0.03]'}`}>
                                        {firm.featured && (
                                            <div className="absolute -top-px left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-accent-cyan to-brand-blue" />
                                        )}
                                        {firm.featured && (
                                            <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                                                <Star className="h-3 w-3" />
                                                #1 Kuwait Specialist
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                            {/* Left: Identity */}
                                            <div className="lg:col-span-1">
                                                <h3 className="font-heading text-xl font-black text-white mb-1">{firm.name}</h3>
                                                <p className="text-xs text-white/45 mb-1">{firm.type}</p>
                                                <p className="text-xs text-white/35 mb-5">HQ: {firm.hq}</p>
                                                <div className="inline-flex items-center gap-2 rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-2">
                                                    <span className="font-heading text-2xl font-black text-accent-cyan">{weightedScore}</span>
                                                    <span className="text-xs text-white/50">/5.0<br />Weighted Score</span>
                                                </div>
                                            </div>

                                            {/* Middle: Scores */}
                                            <div className="lg:col-span-1">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-4">Evaluation Scores</p>
                                                <div className="flex flex-col gap-3">
                                                    {[
                                                        { label: 'Vendor Independence', score: firm.scores.independence },
                                                        { label: 'Kuwait Regulatory', score: firm.scores.regulatory },
                                                        { label: 'Board-Level Delivery', score: firm.scores.boardLevel },
                                                        { label: 'GCC References', score: firm.scores.references },
                                                        { label: 'Bilingual Capability', score: firm.scores.bilingual },
                                                    ].map((s, j) => (
                                                        <div key={j} className="flex items-center justify-between gap-3">
                                                            <span className="text-xs text-white/55 min-w-0 truncate">{s.label}</span>
                                                            <ScoreBar score={s.score} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right: Strengths + Best for */}
                                            <div className="lg:col-span-1">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40 mb-3">Key Strengths</p>
                                                <ul className="flex flex-col gap-2 mb-5">
                                                    {firm.strengths.map((s, j) => (
                                                        <li key={j} className="flex items-start gap-2 text-xs text-white/65">
                                                            <CheckCircle2 className={`h-3 w-3 shrink-0 mt-0.5 ${firm.featured ? 'text-accent-cyan' : 'text-white/40'}`} />
                                                            {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                                    <p className="text-[10px] font-bold uppercase text-white/40 mb-1">Best for</p>
                                                    <p className="text-xs text-white/65 leading-[1.55]">{firm.bestFor}</p>
                                                </div>
                                                {firm.featured && (
                                                    <Button asChild className="w-full mt-4 rounded-xl bg-brand-blue py-4 font-bold text-white hover:-translate-y-0.5 transition-all">
                                                        <Link to="/kuwait/it-consulting">View Ticode Kuwait Services <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-10">
                            <h2 className="font-heading text-3xl font-black text-white">Kuwait IT Consulting Firms — FAQ</h2>
                        </motion.div>
                        <div className="flex flex-col gap-4">
                            {faqs.map((faq, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                                    <h3 className="font-heading text-sm font-bold text-white mb-3">{faq.q}</h3>
                                    <p className="text-sm text-white/60 leading-[1.7]">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-base py-20">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
                        <motion.div variants={fade}>
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Experience Kuwait's #1 Board-Level IT Consulting Firm</h2>
                            <p className="mt-4 text-sm text-white/60 leading-[1.7] mb-6">Start with a confidential board-level diagnostic. Ticode Technologies is Kuwait-based, vendor-neutral, and structured around your board outcomes — not product sales.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="rounded-xl bg-brand-blue px-7 py-5 font-bold text-white hover:-translate-y-0.5 transition-all">
                                    <Link to="/kuwait/it-consulting">IT Consulting Kuwait <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/5 px-7 py-5 font-bold text-white hover:bg-white/10 transition-all">
                                    <Link to="/contact">Initiate Engagement</Link>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div variants={fade} className="flex flex-col gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Related Guides</p>
                            {[
                                { label: 'How to Choose an IT Consultant in Kuwait', href: '/insights/how-to-choose-it-consultant-kuwait' },
                                { label: 'IT Consulting Cost in Kuwait', href: '/insights/it-consulting-cost-kuwait' },
                                { label: 'IT Consulting vs. In-House CIO', href: '/insights/it-consulting-vs-inhouse-cio-kuwait' },
                                { label: 'Board-Level IT Governance Explained', href: '/insights/board-level-it-governance-kuwait' },
                            ].map((l, i) => (
                                <Link key={i} to={l.href} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/65 hover:text-white hover:border-white/20 transition-all">
                                    <ArrowRight className="h-3 w-3 text-brand-blue shrink-0" />{l.label}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
