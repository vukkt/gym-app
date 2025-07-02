'use client';
import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light'); // 'light' | 'dark'

  // read from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setTheme('dark');
  }, []);

  // write to <html> and localStorage whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // toggle helper
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggle };
}
