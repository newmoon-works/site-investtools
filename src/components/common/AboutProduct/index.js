import React from 'react';
import styles from './AboutProduct.module.scss';
import TitleBox from '../TitleBox';
import Decoration from '../Decoration';
import Modal from '../Modal';

export default function AboutProduct({ content, product }) {
  return (
    <section className={styles.productSection}>
      <Decoration size="lg" style="normal" className={styles.decorTop} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <div className={styles.monitorBox}>
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${content.monitorImage.url}`} alt="Investtools - Perform It" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className={styles.logoBox}>
              <img src={`${process.env.NEXT_PUBLIC_API_URL}${content.logo.url}`} alt="Investtools - Perform It" />
            </div>
          </div>
          <div className={styles.aboutProductBox}>
            <div className="row gx-lg-0">
              <div className="col-12 col-lg-5">
                <div className={styles.aboutBox}>
                  <TitleBox>{content.title}</TitleBox>
                  <div className={styles.textBox}>
                    {content.text}
                  </div>
                  <a href={content.ctaLink} className={styles.cta} target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid d-block mx-auto" src={`${process.env.NEXT_PUBLIC_API_URL}${content.ctaImage.url}`} alt="" />
                  </a>

                  {/* <button title="Produto" type="button" className={styles.cta} href={`#modal-${product}`} data-bs-toggle="modal">
                    <img className="img-fluid d-block mx-auto" src={`${process.env.NEXT_PUBLIC_API_URL}${content.ctaImage.url}`} alt="" />
                  </button> */}

                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className={styles.featureBox}>
                  <Decoration size="xs" style="white" className={styles.decorBig} />
                  <div className={styles.feature}>
                    {
                      content.features.map(feat => {
                        return (
                          <div key={feat.id}>
                            <h6>{feat.title}</h6>
                            <p className="body-small">{feat.text}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal id={`modal-${product}`}>
        <p>Modal {product}</p>
      </Modal>
    </section>
  )
}