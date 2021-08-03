import styles from './ContactForm.module.scss';
import React, { useEffect } from 'react';
import initForm from "../../../../public/js/rd-form";

export default function Index() {

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
                <div className="title-box">
                  <h2 className="text-white">Contatos</h2>
                </div>
                <div className={styles.textBox}>
                  <p className="text-white">
                    Quer conhecer nossos produtos? <br /> Nós teremos o prazer de te responder.
                  </p>
                </div>
                <div className={styles.infosBox}>
                  <ul>
                    <li>
                      <a href="https://goo.gl/maps/2NYBacpko2UKigfs8" rel="noopener noreferrer" target="_blank">
                        <img src="/images/pin@2x.png" alt="Investtools - Endereço"/>
                        <p className="text-white">Rua Marquês de São Vicente, 225 <br/> Gávea - Rio de Janeiro - RJ</p>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+552131785866" rel="noopener noreferrer" target="_blank">
                        <img src="/images/phone@2x.png" alt="Investtools - Telefone"/>
                        <p className="text-white">+55 21 3178 . 5866</p>
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