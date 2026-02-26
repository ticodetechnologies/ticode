export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
  calculatorFields: CalculatorField[];
  calculatorBaseRate: number;
}

export interface CalculatorField {
  id: string;
  label: string;
  type: 'select' | 'slider';
  options?: { label: string; value: string; multiplier: number }[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  multiplierPerUnit?: number;
}

const deliveryModel = [
  { step: 'Discovery', desc: 'Comprehensive assessment of business requirements, technical landscape, and strategic objectives.' },
  { step: 'Strategy', desc: 'Architecture design, technology selection, and detailed roadmap development.' },
  { step: 'Implementation', desc: 'Agile delivery with iterative development, testing, and stakeholder reviews.' },
  { step: 'Optimization', desc: 'Performance tuning, security hardening, and continuous improvement cycles.' },
  { step: 'Ongoing Support', desc: 'Dedicated support team with SLA-backed maintenance and evolution services.' },
];

export { deliveryModel };

export const services: ServiceData[] = [
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    headline: 'Board-Level IT Consulting for Risk-Resilient Transformation',
    summary: 'Governance-first advisory that aligns technology with enterprise strategy, reduces operational and regulatory risk, and delivers board-validated outcomes across your organization.',
    challenges: [
      { title: 'Misaligned IT Strategy', desc: 'Technology investments that fail to support core business goals and growth plans.' },
      { title: 'Legacy System Dependencies', desc: 'Outdated infrastructure creating operational bottlenecks and security vulnerabilities.' },
      { title: 'Digital Transformation Gaps', desc: 'Lack of clear roadmap for modernization and digital-first operations.' },
      { title: 'Compliance & Governance', desc: 'Navigating complex regulatory requirements across GCC jurisdictions.' },
      { title: 'Vendor Lock-in Risks', desc: 'Over-reliance on single vendors limiting flexibility and increasing costs.' },
    ],
    solutions: [
      { title: 'Governance & Decision Rights', desc: 'Executive governance model that aligns investments, risk, and accountability to board priorities.' },
      { title: 'Portfolio Value Management', desc: 'Outcome-based portfolio control with financial visibility, benefit tracking, and priority governance.' },
      { title: 'Architecture & Modernization Blueprint', desc: 'Enterprise-wide blueprint to reduce technical debt, improve resilience, and enable scalable growth.' },
      { title: 'Risk, Compliance & Control', desc: 'Regulatory alignment, security posture elevation, and audit-ready controls built into delivery.' },
      { title: 'Change & Capability Enablement', desc: 'Operating model design and executive change management to sustain adoption and performance.' },
    ],
    techStack: ['Enterprise Architecture Frameworks', 'TOGAF', 'ITIL', 'Agile/SAFe', 'Cloud Assessment Tools', 'Security Audit Platforms'],
    faqs: [
      { q: 'What industries do you consult for in Kuwait?', a: 'We serve finance, healthcare, retail, government, real estate, and oil & gas sectors across Kuwait and the GCC.' },
      { q: 'How long does a typical IT assessment take?', a: 'A comprehensive IT assessment typically takes 4-8 weeks depending on organizational complexity.' },
      { q: 'Do you support Arabic-language documentation?', a: 'Yes, all deliverables are available in both English and Arabic to serve regional stakeholders.' },
      { q: 'Can you work alongside our existing IT team?', a: 'Absolutely. We operate as an extension of your team, transferring knowledge and building internal capabilities.' },
    ],
    calculatorFields: [
      {
        id: 'scope', label: 'Project Scope', type: 'select', options: [
          { label: 'Department-level', value: 'dept', multiplier: 1 },
          { label: 'Division-level', value: 'div', multiplier: 1.8 },
          { label: 'Enterprise-wide', value: 'enterprise', multiplier: 3 },
        ]
      },
      {
        id: 'complexity', label: 'Complexity Level', type: 'select', options: [
          { label: 'Standard', value: 'standard', multiplier: 1 },
          { label: 'Complex', value: 'complex', multiplier: 1.5 },
          { label: 'Highly Complex', value: 'high', multiplier: 2.2 },
        ]
      },
      { id: 'duration', label: 'Engagement Duration (months)', type: 'slider', min: 1, max: 12, step: 1, defaultValue: 3, multiplierPerUnit: 1 },
    ],
    calculatorBaseRate: 8000,
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    headline: 'Enterprise AI & Machine Learning Solutions for the GCC',
    summary: 'Deploy production-grade AI systems that automate decisions, predict outcomes, and unlock competitive intelligence across your enterprise operations.',
    challenges: [
      { title: 'Data Silos', desc: 'Fragmented data across departments preventing holistic AI model training.' },
      { title: 'Talent Shortage', desc: 'Difficulty hiring and retaining specialized ML engineers in the region.' },
      { title: 'Model Accuracy', desc: 'Low-performing models due to insufficient data preprocessing and feature engineering.' },
      { title: 'Production Deployment', desc: 'Gap between prototype AI models and production-ready enterprise systems.' },
      { title: 'ROI Justification', desc: 'Difficulty quantifying AI investment returns for executive stakeholders.' },
    ],
    solutions: [
      { title: 'Custom ML Model Development', desc: 'Purpose-built machine learning models trained on your proprietary business data.' },
      { title: 'MLOps Pipeline', desc: 'End-to-end machine learning operations for model training, deployment, and monitoring.' },
      { title: 'Predictive Analytics', desc: 'Forecast demand, churn, revenue, and operational metrics with high accuracy.' },
      { title: 'NLP & Text Analytics', desc: 'Arabic and English natural language processing for document analysis and sentiment.' },
      { title: 'Computer Vision', desc: 'Image and video analysis systems for quality control, security, and automation.' },
    ],
    techStack: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'AWS SageMaker', 'Azure ML', 'Kubernetes', 'MLflow'],
    faqs: [
      { q: 'Do you build AI models that understand Arabic?', a: 'Yes, our NLP solutions support both Arabic and English with high accuracy for GCC business contexts.' },
      { q: 'How long does it take to deploy a custom ML model?', a: 'Typical ML projects take 8-16 weeks from data assessment to production deployment.' },
      { q: 'What data do you need to get started?', a: 'We begin with a data audit to assess availability, quality, and readiness for model training.' },
      { q: 'Can AI integrate with our existing systems?', a: 'Our solutions are built with API-first architecture for seamless integration with ERP, CRM, and legacy systems.' },
    ],
    calculatorFields: [
      {
        id: 'modelType', label: 'Model Type', type: 'select', options: [
          { label: 'Predictive Analytics', value: 'predictive', multiplier: 1 },
          { label: 'NLP / Text Analysis', value: 'nlp', multiplier: 1.3 },
          { label: 'Computer Vision', value: 'cv', multiplier: 1.5 },
          { label: 'Recommendation System', value: 'recommend', multiplier: 1.2 },
        ]
      },
      {
        id: 'dataVolume', label: 'Data Volume', type: 'select', options: [
          { label: 'Small (< 100K records)', value: 'small', multiplier: 1 },
          { label: 'Medium (100K-1M)', value: 'medium', multiplier: 1.4 },
          { label: 'Large (1M+)', value: 'large', multiplier: 2 },
        ]
      },
      { id: 'integration', label: 'Integration Points', type: 'slider', min: 1, max: 8, step: 1, defaultValue: 2, multiplierPerUnit: 0.15 },
    ],
    calculatorBaseRate: 15000,
  },
  {
    slug: 'ai-agents',
    title: 'AI Agents & Voice AI',
    headline: 'Intelligent AI Agents & Voice AI for GCC Businesses',
    summary: 'Deploy autonomous AI agents and conversational voice systems that handle customer interactions, automate workflows, and operate 24/7 in Arabic and English.',
    challenges: [
      { title: 'High Support Costs', desc: 'Escalating costs of 24/7 multilingual customer support operations.' },
      { title: 'Inconsistent Service', desc: 'Variable quality across customer touchpoints and channels.' },
      { title: 'Manual Workflows', desc: 'Repetitive tasks consuming skilled employee time and attention.' },
      { title: 'Language Barriers', desc: 'Need for seamless Arabic and English communication capabilities.' },
    ],
    solutions: [
      { title: 'Autonomous AI Agents', desc: 'Task-oriented agents that execute multi-step business processes independently.' },
      { title: 'Voice AI Assistants', desc: 'Natural-sounding voice interfaces for customer service and internal operations.' },
      { title: 'Bilingual Chatbots', desc: 'Context-aware conversational AI supporting Arabic and English interactions.' },
      { title: 'Workflow Orchestration', desc: 'AI agents that coordinate across systems to complete complex business tasks.' },
    ],
    techStack: ['OpenAI GPT-4', 'LangChain', 'ElevenLabs', 'Whisper', 'FastAPI', 'Redis', 'Vector Databases'],
    faqs: [
      { q: 'Can AI agents handle Arabic conversations?', a: 'Yes, our agents are trained on Arabic dialects common in Kuwait and the GCC with native-level fluency.' },
      { q: 'How do voice AI systems integrate with our phone system?', a: 'We integrate via SIP/VoIP protocols with existing PBX and cloud telephony systems.' },
      { q: 'What tasks can AI agents automate?', a: 'From appointment scheduling to order processing, claims handling, and multi-step research tasks.' },
    ],
    calculatorFields: [
      {
        id: 'agentType', label: 'Agent Type', type: 'select', options: [
          { label: 'Text Chatbot', value: 'chat', multiplier: 1 },
          { label: 'Voice Assistant', value: 'voice', multiplier: 1.6 },
          { label: 'Multi-modal Agent', value: 'multi', multiplier: 2.2 },
        ]
      },
      {
        id: 'languages', label: 'Languages', type: 'select', options: [
          { label: 'English Only', value: 'en', multiplier: 1 },
          { label: 'English + Arabic', value: 'bilingual', multiplier: 1.4 },
        ]
      },
      { id: 'channels', label: 'Deployment Channels', type: 'slider', min: 1, max: 5, step: 1, defaultValue: 2, multiplierPerUnit: 0.2 },
    ],
    calculatorBaseRate: 12000,
  },
  {
    slug: 'intelligent-systems',
    title: 'Intelligent Systems & Automation',
    headline: 'End-to-End Intelligent Automation Solutions',
    summary: 'Streamline operations with AI-driven automation that eliminates manual processes, reduces errors, and accelerates business outcomes across your enterprise.',
    challenges: [
      { title: 'Process Inefficiency', desc: 'Manual, repetitive tasks consuming skilled employee time.' },
      { title: 'Error-Prone Operations', desc: 'Human errors in data entry, processing, and compliance workflows.' },
      { title: 'Scalability Limits', desc: 'Inability to scale operations without proportional headcount increases.' },
      { title: 'Integration Complexity', desc: 'Disconnected systems requiring manual data transfer between platforms.' },
    ],
    solutions: [
      { title: 'Robotic Process Automation', desc: 'Software robots that replicate human interactions with enterprise applications.' },
      { title: 'Intelligent Document Processing', desc: 'AI-powered extraction and classification of unstructured documents.' },
      { title: 'Workflow Automation', desc: 'End-to-end process orchestration with conditional logic and approvals.' },
      { title: 'API Integration Layer', desc: 'Unified integration platform connecting disparate enterprise systems.' },
    ],
    techStack: ['UiPath', 'Power Automate', 'Zapier', 'n8n', 'Apache Airflow', 'Node.js', 'Python'],
    faqs: [
      { q: 'What processes are best suited for automation?', a: 'High-volume, rule-based tasks like invoice processing, data entry, report generation, and compliance checks.' },
      { q: 'How quickly can we see ROI from automation?', a: 'Most clients see measurable ROI within 3-6 months of deployment through reduced processing time and error rates.' },
    ],
    calculatorFields: [
      { id: 'processCount', label: 'Processes to Automate', type: 'slider', min: 1, max: 20, step: 1, defaultValue: 3, multiplierPerUnit: 1 },
      {
        id: 'complexity', label: 'Process Complexity', type: 'select', options: [
          { label: 'Simple (rule-based)', value: 'simple', multiplier: 1 },
          { label: 'Moderate (some decisions)', value: 'moderate', multiplier: 1.5 },
          { label: 'Complex (AI-driven)', value: 'complex', multiplier: 2.5 },
        ]
      },
    ],
    calculatorBaseRate: 5000,
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    headline: 'Custom Software Development for Enterprise Scale',
    summary: 'Full-stack custom software solutions—from web and mobile applications to enterprise platforms—engineered for performance, security, and scalability.',
    challenges: [
      { title: 'Off-the-Shelf Limitations', desc: 'Commercial software unable to address unique business requirements.' },
      { title: 'Technical Debt', desc: 'Accumulated shortcuts and outdated code slowing development velocity.' },
      { title: 'Integration Needs', desc: 'Complex requirements for connecting with existing enterprise systems.' },
      { title: 'Scalability Concerns', desc: 'Applications that break under growing user loads and data volumes.' },
      { title: 'Time-to-Market Pressure', desc: 'Competitive pressure to deliver digital products faster.' },
    ],
    solutions: [
      { title: 'Custom Web Applications', desc: 'Modern, responsive web applications built with React, Next.js, and enterprise frameworks.' },
      { title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
      { title: 'Enterprise Platforms', desc: 'Large-scale platforms handling millions of transactions with high availability.' },
      { title: 'API Development', desc: 'RESTful and GraphQL APIs for system integration and partner ecosystems.' },
      { title: 'Legacy Modernization', desc: 'Systematic migration of legacy systems to modern cloud-native architecture.' },
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
    faqs: [
      { q: 'What development methodology do you follow?', a: 'We use Agile/Scrum with 2-week sprints, daily standups, and bi-weekly demos to ensure transparency.' },
      { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer SLA-backed maintenance packages including bug fixes, security patches, and feature enhancements.' },
      { q: 'Can you take over an existing codebase?', a: 'We conduct thorough code audits and can assume ownership of existing projects with a structured transition plan.' },
      { q: 'Do you build bilingual applications?', a: 'All our applications support full internationalization with Arabic RTL layout and English LTR as standard.' },
    ],
    calculatorFields: [
      {
        id: 'projectType', label: 'Project Type', type: 'select', options: [
          { label: 'Web Application', value: 'web', multiplier: 1 },
          { label: 'Mobile App', value: 'mobile', multiplier: 1.3 },
          { label: 'Web + Mobile', value: 'both', multiplier: 2 },
          { label: 'Enterprise Platform', value: 'enterprise', multiplier: 2.5 },
        ]
      },
      {
        id: 'complexity', label: 'Complexity', type: 'select', options: [
          { label: 'Simple (MVP)', value: 'simple', multiplier: 1 },
          { label: 'Moderate', value: 'moderate', multiplier: 1.8 },
          { label: 'Complex', value: 'complex', multiplier: 3 },
        ]
      },
      { id: 'timeline', label: 'Timeline (months)', type: 'slider', min: 1, max: 18, step: 1, defaultValue: 4, multiplierPerUnit: 1 },
      {
        id: 'teamSize', label: 'Team Size', type: 'select', options: [
          { label: '2-3 developers', value: 'small', multiplier: 1 },
          { label: '4-6 developers', value: 'medium', multiplier: 1.8 },
          { label: '7+ developers', value: 'large', multiplier: 3 },
        ]
      },
    ],
    calculatorBaseRate: 10000,
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    headline: 'Cloud Migration & Infrastructure Solutions for GCC Enterprises',
    summary: 'Architect, migrate, and manage scalable cloud infrastructure that delivers reliability, security, and cost efficiency for your enterprise workloads.',
    challenges: [
      { title: 'Cloud Migration Complexity', desc: 'Risk of data loss, downtime, and compatibility issues during migration.' },
      { title: 'Cost Overruns', desc: 'Uncontrolled cloud spending without proper governance and optimization.' },
      { title: 'Security & Compliance', desc: 'Meeting GCC regulatory requirements for data residency and protection.' },
      { title: 'Skill Gaps', desc: 'Internal teams lacking cloud-native architecture and DevOps expertise.' },
    ],
    solutions: [
      { title: 'Cloud Migration', desc: 'Structured migration of on-premise workloads to AWS, Azure, or GCP.' },
      { title: 'Infrastructure as Code', desc: 'Automated infrastructure provisioning with Terraform and CloudFormation.' },
      { title: 'DevOps & CI/CD', desc: 'Continuous integration and deployment pipelines for rapid, reliable releases.' },
      { title: 'Cost Optimization', desc: 'FinOps practices to reduce cloud spending by 20-40% without performance impact.' },
    ],
    techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible'],
    faqs: [
      { q: 'Which cloud providers do you work with?', a: 'We are certified partners with AWS, Microsoft Azure, and Google Cloud Platform.' },
      { q: 'Can you ensure data stays in the GCC region?', a: 'Yes, we configure data residency controls to keep data within compliant GCC data centers.' },
    ],
    calculatorFields: [
      {
        id: 'migrationScope', label: 'Migration Scope', type: 'select', options: [
          { label: 'Single Application', value: 'single', multiplier: 1 },
          { label: 'Multiple Applications', value: 'multi', multiplier: 2.5 },
          { label: 'Full Data Center', value: 'dc', multiplier: 5 },
        ]
      },
      {
        id: 'cloudProvider', label: 'Cloud Provider', type: 'select', options: [
          { label: 'AWS', value: 'aws', multiplier: 1 },
          { label: 'Azure', value: 'azure', multiplier: 1 },
          { label: 'Multi-Cloud', value: 'multi', multiplier: 1.5 },
        ]
      },
    ],
    calculatorBaseRate: 12000,
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    headline: 'Data Engineering & Business Intelligence for Enterprises',
    summary: 'Transform raw data into actionable intelligence with modern data platforms, advanced analytics, and real-time dashboards that drive informed decision-making.',
    challenges: [
      { title: 'Data Fragmentation', desc: 'Business-critical data scattered across dozens of disconnected systems.' },
      { title: 'Reporting Delays', desc: 'Manual reporting processes that take days instead of delivering real-time insights.' },
      { title: 'Poor Data Quality', desc: 'Inconsistent, incomplete, or duplicate data undermining analytics accuracy.' },
      { title: 'Lack of Self-Service', desc: 'Business users dependent on IT for every data request and report.' },
    ],
    solutions: [
      { title: 'Data Warehouse Design', desc: 'Modern data warehouse architecture optimized for analytical workloads.' },
      { title: 'ETL/ELT Pipelines', desc: 'Automated data integration pipelines ensuring timely, accurate data delivery.' },
      { title: 'BI Dashboards', desc: 'Interactive dashboards and reports powered by Tableau, Power BI, or Looker.' },
      { title: 'Predictive Analytics', desc: 'Statistical models and ML algorithms for forecasting and trend analysis.' },
    ],
    techStack: ['Snowflake', 'BigQuery', 'Apache Spark', 'dbt', 'Airflow', 'Tableau', 'Power BI', 'Python'],
    faqs: [
      { q: 'How do you handle Arabic-language data?', a: 'Our pipelines fully support Arabic text processing, including right-to-left data display in dashboards.' },
      { q: 'Can you integrate with our existing ERP system?', a: 'We have pre-built connectors for SAP, Oracle, Microsoft Dynamics, and other major ERP systems.' },
    ],
    calculatorFields: [
      { id: 'dataSource', label: 'Data Sources', type: 'slider', min: 1, max: 15, step: 1, defaultValue: 3, multiplierPerUnit: 0.3 },
      { id: 'dashboards', label: 'Dashboard Count', type: 'slider', min: 1, max: 10, step: 1, defaultValue: 3, multiplierPerUnit: 0.25 },
      {
        id: 'analytics', label: 'Analytics Level', type: 'select', options: [
          { label: 'Descriptive (What happened)', value: 'desc', multiplier: 1 },
          { label: 'Diagnostic (Why)', value: 'diag', multiplier: 1.3 },
          { label: 'Predictive (What will happen)', value: 'pred', multiplier: 2 },
        ]
      },
    ],
    calculatorBaseRate: 8000,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    headline: 'Performance-Driven Digital Marketing for Kuwait & GCC',
    summary: 'Data-driven marketing strategies combining technical SEO, paid media, content optimization, and conversion engineering to deliver measurable business growth.',
    challenges: [
      { title: 'Low Search Visibility', desc: 'Poor organic rankings for high-intent keywords in Kuwait and GCC markets.' },
      { title: 'Wasted Ad Spend', desc: 'Inefficient paid campaigns with high CPA and low conversion rates.' },
      { title: 'Content Performance', desc: 'Content failing to engage target audiences or drive meaningful actions.' },
      { title: 'Attribution Gaps', desc: 'Inability to track and attribute revenue across marketing channels.' },
    ],
    solutions: [
      { title: 'Technical SEO', desc: 'Site architecture, Core Web Vitals, schema markup, and crawlability optimization.' },
      { title: 'GEO SEO', desc: 'Kuwait and GCC-specific local SEO targeting with Arabic and English optimization.' },
      { title: 'AI Optimization (AIO)', desc: 'Optimizing content for AI-powered search engines and recommendation systems.' },
      { title: 'Answer Engine Optimization (AEO)', desc: 'Structuring content to capture featured snippets and voice search results.' },
      { title: 'Google Ads & PPC', desc: 'Data-driven paid search campaigns with continuous bid optimization.' },
      { title: 'Performance Marketing', desc: 'Full-funnel marketing with attribution modeling and ROAS optimization.' },
      { title: 'Email Marketing', desc: 'Automated email sequences, segmentation, and lifecycle marketing.' },
      { title: 'Conversion Rate Optimization', desc: 'A/B testing, UX analysis, and funnel optimization to maximize conversions.' },
    ],
    techStack: ['Google Analytics 4', 'Google Ads', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Hotjar', 'Google Tag Manager'],
    faqs: [
      { q: 'Do you handle Arabic SEO?', a: 'Yes, we optimize for Arabic search queries with native-level keyword research and content optimization.' },
      { q: 'What is AIO and AEO?', a: 'AIO optimizes for AI search engines like ChatGPT. AEO structures content for featured snippets and voice search results.' },
      { q: 'How do you measure marketing ROI?', a: 'We implement full-funnel attribution tracking connecting marketing spend to revenue outcomes.' },
    ],
    calculatorFields: [
      {
        id: 'channels', label: 'Marketing Channels', type: 'select', options: [
          { label: 'SEO Only', value: 'seo', multiplier: 1 },
          { label: 'SEO + PPC', value: 'seo-ppc', multiplier: 1.8 },
          { label: 'Full-Stack Marketing', value: 'full', multiplier: 3 },
        ]
      },
      {
        id: 'monthlyBudget', label: 'Monthly Ad Budget (KWD)', type: 'select', options: [
          { label: 'Under 1,000 KWD', value: 'low', multiplier: 1 },
          { label: '1,000 - 5,000 KWD', value: 'mid', multiplier: 1.3 },
          { label: '5,000+ KWD', value: 'high', multiplier: 1.8 },
        ]
      },
      { id: 'duration', label: 'Campaign Duration (months)', type: 'slider', min: 3, max: 12, step: 1, defaultValue: 6, multiplierPerUnit: 1 },
    ],
    calculatorBaseRate: 3000,
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    headline: 'Strategic Social Media Management for GCC Brands',
    summary: 'Build and grow your brand presence across social platforms with data-driven content strategies, community management, and performance analytics.',
    challenges: [
      { title: 'Low Engagement', desc: 'Social content failing to resonate with target audiences in Kuwait.' },
      { title: 'Inconsistent Branding', desc: 'Fragmented brand voice across different social platforms and languages.' },
      { title: 'Resource Constraints', desc: 'Internal teams stretched too thin to maintain consistent social presence.' },
    ],
    solutions: [
      { title: 'Content Strategy', desc: 'Platform-specific content calendars aligned with business objectives.' },
      { title: 'Community Management', desc: 'Active engagement, response management, and community building.' },
      { title: 'Influencer Partnerships', desc: 'Strategic collaborations with Kuwait and GCC influencers.' },
      { title: 'Social Analytics', desc: 'Performance tracking, audience insights, and competitive benchmarking.' },
    ],
    techStack: ['Hootsuite', 'Sprout Social', 'Canva', 'Adobe Creative Suite', 'Meta Business Suite', 'TikTok Business'],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, TikTok, X (Twitter), LinkedIn, Snapchat, and Facebook — tailored for Kuwait audiences.' },
      { q: 'Do you create bilingual content?', a: 'Yes, all content is created in both Arabic and English with culturally relevant messaging.' },
    ],
    calculatorFields: [
      { id: 'platforms', label: 'Platform Count', type: 'slider', min: 1, max: 6, step: 1, defaultValue: 3, multiplierPerUnit: 0.35 },
      {
        id: 'contentLevel', label: 'Content Volume', type: 'select', options: [
          { label: 'Basic (8 posts/month)', value: 'basic', multiplier: 1 },
          { label: 'Standard (16 posts/month)', value: 'standard', multiplier: 1.6 },
          { label: 'Premium (30+ posts/month)', value: 'premium', multiplier: 2.5 },
        ]
      },
    ],
    calculatorBaseRate: 2000,
  },
  {
    slug: 'it-staffing',
    title: 'IT Staffing',
    headline: 'Expert IT Staffing & Talent Solutions for the GCC',
    summary: 'Access pre-vetted technology professionals and dedicated teams to accelerate your projects without the overhead of permanent hiring.',
    challenges: [
      { title: 'Talent Scarcity', desc: 'Difficulty finding specialized technology professionals in the GCC market.' },
      { title: 'Hiring Timelines', desc: 'Lengthy recruitment processes delaying critical project timelines.' },
      { title: 'Skill Mismatches', desc: 'Candidates lacking the specific technical expertise projects demand.' },
    ],
    solutions: [
      { title: 'Staff Augmentation', desc: 'Individual specialists embedded within your existing team structure.' },
      { title: 'Dedicated Teams', desc: 'Complete project teams managed by Ticode with full accountability.' },
      { title: 'Contract-to-Hire', desc: 'Trial engagements with option to convert contractors to permanent roles.' },
    ],
    techStack: ['Technical Assessment Platforms', 'ATS Systems', 'Skills Verification Tools'],
    faqs: [
      { q: 'How quickly can you provide talent?', a: 'We maintain a bench of pre-vetted professionals and can typically staff within 1-2 weeks.' },
      { q: 'What roles do you cover?', a: 'Full-stack developers, DevOps engineers, data scientists, QA specialists, project managers, and more.' },
    ],
    calculatorFields: [
      { id: 'teamSize', label: 'Team Members Needed', type: 'slider', min: 1, max: 15, step: 1, defaultValue: 3, multiplierPerUnit: 1 },
      {
        id: 'seniorityLevel', label: 'Seniority Level', type: 'select', options: [
          { label: 'Junior', value: 'junior', multiplier: 1 },
          { label: 'Mid-level', value: 'mid', multiplier: 1.5 },
          { label: 'Senior', value: 'senior', multiplier: 2.2 },
        ]
      },
      { id: 'duration', label: 'Engagement Duration (months)', type: 'slider', min: 1, max: 12, step: 1, defaultValue: 6, multiplierPerUnit: 1 },
    ],
    calculatorBaseRate: 3500,
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    headline: 'Enterprise Project Management & Delivery Excellence',
    summary: 'Professional project management ensuring your technology initiatives are delivered on time, within budget, and aligned with business outcomes.',
    challenges: [
      { title: 'Scope Creep', desc: 'Uncontrolled requirement changes derailing project timelines and budgets.' },
      { title: 'Resource Conflicts', desc: 'Shared resources across projects creating bottlenecks and delays.' },
      { title: 'Stakeholder Alignment', desc: 'Miscommunication between technical teams and business stakeholders.' },
    ],
    solutions: [
      { title: 'PMO Setup', desc: 'Establish project management offices with governance frameworks.' },
      { title: 'Agile Coaching', desc: 'Transform teams with Agile/Scrum methodologies and best practices.' },
      { title: 'Program Management', desc: 'Coordinate multi-project portfolios with dependencies and risk management.' },
    ],
    techStack: ['Jira', 'Confluence', 'Monday.com', 'Microsoft Project', 'Asana', 'Slack'],
    faqs: [
      { q: 'What methodologies do you support?', a: 'Agile, Scrum, Kanban, Waterfall, and hybrid approaches based on project needs.' },
    ],
    calculatorFields: [
      { id: 'projectCount', label: 'Projects to Manage', type: 'slider', min: 1, max: 10, step: 1, defaultValue: 2, multiplierPerUnit: 1 },
      {
        id: 'pmLevel', label: 'PM Level', type: 'select', options: [
          { label: 'Project Manager', value: 'pm', multiplier: 1 },
          { label: 'Senior PM', value: 'spm', multiplier: 1.5 },
          { label: 'Program Manager', value: 'pgm', multiplier: 2 },
        ]
      },
    ],
    calculatorBaseRate: 5000,
  },
  {
    slug: 'software-testing',
    title: 'Software Testing & QA',
    headline: 'Comprehensive Software Testing & Quality Assurance',
    summary: 'Ensure software reliability, performance, and security with rigorous testing methodologies and automated quality assurance pipelines.',
    challenges: [
      { title: 'Production Defects', desc: 'Bugs reaching production causing downtime and customer dissatisfaction.' },
      { title: 'Manual Testing Bottlenecks', desc: 'Slow, error-prone manual testing delaying release cycles.' },
      { title: 'Security Vulnerabilities', desc: 'Undetected security flaws exposing systems to exploitation.' },
    ],
    solutions: [
      { title: 'Test Automation', desc: 'Automated regression, integration, and end-to-end testing suites.' },
      { title: 'Performance Testing', desc: 'Load, stress, and scalability testing for enterprise applications.' },
      { title: 'Security Testing', desc: 'Penetration testing, vulnerability assessment, and OWASP compliance.' },
      { title: 'Mobile Testing', desc: 'Cross-device and cross-platform testing for mobile applications.' },
    ],
    techStack: ['Selenium', 'Cypress', 'Playwright', 'JMeter', 'OWASP ZAP', 'Postman', 'BrowserStack'],
    faqs: [
      { q: 'Do you support Arabic UI testing?', a: 'Yes, our testing includes RTL layout verification and Arabic content rendering validation.' },
    ],
    calculatorFields: [
      {
        id: 'testingType', label: 'Testing Type', type: 'select', options: [
          { label: 'Functional Testing', value: 'func', multiplier: 1 },
          { label: 'Functional + Performance', value: 'perf', multiplier: 1.5 },
          { label: 'Full QA Suite', value: 'full', multiplier: 2.5 },
        ]
      },
      {
        id: 'automationLevel', label: 'Automation Level', type: 'select', options: [
          { label: 'Manual Only', value: 'manual', multiplier: 1 },
          { label: 'Partial Automation', value: 'partial', multiplier: 1.3 },
          { label: 'Full Automation', value: 'full', multiplier: 1.8 },
        ]
      },
    ],
    calculatorBaseRate: 6000,
  },
  {
    slug: 'network-solutions',
    title: 'Network Solutions',
    headline: 'Enterprise Network Design & Security Solutions',
    summary: 'Design, implement, and secure enterprise network infrastructure that delivers reliability, performance, and protection for your business operations.',
    challenges: [
      { title: 'Network Downtime', desc: 'Unreliable connectivity impacting business operations and productivity.' },
      { title: 'Security Threats', desc: 'Increasing sophistication of cyber attacks targeting enterprise networks.' },
      { title: 'Bandwidth Limitations', desc: 'Growing traffic demands exceeding current infrastructure capacity.' },
    ],
    solutions: [
      { title: 'Network Architecture', desc: 'Design and implementation of scalable, redundant network topologies.' },
      { title: 'Cybersecurity', desc: 'Firewalls, IDS/IPS, VPN, and zero-trust network security implementations.' },
      { title: 'SD-WAN', desc: 'Software-defined wide area networks for branch office connectivity.' },
      { title: 'Network Monitoring', desc: '24/7 network operations center with proactive alerting and incident response.' },
    ],
    techStack: ['Cisco', 'Fortinet', 'Palo Alto Networks', 'Meraki', 'SolarWinds', 'PRTG', 'Wireshark'],
    faqs: [
      { q: 'Do you provide managed network services?', a: 'Yes, we offer fully managed network operations with 24/7 monitoring and SLA-backed support.' },
    ],
    calculatorFields: [
      {
        id: 'networkSize', label: 'Network Size', type: 'select', options: [
          { label: 'Small (1-50 endpoints)', value: 'small', multiplier: 1 },
          { label: 'Medium (50-200)', value: 'medium', multiplier: 2 },
          { label: 'Large (200+)', value: 'large', multiplier: 3.5 },
        ]
      },
      {
        id: 'security', label: 'Security Level', type: 'select', options: [
          { label: 'Standard', value: 'standard', multiplier: 1 },
          { label: 'Enhanced', value: 'enhanced', multiplier: 1.5 },
          { label: 'Enterprise (Zero Trust)', value: 'zero-trust', multiplier: 2.2 },
        ]
      },
    ],
    calculatorBaseRate: 8000,
  },
  {
    slug: 'domain-email',
    title: 'Domain & Email Services',
    headline: 'Professional Domain & Email Solutions for Businesses',
    summary: 'Establish a professional digital identity with domain management (including Kuwait domain names like www.yourbrand.com.kw), enterprise email hosting, and communication infrastructure services.',
    challenges: [
      { title: 'Unprofessional Email', desc: 'Using generic email providers undermining business credibility.' },
      { title: 'Domain Management', desc: 'Complex domain portfolio management across multiple registrars.' },
      { title: 'Email Deliverability', desc: 'Important business emails landing in spam folders.' },
    ],
    solutions: [
      { title: 'Domain Registration', desc: 'Domain acquisition, transfer, and portfolio management services.' },
      { title: 'Enterprise Email', desc: 'Google Workspace and Microsoft 365 email setup and migration.' },
      { title: 'Email Security', desc: 'SPF, DKIM, DMARC configuration and anti-phishing protection.' },
    ],
    techStack: ['Google Workspace', 'Microsoft 365', 'Cloudflare', 'DMARC Analyzer'],
    faqs: [
      { q: 'Can you manage .kw domains?', a: 'Yes, we handle .com.kw and other Kuwait-specific domain extensions.' },
    ],
    calculatorFields: [
      { id: 'mailboxes', label: 'Email Accounts', type: 'slider', min: 5, max: 500, step: 5, defaultValue: 20, multiplierPerUnit: 0.02 },
      {
        id: 'provider', label: 'Email Platform', type: 'select', options: [
          { label: 'Google Workspace', value: 'google', multiplier: 1 },
          { label: 'Microsoft 365', value: 'ms365', multiplier: 1.1 },
        ]
      },
    ],
    calculatorBaseRate: 500,
  },
  {
    slug: 'data-entry',
    title: 'Data Entry Services',
    headline: 'Professional Data Entry & Digitization Services',
    summary: 'Accurate, efficient data entry and document digitization services that transform unstructured information into organized, actionable business data.',
    challenges: [
      { title: 'Data Backlog', desc: 'Mountains of paper documents and unstructured data awaiting digitization.' },
      { title: 'Accuracy Issues', desc: 'High error rates in manual data entry processes.' },
      { title: 'Resource Allocation', desc: 'Skilled employees spending time on repetitive data entry tasks.' },
    ],
    solutions: [
      { title: 'Manual Data Entry', desc: 'Trained operators for high-accuracy structured data entry.' },
      { title: 'Document Digitization', desc: 'Scanning, OCR, and digital archiving of physical documents.' },
      { title: 'Data Cleansing', desc: 'Deduplication, validation, and standardization of existing datasets.' },
      { title: 'AI-Assisted Entry', desc: 'Machine learning-enhanced data extraction reducing manual effort.' },
    ],
    techStack: ['ABBYY FineReader', 'Adobe Acrobat', 'Google Document AI', 'Custom OCR Solutions'],
    faqs: [
      { q: 'Do you handle Arabic document digitization?', a: 'Yes, our OCR solutions support Arabic text extraction with high accuracy.' },
      { q: 'What accuracy rate do you guarantee?', a: 'We maintain 99.5%+ accuracy with dual-operator verification for critical data.' },
    ],
    calculatorFields: [
      {
        id: 'volume', label: 'Monthly Volume (pages)', type: 'select', options: [
          { label: 'Under 1,000', value: 'low', multiplier: 1 },
          { label: '1,000 - 10,000', value: 'medium', multiplier: 3 },
          { label: '10,000+', value: 'high', multiplier: 8 },
        ]
      },
      {
        id: 'docType', label: 'Document Type', type: 'select', options: [
          { label: 'Structured (forms)', value: 'structured', multiplier: 1 },
          { label: 'Semi-structured', value: 'semi', multiplier: 1.5 },
          { label: 'Unstructured', value: 'unstructured', multiplier: 2 },
        ]
      },
    ],
    calculatorBaseRate: 1500,
  },
];
