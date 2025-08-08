import { makeAdvantagesRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import { LayoutProps } from '.next/types/app/layout';

import List from './list';

export default async function Layout({ children }: LayoutProps) {
  const advantages = await makeAdvantagesRepository().findAll();

  return (
    <ReferencePage>
      <List advantages={advantages} />

      {children}
    </ReferencePage>
  );
}
