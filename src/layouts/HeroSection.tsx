'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Container from '@/layouts/Container';

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), {
  ssr: false,
});

interface IProps {
  dictionary: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export default function HeroSection({ dictionary }: IProps) {
  const { title, subtitle, button } = dictionary;

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -z-10 h-screen w-screen bg-black pl-[30vw] lg:pl-[10vw]">
          <ThreeScene />
        </div>
        <Container>
          <div className="flex h-screen items-center text-secondary">
            <div>
              <h1 className="mb-6 max-w-[360px] text-32 font-medium md:mb-10 md:max-w-[550px] md:text-48 lg:max-w-[610px] lg:text-56">
                {title}
              </h1>
              <h2 className="mb-10 max-w-[400px] text-24 md:mb-14 md:max-w-[500px] md:text-28 lg:max-w-[610px] lg:text-32">
                {subtitle}
              </h2>
              <div className="w-fit bg-accent text-20 font-medium duration-500 ease-in-out hover:bg-active md:text-24 ">
                <Link href="#contacts" className="flex px-9 py-4 text-center">
                  {button}
                  <svg className="ml-2 h-6 w-6 self-center fill-secondary stroke-secondary stroke-[2.5] ">
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
