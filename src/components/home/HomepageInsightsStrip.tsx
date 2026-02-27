import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const articles = [
    {
        tag: 'Kuwait · IT Consulting',
        title: 'IT Consulting Cost in Kuwait — Board-Level Pricing Guide 2026',
        excerpt: 'KWD pricing benchmarks for IT assessments, strategy projects, and advisory retainers. Covers the 6 cost drivers that determine your investment.',
        href: '/insights/it-consulting-cost-kuwait',
        readTime: '8 min read',
    },
    {
        tag: 'Kuwait · Governance',
        title: 'Board-Level IT Governance Explained for Kuwait Enterprises',
        excerpt: 'COBIT maturity model, 5 governance domains with maturity signals, and Kuwait CBK/PDPL regulatory context for C-suite decision-makers.',
        href: '/insights/board-level-it-governance-kuwait',
        readTime: '10 min read',
    },
    {
        tag: 'Kuwait · Strategy',
        title: 'Best IT Consulting Firms in Kuwait — 2026 Buyer\'s Guide',
        excerpt: 'A weighted comparison of 5 top Kuwait IT consulting firms across vendor independence, regulatory expertise, and board-level delivery capability.',
        href: '/insights/best-it-consulting-firms-kuwait',
        readTime: '12 min read',
    },
];

const HomepageInsightsStrip = () => {
    return (
        <section className="relative bg-[#0E1A2B] py-14 md:py-20 border-b border-white/5 font-sans overflow-hidden">
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />
            <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

            <div className="container-tight relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
                >
                    <div>
                        <motion.div variants={fade} className="mb-4 flex items-center gap-3 w-max">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
                                Kuwait IT Insights
                            </span>
                        </motion.div>
                        <motion.h2 variants={fade} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                            Latest from<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan"> Ticode Intelligence.</span>
                        </motion.h2>
                        <motion.p variants={fade} className="mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
                            Board-level insights on IT consulting, governance, and digital transformation in Kuwait and the GCC.
                        </motion.p>
                    </div>
                    <motion.div variants={fade} className="shrink-0">
                        <Link
                            to="/insights"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300"
                        >
                            <BookOpen className="h-4 w-4 text-brand-blue" />
                            View All Insights
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Article Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    className="grid grid-cols-1 gap-5 md:grid-cols-3"
                >
                    {articles.map((article, i) => (
                        <motion.div key={i} variants={fade}>
                            <Link
                                to={article.href}
                                className="group flex flex-col h-full bg-[#0D1826]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-brand-blue/30 hover:shadow-[0_20px_60px_-15px_rgba(47,107,255,0.12)] transition-all duration-500 overflow-hidden relative"
                            >
                                {/* Hover glow line */}
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-blue to-accent-cyan scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                                <div className="mb-4 flex items-center justify-between">
                                    <span className="inline-block rounded-full bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 text-[11px] font-bold text-brand-blue uppercase tracking-wider font-mono">
                                        {article.tag}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">{article.readTime}</span>
                                </div>

                                <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                                    {article.title}
                                </h3>

                                <p className="text-sm text-slate-400 leading-relaxed flex-1 group-hover:text-slate-300 transition-colors duration-300">
                                    {article.excerpt}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-blue group-hover:text-accent-cyan transition-colors duration-300">
                                    Read Article
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HomepageInsightsStrip;
