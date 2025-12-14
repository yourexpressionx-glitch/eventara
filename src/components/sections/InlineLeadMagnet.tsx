'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LeadMagnetModal } from '../forms/LeadMagnetModal';

interface InlineLeadMagnetProps {
  magnet: 'checklist' | 'budget' | 'calculator';
  layout?: 'horizontal' | 'vertical';
}

const magnetConfig = {
  checklist: {
    title: 'Wedding Planning Checklist',
    description: '50+ items to ensure you don\'t miss anything',
    benefit: 'Get a complete checklist delivered to your inbox',
  },
  budget: {
    title: 'Budget Planning Guide',
    description: 'Step-by-step budget management',
    benefit: 'Learn how to allocate your wedding budget effectively',
  },
  calculator: {
    title: 'Wedding Cost Calculator',
    description: 'Instant cost estimations',
    benefit: 'Calculate exact costs for your wedding',
  },
};

export function InlineLeadMagnet({ magnet, layout = 'vertical' }: InlineLeadMagnetProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const config = magnetConfig[magnet];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`bg-gradient-to-r from-event-gold/10 to-light-gold/5 border border-event-gold/30 rounded-xl p-6 md:p-8 ${
          layout === 'horizontal' ? 'flex items-center justify-between gap-6' : ''
        }`}
      >
        <div className="flex-1">
          <h3 className="text-2xl font-playfair font-bold text-event-gold mb-2">
            {config.title}
          </h3>
          <p className="text-cream-light/80 mb-4">{config.benefit}</p>
        </div>

        <div className={layout === 'horizontal' ? '' : 'mt-4'}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary whitespace-nowrap"
          >
            Get Free Access
          </button>
        </div>
      </motion.div>

      <LeadMagnetModal
        magnet={magnet}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
