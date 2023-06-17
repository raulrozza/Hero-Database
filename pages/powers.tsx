import Head from 'next/head';

import Powers from '@/modules/powers/presentation/view/pages/Powers';

export default function PowersPage() {
  return (
    <>
      <Head>
        <title>Powers</title>
      </Head>

      <Powers />
    </>
  );
}
