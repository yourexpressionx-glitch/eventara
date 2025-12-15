/**
 * Wedding Budget Planner & Cost Calculator
 * Interactive lead magnet for budget planning
 */
'use client';

import { useState } from 'react';
import { LeadCaptureForm } from './LeadCaptureForm';

export function BudgetPlannerMagnet() {
  const [guestCount, setGuestCount] = useState(100);
  const [pricePerPlate, setPricePerPlate] = useState(1500);
  const [hasPhotography, setHasPhotography] = useState(true);
  const [hasDecoration, setHasDecoration] = useState(true);
  const [hasEntertainment, setHasEntertainment] = useState(true);

  // Calculate breakdown
  const catering = guestCount * pricePerPlate;
  const venue = 150000; // Base venue cost
  const photography = hasPhotography ? 80000 : 0;
  const decoration = hasDecoration ? 120000 : 0;
  const entertainment = hasEntertainment ? 75000 : 0;
  const miscellaneous = (catering + venue + photography + decoration + entertainment) * 0.1;

  const total = catering + venue + photography + decoration + entertainment + miscellaneous;

  const breakdown = [
    { label: 'Venue', amount: venue, percentage: (venue / total) * 100 },
    { label: 'Catering', amount: catering, percentage: (catering / total) * 100 },
    { label: 'Photography', amount: photography, percentage: (photography / total) * 100 },
    { label: 'Decoration', amount: decoration, percentage: (decoration / total) * 100 },
    { label: 'Entertainment', amount: entertainment, percentage: (entertainment / total) * 100 },
    { label: 'Miscellaneous', amount: miscellaneous, percentage: (miscellaneous / total) * 100 },
  ].filter((item) => item.amount > 0);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-burgundy-dark to-rich-black">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-event-gold mb-4 text-center">
          Wedding Cost Calculator
        </h2>
        <p className="text-cream-light/80 text-center mb-12 max-w-2xl mx-auto">
          Get instant cost estimates based on your requirements. Download our detailed budget
          planner when you sign up below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="space-y-6">
            <div className="bg-rich-black/50 rounded-lg p-6 border border-event-gold/20">
              <h3 className="text-lg font-playfair font-bold text-event-gold mb-4">
                Customize Your Budget
              </h3>

              {/* Guest Count */}
              <div className="mb-6">
                <label className="block text-cream-light font-semibold mb-2">
                  Number of Guests: <span className="text-event-gold">{guestCount}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  aria-label="Number of guests for event"
                  className="w-full"
                />
                <p className="text-cream-light/60 text-sm mt-1">20 - 500 guests</p>
              </div>

              {/* Price Per Plate */}
              <div className="mb-6">
                <label className="block text-cream-light font-semibold mb-2">
                  Cost Per Guest: ₹{pricePerPlate.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={pricePerPlate}
                  onChange={(e) => setPricePerPlate(Number(e.target.value))}
                  aria-label="Cost per guest in rupees"
                  className="w-full"
                />
                <p className="text-cream-light/60 text-sm mt-1">₹500 - ₹5,000</p>
              </div>

              {/* Services */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasPhotography}
                    onChange={(e) => setHasPhotography(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-cream-light">Professional Photography</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasDecoration}
                    onChange={(e) => setHasDecoration(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-cream-light">Decoration & Floral Setup</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasEntertainment}
                    onChange={(e) => setHasEntertainment(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-cream-light">Music & Entertainment</span>
                </label>
              </div>
            </div>

            {/* Total Cost */}
            <div className="bg-gradient-to-r from-event-gold/20 to-light-gold/10 border-2 border-event-gold/50 rounded-lg p-6">
              <p className="text-cream-light/80 text-sm mb-2">Total Estimated Budget</p>
              <h3 className="text-3xl font-playfair font-bold text-event-gold">
                ₹{total.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </h3>
              <p className="text-cream-light/60 text-xs mt-2">
                For {guestCount} guests (excluding additional costs)
              </p>
            </div>
          </div>

          {/* Budget Breakdown & Lead Form */}
          <div className="space-y-6">
            {/* Breakdown Chart */}
            <div className="bg-rich-black/50 rounded-lg p-6 border border-event-gold/20">
              <h3 className="text-lg font-playfair font-bold text-event-gold mb-4">
                Budget Breakdown
              </h3>
              <div className="space-y-3">
                {breakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-cream-light/80 text-sm">{item.label}</span>
                      <span className="text-event-gold font-semibold">
                        ₹{item.amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="w-full bg-rich-black/50 rounded h-2">
                      <div
                        className="bg-gradient-to-r from-event-gold to-light-gold rounded h-2 transition-all duration-500 progress-bar"
                        style={{
                          width: `${item.percentage}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lead Form */}
            <LeadCaptureForm
              magnetType="budget"
              title="Get Your Budget Planner"
              description="Download the editable Excel spreadsheet"
              buttonText="Download Planner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
