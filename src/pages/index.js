import Head from "next/head";
import data from  '../../public/content.json';
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import About from "src/components/home/About";
import Newsletter from "src/components/home/Newsletter";

export default function Home(pageContent) {

  return (
    <>
      <Head>
        <title>Investtools</title>
      </Head>

      <Hero content={pageContent.hero} />
      <Products content={pageContent.products} />
      <About content={pageContent.about} />
      <Clients content={pageContent.clients} />
      <Testimonials content={pageContent.testimonials} />
      <Contact content={pageContent.generalText[0]} />
      <Newsletter />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: data
  }
}