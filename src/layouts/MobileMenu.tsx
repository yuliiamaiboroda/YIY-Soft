'use client';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navigation from '@/components/Navigation';

interface IProps {
  dictionary: {
    services: string;
    portfolio: string;
    contacts: string;
  };
}

export default function MobileMenu({ dictionary }: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="md:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <svg className="h-8 w-11">
          <use href="images/icons.svg#burger"></use>
        </svg>
      </button>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed right-0 top-0  min-h-screen 
                  min-w-[50%] bg-primary
                  px-4 py-5 md:hidden ${
                    isMenuOpen ? '' : 'translate-x-full'
                  } transition-transform duration-200`}
      >
        <div>
          <LanguageSwitcher />
          <Navigation dictionary={dictionary} />
        </div>
        <svg className="pointer-events-none absolute right-6 top-6 h-6 w-6">
          <use href="images/icons.svg#cross"></use>
        </svg>
      </div>
    </>
  );
}
