import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venues | Eventara',
  description:
    'Discover premium venues for weddings and events across Siliguri, Darjeeling, Gangtok, and the Himalayan corridor.',
  keywords: [
    'venues',
    'wedding venues',
    'event spaces',
    'halls',
    'resorts',
    'banquet',
  ],
};

import { VenuesHero } from '@/components/sections/VenuesHero';
import { VenuesGrid } from '@/components/sections/VenuesGrid';

export default function VenuesPage() {
  return (
    <>
      <VenuesHero />
      <VenuesGrid />
    </>
  );
}
