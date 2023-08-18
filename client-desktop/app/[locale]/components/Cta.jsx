'use client';

import { useTranslations } from 'next-intl';
import { Button } from '../ui';
import styles from '@/styles';

const Cta = ({ className, style }) => {
  const t = useTranslations('product');
  const classes = `w-full ${className} ${styles.flexStartCol} xl:p-2 p-1 bg-glass rounded-md  backdrop-blur-[5px] z-10`;
  return (
    <div style={style} className={classes}>
      <h1 className="text-active font-semibold xl:text-[14px] xl:leading-[150%] lg:text-[12px] md:text-[10px] text-[8px]">
        {t('head')}
      </h1>
      <div className={`w-full ${styles.flexBetween}`}>
        <p className="text-inActive xl:text-[12px] xl:leading-[150%] w-[70%] lg:text-[10px] md:text-[8px] text-[6px]">
          {t('desc')}
        </p>
        <Button
          title={t('cta-2')}
          href="/categories"
          className="text-screen bg-mianRed px-1 xl:text-[12px] font-medium xl:py-2 xl:px-4 self-start lg:text-[10px] py-1  sm:text-[8px] text-[6px] "
        />
      </div>
    </div>
  );
};

export default Cta;
