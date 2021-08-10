import React from 'react';
import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto">
            <div className={styles.newsForm}>
              <div>
                <h5>Receba Atualizações e Fique Conectado</h5>
                <h3>Inscreva-se na nossa Newsletter</h3>
              </div>
              <div>
                <input className="caption" placeholder="Insira seu melhor e-mail" type="email" required />
                <button className="ivt-btn">Insecrever-se</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}