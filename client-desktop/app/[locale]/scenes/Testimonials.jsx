'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import styles from '@/styles';
import { Testimonial } from '../components';
import { Slider, Net } from '../ui';

const Testimonials = ({ locale }) => {
  const [selected, setSelected] = useState(0);
  const t = useTranslations('testimonials');
  const slideDown = () => {
    if (selected === 5) {
      setSelected(0);
    } else {
      setSelected((prev) => (prev = prev + 1));
    }
  };
  const slideUp = () => {
    if (selected === 0) {
      setSelected(5);
    } else {
      setSelected((prev) => (prev = prev - 1));
    }
  };

  return (
    <div
      className={`w-full bg-screen ${
        styles.flexCenter
      } pb-4 sm:pb-10 md:pb-24 lg:pb-32  xl:pb-36`}
    >
      <div
        className={`${styles.flexCenterCol} gap-1 sm:gap-4 md:gap-20 lg:gap-24 xl:gap-32`}
      >
        <div
          className={`${styles.flexCenterCol} gap-1 mt-2 sm:mt-4 sm:gap-2 md:mt-6 lg:mt-8 xl:mt-10 xl:leading-[150%]`}
        >
          <h1 className="font-bold text-active text-[12px] sm:text-[14px] md:text-[18px]  xl:text-[28px]">
            <div dangerouslySetInnerHTML={{ __html: t.raw('head') }} />
          </h1>
          <p className="text-inActive text-[8px] sm:text-[10px] md:text-[14px] xl:text-[16px]">
            {t('text')}
          </p>
        </div>
        <div
          className={`w-full ${styles.flexCenter} gap-6 sm:gap-10 md:gap-14 lg:gap-24 xl:gap-32 ${
            locale === 'en' ? 'pl-[7%]' : 'pr-[7%]'
          }`}
        >
          <div className={`${styles.flexEnd}`}>
            <Net selected={selected} locale={locale} />
          </div>
          <div
            className={`${styles.flexCenter} gap-1 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-[50px] `}
          >
            <Slider
              selected={selected}
              slideDown={slideDown}
              slideUp={slideUp}
            />
            <Testimonial
              name={t('name')}
              occupation={t('occupation')}
              testimonial={t('testimonial')}
              locale={locale}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
