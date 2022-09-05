import React from 'react';
import Head from "next/head";
import data from 'public/content.json';
import AboutProduct from "../components/common/AboutProduct";
import Functionalities from "../components/common/Functionalities";
import { getLayoutContent } from 'src/lib/getLayoutContent';

export default function ConsultIt({pageContent}) {
  return (
    <>
      <Head>
        <title>Consult It - Investtools</title>
      </Head>

      <AboutProduct content={pageContent.consultIt} product="consult-it" heroText={pageContent.heroText} />
      <Functionalities col="3" content={pageContent.consultIt}/>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consult-it`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}