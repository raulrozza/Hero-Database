import Head from 'next/head';

import Conditions from '@/modules/conditions/presentation/pages/Conditions';

export default function ConditionsPage() {
  return (
    <>
      <Head>
        <title>Conditions</title>
      </Head>

      <Conditions />
    </>
  );
}
