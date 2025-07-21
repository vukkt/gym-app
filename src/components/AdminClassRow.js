'use client';

import { useState } from 'react';
import { useToast } from './useToast';

export default function AdminClassRow({ c }) {
  const [optimistic, setOptimistic] = useState(false);
  const toast = useToast();
  const booked = c._count.bookings;
  const canDelete = booked === 0 && !optimistic;

  async function handleDelete() {
    if (!confirm('Delete this class? This cannot be undone.')) return;
    setOptimistic(true);

    const res = await fetch(`/api/admin/classes/${c.id}`, { method: 'DELETE' });
    if (res.ok) toast.success('Class deleted');
    else {
      toast.error('Delete failed');
      setOptimistic(false);
    }
  }

  const start = new Date(c.startAt).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <li className="py-4 flex items-center justify-between">
      <div>
        <b>{c.title}</b>
        <div className="text-sm text-gray-500">
          {start} · {c.duration} min · {booked}/{c.slots} booked
        </div>
      </div>

      <button
        onClick={handleDelete}
        disabled={!canDelete}
        className="rounded-xl px-4 py-2 text-sm font-semibold bg-warning-500 hover:bg-warning-600 text-white disabled:opacity-40"
      >
        Delete
      </button>
    </li>
  );
}
