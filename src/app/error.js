'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-50 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Oops, something went wrong
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        An unexpected error occurred. Our team has been notified and is on it.
        You can try again, or return to the home page.
      </p>

      <div className="flex gap-4">
        {/* Retry the same route */}
        <button
          onClick={() => reset()}
          className="rounded-xl bg-brand-500 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold"
        >
          Try Again
        </button>

        {/* Go back home */}
        <Link
          href="/"
          className="rounded-xl border border-brand-500 text-brand-500 hover:bg-brand-50 px-6 py-3 text-sm font-semibold"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
