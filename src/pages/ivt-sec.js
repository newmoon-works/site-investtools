import React from 'react';
import Head from "next/head";
import data from 'public/content.json';
import AboutProduct from "../components/common/AboutProduct";
import Functionalities from "../components/common/Functionalities";
import { getLayoutContent } from 'src/lib/getLayoutContent';
import getLocaleParam from 'src/lib/getLocaleParam';

export default function IVTSec({ pageContent }) {
  return (
    <>
      <Head>
        <title>IVT Sec - Investtools</title>
      </Head>

      <AboutProduct content={pageContent.arconIt} product="arcon-it" formId="site-arcon-it-f62c0e07db40e14f5be8" />
      <Functionalities col="6" content={pageContent.arconIt} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/arcon-it`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}