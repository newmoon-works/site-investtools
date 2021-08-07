import React from 'react';
import styles from './Products.module.scss'
import Image from "next/image";

export default function Products({ content }) {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="title-box">
              <h3>Nossos <br/> Produtos</h3>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <div className="product-box d-flex flex-wrap justify-content-center">
              {
                content.map(card => {
                  return (
                    <a href={card.link} key={card.link} className={styles.cardProduct}>
                      <div className={styles.prodImg}>
                        <Image src={require(`public/images/new/${card.image}`).default} alt={card.alt}/>
                      </div>
                      <div className={styles.cardImgOverlay}>
                        <div>
                          <h3>{card.text}</h3>
                        </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}