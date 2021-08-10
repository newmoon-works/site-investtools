import React from 'react';
import Decoration from 'src/components/common/Decoration';
import styles from './NegociosHistory.module.scss';

export default function NegociosHistory() {
  return (
    <section className={styles.negociosHistory}>

      <Decoration size="xs" style="normal" className={styles.decor} />

      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-lg-6">
            <div className={styles.mosaic}>
              <img className="w-100" src="/images/new/mosaic-negocios.png" alt="" />
            </div>
          </div>
          <div className="col-12 offset-lg-1 col-lg-5 d-flex justify-content-center">
            <div className={`${styles.historyText} d-flex flex-column justify-content-center`}>
              <p className="body-small">A Investtools surge precisamente como uma unidade de negócios da Ideais, empresa de tecnologia para diversos mercados. A trajetória de sucesso do grupo o leva a ser comprado como aquisição estratégica pela varejista B2W, e a Investtools passa por um spin-off, podendo se dedicar exclusivamente a fornecer soluções ao ecossistema financeiro.</p>
              <strong className="body-small">Situada então no Instituto Gênesis da PUC-Rio, berço de fintechs notórias, nossa história já nasce então de um case de sucesso.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}