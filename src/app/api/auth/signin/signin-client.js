'use client';

import { signIn } from 'next-auth/react';

export default function SignInClient() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-2xl font-bold">Sign in to Gym XYZ</h1>

      <button
        onClick={() => signIn('email')}
        className="px-6 py-3 rounded-xl bg-brand-500 text-white"
      >
        Sign in with Email
      </button>

      {/* Optional Google button */}
      {/* <button onClick={() => signIn('google')} …>Sign in with Google</button> */}
    </div>
  );
}
