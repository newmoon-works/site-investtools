import React from 'react';
import Image from 'next/image';
import styles from './Decoration.module.scss';

export default function Decoration(props) {

  const decorName = `detail-${props.size}-${props.style}.svg`

  return (
    <div className={`${styles.decoration} ${props.className}`}>
      <Image src={require(`public/images/new/${decorName}`).default} alt="" />
    </div>
  )
}