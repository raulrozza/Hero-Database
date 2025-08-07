import { Biryani } from 'next/font/google';
import localFont from 'next/font/local';

export const biryani = Biryani({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-biryani',
  display: 'swap',
});

export const newsflash = localFont({
  src: './Newsflash-BB.ttf.woff',
  variable: '--font-newsflash',
  weight: 'normal',
  style: 'normal',
  display: 'swap',
});
