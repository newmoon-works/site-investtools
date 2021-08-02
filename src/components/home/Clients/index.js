import React from 'react';
import styles from './Clients.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";
import Image from "next/image";

export default function Clients({ content }) {

  const flickityOptions = {
    wrapAround: true,
    initialIndex: 8,
    autoPlay: true,
    pageDots: false,
  }

  return (
    <section className={styles.clientSection}>

      <div className={`decoration ${styles.decor}`}><img src="/images/triangulos-clientes-esqu@2x.png" alt="Detalhe"/></div>
      <div className={`decoration ${styles.decor}`}><img src="/images/triangulos-clientes-dire@2x.png" alt="Detalhe"/></div>
      <div className={`decoration ${styles.decor}`}><img src="/images/triangulos-clientes-bottomm@2x.png" alt="Detalhe"/></div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="clients-images-box d-flex justify-content-center">
              <img className={`${styles.smallImg} img-fluid`} src="/images/clientes-box-small.jpg" alt="Investtools - Clientes" />
              <img className={`${styles.bigImg} img-fluid`} src="/images/clientes-box-big.jpg" alt="Investtools - Clientes" />
            </div>
          </div>
          <div className="col-12">
            <div className="title-box">
              <h2>Clientes</h2>
            </div>
            <div className="flickity">
              <Flickity options={flickityOptions}>
                {
                  content.map(client => {
                    return (
                      <div className={`col-6 col-md-4 col-lg-3 ${styles.carouselItem}`} key={content.indexOf(client)}>
                        <Image src={require(`../../../../public/images/clientes/${client.logo}`).default} alt={client.name}/>
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