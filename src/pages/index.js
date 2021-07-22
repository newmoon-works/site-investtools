import Head from "next/head";
import Hero from "../components/Hero";
import data from  '../../public/content.json';

export default function Home(pageContent) {

  return (
    <>
      <Head>
        <title>Investtools</title>
      </Head>

      <Hero content={pageContent.hero} />

    </>
  )
}

export async function getStaticProps() {
  return {
    props: data
  }
}