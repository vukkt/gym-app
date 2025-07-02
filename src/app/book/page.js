import Section from '@/components/Section';
import ClientBookWidget from '@/components/ClientBookWidget';

export const metadata = {
  title: 'Book a Class',
  description: 'Reserve your spot for a trial session at Gym XYZ.',
};

export default function BookPage() {
  return (
    <>
      {/* Hero — constant brand blue, text always white */}
      <Section bg="bg-brand-500">
        <div className="text-center space-y-6 text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Book a Class</h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            Choose a convenient time and lock in your free trial.
          </p>
        </div>
      </Section>

      {/* Scheduler */}
      <Section id="schedule" className="bg-gray-50 dark:bg-gray-800">
        <ClientBookWidget />
      </Section>
    </>
  );
}
