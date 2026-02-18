import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Brain, Globe, Layers, Handshake, Languages } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }) };

const valueKeys = ['integrity', 'innovation', 'regional', 'scalable', 'partnership', 'bilingual'] as const;
const valueIcons: Record<string, React.ReactNode> = {
  integrity: <Shield className="h-6 w-6" />, innovation: <Brain className="h-6 w-6" />, regional: <Globe className="h-6 w-6" />,
  scalable: <Layers className="h-6 w-6" />, partnership: <Handshake className="h-6 w-6" />, bilingual: <Languages className="h-6 w-6" />,
};

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title={`${t('pages.about.label')} | Ticode Technologies`} description={t('pages.about.subtitle')} path="/about" />

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} custom={0} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('pages.about.label')}</p>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{t('pages.about.headline')}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('pages.about.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card/50">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">{t('pages.about.missionTitle')}</h2>
              <p className="text-muted-foreground">{t('pages.about.missionDesc')}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">{t('pages.about.storyTitle')}</h2>
              <p className="text-muted-foreground">{t('pages.about.storyDesc')}</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">{t('pages.about.approachTitle')}</h2>
              <p className="text-muted-foreground">{t('pages.about.approachDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">{t('pages.about.valuesTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueKeys.map((key, i) => (
              <motion.div key={key} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="rounded-lg border border-border/50 bg-card/30 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">{valueIcons[key]}</div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{t(`pages.about.values.${key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`pages.about.values.${key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-navy">
        <div className="container-tight text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('pages.about.ctaTitle')}</h2>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">{t('nav.bookConsultation')}</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
