import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-extrabold text-brand-600">404</h1>
      <p className="text-gray-700">
        The page you’re looking for doesn’t exist.
      </p>

      {/* Internal navigation must use <Link> */}
      <Link href="/" className="text-brand-600 underline">
        Back&nbsp;to&nbsp;Home
      </Link>
    </main>
  );
}
