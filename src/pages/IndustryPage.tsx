import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { industries } from '@/data/industries';
import EstimationCalculator from '@/components/EstimationCalculator';
import SEOHead from '@/components/SEOHead';

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const caseKeys = ['challenge', 'strategy', 'implementation', 'outcome'] as const;

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return <Navigate to="/404" replace />;

  return (
    <>
      <SEOHead
        title={`${industry.title} Solutions | Ticode Technologies`}
        description={industry.summary}
        path={`/industries/${industry.slug}`}
        schemaType="Service"
        serviceName={`${industry.title} Technology Solutions`}
      />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('pages.industries.label')}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl lg:text-5xl">{industry.headline}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{industry.summary}</p>
            <Button asChild size="lg" className="mt-6 px-10 py-6">
              <Link to="/contact">{t('pages.services.requestConsultation')} <ArrowRight className="ms-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('pages.industries.challengesTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.challenges.map((c, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:shadow-[0_0_22px_-12px_rgba(37,99,235,0.3)]">
                <h3 className="mb-2 text-sm font-semibold tracking-tight text-foreground font-heading">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('pages.industries.solutionsTitle')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {industry.solutions.map((s, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 text-sm font-semibold tracking-tight text-foreground font-heading">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight">
          <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('pages.industries.relevantServices')}</h2>
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
            {industry.relevantServices.map((s) => (
              <Link key={s} to={`/services/${s}`} className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10">
                {s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <EstimationCalculator fields={industry.calculatorFields} baseRate={industry.calculatorBaseRate} />
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('pages.industries.caseStudyTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {caseKeys.map((k) => (
              <div key={k} className="rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:shadow-[0_0_22px_-12px_rgba(37,99,235,0.3)]">
                <span className="mb-2 block text-xs font-semibold uppercase text-primary">{t(`caseStudies.${k}`)}</span>
                <p className="text-sm text-muted-foreground">{industry.caseStudy[k]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-navy">
        <div className="container-tight text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-foreground font-heading">{t('pages.industries.transformTitle')} {industry.title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t('pages.industries.transformDesc')}</p>
          <Button asChild size="lg" className="mt-6 px-12 py-6">
            <Link to="/contact">{t('nav.bookConsultation')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default IndustryPage;
