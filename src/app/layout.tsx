import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const montserat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'YIY Soft',
  description:
    'Welcome to our YIY Soft – where innovation, expertise, and creativity unite to bring your digital dreams to life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserat.className} flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
