'use client';
import styles from '@/styles';
import Image from 'next/image';
import { Dqoute } from '@/public';

const Testimonial = ({ name, occupation, testimonial, locale }) => {
  return (
    <div
      className={`z-20 w-[200px] sm:w-[300px] md:w-[400px] lg:[450] xl:w-[500px] relative rounded-md gap-[2px] md:gap-[4px] text-active ${styles.flexStartCol} bg-testimonialBg p-2 sm:py-3 sm:px-3 md:py-5 md:px-4 lg:px-8 lg:p-9  xl:py-11 xl:px-10 xl:leading-[150%]`}
    >
      <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
        {name}
      </h1>
      <h3 className="font-semibold text-[10px] sm:text-[12px] md:text-[14px]  lg:text-[16px]">
        {occupation}
      </h3>
      <p className="w-[90%] sm:w-[85%] text-inActive text-[8px] sm:text-[10px] md:text-[12px]  mt-[2px] md:mt-[4px] lg:text-[14px] lg:mt-[6px] xl:text-[16px]">
        {testimonial}
      </p>

      <div
        className={`absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[110px] lg:h-[110px] -top-[20%] xl:-top-[19%] ${
          locale === 'ar' && ' -scale-x-100'
        } ${
          locale === 'en'
            ? 'right-[5%] xl:right-[3%]'
            : 'left-[5%] xl:left-[3%]'
        } sm:-top-[28%] xl:-top-[35%] xl:scale-125 `}
      >
        <Image
          src={Dqoute}
          alt="qoute-img"
          width={156}
          height={156}
          className=" w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default Testimonial;
