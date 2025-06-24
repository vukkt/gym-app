import Section from '@/components/Section';

export default function AboutSection() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
        <p className="text-gray-600">
          Founded in 2015, Gym XYZ helps everyday people unlock elite
          performance through science-backed training and an infectious
          community vibe. <em>(Real copy coming soon.)</em>
        </p>
      </div>
    </Section>
  );
}
