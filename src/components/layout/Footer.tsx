import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { Mail, MapPin, Phone, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/ai-solutions', label: t('nav.aiSolutions') },
    { to: '/case-studies', label: t('nav.caseStudies') },
    { to: '/insights', label: t('nav.insights') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { to: '/services/it-consulting', label: t('nav.serviceLinks.itConsulting') },
    { to: '/services/ai-machine-learning', label: t('nav.serviceLinks.aiMachineLearning') },
    { to: '/services/software-development', label: t('nav.serviceLinks.softwareDevelopment') },
    { to: '/services/cloud-infrastructure', label: t('nav.serviceLinks.cloudInfrastructure') },
    { to: '/services/digital-marketing', label: t('nav.serviceLinks.digitalMarketing') },
    { to: '/services/data-analytics', label: t('nav.serviceLinks.dataAnalytics') },
  ];

  const industryLinksData = [
    { to: '/industries/finance', label: t('nav.industryLinks.finance') },
    { to: '/industries/healthcare', label: t('nav.industryLinks.healthcare') },
    { to: '/industries/retail', label: t('nav.industryLinks.retail') },
    { to: '/industries/education', label: t('nav.industryLinks.education') },
    { to: '/industries/real-estate', label: t('nav.industryLinks.realEstate') },
    { to: '/industries/transportation', label: t('nav.industryLinks.transportation') },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0B1521] relative overflow-hidden font-sans">
      <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-blue/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container-tight relative z-10">

        {/* Mini CTA Strip */}
        <div className="border-b border-white/[0.06] py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-base font-bold text-white leading-snug">
              Have a project in mind?
            </p>
            <p className="text-sm text-slate-500 font-medium mt-0.5">
              Our Kuwait-based team is ready to help you move fast.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-brand-blue/10 hover:border-brand-blue/30 text-sm font-bold text-slate-300 hover:text-white transition-all duration-300 whitespace-nowrap shrink-0"
          >
            Start a Conversation
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-10 max-w-7xl mx-auto pt-12 pb-8 md:pt-14">

          {/* Brand & Contact */}
          <div className="lg:col-span-2 flex flex-col pe-0 lg:pe-8">
            <Logo className="mb-6" />
            <p className="max-w-sm text-sm font-medium leading-[1.8] text-slate-400 mb-8">
              {t('footer.description', 'Enterprise-grade IT, AI, and digital transformation solutions for Kuwait and the GCC region.')}
            </p>

            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.07] group-hover:bg-brand-blue/10 group-hover:border-brand-blue/25 transition-colors shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="text-sm text-slate-400 font-medium font-mono">
                  {t('footer.location', 'Sharq, Kuwait City')}
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.07] group-hover:bg-brand-blue/10 group-hover:border-brand-blue/25 transition-colors shrink-0">
                  <Mail className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <a
                  href="mailto:info@ticodetech.com"
                  className="text-sm text-slate-400 font-medium font-mono hover:text-accent-cyan transition-colors"
                >
                  info@ticodetech.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.07] group-hover:bg-brand-blue/10 group-hover:border-brand-blue/25 transition-colors shrink-0">
                  <Phone className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <a
                  href="tel:+96541103254"
                  dir="ltr"
                  className="text-sm text-slate-400 font-medium font-mono hover:text-accent-cyan transition-colors"
                >
                  +965 4110 3254
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-auto flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/25 font-mono me-1">
                {t('footer.connect', 'Connect')}
              </span>
              <a
                href="https://www.linkedin.com/company/ticodetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.07] text-white/40 transition-all duration-300 hover:bg-brand-blue/15 hover:border-brand-blue/35 hover:text-accent-cyan hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(47,107,255,0.35)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/ticodetechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.07] text-white/40 transition-all duration-300 hover:bg-brand-blue/15 hover:border-brand-blue/35 hover:text-accent-cyan hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(47,107,255,0.35)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-all duration-300 hover:text-white"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan text-xs">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-all duration-300 hover:text-white"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan text-xs">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/70 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              {t('footer.industries')}
            </h4>
            <ul className="space-y-3">
              {industryLinksData.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-all duration-300 hover:text-white"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-cyan text-xs">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 sm:flex-row max-w-7xl mx-auto w-full">
          <p className="text-[11px] font-mono font-medium tracking-wide text-white/25 uppercase">
            © {year} Ticode Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[11px] font-mono font-medium tracking-wide text-white/25 uppercase transition-colors hover:text-white/60">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-[11px] font-mono font-medium tracking-wide text-white/25 uppercase transition-colors hover:text-white/60">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
