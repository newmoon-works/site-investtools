import React from 'react';
import Decoration from 'src/components/common/Decoration';
import TitleBox from 'src/components/common/TitleBox';
import styles from './Negocios.module.scss';

export default function Negocios() {
  return (
    <section className={styles.negociosSection}>

      <Decoration size="lg" style="normal" className={styles.decor} />

      <div className="container">
        <TitleBox>Negócios</TitleBox>
        <div className="row gy-5">
          <div className="col-12 col-lg-4">
            <div className={styles.negocioBox}>
              <div className={styles.logoBox}>
                <img src="/images/new/grana.svg" alt="" />
              </div>
              <p className="body-small">Grana é uma startup comandada por um dos sócios da Investtools que administra o primeiro aplicativo a automatizar integralmente a gestão do Imposto de Renda para investidores da Bolsa de Valores.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className={styles.negocioBox}>
              <div className={styles.logoBox}>
                <img src="/images/new/blockchain.svg" alt="" />
              </div>
              <p className="body-small">Antes mesmo do Bitcoin tomar conta dos noticiários, percebemos o poder transformador do mercado e da tecnologia que há por detrás da moeda virtual: o blockchain. Um potencial inovador tão claro que o GOV Token, primeira solução gerada pelo Blockchain Studio e primeira solução gerada no âmbito da Investtools voltada às finanças públicas, tornou a unidade de negócios objeto de um investimento de R$ 1,5 milhão do BNDES, da Faperj e da AgeRio.</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className={styles.negocioBox}>
              <div className={styles.logoBox}>
                <img src="/images/new/trampolin.svg" alt="" />
              </div>
              <p className="body-small">Trampolin criada por outro sócio com a proposta de desenvolver plataformas personalizadas de banking (Baas) para empresas que desejam oferecer serviços financeiros.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}