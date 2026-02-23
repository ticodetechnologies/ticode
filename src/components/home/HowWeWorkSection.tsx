import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, Zap, HeadphonesIcon } from 'lucide-react';

const stepIcons = [
  <Search className="h-5 w-5" />,
  <Compass className="h-5 w-5" />,
  <Rocket className="h-5 w-5" />,
  <Zap className="h-5 w-5" />,
  <HeadphonesIcon className="h-5 w-5" />,
];

const stepKeys = ['discovery', 'architecture', 'implementation', 'optimization', 'support'] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const HowWeWorkSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('howWeWork.title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('howWeWork.subtitle')}</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stepKeys.map((key, i) => (
            <motion.div
              key={key} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-40px" }} variants={fadeInUp}
              className="relative rounded-lg border border-border/50 bg-card/30 p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_-12px_rgba(37,99,235,0.3)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mb-2 text-sm font-semibold tracking-tight text-foreground font-heading">{t(`howWeWork.steps.${key}.title`)}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{t(`howWeWork.steps.${key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
