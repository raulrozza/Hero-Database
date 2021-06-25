import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>M&M Index</title>
            </Head>

            <h1>M&M Index</h1>

            <p>This website is under development</p>

            <Link href="powers">Go to Powers page</Link>
        </div>
    );
}
