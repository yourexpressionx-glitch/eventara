import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Event Management | Eventara',
  description:
    'Transform your vision into reality with Eventara. Luxury event planning for weddings, corporate events, and destination experiences across Darjeeling, Siliguri, and Northeast India.',
  keywords: [
    'event management',
    'luxury events',
    'wedding planning',
    'corporate events',
    'destination events',
    'Darjeeling',
    'Siliguri',
  ],
};

import { HomepageHero } from '@/components/sections/HomepageHero';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { LocationGrid } from '@/components/sections/LocationGrid';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <>
      <HomepageHero />
      <ServiceGrid />
      <LocationGrid />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
