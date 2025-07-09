'use client';

import Button from '@/components/Button';
import { gaEvent } from '@/lib/gtag';
/**
 * Reusable CTA that fires GA4 event.
 * Forwards any extra props (className, onClick, etc.).
 */
export default function HeroCTA({ className = '', onClick, ...rest }) {
  return (
    <Button
      href="/book"
      className={className}
      onClick={(e) => {
        gaEvent({
          action: 'book_class_clicked',
          category: 'CTA',
          label: 'Hero', // keeps original label
        });
        onClick?.(e); // run any extra handler (e.g. close mobile menu)
      }}
      {...rest}
    >
      Book Your First Class
    </Button>
  );
}
