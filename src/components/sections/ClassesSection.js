import Section from '@/components/Section';
import ClassCard from '@/components/ClassCard';

const classes = [
  {
    title: 'HIIT Blast',
    blurb: '45-minute high-intensity intervals that scorch calories.',
    img: '/classes/hiit.jpg',
  },
  {
    title: 'Powerlifting',
    blurb: 'Strategic strength development to crush new records.',
    img: '/classes/power.jpg',
  },
  {
    title: 'Yoga Flex',
    blurb: 'Mobility and mindfulness to keep you limber and focused.',
    img: '/classes/yoga.jpg',
  },
];

export default function ClassesSection() {
  return (
    <Section id="classes" className="bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Classes</h2>
      </div>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((c, idx) => (
          <li key={c.title}>
            <ClassCard {...c} priority={idx === 0} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
