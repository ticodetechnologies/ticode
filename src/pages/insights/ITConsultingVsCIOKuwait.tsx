import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Users, Target, ChevronRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
    {
        q: 'Is it better to hire an IT consulting firm or an in-house CIO in Kuwait?',
        a: 'The answer depends on your enterprise\'s scale, budget, and strategic needs. For most Kuwait enterprises with fewer than 500 employees or without a defined technology strategy function, IT consulting delivers greater value per investment than a full-time CIO hire. For large enterprises with complex, ongoing IT operations across multiple business units, a combination of an in-house CIO plus external IT advisory often delivers the best outcome.',
    },
    {
        q: 'What does a CIO cost in Kuwait?',
        a: 'A senior Chief Information Officer (CIO) in Kuwait commands a total compensation package of approximately KWD 4,500–8,000 per month plus end-of-service benefits, bonuses, and allowances — totaling KWD 65,000–110,000 per year in total cost to company. This is before accounting for the 6–12 month recruitment timeline and onboarding period before the CIO reaches full effectiveness.',
    },
    {
        q: 'Can an IT consulting firm replace a CIO?',
        a: 'An IT consulting firm can functionally replace a CIO for strategic and governance purposes through a "fractional CIO" or "virtual CIO" engagement model. Ticode Technologies provides board-level IT advisory that covers all strategic CIO functions — IT strategy, portfolio governance, vendor management, regulatory compliance, and board reporting — at a fraction of the total CIO cost. This is particularly effective for Kuwait enterprises in transformation phases.',
    },
    {
        q: 'What is a fractional CIO in Kuwait?',
        a: 'A fractional CIO is an experienced IT leader who provides CIO-level strategic advisory on a part-time or retainer basis — typically 2–4 days per week — rather than as a full-time employee. For Kuwait enterprises, Ticode Technologies\' advisory retainer model effectively functions as a fractional CIO: providing board-level IT strategy, governance oversight, vendor management, and executive stakeholder support.',
    },
    {
        q: 'When should a Kuwait enterprise hire an internal CIO?',
        a: 'Consider hiring an internal CIO when: (1) your IT organization has 20+ staff and multiple complex system portfolios, (2) you have standing board-level technology committees requiring a permanent internal chair, (3) your regulatory environment requires a named executive accountable for IT risk (common in CBK-regulated institutions), or (4) IT is a core product differentiator in your business model (e.g., fintech, e-commerce platforms).',
    },
];

const comparisonData = [
    { dimension: 'Annual Cost (Kuwait)', consulting: 'KWD 29,000 – 96,000/yr', cio: 'KWD 65,000 – 110,000/yr', advantage: 'consulting' },
    { dimension: 'Time to Effectiveness', consulting: '4–8 weeks', cio: '6–12 months (recruitment + onboarding)', advantage: 'consulting' },
    { dimension: 'Specialist Depth', consulting: 'Team of 3–10 specialists', cio: 'One senior generalist', advantage: 'consulting' },
    { dimension: 'Independence from Vendors', consulting: 'Full — no vendor partnerships', cio: 'Variable — depends on individual background', advantage: 'consulting' },
    { dimension: 'Regulatory Expertise', consulting: 'Embedded multi-market expertise', cio: 'Individual knowledge, may need upskilling', advantage: 'consulting' },
    { dimension: 'Ongoing Operational IT', consulting: 'Limited — advisory scope only', cio: 'Full-time operational IT leadership', advantage: 'cio' },
    { dimension: 'Long-term Knowledge Retention', consulting: 'Documented — IP transferred at end', cio: 'Risk of institutional knowledge loss on exit', advantage: 'consulting' },
    { dimension: 'Arabic/English Delivery', consulting: 'Bilingual as standard', cio: 'Depends on individual hire', advantage: 'consulting' },
    { dimension: 'Scalability', consulting: 'Scale up/down as needed', cio: 'Fixed capacity (one person)', advantage: 'consulting' },
    { dimension: 'Direct Staff Management', consulting: 'Not in scope', cio: 'Full internal IT team management', advantage: 'cio' },
];

const scenarioMap = [
    { scenario: 'Enterprise in digital transformation', recommendation: 'IT Consulting', reason: 'External advisory provides transformation expertise and accelerates delivery without permanent headcount overhead' },
    { scenario: 'CBK-regulated bank (IT risk accountability required)', recommendation: 'In-House CIO + Advisory', reason: 'Regulatory risk accountable named executive + specialist advisory depth for governance and compliance' },
    { scenario: 'Mid-size Kuwait enterprise (<200 employees)', recommendation: 'IT Consulting', reason: 'Cost-efficiency — fractional advisory delivers CIO-level strategy without full-time hire cost' },
    { scenario: 'No existing CIO, board needs IT visibility now', recommendation: 'IT Consulting', reason: 'Fastest path to board-level governance — within 8 weeks vs 12+ months for CIO recruitment' },
    { scenario: 'IT as core product differentiator (fintech, e-commerce)', recommendation: 'In-House CIO + Advisory', reason: 'Technology leadership embedded in product strategy requires permanent internal leadership' },
    { scenario: 'GCC multi-country expansion', recommendation: 'IT Consulting', reason: 'Multi-jurisdiction regulatory expertise across Kuwait, KSA, UAE is built into advisory practice — not typically available in one CIO hire' },
];

export default function ITConsultingVsCIOPage() {
    return (
        <>
            <SEOHead
                title="IT Consulting vs In-House CIO in Kuwait | Which is Right for Your Enterprise?"
                description="A detailed comparison of IT consulting versus hiring an in-house CIO for Kuwait enterprises. Cost analysis, capability comparison, scenario guide, and Kuwait market context."
                path="/insights/it-consulting-vs-inhouse-cio-kuwait"
                type="article"
                keywords={[
                    'IT consulting vs CIO Kuwait', 'in-house CIO cost Kuwait', 'fractional CIO Kuwait',
                    'virtual CIO Kuwait', 'IT consulting vs CIO comparison', 'CIO advisory Kuwait',
                ]}
                faqs={faqs}
                datePublished="2026-02-27"
                dateModified="2026-02-27"
            />

            {/* Hero */}
            <section className="relative min-h-[55svh] flex items-center bg-base pt-36 pb-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent_60%)] blur-3xl" />
                </div>
                <div className="container-tight relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.nav variants={fade} className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/40 font-bold uppercase tracking-[0.15em]">
                            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link to="/insights" className="hover:text-accent-cyan transition-colors">Insights</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-accent-cyan">IT Consulting vs In-House CIO</span>
                        </motion.nav>
                        <motion.div variants={fade} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan flex items-center gap-2">
                            <Target className="h-3.5 w-3.5" />
                            Decision Framework · Kuwait Enterprise Leadership
                        </motion.div>
                        <motion.h1 variants={fade} className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl max-w-4xl">
                            IT Consulting vs. Hiring an In-House CIO in Kuwait
                        </motion.h1>
                        <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-[1.75] text-white/65 xl:text-lg">
                            A full cost, capability, and scenario analysis for Kuwait board-level decision-makers choosing between external IT consulting and a permanent Chief Information Officer hire.
                        </motion.p>
                        <motion.div variants={fade} className="mt-3 flex items-center gap-4 text-xs text-white/35">
                            <span>Published: February 2026</span><span>·</span>
                            <span>Ticode Technologies, Kuwait</span><span>·</span>
                            <span>~9 min read</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Comparison table */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Full Comparison: IT Consulting vs. In-House CIO</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-3xl">A 10-dimension capability and cost comparison for Kuwait enterprises, based on current Kuwait market data.</p>
                        </motion.div>
                        <motion.div variants={fade} className="overflow-x-auto rounded-2xl border border-white/8">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/[0.03]">
                                        <th className="p-5 text-left text-xs font-bold uppercase tracking-[0.15em] text-white/50 w-1/3">Dimension</th>
                                        <th className="p-5 text-left text-xs font-bold uppercase tracking-[0.15em] text-brand-blue w-1/3">IT Consulting (Ticode)</th>
                                        <th className="p-5 text-left text-xs font-bold uppercase tracking-[0.15em] text-white/50 w-1/3">In-House CIO Hire</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                                            <td className="p-5 font-medium text-white/70">{row.dimension}</td>
                                            <td className={`p-5 ${row.advantage === 'consulting' ? 'text-accent-cyan font-semibold' : 'text-white/55'}`}>
                                                {row.advantage === 'consulting' && <CheckCircle2 className="inline h-3.5 w-3.5 mr-2 mb-0.5" />}
                                                {row.consulting}
                                            </td>
                                            <td className={`p-5 ${row.advantage === 'cio' ? 'text-accent-cyan font-semibold' : 'text-white/55'}`}>
                                                {row.advantage === 'cio' && <CheckCircle2 className="inline h-3.5 w-3.5 mr-2 mb-0.5" />}
                                                {row.cio}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scenario guide */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Which is Right for Your Kuwait Enterprise? — Scenario Guide</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {scenarioMap.map((s, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <p className="text-sm font-bold text-white leading-[1.4]">{s.scenario}</p>
                                        <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${s.recommendation === 'IT Consulting' ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/10 text-white/60'}`}>{s.recommendation}</span>
                                    </div>
                                    <p className="text-xs text-white/50 leading-[1.65]">{s.reason}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-10"><h2 className="font-heading text-3xl font-black text-white">FAQ: IT Consulting vs. CIO in Kuwait</h2></motion.div>
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
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Get Expert IT Advisory — Without the CIO Overhead</h2>
                            <p className="mt-4 text-sm text-white/60 leading-[1.7] mb-6">Ticode Technologies provides board-level IT strategy, governance, and vendor management as a fractional advisory service — at a fraction of a full-time CIO cost.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="rounded-xl bg-brand-blue px-7 py-5 font-bold text-white hover:-translate-y-0.5 transition-all">
                                    <Link to="/kuwait/it-consulting">Kuwait IT Consulting <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/5 px-7 py-5 font-bold text-white hover:bg-white/10 transition-all">
                                    <Link to="/contact">Speak with Our Team</Link>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div variants={fade} className="flex flex-col gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Related Reading</p>
                            {[
                                { label: 'IT Consulting Kuwait — Pillar Page', href: '/kuwait/it-consulting' },
                                { label: 'IT Consulting Cost in Kuwait', href: '/insights/it-consulting-cost-kuwait' },
                                { label: 'How to Choose an IT Consultant in Kuwait', href: '/insights/how-to-choose-it-consultant-kuwait' },
                                { label: 'Best IT Consulting Firms in Kuwait 2026', href: '/insights/best-it-consulting-firms-kuwait' },
                            ].map((l, i) => (
                                <Link key={i} to={l.href} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/65 hover:text-white hover:border-white/20 transition-all duration-200">
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
