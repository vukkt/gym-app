// Server component – never shipped to the browser
import { cookies } from 'next/headers';

/** Fetches future classes (revalidates every 10 s) */
export default async function ClassesFetcher({ children }) {
  const res = await fetch('http://localhost:3000/api/classes', {
    headers: { Cookie: cookies().toString() },
    next: { revalidate: 10 },
  });

  const classes = await res.json();
  return children(classes); // render prop → pass to client grid
}
