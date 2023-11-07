'use client';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navigation from '@/components/Navigation';

interface IProps {}

export default function MobileMenu({}: IProps) {
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
        className={`fixed right-0 top-0 flex min-h-screen 
                  w-1/2 items-start justify-between bg-primary
                  px-4 py-5 md:hidden ${
                    isMenuOpen ? '' : 'translate-x-full'
                  } transition-transform duration-200`}
      >
        <div>
          <LanguageSwitcher />
          {/* <Navigation /> */}
        </div>
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <svg className="h-6 w-6">
            <use href="images/icons.svg#cross"></use>
          </svg>
        </button>
      </div>
    </>
  );
}
