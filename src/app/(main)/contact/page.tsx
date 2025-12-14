import { Metadata } from 'next';
import { ContactSchema } from '@/components/seo/ContactSchema';
import { ContactPageContent } from '@/components/sections/ContactPageContent';
import { InlineLeadMagnet } from '@/components/sections/InlineLeadMagnet';

export const metadata: Metadata = {
  title: 'Contact Eventara | Book Event Planning Services | Darjeeling, Siliguri',
  description: 'Contact Eventara luxury event management. Phone: +91-9332-345023 | WhatsApp available | Email: info@eventara.com. Free consultation for weddings & corporate events in Darjeeling, Siliguri.',
  keywords: [
    'contact eventara',
    'event planning services',
    'wedding planner contact',
    'Darjeeling event planner',
    'Siliguri event management',
    'book event planner',
    'event coordination',
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <div className="space-y-12">
        <ContactPageContent />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-playfair font-bold text-event-gold mb-8 text-center">
            Before You Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <InlineLeadMagnet magnet="checklist" layout="vertical" />
            <InlineLeadMagnet magnet="budget" layout="vertical" />
          </div>
        </div>
      </div>
    </>
  );
}
