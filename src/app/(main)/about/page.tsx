import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Eventara | Luxury Event Management',
  description:
    'Learn about Eventara, the luxury event management company serving Siliguri, Darjeeling, and the Himalayan corridor since 2010.',
  keywords: [
    'about eventara',
    'event management company',
    'luxury events',
    'team',
    'experience',
  ],
};

import { AboutHero } from '@/components/sections/AboutHero';
import { AboutStory } from '@/components/sections/AboutStory';
import { TeamSection } from '@/components/sections/TeamSection';
import { AwardsSection } from '@/components/sections/AwardsSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <TeamSection />
      <AwardsSection />
    </>
  );
}
