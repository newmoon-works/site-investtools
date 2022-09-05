import React from 'react';
import styles from './ProductHero.module.scss';

export default function ProductHero({ image, heroText }) {
  console.log(heroText);
  return (
    <div className={styles.hero}>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}${image.url}`} alt="Logo Consult It" />
      <p>{heroText}</p>
    </div>
  )
}
