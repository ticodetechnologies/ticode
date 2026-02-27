import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Layers, BarChart3, ChevronRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
    {
        q: 'What is board-level IT governance?',
        a: 'Board-level IT governance is the framework through which an enterprise\'s board of directors exercises oversight, accountability, and strategic direction over technology investments, risk, and performance. It includes decision rights (who decides what), portfolio governance (which IT investments get funded), risk oversight (what technology risks the board must know about), and performance reporting (how IT value is measured and reported to the board).',
    },
    {
        q: 'Why is IT governance important for Kuwait enterprises?',
        a: 'Kuwait enterprises face intersecting governance pressures: CBK cybersecurity and technology risk regulations, Kuwait PDPL data protection obligations, Kuwait Vision 2035 digitalization mandates, and increasing investor and audit scrutiny of technology risk. Without IT governance, technology investments become misaligned with strategy, compliance exposure increases, and the board loses visibility into one of the enterprise\'s largest cost centers.',
    },
    {
        q: 'What is the COBIT framework? Is it relevant for Kuwait?',
        a: 'COBIT (Control Objectives for Information and Related Technologies) is an internationally recognized IT governance framework that defines what good IT governance looks like across five domains: EDM (Evaluate, Direct, Monitor), APO (Align, Plan, Organize), BAI (Build, Acquire, Implement), DSS (Deliver, Service, Support), and MEA (Monitor, Evaluate, Assess). COBIT is highly relevant for Kuwait — it is referenced in CBK digital banking guidelines and used by many GCC regulators.',
    },
    {
        q: 'How long does it take to implement IT governance in a Kuwait enterprise?',
        a: 'A foundational IT governance program for a mid-size Kuwait enterprise typically requires 6–9 months: 4–6 weeks for diagnostic, 6–8 weeks for governance design, and 3–6 months for embedding decision rights and reporting cadences. Ticode Technologies\' structured governance implementation delivers first board-ready IT reports within 90 days of engagement start.',
    },
    {
        q: 'What is the difference between IT governance and IT management?',
        a: 'IT governance is exercised at the board and C-suite level — it defines authority, accountability, and strategic direction. IT management is operational — it runs day-to-day technology operations within the boundaries set by governance. The board governs; the CIO/IT team manages. A common failure in Kuwait enterprises is having strong IT management but no board-level governance — meaning technology runs well tactically but remains misaligned with enterprise strategy.',
    },
];

const governanceDomains = [
    { icon: Building2, domain: 'Strategy Alignment', desc: 'IT investment decisions are explicitly tied to board-level strategic priorities and financial objectives — not to IT department preferences or vendor product cycles.', maturitySignal: 'Board reviews IT strategy alignment quarterly against enterprise goals' },
    { icon: Layers, domain: 'Portfolio Governance', desc: 'Technology investments are evaluated, prioritized, and governed as a portfolio — with clear business cases, benefit tracking, and reallocation mechanisms when priorities shift.', maturitySignal: 'IT investment decisions go through a defined governance gate before approval' },
    { icon: ShieldCheck, domain: 'Risk & Compliance Control', desc: 'Technology risk — cybersecurity, vendor concentration, data residency, regulatory compliance — is visible to the board and managed within agreed risk appetite thresholds.', maturitySignal: 'Board receives a technology risk dashboard in every governance meeting' },
    { icon: BarChart3, domain: 'Performance Measurement', desc: 'IT value is measured in business terms — cost efficiency, capability delivery, availability, and digital outcome contribution — not just internal IT metrics like uptime and ticket resolution.', maturitySignal: 'IT reports to the board in ROI, OPEX reduction, and digital outcome terms' },
    { icon: CheckCircle2, domain: 'Vendor Oversight', desc: 'Major technology vendors are governed through structured contracts, performance reviews, exit provisions, and concentration risk controls — protecting the enterprise from vendor capture.', maturitySignal: 'Annual vendor performance reviews with documented exit strategy' },
];

const maturityLevels = [
    { level: 1, name: 'Ad-Hoc', desc: 'IT decisions are reactive, undocumented, and driven by individual judgment with no governance structure. Common in SMEs and early-stage organizations.', action: 'Establish basic IT decision rights and budget governance' },
    { level: 2, name: 'Developing', desc: 'Some IT policies and processes exist but are inconsistently applied. Board visibility into IT is limited to budget discussions.', action: 'Formalize governance documentation and reporting cadence' },
    { level: 3, name: 'Defined', desc: 'Documented governance framework with defined decision rights, portfolio process, and risk reporting. IT strategy is linked to business objectives.', action: 'Embed governance in operating rhythm — quarterly board reviews' },
    { level: 4, name: 'Managed', desc: 'IT governance is data-driven with measurable performance indicators, risk dashboards, and benefit realization tracking across the portfolio.', action: 'Optimize — continuous improvement with benchmarking against GCC peers' },
    { level: 5, name: 'Optimized', desc: 'IT governance is a permanent competitive advantage. Board-level digital fluency is high, technology risk is minimal, and IT systematically delivers strategic value.', action: 'Maintain and innovate — governance as a board-level capability' },
];

export default function BoardLevelITGovernancePage() {
    return (
        <>
            <SEOHead
                title="Board-Level IT Governance Explained | Kuwait Enterprise Framework"
                description="A Kuwait enterprise guide to board-level IT governance: frameworks, maturity levels, governance domains, and how to build board-ready IT oversight. COBIT, TOGAF, and Kuwait regulatory context."
                path="/insights/board-level-it-governance-kuwait"
                type="article"
                keywords={[
                    'board level IT governance Kuwait', 'IT governance framework Kuwait', 'COBIT Kuwait',
                    'enterprise IT governance GCC', 'CIO governance Kuwait', 'IT risk oversight Kuwait',
                    'technology governance Kuwait enterprise',
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
                            <span className="text-accent-cyan">Board-Level IT Governance</span>
                        </motion.nav>
                        <motion.div variants={fade} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">Thought Leadership · Kuwait Enterprise Governance</motion.div>
                        <motion.h1 variants={fade} className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl max-w-4xl">
                            Board-Level IT Governance Explained for Kuwait Enterprises
                        </motion.h1>
                        <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-[1.75] text-white/65 xl:text-lg">
                            What IT governance means at the board level, why it matters for Kuwait enterprises under CBK regulation and Kuwait Vision 2035, and how to build a governance framework that gives boards real control over technology risk and value delivery.
                        </motion.p>
                        <motion.div variants={fade} className="mt-3 flex items-center gap-4 text-xs text-white/35">
                            <span>Published: February 2026</span> <span>·</span>
                            <span>Ticode Technologies, Kuwait</span> <span>·</span>
                            <span>~10 min read</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Governance domains */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">The Five Domains of Board-Level IT Governance</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-3xl">Board-level IT governance is not a single activity — it is a system of five interconnected governance domains that, together, give the board genuine oversight and directional control over technology strategy, risk, and value delivery.</p>
                        </motion.div>
                        <div className="flex flex-col gap-5">
                            {governanceDomains.map((d, i) => (
                                <motion.div key={i} variants={fade} className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-brand-blue/20 transition-all duration-300">
                                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                                        <div className="lg:col-span-2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                                                    <d.icon className="h-4.5 w-4.5" />
                                                </div>
                                                <h3 className="font-heading text-base font-bold text-white">{d.domain}</h3>
                                            </div>
                                            <p className="text-sm text-white/60 leading-[1.7]">{d.desc}</p>
                                        </div>
                                        <div className="rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 p-4">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-cyan mb-2">Maturity Signal</p>
                                            <p className="text-xs text-white/65 leading-[1.6]">{d.maturitySignal}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Maturity model */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">IT Governance Maturity Model — Where is Your Enterprise?</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-3xl">Based on the COBIT maturity scale, Kuwait enterprises typically operate between Level 1 and Level 3. Most need structured advisory to progress to Level 4, where IT governance becomes a measurable competitive advantage.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                            {maturityLevels.map((m, i) => (
                                <motion.div key={i} variants={fade} className={`rounded-xl border p-5 ${i === 2 ? 'border-brand-blue/40 bg-brand-blue/5' : 'border-white/8 bg-white/[0.03]'}`}>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="font-heading text-2xl font-black text-white/30">{m.level}</span>
                                        <span className="font-heading text-sm font-bold text-white">{m.name}</span>
                                    </div>
                                    <p className="text-xs text-white/55 leading-[1.6] mb-4">{m.desc}</p>
                                    <p className="text-[10px] font-bold text-accent-cyan leading-[1.5]">→ {m.action}</p>
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
                            <h2 className="font-heading text-3xl font-black text-white">Board Governance FAQ</h2>
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
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Build Board-Level IT Governance with Ticode</h2>
                            <p className="mt-4 text-sm text-white/60 leading-[1.7] mb-6">Ticode Technologies implements governance frameworks from Level 2 to Level 4 for Kuwait enterprises — with first board-ready IT reports delivered within 90 days.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="rounded-xl bg-brand-blue px-7 py-5 font-bold text-white hover:-translate-y-0.5 transition-all">
                                    <Link to="/kuwait/it-consulting">IT Consulting Kuwait <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/5 px-7 py-5 font-bold text-white hover:bg-white/10 transition-all">
                                    <Link to="/contact">Engage Ticode</Link>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div variants={fade} className="flex flex-col gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Related Reading</p>
                            {[
                                { label: 'IT Consulting Kuwait — Pillar Page', href: '/kuwait/it-consulting' },
                                { label: 'IT Strategy Framework for Kuwait Enterprises', href: '/insights/it-strategy-framework-kuwait' },
                                { label: 'IT Consulting Cost in Kuwait', href: '/insights/it-consulting-cost-kuwait' },
                                { label: 'How to Choose an IT Consultant in Kuwait', href: '/insights/how-to-choose-it-consultant-kuwait' },
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
