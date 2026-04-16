import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import {
  Menu, X, ChevronDown, ArrowRight,
  Laptop, BrainCircuit, Code, LineChart, Share2,
  Kanban, Network, Database, Cpu, Bot,
  CloudCog, Megaphone, Users, TestTube, Globe,
  Shirt, GraduationCap, TrendingUp, ShoppingCart,
  Truck, Shield, Droplet, Dumbbell,
  Stethoscope, Home, Train, Landmark, Scale
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const { toggleLanguage, isRTL } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCluster, setActiveCluster] = useState<string>("AI & Automation");
  const [activeIndustryCluster, setActiveIndustryCluster] = useState<string>("Finance & Legal");
  const navigate = useNavigate();
  const location = useLocation();
  const isLightHero = location.pathname.startsWith('/industries');

  // Magnetic Button Logic
  const magneticRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magneticRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = magneticRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const isCurrentPath = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const NavLink = ({ to, children, isActive = false }: { to: string, children: React.ReactNode, isActive?: boolean }) => (
    <Link to={to} className={cn(
      "relative group px-1.5 py-1 text-[13px] tracking-wide font-semibold transition-colors whitespace-nowrap",
      (isScrolled || isLightHero) ? "text-slate-600 hover:text-brand-blue" : "text-slate-300 hover:text-white",
      isActive && ((isScrolled || isLightHero) ? "text-brand-blue" : "text-accent-cyan")
    )}>
      {children}
      <span className={cn(
        "absolute -bottom-1 start-1.5 end-1.5 h-[2px] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
        isRTL ? "origin-right" : "origin-left",
        "bg-brand-blue",
        isActive ? "scale-x-100" : "scale-x-0"
      )}></span>
    </Link>
  );

  const ServicesMegaMenu = ({ title, isActive = false }: { title: string, isActive?: boolean }) => {
    const serviceClusters = [
      {
        id: "AI & Automation",
        icon: <BrainCircuit className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        services: [
          { label: "AI & Machine Learning", href: "/services/ai-machine-learning", description: "Predictive models and advanced algorithms.", icon: <Cpu className="w-5 h-5 text-brand-blue" /> },
          { label: "AI Agents & Voice AI", href: "/services/ai-agents", description: "Intelligent conversational agents and automation.", icon: <BrainCircuit className="w-5 h-5 text-brand-blue" /> },
          { label: "Intelligent Systems & Automation", href: "/services/intelligent-systems", description: "Streamlining operations with smart systems.", icon: <Bot className="w-5 h-5 text-brand-blue" /> },
          { label: "Data & Analytics", href: "/services/data-analytics", description: "Actionable insights from your enterprise data.", icon: <LineChart className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Executive Briefing",
          title: "The Future of AI in Enterprise",
          description: "Discover how leading organizations are integrating sovereign AI infrastructure to drive unprecedented efficiency.",
          action: "Read Report",
          colors: "from-[#0A1929] to-[#040B13]",
          blurs: "bg-brand-blue/5",
          accent: "bg-emerald-500/5",
          dot: "bg-brand-blue"
        }
      },
      {
        id: "Engineering",
        icon: <Code className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        services: [
          { label: "Software Development", href: "/services/software-development", description: "Custom software solutions built to scale.", icon: <Code className="w-5 h-5 text-brand-blue" /> },
          { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure", description: "Scalable compute and storage solutions.", icon: <CloudCog className="w-5 h-5 text-brand-blue" /> },
          { label: "Software Testing & QA", href: "/services/software-testing", description: "Rigorous quality assurance and testing.", icon: <TestTube className="w-5 h-5 text-brand-blue" /> },
          { label: "Network Solutions", href: "/services/network-solutions", description: "Secure, reliable enterprise networking.", icon: <Network className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Technical Guide",
          title: "Building Resilient Systems",
          description: "Learn the core principles of scalable, cloud-native architecture that powers modern tech giants.",
          action: "Download Guide",
          colors: "from-[#0A1F1C] to-[#040A09]",
          blurs: "bg-emerald-500/5",
          accent: "bg-brand-blue/5",
          dot: "bg-emerald-500"
        }
      },
      {
        id: "Digital Strategy",
        icon: <LineChart className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        services: [
          { label: "IT Consulting", href: "/services/it-consulting", description: "Strategic tech guidance to accelerate growth.", icon: <Laptop className="w-5 h-5 text-brand-blue" /> },
          { label: "Digital Marketing", href: "/services/digital-marketing", description: "Growth-driven digital acquisition campaigns.", icon: <Megaphone className="w-5 h-5 text-brand-blue" /> },
          { label: "Social Media Management", href: "/services/social-media", description: "Brand building and engagement strategies.", icon: <Share2 className="w-5 h-5 text-brand-blue" /> },
          { label: "IT Staffing", href: "/services/it-staffing", description: "Sourcing elite tech talent for your teams.", icon: <Users className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Strategy Playbook",
          title: "Digital Transformation 2.0",
          description: "A framework for executive teams to navigate complex digital overhauls successfully and mitigate risk.",
          action: "Get Playbook",
          colors: "from-[#1F0A19] to-[#0A040B]",
          blurs: "bg-purple-500/5",
          accent: "bg-brand-blue/5",
          dot: "bg-purple-500"
        }
      },
      {
        id: "Enterprise Solutions",
        icon: <Database className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        services: [
          { label: "Project Management", href: "/services/project-management", description: "Executing complex tech initiatives seamlessly.", icon: <Kanban className="w-5 h-5 text-brand-blue" /> },
          { label: "Domain & Email Services", href: "/services/domain-email", description: "Enterprise-grade web presence solutions.", icon: <Globe className="w-5 h-5 text-brand-blue" /> },
          { label: "Data Entry Services", href: "/services/data-entry", description: "Accurate and efficient data processing.", icon: <Database className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Case Study",
          title: "Scaling Global Operations",
          description: "How we helped a Fortune 500 company reduce operational overhead by 40% using automated workflows.",
          action: "Read Case Study",
          colors: "from-[#191A0A] to-[#0B0B04]",
          blurs: "bg-amber-500/5",
          accent: "bg-emerald-500/5",
          dot: "bg-amber-500"
        }
      }
    ];

    const currentCluster = serviceClusters.find(c => c.id === activeCluster) || serviceClusters[0];
    const currentServices = currentCluster.services;

    return (
      <div
        className={cn(
          "h-full flex items-center group px-1 text-[13px] tracking-wide font-semibold transition-colors cursor-pointer",
          (isScrolled || isLightHero) ? "text-slate-600 hover:text-brand-blue" : "text-slate-300 hover:text-white",
          isActive && ((isScrolled || isLightHero) ? "text-brand-blue" : "text-accent-cyan")
        )}
        onMouseEnter={() => setActiveDropdown(title)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <span className="relative flex items-center gap-1.5 whitespace-nowrap">
          {title}
          <ChevronDown className={cn("w-3.5 h-3.5 group-hover:rotate-180 transition-all duration-300", (isScrolled || isLightHero) ? "text-slate-400 group-hover:text-brand-blue" : "text-slate-400 group-hover:text-white")} />
          <span className={cn(
            "absolute -bottom-1 start-0 end-5 h-[2px] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
            isRTL ? "origin-right" : "origin-left",
            (isScrolled || isLightHero) ? "bg-brand-blue" : "bg-accent-cyan",
            isActive ? "scale-x-100" : "scale-x-0"
          )}></span>
        </span>

        {/* Mega Menu Dropdown */}
        <div className={cn(
          "absolute top-full start-0 pt-6 -mt-4 transition-all duration-300 w-[1140px] max-w-[calc(100vw-2rem)]",
          activeDropdown === title ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        )}>
          <div className="bg-[#0B1623]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex text-start relative before:absolute before:-top-2 before:start-0 before:w-full before:h-4 before:bg-transparent">

            {/* Panel 1: Service Clusters (Left Sidebar) */}
            <div className="w-[240px] bg-[#070D15]/80 p-6 border-e border-white/5 flex flex-col">
              <h3 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-4">Service Clusters</h3>
              <div className="flex flex-col gap-1">
                {serviceClusters.map((cluster) => (
                  <button
                    key={cluster.id}
                    onMouseEnter={() => setActiveCluster(cluster.id)}
                    className={cn(
                      "text-start px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all flex items-center justify-between group",
                      activeCluster === cluster.id ? "text-white bg-brand-blue/10 border border-brand-blue/20" : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                    )}
                  >
                    {cluster.id}
                    <ArrowRight className={cn(
                      "w-3.5 h-3.5 transition-opacity",
                      activeCluster === cluster.id ? "opacity-100 text-brand-blue" : "opacity-0 group-hover:opacity-50"
                    )} />
                  </button>
                ))}
              </div>
            </div>

            {/* Panel 2: Core Services List (Middle) */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-4 mt-1">
                <h3 className="text-xs font-bold text-slate-300 tracking-widest uppercase">Featured Capabilities</h3>
                <Link to="/services" className="text-[11px] font-semibold text-brand-blue hover:text-blue-400 transition-colors flex items-center gap-1 group" onClick={() => setActiveDropdown(null)}>
                  View All Services <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Strict Grid Layout with Animated Transitions */}
              <motion.div
                key={activeCluster}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 min-h-[220px]"
              >
                {currentServices.map((item, i) => (
                  <Link key={i} to={item.href} className="group block" onClick={() => setActiveDropdown(null)}>
                    <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.015] border border-white/5 hover:bg-brand-blue/[0.03] hover:border-brand-blue/30 transition-all h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue/0 group-hover:from-brand-blue/5 transition-all duration-500" />
                      <div className="flex items-center gap-3 relative z-10 w-full">
                        {/* Glowing Icon Treatment */}
                        <div className="relative shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all">
                          <div className="absolute inset-0 bg-brand-blue/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative text-slate-400 group-hover:text-brand-blue transition-colors duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <h4 className="text-[14px] font-semibold text-slate-200 group-hover:text-white transition-colors">{item.label}</h4>
                      </div>
                      <p className="text-[12px] text-slate-500 ps-11 leading-snug group-hover:text-slate-400 transition-colors relative z-10">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Panel 3: Dynamic Executive Briefing Teaser (Right) */}
            <motion.div
              key={`featured-${activeCluster}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "w-[300px] bg-gradient-to-br border-s border-white/5 p-6 flex flex-col items-start relative overflow-hidden",
                currentCluster.featured.colors
              )}
            >
              {/* Abstract Animated Backgrounds */}
              <div className={cn("absolute top-0 end-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none transition-colors duration-700", currentCluster.featured.blurs)} />
              <div className={cn("absolute -bottom-20 -start-20 w-48 h-48 blur-[80px] rounded-full pointer-events-none transition-colors duration-700", currentCluster.featured.accent)} />

              <h3 className={cn("text-[10px] font-bold tracking-widest uppercase mb-4 mt-1 relative z-10 flex items-center gap-2", currentCluster.featured.dot.replace('bg-', 'text-'))}>
                <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", currentCluster.featured.dot)}></span>
                {currentCluster.featured.tag}
              </h3>

              <div className="relative z-10 flex-1 flex flex-col justify-center w-full">
                <h4 className="text-white font-bold text-[20px] leading-tight mb-3">{currentCluster.featured.title}</h4>
                <p className="text-slate-400 text-[13px] mb-6 leading-relaxed">{currentCluster.featured.description}</p>

                <div className="space-y-3 w-full">
                  <Button className="w-full bg-white hover:bg-slate-100 text-[#0B1623] rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-between group">
                    {currentCluster.featured.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="w-full bg-transparent hover:bg-white/5 text-white border border-white/10 rounded-full font-semibold transition-all">
                    Book Strategy Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  const IndustriesMegaMenu = ({ title, isActive = false }: { title: string, isActive?: boolean }) => {
    const industryClusters = [
      {
        id: "Finance & Legal",
        icon: <Landmark className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        industries: [
          { label: "Finance & Banking", href: "/industries/finance", description: "Secure, compliant Fintech infrastructure.", icon: <Landmark className="w-5 h-5 text-brand-blue" /> },
          { label: "Insurance", href: "/industries/insurance", description: "Risk modeling and claim automation.", icon: <Shield className="w-5 h-5 text-brand-blue" /> },
          { label: "Legal Business", href: "/industries/legal", description: "Case management and eDiscovery systems.", icon: <Scale className="w-5 h-5 text-brand-blue" /> },
          { label: "Real Estate", href: "/industries/real-estate", description: "Proptech platforms and smart building integrations.", icon: <Home className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Security Whitepaper",
          title: "Zero-Trust Architecture",
          description: "Read our comprehensive guide on securing financial data using modern zero-trust principles.",
          action: "Download PDF",
          colors: "from-[#0A1129] to-[#040613]",
          blurs: "bg-blue-500/5",
          accent: "bg-brand-blue/5",
          dot: "bg-blue-500"
        }
      },
      {
        id: "Retail & Supply",
        icon: <ShoppingCart className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        industries: [
          { label: "Retail & eCommerce", href: "/industries/retail", description: "Omnichannel platforms and personalization engines.", icon: <ShoppingCart className="w-5 h-5 text-brand-blue" /> },
          { label: "Supply Chain", href: "/industries/supply-chain", description: "End-to-end logistics tracking and predictive inventory.", icon: <Truck className="w-5 h-5 text-brand-blue" /> },
          { label: "Fashion & Apparel", href: "/industries/fashion", description: "Digital showrooms and agile PLM software.", icon: <Shirt className="w-5 h-5 text-brand-blue" /> },
          { label: "Transportation", href: "/industries/transportation", description: "Fleet management and intelligent routing.", icon: <Train className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Success Story",
          title: "Next-Gen Logistics",
          description: "See how we reduced supply chain latency by 30% for a leading global distributor.",
          action: "View Case Study",
          colors: "from-[#19110A] to-[#0B0604]",
          blurs: "bg-orange-500/5",
          accent: "bg-brand-blue/5",
          dot: "bg-orange-500"
        }
      },
      {
        id: "Health & Science",
        icon: <Stethoscope className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        industries: [
          { label: "Healthcare", href: "/industries/healthcare", description: "Telemedicine platforms and secure EHR systems.", icon: <Stethoscope className="w-5 h-5 text-brand-blue" /> },
          { label: "Education & EdTech", href: "/industries/education", description: "Virtual classrooms and personalized learning algorithms.", icon: <GraduationCap className="w-5 h-5 text-brand-blue" /> },
          { label: "Sports & Fitness", href: "/industries/sports", description: "Performance analytics and fan engagement apps.", icon: <Dumbbell className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Innovation Report",
          title: "AI in Diagnostics",
          description: "Explore the impact of machine learning on early disease detection and operational efficiency.",
          action: "Read Report",
          colors: "from-[#0A1A14] to-[#040B08]",
          blurs: "bg-emerald-500/5",
          accent: "bg-teal-500/5",
          dot: "bg-emerald-500"
        }
      },
      {
        id: "Creative & Media",
        icon: <Megaphone className="w-4 h-4 opacity-70 group-hover:opacity-100" />,
        industries: [
          { label: "Marketing & Media", href: "/industries/marketing", description: "AdTech solutions and content distribution networks.", icon: <TrendingUp className="w-5 h-5 text-brand-blue" /> }
        ],
        featured: {
          tag: "Industry Insight",
          title: "The Cookieless Future",
          description: "Navigating first-party data strategies and programmatic advertising in a privacy-first world.",
          action: "Read Article",
          colors: "from-[#1F0A1F] to-[#0A040A]",
          blurs: "bg-fuchsia-500/5",
          accent: "bg-purple-500/5",
          dot: "bg-fuchsia-500"
        }
      }
    ];

    const currentCluster = industryClusters.find(c => c.id === activeIndustryCluster) || industryClusters[0];
    const currentIndustries = currentCluster.industries;

    return (
      <div
        className={cn(
          "h-full flex items-center group px-1 text-[13px] tracking-wide font-semibold transition-colors cursor-pointer",
          (isScrolled || isLightHero) ? "text-slate-600 hover:text-brand-blue" : "text-slate-300 hover:text-white",
          isActive && ((isScrolled || isLightHero) ? "text-brand-blue" : "text-accent-cyan")
        )}
        onMouseEnter={() => setActiveDropdown(title)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <span className="relative flex items-center gap-1.5 whitespace-nowrap">
          {title}
          <ChevronDown className={cn("w-3.5 h-3.5 group-hover:rotate-180 transition-all duration-300", (isScrolled || isLightHero) ? "text-slate-400 group-hover:text-brand-blue" : "text-slate-400 group-hover:text-white")} />
          <span className={cn(
            "absolute -bottom-1 start-0 end-5 h-[2px] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
            isRTL ? "origin-right" : "origin-left",
            (isScrolled || isLightHero) ? "bg-brand-blue" : "bg-accent-cyan",
            isActive ? "scale-x-100" : "scale-x-0"
          )}></span>
        </span>

        {/* Mega Menu Dropdown */}
        <div className={cn(
          "absolute top-full start-0 pt-6 -mt-4 transition-all duration-300 w-[1140px] max-w-[calc(100vw-2rem)]",
          activeDropdown === title ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        )}>
          <div className="bg-[#0B1623]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex text-start relative before:absolute before:-top-2 before:start-0 before:w-full before:h-4 before:bg-transparent">

            {/* Panel 1: Industry Clusters (Left Sidebar) */}
            <div className="w-[240px] bg-[#070D15]/80 p-6 border-e border-white/5 flex flex-col">
              <h3 className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-4">Focus Sectors</h3>
              <div className="flex flex-col gap-1">
                {industryClusters.map((cluster) => (
                  <button
                    key={cluster.id}
                    onMouseEnter={() => setActiveIndustryCluster(cluster.id)}
                    className={cn(
                      "text-start px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all flex items-center justify-between group",
                      activeIndustryCluster === cluster.id ? "text-white bg-brand-blue/10 border border-brand-blue/20" : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className={cn("transition-colors", activeIndustryCluster === cluster.id ? "text-brand-blue" : "text-slate-500 group-hover:text-slate-400")}>{cluster.icon}</span>
                      {cluster.id}
                    </div>
                    <ArrowRight className={cn(
                      "w-3.5 h-3.5 transition-opacity",
                      activeIndustryCluster === cluster.id ? "opacity-100 text-brand-blue" : "opacity-0 group-hover:opacity-50"
                    )} />
                  </button>
                ))}
              </div>
            </div>

            {/* Panel 2: Core Industries List (Middle) */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-4 mt-1">
                <h3 className="text-xs font-bold text-slate-300 tracking-widest uppercase">Specialized Domains</h3>
                <Link to="/industries" className="text-[11px] font-semibold text-brand-blue hover:text-blue-400 transition-colors flex items-center gap-1 group" onClick={() => setActiveDropdown(null)}>
                  View All Industries <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Strict Grid Layout with Animated Transitions */}
              <motion.div
                key={activeIndustryCluster}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 min-h-[220px]"
              >
                {currentIndustries.map((item, i) => (
                  <Link key={i} to={item.href} className="group block" onClick={() => setActiveDropdown(null)}>
                    <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-white/[0.015] border border-white/5 hover:bg-brand-blue/[0.03] hover:border-brand-blue/30 transition-all h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue/0 group-hover:from-brand-blue/5 transition-all duration-500" />
                      <div className="flex items-center gap-3 relative z-10 w-full">
                        {/* Glowing Icon Treatment */}
                        <div className="relative shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all">
                          <div className="absolute inset-0 bg-brand-blue/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative text-slate-400 group-hover:text-brand-blue transition-colors duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <h4 className="text-[14px] font-semibold text-slate-200 group-hover:text-white transition-colors">{item.label}</h4>
                      </div>
                      <p className="text-[12px] text-slate-500 ps-11 leading-snug group-hover:text-slate-400 transition-colors relative z-10">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Panel 3: Dynamic Industry Insight (Right) */}
            <motion.div
              key={`featured-${activeIndustryCluster}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "w-[300px] bg-gradient-to-br border-s border-white/5 p-6 flex flex-col items-start relative overflow-hidden",
                currentCluster.featured.colors
              )}
            >
              {/* Abstract Animated Backgrounds */}
              <div className={cn("absolute top-0 end-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none transition-colors duration-700", currentCluster.featured.blurs)} />
              <div className={cn("absolute -bottom-20 -start-20 w-48 h-48 blur-[80px] rounded-full pointer-events-none transition-colors duration-700", currentCluster.featured.accent)} />

              <h3 className={cn("text-[10px] font-bold tracking-widest uppercase mb-4 mt-1 relative z-10 flex items-center gap-2", currentCluster.featured.dot.replace('bg-', 'text-'))}>
                <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", currentCluster.featured.dot)}></span>
                {currentCluster.featured.tag}
              </h3>

              <div className="relative z-10 flex-1 flex flex-col justify-center w-full">
                <h4 className="text-white font-bold text-[20px] leading-tight mb-3">{currentCluster.featured.title}</h4>
                <p className="text-slate-400 text-[13px] mb-6 leading-relaxed">{currentCluster.featured.description}</p>

                <div className="space-y-3 w-full">
                  <Button className="w-full bg-white hover:bg-slate-100 text-[#0B1623] rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all flex items-center justify-between group">
                    {currentCluster.featured.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button className="w-full bg-transparent hover:bg-white/5 text-white border border-white/10 rounded-full font-semibold transition-all">
                    Book Strategy Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  const NavDropdown = ({ title, items, isActive = false, columns = 1, rows }: { title: string, items: { label: string, href: string }[], isActive?: boolean, columns?: number, rows?: number }) => (
    <div
      className={cn(
        "relative group px-1 py-1 text-[13px] tracking-wide font-semibold transition-colors cursor-pointer flex items-center gap-1",
        (isScrolled || isLightHero) ? "text-slate-600 hover:text-brand-blue" : "text-slate-300 hover:text-white",
        isActive && "text-brand-blue"
      )}
      onMouseEnter={() => setActiveDropdown(title)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {title}
      <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />
      <span className={cn("absolute -bottom-1 start-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full", "bg-brand-blue", isActive ? "w-full" : "w-0")}></span>

      {/* Dropdown Menu */}
      <div className={cn(
        "absolute top-full start-0 pt-6 transition-all duration-300",
        columns > 1 ? "w-[500px]" : "w-48",
        activeDropdown === title ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
      )}>
        <div
          className={cn(
            "bg-[#111F2E]/95 backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl py-3 px-2 grid gap-1 gap-x-4",
            columns > 1 ? "grid-cols-2 grid-flow-col" : "flex flex-col"
          )}
          style={columns > 1 && rows ? { gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` } : undefined}
        >
          {items.map((item, i) => (
            <Link key={i} to={item.href} className="px-4 py-2.5 text-[13px] font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const navItemClass = cn("flex items-center gap-1 relative group px-1 py-1 text-[13px] tracking-wide font-semibold transition-colors pb-8 -mb-8 cursor-pointer", "text-slate-200 hover:text-white");

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state (white header) immediately upon scroll
      const scrollThreshold = 20;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 start-0 end-0 z-50 transition-all duration-500 border-b",
      isScrolled
        ? "py-4 bg-white/90 backdrop-blur-xl saturate-150 border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        : "py-6 bg-transparent border-transparent"
    )}>
      <div className="container-tight relative flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className={cn(
          "flex items-center gap-2 shrink-0 pe-4 lg:pe-8 transition-all hover:opacity-80",
          !isScrolled && !isLightHero && "brightness-0 invert"
        )}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center h-full px-4">
          <nav className="h-full flex items-center gap-6 xl:gap-8 shrink-0">
            <NavLink to="/" isActive={isCurrentPath('/')}>{t('nav.home')}</NavLink>
            <ServicesMegaMenu
              title={t('nav.services')}
              isActive={isCurrentPath('/services')}
            />
            <IndustriesMegaMenu
              title={t('nav.industries')}
              isActive={isCurrentPath('/industries')}
            />
            <NavLink to="/ai-solutions" isActive={isCurrentPath('/ai-solutions')}>{t('nav.aiSolutions')}</NavLink>
            <NavLink to="/case-studies" isActive={isCurrentPath('/case-studies')}>{t('nav.caseStudies')}</NavLink>
            <NavLink to="/insights" isActive={isCurrentPath('/insights')}>{t('nav.insights')}</NavLink>
            <NavLink to="/about" isActive={isCurrentPath('/about')}>{t('nav.about')}</NavLink>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <button
            onClick={toggleLanguage}
            aria-label={isRTL ? 'Switch to English' : 'التبديل إلى العربية'}
            className={cn(
              "flex items-center justify-center gap-1.5 rounded-full transition-all text-[12px] tracking-wide font-bold",
              "h-9 w-9 sm:h-auto sm:w-auto sm:px-3 sm:py-1.5 shrink-0",
              (isScrolled || isLightHero)
                ? "text-brand-blue bg-brand-blue/10 hover:bg-brand-blue/20"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            )}
          >
            <Globe className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="hidden sm:inline-block">{t('nav.langToggle')}</span>
          </button>

          <div className={cn("w-px h-5 shrink-0", (isScrolled || isLightHero) ? "bg-slate-200" : "bg-white/10")} />

          <motion.div
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="hidden lg:block z-10"
          >
            <Button
              ref={magneticRef}
              onMouseMove={handleMouse}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate('/contact')}
              className={cn(
                "relative overflow-hidden group rounded-full px-7 py-5 font-bold text-[13px] tracking-wider transition-all border border-transparent bg-brand-blue text-white",
                "shadow-[0_4px_14px_0_rgba(47,107,255,0.39)] hover:shadow-[0_6px_20px_rgba(47,107,255,0.23)] hover:-translate-y-0.5"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('nav.bookConsultation')}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-blue-600 to-brand-blue pointer-events-none" />
            </Button>
          </motion.div>
          <button
            className={cn("lg:hidden transition-colors", (isScrolled || isLightHero) ? "text-slate-800 hover:text-brand-blue" : "text-slate-300 hover:text-white")}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-white/95 backdrop-blur-xl lg:hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-t border-slate-100">
          <div className="container-tight space-y-1 py-4">
            <Link to="/" className="block rounded-md px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {t('nav.home')}
            </Link>

            <div className="rounded-md px-4 py-3 hover:bg-slate-50">
              <div
                className="flex items-center justify-between text-[15px] font-semibold text-slate-700 cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              >
                {t('nav.services')}
                <ChevronDown className={cn("w-4 h-4 transition-transform text-slate-500", activeDropdown === 'services' && "rotate-180")} />
              </div>
              {activeDropdown === 'services' && (
                <div className="flex flex-col gap-2 mt-3 ps-4 border-s border-slate-200">
                  <Link to="/services/it-consulting" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>IT Consulting</Link>
                  <Link to="/services/ai-agents" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>AI Agents & Voice AI</Link>
                  <Link to="/services/software-development" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Software Development</Link>
                  <Link to="/services/data-analytics" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Data & Analytics</Link>
                  <Link to="/services/social-media" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Social Media Management</Link>
                  <Link to="/services/project-management" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Project Management</Link>
                  <Link to="/services/network-solutions" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Network Solutions</Link>
                  <Link to="/services/data-entry" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Data Entry Services</Link>
                  <Link to="/services/ai-machine-learning" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>AI & Machine Learning</Link>
                  <Link to="/services/intelligent-systems" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Intelligent Systems & Automation</Link>
                  <Link to="/services/cloud-infrastructure" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Cloud & Infrastructure</Link>
                  <Link to="/services/digital-marketing" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Digital Marketing</Link>
                  <Link to="/services/it-staffing" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>IT Staffing</Link>
                  <Link to="/services/software-testing" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Software Testing & QA</Link>
                  <Link to="/services/domain-email" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Domain & Email Services</Link>
                </div>
              )}
            </div>

            <div className="rounded-md px-4 py-3 hover:bg-slate-50">
              <div
                className="flex items-center justify-between text-[15px] font-semibold text-slate-700 cursor-pointer"
                onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
              >
                {t('nav.industries')}
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'industries' && "rotate-180")} />
              </div>
              {activeDropdown === 'industries' && (
                <div className="flex flex-col gap-2 mt-3 ps-4 border-s border-slate-200">
                  <Link to="/industries/fashion" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Fashion</Link>
                  <Link to="/industries/education" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Education</Link>
                  <Link to="/industries/marketing" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Marketing</Link>
                  <Link to="/industries/retail" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Retail</Link>
                  <Link to="/industries/supply-chain" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Supply Chain</Link>
                  <Link to="/industries/insurance" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Insurance</Link>
                  <Link to="/industries/sports" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Sports</Link>
                  <Link to="/industries/healthcare" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Healthcare</Link>
                  <Link to="/industries/real-estate" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Real Estate</Link>
                  <Link to="/industries/transportation" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Transportation</Link>
                  <Link to="/industries/finance" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Finance</Link>
                  <Link to="/industries/legal" className="text-sm font-medium text-slate-500 hover:text-brand-blue" onClick={() => setMobileOpen(false)}>Legal Business</Link>
                </div>
              )}
            </div>

            <Link to="/ai-solutions" className="block rounded-md px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {t('nav.aiSolutions')}
            </Link>
            <Link to="/case-studies" className="block rounded-md px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {t('nav.caseStudies')}
            </Link>
            <Link to="/about" className="block rounded-md px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {t('nav.about')}
            </Link>
            <Link to="/insights" className="block rounded-md px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {t('nav.insights')}
            </Link>
            <Link to="/contact" className="block rounded-md px-4 py-3 text-[15px] font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {t('nav.contact')}
            </Link>
            <div className="pt-4 px-2">
              <Button onClick={() => { navigate('/contact'); setMobileOpen(false); }} className="w-full bg-brand-blue hover:bg-blue-600 text-white rounded-full py-6 font-bold shadow-[0_4px_14px_0_rgba(47,107,255,0.39)] hover:shadow-[0_6px_20px_rgba(47,107,255,0.23)] transition-all">
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
