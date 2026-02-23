import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Sparkles, Eye, MessageSquare, Bot, Mic, Cog, Star, Wifi, Layers, Database, Plug, BarChart3 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }) };

const capKeys = ['aiDev', 'genAI', 'ml', 'dl', 'cv', 'nlp', 'gpt', 'rag', 'agents', 'voice', 'automation', 'recommend', 'aiot'] as const;
const capIcons: Record<string, React.ReactNode> = {
  aiDev: <Sparkles className="h-6 w-6" />, genAI: <Brain className="h-6 w-6" />, ml: <BarChart3 className="h-6 w-6" />,
  dl: <Layers className="h-6 w-6" />, cv: <Eye className="h-6 w-6" />, nlp: <MessageSquare className="h-6 w-6" />,
  gpt: <Plug className="h-6 w-6" />, rag: <Database className="h-6 w-6" />, agents: <Bot className="h-6 w-6" />,
  voice: <Mic className="h-6 w-6" />, automation: <Cog className="h-6 w-6" />, recommend: <Star className="h-6 w-6" />,
  aiot: <Wifi className="h-6 w-6" />,
};

const AISolutions = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title={`${t('pages.aiSolutions.label')} | Ticode Technologies`} description={t('pages.aiSolutions.subtitle')} path="/ai-solutions" />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={0} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('pages.aiSolutions.label')}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl lg:text-5xl">{t('pages.aiSolutions.headline')}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('pages.aiSolutions.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capKeys.map((key, i) => (
              <motion.div key={key} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_22px_-12px_rgba(37,99,235,0.3)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">{capIcons[key]}</div>
                <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground font-heading">{t(`pages.aiSolutions.items.${key}.title`)}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(`pages.aiSolutions.items.${key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-navy">
        <div className="container-tight text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground font-heading">{t('pages.aiSolutions.ctaTitle')}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t('pages.aiSolutions.ctaDesc')}</p>
          <Button asChild size="lg" className="mt-6 px-12 py-6">
            <Link to="/contact">{t('pages.aiSolutions.ctaButton')} <ArrowRight className="ms-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AISolutions;
