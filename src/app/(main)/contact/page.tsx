import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Eventara',
  description: 'Get in touch with Eventara. Reach us via email, phone, or WhatsApp for your event inquiry.',
};

import { ContactPageContent } from '@/components/sections/ContactPageContent';

export default function ContactPage() {
  return <ContactPageContent />;
}
