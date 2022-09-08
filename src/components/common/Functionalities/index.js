import React from 'react';
import styles from './Functionalities.module.scss';

export default function Functionalities({ content, col }) {
  return (
    <section className={styles.funcSection}>
      <div className="container">
        <div className="title-box">
          <h3>{content.funcTitle ?? 'Funcionalidades'}</h3>
        </div>
        <div className="row">
          {
            content.functions.map(func => {
              return (
                <div className={`col-12 col-lg-${col}`} key={func.title}>
                  <div className={styles.cardFunc}>
                    <div className={styles.icon}>
                      <img alt="Icon" src={`${process.env.NEXT_PUBLIC_API_URL}${func.icon.url}`} />
                    </div>
                    <div className={styles.content}>
                      <h6>{func.title}</h6>
                      <div className={styles.textBox}>
                        {func.text}
                      </div>
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