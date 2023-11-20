import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const montserat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'YIY Soft',
  description:
    'Welcome to our YIY Soft – where innovation, expertise, and creativity unite to bring your digital dreams to life.',
};

export async function generateStaticParams() {
  return [{ lang: 'ua' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang === 'ua' ? 'uk' : lang} className={`${montserat.className}`}>
      <body className='flex min-h-screen flex-col'>
        <Header dictionary={dictionary.navigation} />
        {children}
        <Footer dictionary={dictionary.footer} />
      </body>
    </html>
  );
}
