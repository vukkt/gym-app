'use client';

import dynamic from 'next/dynamic';

// Loads BookWidget only on the client
const BookWidget = dynamic(() => import('@/components/BookWidget'), {
  ssr: false,
});

export default function ClientBookWidget(props) {
  return <BookWidget {...props} />;
}
