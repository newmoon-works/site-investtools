import React, { useEffect } from 'react';
import styles from './Contact.module.scss'
import initForm from "public/js/rd-form";
import TitleBox from 'src/components/common/TitleBox';
import Decoration from 'src/components/common/Decoration';

export default function Contact({ content }) {

  useEffect(() => {
    initForm();
  }, [])

  return (
    <section className={styles.contactSection}>

      <Decoration size="lg" style="normal" className={styles.decorBottom} />

      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-6">
            <TitleBox>Contatos</TitleBox>
            <div className={styles.infosBox}>
              <p className="body-small">{content.contactText}</p>
              <ul>
                <li>
                  <a href="tel:+552131785866" rel="noopener noreferrer" target="_blank">
                    <img src="/images/new/phone.svg" alt="Investtools - Telefone" className={styles.iconInfo} />
                    <p className="body-small">+55 21 3178 . 5866</p>
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/2NYBacpko2UKigfs8" rel="noopener noreferrer" target="_blank">
                    <img src="/images/new/pin.svg" alt="Investtools - Endereço" className={styles.iconInfo} />
                    <p className="body-small">Rua Marquês de São Vicente, 225 <br /> Gávea - Rio de Janeiro - RJ</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.formBox} id="rd-station-form">
              <div className="h-100" id="contato-site-eb80607c4c296921e638" role="main">
                <div className={styles.spinner} id="spinner">
                  <div className="spinner-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}