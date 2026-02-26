import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { industries } from '@/data/industries';
import LuxuryHero from '@/components/industries/LuxuryHero';
import LuxuryChallenges from '@/components/industries/LuxuryChallenges';
import LuxurySolutions from '@/components/industries/LuxurySolutions';
import LuxuryInvestmentModel from '@/components/industries/LuxuryInvestmentModel';
import LuxuryCaseStudy from '@/components/industries/LuxuryCaseStudy';
import LuxuryFinalCta from '@/components/industries/LuxuryFinalCta';

import IndustryStatsStrip from '@/components/industries/IndustryStatsStrip';

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find(i => i.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!industry) {
    return <Navigate to="/404" replace />;
  }

  // Generate generic stats for the strip based on the industry
  const stats = [
    { label: "Execution Velocity", value: "10x", suffix: "+" },
    { label: "Implementation", value: "90", suffix: " Days" },
    { label: "System Uptime", value: "99.9", suffix: "%" },
    { label: "Enterprise Partners", value: "500", suffix: "+" },
  ];

  return (
    <div className="bg-base font-sans">
      <Helmet>
        <title>{industry.title} Digital Transformation | Ticode</title>
        <meta name="description" content={industry.summary} />
      </Helmet>

      <main className="flex-grow">
        <LuxuryHero industry={industry} />
        <IndustryStatsStrip stats={stats} />
        <LuxuryChallenges industry={industry} />
        <LuxurySolutions industry={industry} />
        <LuxuryInvestmentModel industry={industry} />
        <LuxuryCaseStudy industry={industry} />
        <LuxuryFinalCta industry={industry} />
      </main>
    </div>
  );
};

export default IndustryPage;
