import Image from 'next/image';
import Button from './Button';

/**
 * Simple card for a training program.
 * Uses a plain <img> tag for now (zero config); we can swap to next/image later.
 */
export default function ClassCard({ title, blurb, img, priority = false }) {
  return (
    <article className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      <div className="relative h-40 w-full">
        <Image
          src={img}
          alt={title}
          fill // makes image cover the div
          className="object-cover"
          sizes="(min-width: 1024px) 33vw,
                 (min-width: 640px) 50vw,
                 100vw"
          priority={priority}
        />
      </div>

      <div className="flex-1 p-6 space-y-3">
        <h3 className="text-lg font-semibold text-brand-700">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{blurb}</p>
        <Button href="#contact" variant="outline">
          Try&nbsp;It
        </Button>
      </div>
    </article>
  );
}
