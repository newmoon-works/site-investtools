import React, { useEffect, useState } from 'react';
import styles from './RecentPosts.module.scss';

export default function RecentPosts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    const res = await fetch('https://investtools.com.br/strapi/posts');
    const posts = await res.json();
    const sortedPosts = posts.sort((a, b) => b.id - a.id);
    const recentPosts = sortedPosts.slice(0, props.quantity);
    setPosts(recentPosts);
  }

  return (
    <ul>
      {
        posts.map((post, index) => {
          return (
            <li key={`recent-${index}`}>
              <a href={`https://blog.investtools.com.br/posts/${post.slug}`}>{post.title}</a>
            </li>
          )
        })
      }
    </ul>
  )
}