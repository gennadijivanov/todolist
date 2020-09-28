import React from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>To? Do!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
    </div>
  );
}
