import React from 'react';
import styles from './Clients.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";
import Image from "next/image";
import TitleBox from 'src/components/common/TitleBox';
import Decoration from 'src/components/common/Decoration';

export default function Clients({ content }) {

  const flickityOptions = {
    wrapAround: true,
    initialIndex: 8,
    autoPlay: true,
    pageDots: false,
  }

  return (
    <section className={styles.clientSection}>
      <Decoration style="normal" size="lg" className={styles.decor}/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleBox>{content.title}</TitleBox>
            <div className="flickity">
              <Flickity options={flickityOptions}>
                {
                  content.images.map((client, index) => {
                    return (
                      <div className={`col-6 col-md-4 col-lg-3 ${styles.carouselItem}`} key={`clientImg-${index}`}>
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}${client.url}`} alt={client.name} />
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