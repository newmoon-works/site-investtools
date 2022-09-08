import React from 'react';
import Head from "next/head";
import data from 'public/content.json';
import AboutProduct from "../components/common/AboutProduct";
import Functionalities from "../components/common/Functionalities";
import { getLayoutContent } from 'src/lib/getLayoutContent';

export default function DiligenceIt({pageContent}) {
  return (
    <>
      <Head>
        <title>Diligence It - Investtools</title>
      </Head>

      <AboutProduct content={pageContent.diligenceIt} product="diligence-it" formId="site-diligence-it-56c2319c9d827102f14b" />
      <Functionalities col="6" content={pageContent.diligenceIt}/>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diligence-it`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}