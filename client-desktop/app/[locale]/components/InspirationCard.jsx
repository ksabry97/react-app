'use client';

import Image from 'next/image';
import styles from '@/styles';
const InspirationCard = ({ className, style, img, title, date }) => {
  const classes = `${className} `;
  return (
    <div style={style} className={`${styles.flexCenterCol} gap-4`}>
      <Image
        src={img}
        alt={`${img}-img`}
        width={380}
        height={262}
        className="rounded-md"
      />
      <div className={`${styles.flexStartCol} self-start gap-2`}>
        <h1 className="text-baleblack font-semibold xl:text-lg md:text-sm text-[10px]">
          {title}
        </h1>
        <p className="text-baleblack font-semibold xl:text-sm md:text-xs text-[8px]">
          {date}
        </p>
      </div>
    </div>
  );
};

export default InspirationCard;
