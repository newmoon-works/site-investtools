import React from 'react';
import Head from "next/head";
import BlogHero from "../../components/blog/BlogHero";

export default function Blog(/*{ postList }*/) {
  return (
    <>
      <Head>
        <title>Blog Investtools – Confira Nossos Conteúdos</title>
      </Head>

      <BlogHero />
    </>
  )
}
/*
export async function getStaticProps() {
  const posts = await fetch('https://blog.investtools.com.br/wp-json/wp/v2/posts');
  const postList = await posts.json();

  return {
    props: {
      postList
    }
  }
}
*/
