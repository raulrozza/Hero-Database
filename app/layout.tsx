import NavBar from '@/presentation/components/organisms/NavBar';
import HttpContext from '@/presentation/contexts/HttpContext';

import { LayoutProps } from '.next/types/app/layout';

import { biryani, newsflash } from './fonts/fonts';

import './globals.css';

export const metadata = {
  title: 'Hero Database',
  description: 'Explore the heroic RPG system rules and character options',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <HttpContext>
      <html lang="en" className={`${newsflash.variable} ${biryani.variable}`}>
        <body>
          <NavBar />

          {children}
        </body>
      </html>
    </HttpContext>
  );
}
