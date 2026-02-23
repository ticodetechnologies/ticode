import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Layers, Rocket, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { services } from '@/data/services';
import EstimationCalculator from '@/components/EstimationCalculator';
import SEOHead from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const deliveryKeys = ['discovery', 'strategy', 'implementation', 'optimization', 'support'] as const;
const solutionIcons = [Sparkles, Layers, Workflow, ShieldCheck, Rocket, CheckCircle2];

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/404" replace />;
  const isItConsulting = service.slug === 'it-consulting';

  const groupedTech = useMemo(() => {
    const groups = [
      { title: 'Core Development', items: [] as string[] },
      { title: 'Cloud & DevOps', items: [] as string[] },
      { title: 'Data & AI', items: [] as string[] },
      { title: 'Business & Ops', items: [] as string[] },
      { title: 'Security & Network', items: [] as string[] },
    ];

    const addToGroup = (title: string, tech: string) => {
      const group = groups.find((g) => g.title === title);
      if (group) group.items.push(tech);
    };

    service.techStack.forEach((tech) => {
      const label = tech.toLowerCase();

      if (/(aws|azure|gcp|cloud|kubernetes|docker|terraform|jenkins|github actions|ansible)/.test(label)) {
        addToGroup('Cloud & DevOps', tech);
        return;
      }

      if (/(tensorflow|pytorch|scikit|hugging|mlflow|sagemaker|openai|langchain|whisper|vector|rag|spark|dbt|bigquery|snowflake|airflow|tableau|power bi|document ai|ocr)/.test(label)) {
        addToGroup('Data & AI', tech);
        return;
      }

      if (/(jira|confluence|asana|slack|monday|microsoft project|hubspot|mailchimp|google ads|analytics|semrush|ahrefs|hotjar|tag manager|hootsuite|sprout|canva|adobe|meta business|tiktok|ats|technical assessment|skills verification|postman|browserstack|cypress|playwright|selenium|jmeter|owasp)/.test(label)) {
        addToGroup('Business & Ops', tech);
        return;
      }

      if (/(cisco|fortinet|palo alto|meraki|solarwinds|prtg|wireshark|dmarc|cloudflare)/.test(label)) {
        addToGroup('Security & Network', tech);
        return;
      }

      addToGroup('Core Development', tech);
    });

    return groups.filter((group) => group.items.length > 0);
  }, [service.techStack]);

  const failureRisks = [
    {
      title: 'Strategy-Execution Disconnect',
      desc: 'Digital programs launch without a governance chain from board priorities to portfolio decisions, creating drift, duplication, and stalled outcomes.',
    },
    {
      title: 'Architecture Debt Compounding',
      desc: 'Legacy constraints and fragmented platforms erode security, inflate OPEX, and slow decision cycles when integration becomes brittle.',
    },
    {
      title: 'Vendor Capture & Loss of Leverage',
      desc: 'Over-reliance on a single provider reduces negotiating power and exit options, locking the enterprise into rising costs and rigid roadmaps.',
    },
    {
      title: 'Change Without Operating Model',
      desc: 'Transformation fails when people, process, and accountability are not redesigned to sustain new capabilities and controls.',
    },
  ];

  const boardOutcomes = [
    { metric: '10-25%', label: 'OPEX reduction targets through rationalized platforms and portfolio governance.' },
    { metric: '2-3x', label: 'Faster decision cycles by standardizing investment and architecture approvals.' },
    { metric: 'Level-up', label: 'Governance maturity with board-ready reporting, risk controls, and auditability.' },
    { metric: 'Vendor-neutral', label: 'Independence built into contracts, architecture, and exit-ready roadmaps.' },
  ];

  const itDeliverySteps = [
    { step: 'Discovery', desc: 'Board-aligned diagnostic across strategy, risk posture, portfolio, and architecture health.' },
    { step: 'Strategy', desc: 'Enterprise roadmap tied to financial outcomes, governance gates, and regulatory obligations.' },
    { step: 'Execution', desc: 'Program management with value tracking, dependency control, and executive visibility.' },
    { step: 'Governance', desc: 'Decision rights, risk controls, and vendor oversight embedded into operating rhythm.' },
    { step: 'Optimization', desc: 'Continuous cost, performance, and compliance improvements with measurable targets.' },
  ];

  const gccRiskNarrative = [
    {
      title: 'Regulatory Exposure',
      desc: 'Evolving data residency, sector mandates, and audit expectations demand defensible controls and traceable decisions.',
    },
    {
      title: 'Operational Cost of Inaction',
      desc: 'Legacy platforms increase run-rate costs while slowing cycle times and constraining growth options.',
    },
    {
      title: 'Vendor & Concentration Risk',
      desc: 'Single-vendor dependence weakens negotiating leverage and inflates exit costs during strategic shifts.',
    },
  ];

  const measurableOutcomes = [
    { metric: '18–28%', label: 'Run-rate cost reduction through platform consolidation and automation.' },
    { metric: '30–45%', label: 'Faster release cycles with standardized delivery governance.' },
    { metric: '99.9%', label: 'Uptime targets with resilience upgrades and proactive monitoring.' },
    { metric: '<90 days', label: 'Time-to-value for priority transformation initiatives.' },
  ];

  const deliverySteps = isItConsulting
    ? itDeliverySteps
    : deliveryKeys.map((key) => ({
      step: t(`pages.services.delivery.${key}.step`),
      desc: t(`pages.services.delivery.${key}.desc`),
    }));

  // Replaced complex slicing logic with pure CSS wrapped rendering for better typography balance.

  return (
    <>
      <SEOHead
        title={`${service.title} | Ticode Technologies`}
        description={service.summary}
        path={`/services/${service.slug}`}
        schemaType="Service"
        serviceName={service.title}
      />

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-base pt-32 pb-16 border-b border-white/5">
        {/* Deep Background Depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-[10%] top-0 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] blur-3xl mix-blend-screen" />
        </div>

        <div className="container-tight relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 sm:items-start pt-4 m-auto">
            {/* Left Column: Command Structure */}
            <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-4">
              <div className="mb-6 flex items-center gap-3 text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
                </span>
                {t('pages.services.label', 'Service Capability')}
                <span className="h-px w-6 bg-white/20 ml-2 hidden sm:block" />
                <span className="text-white/50 ml-2 hidden sm:block">Enterprise Tier</span>
              </div>

              <h1 className="font-heading text-[3rem] font-black leading-[1.05] tracking-[-0.02em] text-white md:text-[4.5rem] lg:text-[5.25rem] drop-shadow-2xl max-w-2xl lg:max-w-[110%]">
                {service.headline.split(' ').map((word, i, arr) => (
                  <span key={i} className={i >= arr.length - 2 ? "bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]" : "text-white/95"}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="mt-8 max-w-xl text-lg font-medium leading-[1.65] text-white/80 tracking-normal xl:text-xl">
                {service.summary}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-xl bg-brand-blue px-10 py-7 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-brand-blue-dark"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center">
                      {t("home.hero.ctaPrimary", "Initiate Engagement")}
                      <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                </Button>
                <div className="text-xs font-bold tracking-[0.05em] text-white/40 px-2 text-center sm:text-left leading-relaxed">
                  Board-ready outcomes,<br className="hidden sm:block" /> measured and governed.
                </div>
              </div>
            </div>

            {/* Right Column: Executive Insight Module */}
            <div className="lg:col-span-5 w-full">
              <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0B1521] p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] h-full lg:scale-105 origin-top-left transition-transform duration-500">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />

                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-5">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    Executive Overview
                  </div>
                  <div className="flex items-center gap-2 text-[0.65rem] font-bold tracking-widest text-[#22D3EE]">
                    VERIFIED
                    <ShieldCheck className="h-3.5 w-3.5 text-[#22D3EE]" />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-white font-heading tracking-[-0.015em] leading-[1.15]">Risk-Controlled Delivery</h3>
                  <p className="text-base text-white/80 font-medium leading-[1.6] mt-2">
                    Governance-first execution designed for regulated environments and board oversight.
                  </p>

                  <div className="grid gap-4 mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-end justify-between">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/40">Audit Readiness Target</p>
                      <p className="font-mono text-2xl font-black text-white text-right leading-none">11 Wks</p>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/40">Operational Cost Impact</p>
                      <p className="font-mono text-2xl font-black text-white text-right leading-none">22% Red.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 md:mt-24 border-t border-white/5 pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-4 text-xs font-bold uppercase tracking-[0.15em] text-white/30">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4" />
              ISO-Aligned Delivery
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4" />
              GCC Regulatory Adherence
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4" />
              Board-Level Advisory
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-1 py-32 md:py-40 lg:py-52">
        <div className="absolute inset-x-0 top-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top_center,rgba(45,107,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center justify-center">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                <span className="h-px w-6 bg-brand-blue" />
                Systemic Obstacles
              </div>
              <h2 className="font-heading text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.05]">
                Current Capability <br className="hidden lg:block" /><span className="text-white/40">Deficits.</span>
              </h2>
              <p className="mt-8 text-lg font-medium leading-[1.6] text-white/70 max-w-md">
                Without authoritative digital governance and capable infrastructure, organizations face compounding operational decay and stalled outcomes.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-10">
              {(isItConsulting ? failureRisks : service.challenges).map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-base p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-blue to-accent-cyan opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-white font-heading">{item.title}</h3>
                  <p className="text-sm md:text-base font-medium leading-relaxed text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base py-32 md:py-40 lg:py-52 border-t border-white/5">
        <div className="container-tight relative z-10">
          <div className="mb-16 flex flex-col items-center justify-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Strategic Competencies
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              {t('pages.services.solutionsTitle', 'Operational Capabilities')}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {service.solutions.map((s, i) => {
              const Icon = solutionIcons[i % solutionIcons.length];
              return (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-1 p-8 md:p-10 transition-all duration-500 hover:border-white/20 hover:bg-[#12314F]">
                  <div className="absolute right-0 top-0 -mr-8 -mt-8 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]">
                    <Icon className="h-64 w-64 text-white" />
                  </div>
                  <div className="relative z-10">
                    <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mb-4 text-2xl font-black tracking-tight text-white font-heading">{s.title}</h3>
                    <p className="text-base text-white/60 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-1 py-32 md:py-48 border-t border-white/5">
        <div className="container-tight relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Regional Imperative</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white font-heading md:text-5xl">Why This Matters for GCC Enterprises</h2>
            <p className="mt-6 text-lg font-medium leading-[1.6] text-white/60">
              Risk exposure, compliance pressure, and rising operating costs make delay a strategic liability. We align transformation decisions with board-level accountability and measurable enterprise resilience.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {gccRiskNarrative.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-base p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0A1624]">
                <h3 className="text-xl font-bold tracking-tight text-white font-heading">{item.title}</h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 rounded-3xl border border-white/10 bg-base p-10 lg:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(37,99,235,0.08)_0%,transparent_50%)] opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-blue">Case Example</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white font-heading leading-tight">Regulated Financial Services Transformation</h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-white/60">
                  Consolidated fragmented platforms, introduced governance checkpoints, and redesigned operating controls to meet regulatory audits without increasing run-rate cost.
                </p>
              </div>
              <div className="grid w-full lg:w-[40%] grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-surface-1 p-6 text-center shadow-inner">
                  <p className="text-4xl font-black text-white font-mono">22%</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white/50">Cost Reduction</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-surface-1 p-6 text-center shadow-inner">
                  <p className="text-4xl font-black text-white font-mono">11 Wks</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white/50">Audit Readiness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isItConsulting && (
        <section className="relative overflow-hidden bg-base py-32 md:py-40 border-t border-white/5">
          <div className="container-tight relative z-10">
            <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Designed for Board-Level Outcomes
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {boardOutcomes.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 lg:pt-0 group">
                  <div className="flex items-baseline justify-center font-mono text-[4rem] font-black tracking-tighter text-white leading-none drop-shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent-cyan">
                    {item.metric}
                  </div>
                  <div className="mt-8 h-px w-12 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
                  <div className="mt-8 text-sm font-bold tracking-[0.05em] text-white/60 leading-relaxed px-4">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-surface-1 py-32 md:py-48 border-t border-white/5">
        <div className="absolute inset-x-0 top-0 h-[800px] w-full bg-[radial-gradient(ellipse_at_top_center,rgba(45,107,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-tight relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Execution Framework
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white max-w-2xl">
              {t('pages.services.deliveryTitle', 'Blueprint for Delivery.')}
            </h2>
          </div>

          <div className="relative mt-8">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 sm:block lg:hidden" />
            <div className="absolute left-0 right-0 top-12 hidden h-px w-full bg-white/10 lg:block" />

            <div className="grid gap-8 sm:gap-12 lg:grid-cols-5 lg:gap-8">
              {deliverySteps.map((step, i) => (
                <div key={step.step} className="group relative z-10 flex flex-col items-start lg:items-center lg:text-center pl-16 sm:pl-20 lg:pl-0">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-base text-lg font-black text-white transition-colors duration-500 group-hover:border-accent-cyan group-hover:text-accent-cyan lg:relative lg:mb-6 lg:h-24 lg:w-24 lg:text-3xl lg:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                    <span className="opacity-40 transition-opacity duration-500 group-hover:opacity-100">{'0' + (i + 1)}</span>
                  </div>
                  <h3 className="mb-3 mt-1 text-lg font-bold tracking-tight text-white font-heading lg:mt-0">{step.step}</h3>
                  <p className="text-sm font-medium leading-relaxed text-white/50 max-w-[280px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-base py-32 md:py-40 border-t border-white/5">
        <div className="container-tight relative z-10">
          <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Measurable Outcomes
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tight text-white max-w-3xl">
              Transformation With Enterprise-Grade Metrics
            </h2>
            <p className="mt-6 text-base font-medium text-white/50 max-w-xl">
              We commit to outcomes that impact board priorities: cost control, speed, resilience, and risk governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {measurableOutcomes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center pt-8 lg:pt-0 group">
                <div className="flex items-baseline justify-center font-mono text-[4rem] font-black tracking-tighter text-white leading-none drop-shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent-cyan">
                  {item.metric}
                </div>
                <div className="mt-8 h-px w-12 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
                <div className="mt-8 text-sm font-bold tracking-[0.05em] text-white/60 leading-relaxed px-4">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-1 py-32 md:py-40 border-t border-white/5">
        <div className="container-tight max-w-3xl relative z-10">
          <EstimationCalculator fields={service.calculatorFields} baseRate={service.calculatorBaseRate} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-base py-32 md:py-40 border-t border-white/5">
        <div className="container-tight relative z-10">
          <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-white font-heading md:text-5xl">{t('pages.services.techStackTitle')}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {groupedTech.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-surface-1 p-8 transition-all duration-500 hover:border-white/20 hover:-translate-y-1">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{group.title}</p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-base px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-500 hover:border-accent-cyan hover:text-accent-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="relative overflow-hidden bg-base py-32 md:py-40 border-t border-white/5">
          <div className="container-tight max-w-4xl relative z-10">
            <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-white font-heading md:text-5xl">{t('pages.services.faqTitle')}</h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden bg-base py-40 md:py-52 border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-base backdrop-blur-[100px] opacity-90" />
        </div>

        <div className="container-tight relative z-10 text-center flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
            </span>
            Secure Your Digital Mandate
          </div>

          <h2 className="text-[3.5rem] font-black leading-[0.95] tracking-[-0.03em] text-white md:text-[5.5rem] lg:text-[6.5rem] max-w-5xl mx-auto drop-shadow-2xl font-heading">
            Initiate Strategic <br />
            <span className="bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent pb-2 drop-shadow-[0_0_60px_rgba(45,107,255,0.4)]">
              Engagement.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg font-medium leading-[1.6] text-white/60 tracking-tight">
            {isItConsulting
              ? "Confidential executive briefing, board-ready deliverables, and a governance-first engagement model."
              : `${t('pages.services.readyDesc')} ${service.title.toLowerCase()}.`}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="group relative h-auto overflow-hidden rounded-full bg-brand-blue px-10 py-5 sm:py-7 text-base sm:text-lg font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95 border-none w-full sm:w-auto"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center">
                  {isItConsulting ? "Schedule Executive Session" : t('nav.bookConsultation')}
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark to-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>

            {isItConsulting && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-transparent px-10 py-5 sm:py-7 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black w-full sm:w-auto"
              >
                <Link to="/contact">Request Blueprint</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;




