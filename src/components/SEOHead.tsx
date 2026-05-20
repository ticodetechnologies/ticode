import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/useLanguage';

interface FAQItem {
  q: string;
  a: string;
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  schemaType?: 'Organization' | 'Service' | 'WebPage';
  serviceName?: string;
  serviceAlternateNameAr?: string;
  keywords?: string[];
  image?: string;
  faqs?: FAQItem[];
  datePublished?: string;
  dateModified?: string;
}

const BASE_URL = 'https://www.ticodetech.com';

const serviceCatalog = [
  'IT Consulting',
  'AI & Machine Learning',
  'AI Agents & Voice AI',
  'Software Development',
  'Cloud & Infrastructure',
  'Data & Analytics',
  'Digital Marketing',
  'Network Solutions',
];

const SEOHead = ({
  title,
  description,
  path,
  type = 'website',
  schemaType = 'WebPage',
  serviceName,
  serviceAlternateNameAr,
  keywords = [],
  image = '/logo.png',
  faqs = [],
  datePublished,
  dateModified,
}: SEOProps) => {
  const { currentLang } = useLanguage();
  const canonical = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const today = new Date().toISOString().split('T')[0];

  // ── Organization + LocalBusiness (comprehensive, Kuwait-anchored) ──
  const orgSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness'],
        '@id': `${BASE_URL}/#organization`,
        name: 'Ticode Technologies',
        alternateName: 'تيكود تكنولوجيز',
        url: BASE_URL,
        logo: `${BASE_URL}/logo.png`,
        image: `${BASE_URL}/logo.png`,
        description:
          'Ticode Technologies is a Kuwait-headquartered enterprise IT consulting firm specializing in board-level digital transformation, AI solutions, cloud infrastructure, and enterprise software development for GCC markets.',
        foundingLocation: {
          '@type': 'Place',
          name: 'Kuwait City, Kuwait',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Khalid Ibn Al Waleed Street, Aljazi Tower, Mezzanine 1, Office 7',
          addressLocality: 'Sharq, Kuwait City',
          addressRegion: 'Al Asimah',
          addressCountry: 'KW',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 29.3759,
          longitude: 47.9774,
        },
        email: 'info@ticodetech.com',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'info@ticodetech.com',
            availableLanguage: ['English', 'Arabic'],
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'Kuwait' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Qatar' },
          { '@type': 'Country', name: 'Bahrain' },
          { '@type': 'Country', name: 'Oman' },
        ],
        knowsAbout: [
          'IT Consulting',
          'Digital Transformation',
          'Artificial Intelligence',
          'Answer Engine Optimization',
          'Generative Engine Optimization',
          'Cloud Infrastructure',
          'Enterprise Software Development',
          'Data Analytics',
          'Cybersecurity',
          'GCC IT Strategy',
        ],
        priceRange: '$$$$',
        currenciesAccepted: 'KWD, USD, SAR, AED',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Enterprise technology services',
          itemListElement: serviceCatalog.map((name) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name,
              provider: { '@id': `${BASE_URL}/#organization` },
              areaServed: [
                { '@type': 'Country', name: 'Kuwait' },
                { '@type': 'AdministrativeArea', name: 'GCC' },
              ],
            },
          })),
        },
        sameAs: [],
      },
      ...(path === '/'
        ? [
          {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
            url: BASE_URL,
            name: 'Ticode Technologies',
            publisher: { '@id': `${BASE_URL}/#organization` },
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${BASE_URL}/insights?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
          },
        ]
        : []),
    ],
  };

  // ── Service Schema (per-service pages) ──
  const serviceSchema =
    serviceName
      ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${BASE_URL}${path}#service`,
        name: `${serviceName} Kuwait`,
        alternateName: serviceAlternateNameAr,
        description,
        provider: { '@id': `${BASE_URL}/#organization` },
        areaServed: [
          { '@type': 'Country', name: 'Kuwait' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Qatar' },
          { '@type': 'Country', name: 'Bahrain' },
          { '@type': 'Country', name: 'Oman' },
        ],
        serviceType: serviceName,
        audience: {
          '@type': 'Audience',
          audienceType: 'Enterprise C-Suite and Board-Level Executives',
        },
      }
      : null;

  // ── FAQPage Schema (auto-generated from service.faqs) ──
  const faqSchema =
    faqs.length > 0
      ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      }
      : null;

  // ── Breadcrumb ──
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...(path !== '/'
        ? [
          {
            '@type': 'ListItem',
            position: 2,
            name: title.split(' | ')[0],
            item: canonical,
          },
        ]
        : []),
    ],
  };

  // ── Article Schema (for insights/blog pages) ──
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType === 'Service' || schemaType === 'Organization' ? 'WebPage' : schemaType,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title.split(' | ')[0],
    description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    publisher: { '@id': `${BASE_URL}/#organization` },
    inLanguage: currentLang === 'ar' ? 'ar' : 'en',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
    about: [
      { '@type': 'Thing', name: 'IT consulting' },
      { '@type': 'Thing', name: 'Enterprise AI' },
      { '@type': 'Place', name: 'Kuwait' },
      { '@type': 'AdministrativeArea', name: 'GCC' },
    ],
  };

  const articleSchema =
    type === 'article'
      ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title.split(' | ')[0],
        description,
        author: { '@id': `${BASE_URL}/#organization` },
        publisher: { '@id': `${BASE_URL}/#organization` },
        mainEntityOfPage: { '@id': `${canonical}#webpage` },
        datePublished: datePublished ?? today,
        dateModified: dateModified ?? today,
        inLanguage: currentLang === 'ar' ? 'ar' : 'en',
        about: [
          { '@type': 'Thing', name: 'Digital Transformation' },
          { '@type': 'Thing', name: 'Kuwait IT Strategy' },
          { '@type': 'Place', name: 'Kuwait' },
        ],
      }
      : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ticode Technologies" />
      <meta
        property="og:locale"
        content={currentLang === 'ar' ? 'ar_KW' : 'en_US'}
      />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Ticode Technologies — Kuwait IT Consulting" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${path}`} />

      {/* Geo Tags — Kuwait City anchor */}
      <meta name="geo.region" content="KW-KU" />
      <meta name="geo.placename" content="Kuwait City" />
      <meta name="geo.position" content="29.3759;47.9774" />
      <meta name="ICBM" content="29.3759, 47.9774" />

      {/* AI Crawler hints */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <html lang={currentLang} dir={currentLang === 'ar' ? 'rtl' : 'ltr'} />

      {/* Schemas */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
