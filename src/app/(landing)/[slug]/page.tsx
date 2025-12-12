/**
 * PROGRAMMATIC SEO ENGINE
 * Dynamic route: /[slug] (e.g., /wedding-planner-darjeeling)
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generateAllSlugCombinations,
  parseSlug,
} from '@/lib/constants';
import {
  generateTitle,
  generateDescription,
  getWhatsAppLink,
} from '@/lib/utils';
import { JsonLd } from '@/components/seo/JsonLd';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceDetailSection } from '@/components/sections/ServiceDetailSection';
import { LocationHighlights } from '@/components/sections/LocationHighlights';
import { CTASection } from '@/components/sections/CTASection';
import { Breadcrumb } from '@/components/sections/Breadcrumb';
import { RelatedServices } from '@/components/sections/RelatedServices';

interface SlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate metadata for each service-location combination
 */
export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    return {
      title: 'Not Found | Eventara',
    };
  }

  const { service, location } = parsed;
  const title = generateTitle(service.display, location.name, 'long');
  const description = generateDescription(service.display, location.name);
  const canonical = `https://eventara.com/${slug}`;

  return {
    title,
    description,
    keywords: [
      ...service.keywords,
      location.name,
      'event management',
      'luxury events',
      'Eventara',
    ],
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Eventara',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    alternates: {
      canonical,
    },
  };
}

/**
 * Generate static params for all service-location combinations
 */
export async function generateStaticParams() {
  const slugs = generateAllSlugCombinations();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { service, location } = parsed;
  const canonicalUrl = `https://eventara.com/${slug}`;
  const whatsappMessage = `Hi Eventara, I'm interested in ${service.display} services in ${location.name}. Please provide details and pricing.`;
  const whatsappLink = getWhatsAppLink('919332345023', whatsappMessage);

  return (
    <>
      {/* SEO Metadata */}
      <JsonLd service={service} location={location} url={canonicalUrl} />
      <ServiceSchema
        service={service.slug}
        location={location.slug}
        serviceDisplay={service.display}
        locationDisplay={location.name}
        description={`Professional ${service.display} services in ${location.name}. 500+ events completed with 98% satisfaction.`}
        siteURL="https://eventaraevents.com"
      />

      {/* Breadcrumb Navigation - Authority Distribution */}
      <Breadcrumb
        service={service.slug}
        location={location.slug}
        serviceDisplay={service.display}
        locationDisplay={location.name}
      />

      {/* Hero Section */}
      <HeroSection
        title={generateTitle(service.display, location.name)}
        subtitle={location.description}
        service={service}
        location={location}
      />

      {/* Service Details */}
      <ServiceDetailSection service={service} location={location} />

      {/* Location Highlights */}
      <LocationHighlights location={location} />

      {/* Related Services - Internal Linking Hub */}
      <RelatedServices
        currentService={service.slug}
        currentLocation={location.slug}
        limit={8}
      />

      {/* CTA Section */}
      <CTASection
        whatsappLink={whatsappLink}
        service={service}
        location={location}
      />
    </>
  );
}
