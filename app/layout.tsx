import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import GooeyNav from '@/components/GooeyNav';

export const metadata: Metadata = {
  title: 'Shagato Chowdhury — Backend Architect & Lead Developer',
  description:
    'Backend Architect and Lead Developer specializing in Python, AWS, and Microservices. VP of Engineering at LocalBy. Expert in scalable distributed systems, real-time applications, and cloud infrastructure.',
  openGraph: {
    title: 'Shagato Chowdhury — Backend Architect & Lead Developer',
    description:
      'Backend Architect and Lead Developer specializing in Python, AWS, and Microservices. VP of Engineering at LocalBy. Expert in scalable distributed systems, real-time applications, and cloud infrastructure.',
    url: 'https://shagato.me',
    siteName: 'Shagato Chowdhury',
    type: 'website',
    locale: 'en_US',
  },
  metadataBase: new URL('https://shagato.me'),
};

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh antialiased">
        <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
            <div className="text-lg font-bold">
              Shagato<span className="text-primary">.</span>
            </div>
            <GooeyNav
              items={navItems}
              particleCount={12}
              particleDistances={[80, 10]}
              particleR={80}
              initialActiveIndex={0}
              animationTime={500}
              timeVariance={250}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t border-border/80 py-10 mt-20">
          <div className="container mx-auto max-w-screen-2xl px-4 text-center text-sm text-muted">
            © {new Date().getFullYear()} Shagato Chowdhury. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
