import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles';
const Category = ({ img, name, id }) => {
  return (
    <div className={`${styles.flexCenterCol} gap-2 md:gap-4`}>
      <Link
        href={`/categories/${id}/products`}
        className={`${styles.flexCenter} p-2 w-[85px] h-[85px] bg-categoryBg rounded-full sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[230px] xl:h-[230px] `}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/assets/${img}`}
          alt={name}
          width={230}
          height={230}
        />
      </Link>
      <h1 className="font-semibold text-[12px] sm:text-[14px] text-active md:text-[16px] lg:text-[18px] xl:text-[20px] xl:leading-[160%] ">
        {name}
      </h1>
    </div>
  );
};

export default Category;
