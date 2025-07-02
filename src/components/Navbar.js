'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './Container';
import HeroCTA from '@/components/HeroCTA';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Classes', href: '/#classes' },
  { label: 'Membership', href: '/#membership' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  /* shadow after scrolling */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      } bg-white dark:bg-gray-800`}
    >
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold text-brand-600">
          GYM&nbsp;XYZ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-700 hover:text-brand-600 dark:text-gray-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ───── Desktop actions ───── */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <HeroCTA />
        </div>

        {/* ───── Mobile actions: theme + menu ───── */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex items-center"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="w-6 h-6 text-brand-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* ───── Mobile drawer ───── */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="md:hidden bg-white dark:bg-gray-800 shadow-inner"
        >
          <nav className="flex flex-col gap-4 p-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-lg font-medium text-gray-700 dark:text-gray-200"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <HeroCTA className="mt-4" onClick={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
}
