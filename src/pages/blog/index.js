import React from 'react';
import Head from "next/head";
import BlogHero from "../../components/blog/BlogHero";
import PostList from 'src/components/blog/PostList';

export default function Blog(/*{ postList }*/) {
  return (
    <>
      <Head>
        <title>Blog Investtools – Confira Nossos Conteúdos</title>
      </Head>

      <BlogHero />
      <PostList />
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
