'use client';

import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/constants';
import { useCallback, useState } from 'react';
import Button from '@/components/Button';

// 4:32:00

const Header = () => {
  const [activeLink, setActiveLink] = useState(window.location.hash || '');

  const updateActiveLink = useCallback(
    (hash: string) => setActiveLink(hash),
    []
  );

  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-n-8/90 backdrop-blur-sm border-b border-n-6'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 py-4'>
        <Link href='#hero' className='relative block w-[12rem] h-10 xl:mr-8'>
          <Image src='/assets/brainwave.svg' fill alt='logo' />
        </Link>
        <nav className='hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent'>
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
                  onClick={() => updateActiveLink(url)}
                  href={url}
                  className='transition-colors lg:hover:text-n-1 hover:text-color-1'>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
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
      </div>
    </header>
  );
};

export default Header;
