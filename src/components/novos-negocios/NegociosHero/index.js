import React from 'react';
import styles from './NegociosHero.module.scss';
import Image from 'next/image';
import img from 'public/images/new/banner-novos-negócios.png';
import TitleBox from 'src/components/common/TitleBox';

export default function NegociosHero() {
  console.log(styles);
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className={styles.textSection}>
              <TitleBox>Novos Negócios</TitleBox>
              <h1>Apostamos na Inovação Tecnológica Constante</h1>
              <div className={styles.heroText}>
                <p className="body-small">A Investtools aposta na inovação tecnológica constante como meio para gerar novas soluções capazes de construir um ecossistema financeiro mais prático, democrático e eficiente.</p>
                <p className="body-small">Há quase quinze anos nesse meio, trazemos em nosso DNA o interesse em ideias e iniciativas disruptivas, capazes de se destacar por seu potencial de impacto e de crescimento.</p>
                <strong className="body-small">Conheça a nossa história para entender o que a Investtools tem a oferecer a empreendedores de todo o Brasil.</strong>
              </div>
            </div>
          </div>
          <div className="col-12 offset-lg-1 col-lg-5 d-flex align-items-center order-lg-1">
            <div className={styles.heroImage}>
              <Image src={img} alt="Investtools" />
              <img src="/images/new/triangles-negocios.svg" />
              <img src="/images/new/pattern-square-vertical.svg" />
            </div>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </section>
  )
}