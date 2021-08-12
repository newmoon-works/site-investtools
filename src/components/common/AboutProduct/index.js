import React from 'react';
import styles from './AboutProduct.module.scss'
import Image from "next/image";
import TitleBox from '../TitleBox';
import Decoration from '../Decoration';

export default function AboutProduct({ content: {about, features, title, href, ctaImage, logo, monitor} }) {
  return (
    <section className={styles.productSection}>
      <Decoration size="lg" style="normal" className={styles.decorTop} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <div className={styles.monitorBox}>
              <Image src={require(`public/images/new/${monitor}`).default} alt="Investtools - Perform It"/>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className={styles.logoBox}>
              <Image src={require(`public/images/new/${logo}`).default} alt="Investtools - Perform It"/>
            </div>
          </div>
          <div className={styles.aboutProductBox}>
            <div className="row gx-lg-0">
              <div className="col-12 col-lg-5">
                <div className={styles.aboutBox}>
                  <TitleBox>{ title }</TitleBox>
                  <div className={styles.textBox} dangerouslySetInnerHTML={{__html: about}}/>
                  <a href={href} className={styles.cta} target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid d-block mx-auto" src={`/images/new/${ctaImage}`} alt="Calendar" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className={styles.featureBox}>
                  <Decoration size="xs" style="white" className={styles.decorBig} />
                  <div className={styles.feature}>
                    {
                      features.map(feat => {
                        return (
                          <div key={feat.id}>
                            <h6 dangerouslySetInnerHTML={{__html: feat.title}} />
                            <p className="body-small" dangerouslySetInnerHTML={{__html: feat.text}} />
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