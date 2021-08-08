import React from 'react';
import styles from './Testimonials.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";
import TitleBox from 'src/components/common/TitleBox';

export default function Testimonials({ content }) {

  const desktopCarouselOptions = {
    wrapAround: true,
    groupCells: 2,
  }

  const mobileCarouselOptions = {
    wrapAround: true,
    groupCells: 1,
  }

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleBox className="text-white">O que dizem <br /> nossos clientes</TitleBox>
          </div>
          <div className="col-12">
            <div className={styles.carouselDesktop}>
              <Flickity options={desktopCarouselOptions}>
                {
                  content.map(quote => {
                    return (
                      <div key={content.indexOf(quote)} className={`${styles.testimonialBox} col-12 col-sm-6`}>
                        <div className={styles.aspas}>
                          <h1>”</h1>
                        </div>

                        <div className={styles.text}>
                          <p className="body-small">{quote.quote}</p>
                        </div>

                        <div className={styles.info}>
                          <p>{quote.name}</p>
                          <small>{quote.company}</small>
                        </div>
                      </div>
                    )
                  })
                }
              </Flickity>
            </div>
            <div className={styles.carouselMobile}>
              <Flickity options={mobileCarouselOptions}>
                {
                  content.map(quote => {
                    return (
                      <div key={content.indexOf(quote)} className={`${styles.testimonialBox} col-12 col-sm-6`}>
                        <div className={styles.aspas}>
                          <h1>”</h1>
                        </div>

                        <div className={styles.text}>
                          <p>{quote.quote}</p>
                        </div>

                        <div className={styles.info}>
                          <p>{quote.name}</p>
                          <small>{quote.company}</small>
                        </div>
                      </div>
                    )
                  })
                }
              </Flickity>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}