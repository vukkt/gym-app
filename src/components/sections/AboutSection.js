import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

export default function AboutSection() {
  return (
    <Section id="about" className="scroll-mt-20">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Our Story
          </h2>

          <p>
            Founded in 2015, Gym XYZ helps everyday people unlock elite
            performance through science-backed training and an infectious
            community vibe. <em>(Real copy coming soon.)</em>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
