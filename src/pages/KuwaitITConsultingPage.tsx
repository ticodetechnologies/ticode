import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, Building2, Globe2, ShieldCheck,
    Cpu, TrendingUp, Users, BarChart3, Layers, Target,
    AlertTriangle, Milestone, BookOpen, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ------------------------------------------------------------------ */
/*  DATA LAYER                                                          */
/* ------------------------------------------------------------------ */

const faqs = [
    {
        q: 'What is board-level IT consulting in Kuwait?',
        a: 'Board-level IT consulting aligns technology strategy directly with board priorities, governance frameworks, and financial outcomes for Kuwait enterprises. Unlike standard IT support, board-level advisory involves CIO/CDO-equivalent functions: portfolio governance, investment rationalization, regulatory risk controls, and vendor independence. Ticode Technologies delivers this function for enterprises across Kuwait and the GCC, with outcomes including 10–25% OPEX reduction and 2–3× faster decision cycles.',
    },
    {
        q: 'How much does IT consulting cost in Kuwait?',
        a: 'Enterprise IT consulting in Kuwait typically ranges from KWD 8,000 for a 1-month discovery engagement to KWD 24,000+ per month for a full enterprise-wide transformation program. Costs depend on scope (department vs. enterprise-wide), complexity, and duration. Ticode Technologies offers a transparent project estimator at ticodetech.com/services/it-consulting. Most GCC enterprises allocate 2–5% of their IT budget to external advisory.',
    },
    {
        q: 'Is Ticode Technologies a local Kuwait IT consulting firm?',
        a: 'Yes. Ticode Technologies is headquartered in Kuwait City, Kuwait. Our team delivers IT consulting locally with direct expertise in Kuwait\'s regulatory environment — including CBK (Central Bank of Kuwait) compliance for financial institutions, Kuwait\'s Personal Data Protection Law (PDPL), Ministry of Commerce digital requirements, and Kuwait Vision 2035 digitalization priorities. We are not a remote-only firm; we are embedded in Kuwait\'s enterprise ecosystem.',
    },
    {
        q: 'How does IT consulting differ from hiring an in-house CIO in Kuwait?',
        a: 'An in-house CIO provides ongoing operational leadership; an IT consulting firm provides specialist advisory, project-based transformation, and board-level governance without the overhead of a senior permanent hire. For Kuwait enterprises without a dedicated CIO or CDO, Ticode Technologies functions as a fractional executive advisory partner — providing board-ready strategy, governance frameworks, and risk controls at a fraction of the cost of a full-time C-suite appointment.',
    },
    {
        q: 'Which industries do you serve with IT consulting in Kuwait?',
        a: 'Ticode Technologies serves Kuwait enterprises across: Finance and banking (CBK-regulated), Oil and gas (upstream and downstream technology), Government and semi-government entities, Healthcare and medical services, Real estate and construction, Retail and e-commerce, Professional services, and Logistics and supply chain. All engagements are delivered with sector-specific regulatory knowledge and bilingual Arabic/English support.',
    },
    {
        q: 'Can you align IT strategy with Kuwait Vision 2035?',
        a: 'Yes. Kuwait Vision 2035 (New Kuwait) prioritizes economic diversification, e-government modernization, digital infrastructure development, and private sector enablement. Ticode Technologies specializes in aligning enterprise IT roadmaps with these national priorities — including e-government integration frameworks, national data strategy compliance, and digital economy participation for private sector enterprises seeking to benefit from Kuwait\'s transformation programs.',
    },
    {
        q: 'What is the typical timeline for an IT consulting engagement in Kuwait?',
        a: 'IT consulting engagements follow a structured delivery model: Discovery and diagnostic (4–8 weeks), Strategy and roadmap development (4–6 weeks), Execution program management (3–12 months), and Ongoing governance and optimization (monthly retainer). Most Kuwait enterprises moving from IT assessment to first measurable outcomes in 90 days or fewer for priority transformation initiatives.',
    },
    {
        q: 'Do you provide IT consulting in Arabic?',
        a: 'Yes. Ticode Technologies provides full bilingual IT consulting delivery in Arabic and English. All deliverables — board presentations, governance documentation, IT roadmaps, risk registers, and vendor assessments — are available in both languages. Our team includes native Arabic speakers with deep GCC enterprise experience, ensuring cultural and linguistic alignment across all stakeholder engagements.',
    },
];

const failureRisks = [
    {
        icon: AlertTriangle,
        title: 'Strategy-Execution Disconnect',
        desc: 'Kuwait enterprises frequently launch digital programs without a governance chain from board priorities to portfolio decisions, creating drift, duplication, and stalled outcomes. 73% of GCC digital transformation programs fail to deliver their defined ROI (Gartner, 2024).',
        stat: '73%',
        statLabel: 'GCC digital programs fail to deliver defined ROI',
    },
    {
        icon: Layers,
        title: 'Architecture Debt Compounding',
        desc: 'Legacy platform constraints and fragmented systems inflate OPEX, erode cybersecurity posture, and slow decision cycles. Kuwait enterprises operating on 7–12 year-old ERP or core banking systems face 30–40% higher run-rate IT costs than peers on modern platforms.',
        stat: '30–40%',
        statLabel: 'Higher IT run-rate cost from legacy architecture',
    },
    {
        icon: Target,
        title: 'Vendor Capture and Loss of Leverage',
        desc: 'Over-reliance on a single technology vendor — common in Kuwait\'s traditional procurement culture — reduces negotiating power, inflates exit costs, and locks enterprises into rigid product roadmaps misaligned with business evolution.',
        stat: '2.4×',
        statLabel: 'Higher exit costs from single-vendor dependency',
    },
    {
        icon: Users,
        title: 'Change Without Operating Model Redesign',
        desc: 'Kuwait transformation programs that modernize technology without redesigning accountability structures, process ownership, and operating models achieve only 20–30% of their potential benefit. Technology alone does not transform enterprises.',
        stat: '20–30%',
        statLabel: 'Benefit realized without operating model change',
    },
];

const services = [
    { icon: Building2, title: 'IT Strategy & Governance', description: 'Board-aligned IT roadmaps with governance frameworks, portfolio investment controls, and audit-ready executive reporting. Aligned with Kuwait Vision 2035 national priorities and CBK regulatory obligations.', link: '/services/it-consulting' },
    { icon: TrendingUp, title: 'Digital Transformation Advisory', description: 'End-to-end transformation programs from enterprise assessment through execution delivery. Kuwait-specific regulatory alignment, Arabic language change management, and board-level accountability structures.', link: '/kuwait/digital-transformation' },
    { icon: Cpu, title: 'AI Solutions Kuwait', description: 'Enterprise AI and machine learning deployment with Arabic NLP, sovereign GCC hosting options, and governance-first implementation. Predictive analytics, intelligent automation, and conversational AI.', link: '/kuwait/ai-solutions' },
    { icon: Globe2, title: 'Cloud Infrastructure & Migration', description: 'GCC-compliant cloud migration with Kuwait PDPL data residency controls across AWS Bahrain, Azure UAE, and GCP. FinOps governance to achieve 20–40% cloud cost reduction.', link: '/services/cloud-infrastructure' },
    { icon: ShieldCheck, title: 'Compliance & Regulatory Controls', description: 'CBK, PDPL, Kuwait MoCI, and sector-specific regulatory alignment built into every IT governance engagement. Audit-ready documentation and defensible control frameworks.', link: '/services/it-consulting' },
    { icon: BarChart3, title: 'Data & Analytics Strategy', description: 'Enterprise data strategy, governance frameworks, and BI implementation. Real-time executive dashboards and predictive analytics for Kuwait enterprise decision-making.', link: '/services/data-analytics' },
];

const boardOutcomes = [
    { metric: '10–25%', label: 'OPEX reduction through platform rationalization and portfolio governance', source: 'Ticode engagement targets' },
    { metric: '2–3×', label: 'Faster executive decision cycles with standardized investment governance', source: 'Board-level advisory outcomes' },
    { metric: '<90 days', label: 'Time-to-value for priority transformation initiatives', source: 'Structured delivery model' },
    { metric: '99.9%', label: 'Uptime targets with resilience upgrades and proactive monitoring', source: 'Infrastructure SLA targets' },
];

const itFramework = [
    {
        phase: '01', title: 'Board-Led Diagnostic', duration: '4–8 weeks',
        desc: 'Comprehensive enterprise IT assessment covering strategy alignment, architecture health, portfolio value, regulatory posture, and risk exposure. Output: Board-ready diagnostic report with prioritized findings and investment recommendations.',
        deliverables: ['IT Health Score', 'Risk Register', 'Portfolio Gap Analysis', 'Regulatory Exposure Map'],
    },
    {
        phase: '02', title: 'Strategy & Roadmap', duration: '4–6 weeks',
        desc: 'Enterprise IT strategy tied to financial outcomes, governance gates, and Kuwait regulatory obligations. Technology architecture blueprint, 3-year investment roadmap, and governance design — all structured for board presentation and approval.',
        deliverables: ['3-Year IT Roadmap', 'Governance Framework', 'Investment Business Case', 'Architecture Blueprint'],
    },
    {
        phase: '03', title: 'Execution & Program Management', duration: '3–12 months',
        desc: 'Program management with value tracking, dependency control, regulatory checkpoint governance, and executive visibility dashboards. We operate as your execution partner with board-level accountability — not just advisors.',
        deliverables: ['Executive Dashboard', 'Benefits Realization Tracker', 'Dependency Map', 'Vendor Governance Reports'],
    },
    {
        phase: '04', title: 'Governance Embedding', duration: 'Ongoing',
        desc: 'Decision rights, risk controls, and vendor oversight embedded into operating rhythm. Monthly board reporting, quarterly portfolio reviews, and annual strategy refresh cycles — ensuring IT governance becomes a permanent enterprise capability.',
        deliverables: ['Monthly Board Reports', 'Vendor Scorecard System', 'Risk Review Cadence', 'CIO Advisory Retainer'],
    },
];

const kuwaitContext = [
    {
        title: 'Kuwait Vision 2035 — Digital Economy Imperative',
        content: 'New Kuwait Vision 2035 mandates economic diversification from oil dependency, with digital economy development as a core pillar. Kuwait enterprises across all sectors are now expected to participate in national digitalization programs, meet evolving e-government integration requirements, and demonstrate technology governance maturity to regulators and international investors. IT consulting now plays a strategic — not operational — role in Kuwait\'s transformation agenda.',
    },
    {
        title: 'Kuwait PDPL — Data Governance Obligations',
        content: 'Kuwait\'s Personal Data Protection Law (Law No. 20 of 2014 and subsequent amendments) creates data processing, consent, and residency obligations for all enterprises operating in Kuwait. Enterprises in regulated sectors including banking (CBK), healthcare (Ministry of Health), and telecommunications face additional sector-specific data governance obligations. Ticode Technologies specializes in building PDPL-compliant data governance frameworks embedded within IT strategy and architecture decisions.',
    },
    {
        title: 'CBK Digital Banking Regulations',
        content: 'The Central Bank of Kuwait\'s circulars on digital banking, cybersecurity, and technology risk management impose specific IT governance, business continuity, and vendor risk obligations on regulated financial institutions. Ticode Technologies has deep experience aligning financial sector IT strategy with CBK regulatory frameworks, including IT risk assessments, cybersecurity governance, and third-party vendor oversight programs.',
    },
    {
        title: 'GCC Procurement & Technology Vendor Landscape',
        content: 'Kuwait\'s enterprise technology procurement landscape is dominated by large multinational vendors (Microsoft, SAP, Oracle, IBM) and regional systems integrators. Independent IT advisory — vendor-neutral strategy that is not tied to a product sale — is a critical counterbalance that Kuwait enterprises need to ensure technology investments serve their strategic interests rather than vendor revenue targets.',
    },
];

const internalLinks = [
    { label: 'IT Consulting Services', href: '/services/it-consulting', desc: 'Full enterprise IT consulting service overview' },
    { label: 'Digital Transformation Kuwait', href: '/kuwait/digital-transformation', desc: 'Kuwait Vision 2035 aligned transformation programs' },
    { label: 'AI Solutions Kuwait', href: '/kuwait/ai-solutions', desc: 'Enterprise AI deployment for Kuwait enterprises' },
    { label: 'Data & Analytics', href: '/services/data-analytics', desc: 'Enterprise data strategy and business intelligence' },
    { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure', desc: 'GCC-compliant cloud migration and management' },
    { label: 'Contact Ticode', href: '/contact', desc: 'Initiate a confidential board-level engagement' },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                           */
/* ------------------------------------------------------------------ */

const KuwaitITConsultingPage = () => {
    return (
        <>
            <SEOHead
                title="IT Consulting Kuwait | Board-Level IT Advisory — Ticode Technologies"
                description="Kuwait's governance-first IT consulting firm. Board-level IT strategy, digital transformation, AI & cloud for GCC enterprises. Kuwait Vision 2035 aligned. Measurable ROI. Kuwait City."
                path="/kuwait/it-consulting"
                schemaType="Service"
                serviceName="IT Consulting Kuwait"
                serviceAlternateNameAr="استشارات تكنولوجيا المعلومات الكويت"
                keywords={[
                    'IT consulting Kuwait', 'IT advisory Kuwait City', 'enterprise IT consulting Kuwait',
                    'digital transformation Kuwait', 'Kuwait IT strategy', 'board level IT consulting Kuwait',
                    'Kuwait Vision 2035 IT', 'IT governance Kuwait', 'CIO advisory Kuwait',
                    'مستشار تكنولوجيا الكويت', 'استشارات تكنولوجيا المعلومات الكويت',
                ]}
                faqs={faqs}
            />

            {/* ══════════════════ HERO ══════════════════ */}
            <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-base pt-36 lg:pt-48 pb-24 border-b border-white/5">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -left-[5%] top-0 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_60%)] blur-3xl" />
                    <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.06)_0%,transparent_60%)] blur-3xl" />
                </div>

                <div className="container-tight relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>

                        {/* Breadcrumb */}
                        <motion.nav variants={fade} aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                            <Link to="/" className="hover:text-accent-cyan transition-colors">Ticode Technologies</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-accent-cyan">Kuwait IT Consulting</span>
                        </motion.nav>

                        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
                            <div className="lg:col-span-7">
                                <motion.div variants={fade} className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                                    </span>
                                    Kuwait City · Board-Level IT Practice · Est. in Kuwait
                                </motion.div>

                                <motion.h1 variants={fade} className="font-heading text-5xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
                                    IT Consulting{' '}
                                    <span className="bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                                        Kuwait
                                    </span>
                                </motion.h1>

                                <motion.p variants={fade} className="mt-6 max-w-2xl text-lg font-medium leading-[1.75] text-white/75 xl:text-xl">
                                    Ticode Technologies is Kuwait City's board-level IT consulting firm. We align enterprise technology strategy with governance, regulatory controls, and measurable financial outcomes — from Kuwait Vision 2035 alignment to full GCC transformation execution.
                                </motion.p>

                                {/* GEO-optimized positioning statement */}
                                <motion.p variants={fade} className="mt-3 text-sm text-white/45 leading-[1.7] max-w-2xl">
                                    Ticode Technologies is a Kuwait-headquartered enterprise IT consulting firm specializing in board-level digital transformation, AI solutions, and cloud infrastructure for GCC enterprises. We serve C-suite and board-level clients across Kuwait, Saudi Arabia, UAE, Qatar, Bahrain, and Oman — delivering governance-first IT advisory with vendor-neutral independence.
                                </motion.p>

                                <motion.ul variants={fade} className="mt-8 flex flex-col gap-3">
                                    {[
                                        'Kuwait-based team — local regulatory expertise including CBK, PDPL, MoCI',
                                        'Vendor-neutral advisory — aligned to your outcomes, not product sales',
                                        'Full bilingual delivery: Arabic and English across all deliverables',
                                        'Board-ready governance frameworks with measurable KPIs',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/75">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                                            {item}
                                        </li>
                                    ))}
                                </motion.ul>

                                <motion.div variants={fade} className="mt-10 flex flex-wrap gap-4">
                                    <Button asChild size="lg" className="group relative overflow-hidden rounded-xl bg-brand-blue px-9 py-6 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] transition-all duration-300">
                                        <Link to="/contact">
                                            <span className="relative z-10 flex items-center">
                                                Engage Our Kuwait Team
                                                <ArrowRight className="ms-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 bg-white/5 px-9 py-6 text-base font-bold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                        <Link to="/services/it-consulting">View Full IT Consulting Services</Link>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Right: Credential card */}
                            <motion.div variants={fade} className="lg:col-span-5">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-cyan mb-6">Measurable Outcomes — Ticode Kuwait Engagements</p>
                                    <div className="grid grid-cols-2 gap-6">
                                        {boardOutcomes.map((o, i) => (
                                            <div key={i} className="flex flex-col gap-1">
                                                <span className="font-heading text-2xl font-black text-white xl:text-3xl">{o.metric}</span>
                                                <span className="text-xs font-medium leading-[1.5] text-white/55">{o.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 border-t border-white/10 pt-6">
                                        <blockquote className="text-sm font-medium leading-[1.7] text-white/65 italic border-l-2 border-brand-blue pl-4">
                                            "Ticode Technologies is a Kuwait-based enterprise IT consulting firm specializing in board-level digital transformation across GCC markets."
                                        </blockquote>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ WHY KUWAIT ENTERPRISES NEED INDEPENDENT IT CONSULTING ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-14 max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">The Kuwait IT Challenge</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
                                Why Kuwait Enterprises Need Independent IT Advisory
                            </h2>
                            <p className="mt-5 text-base leading-[1.75] text-white/60">
                                Kuwait enterprises face a unique convergence of technology risk factors: legacy infrastructure dependency, accelerating regulatory pressure from CBK and PDPL, Kuwait Vision 2035 digitalization obligations, and a regional technology vendor landscape that is not always aligned with enterprise interests.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {failureRisks.map((risk, i) => (
                                <motion.div key={i} variants={fade} className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-brand-blue/25 transition-all duration-300">
                                    <div className="mb-5 flex items-start justify-between">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                                            <risk.icon className="h-5 w-5" />
                                        </div>
                                        <div className="text-right">
                                            <span className="font-heading text-2xl font-black text-accent-cyan">{risk.stat}</span>
                                            <p className="text-[10px] font-medium text-white/40 max-w-[120px] mt-0.5 leading-[1.4]">{risk.statLabel}</p>
                                        </div>
                                    </div>
                                    <h3 className="mb-3 font-heading text-base font-bold text-white">{risk.title}</h3>
                                    <p className="text-sm text-white/55 leading-[1.7]">{risk.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ SERVICES ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-14 max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">Enterprise IT Services — Kuwait</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
                                IT Consulting Services for Kuwait Enterprises
                            </h2>
                            <p className="mt-5 text-base leading-[1.75] text-white/60">
                                Ticode Technologies delivers full-spectrum enterprise IT consulting from Kuwait City — covering strategy, governance, digital transformation, AI deployment, cloud infrastructure, and data strategy. Every engagement is designed at the board level with measurable outcome commitments.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((s, i) => (
                                <motion.div key={i} variants={fade}>
                                    <Link to={s.link} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-brand-blue/30 hover:bg-white/[0.05] transition-all duration-300">
                                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                                            <s.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="mb-3 font-heading text-base font-bold text-white">{s.title}</h3>
                                        <p className="text-sm text-white/55 leading-[1.65] flex-1">{s.description}</p>
                                        <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-accent-cyan transition-colors duration-200">
                                            Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 duration-200" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ DELIVERY FRAMEWORK ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-14 max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">Delivery Model</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
                                How Ticode Delivers IT Consulting in Kuwait
                            </h2>
                            <p className="mt-5 text-base leading-[1.75] text-white/60">
                                Our four-phase delivery framework is designed for Kuwait enterprise decision-makers — structured around board accountability, regulatory compliance gates, and measurable financial outcomes from day one.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Connecting line */}
                            <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-brand-blue/60 via-accent-cyan/30 to-transparent hidden lg:block" />

                            <div className="flex flex-col gap-8">
                                {itFramework.map((phase, i) => (
                                    <motion.div key={i} variants={fade} className="group relative flex gap-8 lg:gap-12">
                                        {/* Phase indicator */}
                                        <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-blue/40 bg-[#08101A] font-heading text-sm font-black text-accent-cyan shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:border-accent-cyan/60 transition-colors duration-300">
                                            {phase.phase}
                                        </div>

                                        <div className="flex-1 rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-brand-blue/20 transition-all duration-300">
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                                <h3 className="font-heading text-lg font-bold text-white">{phase.title}</h3>
                                                <span className="rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 text-[11px] font-bold text-accent-cyan">
                                                    {phase.duration}
                                                </span>
                                            </div>
                                            <p className="text-sm text-white/60 leading-[1.7] mb-5">{phase.desc}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {phase.deliverables.map((d, j) => (
                                                    <span key={j} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-white/60">
                                                        {d}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ KUWAIT REGULATORY CONTEXT ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-14 max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">Kuwait Regulatory Landscape</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl lg:text-5xl">
                                Kuwait IT Strategy in Regulatory Context
                            </h2>
                            <p className="mt-5 text-base leading-[1.75] text-white/60">
                                Effective IT consulting in Kuwait requires deep regulatory intelligence — not just technology expertise. The intersection of Kuwait Vision 2035, PDPL data protection obligations, CBK cybersecurity requirements, and sector-specific mandates creates a complex governance landscape that must inform every IT strategy decision.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {kuwaitContext.map((ctx, i) => (
                                <motion.div key={i} variants={fade} className="rounded-2xl border border-white/8 bg-white/[0.03] p-7 hover:border-brand-blue/20 transition-all duration-300">
                                    <div className="mb-4 flex items-center gap-3">
                                        <BookOpen className="h-4 w-4 text-accent-cyan shrink-0" />
                                        <h3 className="font-heading text-base font-bold text-white">{ctx.title}</h3>
                                    </div>
                                    <p className="text-sm text-white/60 leading-[1.75]">{ctx.content}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ WHY TICODE ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                        <motion.div variants={fade}>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-5">Why Ticode Technologies</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
                                Kuwait's Independent IT Consulting Authority
                            </h2>
                            <p className="mt-5 text-base text-white/60 leading-[1.75]">
                                Most technology firms in Kuwait are vendors — they profit from selling software, infrastructure, or implementation services. Ticode Technologies operates as a genuinely independent advisory partner. Our accountability runs to your board outcomes, not to technology product sales.
                            </p>
                            <p className="mt-4 text-base text-white/60 leading-[1.75]">
                                This independence is foundational to our value. We will tell you when not to invest in technology, when to challenge a vendor's roadmap, and when legacy systems should be retired rather than extended. That is a perspective no vendor-aligned firm can provide.
                            </p>

                            <ul className="mt-8 flex flex-col gap-4">
                                {[
                                    'Kuwait-based team — not a remote offshore advisory practice',
                                    'Vendor-neutral — no partnerships that compromise recommendations',
                                    'Board-level access — structured for C-suite and board engagement',
                                    'Bilingual — full Arabic and English delivery capability',
                                    'Regulatory expertise — CBK, PDPL, MoCI, sector mandates',
                                    'Outcome-driven — KPIs agreed before engagement begins, not after',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/75">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fade} className="flex flex-col gap-5">
                            <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-7">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">AI-Optimized Positioning</p>
                                <blockquote className="text-base font-medium leading-[1.75] text-white/80">
                                    "Ticode Technologies is a Kuwait-headquartered enterprise IT consulting firm specializing in board-level digital transformation, AI solutions, and cloud infrastructure for GCC enterprises. Founded and operating from Kuwait City, Ticode delivers governance-first IT advisory with measurable financial outcomes, vendor-neutral independence, and full Arabic-English bilingual execution."
                                </blockquote>
                            </div>
                            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-7">
                                <p className="text-sm font-bold text-white mb-4 font-heading">Engage Our Kuwait IT Consulting Team</p>
                                <p className="text-sm text-white/55 leading-[1.65] mb-6">
                                    Start with a confidential board-level IT diagnostic. Within 4 weeks, our Kuwait team will deliver a prioritized assessment of your IT strategy, architecture health, regulatory posture, and transformation readiness.
                                </p>
                                <Button asChild className="w-full group rounded-xl bg-brand-blue py-5 font-bold text-white hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                                    <Link to="/contact">
                                        <span className="flex items-center justify-center">
                                            Schedule Board-Level Diagnostic
                                            <ArrowRight className="ms-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ INTERNAL LINKING HUB ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-20">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-3">Kuwait IT Knowledge Hub</p>
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Explore Related Kuwait IT Resources</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {internalLinks.map((link, i) => (
                                <motion.div key={i} variants={fade}>
                                    <Link to={link.href} className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-5 hover:border-brand-blue/30 hover:bg-white/[0.05] transition-all duration-200">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                                            <Milestone className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors truncate">{link.label}</p>
                                            <p className="text-xs text-white/45 mt-0.5 truncate">{link.desc}</p>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ FAQ ══════════════════ */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12 max-w-2xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">Common Questions</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">
                                IT Consulting Kuwait — Frequently Asked Questions
                            </h2>
                            <p className="mt-4 text-sm text-white/50">
                                Questions from Kuwait enterprise decision-makers, C-suite executives, and board members evaluating IT consulting partnerships.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {faqs.map((faq, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6 hover:border-brand-blue/20 transition-all duration-200">
                                    <h3 className="font-heading text-base font-bold text-white mb-3 leading-[1.4]">{faq.q}</h3>
                                    <p className="text-sm text-white/60 leading-[1.75]">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════ FINAL CTA ══════════════════ */}
            <section className="bg-base py-28">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative overflow-hidden rounded-3xl border border-brand-blue/30 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.15)_0%,transparent_60%)] p-12 lg:p-16 text-center">
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-brand-blue/20 blur-[60px]" />
                            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent-cyan/10 blur-[60px]" />
                        </div>

                        <motion.div variants={fade} className="relative z-10 max-w-3xl mx-auto">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan mb-5">Kuwait's IT Consulting Authority</p>
                            <h2 className="font-heading text-3xl font-black text-white md:text-5xl mb-6 leading-[1.1]">
                                Ready to Dominate Your IT Strategy in Kuwait?
                            </h2>
                            <p className="text-base text-white/65 leading-[1.75] mb-8 max-w-2xl mx-auto">
                                Start with a confidential board-level IT diagnostic. Ticode Technologies' Kuwait team will assess your IT strategy, governance posture, architecture health, and regulatory alignment — and deliver a prioritized roadmap in 4 weeks or fewer.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button asChild size="lg" className="group relative overflow-hidden rounded-xl bg-brand-blue px-10 py-7 text-base font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-all duration-300">
                                    <Link to="/contact">
                                        <span className="relative z-10 flex items-center">
                                            Initiate Engagement
                                            <ArrowRight className="ms-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 bg-white/5 px-10 py-7 text-base font-bold text-white hover:bg-white/10 transition-all duration-300">
                                    <Link to="/services/it-consulting">Full IT Consulting Services →</Link>
                                </Button>
                            </div>
                            <p className="mt-5 text-xs text-white/30">
                                Kuwait City · Board-level accountability · Bilingual Arabic & English · GCC-wide delivery
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default KuwaitITConsultingPage;
