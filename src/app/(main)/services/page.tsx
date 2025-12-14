import { Metadata } from 'next';
import { ServiceCatalog } from '@/components/sections/ServiceCatalog';
import { EnhancedServicesSchema } from '@/components/seo/EnhancedServicesSchema';
import { EventManagementFAQSchema } from '@/components/seo/EventManagementFAQSchema';
import { LeadMagnetsSection } from '@/components/sections/LeadMagnetsSection';

export const metadata: Metadata = {
  title: 'Event Planning Services | Eventara',
  description:
    'Comprehensive event planning and management services including weddings, corporate events, destination events, and celebrations across Siliguri Corridor and Darjeeling region.',
  keywords: [
    'event planning services',
    'wedding planning',
    'corporate event management',
    'destination events',
    'event management',
    'Siliguri events',
    'Darjeeling events',
  ],
  openGraph: {
    title: 'Event Planning Services | Eventara',
    description:
      'Premium event management services for weddings, corporate events, and celebrations',
    type: 'website',
    url: 'https://eventaraevents.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <EnhancedServicesSchema />
      <EventManagementFAQSchema />
      <ServiceCatalog />
      <LeadMagnetsSection />
    </>
  );
}
