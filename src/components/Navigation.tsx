import Link from 'next/link';
import { NavLink, INavigationDictionary } from '../types';

const navigationLinks = Object.entries(NavLink).map(([label, href]) => ({
  label: label as keyof typeof NavLink,
  href,
}));

interface IProps {
  dictionary: INavigationDictionary;
}

export default function Navigation({ dictionary }: IProps) {
  return (
    <ul
      className="flex flex-col items-start gap-6
                 text-xl text-secondary md:mr-20
                 md:flex-row md:items-center xl:mr-40 xl:gap-12
                 "
    >
      {navigationLinks.map(({ label, href }) => (
        <li key={href} className="w-full ">
          <Link
            href={href}
            className="block w-full rounded-md border
                      border-transparent py-2
                      transition-colors duration-200
                      md:px-4 md:hover:border-secondary
                      md:active:border-accent md:active:text-accent"
          >
            {dictionary[label]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
