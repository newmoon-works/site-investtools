import styles from './ContactForm.module.scss';
import React, { useEffect } from 'react';
import initForm from "../../../../public/js/rd-form";
import TitleBox from 'src/components/common/TitleBox';

export default function Index({content}) {

  useEffect(() => {
    initForm();
  }, [])

  return (
    <section className={styles.contactForm}>
      <div className="container">
        <div className={styles.contactBox}>
          <div className="row">
            <div className="col-12 col-lg-4 px-lg-0">
              <div className={styles.contactInfo}>
                <TitleBox>Contatos</TitleBox>
                <div className={styles.textBox}>
                  <p className="text-white">
                    {content.message}
                  </p>
                </div>
                <div className={styles.infosBox}>
                  <ul>
                    <li>
                      <a href={content.mapsLink} rel="noopener noreferrer" target="_blank">
                        <img src="/images/new/pin.svg" alt="Investtools - Endereço"/>
                        <p className="text-white body-small">{content.location}</p>
                      </a>
                    </li>
                    <li>
                      <a href={`tel:${content.phone}`} rel="noopener noreferrer" target="_blank">
                        <img src="/images/new/phone.svg" alt="Investtools - Telefone"/>
                        <p className="text-white body-small">{content.phone}</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 px-lg-0">
              <div className={styles.formBox} id="rd-station-form">
                <div className="h-100" id="contato-site-eb80607c4c296921e638" role="main">
                  <div className={styles.spinner} id="spinner">
                    <div className="spinner-border"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}