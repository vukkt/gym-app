'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function CoachClassForm() {
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);

    const body = Object.fromEntries(new FormData(e.currentTarget));
    body.duration = Number(body.duration);
    body.slots = Number(body.slots);

    const res = await fetch('/api/admin/classes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      toast.success('Class created');
      // quick reload of list
      window.location.reload();
    } else {
      const { error } = await res.json();
      toast.error(error ?? 'Failed');
    }
    setBusy(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Add new class</h2>

      <input name="title" placeholder="Title" required className="input" />
      <input type="datetime-local" name="startAt" required className="input" />
      <input
        type="number"
        name="duration"
        placeholder="Duration (min)"
        required
        className="input"
      />
      <input
        type="number"
        name="slots"
        placeholder="Slots"
        required
        className="input"
      />

      <button
        disabled={busy}
        className="rounded-xl px-4 py-2 bg-brand-500 text-white hover:bg-brand-700 disabled:opacity-40"
      >
        {busy ? 'Saving…' : 'Create'}
      </button>
    </form>
  );
}
