import { makeEffectsRepository } from '@/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import { LayoutProps } from '.next/types/app/layout';

import List from './list';

export default async function Layout({ children }: LayoutProps) {
  const effects = await makeEffectsRepository().findAll();

  return (
    <ReferencePage>
      <List effects={effects} />

      {children}
    </ReferencePage>
  );
}
