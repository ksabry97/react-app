import '../globals.css';
import 'tailwindcss/tailwind.css';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Navbar } from './components';
import { Footer } from './scenes';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const metadata = {
  title: 'Cratic Home',
  description:
    'The best place with all what you need for your modern and dream home',
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="w-full h-screen flex flex-col  items-center">
            <Navbar locale={locale} />
            {children}
            <Footer locale={locale} />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
