import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Eventara',
  description:
    'Browse our gallery of luxury events, weddings, and celebrations across Siliguri, Darjeeling, and the Himalayan region.',
  keywords: ['gallery', 'events', 'weddings', 'photos', 'showcase'],
};

import { GalleryHero } from '@/components/sections/GalleryHero';
import { GalleryGrid } from '@/components/sections/GalleryGrid';

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}
