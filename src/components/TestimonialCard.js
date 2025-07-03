'use client';
import Image from 'next/image';

export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <figure className="w-72 shrink-0 px-6 py-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md flex flex-col items-center">
      <Image
        src={avatar}
        alt={name}
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover mb-4"
        loading="lazy"
      />
      <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4 text-center">
        “{quote}”
      </blockquote>
      <figcaption className="font-semibold text-brand-700">{name}</figcaption>
      <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
    </figure>
  );
}
