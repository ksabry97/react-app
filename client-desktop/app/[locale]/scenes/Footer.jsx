'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from '@/styles';
import { Glow } from '../ui';
import {
  HomeLogo,
  FooterImg,
  CopyRightIcon,
  FaceBookIcon,
  TwitterIcon,
  InstagramIcon,
  Line,
  Shadow,
} from '@/public';

const classGroup = `${styles.flexStartCol} gap-1 xl:gap-5 lg:gap-3 md:gap-2`;
const classHead = `font-bold text-mianRed md:text-[12px] lg:text-[16px] xl:text-[20px] sm:text-[12px] text-[8px]`;
const classItem = `text-footerText md:text-[12px] lg:text-[16px] xl:text-[20px] opacity-60 sm:text-[12px] text-[8px]`;
const Menu = ({ head, home, decoration, furniture }) => {
  return (
    <div className={classGroup}>
      <h1 className={classHead}>{head}</h1>
      <p className={classItem}>{home}</p>
      <p className={classItem}>{decoration}</p>
      <p className={classItem}>{furniture}</p>
    </div>
  );
};
const Services = ({
  head,
  productUpdate,
  freeShipping,
  consulting,
  gurantee,
}) => {
  return (
    <div className={classGroup}>
      <h1 className={classHead}>{head}</h1>
      <p className={classItem}>{productUpdate}</p>
      <p className={classItem}>{freeShipping}</p>
      <p className={classItem}>{consulting}</p>
      <p className={classItem}>{gurantee}</p>
    </div>
  );
};

const Info = ({ head, terms, policy }) => {
  return (
    <div className={classGroup}>
      <h1 className={classHead}>{head}</h1>
      <p className={classItem}>{terms}</p>
      <p className={classItem}>{policy}</p>
    </div>
  );
};

const Footer = ({ locale }) => {
  const t = useTranslations('footer');
  return (
    <div
      className={`border border-red-600 p-1 z-10 w-full relative ${styles.flexCenterCol} mb-4 bg-grey  md:pb-6 lg:pb-8 xl:pb-10 `}
    >

        <Glow className={` w-[150px] h-[200px]  rounded-[200px] blur-[20px] rotate-[111deg] bottom-[5%] md:w-[350px] md:h-[300px] md:bottom-[30%] lg:w-[600px] lg:h-[500px] xl:w-[840px] xl:h-[650px]  xl:rounded-[840px] xl:blur-[70px] xl:bottom-[40%] ${locale === 'en' ? '-right-[5%] md:-right-[10%] xl:-right-[10%]' : '-left-[5%] md:-left-[10%] xl:-left-[10%]'}`}/>
      <div
        className={`w-full grid grid-cols-4 lg:grid-cols-3 gap-x-1 justify-around items-center z-10  `}
      >
        <div
          className={`${styles.flexCenterCol}  gap-1 xl:gap-8 lg:gap-6 md:gap-4`}
          style={{ columnSpan: 1 / 2 }}
        >
          <Image
            src={HomeLogo}
            alt="cratic home logo"
            width={233}
            height={47}
            className="scale-[60%] md:scale-[70%] lg:scale-75 xl:scale-100"
          />
          <Image
            src={Line}
            alt="line art"
            width={223}
            height={2}
            className="scale-[40%] md:scale-[65%] lg:scale-75 xl:scale-100"
          />
          <div className="flex justify-start items-center sm:gap-1 xl:gap-6">
            <Image
              src={FaceBookIcon}
              alt="facebook icon"
              className="cursor-pointer scale-[40%] lg:scale-75 xl:scale-100"
            />
            <Image
              src={TwitterIcon}
              alt="twitter icon"
              className="cursor-pointer scale-[40%] lg:scale-75 xl:scale-100"
            />
            <Image
              src={InstagramIcon}
              alt="instagram icon"
              className="cursor-pointer scale-[40%] lg:scale-75 xl:scale-100"
            />
          </div>
        </div>
        <div className="grid grid-cols-3  justify-between gap-x-2 items-start col-span-2 lg:col-span-1">
          <Menu
            head={t('menu.head')}
            home={t('menu.home')}
            decoration={t('menu.decoration')}
            furniture={t('menu.furniture')}
          />
          <Services
            head={t('service.head')}
            productUpdate={t('service.product-update')}
            freeShipping={t('service.free-shipping')}
            consulting={t('service.consulting')}
            gurantee={t('service.gurantee')}
          />
          <Info
            head={t('info.head')}
            terms={t('info.terms')}
            policy={t('info.policy')}
          />
        </div>
        <Image
          src={FooterImg}
          alt="footer img"
          priority
          width={550}
          height={665}
          className={`-mt-[35%] md:-mt-[33%] lg:-mt-[30%] xl:-mt-[27%] z-10 ${
            locale === 'ar' && '-scale-x-100'
          } `}
        />
      </div>
      <div
        className={`${styles.flexCenter} gap-1 text-copyrightText md:text-[10px] lg:text-[16px] text-[8px]`}
      >
        <p>{t('copyright')}</p>
        <Image
          src={CopyRightIcon}
          alt="copyright icon"
          className="opacity-60 scale-75 md:scale-100"
        />
        <p>2023 Cratic Home</p>
        <p>{t('rights')}</p>
      </div>
    </div>
  );
};

export default Footer;
