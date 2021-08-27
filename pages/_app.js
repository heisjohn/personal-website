import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>John He</title>
        <meta property="og:title" content="John He" key="title" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
