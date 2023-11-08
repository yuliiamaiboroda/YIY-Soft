import Link from 'next/link';

enum NavLink {
  services = '#services',
  portfolio = '#portfolio',
  contacts = '#contacts',
}

const navigationLinks = Object.entries(NavLink).map(([label, href]) => ({
  label: label as keyof typeof NavLink,
  href,
}));

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
      className="flex flex-col items-start gap-6
                 text-xl text-secondary md:mr-20
                 md:flex-row md:items-center xl:mr-40 xl:gap-12
                 "
    >
      {navigationLinks.map(({ label, href }) => (
        <li key={href} className="w-full ">
          <Link href={href} className="block w-full py-2 md:px-4">
            {dictionary[label]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
