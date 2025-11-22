'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(startDark);
    document.documentElement.classList.toggle('dark', startDark);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
      }}
      className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-card"
    >
      {isDark ? 'Dark' : 'Light'}
    </button>
  );
}
