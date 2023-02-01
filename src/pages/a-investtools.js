import React from 'react';
import Head from "next/head";
import AboutSection from "../components/about/AboutSection";
import { getLayoutContent } from 'src/lib/getLayoutContent';
import getLocaleParam from 'src/lib/getLocaleParam';

export default function aInvesttools({ pageContent }) {

  return (
    <>
      <Head>
        <title>A Investtools</title>
      </Head>

      <AboutSection content={pageContent} />

    </>
  )
}

export async function getStaticProps({ locale }) {
  let localeParameter = getLocaleParam(locale);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/a-investtools${localeParameter}`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato${localeParameter}`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent({ localeParameter });

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}