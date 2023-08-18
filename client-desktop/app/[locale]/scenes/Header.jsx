'use client';
import Image from 'next/image';
import styles from '@/styles';
import { useTranslations } from 'next-intl';
import { Search } from '../components';
import { HeaderHero, ArrowArt, DotsArt } from '@/public';
import { Glow } from '../ui';
const Header = ({ locale }) => {
  const t = useTranslations('header');
  return (
    <div
      className={` relative flex justify-start items-center h-[280px] w-[92%] sm:w-[85%] sm:h-[350px] md:w-[80%] md:h-[500px] lg:w-[72%] lg:h-[600px] xl:h-[750px] xl:w-[72%] `}
    >
      <div className="relative flex flex-col gap-1 sm:gap-2 md:gap-3 xl:gap-4 ">
        <p className="capitalize text-mianRed font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] xl:leading-[150%]">
          {t('subheader')}
        </p>
        <h1 className="text-active font-bold text-[20px] sm:text-[25px] md:text-[35px] lg:text-[44px] xl:text-[52px] xl:leading-[150%]">
          <div dangerouslySetInnerHTML={{ __html: t.raw('header') }} />
        </h1>
        <p className="text-inActive text-[10px] w-[200px] sm:text-[12px] sm:w-[250px] md:text-[14px] md:w-[300px] lg:text-[18px] lg:w-[400px] xl:text-[20px] xl:leading-[150%] xl:w-[454px]">
          {t('paragraph')}
        </p>
        <Search locale={locale} />
        <div
          className={`absolute  w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px] bottom-[15%]  ${
            locale === 'en' ? 'right-[10%] lg:right-[17%] xl:right-[20%]' : 'left-[10%] sm:left-[15%] lg:left-[20%] xl:left-[20%]'
          } ${locale === 'ar' && '-scale-x-100'}`}
        >
          <Image
            src={ArrowArt}
            alt="arrow"
            width={249}
            height={249}
            priority
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
      <div
        className={`absolute -z-[1] w-[250px] h-[280px] ${
          locale === 'en' ? 'left-[47%]' : 'right-[45%]'
        } sm:w-[300px] sm:h-[350px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[600px] xl:w-[550px] xl:h-[750px] `}
      >
        <Image
          src={HeaderHero}
          alt="headerImg"
          width={550}
          height={750}
          className="rounded-t-full w-[100%] h-[100%]"
          priority
        />
        <div
          className={`absolute -bottom-0 md:-bottom-[4%] lg:-bottom-[5%] xl:-bottom-[4%] -z-10 ${
            locale === 'en' ? '-right-[3%] md:-right-[7%] lg:-right-[12%] xl:-right-[13%]' : '-left-[3%] md:-left-[7%] xl:-left-[13%]'
          } w-[60px] h-[40px] md:w-[100px] md:h-[90px] lg:w-[130px] lg:h-[125px]  xl:w-[155px] xl:h-[137px]`}
        >
          <Image src={DotsArt} alt="dots" width={155} height={137} priority />
        </div>
        <Glow className={`w-[150px] h-[200px] rotate-[27deg] rounded-[200px] blur-[20px] -bottom-[5%] sm:w-[200px] md:w-[300px] md:h-[350px] lg:w-[420px] lg:h-[500px] xl:w-[580px] xl:h-[690px] xl:rounded-[690px] xl:blur-[70px] xl:-bottom-[5%] ${locale === 'en' ? '-right-[5%] md:-right-[15%] lg:-right-[30%] xl:-right-[40%]' : '-left-[5%] md:-left-[15%] lg:-left-[30%] xl:-left-[50%]'}`}/>
      </div>
      <Glow className={`w-[200px] h-[150px] rotate-[111deg] rounded-[200px] blur-[20px] -top-[15%] sm:w-[250px] sm:h-[200px] md:w-[350px] md:h-[300px] lg:w-[550px] lg:h-[450px] lg:rounded-[550px] lg:blur-[50px] xl:w-[840] xl:h-[650px]  xl:rounded-[840px] xl:blur-[70px] xl:-top-[20%] ${locale === 'en' ? '-left-[10%] xl:-left-[20%]' : '-right-[10%] xl:-right-[20%]'}`}  />
    </div>
  );
};

export default Header;
