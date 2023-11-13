import ThreeScene from '@/components/ThreeScene';
import Link from 'next/link';
import Container from '@/layouts/Container';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

interface IProps {
  lang: Locale;
}

export default async function HeroSection({lang}: IProps) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -z-10 pl-[30vw] lg:pl-[10vw] bg-black">
          <ThreeScene />
        </div>
        <Container>
          <div className="flex h-screen items-center text-secondary">
            <div>
              <h1 className="mb-6 max-w-[360px] text-32 font-medium md:mb-10 md:max-w-[550px] md:text-48 lg:max-w-[610px] lg:text-56">
              {dictionary.hero?.title}
              </h1>
              <h2 className="mb-10 max-w-[400px] text-24 md:mb-14 md:max-w-[500px] md:text-28 lg:max-w-[610px] lg:text-32">
              {dictionary.hero?.subtitle}
              </h2>
              <div className="w-fit bg-accent text-20 font-medium md:text-24">
                <Link href="#contacts" className="flex px-9 py-4 text-center">
                {dictionary.hero?.button}
                  <svg className="ml-2 h-6 w-6 self-center fill-secondary stroke-[2.5] stroke-secondary">
                    <use href="images/icons.svg#link-arrow"></use>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
