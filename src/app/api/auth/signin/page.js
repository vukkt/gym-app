export const metadata = { title: 'Sign in • Gym XYZ' };

import SignInClient from './signin-client';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignInClient />
    </div>
  );
}
