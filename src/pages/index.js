import Head from "next/head";
import data from  '../../public/content.json';
import Hero from "../components/Hero";
import Products from "../components/Products";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

export default function Home(pageContent) {

  return (
    <>
      <Head>
        <title>Investtools</title>
      </Head>

      <Hero content={pageContent.hero} />
      <Products content={pageContent.products} />
      <Clients content={pageContent.clients} />
      <Testimonials content={pageContent.testimonials} />

    </>
  )
}

export async function getStaticProps() {
  return {
    props: data
  }
}