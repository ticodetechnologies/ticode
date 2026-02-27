import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calculator, Building2, Globe2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
    {
        q: 'How much does IT consulting cost in Kuwait for a small enterprise?',
        a: 'For small enterprises in Kuwait (50–200 employees), IT consulting typically starts at KWD 2,400–4,800 for a focused 1-month technology assessment or specific advisory engagement. Scope is usually limited to a single department or system area.',
    },
    {
        q: 'What is the average cost of a full IT strategy project in Kuwait?',
        a: 'A comprehensive enterprise IT strategy project in Kuwait — covering diagnostic, strategy development, and roadmap — typically ranges from KWD 15,000 to KWD 45,000, depending on organizational size, complexity, and regulatory scope. This typically spans 3–4 months of advisory engagement.',
    },
    {
        q: 'Are IT consulting fees in Kuwait charged hourly or by project?',
        a: 'Ticode Technologies structures fees primarily as fixed-project or monthly retainer engagements — not hourly billing. This aligns incentives with outcomes rather than hours billed. Fixed project fees are agreed upfront with clearly defined deliverables and governance milestones.',
    },
    {
        q: 'What currency do IT consultants charge in Kuwait?',
        a: 'Enterprise IT consulting in Kuwait is typically invoiced in KWD (Kuwaiti Dinar) or USD. Ticode Technologies accepts KWD, USD, and can accommodate other GCC currencies (SAR, AED) for regional engagements.',
    },
    {
        q: 'Is IT consulting in Kuwait more expensive than hiring in-house?',
        a: 'For project-based or strategic advisory needs, IT consulting is significantly more cost-effective than a full-time senior hire. A senior IT Director in Kuwait commands KWD 3,000–6,000/month plus benefits, without the specialist depth of an advisory team. For ongoing fractional CIO functions, a retainer advisory model typically costs 40–60% less than a full-time equivalent.',
    },
];

const pricingTiers = [
    {
        tier: 'IT Assessment',
        scope: 'Single business unit or system area',
        duration: '4–6 weeks',
        range: 'KWD 4,800 – 9,600',
        usd: 'USD 15,000 – 31,000',
        deliverables: ['IT health diagnostic report', 'Risk and gap register', 'Priority action list', 'Executive presentation'],
        ideal: 'Enterprises beginning their IT governance journey or assessing a specific system or vendor',
    },
    {
        tier: 'IT Strategy Project',
        scope: 'Enterprise-wide strategy and roadmap',
        duration: '3–4 months',
        range: 'KWD 15,000 – 45,000',
        usd: 'USD 49,000 – 147,000',
        deliverables: ['3-year IT roadmap', 'Governance framework design', 'Investment business case', 'Architecture blueprint'],
        ideal: 'Medium to large Kuwait enterprises requiring board-level IT strategy alignment',
        featured: true,
    },
    {
        tier: 'Transformation Program',
        scope: 'Full enterprise digital transformation',
        duration: '6–18 months',
        range: 'KWD 45,000 – 180,000+',
        usd: 'USD 147,000 – 590,000+',
        deliverables: ['Full program management', 'Executive dashboards', 'Benefits realization tracking', 'Vendor governance'],
        ideal: 'Large enterprises and government entities executing multi-program digital transformation',
    },
    {
        tier: 'Advisory Retainer',
        scope: 'Ongoing CIO/CDO advisory function',
        duration: 'Monthly retainer',
        range: 'KWD 2,400 – 8,000/mo',
        usd: 'USD 7,800 – 26,000/mo',
        deliverables: ['Monthly board reporting', 'Strategic decision support', 'Vendor review', 'Risk monitoring'],
        ideal: 'Enterprises without an internal CIO/CDO requiring ongoing board-level IT advisory',
    },
];

const costFactors = [
    { factor: 'Organizational Scale', impact: 'High', desc: 'Enterprise-wide scope costs 3–5× more than departmental scope. Number of business units, geographies, and stakeholders drives scope and duration.' },
    { factor: 'Regulatory Complexity', impact: 'High', desc: 'CBK-regulated financial institutions, government entities, and healthcare organizations require additional compliance governance work, increasing engagement cost by 20–40%.' },
    { factor: 'Existing IT Maturity', impact: 'Medium', desc: 'Organizations with minimal IT governance documentation require more discovery work. Well-documented environments compress diagnostic timelines by 30–40%.' },
    { factor: 'Vendor Ecosystem Size', impact: 'Medium', desc: 'Enterprises with 10+ active technology vendors require more assessment effort for vendor risk and contract review components.' },
    { factor: 'Bilingual Delivery', impact: 'Low', desc: 'Arabic language delivery is included as standard by Ticode Technologies, with no premium for bilingual documentation and presentations.' },
    { factor: 'GCC Multi-Country', impact: 'Medium', desc: 'Engagements spanning multiple GCC countries (e.g., Kuwait + KSA + UAE) add 25–35% to baseline engagement cost for multi-jurisdiction regulatory alignment.' },
];

export default function ITConsultingCostPage() {
    return (
        <>
            <SEOHead
                title="IT Consulting Cost in Kuwait 2026 | Pricing Guide — Ticode Technologies"
                description="Complete IT consulting pricing guide for Kuwait enterprises. Assessment fees, project costs, retainer models, and cost factors explained. KWD pricing with USD equivalents. Ticode."
                path="/insights/it-consulting-cost-kuwait"
                type="article"
                keywords={[
                    'IT consulting cost Kuwait', 'IT consulting fees Kuwait', 'IT consulting price Kuwait',
                    'technology consulting cost Kuwait', 'IT advisory fees GCC', 'CIO consulting cost Kuwait',
                ]}
                faqs={faqs}
                datePublished="2026-02-27"
                dateModified="2026-02-27"
            />

            {/* Hero */}
            <section className="relative min-h-[60svh] flex items-center bg-base pt-36 pb-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -left-[5%] top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] blur-3xl" />
                </div>
                <div className="container-tight relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.nav variants={fade} className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/40 font-bold uppercase tracking-[0.15em]">
                            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link to="/insights" className="hover:text-accent-cyan transition-colors">Insights</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-accent-cyan">IT Consulting Cost Kuwait</span>
                        </motion.nav>

                        <motion.div variants={fade} className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                            <Calculator className="h-3.5 w-3.5" />
                            Kuwait Enterprise IT Pricing Guide · 2026
                        </motion.div>

                        <motion.h1 variants={fade} className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl max-w-4xl">
                            IT Consulting Cost in Kuwait:
                            <span className="block text-white/60">A Board-Level Pricing Guide</span>
                        </motion.h1>
                        <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-[1.75] text-white/65 xl:text-lg">
                            Enterprise IT consulting fees in Kuwait vary significantly by scope, complexity, and engagement model. This guide provides transparent pricing benchmarks, cost drivers, and engagement structures for Kuwait C-suite and board-level decision-makers evaluating independent IT advisory.
                        </motion.p>
                        <motion.div variants={fade} className="mt-3 flex items-center gap-4 text-xs text-white/35">
                            <span>Published: February 2026</span>
                            <span>·</span>
                            <span>Ticode Technologies, Kuwait</span>
                            <span>·</span>
                            <span>~8 min read</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing tiers */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">IT Consulting Pricing in Kuwait</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-2xl">
                                The following pricing benchmarks reflect Kuwait-market IT consulting rates for board-level and enterprise-grade engagements. Rates are expressed in KWD and USD for reference.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {pricingTiers.map((tier, i) => (
                                <motion.div key={i} variants={fade} className={`relative rounded-2xl border p-7 transition-all duration-300 ${tier.featured ? 'border-brand-blue/50 bg-brand-blue/5' : 'border-white/8 bg-white/[0.03] hover:border-white/15'}`}>
                                    {tier.featured && (
                                        <div className="absolute -top-3 left-6 rounded-full bg-brand-blue px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Most Common</div>
                                    )}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                                        <div>
                                            <h3 className="font-heading text-lg font-bold text-white">{tier.tier}</h3>
                                            <p className="text-xs text-white/45 mt-1">{tier.scope} · {tier.duration}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-heading text-xl font-black text-accent-cyan">{tier.range}</p>
                                            <p className="text-xs text-white/35 mt-0.5">{tier.usd}</p>
                                        </div>
                                    </div>
                                    <ul className="flex flex-col gap-2 mb-5">
                                        {tier.deliverables.map((d, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-white/65">
                                                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-white/40 leading-[1.6] border-t border-white/8 pt-4 mt-auto">
                                        <span className="font-bold text-white/60">Ideal for:</span> {tier.ideal}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cost factors */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">What Drives IT Consulting Costs in Kuwait</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-2xl">Understanding the key variables that determine your IT consulting investment — and how to optimize each for value.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {costFactors.map((f, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-heading text-sm font-bold text-white">{f.factor}</h3>
                                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${f.impact === 'High' ? 'bg-red-500/15 text-red-400' : f.impact === 'Medium' ? 'bg-yellow-500/15 text-yellow-400' : 'bg-green-500/15 text-green-400'}`}>
                                            {f.impact} Impact
                                        </span>
                                    </div>
                                    <p className="text-sm text-white/55 leading-[1.65]">{f.desc}</p>
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
                        <motion.div variants={fade} className="mb-10">
                            <h2 className="font-heading text-3xl font-black text-white">IT Consulting Cost — FAQ</h2>
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

            {/* CTA + internal links */}
            <section className="bg-base py-20">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
                        <motion.div variants={fade}>
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Get a Transparent IT Consulting Estimate</h2>
                            <p className="mt-4 text-sm text-white/60 leading-[1.7] mb-6">Use our project estimator to get a fee ballpark based on your organization's scope, complexity, and engagement type — or speak directly with our Kuwait advisory team.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="rounded-xl bg-brand-blue px-7 py-5 font-bold text-white hover:-translate-y-0.5 transition-all duration-200">
                                    <Link to="/services/it-consulting">Use Project Estimator <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/5 px-7 py-5 font-bold text-white hover:bg-white/10 transition-all duration-200">
                                    <Link to="/contact">Speak with Kuwait Team</Link>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div variants={fade} className="flex flex-col gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Related Articles</p>
                            {[
                                { label: 'How to Choose an IT Consultant in Kuwait', href: '/insights/how-to-choose-it-consultant-kuwait' },
                                { label: 'IT Consulting vs. In-House CIO in Kuwait', href: '/insights/it-consulting-vs-inhouse-cio-kuwait' },
                                { label: 'Kuwait IT Consulting Pillar Page', href: '/kuwait/it-consulting' },
                                { label: 'Board-Level IT Governance Explained', href: '/insights/board-level-it-governance-kuwait' },
                            ].map((link, i) => (
                                <Link key={i} to={link.href} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/65 hover:text-white hover:border-white/20 transition-all duration-200">
                                    <ArrowRight className="h-3 w-3 text-brand-blue shrink-0" />
                                    {link.label}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
