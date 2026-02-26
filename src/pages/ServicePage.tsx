import { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Layers, Rocket, ShieldCheck, Sparkles, Workflow, Terminal, Cpu, Network, BrainCircuit, Database, Bot, AudioWaveform, MessageSquare, BarChart3, Activity, Settings, Cog, Microchip, Cloud, Server, Laptop, LayoutDashboard, Shuffle, HardDrive, Wifi, ShieldAlert, Fingerprint, Eye, Search, GitBranch, RefreshCw, FileCheck, CircleSlash, KanbanSquare, Milestone, Users, Focus, HeartHandshake, FileSearch, Target, Share2, MessageCircle, BarChart, TrendingUp, Navigation, Filter, FormInput, ScanLine, FileType2, DatabaseZap, TextSelect, Globe2, Inbox, MailCheck, Shield } from 'lucide-react';
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

  const isItConsulting = service?.slug === 'it-consulting';
  const isSoftwareDev = service?.slug === 'software-development';
  const isAIML = service?.slug === 'ai-machine-learning';
  const isAIAgents = service?.slug === 'ai-agents';
  const isDataAnalytics = service?.slug === 'data-analytics';
  const isIntelligentSystems = service?.slug === 'intelligent-systems';

  // Group 1: Core IT & Infrastructure
  const isCloudInfra = service?.slug === 'cloud-infrastructure';
  const isNetworkSolutions = service?.slug === 'network-solutions';
  const isSoftwareTesting = service?.slug === 'software-testing';

  // Group 2: Management & Staffing
  const isProjectManagement = service?.slug === 'project-management';
  const isITStaffing = service?.slug === 'it-staffing';

  // Group 3: Marketing & Media
  const isSocialMedia = service?.slug === 'social-media';
  const isDigitalMarketing = service?.slug === 'digital-marketing';

  // Group 4: Data & Operations
  const isDataEntry = service?.slug === 'data-entry';
  const isDomainEmail = service?.slug === 'domain-email';

  const groupedTech = useMemo(() => {
    if (!service) return [];

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
  }, [service]);

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

  if (!service) return <Navigate to="/404" replace />;

  return (
    <>
      <SEOHead
        title={`${service.title} | Ticode Technologies`}
        description={service.summary}
        path={`/services/${service.slug}`}
        schemaType="Service"
        serviceName={service.title}
      />

      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-base pt-32 lg:pt-40 pb-16 lg:pb-24 border-b border-white/5">
        {/* Deep Background Depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-[10%] top-0 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_60%)] blur-3xl mix-blend-screen" />
        </div>

        <div className="container-tight relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 sm:items-start m-auto">
            {/* Left Column: Command Structure */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-6 flex items-center gap-3 text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan"></span>
                </span>
                {t('pages.services.label', 'Service Capability')}
                <span className="h-px w-6 bg-white/20 ml-2 hidden sm:block" />
                <span className="text-white/50 ml-2 hidden sm:block">Enterprise Tier</span>
              </div>

              <h1 className="font-heading text-4xl font-black leading-[1.1] tracking-[-0.02em] text-white md:text-6xl lg:text-[4rem] drop-shadow-2xl max-w-2xl lg:max-w-3xl">
                {service.headline.split(' ').map((word, i, arr) => (
                  <span key={i} className={i >= arr.length - 2 ? "bg-gradient-to-r from-brand-blue to-accent-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]" : "text-white/95"}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              <p className="mt-8 max-w-xl text-lg font-medium leading-[1.65] text-white/80 tracking-normal xl:text-xl">
                {service.summary}
              </p>

              {/* Specialized Service Bullets */}
              {isSoftwareDev ? (
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "B2B, B2C, and Enterprise Scale",
                    "Latest tech covering all modern platforms",
                    "Pre-vetted, security-cleared engineering teams",
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : isAIML ? (
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Predictive Analytics & Autonomous Systems",
                    "Secure, Sovereign Model Deployments",
                    "Scalable Infrastructure for Neural Workloads",
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : isAIAgents ? (
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Autonomous Task Execution & Workflows",
                    "Conversational Voice AI in Native Arabic",
                    "Omnichannel Agentic Orchestration",
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : isDataAnalytics ? (
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "Enterprise Data Warehouse & Lakehouse",
                    "Real-time BI Dashboards & Reporting",
                    "Predictive Analytics & Data Modeling",
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : isIntelligentSystems ? (
                <ul className="mt-6 flex flex-col gap-3">
                  {[
                    "RPA & Cognitive Business Automation",
                    "IoT Sensor Networks & Edge Computing",
                    "Continuous CI/CD Pipeline Orchestration",
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white/80">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}

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

            {/* Right Column: Dynamic Layout based on Service */}
            <div className="lg:col-span-5 w-full relative">
              {isSoftwareDev ? (
                // Custom Engineering/Architecture Visual for Software Dev
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />

                  {/* Floating Elements Layout */}
                  <div className="relative w-full max-w-[500px] animate-float-slow">
                    {/* The Main IDE/Code Window */}
                    <div className="relative w-full rounded-2xl border border-white/10 bg-[#08101A] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden z-20">
                      {/* Fake Window Controls */}
                      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="mx-auto flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-500 font-mono uppercase">
                          <Terminal className="h-3 w-3" /> enterprise_core.ts
                        </div>
                      </div>

                      {/* Code Format */}
                      <div className="p-6 font-mono text-xs md:text-sm text-slate-300 leading-[1.8] relative overflow-hidden">
                        <p className="text-[#C678DD]">import <span className="text-[#E5C07B]">{' { '}</span> SovereignArch <span className="text-[#E5C07B]">{' } '}</span> from <span className="text-[#98C379]">'@ticode/core'</span>;</p>
                        <p className="text-[#C678DD]">import <span className="text-[#E5C07B]">{' { '}</span> GCC_Compliance <span className="text-[#E5C07B]">{' } '}</span> from <span className="text-[#98C379]">'@ticode/gov'</span>;</p>
                        <br />
                        <p><span className="text-[#C678DD]">const</span> <span className="text-[#61AFEF]">deployEnterpriseStack</span> = <span className="text-[#C678DD]">async</span> () ={'>'} {' {'}</p>
                        <p className="pl-4 sm:pl-8"><span className="text-[#C678DD]">await</span> SovereignArch.<span className="text-[#61AFEF]">initialize</span>({' {'}</p>
                        <p className="pl-8 sm:pl-16 text-[#E06C75]">scale<span className="text-white/50">:</span> <span className="text-[#98C379]">'global_mission_critical'</span>,</p>
                        <p className="pl-8 sm:pl-16 text-[#E06C75]">security<span className="text-white/50">:</span> GCC_Compliance.<span className="text-[#61AFEF]">ZeroTrustNet</span>(),</p>
                        <p className="pl-8 sm:pl-16 text-[#E06C75]">uptime<span className="text-white/50">:</span> <span className="text-[#D19A66]">99.999</span></p>
                        <p className="pl-4 sm:pl-8">{'}'});</p>
                        <br />
                        <p className="pl-4 sm:pl-8 text-[#5C6370] italic">{'// Provisioning immutable infrastructure...'}</p>
                        <p className="pl-4 sm:pl-8"><span className="text-[#C678DD]">return</span> {' {'} status: <span className="text-[#98C379]">'Securely Deployed'</span> {'}'};</p>
                        <p>{'}'};</p>

                        {/* Ambient Editor Glow */}
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-accent-cyan/10 rounded-full blur-[40px] pointer-events-none" />
                      </div>
                    </div>

                    {/* Floating Badge 1 - Performance */}
                    <div className="absolute -right-6 top-16 w-max rounded-xl border border-white/10 bg-[#111C2D]/90 backdrop-blur-xl px-4 py-3 shadow-2xl z-30 hidden sm:block delay-100 animate-[fade-in-right_0.5s_ease-out_forwards]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 font-mono">Architecture</p>
                          <p className="text-sm font-bold text-white">Event-Driven</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge 2 - Security */}
                    <div className="absolute -left-8 -bottom-6 w-max rounded-xl border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-2xl px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 hidden sm:block delay-300 animate-[fade-in-up_0.5s_ease-out_forwards]">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-cyan"></span>
                        </div>
                        <p className="text-sm font-bold tracking-wide text-white font-mono">Zero-Trust Verified</p>
                      </div>
                    </div>

                  </div>
                </div>
              ) : isAIML ? (
                // Custom Enterprise AI Visual for AI & ML Service
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Deep Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

                  {/* Main AI Core Visualization */}
                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0">

                    {/* Concentric Pulsing Rings & Core */}
                    <div className="absolute inset-0 rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.05)_0%,transparent_70%)] flex items-center justify-center">
                      <div className="absolute inset-4 rounded-full border border-brand-blue/10 animate-[spin_60s_linear_infinite]" />
                      <div className="absolute inset-12 lg:inset-20 rounded-full border border-accent-cyan/15 animate-[spin_40s_linear_infinite_reverse] border-dashed" />

                      {/* Core Processor Element */}
                      <div className="relative z-20 flex h-28 w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full bg-[#08101A] border border-brand-blue/40 shadow-[0_0_50px_rgba(47,107,255,0.3)]">
                        <div className="absolute inset-0 rounded-full bg-brand-blue/10 animate-pulse-glow" />
                        <BrainCircuit className="h-10 w-10 lg:h-12 lg:w-12 text-accent-cyan relative z-10" />
                      </div>
                    </div>

                    {/* Data Ingestion Pipeline (Left) */}
                    <div className="absolute left-[-2rem] sm:left-[-4rem] top-1/3 -translate-y-1/2 flex flex-col sm:flex-row items-start sm:items-center gap-2 z-30">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0B1521]/90 backdrop-blur-md px-3 py-2 shadow-lg">
                          <Database className="h-3 w-3 text-slate-400" />
                          <span className="text-[9px] font-mono text-slate-300 uppercase tracking-wider">Unstructured</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0B1521]/90 backdrop-blur-md px-3 py-2 shadow-lg">
                          <Network className="h-3 w-3 text-slate-400" />
                          <span className="text-[9px] font-mono text-slate-300 uppercase tracking-wider">Vector Stream</span>
                        </div>
                      </div>
                      <div className="w-12 sm:w-16 border-t border-brand-blue/40 border-dashed relative hidden sm:block">
                        {/* Flowing particle */}
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-4 bg-brand-blue rounded-full shadow-[0_0_10px_2px_theme('colors.brand.blue')]"
                          initial={{ left: '0%', opacity: 0 }}
                          animate={{ left: '100%', opacity: 1 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>
                    </div>

                    {/* Execution Pipeline (Right) */}
                    <div className="absolute right-[-1.5rem] sm:right-[-3rem] bottom-1/3 translate-y-1/2 flex flex-col sm:flex-row items-end sm:items-center gap-2 z-30">
                      <div className="w-12 sm:w-16 border-t border-accent-cyan/40 border-dashed relative hidden sm:block">
                        {/* Flowing particle */}
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-4 bg-accent-cyan rounded-full shadow-[0_0_10px_2px_theme('colors.accent.cyan')]"
                          initial={{ left: '0%', opacity: 1 }}
                          animate={{ left: '100%', opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-accent-cyan/20 bg-[#0B1521]/90 backdrop-blur-md px-4 py-3 shadow-[0_10px_30px_rgba(0,194,255,0.15)]">
                          <Sparkles className="h-4 w-4 text-accent-cyan" />
                          <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest">Predictive Output</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge - Analytics */}
                    <div className="absolute -top-4 right-0 sm:right-4 rounded-xl border border-brand-blue/30 bg-[#111C2D]/95 backdrop-blur-xl px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-40 animate-[fade-in-up_0.5s_ease-out_forwards] delay-300">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                          <Cpu className="h-4 w-4" />
                          <span className="absolute right-0 top-0 flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                          </span>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">Cognitive Engine</p>
                          <p className="text-sm font-bold text-white">4.2 TFLOPs Live</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : isAIAgents ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Deep Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

                  {/* Main Orchestrator Visualization */}
                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0">

                    {/* Connection Lines (Background) */}
                    <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 450 450">
                      {/* Left Node to Center */}
                      <path d="M 120 120 Q 225 120 225 225" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" className="text-accent-cyan/60" />
                      {/* Right Node to Center */}
                      <path d="M 330 120 Q 225 120 225 225" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" className="text-brand-blue/60" />
                      {/* Center to Bottom Node */}
                      <path d="M 225 225 L 225 360" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" className="text-white/40" />
                    </svg>

                    {/* Node 1: Voice Input (Top Left) */}
                    <div className="absolute top-[20%] left-0 sm:left-[2%] flex items-center gap-3 z-30 animate-[float-slow_4s_ease-in-out_infinite]">
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-accent-cyan/30 bg-[#0B1521]/90 backdrop-blur-md px-4 py-2.5 shadow-[0_10px_30px_rgba(0,194,255,0.1)] relative overflow-hidden">
                          <div className="absolute inset-0 bg-accent-cyan/10 animate-pulse" />
                          <AudioWaveform className="h-4 w-4 text-accent-cyan relative z-10" />
                          <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest relative z-10">Audio In</span>
                        </div>
                        <div className="flex gap-1 pr-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/40 animate-pulse" style={{ animationDelay: '0ms' }} />
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan/70 animate-pulse" style={{ animationDelay: '150ms' }} />
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>

                    {/* Node 2: Context/Memory (Top Right) */}
                    <div className="absolute top-[20%] right-0 sm:right-[2%] flex items-center gap-3 z-30 animate-[float-slow_5s_ease-in-out_infinite] delay-150">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2 rounded-lg border border-brand-blue/40 bg-[#0B1521]/90 backdrop-blur-md px-4 py-2.5 shadow-[0_10px_30px_rgba(37,99,235,0.1)] relative overflow-hidden">
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-blue/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
                          <Database className="h-4 w-4 text-brand-blue relative z-10" />
                          <span className="text-[10px] font-mono text-white font-bold uppercase tracking-widest relative z-10">Vector Mem</span>
                        </div>
                        <div className="flex items-center gap-2 pl-2">
                          <span className="text-[9px] font-mono text-slate-400">Retrieval: 12ms</span>
                        </div>
                      </div>
                    </div>

                    {/* Node 3: Actions Output (Bottom) */}
                    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 animate-[float-slow_6s_ease-in-out_infinite] delay-300 w-max">
                      <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-[#111C2D]/95 backdrop-blur-md px-6 py-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 relative overflow-hidden">
                          <div className="absolute inset-0 bg-emerald-500/20 animate-ping opacity-20" />
                          <Workflow className="h-5 w-5 relative z-10" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-mono text-white font-bold uppercase tracking-widest">Tool Emitting</span>
                          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest leading-none mt-1">Status: Success</span>
                        </div>
                      </div>
                    </div>

                    {/* Central Agentic Core */}
                    <div className="relative z-20 flex sm:h-44 sm:w-44 h-36 w-36 border-[1px] border-brand-blue/40 rounded-full bg-[#080D14]/90 backdrop-blur-xl items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.2)] group transition-all duration-500 hover:shadow-[0_0_120px_rgba(0,194,255,0.3)] hover:border-accent-cyan/50">
                      {/* Inner glowing core concentric ring */}
                      <div className="absolute inset-2 border border-white/5 rounded-full bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.15)_0%,transparent_70%)] animate-[spin_40s_linear_infinite]" />
                      <div className="absolute inset-6 border border-brand-blue/20 border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]" />

                      <div className="relative z-10 flex flex-col items-center gap-3 mt-1">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-[#0B1521] border border-brand-blue/30 overflow-hidden shadow-[inset_0_0_20px_rgba(37,99,235,0.2)]">
                          <Bot className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                          {/* Brain pulsing effect */}
                          <div className="absolute inset-0 bg-brand-blue/30 animate-pulse" style={{ animationDuration: '2s' }} />
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <span className="text-[11px] sm:text-xs font-mono font-black text-accent-cyan uppercase tracking-widest">Agnt.Core</span>
                          <span className="text-[9px] font-mono text-brand-blue line-through uppercase tracking-widest mt-1 opacity-70">Human-in-loop</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ) : isDataAnalytics ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Data Glows */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyan/15 rounded-full blur-[100px] pointer-events-none" />

                  {/* Data Engineering visualization */}
                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0">

                    {/* Left side Data Sources */}
                    <div className="absolute left-[2%] top-1/4 sm:top-1/3 flex flex-col gap-8 z-30">

                      <div className="flex items-center gap-3 relative group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1521] border border-white/20 shadow-lg relative overflow-hidden z-20">
                          <Database className="h-4 w-4 text-emerald-400 relative z-10" />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/20 to-transparent" />
                        </div>
                        <div className="hidden sm:flex flex-col">
                          <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">ERP/CRMs</span>
                          <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest mt-0.5">Stream: Live</span>
                        </div>

                        {/* Data Pipeline Line */}
                        <div className="absolute left-[30px] top-1/2 -translate-y-1/2 w-24 sm:w-32 border-t border-emerald-500/40 border-dashed -z-10">
                          <motion.div
                            className="absolute top-1/2 -translate-y-1/2 h-1.5 w-4 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_theme('colors.emerald.400')]"
                            initial={{ left: '0%', opacity: 0 }}
                            animate={{ left: '100%', opacity: 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 relative group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B1521] border border-white/20 shadow-lg relative overflow-hidden z-20">
                          <Network className="h-4 w-4 text-brand-blue relative z-10" />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-blue/20 to-transparent" />
                        </div>
                        <div className="hidden sm:flex flex-col">
                          <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">API Int.</span>
                          <span className="text-[8px] font-mono text-brand-blue uppercase tracking-widest mt-0.5">Stream: Batch</span>
                        </div>

                        {/* Data Pipeline Line */}
                        <div className="absolute left-[30px] top-1/2 -translate-y-1/2 w-24 sm:w-32 border-t border-brand-blue/40 border-dashed -z-10">
                          <motion.div
                            className="absolute top-1/2 -translate-y-1/2 h-1.5 w-4 bg-brand-blue rounded-full shadow-[0_0_10px_2px_theme('colors.brand.blue')]"
                            initial={{ left: '0%', opacity: 0 }}
                            animate={{ left: '100%', opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.7, repeat: Infinity, ease: 'linear' }}
                          />
                        </div>
                      </div>

                    </div>

                    {/* Central Data Warehouse Element */}
                    <div className="relative z-40 lg:ml-8">
                      <div className="relative w-40 h-52 sm:w-48 sm:h-64 rounded-2xl border-[1px] border-accent-cyan/40 bg-[#080D14]/90 backdrop-blur-xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,194,255,0.15)] group transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,194,255,0.3)] hover:border-accent-cyan/70">
                        {/* Top Header */}
                        <div className="h-10 border-b border-white/10 flex items-center justify-between px-4 bg-white/[0.02]">
                          <div className="flex items-center gap-2">
                            <Database className="h-3 w-3 text-accent-cyan" />
                            <span className="text-[10px] font-mono font-bold text-accent-cyan uppercase tracking-widest">Enterprise DWH</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          </div>
                        </div>

                        {/* Internal Data Table Rep */}
                        <div className="flex-1 p-4 flex flex-col gap-2 relative">
                          {/* Ambient glow inside DWH */}
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-cyan/20 rounded-full blur-[30px] pointer-events-none" />

                          {/* Hex/Data representations */}
                          <div className="flex-1 border border-white/10 rounded-lg bg-[#0B1521] overflow-hidden flex flex-col p-2 gap-1.5">
                            <div className="h-2 w-full bg-white/5 rounded-sm" />
                            <div className="h-px w-full bg-white/10 my-1" />
                            <div className="flex gap-2 w-full">
                              <div className="h-2 w-1/3 bg-emerald-500/30 rounded-sm" />
                              <div className="h-2 w-1/4 bg-blue-500/30 rounded-sm" />
                              <div className="h-2 w-1/3 bg-purple-500/30 rounded-sm" />
                            </div>
                            <div className="flex gap-2 w-full">
                              <div className="h-2 w-1/4 bg-emerald-500/30 rounded-sm" />
                              <div className="h-2 w-2/3 bg-blue-500/30 rounded-sm" />
                            </div>
                            <div className="flex gap-2 w-full">
                              <div className="h-2 w-1/2 bg-emerald-500/30 rounded-sm" />
                              <div className="h-2 w-1/4 bg-purple-500/30 rounded-sm" />
                            </div>
                            <div className="h-px w-full bg-white/10 my-1" />
                            <div className="w-full flex justify-between items-center mt-auto">
                              <div className="flex gap-1">
                                <div className="h-3 w-3 rounded-sm bg-accent-cyan/20 border border-accent-cyan/30" />
                                <div className="h-3 w-3 rounded-sm bg-accent-cyan/20 border border-accent-cyan/30" />
                                <div className="h-3 w-3 rounded-sm bg-accent-cyan/20 border border-accent-cyan/30" />
                              </div>
                              <span className="text-[7px] font-mono text-white/40 uppercase">12.5 TB</span>
                            </div>
                          </div>

                          <div className="mt-1 flex justify-between items-center">
                            <span className="text-[8px] font-mono text-white/50 uppercase">ELT Processing Active</span>
                            <Activity className="h-3 w-3 text-accent-cyan" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Output BI Dashboard (Right Side) */}
                    <div className="absolute right-[5%] top-1/4 sm:top-1/3 z-50 animate-[fade-in-up_0.5s_ease-out_forwards] delay-300">

                      {/* Connection from DWH to Dashboard */}
                      <div className="absolute right-[100%] top-1/2 -translate-y-1/2 w-16 sm:w-24 border-t border-accent-cyan/50 border-dashed -z-10">
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-4 bg-accent-cyan rounded-full shadow-[0_0_10px_2px_theme('colors.accent.cyan')]"
                          initial={{ left: '0%', opacity: 0 }}
                          animate={{ left: '100%', opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: 'linear' }}
                        />
                      </div>

                      <div className="rounded-xl border border-white/20 bg-[#111C2D]/95 backdrop-blur-md p-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-3 min-w-[140px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-brand-blue/10 rounded-full blur-[20px] pointer-events-none" />

                        <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                          <BarChart3 className="h-3.5 w-3.5 text-accent-cyan" />
                          <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">Live Insights</span>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex items-end justify-between">
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Rev Growth</span>
                            <span className="text-xs font-mono text-emerald-400 font-bold">+24.5%</span>
                          </div>
                          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[75%]" />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-1">
                          <div className="flex items-end justify-between">
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Churn Risk</span>
                            <span className="text-xs font-mono text-brand-blue font-bold">1.2%</span>
                          </div>
                          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-brand-blue h-full w-[15%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ) : isIntelligentSystems ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Industrial Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none" />

                  {/* Systems & Automation Orchestrator */}
                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Automation Engine */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-3xl bg-brand-blue/20 blur-xl transition-all duration-500 group-hover:bg-brand-blue/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(37,99,235,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-brand-blue/40">

                        {/* Spinning Gear Core */}
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          <Cog className="absolute inset-0 h-full w-full text-brand-blue/20 animate-[spin_10s_linear_infinite]" />
                          <Cog className="absolute inset-0 h-full w-full text-accent-cyan/30 animate-[spin_15s_linear_infinite_reverse] scale-75" />
                          <Microchip className="h-8 w-8 sm:h-10 sm:w-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Logic Engine</span>
                          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
                            <div className="flex gap-0.5">
                              <span className="h-1 w-1 bg-emerald-400 rounded-full animate-ping" />
                            </div>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest leading-none">Status: Active</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Circular Orbiting Nodes */}
                    <div className="absolute inset-0 border-[1px] border-dashed border-white/5 rounded-full z-10 animate-[spin_30s_linear_infinite]">

                      {/* Node 1: IoT Sensors (Top) */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all hover:border-emerald-500/30">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20">
                            <Network className="h-3.5 w-3.5 text-emerald-400" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">IoT Sensors</span>
                            <span className="text-[7px] font-mono text-slate-400 uppercase">Input Stream</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: CI/CD Pipelines (Bottom Right) */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/30">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue/20">
                            <Workflow className="h-3.5 w-3.5 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">CI/CD Pipeline</span>
                            <span className="text-[7px] font-mono text-slate-400 uppercase">Deployment</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: RPA Bots (Bottom Left) */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan/30">
                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-cyan/20 overflow-hidden relative">
                            <div className="absolute inset-0 bg-accent-cyan/20 animate-pulse" />
                            <Bot className="h-3.5 w-3.5 text-accent-cyan relative z-10" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">RPA Bots</span>
                            <span className="text-[7px] font-mono text-slate-400 uppercase">Task Execution</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Connecting Pulses */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/5 border-dashed" strokeDasharray="4 8" />

                      {/* Center to Top Node */}
                      <path d="M 225 225 L 225 35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-emerald-500/30" />

                      {/* Center to Bottom Right Node */}
                      <path d="M 225 225 L 360 350" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-brand-blue/30" />

                      {/* Center to Bottom Left Node */}
                      <path d="M 225 225 L 90 350" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-accent-cyan/30" />
                    </svg>

                  </div>
                </div>
              ) : isCloudInfra ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Cloud Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />

                  {/* Cloud Architecture Container */}
                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Sovereign Cloud Core */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-3xl bg-sky-500/20 blur-xl transition-all duration-500 group-hover:bg-sky-500/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(14,165,233,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-sky-500/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                          <div className="absolute inset-2 rounded-full border border-sky-400/40 animate-[spin_10s_linear_infinite]" />
                          <Cloud className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Sov. Cloud</span>
                          <span className="text-[8px] font-mono text-sky-400 uppercase tracking-widest leading-none mt-1.5">Multi-Region</span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Cloud Nodes */}
                    <div className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full z-10 animate-[spin_40s_linear_infinite]">

                      {/* Node 1: AWS/Azure Integrations */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-[#FF9900]/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF9900]/10">
                            <Server className="h-4 w-4 text-[#FF9900]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Hyperscalers</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">AWS / Azure</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: Private Cloud Clusters */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <Database className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Private Core</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">On-Prem Sync</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: Edge Compute */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-cyan/10">
                            <Laptop className="h-4 w-4 text-accent-cyan" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Edge Nodes</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Local Compute</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/5" />
                      {/* Flowing particles on the circle */}
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 800" strokeLinecap="round" className="text-sky-400 animate-[spin_4s_linear_infinite] origin-center" />
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 800" strokeLinecap="round" className="text-brand-blue animate-[spin_6s_linear_infinite_reverse] origin-center" />
                    </svg>

                  </div>
                </div>
              ) : isNetworkSolutions ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Network Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Zero-Trust Core */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 blur-xl transition-all duration-500 group-hover:bg-emerald-500/30 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(16,185,129,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-emerald-500/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing Hexagons (using radial borders) */}
                          <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-ping opacity-20" style={{ animationDuration: '2s' }} />
                          <div className="absolute inset-2 rounded-[0.75rem] rotate-45 border border-emerald-400/40 animate-[spin_8s_linear_infinite]" />
                          <div className="absolute inset-2 rounded-[0.75rem] border border-emerald-400/40 animate-[spin_8s_linear_infinite_reverse]" />
                          <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Zero-Trust</span>
                          <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest leading-none mt-1.5 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Secure
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Network Nodes */}
                    <div className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full z-10 animate-[spin_35s_linear_infinite_reverse]">

                      {/* Node 1: SD-WAN */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_35s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-emerald-500/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10">
                            <Wifi className="h-4 w-4 text-emerald-500" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">SD-WAN</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Global Topology</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: Packet Inspection */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_35s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-[#F43F5E]/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F43F5E]/10">
                            <Search className="h-4 w-4 text-[#F43F5E]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Inspection</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Packet Gate</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: Encrypted Tunnels */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_35s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <Fingerprint className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Tunnels</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">IPSec / VPN</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths (Encrypted Flow) */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      {/* Polygon/Triangle connection for a sharper network feel instead of a circle */}
                      <polygon points="225,50 376.5,312.5 73.5,312.5" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/5 border-dashed" strokeDasharray="4 8" />

                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
                      {/* Flowing particles on the circle */}
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1 15" strokeLinecap="round" className="text-emerald-400 animate-[spin_10s_linear_infinite] origin-center shadow-[0_0_10px_rgba(16,185,129,1)]" />
                    </svg>

                  </div>
                </div>
              ) : isSoftwareTesting ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient QA Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#8B5CF6]/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Verification Engine */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-3xl bg-[#8B5CF6]/20 blur-xl transition-all duration-500 group-hover:bg-[#8B5CF6]/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(139,92,246,0.15),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#8B5CF6]/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-full border border-[#8B5CF6]/30 animate-ping opacity-20" style={{ animationDuration: '2.5s' }} />
                          <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#8B5CF6]/40 animate-[spin_12s_linear_infinite]" />
                          <FileCheck className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">QA Engine</span>
                          <span className="text-[8px] font-mono text-[#8B5CF6] uppercase tracking-widest leading-none mt-1.5 flex items-center gap-1">
                            Passing (142)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting QA Nodes */}
                    <div className="absolute inset-0 border-[1px] border-solid border-white/5 rounded-full z-10 animate-[spin_40s_linear_infinite]">

                      {/* Node 1: Unit Tests */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-[#8B5CF6]/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#8B5CF6]/10">
                            <Terminal className="h-4 w-4 text-[#8B5CF6]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Unit Tests</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> 100% Pass</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: Integration */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <GitBranch className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Integration</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> Passing</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: E2E */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-cyan/10">
                            <LayoutDashboard className="h-4 w-4 text-accent-cyan" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">E2E Flow</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> Validated</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths (Infinite Loop / Verification path) */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-[#8B5CF6]/30 animate-[spin_20s_linear_infinite] origin-center" />
                      {/* Flowing particles on the circle */}
                    </svg>

                  </div>
                </div>
              ) : isProjectManagement ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient PM Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#F59E0B]/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex flex-col items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center gap-6">

                    {/* Header Node */}
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1521]/90 px-6 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl mb-4 relative z-20 group transition-all hover:border-[#F59E0B]/40">
                      <div className="absolute inset-0 rounded-2xl bg-[#F59E0B]/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B]/20 relative z-10">
                        <KanbanSquare className="h-5 w-5 text-[#F59E0B]" />
                      </div>
                      <div className="flex flex-col relative z-10">
                        <span className="text-xs font-mono text-white font-bold tracking-widest uppercase">Execution Matrix</span>
                        <span className="text-[10px] font-mono text-[#F59E0B] uppercase tracking-widest">Active Sprint 4</span>
                      </div>
                    </div>

                    {/* Gantt / Timeline Rows */}
                    <div className="w-full max-w-[340px] flex flex-col gap-6 relative z-20">
                      {/* Vertical line connector */}
                      <div className="absolute left-[1.35rem] top-2 bottom-2 w-px bg-gradient-to-b from-[#F59E0B] via-brand-blue to-white/10" />

                      {/* Row 1: Workflows */}
                      <div className="relative flex items-center gap-5 pl-4 z-10">
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[#0B1521] bg-[#F59E0B] relative z-10 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                        <div className="flex-1 flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 backdrop-blur-sm">
                          <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-slate-400">
                            <span>Workflow Arch</span>
                            <span className="text-[#F59E0B]">100%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-[#F59E0B] rounded-full w-full" />
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Milestones (Animated) */}
                      <div className="relative flex items-center gap-5 pl-4 z-10">
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[#0B1521] bg-brand-blue relative z-10 shadow-[0_0_10px_rgba(47,107,255,0.5)] animate-pulse" />
                        <div className="flex-1 flex flex-col gap-2 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-3 backdrop-blur-sm shadow-[inset_0_0_20px_rgba(47,107,255,0.05)]">
                          <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-slate-400">
                            <span>Core Milestones</span>
                            <span className="text-brand-blue">In Progress</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                            {/* Animated progress bar */}
                            <div className="h-full bg-brand-blue rounded-full absolute left-0 top-0 bottom-0 animate-pulse" style={{ width: '65%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Resources */}
                      <div className="relative flex items-center gap-5 pl-4 z-10">
                        <div className="h-3.5 w-3.5 rounded-full border-2 border-[#0B1521] bg-white/30 relative z-10" />
                        <div className="flex-1 flex flex-col gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 backdrop-blur-sm">
                          <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-widest text-slate-400">
                            <span>QA & Handoff</span>
                            <span>Pending</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-white/20 rounded-full w-[15%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Activity Nodes */}
                    <div className="absolute -right-4 top-32 flex items-center gap-2 rounded-lg border border-white/5 bg-[#111C2D]/90 px-3 py-1.5 shadow-xl backdrop-blur-md animate-[float_4s_ease-in-out_infinite] z-30">
                      <Activity className="h-3 w-3 text-emerald-400" />
                      <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest">On Track</span>
                    </div>

                    <div className="absolute -left-8 bottom-24 flex items-center gap-2 rounded-lg border border-white/5 bg-[#111C2D]/90 px-3 py-1.5 shadow-xl backdrop-blur-md animate-[float_5s_ease-in-out_infinite_reverse] z-30">
                      <Users className="h-3 w-3 text-brand-blue" />
                      <span className="text-[8px] font-mono text-brand-blue uppercase tracking-widest">8 Assigned</span>
                    </div>

                    {/* Abstract background rings */}
                    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40 scale-110" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 12" className="text-[#F59E0B]/30 animate-[spin_60s_linear_infinite]" />
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" className="text-brand-blue/30 animate-[spin_40s_linear_infinite_reverse]" />
                    </svg>

                  </div>
                </div>
              ) : isITStaffing ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Staffing Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#EC4899]/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Talent Network Core */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-full bg-[#EC4899]/20 blur-xl transition-all duration-500 group-hover:bg-[#EC4899]/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-full border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(236,72,153,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#EC4899]/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-full border border-[#EC4899]/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                          <div className="absolute inset-2 rounded-full border-[1.5px] border-dashed border-[#EC4899]/40 animate-[spin_15s_linear_infinite]" />
                          <Users className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Talent Node</span>
                          <span className="text-[8px] font-mono text-[#EC4899] uppercase tracking-widest leading-none mt-1.5 flex items-center gap-1">
                            Embedded
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Nodes */}
                    <div className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full z-10 animate-[spin_40s_linear_infinite]">

                      {/* Node 1: Sourcing */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-[#EC4899]/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EC4899]/10">
                            <Search className="h-4 w-4 text-[#EC4899]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Global Source</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Top 1% Talent</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: Tech Vetting */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <FileSearch className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Tech Verify</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Strict Vetting</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: Culture Alignment */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-cyan/10">
                            <HeartHandshake className="h-4 w-4 text-accent-cyan" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Alignment</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Culture Sync</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-white/10" />
                      {/* Inner connection lines */}
                      <path d="M 225 150 L 225 85" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-[#EC4899]/50" />
                      <path d="M 260 270 L 310 320" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-brand-blue/50" />
                      <path d="M 190 270 L 140 320" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-accent-cyan/50" />
                    </svg>

                  </div>
                </div>
              ) : isSocialMedia ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Social Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E11D48]/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Brand Engine Core */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-3xl bg-[#E11D48]/20 blur-xl transition-all duration-500 group-hover:bg-[#E11D48]/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-[2.5rem] border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(225,29,72,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#E11D48]/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-[1.2rem] border border-[#E11D48]/30 animate-ping opacity-20" style={{ animationDuration: '2s' }} />
                          <div className="absolute inset-2 rounded-[1.2rem] border border-[#E11D48]/40 animate-[spin_8s_linear_infinite]" />
                          <Share2 className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(225,29,72,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Brand Core</span>
                          <span className="text-[8px] font-mono text-[#E11D48] uppercase tracking-widest leading-none mt-1.5 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
                            Amplifying
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Social Nodes */}
                    <div className="absolute inset-0 border-[1px] border-solid border-white/5 rounded-full z-10 animate-[spin_35s_linear_infinite_reverse]">

                      {/* Node 1: Engagement */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_35s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-[#E11D48]/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E11D48]/10">
                            <MessageCircle className="h-4 w-4 text-[#E11D48]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Engagement</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1">+240% Lift</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: Analytics */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_35s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <BarChart className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Analytics</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Real-Time</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: Viral Reach */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_35s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-cyan/10">
                            <TrendingUp className="h-4 w-4 text-accent-cyan" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Viral Reach</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1">Expanding</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths (Broadcast waves) */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-white/10" />
                      {/* Concentric broadcast rings */}
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#E11D48]/30 animate-ping opacity-20" style={{ animationDuration: '4s' }} />
                      <circle cx="225" cy="225" r="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#E11D48]/40 animate-ping opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }} />

                      {/* Flowing particles on the circle */}
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="50 500" strokeLinecap="round" className="text-[#E11D48] animate-[spin_2s_linear_infinite] origin-center shadow-[0_0_10px_rgba(225,29,72,1)]" />
                    </svg>

                  </div>
                </div>
              ) : isDigitalMarketing ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Funnel Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#14B8A6]/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex flex-col items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center gap-4">

                    {/* Top Funnel: Traffic */}
                    <div className="relative w-64 h-20 rounded-t-3xl rounded-b-xl border border-white/10 bg-gradient-to-b from-[#14B8A6]/20 to-[#0B1521]/90 backdrop-blur-xl flex items-center justify-between px-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 group transition-all hover:border-[#14B8A6]/40">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14B8A6]/20">
                          <Navigation className="h-5 w-5 text-[#14B8A6]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Acquisition</span>
                          <span className="text-[8px] font-mono text-slate-400 uppercase">SEO / SEM / Ads</span>
                        </div>
                      </div>
                      <span className="text-sm font-mono font-black text-[#14B8A6]">10k+</span>
                    </div>

                    {/* Funnel Connection Lines */}
                    <div className="flex space-x-12 -my-2 relative z-20">
                      <div className="w-px h-6 bg-gradient-to-b from-[#14B8A6] to-brand-blue" />
                      <div className="w-px h-6 bg-gradient-to-b from-[#14B8A6] to-brand-blue" />
                    </div>

                    {/* Mid Funnel: Engagement & Conversion */}
                    <div className="relative w-56 h-20 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-blue/20 to-[#0B1521]/90 backdrop-blur-xl flex items-center justify-between px-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 group transition-all hover:border-brand-blue/40">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/20">
                          <Filter className="h-4 w-4 text-brand-blue" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">Conversion</span>
                          <span className="text-[7px] font-mono text-slate-400 uppercase">CRO / Funnels</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-black text-brand-blue">24%</span>
                    </div>

                    {/* Funnel Connection Lines */}
                    <div className="flex space-x-6 -my-2 relative z-20">
                      <div className="w-px h-6 bg-gradient-to-b from-brand-blue to-emerald-400" />
                      <div className="w-px h-6 bg-gradient-to-b from-brand-blue to-emerald-400" />
                    </div>

                    {/* Bottom Funnel: ROI */}
                    <div className="relative w-48 h-20 rounded-t-xl rounded-b-3xl border border-white/10 bg-gradient-to-b from-emerald-400/20 to-[#0B1521]/90 backdrop-blur-xl flex items-center justify-between px-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-30 group transition-all hover:border-emerald-400/40">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/20">
                          <Target className="h-4 w-4 text-emerald-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono text-white font-bold tracking-widest uppercase">Target ROI</span>
                          <span className="text-[7px] font-mono text-slate-400 uppercase">Closed Won</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-black text-emerald-400">4x</span>
                    </div>

                    {/* Floating Tech Nodes */}
                    <div className="absolute -right-2 top-20 flex items-center gap-2 rounded-lg border border-white/5 bg-[#111C2D]/90 px-3 py-1.5 shadow-xl backdrop-blur-md animate-[float_4s_ease-in-out_infinite] z-40">
                      <ScanLine className="h-3 w-3 text-[#14B8A6]" />
                      <span className="text-[8px] font-mono text-[#14B8A6] uppercase tracking-widest">Pixel Active</span>
                    </div>

                    {/* Abstract background rings */}
                    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50 scale-110" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 12" className="text-[#14B8A6]/30 animate-[spin_60s_linear_infinite]" />
                      <circle cx="225" cy="225" r="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" className="text-emerald-400/30 animate-[spin_40s_linear_infinite_reverse]" />
                    </svg>

                  </div>
                </div>
              ) : isDataEntry ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Data Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central DB Core */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-xl transition-all duration-500 group-hover:bg-indigo-500/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(99,102,241,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-indigo-500/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-[1rem] border border-indigo-400/30 animate-ping opacity-20" style={{ animationDuration: '2.5s' }} />
                          <div className="absolute inset-2 rounded-[1rem] border-2 border-indigo-400/40 animate-[spin_10s_linear_infinite]" />
                          <DatabaseZap className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Master DB</span>
                          <span className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest leading-none mt-1.5 flex items-center gap-1">
                            Structured
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting Pipeline Nodes */}
                    <div className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full z-10 animate-[spin_40s_linear_infinite_reverse]">

                      {/* Node 1: Raw Input */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-slate-400/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-400/10">
                            <FileType2 className="h-4 w-4 text-slate-400" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Raw Data</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Input Stream</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: OCR Extraction */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <ScanLine className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">OCR/ML</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Extraction</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: Validation */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_40s_linear_infinite]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-emerald-400/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10">
                            <TextSelect className="h-4 w-4 text-emerald-400" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Validation</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> Cleaned</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths (Sequential processing) */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      {/* Polygon flow indicating pipeline instead of circle */}
                      <polygon points="225,50 376.5,312.5 73.5,312.5" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/5" />

                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
                      {/* Flowing particles on the circle */}
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 20" strokeLinecap="round" className="text-indigo-400 animate-[spin_8s_linear_infinite] origin-center" />
                    </svg>

                  </div>
                </div>
              ) : isDomainEmail ? (
                <div className="relative h-full min-h-[450px] w-full flex items-center justify-center lg:justify-end lg:pr-8">
                  {/* Ambient Domain Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent-cyan/15 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center animate-float-slow mt-8 lg:mt-0 transform scale-[0.70] sm:scale-[0.80] lg:scale-[0.90] xl:scale-100 origin-center">

                    {/* Central Secure Endpoint Core */}
                    <div className="relative z-30 group">
                      <div className="absolute inset-0 rounded-[2rem] bg-accent-cyan/20 blur-xl transition-all duration-500 group-hover:bg-accent-cyan/40 group-hover:blur-2xl" />

                      <div className="relative flex h-32 w-32 sm:h-40 sm:w-40 flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-[#0B1521]/90 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(34,211,238,0.1),0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-accent-cyan/40">
                        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-[1rem] border border-accent-cyan/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                          <div className="absolute inset-2 rounded-[1rem] rotate-45 border border-accent-cyan/40 animate-[spin_10s_linear_infinite]" />
                          <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-white relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-1">
                          <span className="text-[10px] sm:text-[11px] font-mono font-black text-white uppercase tracking-widest">Endpoint</span>
                          <span className="text-[8px] font-mono text-accent-cyan uppercase tracking-widest leading-none mt-1.5 flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                            Secure
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting DNS Nodes */}
                    <div className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full z-10 animate-[spin_30s_linear_infinite]">

                      {/* Node 1: DNS Routing */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-brand-blue/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                            <Globe2 className="h-4 w-4 text-brand-blue" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">DNS Route</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Global Auth</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 2: MX Filtering */}
                      <div className="absolute bottom-[15%] right-[-5%] -translate-x-1/2 translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-[#14B8A6]/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#14B8A6]/10">
                            <Filter className="h-4 w-4 text-[#14B8A6]" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Spam/MX</span>
                            <span className="text-[8px] font-mono text-slate-400 uppercase">Filtered</span>
                          </div>
                        </div>
                      </div>

                      {/* Node 3: Encrypted Mailbox */}
                      <div className="absolute bottom-[15%] left-[5%] -translate-x-1/2 translate-y-1/2 animate-[spin_30s_linear_infinite_reverse]">
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#111C2D]/95 px-4 py-2.5 shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan/40">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-cyan/10">
                            <MailCheck className="h-4 w-4 text-accent-cyan" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">Mailbox</span>
                            <span className="text-[8px] font-mono text-emerald-400 uppercase flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> TLS Secure</span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Data Transfer Paths (Secure transmission lines) */}
                    <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 450 450">
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" className="text-white/20" />
                      {/* Flowing particles on the circle */}
                      <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1 30" strokeLinecap="round" className="text-accent-cyan animate-[spin_6s_linear_infinite] origin-center shadow-[0_0_10px_rgba(34,211,238,1)]" />
                    </svg>

                  </div>
                </div>
              ) : (
                // Original Executive Overview Layout for other services
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
              )}
            </div>
          </motion.div >

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
        </div >
      </section >

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
                  <p className="text-sm md:text-base font-medium leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item.desc}</p>
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

      {
        isItConsulting && (
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
        )
      }

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

      {
        service.faqs.length > 0 && (
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
        )
      }

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




