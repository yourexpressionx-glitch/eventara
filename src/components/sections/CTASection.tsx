'use client';

/**
 * CTA Section with Smart WhatsApp Button
 */

import { motion } from 'framer-motion';
import { LOCATIONS, SERVICES } from '@/lib/constants';

interface CTASectionProps {
  whatsappLink: string;
  service: (typeof SERVICES)[0];
  location: (typeof LOCATIONS)[0];
}

export function CTASection({
  whatsappLink,
  service,
  location,
}: CTASectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-rich-black via-gray-900 to-rich-black px-4 md:px-8 overflow-hidden">
      {/* Accent Blurs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-event-gold opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-gold opacity-5 blur-3xl rounded-full" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold">
          Ready to Plan Your Perfect Event?
        </h2>

        <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
          Let Eventara bring your vision to life. Our expert team is ready to
          discuss your {service.display.toLowerCase()} in {location.name}.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          {/* WhatsApp Button - Smart with Service & Location */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-event-gold to-light-gold text-rich-black font-playfair font-bold text-lg rounded-lg hover:shadow-xl shadow-lg transition-shadow inline-flex items-center justify-center gap-3"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.902 10.182 1.902 3.485 6.36 4.384 9.514 1.996.375-.369.703-.768.98-1.186.365-.588.335-1.34-.154-1.597-.49-.258-1.205.164-1.738.597-.533.434-1.158.972-1.771.972-.613 0-1.238-.537-1.771-.972-.533-.434-1.248-.855-1.738-.597-.489.258-.519 1.01-.154 1.597.277.418.605.817.98 1.186 3.154 2.388 7.612 1.489 9.514-1.996 2.003-3.432 1.153-7.82-1.902-10.182a9.87 9.87 0 00-5.031-1.378Z" />
            </svg>
            Chat on WhatsApp
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:info@eventara.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-event-gold text-event-gold font-inter font-semibold text-lg rounded-lg hover:bg-event-gold/10 transition-colors inline-flex items-center justify-center gap-3"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Us
          </motion.a>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="pt-12 border-t border-event-gold/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-inter text-sm text-gray-400 mb-6">
            Trusted by 500+ events across the Darjeeling Corridor
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {['15+ Years', '98% Rated', 'Available 24/7', 'Premium Service'].map(
              (badge, idx) => (
                <div
                  key={idx}
                  className="text-center font-inter text-sm text-gray-300"
                >
                  <div className="text-event-gold font-bold text-lg">#</div>
                  {badge}
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
