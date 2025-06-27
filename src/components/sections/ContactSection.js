import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-brand-50 scroll-mt-20">
      <Reveal>
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-2 items-start">
          {/* ───────── Left: Map ───────── */}
          <div className="space-y-6  text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Where to Find&nbsp;Us
            </h2>

            <div className="h-80 rounded-2xl overflow-hidden shadow">
              <iframe
                loading="lazy"
                width="100%"
                height="100%"
                title="Gym XYZ location map"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.8053!2d20.460000!3d44.800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab1!2sGym%20XYZ!5e0!3m2!1sen!2srs!4v1710000000000"
              />
            </div>
          </div>

          {/* ───────── Right: Form ───────── */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            {/* lift the form 1 rem on large screens */}
            <div className="lg:-mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
