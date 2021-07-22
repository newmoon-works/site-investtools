import React from 'react';
import styles from '../../public/css/modules/components/Clients.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";

export default function Clients({ content }) {

  const flickityOptions = {
    wrapAround: true,
    initialIndex: 8,
    autoPlay: true,
  }

  return (
    <section className={styles.clientSection}>
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
                      <div className="col-6 col-md-4 col-lg-3" key={content.indexOf(client)}>
                        <img src={`/images/clientes/${client.logo}`} alt={client.name}/>
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