'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from '@/styles';
import { Cta, ItemLabel } from '../components';
import { Cracks, ItemProperty, Checked } from '@/public';

const Property = ({ title }) => {
  return (
    <div className={`${styles.flexCenter} xl:gap-4 lg:gap-3 md:gap-2 gap-1`}>
      <Image src={Checked} alt="checkedIcon" width={26} height={26} />
      <h2 className="text-active xl:text-[20px] xl:leading-[150%]  lg:text-[18px] md:text[14px] text-[10px]">
        {title}
      </h2>
    </div>
  );
};
const ItemsProperty = ({ locale }) => {
  const t = useTranslations('property');
  return (
    <div
      className={` ${styles.flexCenter} relative xl:px-72  xl:mt-12 xl:gap-[70px] lg:mt-10 lg:px-48 lg:gap-[55px] md:px-16 md:gap-[40px] md:mt-6 gap-[20px] px-4 mt-4 `}
    >
      <Image
        src={ItemProperty}
        alt="itemPropertyImg"
        className={`xl:w-[560px] xl:h-[540px]  lg:w-[470px] lg:h-[460px] md:w-[320px] w-[250px] ${
          locale === 'ar' && 'transform -scale-x-100'
        }`}
      />
      <Cta
        className={`absolute top-[3%] ${
          locale === 'en'
            ? 'lg:left-[17%] md:left-[7%] left-[5%] '
            : 'xl:right-[25%] lg:right-[20%] sm:right-[20%] right-[7%]'
        } xl:w-[390px] xl:px-6 xl:py-4 lg:w-[370px]  lg:px-5 lg:py-3 md:w-[280px] w-[180px] border border-glassBorder `}
      />
      <ItemLabel
        className={`absolute lg:bottom-[7%] md:bottom-[5%] bottom-0  ${
          locale === 'en'
            ? 'lg:left-[33%] md:left-[25%] left-[30%]'
            : 'lg:right-[39%] md:right-[35%] right-[33%]'
        } xl:w-[640px] xl:h-[140px]  xl:py-5 lg:w-[540px] lg:h-[120px] lg:py-3 md:w-[420px] md:h-[95px] w-[320px] h-[75px] `}
      />

      <div
        className={`relative ${styles.flexStartCol} self-start xl:mt-10 lg:mt-8  md:mt-6 mt-2`}
      >
        <h1 className="font-medium text-active xl:text-[28px] xl:leading-[150%] lg:text-[24px] md:text-[20px] text-[12px] ">
          <div dangerouslySetInnerHTML={{ __html: t.raw('head') }} />
        </h1>
        <p className="text-inActive xl:text-[16px] xl:leading-[150%] xl:w-[86%] lg:text-[14px] lg:w-[94%] md:text-[12px] text-[8px] ">
          {t('desc')}
        </p>
        <div className="grid justify-items-start items-start grid-cols-2 xl:gap-x-16 xl:gap-y-8  xl:mt-10 lg:mt-8 lg:gap-x-10 lg:gap-y-6 md:mt-3 md:gap-x-6 md:gap-y-2 mt-1 gap-x-1 gap-y-1  ">
          <Property title={t('property-1')} />
          <Property title={t('property-2')} />
          <Property title={t('property-3')} />
          <Property title={t('property-4')} />
          <Property title={t('property-5')} />
          <Property title={t('property-6')} />
        </div>
        <div className={` absolute w-[400px] h-[300px] bottom-[20%] -right-[80%] sm:w-[500px] sm:h-[400px] sm:bottom-[20%] sm:-right-[35%] md:w-[700px] md:h-[600px] md:bottom-[20%] md:-right-[50%] lg:w-[900px] lg:h-[800px] lg:bottom-[20%] lg:-right-[95%] xl:w-[1000px] xl:h-[900px] xl:bottom-[10%]  xl:-right-[80%] ${locale === 'ar' && '-left-[100%] sm:-left-[50%] md:-left-[60%] lg:-left-[95%] xl:-left-[85%] -scale-x-100 '} `}>
        <Image
          src={Cracks}
          alt="craks"
          width={1000}
          height={900}
          className="w-[100%] h-[100%]"
        />
      </div>
      </div>
      
    </div>
  );
};

export default ItemsProperty;
