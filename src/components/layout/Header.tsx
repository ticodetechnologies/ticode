import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-[600ms] ease-out",
      isScrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.06)]" : "bg-transparent py-8 border-b-0"
    )}>
      <div className="container-tight flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link to="/" className={cn("text-[15px] font-medium transition-colors hover:text-brand-blue", isScrolled ? "text-slate-900" : "text-white")}>
            {t('nav.home')}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={cn("flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-brand-blue pb-8 -mb-8", isScrolled ? "text-slate-900" : "text-white")}>
              {t('nav.services')} <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-[calc(100%+0.5rem)] start-0 mt-0 w-[580px] rounded-2xl border border-black/5 bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.key}
                      to={`/services/${s.key}`}
                      className="group flex flex-col rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-brand-blue"
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
            <button className={cn("flex items-center gap-1.5 text-[15px] font-medium transition-colors hover:text-brand-blue pb-8 -mb-8", isScrolled ? "text-slate-900" : "text-white")}>
              {t('nav.industries')} <ChevronDown className="h-4 w-4 opacity-70" />
            </button>
            {activeDropdown === 'industries' && (
              <div className="absolute top-[calc(100%+0.5rem)] start-0 mt-0 w-[480px] rounded-2xl border border-black/5 bg-white p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.key}
                      to={`/industries/${ind.key}`}
                      className="group flex flex-col rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:text-brand-blue"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/ai-solutions" className={cn("text-[15px] font-medium transition-colors hover:text-brand-blue", isScrolled ? "text-slate-900" : "text-white")}>
            {t('nav.aiSolutions')}
          </Link>
          <Link to="/case-studies" className={cn("text-[15px] font-medium transition-colors hover:text-brand-blue", isScrolled ? "text-slate-900" : "text-white")}>
            {t('nav.caseStudies')}
          </Link>
          <Link to="/insights" className={cn("text-[15px] font-medium transition-colors hover:text-brand-blue", isScrolled ? "text-slate-900" : "text-white")}>
            {t('nav.insights')}
          </Link>
          <Link to="/about" className={cn("text-[15px] font-medium transition-colors hover:text-brand-blue", isScrolled ? "text-slate-900" : "text-white")}>
            {t('nav.about')}
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className={cn("rounded-md px-3 py-2 text-[15px] font-medium transition-colors hover:bg-white/10", isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white")}
          >
            {t('nav.langToggle')}
          </button>
          <Button
            onClick={() => navigate('/contact')}
            className={cn(
              "hidden lg:inline-flex relative overflow-hidden group rounded-full px-8 py-6 font-semibold tracking-wide transition-all border-none hover:-translate-y-0.5",
              isScrolled
                ? "bg-brand-blue text-white shadow-[0_8px_25px_-8px_rgba(45,107,255,0.6)] hover:shadow-[0_12px_30px_-10px_rgba(45,107,255,0.8)]"
                : "bg-white text-slate-900 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            )}
          >
            <span className="relative z-10">{t('nav.bookConsultation')}</span>
            <div className={cn("absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100", isScrolled ? "bg-gradient-to-r from-brand-blue-dark to-brand-blue" : "bg-white/90")} />
          </Button>
          <button
            className={cn("lg:hidden", isScrolled ? "text-slate-900" : "text-white")}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-white/95 backdrop-blur-md lg:hidden shadow-xl">
          <div className="container-tight space-y-1 py-4">
            <Link to="/" className="block rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              {t('nav.home')}
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100">
                {t('nav.services')} <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="space-y-1 ps-6 pt-2 pb-2">
                {serviceLinks.map((s) => (
                  <Link key={s.key} to={`/services/${s.key}`} className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100">
                {t('nav.industries')} <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="space-y-1 ps-6 pt-2 pb-2">
                {industryLinks.map((ind) => (
                  <Link key={ind.key} to={`/industries/${ind.key}`} className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
                    {ind.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link to="/ai-solutions" className="block rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              {t('nav.aiSolutions')}
            </Link>
            <Link to="/case-studies" className="block rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              {t('nav.caseStudies')}
            </Link>
            <Link to="/about" className="block rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="block rounded-md px-4 py-3 text-base font-bold text-slate-800 hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              {t('nav.contact')}
            </Link>
            <div className="pt-4 px-2">
              <Button onClick={() => { navigate('/contact'); setMobileOpen(false); }} className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white rounded-full py-6 font-bold shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all">
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
