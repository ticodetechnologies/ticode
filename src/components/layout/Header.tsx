import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const { t } = useTranslation();
  const { toggleLanguage, isRTL } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const serviceLinks = [
    { key: 'it-consulting', label: t('nav.serviceLinks.itConsulting') },
    { key: 'ai-machine-learning', label: t('nav.serviceLinks.aiMachineLearning') },
    { key: 'ai-agents-voice-ai', label: t('nav.serviceLinks.aiAgentsVoiceAi') },
    { key: 'intelligent-systems-automation', label: t('nav.serviceLinks.intelligentSystemsAutomation') },
    { key: 'software-development', label: t('nav.serviceLinks.softwareDevelopment') },
    { key: 'cloud-infrastructure', label: t('nav.serviceLinks.cloudInfrastructure') },
    { key: 'data-analytics', label: t('nav.serviceLinks.dataAnalytics') },
    { key: 'digital-marketing', label: t('nav.serviceLinks.digitalMarketing') },
    { key: 'social-media-management', label: t('nav.serviceLinks.socialMediaManagement') },
    { key: 'it-staffing', label: t('nav.serviceLinks.itStaffing') },
    { key: 'project-management', label: t('nav.serviceLinks.projectManagement') },
    { key: 'software-testing-qa', label: t('nav.serviceLinks.softwareTestingQa') },
    { key: 'network-solutions', label: t('nav.serviceLinks.networkSolutions') },
    { key: 'domain-email-services', label: t('nav.serviceLinks.domainEmailServices') },
    { key: 'data-entry-services', label: t('nav.serviceLinks.dataEntryServices') },
  ];
  const industryLinks = [
    { key: 'fashion', label: t('nav.industryLinks.fashion') },
    { key: 'sports', label: t('nav.industryLinks.sports') },
    { key: 'education', label: t('nav.industryLinks.education') },
    { key: 'healthcare', label: t('nav.industryLinks.healthcare') },
    { key: 'marketing', label: t('nav.industryLinks.marketing') },
    { key: 'real-estate', label: t('nav.industryLinks.realEstate') },
    { key: 'retail', label: t('nav.industryLinks.retail') },
    { key: 'transportation', label: t('nav.industryLinks.transportation') },
    { key: 'supply-chain', label: t('nav.industryLinks.supplyChain') },
    { key: 'finance', label: t('nav.industryLinks.finance') },
    { key: 'insurance', label: t('nav.industryLinks.insurance') },
    { key: 'legal', label: t('nav.industryLinks.legalBusiness') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-[#F8FAFC]/95 backdrop-blur-md">
      <div className="container-tight flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
            {t('nav.home')}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              {t('nav.services')} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full start-0 mt-1 w-[540px] rounded-lg border border-border bg-popover p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.key}
                      to={`/services/${s.key}`}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
              {t('nav.industries')} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {activeDropdown === 'industries' && (
              <div className="absolute top-full start-0 mt-1 w-[400px] rounded-lg border border-border bg-popover p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.key}
                      to={`/industries/${ind.key}`}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/ai-solutions" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
            {t('nav.aiSolutions')}
          </Link>
          <Link to="/case-studies" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
            {t('nav.caseStudies')}
          </Link>
          <Link to="/insights" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
            {t('nav.insights')}
          </Link>
          <Link to="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            {t('nav.langToggle')}
          </button>
          <Button
            onClick={() => navigate('/contact')}
            size="sm"
            className="hidden lg:inline-flex"
          >
            {t('nav.bookConsultation')}
          </Button>
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-[#F8FAFC] lg:hidden">
          <div className="container-tight space-y-1 py-4">
            <Link to="/" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t('nav.home')}
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                {t('nav.services')} <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="space-y-1 ps-4 pt-1">
                {serviceLinks.map((s) => (
                  <Link key={s.key} to={`/services/${s.key}`} className="block rounded-md px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                {t('nav.industries')} <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="space-y-1 ps-4 pt-1">
                {industryLinks.map((ind) => (
                  <Link key={ind.key} to={`/industries/${ind.key}`} className="block rounded-md px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
                    {ind.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/ai-solutions" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t('nav.aiSolutions')}
            </Link>
            <Link to="/case-studies" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t('nav.caseStudies')}
            </Link>
            <Link to="/about" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              {t('nav.contact')}
            </Link>
            <div className="pt-2">
              <Button onClick={() => { navigate('/contact'); setMobileOpen(false); }} className="w-full">
                {t('nav.bookConsultation')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
