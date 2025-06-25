import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-brand-50 scroll-mt-20">
      <Reveal>
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>

          {/* React-Hook-Form + Zod validated form */}
          <ContactForm />

          <div className="text-sm text-gray-600">
            or call us&nbsp;
            <a href="tel:+15555555555" className="text-brand-600 underline">
              555-555-5555
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
