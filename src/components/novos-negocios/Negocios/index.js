import React from 'react';
import Decoration from 'src/components/common/Decoration';
import TitleBox from 'src/components/common/TitleBox';
import styles from './Negocios.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";

export default function Negocios({ content }) {

  const flickityOptions = {
    wrapAround: true,
    autoPlay: 2000,
    initialIndex: 1,
    pageDots: false,
  }

  return (
    <section className={styles.negociosSection}>

      <Decoration size="lg" style="normal" className={styles.decor} />

      <div className="container">
        <TitleBox>{content.title}</TitleBox>
        <div className="row gy-5">

          <Flickity options={flickityOptions}>
            {
              content.businesses.map(item => {
                return (
                  <div className={`col-12 col-lg-4 ${styles.carouselItem}`} key={item.id}>
                    <div className={styles.negocioBox}>
                      <div className={styles.logoBox}>
                        <a href={item.link} rel="noreferrer noopener" target="_blank">
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.logo.url}`} alt="" />
                        </a>
                      </div>
                      <p className="body-small">{item.text}</p>
                    </div>
                  </div>
                )
              })
            }
          </Flickity>
        </div>
      </div>
    </section>
  )
}