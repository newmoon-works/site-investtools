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
        <div className="row gy-5 position-relative">
          <div className="col-1 position-absolute" />
          <div className="col-12 col-lg-6">
            <img src="/images/new/home-mosaic.png" className="w-100" alt="" />
          </div>
          <div className="col-12 col-lg-5 offset-lg-1">
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