import React from 'react';
import Head from "next/head";
import { getLayoutContent } from 'src/lib/getLayoutContent';
import getLocaleParam from 'src/lib/getLocaleParam';
import { apiURL } from 'src/lib/env';

export default function PrivacyPolicy({ pageContent }) {
  /* let content = pageContent.text.replaceAll('/uploads/', `${apiURL}/uploads/`); */

  return (
    <>
      <Head>
        <title>Política de Privacidade</title>
      </Head>

      <div className="container" style={{ marginTop: '32px' }}>

        <style jsx-global>{`
          img {
            max-width: 75%;
          }

          @media screen and (max-width: 576px) {
            img {
              max-width: 100%;
            }
          }
        `}</style>

        <div dangerouslySetInnerHTML={{ __html: pageContent.text }} />
      </div>

    </>
  )
}

export async function getStaticProps({ locale }) {
  let localeParameter = getLocaleParam(locale);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/politica-de-privacidade${localeParameter}`);
  const pageContent = await res.json();

  const contactRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dados-de-contato${localeParameter}`);
  const contact = await contactRes.json();

  const layout = await getLayoutContent(localeParameter);

  return {
    props: { pageContent, layout, contact },
    revalidate: 10,
  }
}