import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Target, TrendingUp, ChevronRight, Milestone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
    {
        q: 'What is an IT strategy framework?',
        a: 'An IT strategy framework is a structured approach to aligning technology investments, governance, and capabilities with an enterprise\'s business objectives. For Kuwait enterprises, a practical IT strategy framework covers four domains: strategic alignment (IT tied to board goals), portfolio management (investment prioritization), risk and compliance (CBK, PDPL, sector mandates), and performance measurement (how IT value is tracked and reported).',
    },
    {
        q: 'How do Kuwait enterprises align IT strategy with Kuwait Vision 2035?',
        a: 'Kuwait Vision 2035 (New Kuwait) sets four digital-economy priorities relevant to enterprise IT strategy: digital infrastructure development, e-government service integration, private sector digital enablement, and knowledge economy development. Kuwait enterprises align IT strategy by mapping their technology roadmap to these national themes — ensuring investment in digital capabilities, cloud sovereignty, data governance, and workforce digital skills development.',
    },
    {
        q: 'How long does it take to develop an IT strategy for a Kuwait enterprise?',
        a: 'A board-ready IT strategy for a typical Kuwait enterprise (500–2,000 employees) requires 8–14 weeks: 4–6 weeks for diagnostic (IT health assessment, stakeholder interviews, architecture review) and 4–8 weeks for strategy development (enterprise IT roadmap, governance framework, investment business case). Ticode Technologies delivers the complete IT strategy with full board presentation in 10–12 weeks as a standard project scope.',
    },
    {
        q: 'What should an IT strategy document include for Kuwait enterprises?',
        a: 'A board-grade Kuwait enterprise IT strategy document should include: (1) Current State Assessment — architecture health, regulatory posture, vendor landscape, cost baseline, (2) Strategic Goals — 3-year technology objectives tied to business strategy and Kuwait Vision 2035, (3) IT Roadmap — prioritized initiatives with timelines, investment, and dependencies, (4) Governance Framework — decision rights, portfolio process, and board reporting cadence, (5) Risk Register — technology risks with Kuwait regulatory context, and (6) Investment Plan — CAPEX/OPEX breakdown with business case for each initiative.',
    },
    {
        q: 'What is the difference between IT strategy and digital transformation?',
        a: 'IT strategy is the broader governance and investment framework for how technology serves the enterprise. Digital transformation is a specific strategic program within IT strategy — focused on fundamentally changing how the enterprise creates and delivers value using technology. All digital transformation programs require a sound IT strategy foundation, but not all IT strategy is about transformation. Ticode Technologies delivers both as integrated services for Kuwait enterprises.',
    },
];

const frameworkPhases = [
    {
        phase: 'A', name: 'Diagnose', color: 'brand-blue',
        outputs: ['IT Health Score', 'Risk Inventory', 'Cost Baseline', 'Regulatory Gap Map'],
        questions: ['Where is IT underperforming vs. business needs?', 'What regulatory obligations are unmet?', 'Where is technical debt highest?', 'Which vendors create concentration risk?'],
        duration: '4–6 weeks',
        desc: 'A rigorous, evidence-based assessment of current IT state across four pillars: architecture health, portfolio value delivery, regulatory compliance posture, and vendor risk. Structured for board-level consumption with a Kuwait enterprise IT health score.',
    },
    {
        phase: 'B', name: 'Align', color: 'accent-cyan',
        outputs: ['Strategic Priorities Map', 'Vision 2035 Alignment Assessment', 'Stakeholder Agreement', 'Investment Criteria'],
        questions: ['Which business goals require technology support?', 'What does the board need IT to deliver in 3 years?', 'Where is Kuwait Vision 2035 relevant to our IT roadmap?', 'How do we prioritize competing demands?'],
        duration: '3–4 weeks',
        desc: 'Board, CEO, and senior leadership sessions to define IT strategic priorities aligned to enterprise goals and Kuwait Vision 2035 obligations. Outputs include a shared strategic narrative, explicit investment criteria, and prioritized capability gaps.',
    },
    {
        phase: 'C', name: 'Design', color: 'brand-blue',
        outputs: ['3-Year IT Roadmap', 'Architecture Blueprint', 'Governance Framework', 'Investment Business Case'],
        questions: ['What is the 3-year technology roadmap?', 'What governance model ensures board oversight?', 'What architecture decisions enable our strategy?', 'What does the investment plan look like?'],
        duration: '4–6 weeks',
        desc: 'Full IT strategy design: enterprise technology roadmap, target architecture blueprint, IT governance framework with decision rights, and investment plan with full business case. All structured for board approval and regulatory audit.',
    },
    {
        phase: 'D', name: 'Execute & Govern', color: 'accent-cyan',
        outputs: ['Program Management Office', 'Benefits Realization Tracker', 'Monthly Board Reports', 'Vendor Governance Reviews'],
        questions: ['How are programs tracked against commitments?', 'How does the board maintain ongoing visibility?', 'How do we manage vendor performance?', 'How do we course-correct when priorities shift?'],
        duration: 'Ongoing',
        desc: 'Structured execution with board-ready reporting, benefits realization tracking, dependency management, and vendor governance. IT strategy governance becomes an embedded enterprise capability — not a one-time consulting output.',
    },
];

const kuwaitSpecificFactors = [
    { factor: 'Kuwait PDPL Data Governance', impact: 'Personal Data Protection Law obligations require data governance integrated into IT architecture and vendor contracts. Failure carries regulatory penalties and reputational risk.', action: 'Embed PDPL compliance requirements in every IT investment decision and vendor selection process.' },
    { factor: 'CBK Technology Risk Requirements', impact: 'For Kuwait financial institutions, the Central Bank of Kuwait\'s technology risk management framework creates mandatory IT governance obligations including cyber risk reporting and third-party risk management.', action: 'Build CBK-aligned technology risk register and quarterly risk reporting cadence into IT governance framework.' },
    { factor: 'Kuwait Vision 2035 Alignment', impact: 'Kuwait\'s national digital transformation agenda creates both obligations (e-government integration) and opportunities (digital economy programs, government digitalization partnerships) for enterprises.', action: 'Map IT roadmap to Vision 2035 digital economy programs; identify government partnership and funding opportunities.' },
    { factor: 'GCC Talent Market Constraints', impact: 'Kuwait\'s enterprise technology talent market is constrained — making IT staffing a strategic resource planning challenge that must be built into IT strategy.', action: 'Include IT capability development, staff augmentation strategy, and outsourcing governance in IT roadmap.' },
];

export default function ITStrategyFrameworkKuwait() {
    return (
        <>
            <SEOHead
                title="IT Strategy Framework for Kuwait Enterprises | 2026 Board-Level Guide"
                description="A complete IT strategy framework for Kuwait enterprises: diagnostic, alignment, design, and governance phases. Kuwait Vision 2035, PDPL, and CBK regulatory context included. Ticode Technologies."
                path="/insights/it-strategy-framework-kuwait"
                type="article"
                keywords={[
                    'IT strategy Kuwait', 'IT strategy framework Kuwait', 'enterprise IT strategy Kuwait',
                    'Kuwait Vision 2035 IT strategy', 'IT strategy GCC', 'technology strategy Kuwait enterprise',
                    'digital strategy Kuwait', 'IT roadmap Kuwait',
                ]}
                faqs={faqs}
                datePublished="2026-02-27"
                dateModified="2026-02-27"
            />

            {/* Hero */}
            <section className="relative min-h-[55svh] flex items-center bg-base pt-36 pb-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] blur-3xl" />
                </div>
                <div className="container-tight relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.nav variants={fade} className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/40 font-bold uppercase tracking-[0.15em]">
                            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link to="/insights" className="hover:text-accent-cyan transition-colors">Insights</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-accent-cyan">IT Strategy Framework Kuwait</span>
                        </motion.nav>
                        <motion.div variants={fade} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan flex items-center gap-2">
                            <Layers className="h-3.5 w-3.5" />
                            Framework Guide · Board-Level IT Strategy
                        </motion.div>
                        <motion.h1 variants={fade} className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl max-w-4xl">
                            IT Strategy Framework for Kuwait Enterprises
                        </motion.h1>
                        <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-[1.75] text-white/65 xl:text-lg">
                            A four-phase IT strategy framework designed for Kuwait enterprise board leadership — covering diagnostic, strategic alignment, roadmap design, and governance embedding, with Kuwait Vision 2035, PDPL, and CBK regulatory context throughout.
                        </motion.p>
                        <motion.div variants={fade} className="mt-3 flex items-center gap-4 text-xs text-white/35">
                            <span>Published: February 2026</span><span>·</span>
                            <span>Ticode Technologies, Kuwait</span><span>·</span>
                            <span>~11 min read</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Framework phases */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">The Ticode IT Strategy Framework</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-3xl">Four structured phases designed for Kuwait enterprise board leadership — built around measurable outcomes, regulatory compliance, and governance sustainability beyond the initial engagement.</p>
                        </motion.div>
                        <div className="flex flex-col gap-6">
                            {frameworkPhases.map((phase, i) => (
                                <motion.div key={i} variants={fade} className="rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-brand-blue/20 transition-all duration-300">
                                    <div className="p-7">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/40 bg-brand-blue/10 font-heading text-lg font-black text-accent-cyan">{phase.phase}</div>
                                                <div>
                                                    <h3 className="font-heading text-xl font-bold text-white">Phase {phase.phase}: {phase.name}</h3>
                                                    <p className="text-xs text-white/40 mt-0.5">{phase.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-white/60 leading-[1.75] mb-6">{phase.desc}</p>
                                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-cyan mb-3">Key Questions Answered</p>
                                                <ul className="flex flex-col gap-2">
                                                    {phase.questions.map((q, j) => (
                                                        <li key={j} className="flex items-start gap-2 text-xs text-white/55">
                                                            <span className="mt-0.5 text-brand-blue font-bold shrink-0">→</span>{q}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-cyan mb-3">Deliverables</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.outputs.map((o, j) => (
                                                        <span key={j} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white/65">{o}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Kuwait-specific factors */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Kuwait-Specific IT Strategy Factors</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-3xl">IT strategy in Kuwait requires contextual factors that global frameworks omit. These four Kuwait-specific dynamics must be integrated into every enterprise IT strategic plan.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {kuwaitSpecificFactors.map((f, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                                    <h3 className="font-heading text-base font-bold text-white mb-3">{f.factor}</h3>
                                    <p className="text-sm text-white/55 leading-[1.65] mb-4">{f.impact}</p>
                                    <div className="rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 p-3">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-cyan mb-1">Strategic Action</p>
                                        <p className="text-xs text-white/65 leading-[1.6]">{f.action}</p>
                                    </div>
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
                        <motion.div variants={fade} className="mb-10"><h2 className="font-heading text-3xl font-black text-white">IT Strategy FAQ — Kuwait Enterprises</h2></motion.div>
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
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Build Your Kuwait Enterprise IT Strategy with Ticode</h2>
                            <p className="mt-4 text-sm text-white/60 leading-[1.7] mb-6">Ticode Technologies delivers board-ready IT strategies for Kuwait enterprises in 10–12 weeks — including Kuwait Vision 2035 alignment, PDPL compliance, and full governance framework.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="rounded-xl bg-brand-blue px-7 py-5 font-bold text-white hover:-translate-y-0.5 transition-all">
                                    <Link to="/kuwait/it-consulting">IT Consulting Kuwait <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/5 px-7 py-5 font-bold text-white hover:bg-white/10 transition-all">
                                    <Link to="/contact">Start IT Strategy Project</Link>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div variants={fade} className="flex flex-col gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Related Guides</p>
                            {[
                                { label: 'IT Consulting Kuwait — Pillar Page', href: '/kuwait/it-consulting' },
                                { label: 'Board-Level IT Governance Explained', href: '/insights/board-level-it-governance-kuwait' },
                                { label: 'IT Consulting Cost in Kuwait', href: '/insights/it-consulting-cost-kuwait' },
                                { label: 'Best IT Consulting Firms in Kuwait', href: '/insights/best-it-consulting-firms-kuwait' },
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
