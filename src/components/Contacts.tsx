import ContactLink from './ContactLink';
import ContactTitle from './ContactTitle';

const contacts = [
  { href: 'tel:+380739187496', label: '+380739187496', iconId: 'phone' },
  {
    href: 'mailto:YIY.Soft@gmail.com',
    label: 'yiy.soft@gmail.com',
    iconId: 'email',
  },
];

interface IProps {}

export default function Contacts({}: IProps) {
  return (
    <div>
      <ContactTitle>Contacts</ContactTitle>
      <ul>
        {contacts.map(({ href, label, iconId }) => (
          <li key={href} className="[&:not(:last-child)]:mb-6">
            <ContactLink href={href}>
              <svg className="mr-4 h-6 w-6 xl:h-8 xl:w-8">
                <use href={`images/icons.svg#${iconId}`}></use>
              </svg>
              {label.toLowerCase()}
            </ContactLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
