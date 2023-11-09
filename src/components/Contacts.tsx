import ContactLink from './ContactLink';

const contacts = [
  { href: 'tel:+380739187496', label: '+380739187496' },
  { href: 'mailto:YIY.Soft@gmail.com', label: 'yiy.soft@gmail.com' },
];

interface IProps {}

export default function Contacts({}: IProps) {
  return (
    <ul>
      {contacts.map(({ href, label }) => (
        <li key={href}>
          <ContactLink href={href}>{label.toLowerCase()}</ContactLink>
        </li>
      ))}
    </ul>
  );
}
