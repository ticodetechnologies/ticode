import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const caseKeys = ['challenge', 'strategy', 'implementation', 'outcome'] as const;

const CaseStudies = () => {
  const { t } = useTranslation();
  const studies = t('pages.caseStudies.studies', { returnObjects: true }) as { title: string; industry: string; challenge: string; strategy: string; implementation: string; outcome: string }[];

  return (
    <>
      <SEOHead title={`${t('caseStudies.title')} | Ticode Technologies`} description={t('pages.caseStudies.subtitle')} path="/case-studies" />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('caseStudies.title')}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl lg:text-5xl">{t('pages.caseStudies.headline')}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('pages.caseStudies.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight space-y-8">
          {studies.map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="rounded-xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_24px_-12px_rgba(37,99,235,0.3)]">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{s.industry}</span>
                <h3 className="text-lg font-semibold tracking-tight text-foreground font-heading">{s.title}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {caseKeys.map((k) => (
                  <div key={k}>
                    <span className="mb-1 block text-xs font-semibold uppercase text-primary">{t(`caseStudies.${k}`)}</span>
                    <p className="text-sm text-muted-foreground">{s[k]}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding gradient-navy">
        <div className="container-tight text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground font-heading">{t('pages.caseStudies.ctaTitle')}</h2>
          <Button asChild size="lg" className="mt-6 px-12 py-6">
            <Link to="/contact">{t('nav.bookConsultation')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
