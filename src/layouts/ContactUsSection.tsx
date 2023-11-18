import Section from './Section';
import Container from './Container';
import Contacts from '@/components/Contacts';
import ContactForm from '@/components/ContactForm';
import { IContactsDictionary } from '@/types/contactsDictionary';

interface IProps {
  dictionary: IContactsDictionary;
}

export default function ContactUsSection({ dictionary }: IProps) {
  return (
    <Section id="contacts">
      <Container>
        <div
          className="flex flex-col gap-10 bg-accent
                    px-6 py-10 text-secondary 
                    md:gap-12 md:px-24 md:py-12
                    xl:flex-row xl:justify-between xl:px-28
                    xl:py-16"
        >
          <Contacts dictionary={dictionary.contacts} />
          <ContactForm dictionary={dictionary.contactForm} />
        </div>
      </Container>
    </Section>
  );
}
