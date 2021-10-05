import React from 'react';
import styles from './NegociosHero.module.scss';
import TitleBox from 'src/components/common/TitleBox';

export default function NegociosHero({content}) {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className={styles.textSection}>
              <TitleBox>{content.title}</TitleBox>
              <h1>{content.subtitle}</h1>
              <div className={styles.heroText}>
                {content.text}
              </div>
            </div>
          </div>
          <div className="col-12 offset-lg-1 col-lg-5 d-flex align-items-center order-lg-1">
            <div className={styles.heroImage}>
              <img className={styles.mockupImg} src={`${process.env.NEXT_PUBLIC_API_URL}${content.mockupImage.url}`} alt="Investtools" />
              <img src="/images/new/triangles-negocios.svg" />
              <img src="/images/new/pattern-square-vertical.svg" />
            </div>
          </div>
          <div className="col-1 order-3" />
        </div>
      </div>
    </section>
  )
}