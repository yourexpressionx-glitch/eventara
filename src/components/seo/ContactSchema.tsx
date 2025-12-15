export function ContactSchema() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eventara',
    description: 'Luxury event management and planning services',
    url: 'https://eventara.com',
    telephone: '+91-9332-345023',
    email: 'eventaraevent@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Siliguri, West Bengal',
      addressLocality: 'Siliguri',
      addressRegion: 'WB',
      postalCode: '734001',
      addressCountry: 'IN',
    },
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
        '@type': 'State',
        name: 'Northeast India',
      },
    ],
    priceRange: '₹50,000 - ₹5,00,000+',
    serviceType: [
      'Wedding Planning',
      'Event Management',
      'Corporate Events',
      'Catering',
      'Decoration',
      'Photography',
      'Entertainment',
    ],
    sameAs: [
      'https://www.facebook.com/eventara',
      'https://www.instagram.com/eventara',
      'https://www.whatsapp.com',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
