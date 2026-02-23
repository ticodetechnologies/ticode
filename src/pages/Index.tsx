import SEOHead from '@/components/SEOHead';
import HeroDirective from '@/components/home/HeroDirective';
import TransformationCollapse from '@/components/home/TransformationCollapse';
import StrategicPillars from '@/components/home/StrategicPillars';
import OutcomeMetrics from '@/components/home/OutcomeMetrics';
import DeliveryFramework from '@/components/home/DeliveryFramework';
import DomainsSection from '@/components/home/DomainsSection';
import CaseEvidence from '@/components/home/CaseEvidence';
import ExecutiveAction from '@/components/home/ExecutiveAction';

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
      <TransformationCollapse />
      <StrategicPillars />
      <OutcomeMetrics />
      <DeliveryFramework />
      <DomainsSection />
      <CaseEvidence />
      <ExecutiveAction />
    </>
  );
};

export default Index;
