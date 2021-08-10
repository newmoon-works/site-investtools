import Head from "next/head";
import data from  '../../public/content.json';
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import About from "src/components/home/About";

export default function Home(pageContent) {

  return (
    <>
      <Head>
        <title>Investtools</title>
      </Head>

      <Hero content={pageContent.hero} />
      {/* <Products content={pageContent.products} /> */}
      <About content={pageContent.about} />
      <Clients content={pageContent.clients} />
      <Testimonials content={pageContent.testimonials} />
      <Contact content={pageContent.generalText[0]} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: data
  }
}