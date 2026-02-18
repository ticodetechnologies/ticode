export interface IndustryData {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  relevantServices: string[];
  caseStudy: { challenge: string; strategy: string; implementation: string; outcome: string };
  calculatorFields: { id: string; label: string; type: 'select'; options: { label: string; value: string; multiplier: number }[] }[];
  calculatorBaseRate: number;
}

export const industries: IndustryData[] = [
  {
    slug: 'fashion',
    title: 'Fashion',
    headline: 'Digital Technology Solutions for Fashion & Apparel',
    summary: 'Transform your fashion business with AI-driven commerce platforms, inventory intelligence, and omnichannel experiences designed for the GCC luxury market.',
    challenges: [
      { title: 'Omnichannel Fragmentation', desc: 'Disconnected online and offline shopping experiences losing customers.' },
      { title: 'Inventory Management', desc: 'Seasonal demand volatility causing overstock and stockout issues.' },
      { title: 'Personalization Gap', desc: 'Generic shopping experiences failing to engage discerning GCC consumers.' },
      { title: 'Supply Chain Visibility', desc: 'Lack of real-time tracking across global supply chains.' },
    ],
    solutions: [
      { title: 'AI-Powered E-Commerce', desc: 'Intelligent product recommendations, visual search, and personalized shopping.' },
      { title: 'Inventory Intelligence', desc: 'Demand forecasting and automated replenishment systems.' },
      { title: 'Virtual Try-On', desc: 'AR-powered virtual fitting rooms for online shoppers.' },
      { title: 'Brand Analytics', desc: 'Social listening, trend analysis, and competitive intelligence dashboards.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'digital-marketing', 'data-analytics'],
    caseStudy: { challenge: 'A Kuwait-based fashion retailer with 15 stores struggled with disconnected online-offline experiences.', strategy: 'Unified commerce platform with AI-driven personalization and real-time inventory sync.', implementation: 'Custom e-commerce platform integrated with POS, ERP, and marketing automation over 6 months.', outcome: '45% increase in online revenue and 30% reduction in stockout incidents within the first quarter.' },
    calculatorFields: [
      { id: 'projectType', label: 'Project Type', type: 'select', options: [
        { label: 'E-Commerce Platform', value: 'ecom', multiplier: 1.5 },
        { label: 'Inventory System', value: 'inventory', multiplier: 1 },
        { label: 'Full Digital Transformation', value: 'full', multiplier: 3 },
      ]},
      { id: 'storeCount', label: 'Number of Stores', type: 'select', options: [
        { label: '1-5 stores', value: 'small', multiplier: 1 },
        { label: '5-20 stores', value: 'medium', multiplier: 1.5 },
        { label: '20+ stores', value: 'large', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 20000,
  },
  {
    slug: 'sports',
    title: 'Sports',
    headline: 'Sports Technology & Fan Engagement Platforms',
    summary: 'Elevate sports organizations with fan engagement platforms, performance analytics, and digital ticketing solutions built for the GCC sports industry.',
    challenges: [
      { title: 'Fan Engagement', desc: 'Limited digital touchpoints to connect with fans beyond match days.' },
      { title: 'Data Utilization', desc: 'Underutilized player and performance data for competitive advantage.' },
      { title: 'Revenue Diversification', desc: 'Over-reliance on ticket sales without digital revenue streams.' },
    ],
    solutions: [
      { title: 'Fan Engagement Platform', desc: 'Mobile-first platforms with gamification, content, and community features.' },
      { title: 'Performance Analytics', desc: 'AI-driven player performance tracking and tactical analysis systems.' },
      { title: 'Digital Ticketing', desc: 'Smart ticketing with dynamic pricing and CRM integration.' },
      { title: 'Sports Media', desc: 'OTT streaming, highlights automation, and content management.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'data-analytics', 'digital-marketing'],
    caseStudy: { challenge: 'A GCC sports club needed to engage fans digitally beyond match-day attendance.', strategy: 'Gamified mobile platform with real-time stats, social features, and loyalty rewards.', implementation: 'React Native app with real-time data feeds, push notifications, and loyalty engine.', outcome: '200K+ app downloads in 3 months with 65% weekly active user rate.' },
    calculatorFields: [
      { id: 'projectType', label: 'Project Type', type: 'select', options: [
        { label: 'Fan Platform', value: 'fan', multiplier: 1.5 },
        { label: 'Analytics System', value: 'analytics', multiplier: 1.2 },
        { label: 'Complete Sports Tech', value: 'full', multiplier: 3 },
      ]},
      { id: 'scale', label: 'Organization Size', type: 'select', options: [
        { label: 'Single Club', value: 'single', multiplier: 1 },
        { label: 'Multi-Club / League', value: 'league', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 25000,
  },
  {
    slug: 'education',
    title: 'Education',
    headline: 'EdTech & Institutional Management Solutions',
    summary: 'Modernize educational institutions with AI-powered learning platforms, student management systems, and digital campus infrastructure for Kuwait and the GCC.',
    challenges: [
      { title: 'Digital Learning Gaps', desc: 'Outdated LMS platforms failing to engage modern learners.' },
      { title: 'Administrative Overhead', desc: 'Manual processes for enrollment, grading, and student management.' },
      { title: 'Student Retention', desc: 'Lack of early warning systems for at-risk students.' },
    ],
    solutions: [
      { title: 'AI Tutoring Systems', desc: 'Adaptive learning platforms that personalize education pathways.' },
      { title: 'Student Information System', desc: 'Comprehensive SIS for enrollment, grades, and institutional analytics.' },
      { title: 'Virtual Classroom', desc: 'Interactive online learning environments with collaboration tools.' },
      { title: 'Assessment AI', desc: 'Automated grading, plagiarism detection, and learning analytics.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'cloud-infrastructure', 'data-analytics'],
    caseStudy: { challenge: 'A Kuwait university needed to modernize its decade-old student management system.', strategy: 'Cloud-native SIS with AI-driven student success predictions and mobile-first design.', implementation: 'Phased rollout across 5 faculties over 8 months with data migration from legacy system.', outcome: '60% reduction in administrative processing time and 25% improvement in student satisfaction scores.' },
    calculatorFields: [
      { id: 'institutionType', label: 'Institution Type', type: 'select', options: [
        { label: 'K-12 School', value: 'k12', multiplier: 1 },
        { label: 'University', value: 'uni', multiplier: 2 },
        { label: 'Training Center', value: 'training', multiplier: 0.8 },
      ]},
      { id: 'students', label: 'Student Count', type: 'select', options: [
        { label: 'Under 500', value: 'small', multiplier: 1 },
        { label: '500-5,000', value: 'medium', multiplier: 1.5 },
        { label: '5,000+', value: 'large', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 18000,
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    headline: 'Healthcare Technology Solutions for Kuwait & GCC',
    summary: 'Empower healthcare providers with patient management systems, telemedicine platforms, and clinical data analytics that improve care quality and operational efficiency.',
    challenges: [
      { title: 'Patient Data Silos', desc: 'Fragmented medical records across departments and facilities.' },
      { title: 'Appointment Management', desc: 'Inefficient scheduling causing long wait times and no-shows.' },
      { title: 'Regulatory Compliance', desc: 'Complex healthcare regulations requiring robust data governance.' },
      { title: 'Telehealth Adoption', desc: 'Need for reliable remote consultation and monitoring capabilities.' },
    ],
    solutions: [
      { title: 'Electronic Health Records', desc: 'Unified EHR systems with interoperability and patient portal access.' },
      { title: 'Telemedicine Platform', desc: 'Secure video consultations with prescription and billing integration.' },
      { title: 'Clinical Analytics', desc: 'AI-driven clinical decision support and population health analytics.' },
      { title: 'Patient Engagement', desc: 'Mobile apps for appointments, results, and health tracking.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'cloud-infrastructure', 'data-analytics'],
    caseStudy: { challenge: 'A multi-clinic healthcare provider in Kuwait needed to unify patient records.', strategy: 'Cloud-based EHR with telemedicine integration and patient mobile app.', implementation: 'HIPAA-aligned system deployed across 8 clinics with staff training and data migration.', outcome: '35% reduction in appointment no-shows and 50% faster patient record retrieval.' },
    calculatorFields: [
      { id: 'facilityType', label: 'Facility Type', type: 'select', options: [
        { label: 'Single Clinic', value: 'clinic', multiplier: 1 },
        { label: 'Multi-Clinic', value: 'multi', multiplier: 2 },
        { label: 'Hospital', value: 'hospital', multiplier: 3.5 },
      ]},
      { id: 'modules', label: 'System Modules', type: 'select', options: [
        { label: 'EHR Only', value: 'ehr', multiplier: 1 },
        { label: 'EHR + Telemedicine', value: 'tele', multiplier: 1.6 },
        { label: 'Full Healthcare Suite', value: 'full', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 30000,
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    headline: 'MarTech Solutions for Marketing Agencies & Departments',
    summary: 'Supercharge marketing operations with AI-powered automation, campaign intelligence, and integrated MarTech stacks designed for GCC market dynamics.',
    challenges: [
      { title: 'Tool Sprawl', desc: 'Dozens of disconnected marketing tools creating data silos.' },
      { title: 'Campaign Attribution', desc: 'Inability to accurately track marketing spend to revenue outcomes.' },
      { title: 'Content Scale', desc: 'Growing content demands outpacing team capacity and quality standards.' },
    ],
    solutions: [
      { title: 'MarTech Integration', desc: 'Unified marketing technology stack with seamless data flow.' },
      { title: 'Campaign Intelligence', desc: 'AI-driven campaign optimization and predictive budget allocation.' },
      { title: 'Content Automation', desc: 'AI-assisted content generation and distribution workflows.' },
      { title: 'Attribution Modeling', desc: 'Multi-touch attribution connecting marketing activities to revenue.' },
    ],
    relevantServices: ['digital-marketing', 'ai-machine-learning', 'data-analytics', 'social-media-management'],
    caseStudy: { challenge: 'A marketing agency managing 50+ GCC brand accounts needed operational efficiency.', strategy: 'Centralized campaign platform with AI-powered performance optimization.', implementation: 'Custom dashboard integrating 12 marketing tools with automated reporting.', outcome: '40% reduction in reporting time and 22% improvement in average campaign ROAS.' },
    calculatorFields: [
      { id: 'scope', label: 'Implementation Scope', type: 'select', options: [
        { label: 'Single Channel', value: 'single', multiplier: 1 },
        { label: 'Multi-Channel', value: 'multi', multiplier: 2 },
        { label: 'Full MarTech Stack', value: 'full', multiplier: 3.5 },
      ]},
      { id: 'automation', label: 'Automation Level', type: 'select', options: [
        { label: 'Basic', value: 'basic', multiplier: 1 },
        { label: 'Advanced (AI-driven)', value: 'advanced', multiplier: 1.8 },
      ]},
    ],
    calculatorBaseRate: 15000,
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    headline: 'Real Estate Technology Solutions for Kuwait & GCC',
    summary: 'Digitize real estate operations with property platforms, virtual tours, CRM systems, and market analytics tailored for Kuwait and GCC property markets.',
    challenges: [
      { title: 'Manual Processes', desc: 'Paper-based workflows for listings, contracts, and property management.' },
      { title: 'Market Intelligence', desc: 'Limited access to real-time market data for investment decisions.' },
      { title: 'Lead Management', desc: 'Inefficient lead tracking and follow-up processes.' },
    ],
    solutions: [
      { title: 'Property Listing Platform', desc: 'Feature-rich property marketplace with advanced search and filters.' },
      { title: 'Virtual Tours & 3D', desc: 'Immersive property visualization with 360° tours and 3D walkthroughs.' },
      { title: 'Real Estate CRM', desc: 'Lead management, pipeline tracking, and automated follow-ups.' },
      { title: 'Market Analytics', desc: 'AI-powered property valuation and market trend analysis.' },
    ],
    relevantServices: ['software-development', 'digital-marketing', 'data-analytics', 'cloud-infrastructure'],
    caseStudy: { challenge: 'A Kuwait real estate developer needed a modern digital platform for off-plan sales.', strategy: 'Interactive property platform with 3D tours, online booking, and CRM integration.', implementation: 'Web platform with virtual tours, payment gateway, and lead management system.', outcome: '55% of off-plan units sold through the digital platform within 3 months of launch.' },
    calculatorFields: [
      { id: 'projectType', label: 'Project Type', type: 'select', options: [
        { label: 'Property Listing Site', value: 'listing', multiplier: 1 },
        { label: 'CRM System', value: 'crm', multiplier: 1.2 },
        { label: 'Full PropTech Platform', value: 'full', multiplier: 2.5 },
      ]},
      { id: 'properties', label: 'Property Portfolio Size', type: 'select', options: [
        { label: 'Under 100 units', value: 'small', multiplier: 1 },
        { label: '100-1,000 units', value: 'medium', multiplier: 1.5 },
        { label: '1,000+ units', value: 'large', multiplier: 2.2 },
      ]},
    ],
    calculatorBaseRate: 18000,
  },
  {
    slug: 'retail',
    title: 'Retail',
    headline: 'AI-Driven Retail Technology Solutions for Kuwait & GCC',
    summary: 'Transform retail operations with omnichannel commerce, intelligent POS systems, demand forecasting, and personalized customer experiences.',
    challenges: [
      { title: 'Channel Fragmentation', desc: 'Disconnected in-store and online shopping creating friction.' },
      { title: 'Demand Forecasting', desc: 'Inaccurate demand predictions leading to overstock and markdowns.' },
      { title: 'Customer Loyalty', desc: 'Low repeat purchase rates and ineffective loyalty programs.' },
      { title: 'Operational Costs', desc: 'Rising labor and operational costs squeezing retail margins.' },
    ],
    solutions: [
      { title: 'Omnichannel Commerce', desc: 'Unified commerce across web, mobile, in-store, and marketplace channels.' },
      { title: 'Smart POS', desc: 'AI-integrated point-of-sale with inventory sync and customer recognition.' },
      { title: 'Demand Forecasting', desc: 'ML-powered demand prediction for optimal inventory planning.' },
      { title: 'Loyalty & CRM', desc: 'Data-driven loyalty programs with personalized rewards and offers.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'data-analytics', 'digital-marketing'],
    caseStudy: { challenge: 'A GCC retail chain with 30 stores needed to unify online and offline operations.', strategy: 'Unified commerce platform with real-time inventory sync and AI-driven personalization.', implementation: 'Headless commerce architecture integrated with existing POS and ERP systems.', outcome: '38% increase in cross-channel sales and 25% reduction in inventory carrying costs.' },
    calculatorFields: [
      { id: 'projectType', label: 'Project Type', type: 'select', options: [
        { label: 'E-Commerce', value: 'ecom', multiplier: 1.2 },
        { label: 'POS + Inventory', value: 'pos', multiplier: 1.5 },
        { label: 'Full Omnichannel', value: 'omni', multiplier: 3 },
      ]},
      { id: 'locations', label: 'Store Locations', type: 'select', options: [
        { label: '1-10', value: 'small', multiplier: 1 },
        { label: '10-50', value: 'medium', multiplier: 1.8 },
        { label: '50+', value: 'large', multiplier: 3 },
      ]},
    ],
    calculatorBaseRate: 22000,
  },
  {
    slug: 'transportation',
    title: 'Transportation',
    headline: 'Transportation & Logistics Technology Solutions',
    summary: 'Optimize transportation operations with fleet management, route optimization, and real-time tracking systems for Kuwait and GCC logistics providers.',
    challenges: [
      { title: 'Fleet Inefficiency', desc: 'Suboptimal vehicle utilization and maintenance scheduling.' },
      { title: 'Route Planning', desc: 'Manual route planning causing delays and fuel waste.' },
      { title: 'Visibility Gaps', desc: 'Lack of real-time visibility into shipment status and fleet location.' },
    ],
    solutions: [
      { title: 'Fleet Management', desc: 'IoT-connected fleet tracking with predictive maintenance alerts.' },
      { title: 'Route Optimization', desc: 'AI-powered route planning minimizing fuel costs and delivery times.' },
      { title: 'Tracking Platform', desc: 'Real-time shipment tracking with customer-facing status updates.' },
      { title: 'Driver Management', desc: 'Digital driver logs, safety scoring, and compliance tracking.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'cloud-infrastructure', 'intelligent-systems-automation'],
    caseStudy: { challenge: 'A Kuwait logistics company with 200+ vehicles needed fleet optimization.', strategy: 'IoT-connected fleet platform with AI-driven route optimization and predictive maintenance.', implementation: 'GPS tracking, telematics integration, and mobile driver app deployed over 4 months.', outcome: '22% reduction in fuel costs and 35% improvement in on-time delivery rates.' },
    calculatorFields: [
      { id: 'fleetSize', label: 'Fleet Size', type: 'select', options: [
        { label: 'Under 50 vehicles', value: 'small', multiplier: 1 },
        { label: '50-200 vehicles', value: 'medium', multiplier: 2 },
        { label: '200+ vehicles', value: 'large', multiplier: 3.5 },
      ]},
      { id: 'features', label: 'Features', type: 'select', options: [
        { label: 'Tracking Only', value: 'tracking', multiplier: 1 },
        { label: 'Tracking + Optimization', value: 'optimized', multiplier: 1.6 },
        { label: 'Full Fleet Management', value: 'full', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 15000,
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain',
    headline: 'Intelligent Supply Chain Technology Solutions',
    summary: 'Build resilient, data-driven supply chains with warehouse automation, demand planning, and end-to-end visibility platforms for GCC enterprises.',
    challenges: [
      { title: 'Demand Uncertainty', desc: 'Volatile demand patterns making inventory planning unreliable.' },
      { title: 'Warehouse Inefficiency', desc: 'Manual warehouse processes limiting throughput and accuracy.' },
      { title: 'Supplier Management', desc: 'Limited visibility into supplier performance and risk factors.' },
    ],
    solutions: [
      { title: 'Warehouse Management', desc: 'WMS with pick optimization, barcode/RFID, and real-time inventory.' },
      { title: 'Demand Planning', desc: 'AI-powered demand forecasting with scenario analysis capabilities.' },
      { title: 'Supplier Portal', desc: 'Digital platform for supplier onboarding, PO management, and performance.' },
      { title: 'Supply Chain Analytics', desc: 'End-to-end visibility dashboards with predictive disruption alerts.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'data-analytics', 'intelligent-systems-automation'],
    caseStudy: { challenge: 'A Kuwait distributor with 5 warehouses struggled with inventory accuracy.', strategy: 'Modern WMS with RFID tracking and AI-driven demand forecasting.', implementation: 'Phased rollout with barcode integration, mobile picking, and analytics dashboards.', outcome: '99.2% inventory accuracy (up from 87%) and 40% faster order fulfillment.' },
    calculatorFields: [
      { id: 'scope', label: 'Project Scope', type: 'select', options: [
        { label: 'Single Warehouse', value: 'single', multiplier: 1 },
        { label: 'Multi-Warehouse', value: 'multi', multiplier: 2.5 },
        { label: 'Full Supply Chain', value: 'full', multiplier: 4 },
      ]},
      { id: 'automation', label: 'Automation Level', type: 'select', options: [
        { label: 'Semi-Automated', value: 'semi', multiplier: 1 },
        { label: 'Fully Automated', value: 'full', multiplier: 2 },
      ]},
    ],
    calculatorBaseRate: 20000,
  },
  {
    slug: 'finance',
    title: 'Finance',
    headline: 'FinTech & Financial Services Technology Solutions',
    summary: 'Power financial institutions with FinTech solutions, risk analytics, regulatory compliance systems, and digital banking platforms for the GCC market.',
    challenges: [
      { title: 'Regulatory Complexity', desc: 'Evolving CBK and GCC financial regulations requiring constant adaptation.' },
      { title: 'Legacy Core Banking', desc: 'Outdated core systems limiting product innovation and customer experience.' },
      { title: 'Fraud & Risk', desc: 'Increasing sophistication of financial fraud and cyber threats.' },
      { title: 'Digital Expectations', desc: 'Customers demanding seamless digital banking experiences.' },
    ],
    solutions: [
      { title: 'Digital Banking', desc: 'Customer-facing digital banking platforms with mobile-first design.' },
      { title: 'Risk Analytics', desc: 'AI-powered risk scoring, fraud detection, and AML compliance.' },
      { title: 'RegTech', desc: 'Automated regulatory reporting and compliance monitoring systems.' },
      { title: 'Payment Solutions', desc: 'Digital payment processing, open banking APIs, and wallet integration.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'cloud-infrastructure', 'data-analytics'],
    caseStudy: { challenge: 'A Kuwait investment firm needed to automate compliance reporting for CBK regulations.', strategy: 'RegTech platform with automated data collection, validation, and report generation.', implementation: 'Integration with trading systems, CRM, and CBK submission portals over 5 months.', outcome: '80% reduction in compliance reporting time and zero regulatory submission errors.' },
    calculatorFields: [
      { id: 'projectType', label: 'Project Type', type: 'select', options: [
        { label: 'RegTech / Compliance', value: 'regtech', multiplier: 1.5 },
        { label: 'Digital Banking', value: 'banking', multiplier: 2.5 },
        { label: 'Risk Analytics', value: 'risk', multiplier: 2 },
        { label: 'Payment Platform', value: 'payments', multiplier: 2 },
      ]},
      { id: 'compliance', label: 'Compliance Requirements', type: 'select', options: [
        { label: 'Standard', value: 'standard', multiplier: 1 },
        { label: 'Enhanced (CBK/CMA)', value: 'enhanced', multiplier: 1.5 },
      ]},
    ],
    calculatorBaseRate: 35000,
  },
  {
    slug: 'insurance',
    title: 'Insurance',
    headline: 'InsurTech Solutions for Kuwait & GCC Insurers',
    summary: 'Modernize insurance operations with AI-driven claims automation, underwriting intelligence, and customer-facing digital portals.',
    challenges: [
      { title: 'Claims Processing', desc: 'Slow, manual claims workflows frustrating policyholders.' },
      { title: 'Underwriting Accuracy', desc: 'Traditional underwriting methods unable to leverage modern data sources.' },
      { title: 'Customer Experience', desc: 'Limited self-service options for policy management and claims tracking.' },
    ],
    solutions: [
      { title: 'Claims Automation', desc: 'AI-powered claims intake, assessment, and settlement automation.' },
      { title: 'Underwriting AI', desc: 'Machine learning models for risk assessment and pricing optimization.' },
      { title: 'Customer Portal', desc: 'Self-service platforms for quotes, policy management, and claims filing.' },
      { title: 'Fraud Detection', desc: 'Pattern recognition and anomaly detection for claims fraud prevention.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'data-analytics', 'intelligent-systems-automation'],
    caseStudy: { challenge: 'A Kuwait insurer processing 10,000+ claims monthly needed automation.', strategy: 'AI-driven claims triage with automated assessment for standard claims and smart routing for complex ones.', implementation: 'Integration with policy admin system, document AI, and payment processing.', outcome: '60% of standard claims auto-settled within 24 hours (previously 5-7 days).' },
    calculatorFields: [
      { id: 'projectType', label: 'Project Type', type: 'select', options: [
        { label: 'Claims Automation', value: 'claims', multiplier: 1.5 },
        { label: 'Customer Portal', value: 'portal', multiplier: 1 },
        { label: 'Full InsurTech Suite', value: 'full', multiplier: 3 },
      ]},
      { id: 'policyVolume', label: 'Policy Volume', type: 'select', options: [
        { label: 'Under 50K policies', value: 'small', multiplier: 1 },
        { label: '50K-500K', value: 'medium', multiplier: 1.8 },
        { label: '500K+', value: 'large', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 28000,
  },
  {
    slug: 'legal',
    title: 'Legal Business',
    headline: 'Legal Technology Solutions for Law Firms & Legal Departments',
    summary: 'Streamline legal operations with document automation, case management systems, and AI-powered contract analysis for Kuwait and GCC legal practices.',
    challenges: [
      { title: 'Document Overload', desc: 'Massive volumes of contracts and legal documents requiring review.' },
      { title: 'Case Management', desc: 'Manual tracking of cases, deadlines, and court filings.' },
      { title: 'Billing Complexity', desc: 'Time-consuming billing processes and inconsistent rate management.' },
    ],
    solutions: [
      { title: 'Document Automation', desc: 'Template-based document generation with smart clause libraries.' },
      { title: 'Case Management', desc: 'Digital case tracking with deadlines, tasks, and collaboration tools.' },
      { title: 'Contract AI', desc: 'AI-powered contract review, risk identification, and clause extraction.' },
      { title: 'Legal Billing', desc: 'Automated time tracking, billing, and trust account management.' },
    ],
    relevantServices: ['software-development', 'ai-machine-learning', 'intelligent-systems-automation', 'data-entry-services'],
    caseStudy: { challenge: 'A Kuwait law firm with 50 attorneys needed to modernize case and document management.', strategy: 'Integrated legal practice management with AI-powered document review and Arabic support.', implementation: 'Cloud-based platform with document automation, billing, and client portal.', outcome: '45% reduction in document preparation time and 30% improvement in billing accuracy.' },
    calculatorFields: [
      { id: 'firmSize', label: 'Firm Size', type: 'select', options: [
        { label: 'Small (1-10 attorneys)', value: 'small', multiplier: 1 },
        { label: 'Medium (10-50)', value: 'medium', multiplier: 1.8 },
        { label: 'Large (50+)', value: 'large', multiplier: 3 },
      ]},
      { id: 'modules', label: 'Modules', type: 'select', options: [
        { label: 'Case Management', value: 'case', multiplier: 1 },
        { label: 'Case + Document AI', value: 'doc', multiplier: 1.6 },
        { label: 'Full Legal Suite', value: 'full', multiplier: 2.5 },
      ]},
    ],
    calculatorBaseRate: 20000,
  },
];
