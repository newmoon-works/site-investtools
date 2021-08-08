import React from 'react';
import styles from './Clients.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";
import Image from "next/image";
import TitleBox from 'src/components/common/TitleBox';

export default function Clients({ content }) {

  const flickityOptions = {
    wrapAround: true,
    initialIndex: 8,
    autoPlay: true,
    pageDots: false,
  }

  return (
    <section className={styles.clientSection}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleBox>Clientes</TitleBox>
            <div className="flickity">
              <Flickity options={flickityOptions}>
                {
                  content.map(client => {
                    return (
                      <div className={`col-6 col-md-4 col-lg-3 ${styles.carouselItem}`} key={content.indexOf(client)}>
                        <Image src={require(`public/images/clientes/${client.logo}`).default} alt={client.name} />
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