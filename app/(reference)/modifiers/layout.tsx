import React from 'react';

import { makeModifiersRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import List from './list';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const modifiers = await makeModifiersRepository().findAll();

  return (
    <ReferencePage>
      <List modifiers={modifiers} />

      {children}
    </ReferencePage>
  );
}
