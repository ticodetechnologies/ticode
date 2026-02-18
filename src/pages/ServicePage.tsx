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

  const deliverySteps = isItConsulting
    ? itDeliverySteps
    : deliveryKeys.map((key) => ({
      step: t(`pages.services.delivery.${key}.step`),
      desc: t(`pages.services.delivery.${key}.desc`),
    }));

  return (
    <>
      <SEOHead
        title={`${service.title} | Ticode Technologies`}
        description={service.summary}
        path={`/services/${service.slug}`}
        schemaType="Service"
        serviceName={service.title}
      />

      <section className="section-padding gradient-hero-premium overflow-hidden">
        <div className="container-tight">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{t('pages.services.label')}</p>
            <div className="relative">
              <span className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow-primary blur-2xl" />
              <h1 className="relative text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                {service.headline}
              </h1>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{service.summary}</p>
            <Button asChild size="lg" className="mt-8 h-12 px-10 text-base">
              <Link to="/contact">{t('pages.services.requestConsultation')} <ArrowRight className="ms-2 h-4 w-4" /></Link>
            </Button>
            {isItConsulting && (
              <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">Board-Aligned Governance</span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">GCC Regulatory Fluency</span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">Vendor-Neutral Advisory</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t('pages.services.challengesTitle')}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.challenges.map((c, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="rounded-xl border border-border/70 border-l-2 border-l-primary/50 bg-card/70 p-6"
              >
                <h3 className="mb-2 text-sm font-semibold text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isItConsulting && (
        <section className="section-padding section-bg-highlight">
          <div className="container-tight">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground sm:text-4xl">Why Digital Transformations Fail</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {failureRisks.map((risk) => (
                <div key={risk.title} className="rounded-xl border border-amber-500/30 bg-card/60 p-6">
                  <h3 className="mb-2 text-base font-bold uppercase tracking-wider text-amber-300">{risk.title}</h3>
                  <p className="text-sm text-muted-foreground">{risk.desc}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm font-semibold text-foreground">
              We govern transformation as an enterprise program - with executive accountability, measurable value, and risk controls built into every stage.
            </p>
          </div>
        </section>
      )}

      <section className="section-padding section-bg-deep">
        <div className="container-tight">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t('pages.services.solutionsTitle')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {service.solutions.map((s, i) => {
              const Icon = solutionIcons[i % solutionIcons.length];
              return (
                <div key={i} className="rounded-xl border border-border/70 bg-card/40 p-6">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="mb-2 text-sm font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isItConsulting && (
        <section className="section-padding section-bg-tint">
          <div className="container-tight">
            <h2 className="mb-12 text-center text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">Designed for Board-Level Outcomes</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {boardOutcomes.map((item) => (
                <div key={item.metric} className="rounded-xl border border-border/70 bg-card/50 p-6 text-center">
                  <p className="text-4xl font-extrabold text-foreground sm:text-5xl">{item.metric}</p>
                  <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
                  <p className="mt-4 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding section-bg-highlight">
        <div className="container-tight">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t('pages.services.deliveryTitle')}</h2>
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border/80 sm:block" />
            <div className="grid gap-8 sm:grid-cols-5">
              {deliverySteps.map((step, i) => (
                <div key={step.step} className="relative rounded-xl border border-border/70 bg-card/50 p-6 text-center">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-primary-foreground">{i + 1}</span>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">{step.step}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg-deep">
        <div className="container-tight max-w-2xl">
          <EstimationCalculator fields={service.calculatorFields} baseRate={service.calculatorBaseRate} />
        </div>
      </section>

      <section className="section-padding section-bg-tint">
        <div className="container-tight">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t('pages.services.techStackTitle')}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {groupedTech.map((group) => (
              <div key={group.title} className="rounded-xl border border-border/70 bg-card/40 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{group.title}</p>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
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
        <section className="section-padding section-bg-deep">
          <div className="container-tight max-w-3xl">
            <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t('pages.services.faqTitle')}</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border/60 bg-card/30 px-2">
                  <AccordionTrigger className="rounded-lg px-3 text-sm font-bold text-foreground transition-colors hover:bg-muted/30 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="section-padding gradient-cta cta-shimmer relative overflow-hidden py-32 md:py-40 lg:py-52">
        <div className="container-tight text-center">
          <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl">{t('pages.services.readyTitle')}</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{t('pages.services.readyDesc')} {service.title.toLowerCase()}.</p>
          {isItConsulting ? (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-10 text-base">
                <Link to="/contact">Schedule Executive Strategy Session</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-primary/40 px-10 text-base text-foreground hover:bg-primary/10">
                <Link to="/contact">Request Transformation Blueprint</Link>
              </Button>
            </div>
          ) : (
            <Button asChild size="lg" className="mt-8 h-12 px-10 text-base">
              <Link to="/contact">{t('nav.bookConsultation')}</Link>
            </Button>
          )}
          {isItConsulting && (
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Confidential executive briefing, board-ready deliverables, and a governance-first engagement model.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ServicePage;




