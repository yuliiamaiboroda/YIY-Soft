import Container from './Container';
import MobileMenu from './MobileMenu';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';
import { Locale } from '@/i18n-config';

interface IProps {
  lang: Locale;
}

export default function Header({ lang }: IProps) {
  return (
    <header
      className="fixed left-0 top-0 w-full items-center 
                 bg-semiTransparent py-3 backdrop-blur-[2px]"
    >
      <Container>
        <div className="flex">
          <Link href="/" className="mr-auto">
            <Logo />
          </Link>
          <div className="hidden md:flex">
            <Navigation lang={lang} />
            <LanguageSwitcher />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
