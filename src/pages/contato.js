import React from 'react';
import Head from "next/head";
import Hero from "../components/contact/ContactHero";
import Form from "../components/contact/ContactForm";
import { getLayoutContent } from 'src/lib/getLayoutContent';
import getLocaleParam from 'src/lib/getLocaleParam';

export default function Contato({ contact }) {
  return (
    <>
      <Head>
        <title>Contato - Investtools</title>
      </Head>

      <Hero />
      <Form content={contact} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  let localeParameter = getLocaleParam(locale);

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato${localeParameter}`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent(localeParameter);

  return {
    props: { layout, contact },
    revalidate: 10,
  }
}