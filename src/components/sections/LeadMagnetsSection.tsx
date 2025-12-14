'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LeadMagnetModal } from '../forms/LeadMagnetModal';

export function LeadMagnetsSection() {
  const [activeModal, setActiveModal] = useState<'checklist' | 'budget' | 'calculator' | null>(
    null
  );

  const magnets = [
    {
      id: 'checklist',
      icon: '✓',
      title: 'Wedding Planning Checklist',
      description: '50+ essential items to organize your perfect wedding',
      features: ['Timeline breakdown', 'Budget guide', 'Vendor checklist'],
    },
    {
      id: 'budget',
      icon: '₹',
      title: 'Budget Planning Guide',
      description: 'Complete guide to plan and manage wedding finances',
      features: ['Cost estimation', 'Category breakdown', 'Savings tips'],
    },
    {
      id: 'calculator',
      icon: '🧮',
      title: 'Cost Calculator',
      description: 'Instantly calculate wedding costs by service type',
      features: ['Real-time estimates', 'Regional pricing', 'Export reports'],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-rich-black to-burgundy-dark border-y border-event-gold/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Free Wedding Planning Tools
          </h2>
          <p className="text-lg text-cream-light/80 max-w-2xl mx-auto">
            Get instant access to professional tools to help you plan your dream wedding. Download
            our guides, use our calculators, and get personalized planning assistance.
          </p>
        </motion.div>

        {/* Magnets Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {magnets.map((magnet, index) => (
            <motion.div
              key={magnet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveModal(magnet.id as any)}
            >
              <div className="card-luxury p-6 h-full hover:border-event-gold/60 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {magnet.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-playfair font-bold text-event-gold mb-2">
                  {magnet.title}
                </h3>
                <p className="text-cream-light/80 text-sm mb-4">{magnet.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {magnet.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-cream-light/70">
                      <span className="text-event-gold mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full btn-primary text-sm font-semibold">
                  Get Free Access
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-cream-light/60 text-sm">
            ✓ 100% Free • No Credit Card Required • Used by 500+ happy couples
          </p>
        </motion.div>
      </div>

      {/* Modals */}
      <LeadMagnetModal
        magnet="checklist"
        isOpen={activeModal === 'checklist'}
        onClose={() => setActiveModal(null)}
      />
      <LeadMagnetModal
        magnet="budget"
        isOpen={activeModal === 'budget'}
        onClose={() => setActiveModal(null)}
      />
      <LeadMagnetModal
        magnet="calculator"
        isOpen={activeModal === 'calculator'}
        onClose={() => setActiveModal(null)}
      />
    </section>
  );
}
