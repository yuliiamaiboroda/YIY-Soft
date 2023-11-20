import Link from 'next/link';
import Container from './Container';
import MobileMenu from './MobileMenu';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { INavigationDictionary } from '@/types/navigation';

interface IProps {
  dictionary: INavigationDictionary;
}

export default function Header({ dictionary }: IProps) {
  return (
    <header
      className="fixed left-0 top-0 z-50 w-full items-center 
                 bg-semi-transparent py-3 backdrop-blur-[2px]"
    >
      <Container>
        <div className="flex">
          <Link href="/" className="mr-auto" aria-label="Link to Home">
            <Logo />
          </Link>
          <div className="hidden md:flex md:items-center">
            <Navigation dictionary={dictionary} />
            <LanguageSwitcher />
          </div>
          <MobileMenu dictionary={dictionary} />
        </div>
      </Container>
    </header>
  );
}
