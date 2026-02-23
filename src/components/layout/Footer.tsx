import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';
import { Mail, MapPin, Phone } from 'lucide-react';

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
    <footer className="mt-20 rounded-t-[3rem] border-t border-white/5 bg-base relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      <div className="container-tight section-padding pb-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Positioning */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="max-w-xs text-sm leading-relaxed text-text-primary/60">
              Sovereign IT & AI Transformation Partner serving Kuwait & the GCC.
              Engineering enterprise-grade digital infrastructure.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-primary/60">
                <MapPin className="h-4 w-4 shrink-0 text-brand-blue" />
                <span>Kuwait City, Kuwait</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-primary/60">
                <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                <span>executive@ticodetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-primary/60">
                <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
                <span dir="ltr">+965 XXXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-primary/90">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-text-primary/60 transition-colors hover:text-brand-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-primary/90">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-text-primary/60 transition-colors hover:text-brand-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-primary/90">{t('footer.industries')}</h4>
            <ul className="space-y-3">
              {industryLinksData.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-text-primary/60 transition-colors hover:text-brand-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Status */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-400">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-gray-400 transition-colors hover:text-white">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-xs text-gray-400 transition-colors hover:text-white">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
