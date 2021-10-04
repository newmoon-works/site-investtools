import React from 'react';
import Head from "next/head";
import AboutSection from "../components/about/AboutSection";
import { getLayoutContent } from 'src/lib/getLayoutContent';

export default function aInvesttools({pageContent}) {
  console.log(pageContent);

  return (
    <>
      <Head>
        <title>A Investtools</title>
      </Head>

      <AboutSection content={pageContent} />

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/a-investtools`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}