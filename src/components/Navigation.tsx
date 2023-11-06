import Link from 'next/link';

const navigationLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacts', href: '#contacts' },
];

interface IProps {}

export default function Navigation({}: IProps) {
  return (
    <ul
      className="flex flex-col items-start gap-10 text-xl 
                 text-secondary md:mr-16 md:flex-row
                 md:items-center xl:mr-36 xl:gap-12"
    >
      {navigationLinks.map(({ label, href }) => (
        <li key={href} className=" ">
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
