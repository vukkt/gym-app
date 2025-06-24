import Link from 'next/link';

export default function Button({
  href = '#',
  children,
  variant = 'primary',
  className = '', // NEW: pull className out
  ...props
}) {
  const base =
    'inline-block rounded-xl px-6 py-3 text-sm font-semibold transition';
  const variants = {
    primary: `${base} bg-brand-500 text-white hover:bg-brand-700`,
    outline: `${base} border border-brand-500 text-brand-500 hover:bg-brand-50`,
  };

  // NEW ➜ merge variant + any extra classes
  const combined = `${variants[variant]} ${className}`.trim();

  return href.startsWith('/') ? (
    <Link href={href} className={combined} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} className={combined} {...props}>
      {children}
    </a>
  );
}
