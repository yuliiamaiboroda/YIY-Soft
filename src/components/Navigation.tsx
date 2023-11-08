import Link from 'next/link';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

// const navigationLinks = [
//   { label: 'Services', href: '#services' },
//   { label: 'Portfolio', href: '#portfolio' },
//   { label: 'Contacts', href: '#contacts' },
// ];

interface IProps {
  dictionary: {
    services: string;
    portfolio: string;
    contacts: string;
  };
}

export default function Navigation({ dictionary }: IProps) {
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
        <Link href="#services">{dictionary.services}</Link>
      </li>
      <li>
        <Link href="#portfolio">{dictionary.portfolio}</Link>
      </li>
      <li>
        <Link href="#contacs">{dictionary.contacts}</Link>
      </li>
    </ul>
  );
}
