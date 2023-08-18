'use client';
import Image from 'next/image';
import styles from '@/styles';

const Service = ({ img, title, desc }) => {
  return (
    <div
      className={`${styles.flexCenterCol} w-[130px] text-[8px] text-center md:w-[170px] md:text-[12px] lg:text-[14px] lg:w-[247px]`}
    >
      <Image
        src={img}
        alt={`${img}-icon`}
        width={43}
        height={35}
        className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[43px] lg:h-[35px] "
      />
      <h1 className="font-semibold text-baleblack">{title}</h1>
      <p className="text-inActive">{desc}</p>
    </div>
  );
};

export default Service;
