import React from 'react';

import { makeConditionsRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import List from './list';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const conditions = await makeConditionsRepository().findAll();

  return (
    <ReferencePage>
      <List conditions={conditions} />

      {children}
    </ReferencePage>
  );
}
