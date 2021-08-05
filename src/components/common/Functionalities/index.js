import React from 'react';
import styles from './Functionalities.module.scss';
import Image from 'next/image';

export default function Functionalities({ content }) {
  return (
    <section className={styles.funcSection}>
      <div className="container">
        <div className="title-box">
          <h3>Funcionalidades</h3>
        </div>
        <div className="row">
          {
            content.map(func => {
              return (
                <div className="col-12 col-lg-4" key={func.title}>
                  <div className={styles.cardFunc}>
                    <div className={styles.icon}>
                      <Image alt={func.title} src={require(`public/images/icones/${func.icon}`)} />
                    </div>
                    <div className={styles.content}>
                      <h5>{func.title}</h5>
                      <div className={styles.textBox} dangerouslySetInnerHTML={{__html: func.text}}/>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}