"use client"

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import GlobeIcon from '../public/globe.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LanguageSelector = () => {
  const router = useRouter();

  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  console.log(locale);
  const setLanguage = () => {
    const language = locale === 'en' ? 'ja' : 'en';
    router.push(`/${language}`);
  };

  return (
    <div>
      <button 
      id="languageSelector"
      onClick={() => setLanguage()}>
        <Image src="/world.png" alt="Globe icon" width={ 20 } height={ 20 } className="icon" />
        {locale === 'en' ? '日本語' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSelector;
