'use client';

import Button from '@/components/Button';
import { gaEvent } from '@/app/lib/gtag';

export default function HeroCTA() {
  return (
    <Button
      href="/book"
      onClick={() =>
        gaEvent({
          action: 'book_class_clicked',
          category: 'CTA',
          label: 'Hero',
        })
      }
    >
      Book Your First Class
    </Button>
  );
}
