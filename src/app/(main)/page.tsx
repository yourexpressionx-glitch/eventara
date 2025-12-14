import { Metadata } from 'next';
import { FAQSchema } from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Luxury Event Management & Wedding Planner | Eventara | 500+ Events',
  description:
    'Eventara transforms your vision into unforgettable events. 500+ destination weddings, corporate summits & luxury experiences. 15 years expertise. 98% client satisfaction. Book your free consultation today.',
  keywords: [
    'event management',
    'luxury events',
    'wedding planning',
    'wedding planner',
    'corporate events',
    'destination events',
    'event planner',
    'Darjeeling event planner',
    'Siliguri wedding planner',
    'event coordination',
    'destination wedding',
    'hill station wedding',
    'tea garden wedding',
    'Northeast India events',
    'luxury destination wedding',
    'premium event management',
    'professional event coordinator',
  ],
};

import { HomepageHero } from '@/components/sections/HomepageHero';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { LocationGrid } from '@/components/sections/LocationGrid';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { LeadMagnetsSection } from '@/components/sections/LeadMagnetsSection';
import { FAQSection } from '@/components/sections/FAQSection';

const homepageFAQs = [
  {
    question: 'How quickly can Eventara plan my event?',
    answer: 'We\'ve successfully coordinated luxury events in as little as 30 days. However, for destination weddings and complex events, we recommend 3-6 months advance planning to secure premium venues, vendors, and ensure flawless execution. Our rapid-planning team is available 24/7 for urgent bookings.',
  },
  {
    question: 'Why choose Eventara over other event planners?',
    answer: 'With 500+ events delivered and 98% client satisfaction, Eventara brings 15 years of certified expertise, exclusive vendor relationships, and a proven track record in Northeast India. We handle every detail—from pandal artistry to logistics—so you don\'t have to. Your dream event is our responsibility.',
  },
  {
    question: 'What makes Eventara\'s destination weddings special?',
    answer: 'We don\'t just organize events—we create experiences. Our destination management services include venue scouting, accommodation coordination, travel logistics, vendor curation, and on-ground coordination. We\'ve hosted unforgettable weddings in Darjeeling, Gangtok, Kalimpong, and across the Northeast.',
  },
  {
    question: 'How do I get started with a free consultation?',
    answer: 'Simply click "Get Free Consultation" on our homepage or visit /contact. We respond within 24 hours with personalized recommendations, vendor options, and pricing based on your vision, guest count, and budget. No obligation—we just want to help you plan the perfect event.',
  },
];

export default function Home() {
  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      <HomepageHero />
      <ServiceGrid />
      <LocationGrid />
      <LeadMagnetsSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
