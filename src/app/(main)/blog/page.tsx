import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Eventara',
  description:
    'Read our blog for event planning tips, wedding ideas, and insights into luxury celebrations in the Darjeeling region.',
  keywords: ['blog', 'event planning', 'wedding tips', 'ideas', 'guides'],
};

import { BlogHero } from '@/components/sections/BlogHero';
import { BlogGrid } from '@/components/sections/BlogGrid';

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
