'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import PricingCard from '@/components/PricingCard';
import ToggleSwitch from '@/components/ToggleSwitch';
import Reveal from '@/components/Reveal'; // ← NEW

const tiers = [
  {
    name: 'Basic',
    blurb: 'Open-gym access 3×/week.',
    monthly: 29,
    annual: 24,
  },
  {
    name: 'Unlimited',
    blurb: 'All classes + open gym, anytime.',
    monthly: 49,
    annual: 39,
    isPopular: true,
  },
  {
    name: 'Elite',
    blurb: 'Unlimited + 4 PT sessions / month.',
    monthly: 79,
    annual: 64,
  },
];

export default function MembershipSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <Section id="membership" className="scroll-mt-20">
      <Reveal>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Membership Plans
          </h2>

          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${
                !annual ? 'text-brand-700' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Monthly
            </span>
            <ToggleSwitch checked={annual} onChange={setAnnual} />
            <span
              className={`text-sm font-medium ${
                annual ? 'text-brand-700' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Annual&nbsp;<span className="text-xs">(-20%)</span>
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <PricingCard
              key={t.name}
              {...t}
              price={annual ? t.annual : t.monthly}
              className="w-80 h-80 mx-auto"
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
