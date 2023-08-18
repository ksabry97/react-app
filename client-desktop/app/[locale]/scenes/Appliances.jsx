'use client';

import { useTranslations } from 'next-intl';
import { Products } from '.';
import styles from '@/styles';

const Appliances = ({ appliances }) => {
  const t = useTranslations('appliances');

  return (
    <div className={` w-full ${`${styles.flexCenterCol}`} gap-12 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32`}>
      <div className={`${styles.flexStartCol} self-start gap-[2px] sm:gap-1 md:gap-2`}>
        <h1 className='font-semibold text-baleblack text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] xl:leading-[41px] '>{t('head')}</h1>
        <p className='text-inActive text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px]  xl:leading-[150%] '>{t('desc')}</p>
      </div>
      <Products products={appliances} />
    </div>
  );
};

export default Appliances;
