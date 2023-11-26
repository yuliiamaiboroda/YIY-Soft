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

interface IProps {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { metadata } = await getDictionary(params.lang);
  return {
    title: metadata.title,
    description: metadata.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    metadataBase: new URL('https://yiy-soft.vercel.app'),
    alternates: {
      canonical: '/en',
      languages: {
        'en-US': '/en',
        uk: '/ua',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'YIY Soft',
      url: 'https://yiy-soft.vercel.app',
      title: metadata.title,
      description: metadata.description,
      locale: params.lang,
    },
    authors: [
      { name: 'Yuliia Maiboroda', url: 'https://github.com/yuliiamaiboroda' },
      { name: 'Ivan Drahoner', url: 'https://github.com/idrahoner' },
      { name: 'Yaroslav Senyuk', url: 'https://github.com/SenYaroslav' },
    ],
    keywords: metadata.keywords,
  };
}

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
    <html
      lang={lang === 'ua' ? 'uk' : lang}
      className={`${montserat.className}`}
    >
      <body className="flex min-h-screen flex-col">
        <Header dictionary={dictionary.navigation} />
        {children}
        <Footer dictionary={dictionary.footer} />
      </body>
    </html>
  );
}
