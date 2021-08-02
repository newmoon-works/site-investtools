import React from 'react';

export default function Blog({ postList }) {
  return (
    <section>

    </section>
  )
}

export async function getStaticProps() {
  const posts = await fetch('https://blog.investtools.com.br/wp-json/wp/v2/posts');
  const postList = await posts.json();

  return {
    postList
  }
}
