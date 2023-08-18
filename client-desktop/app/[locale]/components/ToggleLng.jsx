'use client';
import Image from 'next/image';
import styles from '@/styles';
import { LocalizationIcon, ArrowDown, ArrowUp } from '@/public';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const ToggleLng = ({ locale }) => {
  const [touched, setTouched] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const changeLanguageHandler = (lng) => {
    const segments = pathName.split('/');
    if (locale === 'ar') segments[1] = lng;
    else segments[0] = lng;
    const newPathName = segments.join('/');
    router.push(newPathName);
  };
  return (
    <div className={`${styles.flexCenter} gap-1`}>
      <div className="uppercase text-[12px]  lg:font-medium text-active lg:leading-[150%]">
        {locale}
      </div>
      <Image
        className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px] lg:flex-shrink-0 "
        src={LocalizationIcon}
        alt="localizationIcon"
        priority
      />
      <div className="flex relative cursor-pointer">
        <Image
          src={!touched ? ArrowDown : ArrowUp}
          alt="arrowIcon"
          onMouseEnter={() => setTouched(true)}
          priority
        />
        {touched && (
          <div
            className={`flex flex-col px-2 py-2  top-4 text-[12px] z-10 lg:text-[14px] ${
              locale === 'ar' ? 'left-0' : 'right-0'
            } bg-screen cursor-pointer absolute rounded-md`}
            onMouseLeave={() => setTouched(false)}
          >
            <div
              className="w-24 hover:bg-global"
              onClick={() => changeLanguageHandler('ar')}
            >
              AR - العربية
            </div>
            <hr />
            <div
              className="w-24 hover:bg-global"
              onClick={() => changeLanguageHandler('en')}
            >
              EN - English
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleLng;
