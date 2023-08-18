'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from '@/styles';
import { EasterBasket } from '@/public';

const ItemLabel = ({ className, style, locale }) => {
  const classColor = `xl:w-[46px] xl:h-[30px] lg:w-[40px] lg:h-[24px] md:w-[35px] md:h-[20px]  lg:rounded-md  w-[30px] h-[15px]  rounded`;
  const classColorName = `font-semibold xl:text-[14px] xl:leading-[160%] lg:text-[12px] md:text-[10px] text-[8px]`
  const t = useTranslations('product');
  const classes = `${className} ${styles.flexBetween} rounded-md bg-screen py-1 gap-1`;
  return (
    <div style={style} className={classes}>
      <div className={`${styles.flexCenterCol} flex-1 gap-1`}>
        <p className="text-active font-semibold xl:text-[14px] xl:leading-[160%] lg:text-[12px] md:text-[10px] text-[8px] ">
          {t('label.material-name')}
        </p>
        <div className="bg-wood xl:w-[92px] xl:h-[30px] rounded lg:w-[84px] lg:h-[27px] md:w-[72px] md:h-[20px] w-[40px] h-[18px] " />
        <p className="text-baleGray font-medium xl:text-[18px] xl:leading-[160%]  lg:text-[14px] md:text-[12px] text-[10px]">
          {t('label.material')}
        </p>
      </div>
      <div className={`${styles.flexCenterCol} flex-1 gap-2`}>
        <div className={`w-full ${styles.flexBetween}`}>
          <p className={`text-active  ${classColorName}`}>
            {t('label.color-1')}
          </p>
          <p className={`text-active ${classColorName}`}>
            {t('label.color-2')}
          </p>
          <p className={`text-active ${classColorName}`}>
            {t('label.color-2')}
          </p>
        </div>
        <div className={`w-full ${styles.flexBetween}`}>
          <div className={`bg-choco ${classColor}`} />
          <div className={`bg-black ${classColor}`} />
          <div className={`bg-maroon ${classColor}`} />
        </div>
        <p className="text-baleGray font-medium xl:text-[18px] xl:leading-[160%] lg:text-[14px] md:text-[12px] text-[10px]">
          {t('label.colors')}
        </p>
      </div>
      <div className="flex-1 xl:w-[265px] xl:h-[265px] -mt-[10%] lg:scale-125">
      <Image
        src={EasterBasket}
        alt="easterBasketImg"
        width={265}
        height={265}
        className="w-[100%] h-[100%]"
      />
      </div>

    </div>
  );
};

export default ItemLabel;
