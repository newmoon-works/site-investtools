import React, { useEffect } from 'react';
import styles from './Contact.module.scss'
import initForm from "public/js/rd-form";
import TitleBox from 'src/components/common/TitleBox';
import Decoration from 'src/components/common/Decoration';
import Spinner from 'src/components/common/Spinner';

export default function Contact({ content }) {

  useEffect(() => {
    new RDStationForms('contato-site-eb80607c4c296921e638', 'UA-181473567-1').createForm();
  }, [])

  return (
    <section className={styles.contactSection}>

      <Decoration size="lg" style="normal" className={styles.decorBottom} />

      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-6">
            <TitleBox>Contatos</TitleBox>
            <div className={styles.infosBox}>
              <p className="body-small">{content.message}</p>
              <ul>
                <li>
                  <a href={`tel:${content.phone}`} rel="noopener noreferrer" target="_blank">
                    <img src="/images/new/phone.svg" alt="Investtools - Telefone" className={styles.iconInfo} />
                    <p className="body-small">{content.phone}</p>
                  </a>
                </li>
                <li>
                  <a href={content.mapsLink} rel="noopener noreferrer" target="_blank">
                    <img src="/images/new/pin.svg" alt="Investtools - Endereço" className={styles.iconInfo} />
                    <p className="body-small">{content.location}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.formBox} id="rd-station-form">
              <div className="h-100" id="contato-site-eb80607c4c296921e638" role="main">
                <Spinner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}