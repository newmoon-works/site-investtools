import React from 'react';
import styles from './Products.module.scss'
import Image from "next/image";
import TitleBox from 'src/components/common/TitleBox';
import Link from 'next/link';

export default function Products({ content }) {
  return (
    <section className={styles.productsSection}>
      <div className="container">
        <TitleBox>Produtos</TitleBox>
        <div className="row gy-5">
          {
            content.map(card => {
              return (
                <div className="col-12 col-sm-6 col-lg-3" key={card.link}>
                  <Link href={card.link}>
                    <a className={styles.cardProduct}>
                      <div className={styles.prodImg}>
                        <Image src={require(`public/images/new/${card.image}`).default} alt={card.alt} />
                      </div>
                      <div className={styles.cardImgOverlay}>
                        <div>
                          <h4>{card.text}</h4>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )
            })
          }
          <div className="col-12 col-sm-6 col-lg-3">
            <Link href="/inovacao">
              <a className={styles.cardProduct}>
                <h5>Conheça também a</h5>
                <h3>Nossa Incubadora</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}