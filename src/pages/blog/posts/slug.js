import React from "react";
import PostHero from "src/components/blog/PostHero";

export default function BlogPost({ post }) {

  return (
    <>
      <PostHero />
      {/* <div dangerouslySetInnerHTML={{__html: post}} /> */}
    </>
  )
}

export async function getStaticProps() {
  const posts = await fetch('https://blog.investtools.com.br/wp-json/wp/v2/posts');
  const postList = await posts.json();
  const post = postList[0].content.rendered;

  return {
    props: { post }
  }
}