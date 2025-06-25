'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './Button';

const schema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 text-left max-w-md mx-auto"
      noValidate
    >
      {/* Name */}
      <div>
        <input
          {...register('name')}
          type="text"
          placeholder="Name"
          className="w-full rounded-xl border px-4 py-3"
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-warning-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border px-4 py-3"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-warning-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register('message')}
          rows="4"
          placeholder="How can we help?"
          className="w-full rounded-xl border px-4 py-3"
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-warning-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="block mx-auto w-fit"
      >
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>

      {isSubmitSuccessful && (
        <p className="text-success-500 text-center">
          Thanks! We’ll reply soon.
        </p>
      )}
    </form>
  );
}
