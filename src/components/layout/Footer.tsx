import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { Mail, MapPin, Phone, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/ai-solutions', label: t('nav.aiSolutions') },
    { to: '/case-studies', label: t('nav.caseStudies') },
    { to: '/insights', label: t('nav.insights') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { to: '/services/it-consulting', label: 'IT Consulting' },
    { to: '/services/ai-machine-learning', label: 'AI & ML' },
    { to: '/services/software-development', label: 'Software Dev' },
    { to: '/services/cloud-infrastructure', label: 'Cloud & Infra' },
    { to: '/services/digital-marketing', label: 'Digital Marketing' },
    { to: '/services/data-analytics', label: 'Data & Analytics' },
  ];

  const industryLinksData = [
    { to: '/industries/finance', label: 'Finance' },
    { to: '/industries/healthcare', label: 'Healthcare' },
    { to: '/industries/retail', label: 'Retail' },
    { to: '/industries/education', label: 'Education' },
    { to: '/industries/real-estate', label: 'Real Estate' },
    { to: '/industries/transportation', label: 'Transportation' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#0B1521] relative overflow-hidden font-sans">
      <div className="absolute inset-0 texture-grid-navy mix-blend-overlay opacity-30" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-blue/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container-tight relative z-10 pb-8 pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-10 max-w-7xl mx-auto">
          {/* Brand & Positioning */}
          <div className="lg:col-span-2 flex flex-col pr-0 lg:pr-8">
            <Logo className="mb-6" />
            <p className="max-w-sm text-sm font-medium leading-[1.8] text-white/50 mb-8">
              Sovereign IT & AI Transformation Partner serving Kuwait & the GCC.
              Engineering enterprise-grade digital infrastructure.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-sm text-white/60 font-mono group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-colors">
                  <MapPin className="h-3.5 w-3.5 text-brand-blue group-hover:text-accent-cyan" />
                </div>
                <span>Kuwait City, Kuwait</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60 font-mono group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-brand-blue group-hover:text-accent-cyan" />
                </div>
                <span className="hover:text-white cursor-pointer transition-colors">executive@ticodetech.com</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/60 font-mono group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.02] border border-white/5 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-brand-blue group-hover:text-accent-cyan" />
                </div>
                <span dir="ltr" className="hover:text-white cursor-pointer transition-colors">+965 XXXXXXXX</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-auto flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white/30 font-mono mr-2">Connect</span>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 text-white/40 transition-all duration-300 hover:bg-brand-blue/10 hover:border-brand-blue/30 hover:text-accent-cyan hover:-translate-y-1 hover:shadow-[0_5px_15px_-5px_rgba(47,107,255,0.3)]">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 text-white/40 transition-all duration-300 hover:bg-brand-blue/10 hover:border-brand-blue/30 hover:text-accent-cyan hover:-translate-y-1 hover:shadow-[0_5px_15px_-5px_rgba(47,107,255,0.3)]">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white/80 font-mono">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="group flex items-center text-sm font-medium text-white/50 transition-all duration-300 hover:text-white">
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:mr-2 text-accent-cyan opacity-0 group-hover:opacity-100 hidden sm:inline-block">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white/80 font-mono">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="group flex items-center text-sm font-medium text-white/50 transition-all duration-300 hover:text-white">
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:mr-2 text-accent-cyan opacity-0 group-hover:opacity-100 hidden sm:inline-block">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-8 text-xs font-bold uppercase tracking-widest text-white/80 font-mono">{t('footer.industries')}</h4>
            <ul className="space-y-4">
              {industryLinksData.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="group flex items-center text-sm font-medium text-white/50 transition-all duration-300 hover:text-white">
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 group-hover:mr-2 text-accent-cyan opacity-0 group-hover:opacity-100 hidden sm:inline-block">▸</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Status */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-6 sm:flex-row max-w-7xl mx-auto w-full">
          <p className="text-[11px] font-mono font-medium tracking-wide text-white/30 uppercase">{t('footer.copyright')}</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[11px] font-mono font-medium tracking-wide text-white/30 uppercase transition-colors hover:text-white">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-[11px] font-mono font-medium tracking-wide text-white/30 uppercase transition-colors hover:text-white">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
