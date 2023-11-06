import Container from './Container';
import MobileMenu from './MobileMenu';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface IProps {}

export default function Header({}: IProps) {
  return (
    <header className="fixed left-0 top-0 w-full bg-semiTransparent backdrop-blur-[2px]">
      <Container>
        <div className="flex">
          <Logo />
          <div className="hidden md:flex">
            <Navigation />
            <LanguageSwitcher />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
