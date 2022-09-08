import React from 'react';
import styles from './ProductHero.module.scss';

export default function ProductHero({ content }) {
  return (
    <div className={styles.hero}>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}${content.bannerImage.url}`} alt="Logo Consult It" />

      <div className={styles.overlays}>
        <div />
        <div />
      </div>

      <div>
        <h1>{content.bannerText.title}</h1>
        <h4>{content.bannerText.text}</h4>
      </div>
    </div>
  )
}
