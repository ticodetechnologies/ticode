import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Users, BarChart3, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const faqs = [
    {
        q: 'How do I verify an IT consulting firm\'s credentials in Kuwait?',
        a: 'Request evidence of: Kuwait commercial registry (CR) and MOCI registration, relevant vendor certifications (AWS, Microsoft, Cisco), professional staff credentials (TOGAF, PMP, CISA), and client references from Kuwait enterprises in your industry sector. A credible Kuwait IT consulting firm will provide these without hesitation.',
    },
    {
        q: 'Should I choose a local Kuwait firm or an international IT consulting company?',
        a: 'For board-level IT strategy in Kuwait, a locally-headquartered firm with GCC regulatory expertise typically outperforms international firms without regional context. Kuwait-specific regulatory intelligence (CBK, PDPL, MoCI), Arabic language capability, local stakeholder relationships, and in-country presence are critical advantages. Ticode Technologies combines Kuwait-market depth with enterprise-grade advisory capability.',
    },
    {
        q: 'What is the typical engagement duration for IT consulting in Kuwait?',
        a: 'IT consulting engagement duration in Kuwait ranges from 4–8 weeks for a scoped assessment to 12–18 months for a full enterprise transformation program. Most enterprises begin with a 6–8 week diagnostic phase before committing to a full strategy or execution engagement.',
    },
    {
        q: 'How many IT consulting firms are there in Kuwait?',
        a: 'Kuwait\'s enterprise IT consulting market includes under 30 firms with genuine board-level advisory capability. The majority of IT firms in Kuwait are resellers, system integrators, or managed service providers — not independent strategy advisors. Distinguishing between these categories is critical when selecting an engagement partner.',
    },
    {
        q: 'Can an IT consulting firm help with Kuwait Vision 2035 alignment?',
        a: 'Yes. Ticode Technologies specializes in aligning enterprise IT strategy with Kuwait Vision 2035 national priorities, including digital economy participation, e-government integration, national data strategy compliance, and public-private digitalization programs. This is a core differentiator for Kuwait-market IT advisory.',
    },
];

const selectionCriteria = [
    { icon: ShieldCheck, label: 'Independence', weight: 'Critical', desc: 'Confirm the firm has no commercial partnerships with technology vendors that would bias their recommendations. True independence is the foundation of credible IT advisory.' },
    { icon: Search, label: 'Kuwait Regulatory Expertise', weight: 'Critical', desc: 'Validate expertise in CBK digital banking regulations, Kuwait PDPL data protection requirements, MoCI digital compliance, and Kuwait Vision 2035 implications for enterprise IT.' },
    { icon: BarChart3, label: 'Board-Level Delivery Capability', weight: 'High', desc: 'Assess whether the firm delivers executive-grade documentation, board presentations, and governance frameworks — or whether their output is primarily technical reports.' },
    { icon: Users, label: 'GCC Enterprise References', weight: 'High', desc: 'Request references from Kuwait enterprises of comparable size and complexity in your industry. Regional enterprise experience is substantially more relevant than global case studies.' },
    { icon: CheckCircle2, label: 'Bilingual Arabic/English Delivery', weight: 'Medium', desc: 'Confirm full Arabic-language capability for deliverables, stakeholder communication, and change management — essential for effective board and executive engagement in Kuwait.' },
    { icon: BarChart3, label: 'Outcome-Based Fee Structure', weight: 'Medium', desc: 'Prefer firms that structure fees around defined deliverables and measurable milestones rather than hourly billing, which misaligns incentives between advisory and client outcomes.' },
];

const redFlags = [
    'Recommends technology products from their own vendor partnerships without disclosing the relationship',
    'Cannot provide Kuwait-specific regulatory references (CBK, PDPL) when discussing compliance',
    'Presents international case studies only — no Kuwait or GCC enterprise references',
    'Charges exclusively by hourly rate rather than project or outcome-based pricing',
    'Team lacks senior professionals with C-suite advisory experience (only technical staff)',
    'Proposes an engagement without a structured diagnostic phase first',
    'Cannot provide bilingual (Arabic/English) deliverables and stakeholder communications',
];

const questions = [
    { q: 'Who will be leading our engagement — and what is their background?', why: 'Ensures a senior advisor leads, not junior analysts' },
    { q: 'What technology vendors do you have commercial partnerships with?', why: 'Tests genuine independence of recommendations' },
    { q: 'Can you provide three Kuwait enterprise client references?', why: 'Validates regional experience and delivery quality' },
    { q: 'How do you define and track success metrics for this engagement?', why: 'Confirms outcome orientation, not effort billing' },
    { q: 'What is your experience with CBK and Kuwait PDPL compliance?', why: 'Tests regulatory expertise depth for Kuwait market' },
    { q: 'How will you transfer knowledge to our internal team?', why: 'Ensures sustainability beyond the engagement' },
    { q: 'What deliverables do we own at the end of this engagement?', why: 'Confirms IP ownership of strategy documents and frameworks' },
];

export default function ChooseITConsultantKuwait() {
    return (
        <>
            <SEOHead
                title="How to Choose an IT Consultant in Kuwait (2026 Board-Level Guide)"
                description="A complete Kuwait enterprise guide to evaluating and selecting an IT consulting firm. Selection criteria, red flags, interview questions, and fees explained for board-level decision-makers."
                path="/insights/how-to-choose-it-consultant-kuwait"
                type="article"
                keywords={[
                    'how to choose IT consultant Kuwait', 'best IT consulting firm Kuwait',
                    'IT consulting evaluation Kuwait', 'IT advisory selection Kuwait GCC',
                    'enterprise IT consultant Kuwait', 'independent IT consulting Kuwait',
                ]}
                faqs={faqs}
                datePublished="2026-02-27"
                dateModified="2026-02-27"
            />

            {/* Hero */}
            <section className="relative min-h-[55svh] flex items-center bg-base pt-36 pb-20 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -right-[5%] top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_0%,transparent_60%)] blur-3xl" />
                </div>
                <div className="container-tight relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <motion.nav variants={fade} className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/40 font-bold uppercase tracking-[0.15em]">
                            <Link to="/" className="hover:text-accent-cyan transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link to="/insights" className="hover:text-accent-cyan transition-colors">Insights</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-accent-cyan">How to Choose an IT Consultant Kuwait</span>
                        </motion.nav>
                        <motion.div variants={fade} className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan flex items-center gap-2">
                            <Search className="h-3.5 w-3.5" />
                            Buyer's Guide · Board-Level Decision Framework
                        </motion.div>
                        <motion.h1 variants={fade} className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl max-w-4xl">
                            How to Choose an IT Consulting Firm in Kuwait
                        </motion.h1>
                        <motion.p variants={fade} className="mt-6 max-w-2xl text-base leading-[1.75] text-white/65 xl:text-lg">
                            A board-level decision framework for Kuwait enterprises evaluating IT consulting partners. Selection criteria, red flags, interview questions, and pricing models explained for C-suite and board decision-makers.
                        </motion.p>
                        <motion.div variants={fade} className="mt-3 flex items-center gap-4 text-xs text-white/35">
                            <span>Published: February 2026</span> <span>·</span>
                            <span>Ticode Technologies, Kuwait</span> <span>·</span>
                            <span>~9 min read</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Selection criteria */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-12">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">The Kuwait IT Consulting Selection Framework</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7] max-w-3xl">Not all IT firms in Kuwait offer the same capability. The majority are technology resellers, system integrators, or managed service providers — categories that serve important operational needs but are fundamentally different from independent strategic IT advisory. Use these six criteria to identify genuine enterprise consulting capability.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {selectionCriteria.map((c, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/15 text-brand-blue">
                                            <c.icon className="h-4.5 w-4.5" />
                                        </div>
                                        <span className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 ${c.weight === 'Critical' ? 'bg-red-500/15 text-red-400' : c.weight === 'High' ? 'bg-yellow-500/15 text-yellow-400' : 'bg-green-500/15 text-green-400'}`}>{c.weight}</span>
                                    </div>
                                    <h3 className="font-heading text-sm font-bold text-white mb-2">{c.label}</h3>
                                    <p className="text-sm text-white/55 leading-[1.65]">{c.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Red flags */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-10">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">Red Flags: When to Walk Away</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7]">These warning signs indicate an IT firm is not equipped to deliver board-level strategic advisory for Kuwait enterprises.</p>
                        </motion.div>
                        <div className="flex flex-col gap-3">
                            {redFlags.map((flag, i) => (
                                <motion.div key={i} variants={fade} className="flex items-start gap-4 rounded-xl border border-red-500/15 bg-red-500/5 p-5">
                                    <span className="mt-0.5 text-red-400 text-sm font-black shrink-0">✕</span>
                                    <p className="text-sm text-white/70 leading-[1.65]">{flag}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interview questions */}
            <section className="border-b border-white/5 bg-base py-24">
                <div className="container-tight max-w-3xl">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div variants={fade} className="mb-10">
                            <h2 className="font-heading text-3xl font-black text-white md:text-4xl">7 Questions to Ask Every IT Consultant</h2>
                            <p className="mt-4 text-base text-white/60 leading-[1.7]">Ask these questions in your first meeting. The quality of answers will immediately reveal the firm's genuine capability and independence.</p>
                        </motion.div>
                        <div className="flex flex-col gap-4">
                            {questions.map((q, i) => (
                                <motion.div key={i} variants={fade} className="rounded-xl border border-white/8 bg-white/[0.03] p-6">
                                    <div className="flex items-start gap-4">
                                        <span className="font-heading text-lg font-black text-white/25 shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                                        <div>
                                            <p className="font-heading text-sm font-bold text-white mb-2">"{q.q}"</p>
                                            <p className="text-xs text-white/45"><span className="text-accent-cyan font-bold">Why ask this:</span> {q.why}</p>
                                        </div>
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
                        <motion.div variants={fade} className="mb-10">
                            <h2 className="font-heading text-3xl font-black text-white">Frequently Asked Questions</h2>
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
                            <h2 className="font-heading text-2xl font-black text-white md:text-3xl">Ticode Technologies: Kuwait's Independent IT Advisory</h2>
                            <p className="mt-4 text-sm text-white/60 leading-[1.7] mb-6">Vendor-neutral. Kuwait-based. Board-level accountability. See how Ticode measures against every selection criterion in this guide.</p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="rounded-xl bg-brand-blue px-7 py-5 font-bold text-white hover:-translate-y-0.5 transition-all duration-200">
                                    <Link to="/kuwait/it-consulting">View Kuwait IT Consulting <ArrowRight className="ms-2 h-4 w-4" /></Link>
                                </Button>
                                <Button asChild variant="outline" className="rounded-xl border-white/20 bg-white/5 px-7 py-5 font-bold text-white hover:bg-white/10 transition-all duration-200">
                                    <Link to="/contact">Speak with Our Team</Link>
                                </Button>
                            </div>
                        </motion.div>
                        <motion.div variants={fade} className="flex flex-col gap-3">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Related Guides</p>
                            {[
                                { label: 'IT Consulting Cost in Kuwait', href: '/insights/it-consulting-cost-kuwait' },
                                { label: 'IT Consulting vs. In-House CIO', href: '/insights/it-consulting-vs-inhouse-cio-kuwait' },
                                { label: 'Best IT Consulting Firms in Kuwait 2026', href: '/insights/best-it-consulting-firms-kuwait' },
                                { label: 'Board-Level IT Governance Explained', href: '/insights/board-level-it-governance-kuwait' },
                            ].map((l, i) => (
                                <Link key={i} to={l.href} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/65 hover:text-white hover:border-white/20 transition-all duration-200">
                                    <ArrowRight className="h-3 w-3 text-brand-blue shrink-0" />
                                    {l.label}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
