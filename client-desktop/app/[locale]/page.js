import styles from '@/styles';
import Image from 'next/image';
import { Cracks } from '@/public';
import {
  Header,
  ChooseUs,
  Categories,
  PopularProducts,
  ItemsProperty,
  InspirationsHome,
  Appliances,
  Testimonials,
} from './scenes';
import { homeFeed } from '@/lib/home';

export async function getHomeFeed(locale) {
  const coffeeStores = await homeFeed(locale);
  return coffeeStores;
}

export default async function Home({ params: { locale } }) {
  const homeFeed = await getHomeFeed(locale);
  return (
    <div className="w-full flex flex-col items-center">
      <Header locale={locale} />
      <ChooseUs locale={locale} />
      <div
        className={` w-full ${styles.flexCenterCol} bg-screen gap-4 px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-5  md:gap-6 lg:px-20 lg:py-10 lg:gap-8 xl:px-52 xl:py-20 xl:gap-10`}
      >
        <Categories categories={homeFeed?.homeCategories} />
        <PopularProducts
          tags={homeFeed?.homeTags}
          popularProducts={homeFeed?.homePopularProducts}
        />
      </div>
      <div className="w-full">
        <ItemsProperty locale={locale} />
      </div>
      <div className="w-full bg-screen py-2 px-4 md:py-[15px] md:px-[50px] lg:py-[30px] lg:px-[115px] xl:py-[35px] xl:px-[200px]">
        <InspirationsHome />
      </div>
      <div
        className={`w-full ${styles.flexCenter} p-4 sm:p-6 md:px-8 lg:px-20 lg:pt-[20px] lg:pb-[40px] xl:px-[200px] xl:pt-[25px] xl:pb-[54px]`}
      >
        <Appliances appliances={homeFeed?.homeAppliances} />
      </div>
      <Testimonials locale={locale} />
    </div>
  );
}
