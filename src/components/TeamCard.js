'use client';
import Image from 'next/image';

export default function TeamCard({ name, role, bio, photo }) {
  return (
    <figure className="w-72 px-6 py-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md flex flex-col items-center">
      <Image
        src={photo}
        alt={name}
        width={128}
        height={128}
        className="h-32 w-32 rounded-full object-cover mb-4"
        loading="lazy"
      />
      <figcaption className="font-semibold text-brand-700 mb-1">
        {name}
      </figcaption>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{role}</p>
      <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
        {bio}
      </p>
    </figure>
  );
}
