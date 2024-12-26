'use client';

import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/constants';
import { useCallback, useEffect, useState } from 'react';
import Button from '@/components/Button';
import { HamburgerMenu } from '@/components/Design/Header';
import MenuSvg from '../../public/assets/svg/MenuSvg';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [openNavigation, setOpenNavigation] = useState(false);

  const updateActiveLink = useCallback(
    (hash: string) => setActiveLink(hash),
    []
  );

  const handleToggleNavigation = useCallback(
    (hash?: string) => {
      setOpenNavigation(prev => !prev);
      if (hash) {
        updateActiveLink(hash);
      }
    },
    [updateActiveLink]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.hash);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-n-6 ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <Link href='#hero' className='relative block w-[12rem] h-10 xl:mr-8'>
          <Image src='/assets/brainwave.svg' fill alt='logo' priority />
        </Link>
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <ul className='list-none relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
            {navigation.map(({ id, title, url, onlyMobile }) => (
              <li
                key={id}
                className={`block relative font-code text-2xl uppercase ${
                  onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                  activeLink === url ? 'z-2 text-n-1' : 'lg:text-n-1/50'
                } lg:leading-5 xl:px-12`}>
                <Link
                  onClick={() => handleToggleNavigation(url)}
                  href={url}
                  className='transition-colors lg:hover:text-n-1 hover:text-color-1'>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <HamburgerMenu />
        </nav>

        <div className='hidden button lg:flex gap-8 items-center font-code lg:text-xs lg:font-semibold transition-colors'>
          <Link
            href='#signup'
            className='text-n-1/50 hover:text-color-1 lg:hover:text-n-1'>
            New Account
          </Link>
          <Button
            textprops={{
              style: { textTransform: 'uppercase' },
            }}>
            Sign in
          </Button>
        </div>

        <Button variant='hamburger' onClick={() => handleToggleNavigation()}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
