import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emojus',
  description: 'Exclusive GitHub emoji for the emoji connoisseur',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <header>
          <h1 className="text-center">Emojus</h1>
          <p className="text-center">Emojus is singular of emoji, right?</p>
          <p className="text-center">
            On this site you can find <Link href="/">emoji</Link> and{' '}
            <Link href="/stickers">stickers</Link> you can use in{' '}
            <Link href="https://github.com/OyvindSabo/emojus">GitHub</Link>{' '}
            markdown.
          </p>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
