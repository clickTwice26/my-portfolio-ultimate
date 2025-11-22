import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Container } from '@/components/Container';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-dvh antialiased">
        <header className="border-b border-border/80">
          <Container className="flex items-center justify-between py-5">
            <div className="font-semibold tracking-tight">Shagato Chowdhury</div>
            <ThemeToggle />
          </Container>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t border-border/80 py-10 mt-20">
          <Container className="text-center text-sm text-muted">
            © {new Date().getFullYear()} Shagato Chowdhury. All rights reserved.
          </Container>
        </footer>
      </body>
    </html>
  );
}
