'use client';

import Link from 'next/link';
import { SERVICES, LOCATIONS } from '@/lib/constants';

interface RelatedServicesProps {
  currentService: string;
  currentLocation: string;
  limit?: number;
}

export function RelatedServices({
  currentService,
  currentLocation,
  limit = 8,
}: RelatedServicesProps) {
  // Find related services in same category
  const currentServiceData = SERVICES.find((s) => s.slug === currentService);
  const currentLocationData = LOCATIONS.find((l) => l.slug === currentLocation);

  if (!currentServiceData || !currentLocationData) return null;

  // Get services in same category
  const relatedServices = SERVICES.filter(
    (s) =>
      s.category === currentServiceData.category &&
      s.slug !== currentService
  ).slice(0, Math.ceil(limit / 2));

  // Get same service in other locations
  const otherLocations = LOCATIONS.filter(
    (l) => l.slug !== currentLocation
  ).slice(0, Math.ceil(limit / 2));

  return (
    <section className="related-services-section py-12 px-4 md:px-8 bg-gradient-to-b from-black/50 to-black/80 border-t border-gold/20">
      <div className="max-w-6xl mx-auto">
        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-playfair text-gold mb-6 border-l-4 border-gold pl-4">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}-${currentLocation}`}
                  title={`${service.display} in ${currentLocationData.display}`}
                  className="group p-4 bg-gradient-to-br from-gold/10 to-black border border-gold/30 hover:border-gold/60 rounded-lg transition-all duration-300"
                >
                  <h3 className="text-gold group-hover:text-light-gold font-semibold">
                    {service.display}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    in {currentLocationData.display}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Same Service in Other Locations */}
        {otherLocations.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-playfair text-gold mb-6 border-l-4 border-gold pl-4">
              {currentServiceData.display} in Other Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/${currentService}-${location.slug}`}
                  title={`${currentServiceData.display} in ${location.display}`}
                  className="group p-4 bg-gradient-to-br from-gold/10 to-black border border-gold/30 hover:border-gold/60 rounded-lg transition-all duration-300"
                >
                  <h3 className="text-gold group-hover:text-light-gold font-semibold">
                    {currentServiceData.display}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{location.display}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
