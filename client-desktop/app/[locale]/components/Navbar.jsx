'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HomeLogo } from '@/public';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ToggleLng } from '.';
import { Button } from '../ui';
import styles from '@/styles';

const Navbar = ({ locale }) => {
  const pathname = usePathname();
  const t = useTranslations('navbar');
  return (
    <div
      className={`flex justify-between items-center w-[95%] mt-2 py-1 px-2 sm:w-[85%] md:w-[80%] md:py-2 md:px-4 lg:w-[75%] lg:py-4 lg:px-8 `}
    >
      <nav
        className={`${styles.flexCenter} text-[12px] gap-2 md:gap-4 lg:gap-11 lg:text-[14px] `}
      >
        <Image
          className={`mr-1 w-[130px] h-[35px] md:w-[170px] md:h-[40px] lg:w-[232px] lg:h-[48px] lg:flex-shrink-0 ${
            locale === 'en' ? 'lg:mr-11' : 'lg:ml-11'
          } `}
          src={HomeLogo}
          alt="home-logo"
          priority
        />
        <Link
          className={`${
            pathname === '/' || pathname === '/ar'
              ? 'text-active font-medium'
              : 'text-inActive'
          }`}
          href="/"
        >
          {t('home')}
        </Link>
        <Link
          className={`${
            pathname === '/products' || pathname === '/ar/products'
              ? 'text-active font-medium'
              : 'text-inActive'
          }`}
          href="#"
        >
          {t('products')}
        </Link>
        <Link
          className={`${
            pathname === '/inspiration' || pathname === '/ar/inspiration'
              ? 'text-active font-medium'
              : 'text-inActive'
          }`}
          href="#"
        >
          {t('inspiration')}
        </Link>
        <Link
          className={`${
            pathname === '/aboutUs' || pathname === '/ar/aboutUs'
              ? 'text-active font-medium'
              : 'text-inActive'
          }`}
          href="#"
        >
          {t('aboutus')}
        </Link>
      </nav>
      <div
        className={`${styles.flexCenter} gap-4 lg:gap-8 ${
          locale === 'en' ? 'lg:mr-14' : 'lg:ml-14'
        }`}
      >
        <ToggleLng locale={locale} />
        <Button
          className="border border-mianRed text-mianRed font-semibold text-[12px] px-2 py-1 lg:font-bold lg:px-8 lg:py-3 "
          title={t('contactus')}
          href="/contactUs"
        />
      </div>
    </div>
  );
};

export default Navbar;
