import Head from "next/head";
import Hero from "../components/Hero";

export default function Home({ pageContent }) {



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
  const res = await fetch("http://localhost:3000/content.json");
  const pageContent = await res.json();

  return {
    props: { pageContent }
  }
}