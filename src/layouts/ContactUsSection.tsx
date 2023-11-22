import Container from './Container';
import Contacts from '@/components/Contacts';
import ContactFormBlock from '@/components/ContactFormBlock';
import { IContactsDictionary } from '@/types/contactsDictionary';

interface IProps {
  dictionary: IContactsDictionary;
}

export default function ContactUsSection({ dictionary }: IProps) {
  return (
    <section
      id="contacts"
      className="pb-[100px] pt-[50px] md:pb-[120px] md:pt-[60px]
                lg:pb-[140px] lg:pt-[70px] xl:pb-40 xl:pt-20"
    >
      <Container>
        <div
          className="flex flex-col gap-10 bg-accent
                    px-6 py-10 text-secondary 
                    md:gap-12 md:px-24 md:py-12
                    xl:flex-row xl:justify-between xl:px-28
                    xl:py-16"
        >
          <Contacts dictionary={dictionary.contacts} />
          <ContactFormBlock dictionary={dictionary.contactForm} />
        </div>
      </Container>
    </section>
  );
}
