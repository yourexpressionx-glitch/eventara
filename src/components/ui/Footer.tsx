/**
 * Footer Component
 */

import Link from 'next/link';
import { LOCATIONS, SERVICES } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Get sample service slugs
  const sampleServices = SERVICES.slice(0, 6);
  const sampleLocations = LOCATIONS.slice(0, 4);

  // Get primary hub services for footer links
  const hubServices = [
    SERVICES.find(s => s.slug === 'wedding-planner'),
    SERVICES.find(s => s.slug === 'event-planner'),
    SERVICES.find(s => s.slug === 'decoration-services'),
    SERVICES.find(s => s.slug === 'venue-booking'),
  ].filter(Boolean);

  return (
    <footer className="bg-gradient-to-b from-rich-black to-black border-t border-event-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Authority Link Hub - Strategic Distribution */}
        <div className="mb-12 pb-12 border-b border-event-gold/10">
          <h3 className="font-playfair text-lg font-bold text-event-gold mb-6">
            Event Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hubServices.map((service) =>
              service ? (
                <div key={service.slug}>
                  <Link
                    href={`/${service.slug}-siliguri`}
                    className="font-playfair text-gold hover:text-light-gold transition-colors font-semibold mb-3 block"
                    title={`${service.display} in Siliguri`}
                  >
                    {service.display}
                  </Link>
                  <ul className="space-y-2">
                    {LOCATIONS.slice(0, 4).map((location) => (
                      <li key={`${service.slug}-${location.slug}`}>
                        <Link
                          href={`/${service.slug}-${location.slug}`}
                          className="font-inter text-gray-400 hover:text-event-gold transition-colors text-sm"
                          title={`${service.display} in ${location.display}`}
                        >
                          {location.display}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-event-gold">
              EVENTARA
            </h3>
            <p className="font-inter text-gray-400 text-sm">
              Luxury event management for the Darjeeling Corridor and Northeast
              India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-event-gold hover:text-light-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-event-gold hover:text-light-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.33V9.25h2.96V7.02c0-2.92 1.78-4.51 4.39-4.51 1.25 0 2.32.09 2.63.13v3.05h-1.81c-1.42 0-1.69.67-1.69 1.66v2.17h3.37l-.44 3.54h-2.93V20" />
                </svg>
              </a>
              <a href="#" className="text-event-gold hover:text-light-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.945v5.442h-3.554s.05-8.814 0-9.731h3.554v1.375c.428-.659 1.191-1.592 2.897-1.592 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.182 0 1.915.755 1.915 1.71 0 .951-.733 1.71-1.954 1.71zm1.581 11.597H3.635V9.721h3.283v10.731zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-event-gold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {sampleServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}-siliguri`}
                    className="font-inter text-gray-400 hover:text-event-gold transition-colors text-sm"
                  >
                    {service.display}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-inter text-event-gold hover:text-light-gold transition-colors text-sm font-semibold"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-event-gold mb-4">
              Locations
            </h4>
            <ul className="space-y-2">
              {sampleLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/wedding-planner-${location.slug}`}
                    className="font-inter text-gray-400 hover:text-event-gold transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="font-inter text-gray-500 text-sm">
                  +3 more regions
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-event-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-inter text-sm text-gray-400">
              <li>
                <a
                  href="tel:+919332345023"
                  className="hover:text-event-gold transition-colors"
                >
                  +91 93323 45023
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eventara.com"
                  className="hover:text-event-gold transition-colors"
                >
                  info@eventara.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919332345023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-event-gold transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.902 10.182 1.902 3.485 6.36 4.384 9.514 1.996.375-.369.703-.768.98-1.186.365-.588.335-1.34-.154-1.597-.49-.258-1.205.164-1.738.597-.533.434-1.158.972-1.771.972-.613 0-1.238-.537-1.771-.972-.533-.434-1.248-.855-1.738-.597-.489.258-.519 1.01-.154 1.597.277.418.605.817.98 1.186 3.154 2.388 7.612 1.489 9.514-1.996 2.003-3.432 1.153-7.82-1.902-10.182a9.87 9.87 0 00-5.031-1.378Z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-event-gold/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between font-inter text-sm text-gray-400">
          <p>© {currentYear} Eventara. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-event-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-event-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-event-gold transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
