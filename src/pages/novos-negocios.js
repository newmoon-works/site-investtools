import React from 'react';
import data from 'public/content.json';
import Head from "next/head";
import NegociosHero from 'src/components/novos-negocios/NegociosHero';
import NegociosHistory from 'src/components/novos-negocios/NegociosHistory';

export default function NovosNegocios() {
  return (
    <>
      <Head>
        <title>Novos Negócios - Investtools</title>
      </Head>

      <NegociosHero />
      <NegociosHistory />
    </>
  )
}