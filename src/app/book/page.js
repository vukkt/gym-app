import Section from '@/components/Section';
import ClassesFetcher from '@/components/ClassesFetcher';
import ScheduleGrid from '@/components/ScheduleGrid';

export const metadata = {
  title: 'Book a Class',
  description: 'Reserve your spot for a trial session at Gym XYZ.',
};

export default function BookPage() {
  return (
    <>
      <Section bg="bg-brand-500">
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Book a Class</h1>
          <p className="max-w-xl mx-auto text-lg opacity-90">
            Choose a convenient time and lock in your free trial.
          </p>
        </div>
      </Section>
      {/* Native schedule */}
      <Section id="schedule" className="bg-gray-50 dark:bg-gray-900">
        <ClassesFetcher>
          {(classes) => <ScheduleGrid classes={classes} />}
        </ClassesFetcher>
      </Section>
    </>
  );
}
