'use client';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navigation from '@/components/Navigation';

interface IProps {}

export default function MobileMenu({}: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button type="button" onClick={() => setIsMenuOpen(true)}>
        <svg className="w-8">
          <use href="images/icons.svg#burger"></use>
        </svg>
      </button>
      <div
        className={`fixed top-0 right-0 w-1/2 min-h-screen 
                  bg-primary flex justify-between items-start
                  px-4 py-5 ${
                    isMenuOpen ? '' : 'translate-x-full'
                  } duration-200 transition-transform`}
      >
        <div>
          <LanguageSwitcher />
          <Navigation />
        </div>
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <svg className="w-6 h-6">
            <use href="images/icons.svg#cross"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
