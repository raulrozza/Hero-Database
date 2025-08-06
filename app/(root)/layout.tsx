import { NavBar } from '@/shared/presentation/components/organisms';

import { LayoutProps } from '.next/types/app/layout';

import './globals.css';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Hero Database</title>
      </head>
      <body>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
