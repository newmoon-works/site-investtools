import Head from "next/head";
import data from  '../../public/content.json';
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

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
      <Contact />

    </>
  )
}

export async function getStaticProps() {
  return {
    props: data
  }
}