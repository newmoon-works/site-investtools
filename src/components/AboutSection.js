import React from 'react';
import styles from '../../public/css/modules/components/AboutSection.module.scss';

export default function AboutSection({content}) {

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 position-relative">
            <div className={styles.aboutBox}>
              <div className="title-box">
                <h2>A Investtools</h2>
              </div>

              <div className={styles.textBox} dangerouslySetInnerHTML={{__html: content.aboutText}} />

            </div>
            <div className={styles.historyBox}>
              <div className="title-box">
                <h2 className="text-white">Breve História <br/> da empresa</h2>
              </div>
              <div className={`${styles.textBox} text-white`} dangerouslySetInnerHTML={{__html: content.historyText}} />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.imageBox}>
              <img src="/images/A-Investtools.jpg" alt="A Investtools" className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className={styles.whyUsBox}>
              <div className="title-box">
                <h2>Por que nos contratar</h2>
              </div>

              <div className={styles.textBox} dangerouslySetInnerHTML={{__html: content.whyUsText}} />

            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className={styles.motivationBox}>
              <div className="title-box">
                <h2>O que nos motiva</h2>
              </div>

              <div className={styles.textBox} dangerouslySetInnerHTML={{__html: content.motivationText}} />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}