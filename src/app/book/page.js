import Section from '@/components/Section';
import BookWidget from '@/components/BookWidget';

export const metadata = {
  title: 'Book a Class',
  description: 'Reserve your spot for a trial session at Gym XYZ.',
};

export default function BookPage() {
  return (
    <>
      <Section bg="bg-brand-500">
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-extrabold">Book a Class</h1>
          <p className="max-w-lg mx-auto opacity-90">
            Choose a convenient time and lock in your free trial.
          </p>
        </div>
      </Section>

      {/* Scheduler */}
      <Section id="schedule" className="bg-gray-50">
        <BookWidget />
      </Section>
    </>
  );
}
