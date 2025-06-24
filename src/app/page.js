import Section from '@/components/Section';
import Button from '@/components/Button';

import AboutSection from '@/components/sections/AboutSection';
import ClassesSection from '@/components/sections/ClassesSection';
import MembershipSection from '@/components/sections/MembershipSection';
import ContactSection from '@/components/sections/ContactSection';

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
          <Button href="#classes">Book Your First Class</Button>
        </div>
      </Section>

      <AboutSection />
      <ClassesSection />
      <MembershipSection />
      <ContactSection />
    </>
  );
}
export const metadata = {
  title: 'Membership Plans',
  description:
    'Transparent pricing: Basic, Unlimited & Elite tiers to match any goal.',
};
