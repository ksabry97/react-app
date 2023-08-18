'use client';

import styles from '@/styles';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Slider = ({ selected, slideUp, slideDown }) => {
  const inActiveBarClass =
    'w-[0.1rem] h-[0.2rem] sm:w-[0.2rem] sm:h-[0.4rem] md:w-[0.3rem] md:h-[0.6rem] lg:w-[0.4rem] lg:h-[0.8rem] xl:w-[0.5rem] xl:h-[1rem] bg-barInActive rounded-sm duration-300';
  const activeBarClass =
    'w-[0.1rem] h-[0.3rem] sm:w-[0.2rem] sm:h-[0.6rem] md:w-[0.3rem] md:h-[0.9rem] lg:w-[0.4rem] lg:h-[1.2rem] xl:w-[0.5rem] xl:h-[1.5rem] bg-mianRed rounded-md duration-300';

  return (
    <div
      className={`${styles.flexCenterCol} gap-2 xl:gap-3 duration-300`}
    >
      <IoIosArrowUp
        size={20}
        color="#FF9393"
        cursor="pointer"
        onClick={() => slideUp()}
        className='scale-50 sm:scale-[65%] md:scale-75 lg:scale-95 xl:scale-100 p-0'
      />
      <div className={selected === 0 ? activeBarClass : inActiveBarClass} />
      <div className={selected === 1 ? activeBarClass : inActiveBarClass} />
      <div className={selected === 2 ? activeBarClass : inActiveBarClass} />
      <div className={selected === 3 ? activeBarClass : inActiveBarClass} />
      {selected !== 5 && (
        <div className={selected === 4 ? activeBarClass : inActiveBarClass} />
      )}
      {selected === 5 && (
        <div className={selected === 5 ? activeBarClass : inActiveBarClass} />
      )}
      <IoIosArrowDown
        size={20}
        color="#FF9393"
        cursor="pointer"
        onClick={() => slideDown()}
        className='scale-50 sm:scale-[65%] md:scale-75 lg:scale-95 xl:scale-100'
      />
    </div>
  );
};

export default Slider;
