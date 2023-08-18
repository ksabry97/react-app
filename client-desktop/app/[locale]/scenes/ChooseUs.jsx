'use client';
import { useTranslations } from 'next-intl';
import styles from '@/styles';
import { Service } from '../components';
import { FreeShiping, FreeReturn, Support247, EasyShop } from '@/public';

const ChooseUs = ({ locale }) => {
  const t = useTranslations('chooseus');
  return (
    <div className={`my-7 ${styles.flexCenterCol} gap-4 `}>
      <h1 className="font-semibold text-baleblack text-[16px] md:text-[20px] lg:text-[28px] lg:leading-[41px]">
        {t('head')}
      </h1>
      <div className={`${styles.flexCenter} gap-2 md:gap-4 lg:gap-14`}>
        <Service
          img={FreeShiping}
          title={t('freeshiping.title')}
          desc={t('freeshiping.desc')}
        />
        <Service
          img={EasyShop}
          title={t('easyshop.title')}
          desc={t('easyshop.desc')}
        />
        <Service
          img={Support247}
          title={t('support.title')}
          desc={t('support.desc')}
        />
        <Service
          img={FreeReturn}
          title={t('freereturn.title')}
          desc={t('freereturn.desc')}
        />
      </div>
    </div>
  );
};

export default ChooseUs;
