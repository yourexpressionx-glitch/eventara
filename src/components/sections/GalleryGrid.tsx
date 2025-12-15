'use client';

import { motion } from 'framer-motion';

export function GalleryGrid() {
  const galleryItems = [
    { 
      title: 'Royal Wedding - Darjeeling', 
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop'
    },
    { 
      title: 'Corporate Summit 2023', 
      category: 'Corporate',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop'
    },
    { 
      title: 'Destination Wedding - Mirik', 
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=400&fit=crop'
    },
    { 
      title: 'Birthday Bash - Siliguri', 
      category: 'Private Events',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=400&fit=crop'
    },
    { 
      title: 'Pandal Decoration - Siliguri', 
      category: 'Pandal Events',
      image: 'https://images.unsplash.com/photo-1540575467063-178f50002dc9?w=500&h=400&fit=crop'
    },
    { 
      title: 'Wedding Reception - Kalimpong', 
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop'
    },
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
    <section className="py-12 sm:py-16 md:py-20 bg-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
              className="card-luxury overflow-hidden h-64 flex items-end p-6 relative group cursor-pointer bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
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
          <p className="font-inter text-cream-light/70 mb-4">
            View more events on our social media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/eventaraevents/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-event-gold text-event-gold rounded-lg hover:bg-event-gold/10 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577290076145"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-event-gold text-event-gold rounded-lg hover:bg-event-gold/10 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@eventara"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-event-gold text-event-gold rounded-lg hover:bg-event-gold/10 transition-colors"
            >
              YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
