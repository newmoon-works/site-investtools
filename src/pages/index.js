import Head from "next/head";
import data from  '../../public/content.json';
import Hero from "../components/Hero";
import Products from "../components/Products";
import Clients from "../components/Clients";

export default function Home(pageContent) {

  return (
    <>
      <Head>
        <title>Investtools</title>
      </Head>

      <Hero content={pageContent.hero} />
      <Products content={pageContent.products} />
      <Clients content={pageContent.clients} />

    </>
  )
}

export async function getStaticProps() {
  return {
    props: data
  }
}