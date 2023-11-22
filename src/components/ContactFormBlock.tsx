'use client';

import dynamic from 'next/dynamic';
import ContactTitle from './ContactTitle';
import type { IContactsDictionary } from '@/types';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
});

interface IProps {
  dictionary: IContactsDictionary['contactForm'];
}

export default function ContactFormSection({ dictionary }: IProps) {
  return (
    <div className="xl:w-1/2">
      <ContactTitle>{dictionary.title}</ContactTitle>
      <ContactForm dictionary={dictionary} />
    </div>
  );
}
