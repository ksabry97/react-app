'use client';

import Image from 'next/image';
import styles from '@/styles';

const User = ({ style, className, img }) => {
  return (
    <div
      style={style}
      className={`absolute ${className} w-[24px] h-[24px] sm:w-[45px] sm:h-[45px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px]  xl:w-[94px] xl:h-[94px] duration-300`}
    >
      <Image
        src={img}
        width={90}
        height={90}
        alt="userimg"
        className="w-[100%] h-[100%] rounded-[50%] object-cover opacity-40"
      />
    </div>
  );
};
const Net = ({ selected,locale }) => {
  return (
    <div className="flex p-1 md:p-2">
      <div
        className={`relative ${styles.flexCenter} rounded-full bg-lightRed p-[1px] w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] md:w-[120px] md:h-[120px] md:p-1 lg:w-[160px] lg:h-[160px] lg:p-2 xl:w-[182px] xl:h-[182px] xl:p-4`}
      >
        <Image
          src={`/user-${selected}.png`}
          alt="userimg"
          width={148}
          height={148}
          className="w-[100%] h-[100%] rounded-[50%] object-cover"
        />
        <User
          className={`${locale === 'en' ? '-left-[80%]' : '-right-[80%]'}`}
          img={`/user-${selected === 5 ? 0 : 1 + selected}.png`}
        />
        <User
          className={`scale-[70%] ${
            locale === 'en' ? '-left-[20%]' : '-right-[20%]'
          } -top-[70%]`}
          img={`/user-${selected === 0 ? 5 : selected - 1}.png`}
        />
        <User
          className={`scale-50 ${
            locale == 'en' ? '-right-[35%]' : '-left-[35%]'
          } -top-[40%]`}
          img={`/user-${
            selected === 0
              ? 4
              : selected === 1
              ? 5
              : selected === 2
              ? 0
              : selected - 2
          }.png`}
        />
        <User
          className={`scale-90 ${
            locale === 'en' ? '-left-[40%]' : '-right-[40%]'
          } -bottom-[70%]`}
          img={`/user-${selected > 3 ? selected - 4 : 2 + selected}.png`}
        />
        <User
          className={`scale-[60%] ${
            locale === 'en' ? '-right-[40%]' : '-left-[40%]'
          } -bottom-[50%]`}
          img={`/user-${selected > 2 ? selected - 3 : 3 + selected}.png`}
        />
      </div>
    </div>
  );
};

export default Net;
