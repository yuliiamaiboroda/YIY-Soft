import Link from 'next/link';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

// const navigationLinks = [
//   { label: 'Services', href: '#services' },
//   { label: 'Portfolio', href: '#portfolio' },
//   { label: 'Contacts', href: '#contacts' },
// ];

interface IProps {
  lang: Locale;
}

export default async function Navigation({ lang }: IProps) {
  const dictionary = await getDictionary(lang);

  return (
    <ul
      className="flex flex-col items-start gap-10 text-xl 
                 text-secondary md:mr-16 md:flex-row
                 md:items-center xl:mr-36 xl:gap-12"
    >
      {/* {navigationLinks.map(({ label, href }) => (
        <li key={href} className=" ">
          <Link href={href}>{dictionary.navigation[label]}</Link>
        </li>
      ))} */}
      <li>
        <Link href="#services">{dictionary.navigation.services}</Link>
      </li>
      <li>
        <Link href="#portfolio">{dictionary.navigation.portfolio}</Link>
      </li>
      <li>
        <Link href="#contacs">{dictionary.navigation.contacts}</Link>
      </li>
    </ul>
  );
}
