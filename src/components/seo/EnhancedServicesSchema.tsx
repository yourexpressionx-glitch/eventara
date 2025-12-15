/**
 * Enhanced Services & LocalBusiness Schema Component
 * Provides comprehensive schema for all event planning services
 */

import { SERVICES, LOCATIONS } from '@/lib/constants';

export function EnhancedServicesSchema() {
  const serviceSchemas = SERVICES.map((service) => ({
    '@type': 'Service',
    '@id': `https://eventaraevents.com/services/${service.slug}#service`,
    name: service.display,
    description: service.description,
    serviceType: 'Event Planning & Management',
    provider: {
      '@type': 'Organization',
      name: 'Eventara',
      url: 'https://eventaraevents.com',
    },
    areaServed: LOCATIONS.map((loc) => ({
      '@type': 'City',
      name: loc.display,
    })),
    image: 'https://eventaraevents.com/og-image.jpg',
    priceRange: '₹50000 - ₹10000000',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '200',
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Main service catalog
      {
        '@type': 'CollectionPage',
        '@id': 'https://eventaraevents.com/services#collection',
        name: 'Event Planning Services',
        description:
          'Comprehensive event planning and management services across the Siliguri Corridor and Darjeeling Himalayan region',
        url: 'https://eventaraevents.com/services',
        itemListElement: serviceSchemas.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: service,
        })),
      },
      ...serviceSchemas,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Location-based LocalBusiness Schema
 * Creates business profiles for each service-location combination
 */
export function LocationBasedLocalBusinessSchema({
  service,
  location,
  serviceDisplay,
  locationDisplay,
}: {
  service: string;
  location: string;
  serviceDisplay: string;
  locationDisplay: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://eventaraevents.com/${service}-${location}#business`,
    name: `${serviceDisplay} in ${locationDisplay} | Eventara`,
    alternateName: `Eventara ${serviceDisplay} ${locationDisplay}`,
    description: `Professional ${serviceDisplay.toLowerCase()} services in ${locationDisplay}. Premium event planning and management by Eventara for weddings, corporate events, and celebrations.`,
    url: `https://eventaraevents.com/${service}-${location}`,
    image: 'https://eventaraevents.com/og-image.jpg',
    telephone: '+91-9332345023',
    email: 'eventaraevent@gmail.com',
    priceRange: '₹50000 - ₹10000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${locationDisplay}, West Bengal`,
      addressLocality: locationDisplay,
      addressRegion: 'West Bengal',
      addressCountry: 'IN',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: [
      {
        '@type': 'City',
        name: locationDisplay,
      },
      {
        '@type': 'City',
        name: 'Siliguri',
      },
      {
        '@type': 'City',
        name: 'Darjeeling',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    offers: {
      '@type': 'Offer',
      name: `${serviceDisplay} Planning Package`,
      description: `Complete ${serviceDisplay.toLowerCase()} planning and management services in ${locationDisplay}`,
      priceCurrency: 'INR',
      priceRange: '₹50000 - ₹10000000',
      availability: 'https://schema.org/InStock',
      availabilityEnds: '2026-12-31',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9332345023',
      email: 'eventaraevent@gmail.com',
      areaServed: ['IN'],
      availableLanguage: ['en', 'hi'],
    },
    hasMap: {
      '@type': 'Map',
      url: `https://www.google.com/maps/search/${locationDisplay}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
