import Head from 'next/head';

import Modifiers from '@/modules/powers/presentation/pages/Modifiers';

export default function ModifiersPage() {
  return (
    <>
      <Head>
        <title>modifiers</title>
      </Head>

      <Modifiers />
    </>
  );
}
