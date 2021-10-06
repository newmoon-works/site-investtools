import React from 'react';
import TitleBox from 'src/components/common/TitleBox';
import styles from './Media.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";

export default function Media({ content }) {

  const flickityOptions = {
    wrapAround: true,
    autoPlay: 2000,
    initialIndex: 1,
    pageDots: false,
  }

  return (
    <section className={styles.section} id="imprensa">
      <div className="container">
        <TitleBox>{content.title}</TitleBox>
        <div className="row gy-5">
          <Flickity options={flickityOptions}>
            {
              content.mediaCards.map(item => {
                return (
                  <div className={`col-12 col-lg-4 ${styles.carouselItem}`} key={`media-item-${item.id}`}>
                    <div className={styles.mediaBox}>
                      <div className={styles.coverBox}>
                        <a href={item.link} rel="noreferrer noopener" target="_blank">
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.cover.url}`} alt="" />
                          <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.portalCover.url}`} alt="" />
                        </a>
                      </div>
                      <a href={item.link} className="text-decoration-none" rel="noreferrer noopener" target="_blank">
                        <h4>{item.title}</h4>
                      </a>
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