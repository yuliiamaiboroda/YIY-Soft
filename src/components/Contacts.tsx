import ContactLink from './ContactLink';
import ContactTitle from './ContactTitle';
import { IContactsDictionary } from '@/types';

const contacts = [
  { href: 'tel:+380739187496', label: '+38 (073) 918 74 96', iconId: 'phone' },
  {
    href: 'mailto:YIY.Soft@gmail.com',
    label: 'yiy.soft@gmail.com',
    iconId: 'email',
  },
];

interface IProps {
  dictionary: IContactsDictionary['contacts'];
}

export default function Contacts({ dictionary }: IProps) {
  return (
    <div>
      <ContactTitle>{dictionary.title}</ContactTitle>
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
