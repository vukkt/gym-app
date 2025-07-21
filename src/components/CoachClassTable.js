'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function CoachClassTable({ initial }) {
  const [rows, setRows] = useState(initial);

  async function del(id) {
    if (!confirm('Delete this class?')) return;
    const res = await fetch('/api/admin/classes/' + id, { method: 'DELETE' });
    if (res.ok) setRows((r) => r.filter((c) => c.id !== id));
    else toast.error('Delete failed');
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left border-b">
          <tr>
            <th>Title</th>
            <th>Start</th>
            <th>Slots</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((c) => (
            <tr key={c.id} className="border-b last:border-0">
              <td>{c.title}</td>
              <td>{new Date(c.startAt).toLocaleString()}</td>
              <td>
                {c._count.bookings}/{c.slots}
              </td>
              <td>
                <button
                  onClick={() => del(c.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={4} className="py-6 text-center text-gray-500">
                No upcoming classes
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
