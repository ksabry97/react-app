'use client';

import { useTranslations } from 'next-intl';
import styles from '@/styles';
import Link from 'next/link';
import { InspirationCard } from '../components';
import { HomePost1, HomePost2, HomePost3, HomePost4 } from '@/public';

const InspirationsHome = () => {
  const t = useTranslations('inspirations');

  return (
    <div className={`w-full ${styles.flexCenterCol} gap-4`}>
      <div className={`${styles.flexBetween} w-full`}>
        <h1 className="text-baleblack font-semibold xl:leading-10 xl:text-3xl lg:text-2xl md:text-xl">
          {t('title')}
        </h1>
        <Link
          className="text-baleblack font-semibold xl:leading-10 xl:text-base underline underline-offset-4 text-[10px] md:text-[14px] "
          href="/inspirations"
        >
          {t('view-all')}
        </Link>
      </div>
      <div className="w-full grid grid-cols-4 justify-between gap-x-1 xl:gap-x-6">
        <InspirationCard
          img={HomePost1}
          title={t('inspiration')}
          date="Nov 18th, 2022"
        />
        <InspirationCard
          img={HomePost2}
          title={t('inspiration')}
          date="Nov 18th, 2022"
        />
        <InspirationCard
          img={HomePost3}
          title={t('inspiration')}
          date="Nov 18th, 2022"
        />
        <InspirationCard
          img={HomePost4}
          title={t('inspiration')}
          date="Nov 18th, 2022"
        />
      </div>
    </div>
  );
};

export default InspirationsHome;
