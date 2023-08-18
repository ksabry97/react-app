'use client';
import Image from 'next/image';
import { SearchIcon } from '@/public';
import styles from '@/styles';
import { Button } from '../ui';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { searchResults } from '@/lib/home';

const Search = ({ locale }) => {
  const t = useTranslations('header');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const searchHandler = async (event) => {
    const searchText = event.target.value;
    console.log(searchText);
    if (searchText.length > 2) {
      console.log('hii');
      const { categories, products } = await searchResults(locale, searchText);
      if (categories) setCategories(categories.categories);
      if (products) setProducts(products.products);
    } else {
      setProducts([]);
      setCategories([]);
    }
    if (searchText === '') {
      setProducts([]);
      setCategories([]);
    }
  };

  const Results = () => {
    const classList = `w-full ${styles.flexStartCol} gap-1`;
    const classCategory = `w-full font-semibold text-active text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] ${styles.flexStartCol} gap-2 `;
    const classItem = `flex justify-start items-center gap-1  text-inActive w-full bg-global cursor-pointer hover:bg-glow px-2 py-1 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]`;
    return (
      <ul
        className={` top-[105%] left-0 ${locale === 'ar' && 'right-0'} rounded-md shadow-md absolute p-1 bg-screen z-10 w-[80%] ${styles.flexStartCol} gap-1 md:p-2 lg:gap-2 lg:p-3  xl:gap-3 xl:p-4`}
      >
        {categories.length > 0 && (
          <li className={classCategory}>
            <h1 className="underline underline-offset-[6px]">
              {`${t('categories')} (${categories.length})`}{' '}
            </h1>
            <ul className={classList}>
              {categories?.map((category) => (
                <li className={classItem} key={category.id}>
                  <h1>{category.category_name || category.category_name_ar}</h1>
                </li>
              ))}
            </ul>
          </li>
        )}
        {products.length > 0 && (
          <li className={classCategory}>
            <h1 className="underline underline-offset-[6px]">
              {`${t('products')} (${products.length})`}
            </h1>
            <ul className={classList}>
              {products?.map((product) => (
                <li className={classItem} key={product.id}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/assets/${product.image}`}
                    alt='productImg'
                    width={30}
                    height={30}
                  />
                  <h1>{product.product_name || product.product_name_ar}</h1>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    );
  };
  return (
    <div
      className={`relative ${styles.flexCenter} bg-screen gap-1 md:gap-2 lg:gap-3 shadow-sm shadow-boxShadow rounded-md w-[300px] px-[2px] py-[2px] sm:w-[400px] sm:p-1 md:w-[480px] md:px-[8px] md:py-[6px] lg:w-[650px] lg:px-[10px] lg:py-[8px] xl:w-[810px] xl:px-[15px] xl:py-[10px] `}
    >
      <div>
        <Image
          src={SearchIcon}
          alt="searchIcon"
          className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] lg:w-[28px] lg:h-[28px] xl:w-[32px] xl:h-[32px]"
        />
      </div>
      <input
        className=" text-searchText outline-none border-none bg-transparent w-[95%] text-[10px] sm:text-[12px] sm:w-[90%] md:text-[14px] lg:text-[16px] xl:w-[80%] xl:text-[18px]"
        type="search"
        autoComplete="kitchen"
        placeholder={locale === 'en' ? 'Search ....' : 'بحث ...'}
        onChange={searchHandler}
      />
      <Button
        title={t('search')}
        className=" bg-mianRed text-screen text-[10px] font-bold py-1 px-3 sm:px-4 sm:text-[12px] md:text-[14px] md:py-2 md:px-6 lg:text-[16px] lg:px-8 lg:py-3 xl:px-11 xl:py-4 xl:text-[18px] xl:leading-[130%] "
      />
      {(categories.length > 0 || products.length > 0) && <Results />}
    </div>
  );
};

export default Search;
