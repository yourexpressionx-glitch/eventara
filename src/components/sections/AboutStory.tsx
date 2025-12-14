'use client';

import { motion } from 'framer-motion';

export function AboutStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-rich-black via-burgundy-dark/30 to-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h2 className="font-playfair text-5xl font-bold">
              <span className="text-gradient">Our Mission</span>
            </h2>

            <div className="space-y-4 font-inter text-cream-light/90">
              <p>
                At Eventara, we believe every celebration tells a unique story. Our
                mission is to transform your vision into an unforgettable reality by
                combining creative excellence with meticulous execution.
              </p>
              <p>
                From intimate gatherings to grand destination weddings, we bring
                expertise, luxury, and heart to every event we create.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                'Award-winning event designers',
                'Trusted by 2000+ clients',
                'Full-service luxury management',
                'Located across 7 regions',
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-cream-light/95"
                >
                  <div className="w-2 h-2 rounded-full bg-event-gold flex-shrink-0" />
                  <span className="font-inter">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card-luxury p-8 space-y-6"
          >
            <h3 className="font-playfair text-2xl font-bold text-event-gold">
              Why Choose Eventara?
            </h3>
            {[
              {
                title: 'Luxury Expertise',
                desc: 'Specializing in high-end destination events',
              },
              {
                title: 'Local Knowledge',
                desc: 'Deep connections across the Himalayan region',
              },
              {
                title: 'Personalized Service',
                desc: 'Custom solutions for your unique vision',
              },
              {
                title: '24/7 Support',
                desc: 'Complete coordination from planning to execution',
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-playfair text-lg font-bold text-light-gold mb-2">
                  {item.title}
                </h4>
                <p className="font-inter text-cream-light/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
