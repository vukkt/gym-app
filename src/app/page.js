import Section from '@/components/Section';
import HeroCTA from '@/components/HeroCTA';

import AboutSection from '@/components/sections/AboutSection';
import ClassesSection from '@/components/sections/ClassesSection';
import MembershipSection from '@/components/sections/MembershipSection';
import ContactSection from '@/components/sections/ContactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata = {
  title: 'Gym XYZ – Train Hard. Feel Powerful.',
  description:
    'Group classes, powerlifting, yoga & personal coaching in downtown Belgrade.',
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section bg="bg-brand-500">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Train Hard. Feel Powerful.
          </h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            Group classes & personal coaching designed to push your limits.
          </p>
          <HeroCTA />
        </div>
      </Section>

      <AboutSection />
      <ClassesSection />
      <TestimonialsSection />
      <MembershipSection />
      <ContactSection />
    </>
  );
}
