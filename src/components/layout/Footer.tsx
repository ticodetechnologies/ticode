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
    <footer className="border-t border-white/5 footer-gradient-border bg-[#0B0F19]">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo className="mb-4" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t('footer.description')}
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Kuwait City, Kuwait
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@ticodetech.com
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +965 XXXXXXXX
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{t('footer.industries')}</h4>
            <ul className="space-y-2">
              {industryLinksData.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
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
