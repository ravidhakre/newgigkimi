import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NewGig - Professional Services',
  description: 'Expert digital solutions and professional services for your business growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
