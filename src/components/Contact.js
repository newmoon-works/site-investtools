import React, {useEffect} from 'react';
import styles from '../../public/css/modules/components/Contact.module.scss'

export default function Contact() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.type = 'text/javascript';

    const insertForm = document.createElement('script');
    insertForm.src = '/js/rd-form-call.js';
    script.type = 'text/javascript';

    const form = document.getElementById('rd-station-form');
    form.appendChild(script);
    form.appendChild(insertForm);

    return () => {
      form.removeChild(script);
    }
  })

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="title-box">
              <h2>Contatos</h2>
            </div>
            <div className={styles.textBox}>
              <p>
                Quer conhecer nossos produtos? <br /> Nós teremos o prazer de te responder.
              </p>
            </div>
            <div className={styles.infosBox}>
              <ul>
                <li>
                  <a href="https://goo.gl/maps/2NYBacpko2UKigfs8" rel="noopener noreferrer" target="_blank">
                    <img src="/images/pin@2x.png" alt="Investtools - Endereço" className={styles.iconInfo}/>
                    <p>Rua Marquês de São Vicente, 225 <br/> Gávea - Rio de Janeiro - RJ</p>
                  </a>
                </li>
                <li>
                  <a href="tel:+552131785866" rel="noopener noreferrer" target="_blank">
                    <img src="/images/phone@2x.png" alt="Investtools - Telefone" className={styles.iconInfo}/>
                    <p>+55 21 3178 . 5866</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.formBox} id="rd-station-form">
              <div id="contato-site-eb80607c4c296921e638" role="main" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}