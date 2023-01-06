import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dcard</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <main>Hello</main>
      </Layout>
    </>
  );
}
