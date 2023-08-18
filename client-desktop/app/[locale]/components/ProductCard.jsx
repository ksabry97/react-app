'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from '@/styles';
import { Button } from '../ui';
const ProductCard = ({ product, bgColor }) => {
  const t = useTranslations('product');
  const Colors = () => {
    return (
      <div className={`${styles.flexCenter} gap-[1px] sm:gap-[2px] md:gap-1 lg:gap-2 xl:gap-[10px]`}>
        {product.colors?.map((color, i) => (
          <div
            key={`${color}-${i}`}
            style={{ backgroundColor: color }}
            className={`rounded-full w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] lg:w-[12px] lg:h-[12px] xl:w-[16px] xl:h-[16px]`}
          />
        ))}
      </div>
    );
  };
  return (
    <div
      className={` rounded-lg ${bgColor} cursor-pointer group flex flex-col justify-evenly items-center w-[100px] h-[110px] mb-[30px] hover:h-[140px]  hover:mb-0  transition-all duration-300 ease-linear sm:w-[140px] sm:h-[145px] sm:mb-[45px] hover:sm:h-[190px] md:w-[185px] md:h-[180px] hover:md:h-[220px] md:mb-[50px] lg:w-[250px] lg:h-[255px] hover:lg:h-[300px] lg:mb-[45px] xl:w-[276px] xl:h-[277px] hover:xl:h-[350px] xl:mb-[73px]`}
    >
      <div className="w-[90px] h-[90px] -mt-[50%] sm:w-[110px] sm:h-[110px] md:w-[142px] md:h-[142px] lg:w-[180px] lg:h-[180px]  xl:w-[230px] xl:h-[230px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/assets/${product.image}`}
          alt={`${product.product_name || product.product_name_ar}`}
          width={230}
          height={230}
          className="w-[100%] h-[[100%]"
        />
      </div>
      <div
        className={`${styles.flexStartCol} justify-self-center gap-1 p-1 sm:p-2 sm:gap-2 lg:p-4 xl:p-6 text-active xl:leading-[160%]`}
      >
        <h1 className="text-[8px] font-semibold sm:text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px] ">
          {product.product_name || product.product_name_ar}
        </h1>
        <p className="text-[6px] sm:text-[10px] md:text-[12px] xl:text-[14px]">
          {product.description || product.description_ar}
        </p>
        <div className={`w-full  ${styles.flexBetween}`}>
          <Colors />
          <div className={`${styles.flexCenter} font-bold xl:leading-[160%] gap-[1px]`}>
            <p className="text-[4px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:text-[14px] self-start">$</p>
            <p className="text-[6px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[20px]">{product.price}</p>
          </div>
        </div>
      </div>
      <Button
        title={t('cta-1')}
        href={`/products/${product.id}`}
        className={`hidden w-[95%] mb-[2px] bg-mianRed text-screen group-hover:flex text-[8px] py-[2px] sm:py-1 sm:w-[90%] sm:text-[10px] md:py-2 md:text-[12px] lg:text-[14px] xl:py-3 xl:w-[85%] xl:text-[16px]`}
      />
    </div>
  );
};

export default ProductCard;
