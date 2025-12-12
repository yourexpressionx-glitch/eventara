import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Eventara',
  description:
    'Explore our comprehensive event management services. From wedding planning to corporate events, DJ services to floral decoration, and more.',
};

import { ServiceCatalog } from '@/components/sections/ServiceCatalog';

export default function ServicesPage() {
  return <ServiceCatalog />;
}
