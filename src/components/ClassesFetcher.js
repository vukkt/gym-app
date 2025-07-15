import { cookies } from 'next/headers';

export default async function ClassesFetcher({ children }) {
  const cookieStore = await cookies();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/classes`, {
    headers: { Cookie: cookieStore.toString() },
    next: { revalidate: 10 },
  });

  const classes = await res.json();
  return children(classes);
}
