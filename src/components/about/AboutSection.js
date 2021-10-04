import React from 'react';
import styles from './AboutSection.module.scss';

export default function AboutSection({ content }) {

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 position-relative">
            <div className={styles.aboutBox}>
              <div className="title-box">
                <h3>{content.aInvesttools.title}</h3>
              </div>

              <div className={styles.textBox}>
                {content.aInvesttools.text}
              </div>

            </div>
            <div className={styles.historyBox}>
              <div className="title-box">
                <h3 className="text-white">{content.history.title}</h3>
              </div>
              <div className={`${styles.textBox} text-white`}>
                {content.history.text}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.imageBox}>
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${content.image.url}`} alt="A Investtools" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={styles.whyUsBox}>
              <div className="title-box">
                <h3>{content.whyUs.title}</h3>
              </div>

              <div className={styles.textBox}>
                {content.whyUs.text}
              </div>

            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.motivationBox}>
              <div className="title-box">
                <h3>{content.motivation.title}</h3>
              </div>

              <div className={styles.textBox}>
                {content.motivation.text}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}