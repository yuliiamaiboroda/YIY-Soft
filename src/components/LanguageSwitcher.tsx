'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className="flex text-xl text-secondary">
      {i18n.locales.map(locale => {
        return (
          <li
            key={locale}
            className="relative mb-10 after:absolute after:right-0
                        after:top-0 after:h-full after:w-0.5 after:bg-secondary md:mb-0
                        [&:not(:first-child)]:after:hidden"
          >
            <Link
              href={redirectedPathName(locale)}
              className={`px-2 ${
                locale === pathName.split('/')[1] ? ' font-semibold' : ''
              }`}
            >
              {locale === 'en' ? 'EN' : 'UA'}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
