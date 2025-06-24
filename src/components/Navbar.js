'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import Container from './Container';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Classes', href: '/#classes' },
  { label: 'Membership', href: '/#membership' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  if (typeof window !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : '';
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
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
              className="text-sm font-medium text-gray-700 hover:text-brand-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/#classes">Book Class</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex items-center"
          onClick={() => setOpen(!open)}
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
      </Container>

      {/* Mobile slide-down panel */}
      {open && (
        <div className="md:hidden bg-white shadow-inner">
          <nav className="flex flex-col gap-4 p-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-lg font-medium text-gray-700"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}

            <Button
              href="/#classes"
              className="mt-4"
              onClick={() => setOpen(false)}
            >
              Book Class
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
