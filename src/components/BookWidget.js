'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function BookWidget() {
  const ref = useRef(null);

  useEffect(() => {
    // If you add Calendly later, its script will hydrate this div.
    // For now we just show a placeholder.
  }, []);

  return (
    <>
      {/* Calendly inline script – uncomment when you have the real URL */}
      {/* <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      /> */}

      <div
        ref={ref}
        className="mx-auto max-w-3xl h-[600px] flex items-center justify-center rounded-2xl border-2 border-dashed border-brand-500"
      >
        <p className="text-brand-700">
          Booking widget coming soon — contact us to reserve a spot.
        </p>
      </div>
    </>
  );
}
