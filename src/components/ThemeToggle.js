'use client';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className={`p-2 rounded-xl border text-brand-600 hover:bg-brand-50 ${className}`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
