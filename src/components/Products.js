import React from 'react';
import styles from '../../public/css/modules/components/Products.module.scss'

export default function Products({ content }) {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="title-box">
              <h2>Nossos <br/> Produtos</h2>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <div className="product-box d-flex flex-wrap justify-content-center">
              {
                content.map(card => {
                  return (
                    <a href={card.link} key={card.link} className={styles.cardProduct}>
                      <img src={`/images/${card.image}`} alt={card.alt}/>
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