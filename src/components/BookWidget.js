'use client';

import { useEffect, useRef, useState } from 'react';

export default function BookWidget() {
  const mountRef = useRef(null); // Calendly mounts here
  const [state, setState] = useState('loading'); // loading | ready | error

  useEffect(() => {
    const root = mountRef.current; // cache node for cleanup

    if (!root || root.childElementCount) {
      setState('ready');
      return;
    }

    let cancelled = false;

    const init = () => {
      if (cancelled) return;

      if (window.Calendly) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/your-gym/free-trial',
            parentElement: root,
          });
          setState('ready');
        } catch (err) {
          console.error(err);
          setState('error');
        }
      } else {
        setTimeout(init, 150);
      }
    };

    init();

    return () => {
      cancelled = true;
      if (root) root.innerHTML = ''; // safe cleanup
    };
  }, []);

  /* ------------ render ------------ */
  return (
    <div
      className="mx-auto max-w-3xl rounded-2xl overflow-hidden"
      style={{ minHeight: '700px' }}
    >
      {state === 'loading' && (
        <div className="h-[600px] flex items-center justify-center border-2 border-dashed border-brand-500 rounded-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mx-auto mb-4"></div>
            <p className="text-brand-700">Loading booking calendar...</p>
          </div>
        </div>
      )}

      {state === 'error' && (
        <div className="h-[600px] flex items-center justify-center border-2 border-dashed border-red-300 rounded-2xl bg-red-50">
          <div className="text-center">
            <p className="text-red-700 mb-2">Unable to load booking widget</p>
            <p className="text-red-600 text-sm">
              Please contact us directly to book your session.
            </p>
          </div>
        </div>
      )}

      {/* Calendly injects its iframe here */}
      <div ref={mountRef} className="min-h-[700px] w-full" />
    </div>
  );
}
