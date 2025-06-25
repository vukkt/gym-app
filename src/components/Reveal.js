'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('reveal--active');
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
