import Link from 'next/link';

const navigationLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacts', href: '#contacts' },
];

interface IProps {}

export default function Navigation({}: IProps) {
  return (
    <ul className="text-secondary text-xl">
      {navigationLinks.map(({ label, href }) => (
        <li key={href} className="[&:not(:last-child)]:mb-10">
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
