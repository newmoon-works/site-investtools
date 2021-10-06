import Head from "next/head";
import data from '../../public/content.json';
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import About from "src/components/home/About";
import { getLayoutContent } from "src/lib/getLayoutContent";
import Media from "src/components/home/Media";

export default function Home({ pageContent, contact }) {

  return (
    <>
      <Head>
        <title>Investtools</title>
      </Head>

      <Hero content={pageContent.hero} />
      {/* <Products content={pageContent.products} /> */}
      <About content={pageContent.about} />
      <Clients content={pageContent.clients} />
      <Media content={pageContent.media} />
      <Testimonials content={pageContent.testimonials} />
      <Contact content={contact} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home-site`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent();

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}