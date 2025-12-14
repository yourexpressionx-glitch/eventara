'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LeadMagnetModal } from '../forms/LeadMagnetModal';

interface WidgetLeadMagnetProps {
  magnet: 'checklist' | 'budget' | 'calculator';
}

const widgetConfig = {
  checklist: {
    title: '✓ Planning Checklist',
    color: 'from-amber-500 to-yellow-500',
  },
  budget: {
    title: '₹ Budget Planner',
    color: 'from-green-500 to-emerald-500',
  },
  calculator: {
    title: '🧮 Cost Calculator',
    color: 'from-blue-500 to-cyan-500',
  },
};

export function WidgetLeadMagnet({ magnet }: WidgetLeadMagnetProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const config = widgetConfig[magnet];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-rich-black to-burgundy-dark border-2 border-event-gold/40 rounded-lg overflow-hidden shadow-lg"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${config.color} p-4`}>
          <h3 className="text-lg font-playfair font-bold text-white">{config.title}</h3>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-sm text-cream-light/80 mb-4">
            Get instant access to professional planning tools
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full btn-primary py-2 text-sm"
          >
            Claim Free Access
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
