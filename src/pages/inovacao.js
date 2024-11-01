import React, { useEffect } from 'react';
import data from 'public/content.json';
import Head from "next/head";
import NegociosHero from 'src/components/novos-negocios/NegociosHero';
import NegociosHistory from 'src/components/novos-negocios/NegociosHistory';
import Negocios from 'src/components/novos-negocios/Negocios';
import Iniciativas from 'src/components/novos-negocios/Iniciativas';
import CallToAction from 'src/components/novos-negocios/CallToAction';
import { getLayoutContent } from 'src/lib/getLayoutContent';
import getLocaleParam from 'src/lib/getLocaleParam';

export default function NovosNegocios({pageContent}) {
  return (
    <>
      <Head>
        <title>Novos Negócios - Investtools</title>
      </Head>

      <NegociosHero content={pageContent.hero} />
      <NegociosHistory content={pageContent.about} />
      <Iniciativas content={pageContent.initiatives} />
      <Negocios content={pageContent.businesses} />
      <CallToAction content={pageContent.cta} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/novos-negocios`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}