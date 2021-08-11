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
        <div className="row">
          <div className="col-12 col-xl-2 offset-xl-2">
            <div className={styles.logoBox}>
              <img src="/images/new/plific.svg" alt="" />
            </div>
          </div>
          <div className="col-12 col-xl-6 d-flex align-items-center">
            <p className="body-small m-0">Ao usar ferramentas de open finance para elaborar um aplicativo voltado em facilitar as finanças de motoristas e entregadores de aplicativo, os jovens fundadores da Plific são um exemplo de como boas ideias podem, além de criar soluções inéditas, ter forte impacto social. A Investtools, nesse caso, surge precisamente para investir no caminho que separa a ideia da realidade - o fornecimento de know-how em tecnologia -, tão necessário para a consolidação de empreendimentos ambiciosos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}