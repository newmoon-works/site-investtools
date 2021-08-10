import React from 'react';
import styles from './FooterContactLink.module.scss';
import Link from 'next/link';

export default function FooterContactLink() {
  return (
    <div className={styles.contactLink}>
      <p className="caption">Quer conhecer nossos produtos? <br /> Nós teremos o prazer de te responder.</p>
      <Link href="/contato">
        <a>Entre em Contato Conosco &nbsp; <span>&rarr;</span></a>
      </Link>
    </div>
  )
}