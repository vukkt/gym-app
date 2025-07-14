import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import TeamCard from '@/components/TeamCard';

const team = [
  {
    name: 'Nikola Jovanović',
    role: 'Head Coach · CSCS',
    bio: 'Strength & conditioning specialist with 10 yrs pro experience.',
    photo: '/team/nikola.jpg',
  },
  {
    name: 'Milan Petrović',
    role: 'Powerlifting Coach',
    bio: 'Advanced strength cycles, designed by a world-renowned IPF silver-medalist.',
    photo: '/team/milan.jpg',
  },
  {
    name: 'Maja Milenković',
    role: 'Yoga Lead · RYT-500',
    bio: 'Focuses on mobility, mindfulness & injury-prevention.',
    photo: '/team/maja.jpg',
  },
];

export default function TeamSection() {
  return (
    <Section id="team" className="bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Meet the Coaches
        </h2>
      </Reveal>

      <Reveal>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {team.map((t) => (
            <li key={t.name}>
              <TeamCard {...t} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
