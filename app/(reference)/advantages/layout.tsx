import { makeAdvantagesRepository } from '@/modules/advantages/infra/repositories';
import ReferencePage from '@/presentation/components/atoms/ReferencePage';

import { LayoutProps } from '.next/types/app/(reference)/conditions/layout';

/* import List from './list'; */

export default async function Layout({ children }: LayoutProps) {
  const advantages = await makeAdvantagesRepository().findAll();

  return (
    <ReferencePage>
      {/* <List conditions={conditions} /> */}

      {children}
    </ReferencePage>
  );
}
