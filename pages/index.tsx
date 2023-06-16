import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>M&M Index</title>
      </Head>

      <h1>M&M Index</h1>
      <h2>M&M Index</h2>
      <h3>M&M Index</h3>
      <h4>M&M Index</h4>

      <p>This website is under development</p>

      <Link href="conditions">Go to Conditions page</Link>
      <br />

      <Link href="powers">Go to Powers page</Link>

      <caption>Something is going on</caption>
    </div>
  );
}
