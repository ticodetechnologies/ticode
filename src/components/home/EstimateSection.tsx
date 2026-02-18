import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EstimateSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-card/50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl rounded-xl glass-card-strong p-8 text-center sm:p-12 gradient-navy shadow-inner shadow-primary/5">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('calculator.title')}</h2>
          <p className="mt-3 text-muted-foreground">{t('calculator.subtitle')}</p>
          <p className="mt-2 text-sm text-muted-foreground/70">{t('calculator.supportLine')}</p>
          <Button asChild size="lg" className="mt-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25">
            <Link to="/services/software-development#calculator">
              {t('calculator.cta')} <ArrowRight className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EstimateSection;
