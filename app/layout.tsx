import React from 'react';

import { NavBar } from '@/shared/presentation/components/organisms';
import SharedContainer from '@/shared/presentation/contexts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SharedContainer>
      <html lang="en">
        <head>
          <title>Hero Database</title>
        </head>
        <body>
          <NavBar />

          {children}
        </body>
      </html>
    </SharedContainer>
  );
}
