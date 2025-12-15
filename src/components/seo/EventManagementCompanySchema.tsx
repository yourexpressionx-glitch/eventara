/**
 * Event Management Company Schema
 * Comprehensive JSON-LD schema for Eventara as an event management company
 * Includes Organization, EventPlanningService, and LocalBusiness information
 */

export function EventManagementCompanySchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization Schema
      {
        '@type': 'Organization',
        '@id': 'https://eventaraevents.com/#organization',
        name: 'Eventara',
        alternateName: 'Eventara Event Management',
        description:
          'Premium luxury event management and planning services specializing in destination weddings, corporate events, and celebrations across the Siliguri Corridor and Darjeeling Himalayan region.',
        url: 'https://eventaraevents.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://eventaraevents.com/logo.png',
          width: 500,
          height: 500,
        },
        image: 'https://eventaraevents.com/og-image.jpg',
        foundingDate: '2024',
        founder: {
          '@type': 'Person',
          name: 'Eventara Team',
        },
        sameAs: [
          'https://www.facebook.com/eventara',
          'https://www.instagram.com/eventara',
          'https://www.linkedin.com/company/eventara',
          'https://www.whatsapp.com',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          telephone: '+91-9332345023',
          email: 'eventaraevent@gmail.com',
          areaServed: ['IN'],
          availableLanguage: ['en', 'hi'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Event Planning Centre, Siliguri',
          addressLocality: 'Siliguri',
          addressRegion: 'West Bengal',
          postalCode: '734401',
          addressCountry: 'IN',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '250',
          bestRating: '5',
          worstRating: '1',
        },
        priceRange: '₹50000 - ₹10000000',
        areaServed: [
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
            name: 'Gangtok',
          },
          {
            '@type': 'City',
            name: 'Jalpaiguri',
          },
          {
            '@type': 'City',
            name: 'Kalimpong',
          },
          {
            '@type': 'City',
            name: 'Mirik',
          },
          {
            '@type': 'City',
            name: 'Dooars',
          },
          {
            '@type': 'City',
            name: 'Kurseong',
          },
        ],
      },

      // Event Planning Service Schema
      {
        '@type': 'Service',
        '@id': 'https://eventaraevents.com/#event-planning-service',
        name: 'Premium Event Planning & Management',
        description:
          'Complete event planning and management services including venue selection, decoration, catering coordination, entertainment, and full-service event management.',
        serviceType: 'Event Planning',
        provider: {
          '@id': 'https://eventaraevents.com/#organization',
        },
        areaServed: [
          { '@type': 'City', name: 'Siliguri' },
          { '@type': 'City', name: 'Darjeeling' },
          { '@type': 'City', name: 'Gangtok' },
          { '@type': 'City', name: 'Jalpaiguri' },
          { '@type': 'City', name: 'Kalimpong' },
          { '@type': 'City', name: 'Mirik' },
          { '@type': 'City', name: 'Dooars' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Event Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Wedding Planning',
              description: 'Complete wedding planning from venue to catering',
              priceRange: '₹500000 - ₹5000000',
            },
            {
              '@type': 'Offer',
              name: 'Corporate Events',
              description: 'Conference and corporate event management',
              priceRange: '₹100000 - ₹2000000',
            },
            {
              '@type': 'Offer',
              name: 'Destination Events',
              description: 'Multi-day destination wedding and event management',
              priceRange: '₹1000000 - ₹10000000',
            },
            {
              '@type': 'Offer',
              name: 'Intimate Celebrations',
              description: 'Small gatherings, engagements, and celebrations',
              priceRange: '₹50000 - ₹500000',
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '200',
        },
      },

      // Local Business Schema for Each Service Type
      {
        '@type': 'LocalBusiness',
        '@id': 'https://eventaraevents.com/#local-business',
        name: 'Eventara - Luxury Event Management',
        image: 'https://eventaraevents.com/og-image.jpg',
        description:
          'Premier event management company specializing in luxury weddings, corporate events, and destination celebrations.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Event Planning Centre, Siliguri',
          addressLocality: 'Siliguri',
          addressRegion: 'West Bengal',
          postalCode: '734401',
          addressCountry: 'IN',
        },
        telephone: '+91-9332345023',
        email: 'eventaraevent@gmail.com',
        url: 'https://eventaraevents.com',
        priceRange: '₹50000 - ₹10000000',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '250',
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: [
          { '@type': 'City', name: 'Siliguri' },
          { '@type': 'City', name: 'Darjeeling' },
          { '@type': 'City', name: 'Gangtok' },
          { '@type': 'City', name: 'Jalpaiguri' },
          { '@type': 'City', name: 'Kalimpong' },
          { '@type': 'City', name: 'Mirik' },
          { '@type': 'City', name: 'Dooars' },
          { '@type': 'City', name: 'Kurseong' },
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: [
          'https://www.facebook.com/eventara',
          'https://www.instagram.com/eventara',
          'https://www.linkedin.com/company/eventara',
        ],
      },

      // WebSite Schema with Search Action
      {
        '@type': 'WebSite',
        '@id': 'https://eventaraevents.com/#website',
        url: 'https://eventaraevents.com',
        name: 'Eventara',
        description: 'Luxury Event Management Platform',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://eventaraevents.com/services?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        isPartOf: {
          '@id': 'https://eventaraevents.com/#organization',
        },
      },

      // BreadcrumbList for Navigation
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://eventaraevents.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://eventaraevents.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://eventaraevents.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Venues',
            item: 'https://eventaraevents.com/venues',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Contact',
            item: 'https://eventaraevents.com/contact',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
