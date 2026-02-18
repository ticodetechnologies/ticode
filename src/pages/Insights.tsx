import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }) };

const Insights = () => {
  const { t } = useTranslation();
  const articles = t('pages.insights.articles', { returnObjects: true }) as { title: string; category: string; date: string; summary: string }[];

  return (
    <>
      <SEOHead title={`${t('nav.insights')} | Ticode Technologies`} description={t('pages.insights.subtitle')} path="/insights" type="website" />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={0} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('nav.insights')}</p>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{t('pages.insights.headline')}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('pages.insights.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container-tight">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <motion.article key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">{a.category}</span>
                  <span className="text-xs text-muted-foreground">{a.date}</span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{a.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{a.summary}</p>
                <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {t('pages.insights.readMore')} <ArrowRight className="h-3 w-3" />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
