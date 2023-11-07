import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { Locale } from '@/i18n-config';

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
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <body className={`${montserat.className} flex min-h-screen flex-col`}>
        <Header lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
