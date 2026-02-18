import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/useLanguage';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  schemaType?: 'Organization' | 'Service' | 'WebPage';
  serviceName?: string;
  keywords?: string[];
  image?: string;
}

const SEOHead = ({
  title,
  description,
  path,
  type = 'website',
  schemaType = 'WebPage',
  serviceName,
  keywords = [],
  image = '/logo.png'
}: SEOProps) => {
  const { currentLang } = useLanguage();
  const baseUrl = 'https://www.ticodetech.com';
  const canonical = `${baseUrl}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ticode Technologies',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Enterprise-grade IT, AI, and digital transformation solutions for Kuwait and the GCC.',
    address: { '@type': 'PostalAddress', addressLocality: 'Kuwait City', addressCountry: 'KW' },
    areaServed: [
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'Qatar' },
      { '@type': 'Country', name: 'Oman' },
    ],
    contactPoint: { '@type': 'ContactPoint', email: 'info@ticodetech.com', contactType: 'sales' },
    sameAs: [
      // Add social profiles here if available
    ]
  };

  const serviceSchema = serviceName ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: { '@type': 'Organization', name: 'Ticode Technologies' },
    areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 29.3759, longitude: 47.9774 }, geoRadius: '2000' },
    description,
  } : null;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      ...(path !== '/' ? [{ '@type': 'ListItem', position: 2, name: title.split(' | ')[0], item: canonical }] : []),
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ticode Technologies" />
      <meta property="og:locale" content={currentLang === 'ar' ? 'ar_KW' : 'en_US'} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="ar" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${path}`} />

      {/* Geo Tags */}
      <meta name="geo.region" content="KW" />
      <meta name="geo.placename" content="Kuwait City" />
      <meta name="geo.position" content="29.3759;47.9774" />
      <meta name="ICBM" content="29.3759, 47.9774" />

      <html lang={currentLang} dir={currentLang === 'ar' ? 'rtl' : 'ltr'} />

      {/* Schemas */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      {serviceSchema && <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>}
    </Helmet>
  );
};

export default SEOHead;
