import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ITCHero from '@/components/services/it-consulting/ITCHero';
import ITCHallenges from '@/components/services/it-consulting/ITCHallenges';
import ITCFailureInsights from '@/components/services/it-consulting/ITCFailureInsights';
import ITCSolutions from '@/components/services/it-consulting/ITCSolutions';
import ITCDeliveryTimeline from '@/components/services/it-consulting/ITCDeliveryTimeline';
import ITCInvestmentModel from '@/components/services/it-consulting/ITCInvestmentModel';
import ITCCaseStudy from '@/components/services/it-consulting/ITCCaseStudy';
import ITCFinalCta from '@/components/services/it-consulting/ITCFinalCta';

const ITConsultingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#071826] font-sans">
            <Helmet>
                <title>Board-Level IT Consulting | Sovereign Enterprise Intelligence</title>
                <meta name="description" content="Governance-first advisory that aligns technology with enterprise strategy, reduces operational and regulatory risk, and delivers board-validated outcomes across GCC organizations." />
            </Helmet>

            <main className="flex-grow">
                <ITCHero />
                <ITCHallenges />
                <ITCFailureInsights />
                <ITCSolutions />
                <ITCDeliveryTimeline />
                <ITCInvestmentModel />
                <ITCCaseStudy />
                <ITCFinalCta />
            </main>
        </div>
    );
};

export default ITConsultingPage;
