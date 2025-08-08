import React from 'react';

import { makeAdvantagesRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import List from './list';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const advantages = await makeAdvantagesRepository().findAll();

  return (
    <ReferencePage>
      <List advantages={advantages} />

      {children}
    </ReferencePage>
  );
}
