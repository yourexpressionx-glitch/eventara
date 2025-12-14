'use client';

import Link from 'next/link';

interface BreadcrumbProps {
  service: string;
  location: string;
  serviceDisplay?: string;
  locationDisplay?: string;
}

export function Breadcrumb({
  service,
  location,
  serviceDisplay = service.replace(/-/g, ' '),
  locationDisplay = location.replace(/-/g, ' '),
}: BreadcrumbProps) {
  // Capitalize first letter
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const displayService = capitalize(serviceDisplay);
  const displayLocation = capitalize(locationDisplay);

  return (
    <nav className="breadcrumb-container py-4 px-3 sm:px-4 md:px-8 bg-gradient-to-r from-black via-black to-black/95">
      <ol className="flex flex-wrap items-center gap-2 max-w-6xl mx-auto">
        <li>
          <Link
            href="/"
            title="Home"
            className="text-gold hover:text-light-gold transition-colors duration-200"
          >
            Home
          </Link>
        </li>

        <li className="text-cream-light/50">/</li>

        <li>
          <Link
            href={`/${service}-${location}`}
            title={`${displayService} Services in ${displayLocation}`}
            className="text-gold hover:text-light-gold transition-colors duration-200"
          >
            {displayService}
          </Link>
        </li>

        <li className="text-cream-light/50">/</li>

        <li className="text-light-gold font-medium" aria-current="page">
          {displayLocation}
        </li>
      </ol>

      {/* Schema.org BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
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
                name: displayService,
                item: `https://eventaraevents.com/${service}-${location}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: displayLocation,
                item: `https://eventaraevents.com/${service}-${location}`,
              },
            ],
          }),
        }}
      />
    </nav>
  );
}
