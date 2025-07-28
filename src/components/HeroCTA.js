'use client';

import Button from '@/components/Button';
import { gaEvent } from '@/lib/gtag';

export default function HeroCTA({
  className = '',
  onClick,
  children = 'Book Your First Class', // Default text
  ...rest
}) {
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
      {children}
    </Button>
  );
}
