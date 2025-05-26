import type { Metadata } from 'next';
import { Mulish, Inter } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard Kit',
  description: 'A simple dashboard kit for Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
