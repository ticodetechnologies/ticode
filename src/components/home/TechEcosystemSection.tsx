import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cloud, Brain, Server, Monitor, Database } from 'lucide-react';

const catIcons: Record<string, React.ReactNode> = {
  cloud: <Cloud className="h-5 w-5" />,
  ai: <Brain className="h-5 w-5" />,
  backend: <Server className="h-5 w-5" />,
  frontend: <Monitor className="h-5 w-5" />,
  data: <Database className="h-5 w-5" />,
};

const catKeys = ['cloud', 'ai', 'backend', 'frontend', 'data'] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const TechEcosystemSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('techEcosystem.title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('techEcosystem.subtitle')}</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catKeys.map((key, i) => (
            <motion.div
              key={key} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-40px" }} variants={fadeInUp}
              className="rounded-lg border border-border/50 bg-card/30 p-5 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-3 flex items-center gap-2 text-primary/80">
                {catIcons[key]}
                <h3 className="text-sm font-semibold text-foreground">{t(`techEcosystem.categories.${key}.title`)}</h3>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t(`techEcosystem.categories.${key}.items`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEcosystemSection;
