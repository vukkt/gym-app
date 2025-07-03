'use client';

/* Tiny dependency-free focus trap
   When isActive is true, Tab / Shift+Tab cycle inside the trapRef element.
*/

import { useEffect, useRef } from 'react';

export default function FocusTrap({ isActive, children }) {
  const trapRef = useRef(null);

  useEffect(() => {
    // If the drawer isn't open or the ref hasn't mounted, do nothing
    if (!isActive || !trapRef.current) return;

    const root = trapRef.current; // cache element

    // Collect all focusable elements inside the drawer
    const focusable = root.querySelectorAll(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    // Focus the first item on open
    if (focusable.length) focusable[0].focus();

    const handleKey = (e) => {
      if (e.key !== 'Tab') return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      // Shift+Tab on first item → loop to last
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      // Tab on last item → loop to first
      else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    root.addEventListener('keydown', handleKey);

    // Cleanup: remove listener only if the element still exists
    return () => {
      root.removeEventListener('keydown', handleKey);
    };
  }, [isActive]);

  return <div ref={trapRef}>{children}</div>;
}
