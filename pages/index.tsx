import Head from 'next/head';

import { NavBar } from '@/shared/presentation/components/organisms';

export default function Home() {
  return (
    <div>
      <Head>
        <title>M&M Index</title>
      </Head>

      <NavBar />

      <p>This website is under development</p>
    </div>
  );
}
