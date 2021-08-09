import React from 'react';
import styles from './Functionalities.module.scss';
import Image from 'next/image';

export default function Functionalities({ content, col }) {
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
                <div className={`col-12 col-lg-${col}`} key={func.title}>
                  <div className={styles.cardFunc}>
                    <div className={styles.icon}>
                      <Image alt="Icon" src={require(`public/images/new/icons/${func.icon}`)} />
                    </div>
                    <div className={styles.content}>
                      <h6>{func.title}</h6>
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