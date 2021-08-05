import React from 'react';
import styles from './AboutProduct.module.scss'
import Image from "next/image";

export default function AboutProduct({ content: {about, features, logo, monitor} }) {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <div className={styles.monitorBox}>
              <Image src={require(`public/images/${monitor}`).default} alt="Investtools - Perform It"/>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className={styles.logoBox}>
              <Image src={require(`public/images/${logo}`).default} alt="Investtools - Perform It"/>
            </div>
          </div>
          <div className={styles.aboutProductBox}>
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className={styles.aboutBox}>
                  <div className="title-box">
                    <h3>
                      Ganhe tempo para <br/> pensar na estratégia
                    </h3>
                  </div>
                  <div className={styles.textBox} dangerouslySetInnerHTML={{__html: about}}/>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className={styles.featureBox}>
                  <div className={styles.feature}>
                    {
                      features.map(feat => {
                        return (
                          <div key={feat.id}>
                            <h5 dangerouslySetInnerHTML={{__html: feat.title}} />
                            <p  dangerouslySetInnerHTML={{__html: feat.text}} />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}