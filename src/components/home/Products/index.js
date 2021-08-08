import React from 'react';
import styles from './Products.module.scss'
import Image from "next/image";
import TitleBox from 'src/components/common/TitleBox';

export default function Products({ content }) {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <TitleBox>Produtos</TitleBox>
        <div className="row">
          {
            content.map(card => {
              return (
                <div className="col-12 col-sm-6 col-lg-3" key={card.link}>
                  <a href={card.link} className={styles.cardProduct}>
                    <div className={styles.prodImg}>
                      <Image src={require(`public/images/new/${card.image}`).default} alt={card.alt} />
                    </div>
                    <div className={styles.cardImgOverlay}>
                      <div>
                        <h3>{card.text}</h3>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }
          <div className="col-12 col-sm-6 col-lg-3">
            <a href="/nossa-incubadora" className={styles.cardProduct}>
              <h5>Conheça também a</h5>
              <h3>Nossa Incubadora</h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}