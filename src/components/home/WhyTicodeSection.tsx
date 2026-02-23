import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Layers, Handshake, Languages } from 'lucide-react';

const whyIcons: Record<string, React.ReactNode> = {
  enterprise: <Shield className="h-6 w-6" />,
  ai: <Cpu className="h-6 w-6" />,
  kuwait: <Globe className="h-6 w-6" />,
  scalable: <Layers className="h-6 w-6" />,
  partnership: <Handshake className="h-6 w-6" />,
  bilingual: <Languages className="h-6 w-6" />,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const whyKeys = ['enterprise', 'ai', 'kuwait', 'scalable', 'partnership', 'bilingual'];

const WhyTicodeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground font-heading md:text-4xl">{t('whyTicode.title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('whyTicode.subtitle')}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyKeys.map((key, i) => (
            <motion.div
              key={key} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-40px" }} variants={fadeInUp}
              className="rounded-lg border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-12px_rgba(37,99,235,0.3)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-accent/10 text-emerald-accent">
                {whyIcons[key]}
              </div>
              <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground font-heading">{t(`whyTicode.items.${key}.title`)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`whyTicode.items.${key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTicodeSection;
