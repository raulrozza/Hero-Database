import { makeModifiersRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import { LayoutProps } from '.next/types/app/(reference)/conditions/layout';

import List from './list';

export default async function Layout({ children }: LayoutProps) {
  const modifiers = await makeModifiersRepository().findAll();

  return (
    <ReferencePage>
      <List modifiers={modifiers} />

      {children}
    </ReferencePage>
  );
}
