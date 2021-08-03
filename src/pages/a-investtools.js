import React from 'react';
import Head from "next/head";
import data from "../../public/content.json";
import AboutSection from "../components/about/AboutSection";

export default function aInvesttools(pageContent) {

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
  return {
    props: data.generalText[0]
  }
}