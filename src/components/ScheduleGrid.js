'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useToast } from './useToast';

export default function ScheduleGrid({ classes: initial }) {
  const [classes, setClasses] = useState(initial);
  const toast = useToast();

  /* ── Fallback: no upcoming sessions ─────────────────────────── */
  if (classes.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No upcoming classes. Check back soon!
      </p>
    );
  }
  /* ───────────────────────────────────────────────────────────── */

  async function reserve(classId) {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ classId }),
    });

    if (res.status === 201) {
      toast.success('Booking confirmed!');
      setClasses((list) =>
        list.map((c) =>
          c.id === classId ? { ...c, available: c.available - 1 } : c
        )
      );
    } else if (res.status === 401) {
      signIn('google'); // prompts login
    } else {
      const { error } = await res.json();
      toast.error(error ?? 'Something went wrong');
    }
  }

  return (
    <ul className="divide-y">
      {classes.map((c) => (
        <li key={c.id} className="py-4 flex items-center justify-between">
          <span>
            <b>{c.title}</b>{' '}
            <span className="text-sm text-gray-500">
              {new Date(c.startAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}{' '}
              · {c.available}/{c.slots} spots
            </span>
          </span>

          <button
            disabled={!c.available}
            onClick={() => reserve(c.id)}
            className="rounded-xl px-4 py-2 text-sm font-semibold
                       bg-brand-500 hover:bg-brand-700
                       text-white disabled:opacity-40"
          >
            {c.available ? 'Reserve' : 'Full'}
          </button>
        </li>
      ))}
    </ul>
  );
}
