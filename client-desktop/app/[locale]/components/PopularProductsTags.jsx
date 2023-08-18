'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/styles';
import { Button } from '../ui';

const PopularProductsTags = ({ tags, tagsHandler }) => {
  const [selected, setSelected] = useState('All');
  const filterHandler = (tag) => {
    if (tag === 'All') {
      setSelected('All');
      tagsHandler(null);
    } else {
      setSelected(tag?.tag_name || tag?.tag_name_ar);
      tagsHandler(tag?.id);
    }
  };
  const t = useTranslations('popularproducts');
  const tagClasses =
    'py-1 px-2 text-inActive text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] md:px-4 md:py-2 xl:px-6 xl:py-[10px]';
  const checked =
    'bg-mianRed text-screen font-semibold transition-all duration-300 delay-100 ease-in-out';
  const TagsFilters = () => {
    return (
      <>
        <Button
          title={t('filter')}
          className={`${tagClasses} ${selected === 'All' && checked} `}
          onClick={filterHandler('All')}
        />
        {tags?.map((tag) => (
          <Button
            key={tag?.id}
            title={tag?.tag_name || tag?.tag_name_ar}
            className={`${tagClasses} ${
              selected === (tag?.tag_name || tag?.tag_name_ar) && checked
            }`}
            onClick={filterHandler(tag)}
          />
        ))}
      </>
    );
  };

  return (
    <div className={`${styles.flexBetween} w-full`}>
      <div>
        <h1 className="font-semibold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px]">
          {t('head')}
        </h1>
        <p className="text-inActive text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
          {t('paragraph')}
        </p>
      </div>
      <nav
        className={`self-end ${styles.flexCenter} gap-1 sm:gap-2 md:gap-4 lg:gap-5 xl:gap-7`}
      >
        <TagsFilters />
      </nav>
    </div>
  );
};

export default PopularProductsTags;
