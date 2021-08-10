import React from 'react';
import data from 'public/content.json';
import Head from "next/head";
import NegociosHero from 'src/components/novos-negocios/NegociosHero';
import NegociosHistory from 'src/components/novos-negocios/NegociosHistory';
import Negocios from 'src/components/novos-negocios/Negocios';
import Iniciativas from 'src/components/novos-negocios/Iniciativas';
import CallToAction from 'src/components/novos-negocios/CallToAction';

export default function NovosNegocios() {
  return (
    <>
      <Head>
        <title>Novos Negócios - Investtools</title>
      </Head>

      <NegociosHero />
      <NegociosHistory />
      <Negocios />
      <Iniciativas />
      <CallToAction />
    </>
  )
}