'use client';

/**
 * Service Detail Section
 * Dynamically rendered based on service type
 */

import { LOCATIONS, SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';

interface ServiceDetailSectionProps {
  service: (typeof SERVICES)[0];
  location: (typeof LOCATIONS)[0];
}

export function ServiceDetailSection({
  service,
  location,
}: ServiceDetailSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Conditional content based on service type
  const getServiceContent = () => {
    switch (service.slug) {
      case 'pandal-decoration':
        return {
          heading: 'Waterproof Structures & Thematic Design',
          highlights: [
            'Weather-resistant materials',
            'Custom structural design',
            'Theme-based aesthetics',
            'Quick installation & dismantling',
          ],
          description:
            'Our pandal decoration services create stunning temporary structures that are both beautiful and durable. We specialize in custom designs that match your event theme while ensuring protection from weather elements.',
        };
      case 'wedding-planner':
        return {
          heading: 'Complete Destination Wedding Management',
          highlights: [
            'Hotel coordination & logistics',
            'Guest accommodation management',
            'Multi-day event planning',
            'Vendor coordination',
          ],
          description:
            'From concept to celebration, we handle every detail of your destination wedding. Our comprehensive planning includes venue selection, vendor management, and seamless day-of coordination.',
        };
      case 'floral-decor':
        return {
          heading: 'Luxury Floral Arrangements & Design',
          highlights: [
            'Fresh seasonal flowers',
            'Custom backdrop designs',
            'Bridal bouquet creation',
            'Theme-based florals',
          ],
          description:
            'Elevate your event with our exquisite floral designs. We source premium flowers and create stunning arrangements that transform your venue into a botanical paradise.',
        };
      case 'catering':
        return {
          heading: 'Multi-Cuisine Gourmet Catering',
          highlights: [
            'Traditional & modern cuisines',
            'Kulhar tea & street food stations',
            'Gourmet dining experiences',
            'Dietary accommodations',
          ],
          description:
            'Our catering service offers a culinary journey from traditional Kulhar tea to gourmet dining. We handle everything from menu planning to service, ensuring your guests enjoy an unforgettable meal.',
        };
      case 'dj-sound-system':
        return {
          heading: 'Professional DJ & Audio Management',
          highlights: [
            'State-of-the-art equipment',
            'Professional sound engineering',
            'Music curation & mixing',
            'Live entertainment setup',
          ],
          description:
            'Set the perfect mood with our professional DJ services. We provide high-quality sound systems and experienced DJs who understand how to energize your crowd.',
        };
      default:
        return {
          heading: service.display,
          highlights: service.highlights || [
            'Professional expertise',
            'Quality service',
            'Custom solutions',
            'Client satisfaction',
          ],
          description: service.description,
        };
    }
  };

  const content = getServiceContent();

  return (
    <section className="relative py-20 bg-gradient-to-b from-rich-black via-gray-900/50 to-rich-black px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left: Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-event-gold to-light-gold">
                {content.heading}
              </span>
            </h2>

            <p className="font-inter text-gray-300 text-lg leading-relaxed">
              {content.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              {content.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <div className="w-2 h-2 rounded-full bg-event-gold flex-shrink-0" />
                  <span className="font-inter">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats/Info */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Events Completed', value: '500+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Service Locations', value: '7' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-event-gold/10 to-light-gold/5 border border-event-gold/30 rounded-lg p-6 text-center backdrop-blur-sm"
              >
                <div className="font-playfair text-3xl font-bold text-event-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Service-Specific Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-event-gold/10 via-light-gold/5 to-event-gold/10 border border-event-gold/20 rounded-xl p-8"
        >
          <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
            Why Choose Eventara for {service.display}?
          </h3>
          <p className="font-inter text-gray-300 mb-4">
            As {location.name}'s trusted event management partner, we bring
            expertise, creativity, and meticulous attention to detail to every
            {service.display.toLowerCase()} service we provide.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-light-gold">✓</span> Local expertise in{' '}
              {location.name}
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light-gold">✓</span> Premium vendor network
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light-gold">✓</span> Luxury standards
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light-gold">✓</span> 24/7 event support
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
