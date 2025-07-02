// src/components/sections/TestimonialsSection.js
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    quote: 'Dropped 10 kg in 8 weeks! Feels amazing!',
    name: 'Ana Petrović',
    role: 'Member',
    avatar: '/testimonials/ana.jpg',
  },
  {
    quote: 'Finally hit a 200 kg deadlift! Daaamn boy!',
    name: 'Marko Ilić',
    role: 'Strength Team',
    avatar: '/testimonials/marko.jpg',
  },
  {
    quote: 'Yoga Flex fixed my back pain. I feel so much better.',
    name: 'Jelena Stojanović',
    role: 'Yoga Fan',
    avatar: '/testimonials/jelena.jpg',
  },
  {
    quote: 'Coaches keep me accountable. I like that.',
    name: 'Luka Kovačević',
    role: 'Remote Member',
    avatar: '/testimonials/luka.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      className="bg-gray-50 dark:bg-gray-800 scroll-mt-20"
    >
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Client Highlights
        </h2>
      </Reveal>

      <div className="relative overflow-x-hidden mask-fade-x py-6">
        <div className="flex gap-6 animate-scroll-left">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </Section>
  );
}
