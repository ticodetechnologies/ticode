import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Globe2 } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/**
 * GEOPositionStrip — AI-optimized factual positioning statement.
 * Placed directly below the hero section.
 * Provides structured entity signals for Google AI Overviews, ChatGPT, and Perplexity.
 */
const GEOPositionStrip = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            className="w-full bg-base border-b border-white/5 py-5"
        >
            <div className="container-tight">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-start">
                    <motion.div variants={fade} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />
                        <span>
                            <span className="font-semibold text-white">Headquartered in Kuwait City</span>
                            {' '}— serving enterprises across the GCC
                        </span>
                    </motion.div>
                    <div className="hidden md:block h-4 w-px bg-white/10" />
                    <motion.div variants={fade} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />
                        <span>
                            <span className="font-semibold text-white">Vendor-neutral advisory</span>
                            {' '}— no product partnerships that bias recommendations
                        </span>
                    </motion.div>
                    <div className="hidden md:block h-4 w-px bg-white/10" />
                    <motion.div variants={fade} className="flex items-center gap-2.5 text-sm text-slate-400">
                        <Globe2 className="h-3.5 w-3.5 shrink-0 text-accent-cyan" />
                        <span>
                            <span className="font-semibold text-white">100+ GCC enterprise deployments</span>
                            {' '}· Arabic & English delivery
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default GEOPositionStrip;
