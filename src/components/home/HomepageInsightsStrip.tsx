import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const articles = [
    {
        tag: 'Kuwait · IT Consulting',
        title: 'IT Consulting Cost in Kuwait — Board-Level Pricing Guide 2026',
        excerpt: 'KWD pricing benchmarks for IT assessments, strategy projects, and advisory retainers. Covers the 6 cost drivers that determine your investment.',
        href: '/insights/it-consulting-cost-kuwait',
        readTime: '8 min read',
        coverGradient: "radial-gradient(circle at top right, rgba(47,107,255,0.4) 0%, rgba(10,22,40,1) 60%)"
    },
    {
        tag: 'Kuwait · Governance',
        title: 'Board-Level IT Governance Explained for Kuwait Enterprises',
        excerpt: 'COBIT maturity model, 5 governance domains with maturity signals, and Kuwait CBK/PDPL regulatory context for C-suite decision-makers.',
        href: '/insights/board-level-it-governance-kuwait',
        readTime: '10 min read',
        coverGradient: "radial-gradient(circle at top left, rgba(0,194,255,0.3) 0%, rgba(10,22,40,1) 60%)"
    },
    {
        tag: 'Kuwait · Strategy',
        title: 'Best IT Consulting Firms in Kuwait — 2026 Buyer\'s Guide',
        excerpt: 'A weighted comparison of 5 top Kuwait IT consulting firms across vendor independence, regulatory expertise, and board-level delivery capability.',
        href: '/insights/best-it-consulting-firms-kuwait',
        readTime: '12 min read',
        coverGradient: "radial-gradient(circle at bottom right, rgba(14,165,233,0.35) 0%, rgba(10,22,40,1) 50%)"
    },
];

const HomepageInsightsStrip = () => {
    return (
        <section className="relative bg-[#040A12] py-20 md:py-32 border-b border-white/5 font-sans overflow-hidden">
            <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30 pointer-events-none" />
            <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

            <div className="container-tight relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <motion.div variants={fade} className="mb-6 flex items-center gap-3 w-max px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_rgba(0,194,255,0.8)]" />
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase font-mono">
                                Kuwait IT Insights
                            </span>
                        </motion.div>
                        <motion.h2 variants={fade} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                            Latest from<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-accent-cyan"> Ticode Intelligence.</span>
                        </motion.h2>
                    </div>
                    <motion.div variants={fade} className="shrink-0 flex flex-col justify-between items-start md:items-end h-full">
                        <p className="mb-8 text-lg font-medium text-slate-400 max-w-sm leading-relaxed md:text-right">
                            Board-level insights on IT consulting, governance, and digital transformation in Kuwait and the GCC.
                        </p>
                        <Link
                            to="/insights"
                            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-sm font-bold text-white hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                        >
                            <BookOpen className="h-4 w-4 text-accent-cyan" />
                            Access Library
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Article Cards (Magazine Covers) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={stagger}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
                >
                    {articles.map((article, i) => (
                        <motion.div key={i} variants={fade}>
                            <Link
                                to={article.href}
                                className="group flex flex-col justify-end min-h-[480px] rounded-[2rem] border border-white/10 overflow-hidden relative transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(47,107,255,0.25)] hover:border-brand-blue/40"
                            >
                                {/* Abstract Simulated Cover Image */}
                                <div 
                                    className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105"
                                    style={{ background: article.coverGradient }}
                                >
                                    {/* Grain overlay for paper texture feel */}
                                    <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
                                </div>

                                {/* Deep bottom gradient to make text readable */}
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#040A12] via-[#040A12]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Glowing accent line on top edge */}
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

                                <div className="relative z-20 p-8 pt-10 flex flex-col h-full justify-between">
                                    <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-4 group-hover:translate-y-0">
                                        <span className="w-10 h-px bg-white/30 block mt-2" />
                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md">
                                            <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="mb-6 flex items-center justify-between">
                                            <span className="inline-block px-3 py-1 rounded border border-white/10 text-[10px] font-bold text-white/70 uppercase tracking-widest font-mono group-hover:bg-white/10 transition-colors">
                                                {article.tag}
                                            </span>
                                            <span className="text-[11px] text-white/50 font-mono font-medium tracking-wide">
                                                {article.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white leading-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300 font-heading">
                                            {article.title}
                                        </h3>

                                        <p className="text-[15px] text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300 h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 group-hover:mb-2">
                                            {article.excerpt}
                                        </p>
                                    </div>
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
