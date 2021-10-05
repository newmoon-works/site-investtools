import React from 'react';
import Decoration from 'src/components/common/Decoration';
import styles from './NegociosHistory.module.scss';

export default function NegociosHistory({content}) {
  return (
    <section className={styles.negociosHistory}>

      <Decoration size="xs" style="normal" className={styles.decor} />

      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-6">
            <div className={styles.mosaic}>
              <img className="w-100" src={`${process.env.NEXT_PUBLIC_API_URL}${content.mosaicImage.url}`} alt="" />
            </div>
          </div>
          <div className="col-12 offset-lg-1 col-lg-5 d-flex justify-content-center">
            <div className={`${styles.historyText} d-flex flex-column justify-content-center`}>
              {content.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}