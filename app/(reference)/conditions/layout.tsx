import { makeConditionsRepository } from '@/modules/conditions/infra/repositories';

import { LayoutProps } from '.next/types/app/(reference)/conditions/layout';

import List from './list';

export default async function Layout({ children }: LayoutProps) {
  const conditions = await makeConditionsRepository().findAll();

  return (
    <main className="h-full flex flex-col p-4 md:pb-6 md:pt-6 items-center">
      <section className="w-full md:h-full max-w-320 flex flex-col-reverse md:flex-row justify-center gap-8">
        <List conditions={conditions} />

        {children}
      </section>
    </main>
  );
}
