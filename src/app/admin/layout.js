import NavbarServer from '@/components/NavbarServer';

export const metadata = { title: 'Admin • Gym XYZ' };

export default function AdminLayout({ children }) {
  return (
    <>
      <NavbarServer />
      <main className="max-w-5xl mx-auto py-10 px-4">{children}</main>
    </>
  );
}
