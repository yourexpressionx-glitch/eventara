/**
 * Schema.org JSON-LD Component
 * Provides structured data for SEO
 */

import { LOCATIONS, SERVICES } from '@/lib/constants';
import { getLocationStructuredData } from '@/lib/utils';

interface JsonLdProps {
  service: (typeof SERVICES)[0];
  location: (typeof LOCATIONS)[0];
  url: string;
}

export function JsonLd({ service, location, url }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // LocalBusiness Schema
      {
        '@type': 'LocalBusiness',
        '@id': `${url}#business`,
        name: 'Eventara - Luxury Event Management',
        description: `Premium ${service.display} services in ${location.name}`,
        image: 'https://eventara.com/logo.png',
        url: 'https://eventara.com',
        telephone: '+91-9332345023',
        email: 'info@eventara.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressRegion: 'West Bengal',
          streetAddress: 'Siliguri, Darjeeling Corridor',
        },
        areaServed: LOCATIONS.map((loc) => getLocationStructuredData(loc)),
        serviceType: SERVICES.map((svc) => svc.display),
      },

      // EventPlanner Schema
      {
        '@type': 'EventPlanner',
        '@id': `${url}#eventplanner`,
        name: `Eventara - ${service.display}`,
        description: service.description,
        serviceType: service.display,
        areaServed: {
          '@type': 'City',
          name: location.name,
          url: location.wikiUrl,
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          priceRange: '₹₹₹',
          availability: 'https://schema.org/InStock',
        },
      },

      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://eventara.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: service.display,
            item: `https://eventara.com/${service.slug}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.name,
            item: url,
          },
        ],
      },

      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url: url,
        name: `${service.display} in ${location.name} | Eventara`,
        description: `Premium ${service.display} services in ${location.name}. Luxury event planning and management.`,
        isPartOf: {
          '@id': 'https://eventara.com#website',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
