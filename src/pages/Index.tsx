import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import AIDiffSection from '@/components/home/AIDiffSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';
import AICapabilitiesSection from '@/components/home/AICapabilitiesSection';

const Index = () => {
  return (
    <>
      <SEOHead
        title="Ticode Technologies | IT Consulting Kuwait, AI Solutions GCC, Digital Transformation"
        description="Enterprise-grade IT consulting, AI solutions, software development, and digital transformation for Kuwait and GCC businesses. Custom AI, cloud infrastructure, and intelligent automation."
        path="/"
        schemaType="Organization"
      />
      <HeroSection />
      <TrustSection />
      <AIDiffSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <AICapabilitiesSection />
      <CaseStudiesSection />
      <FinalCtaSection />
    </>
  );
};

export default Index;
