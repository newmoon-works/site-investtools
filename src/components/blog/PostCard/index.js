import React from 'react';
import styles from './PostCard.module.scss';
import postImg from 'public/images/postimg.jpg';
import Image from 'next/image';

export default function PostCard(props) {
  return (
    <article className={styles.card}>
      <a href="#" className={styles.thumbnail}>
        <div>
          <img src={props.cover} alt="Thumbnail" />
        </div>
      </a>
      <div className={`${styles.badge} caption`}>
        {props.category}
      </div>
      <div className={styles.body}>
        <a href="#"><h3>{props.title}</h3></a>
        <div className="body-small">{props.exerpt}</div>
        <a className="body-small" href="#">Ler Mais</a>
      </div>
    </article>
  )
}