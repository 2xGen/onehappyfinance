
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/src/components/Logo';
import { useLocale, useTranslations } from '@/src/contexts/LocaleContext';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';
import { addLocaleToPath } from '@/i18n/config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { locale } = useLocale();
  const t = useTranslations();

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.guides'), path: '/aw/guides' },
  ];
  
  const getLocalizedPath = (path) => {
    return addLocaleToPath(path, locale);
  };

  useEffect(() => {
    // Only run on client side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navClasses = `sticky top-0 z-50 transition-all duration-300 bg-white shadow-md`;
  const linkColor = 'text-foreground/70 hover:text-primary';
  const activeLinkColor = 'text-primary';
  const logoColor = '#0070BA';
  const menuIconColor = 'text-primary';
  
  return (
    <header className={navClasses}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={getLocalizedPath('/')}>
            <Logo color={logoColor} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const localizedPath = getLocalizedPath(item.path);
              const isActive = pathname === localizedPath || pathname.startsWith(localizedPath + '/');
              return (
                <Link
                  key={item.name}
                  href={localizedPath}
                  className={`font-semibold text-base transition-colors ${
                    isActive ? activeLinkColor : linkColor
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors ${menuIconColor}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const localizedPath = getLocalizedPath(item.path);
              const isActive = pathname === localizedPath || pathname.startsWith(localizedPath + '/');
              return (
                <Link
                  key={item.name}
                  href={localizedPath}
                  className={`font-semibold text-lg ${
                    isActive ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
