import SEOHead from '@/components/SEOHead';
import HeroDirective from '@/components/home/HeroDirective';
import TrustedLogos from '@/components/home/TrustedLogos';
import ITCHallenges from '@/components/services/it-consulting/ITCHallenges';
import StrategicPillars from '@/components/home/StrategicPillars';
import DomainsSection from '@/components/home/DomainsSection';
import OutcomeMetrics from '@/components/home/OutcomeMetrics';
import DeliveryFramework from '@/components/home/DeliveryFramework';
import CaseEvidence from '@/components/home/CaseEvidence';
import FinalCtaSection from '@/components/home/FinalCtaSection';

const Index = () => {
  return (
    <>
      <SEOHead
        title="Ticode Technologies | IT Consulting Kuwait, AI Solutions GCC, Digital Transformation"
        description="Enterprise-grade IT consulting, AI solutions, software development, and digital transformation for Kuwait and GCC businesses. Custom AI, cloud infrastructure, and intelligent automation."
        path="/"
        schemaType="Organization"
      />
      <HeroDirective />
      <TrustedLogos />
      <ITCHallenges />
      <StrategicPillars />
      <DomainsSection />
      <OutcomeMetrics />
      <DeliveryFramework />
      <CaseEvidence />
      <FinalCtaSection />
    </>
  );
};

export default Index;
