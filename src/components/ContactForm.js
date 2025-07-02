'use client';

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './Button';
import { gaEvent } from '@/app/lib/gtag';

const schema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

export default function ContactForm({ className = '' }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  /* local toast state */
  const [toast, setToast] = useState(null); // { type:'success'|'error', msg:string }

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  async function onSubmit(data) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      gaEvent({
        action: 'send_message_submitted',
        category: 'Form',
        label: 'Contact',
      });
      reset();
      setToast({ type: 'success', msg: 'Thanks! We will reply soon.' });
    } else {
      setToast({ type: 'error', msg: 'Oops… something went wrong.' });
    }
  }

  /* simple toast component */
  const Toast = ({ type, msg }) => (
    <div className="fixed bottom-6 inset-x-0 flex justify-center z-50">
      <div
        role="status"
        aria-live="polite"
        className={`${
          type === 'success' ? 'bg-success-500' : 'bg-warning-500'
        } text-white px-4 py-2 rounded-xl shadow-lg animate-bounce-subtle`}
      >
        {msg}
      </div>
    </div>
  );

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col flex-1 text-left max-w-md mx-auto h-80 ${className}`}
      >
        {/* Name */}
        <div className="mb-4 flex-shrink-0">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border px-4 py-3"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-warning-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4 flex-shrink-0">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border px-4 py-3"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-warning-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="flex-1 flex flex-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            {...register('message')}
            placeholder="How can we help?"
            className="w-full h-full rounded-xl border px-4 py-3 resize-none"
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-warning-500">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 self-center w-fit"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </form>

      {toast && <Toast {...toast} />}
    </>
  );
}
