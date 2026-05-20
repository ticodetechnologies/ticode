import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const articleThemes = [
    {
        accent:    "#2F6BFF",
        topLine:   "from-brand-blue via-brand-blue/50 to-transparent",
        border:    "hover:border-brand-blue/40",
        shadow:    "hover:shadow-[0_24px_60px_-15px_rgba(47,107,255,0.25)]",
        tagBg:     "bg-brand-blue/10 border-brand-blue/30 text-brand-blue",
        iconClr:   "text-brand-blue",
        glow:      "bg-brand-blue/8",
        numClr:    "text-brand-blue/15",
        arrowBg:   "bg-brand-blue/10 border-brand-blue/30 hover:bg-brand-blue hover:border-brand-blue",
    },
    {
        accent:    "#00C2FF",
        topLine:   "from-accent-cyan via-accent-cyan/50 to-transparent",
        border:    "hover:border-accent-cyan/40",
        shadow:    "hover:shadow-[0_24px_60px_-15px_rgba(0,194,255,0.2)]",
        tagBg:     "bg-accent-cyan/10 border-accent-cyan/30 text-cyan-300",
        iconClr:   "text-accent-cyan",
        glow:      "bg-accent-cyan/8",
        numClr:    "text-accent-cyan/15",
        arrowBg:   "bg-accent-cyan/10 border-accent-cyan/30 hover:bg-accent-cyan hover:border-accent-cyan",
    },
    {
        accent:    "#8B5CF6",
        topLine:   "from-violet-500 via-violet-400/50 to-transparent",
        border:    "hover:border-violet-500/40",
        shadow:    "hover:shadow-[0_24px_60px_-15px_rgba(139,92,246,0.2)]",
        tagBg:     "bg-violet-500/10 border-violet-500/30 text-violet-400",
        iconClr:   "text-violet-400",
        glow:      "bg-violet-500/8",
        numClr:    "text-violet-400/15",
        arrowBg:   "bg-violet-500/10 border-violet-500/30 hover:bg-violet-500 hover:border-violet-500",
    },
];

const articles = [
    {
        number:   "01",
        tag:      'Kuwait · IT Consulting',
        title:    'IT Consulting Cost in Kuwait — Board-Level Pricing Guide 2026',
        excerpt:  'KWD pricing benchmarks for IT assessments, strategy projects, and advisory retainers. Covers the 6 cost drivers that determine your investment.',
        href:     '/insights/it-consulting-cost-kuwait',
        readTime: '8 min',
    },
    {
        number:   "02",
        tag:      'Kuwait · Governance',
        title:    'Board-Level IT Governance Explained for Kuwait Enterprises',
        excerpt:  'COBIT maturity model, 5 governance domains with maturity signals, and Kuwait CBK/PDPL regulatory context for C-suite decision-makers.',
        href:     '/insights/board-level-it-governance-kuwait',
        readTime: '10 min',
    },
    {
        number:   "03",
        tag:      'Kuwait · Strategy',
        title:    "Best IT Consulting Firms in Kuwait — 2026 Buyer's Guide",
        excerpt:  'A weighted comparison of 5 top Kuwait IT consulting firms across vendor independence, regulatory expertise, and board-level delivery capability.',
        href:     '/insights/best-it-consulting-firms-kuwait',
        readTime: '12 min',
    },
];

const HomepageInsightsStrip = () => {
    return (
        <section className="relative bg-[#040A12] py-16 md:py-24 border-b border-white/5 font-sans overflow-hidden">
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30 pointer-events-none" />
            <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />
            <div className="absolute end-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10"
                >
                    <div className="max-w-2xl">
                        <motion.div variants={fade} className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
                            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono">
                                Kuwait IT Insights
                            </span>
                        </motion.div>
                        <motion.h2 variants={fade} className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                            Useful thinking for<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan">
                                serious buyers.
                            </span>
                        </motion.h2>
                        <motion.p variants={fade} className="mt-5 text-lg font-medium text-slate-400 max-w-xl leading-relaxed">
                            Board-level insights on IT consulting, governance, and digital transformation in Kuwait and the GCC.
                        </motion.p>
                    </div>
                    <motion.div variants={fade} className="shrink-0">
                        <Link
                            to="/insights"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-bold text-white hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300"
                        >
                            <BookOpen className="h-4 w-4 text-accent-cyan" />
                            Access Library
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Article Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {articles.map((article, i) => {
                        const theme = articleThemes[i];
                        return (
                            <motion.div key={i} variants={fade}>
                                <Link
                                    to={article.href}
                                    className={`group relative flex flex-col bg-[#0D1E33] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${theme.border} ${theme.shadow}`}
                                >
                                    {/* Top accent line — always visible */}
                                    <div className={`h-[3px] w-full flex-shrink-0 bg-gradient-to-r ${theme.topLine}`} />

                                    {/* Corner glow */}
                                    <div className={`absolute top-0 end-0 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${theme.glow}`} />

                                    {/* Large background number */}
                                    <div className={`absolute bottom-4 end-4 text-[7rem] font-black font-mono leading-none select-none pointer-events-none ${theme.numClr} transition-opacity duration-500`}>
                                        {article.number}
                                    </div>

                                    <div className="relative z-10 flex flex-col flex-1 p-7 lg:p-8">
                                        {/* Top row: tag + arrow */}
                                        <div className="flex items-start justify-between mb-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase font-mono border ${theme.tagBg}`}>
                                                {article.tag}
                                            </span>
                                            <div className={`flex items-center justify-center w-8 h-8 rounded-full border text-white/40 transition-all duration-300 ${theme.arrowBg} group-hover:text-white`}>
                                                <ArrowUpRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white leading-snug tracking-tight mb-4 group-hover:text-white transition-colors duration-300 font-heading">
                                            {article.title}
                                        </h3>

                                        {/* Excerpt — always visible */}
                                        <p className="text-[14px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300 flex-1">
                                            {article.excerpt}
                                        </p>

                                        {/* Divider */}
                                        <div className="border-t border-white/[0.06] mt-6 mb-4" />

                                        {/* Read time */}
                                        <div className={`flex items-center gap-1.5 text-[11px] font-bold font-mono uppercase tracking-widest ${theme.iconClr}`}>
                                            <Clock className="w-3 h-3" />
                                            {article.readTime} read
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HomepageInsightsStrip;
