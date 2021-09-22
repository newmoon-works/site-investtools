import React from "react";
import PostBody from "src/components/blog/PostBody";
import PostHero from "src/components/blog/PostHero";
import RelatedPosts from "src/components/blog/RelatedPosts";

export default function BlogPost({ post }) {

  return (
    <>
      <PostHero />
      {/* <div dangerouslySetInnerHTML={{__html: post}} /> */}
      <PostBody content={post} />
      <RelatedPosts />
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