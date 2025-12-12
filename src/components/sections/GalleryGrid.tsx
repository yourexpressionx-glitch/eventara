'use client';

import { motion } from 'framer-motion';

export function GalleryGrid() {
  const galleryItems = [
    { title: 'Royal Wedding - Darjeeling', category: 'Weddings' },
    { title: 'Corporate Summit 2023', category: 'Corporate' },
    { title: 'Destination Wedding - Mirik', category: 'Weddings' },
    { title: 'Birthday Bash - Siliguri', category: 'Private Events' },
    { title: 'Pandal Decoration - Siliguri', category: 'Pandal Events' },
    { title: 'Wedding Reception - Kalimpong', category: 'Weddings' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section className="py-20 bg-rich-black px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ translateY: -8 }}
              className="card-luxury overflow-hidden h-64 flex items-end p-6 relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <p className="font-inter text-sm text-light-gold mb-1">{item.category}</p>
                <h3 className="font-playfair text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-inter text-gray-400 mb-4">
            View more events on our social media
          </p>
          <div className="flex justify-center gap-4">
            {['Instagram', 'Facebook', 'YouTube'].map((social) => (
              <button
                key={social}
                className="px-6 py-2 border border-event-gold text-event-gold rounded-lg hover:bg-event-gold/10 transition-colors"
              >
                {social}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
