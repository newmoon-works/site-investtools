import React from 'react';
import Head from "next/head";
import data from 'public/content.json';
import AboutProduct from "../components/common/AboutProduct";
import Functionalities from "../components/common/Functionalities";
import { getLayoutContent } from 'src/lib/getLayoutContent';
import getLocaleParam from 'src/lib/getLocaleParam';

export default function Consultoria({ pageContent }) {
  return (
    <>
      <Head>
        <title>Consultoria - Investtools</title>
      </Head>

      <AboutProduct content={pageContent} product="consultoria" formId="site-consultoria-6deb2c1dc6e15d3e8a2a" />
      <Functionalities col="3" content={pageContent} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/consultoria`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}