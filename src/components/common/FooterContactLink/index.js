import React from 'react';
import styles from './FooterContactLink.module.scss';
import Link from 'next/link';

export default function FooterContactLink({content}) {
  return (
    <div className={styles.contactLink}>
      <p className="caption">{content.message}</p>
      <Link href={content.callToAction.link}>
        <a>{content.callToAction.text} &nbsp; <span>&rarr;</span></a>
      </Link>
    </div>
  )
}