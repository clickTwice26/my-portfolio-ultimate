import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0b0b0c',
        },
        foreground: {
          DEFAULT: '#e7e7ea',
        },
        primary: {
          DEFAULT: '#22c55e',
          600: '#16a34a',
        },
        muted: {
          DEFAULT: '#a1a1aa',
        },
        card: {
          DEFAULT: '#121214',
        },
        border: {
          DEFAULT: '#1e1e22',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
