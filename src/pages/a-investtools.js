import React from 'react';
import Head from "next/head";
import data from "../../public/content.json";
import Section from "../components/about/Section";

export default function aInvesttools(pageContent) {

  return (
    <>
      <Head>
        <title>A Investtools</title>
      </Head>

      <Section content={pageContent} />

    </>
  )
}

export async function getStaticProps() {
  return {
    props: data.generalText[0]
  }
}