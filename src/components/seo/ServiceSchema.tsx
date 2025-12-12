interface ServiceSchemaProps {
  service: string;
  location: string;
  serviceDisplay: string;
  locationDisplay: string;
  description: string;
  siteURL?: string;
}

export function ServiceSchema({
  service,
  location,
  serviceDisplay,
  locationDisplay,
  description,
  siteURL = 'https://eventaraevents.com',
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteURL}/${service}-${location}`,
    name: `${serviceDisplay} in ${locationDisplay} | Eventara`,
    url: `${siteURL}/${service}-${location}`,
    description: description,
    telephone: '+919999999999', // Update with actual phone
    email: 'contact@eventaraevents.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Event Planning Centre', // Update with actual address
      addressLocality: locationDisplay,
      addressRegion: 'West Bengal',
      postalCode: '734401',
      addressCountry: 'IN',
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
      {
        '@type': 'City',
        name: 'Kalimpong',
      },
    ],
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    sameAs: [
      'https://www.facebook.com/eventara',
      'https://www.instagram.com/eventara',
      'https://www.linkedin.com/company/eventara',
      'https://www.youtube.com/@eventara',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500',
      reviewCount: '500',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        reviewBody: '500+ successful events completed with 98% client satisfaction',
        author: {
          '@type': 'Organization',
          name: 'Eventara',
        },
      },
    ],
    image: `${siteURL}/og-image.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteURL}/logo.png`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  siteURL?: string;
}

export function OrganizationSchema({
  siteURL = 'https://eventaraevents.com',
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eventara',
    alternateName: 'Eventara Events',
    url: siteURL,
    logo: `${siteURL}/logo.png`,
    description: 'Professional event planning services for weddings, corporate events, and celebrations',
    sameAs: [
      'https://www.facebook.com/eventara',
      'https://www.instagram.com/eventara',
      'https://www.linkedin.com/company/eventara',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+919999999999',
      email: 'contact@eventaraevents.com',
      areaServed: ['IN'],
      availableLanguageID: ['en', 'hi'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
