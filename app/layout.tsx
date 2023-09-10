import './globals.css';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';

const grotesk = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Results Component',
  description: 'Performance results and summary.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={grotesk.className}>{children}</body>
    </html>
  );
}
