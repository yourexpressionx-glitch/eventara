/**
 * FAQ Schema Component
 * Comprehensive FAQ schema for Event Management Company
 * Covers common questions about event planning, venues, services, and booking
 */

export function EventManagementFAQSchema() {
  const faqData = [
    {
      question: 'What services does Eventara offer?',
      answer:
        'Eventara offers comprehensive event planning and management services including wedding planning, corporate events, destination events, venue selection, catering coordination, decoration, entertainment arrangement, and full-service event management across the Siliguri Corridor and Darjeeling Himalayan region.',
    },
    {
      question: 'Which locations does Eventara serve?',
      answer:
        'Eventara serves multiple cities and towns including Siliguri, Darjeeling, Gangtok, Jalpaiguri, Kalimpong, Mirik, Dooars, and Kurseong with comprehensive event planning services.',
    },
    {
      question: 'What is the typical cost for event planning services?',
      answer:
        'Event planning costs vary based on event type, size, and requirements. Eventara offers packages ranging from ₹50,000 for intimate celebrations to ₹10,000,000+ for premium destination weddings. We provide customized quotes based on your specific needs.',
    },
    {
      question: 'How far in advance should I book event planning services?',
      answer:
        'We recommend booking 3-6 months in advance for optimal planning, especially for large events and destination weddings. However, we can accommodate shorter timelines based on availability and event requirements.',
    },
    {
      question: 'Does Eventara help with venue selection?',
      answer:
        'Yes, Eventara has partnerships with premium venues across all service locations. We help you select the perfect venue based on your requirements, budget, and vision for the event.',
    },
    {
      question: 'Can Eventara manage destination events?',
      answer:
        'Yes, Eventara specializes in destination event management including multi-day wedding celebrations, destination corporate events, and destination team building activities across the region.',
    },
    {
      question: 'What does full-service event management include?',
      answer:
        'Full-service management includes venue selection, decoration design, catering coordination, entertainment arrangement, guest accommodation coordination, timeline management, vendor coordination, setup, execution, and post-event support.',
    },
    {
      question: 'How can I contact Eventara for event planning?',
      answer:
        'You can contact Eventara via WhatsApp at +91-9332345023, email at eventaraevent@gmail.com, or fill out the contact form on our website. We offer free consultation for event planning requirements.',
    },
    {
      question: 'Does Eventara offer customized event packages?',
      answer:
        'Yes, all our packages are customized based on your event type, budget, preferences, and requirements. We work closely with you to create an event that matches your vision and expectations.',
    },
    {
      question: 'What types of events can Eventara manage?',
      answer:
        'Eventara manages various event types including weddings, engagement ceremonies, corporate events, team building activities, product launches, conferences, intimate celebrations, milestone events, and destination celebrations.',
    },
    {
      question: 'Are your event planning services available year-round?',
      answer:
        'Yes, Eventara offers event planning services throughout the year. However, peak seasons may have limited availability, so early booking is recommended.',
    },
    {
      question: 'How does Eventara handle event planning for large groups?',
      answer:
        'For large groups (100+ guests), we assign a dedicated event team, develop comprehensive timelines, coordinate with multiple vendors, manage logistics, and provide on-site coordination throughout the event.',
    },
    {
      question: 'Can Eventara provide vendor recommendations?',
      answer:
        'Yes, we have curated lists of trusted vendors including caterers, decorators, photographers, musicians, and accommodation providers. We provide recommendations based on your preferences and budget.',
    },
    {
      question: 'What is the booking process for Eventara services?',
      answer:
        'The booking process includes: 1) Initial consultation about your event, 2) Proposal and quotation, 3) Agreement signing, 4) Advance payment as per terms, 5) Detailed planning and execution, 6) Event day management.',
    },
    {
      question: 'Does Eventara provide post-wedding services?',
      answer:
        'Yes, we handle post-event responsibilities including vendor billing settlement, asset recovery, guest feedback collection, and post-event reporting.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Service-Specific FAQ Schema
 * For individual service pages (e.g., wedding planner, corporate events)
 */
export function ServiceFAQSchema({
  serviceType,
  faqs,
}: {
  serviceType: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${serviceType} FAQs | Eventara`,
    description: `Frequently asked questions about ${serviceType.toLowerCase()} services by Eventara`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Location-Based FAQ Schema
 * For service-location combination pages
 */
export function LocationFAQSchema({
  service,
  location,
}: {
  service: string;
  location: string;
}) {
  const faqs = [
    {
      question: `What are the best wedding venues in ${location}?`,
      answer: `Eventara has partnerships with premium wedding venues across ${location}. We help you choose the perfect venue based on your requirements, guest count, budget, and vision. Our team has extensive knowledge of local venues and their capabilities.`,
    },
    {
      question: `How much does ${service.toLowerCase()} cost in ${location}?`,
      answer: `${service} costs in ${location} vary based on guest count, venue selection, decoration preferences, and catering options. Eventara offers packages ranging from ₹50,000 to ₹10,000,000+. We provide free quotes tailored to your requirements.`,
    },
    {
      question: `What is the best season for ${service.toLowerCase()} in ${location}?`,
      answer: `${location} has distinct seasons. The cooler months (October-February) are ideal for outdoor events. We help you plan around weather conditions and local festivals to ensure the best event experience.`,
    },
    {
      question: `Can Eventara manage destination ${service.toLowerCase()} in ${location}?`,
      answer: `Yes, Eventara specializes in destination event management in ${location}. We handle guest accommodation, transportation, venue coordination, catering, entertainment, and all logistics for multi-day events.`,
    },
    {
      question: `What accommodation options are available for guests in ${location}?`,
      answer: `${location} offers various accommodation options from budget hotels to luxury resorts. Eventara can arrange group bookings, negotiate rates, and coordinate accommodation logistics for your guests.`,
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${service} in ${location} - FAQs`,
    description: `Frequently asked questions about ${service.toLowerCase()} services in ${location}`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
