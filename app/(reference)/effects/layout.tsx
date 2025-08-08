import React from 'react';

import { makeEffectsRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import List from './list';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const effects = await makeEffectsRepository().findAll();

  return (
    <ReferencePage>
      <List effects={effects} />

      {children}
    </ReferencePage>
  );
}
