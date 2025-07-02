'use client';

import { useEffect, useRef, useState } from 'react';

export default function BookWidget() {
  const mountRef = useRef(null); // Calendly mounts here
  const [state, setState] = useState('loading'); // loading | ready | error

  useEffect(() => {
    if (mountRef.current.childElementCount) {
      setState('ready'); // already injected (React strict mode second run)
      return;
    }

    let cancelled = false;

    const init = () => {
      if (cancelled) return;
      if (window.Calendly) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/your-gym/free-trial', // replace with real link
            parentElement: mountRef.current,
          });
          setState('ready');
        } catch (err) {
          console.error('Calendly init failed:', err);
          setState('error');
        }
      } else {
        setTimeout(init, 150); // retry until Calendly script loads
      }
    };

    init();

    return () => {
      cancelled = true;
      if (mountRef.current) mountRef.current.innerHTML = '';
    };
  }, []);

  /* ------------ render ------------ */
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ height: '700px' }}
    >
      {/* Calendly iframe mounts here */}
      <div ref={mountRef} className="w-full h-full" />

      {/* Loading placeholder */}
      {state === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-brand-500 rounded-2xl bg-white/80 backdrop-blur-sm">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-500 mx-auto mb-4" />
            <p className="text-brand-700">Loading booking calendar...</p>
          </div>
        </div>
      )}

      {/* Error placeholder */}
      {state === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-red-300 rounded-2xl bg-red-50">
          <div className="text-center">
            <p className="text-red-700 mb-2">Unable to load booking widget</p>
            <p className="text-red-600 text-sm">
              Please contact us directly to book your session.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
