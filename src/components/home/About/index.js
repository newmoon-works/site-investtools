import React from 'react';
import TitleBox from 'src/components/common/TitleBox';
import styles from './About.module.scss';
import Image from 'next/image';
import bigImg from 'public/images/clientes-box-big.jpg';
import smallImg from 'public/images/clientes-box-small.jpg';
import pattern from 'public/images/new/pattern-square-horizontal.svg';

export default function About({ content }) {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row position-relative">
          <div className="col-1 position-absolute" />
          <div className="col-12 col-md-6">
            <div className={styles.aboutImages}>
              <Image src={bigImg} alt="Investtools" />
              <Image src={smallImg} alt="Investtools" />
              <Image src={pattern} alt="Pattern" />
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-12 col-md-5">
            <div className={styles.aboutText}>
              <h2>{content.title}</h2>
              {
                content.paragraphs.map(item => {
                  return (
                    <p key={item.id} className="body-small">
                      {item.text}
                    </p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}