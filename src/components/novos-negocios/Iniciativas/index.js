import React from 'react';
import TitleBox from 'src/components/common/TitleBox';
import styles from './Iniciativas.module.scss';

export default function Iniciativas() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-10 mx-auto">
            <div className={styles.intro}>
              <TitleBox>Iniciativas</TitleBox>
              <p className="body-small text-white">A partir dos sucessos nas experiências anteriores, optamos por institucionalizar nossa força geradora de novas soluções para o universo das finanças. É aí que surge, dentro da Investtools, um braço exclusivamente dedicado aos Novos Negócios, voltado à construção, desenvolvimento e apoio de novas iniciativas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}