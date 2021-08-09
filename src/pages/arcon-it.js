import React from 'react';
import Head from "next/head";
import data from 'public/content.json';
import AboutProduct from "../components/common/AboutProduct";
import Functionalities from "../components/common/Functionalities";

export default function PerformIt(pageContent) {
  return (
    <>
      <Head>
        <title>Arcon It - Investtools</title>
      </Head>

      <AboutProduct content={pageContent} />
      <Functionalities content={pageContent.functionalities}/>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: data.arconit
  }
}