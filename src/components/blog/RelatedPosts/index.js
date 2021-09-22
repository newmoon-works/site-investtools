import React from 'react';
import styles from './RelatedPosts.module.scss';
import postImg from 'public/images/postimg.jpg';
import Image from 'next/image';
import Decoration from 'src/components/common/Decoration';

export default function RelatedPosts() {
  return (
    <section className={styles.section}>

      <Decoration size="lg" style="normal" className={styles.decorLeft} />
      <Decoration size="xs" style="normal" className={styles.decorRight} />

      <div className="container">
        <div className={styles.title}>
          <h3>Posts Relacionados</h3>
          <a href="#">Ver Todos</a>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <article className={styles.card}>
              <a href="#" className={styles.thumbnail}>
                <div>
                  <Image src={postImg} alt="Thumbnail" />
                </div>
              </a>
              <div className={`${styles.badge} caption`}>
                Geral
              </div>
              <div className={styles.body}>
                <a href="#"><h3>HTTP vs. FIX: como fazer integrações escaláveis</h3></a>
                <div className="body-small">Nosso desenvolvedor Fabiano Martins explicou como a escolha de diferentes tecnologias está ligada à elaboração de soluções que se integram com multibrokers, como o PerformIt.</div>
                <a className="body-small" href="#">Ler Mais</a>
              </div>
            </article>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <article className={styles.card}>
              <a href="#" className={styles.thumbnail}>
                <div>
                  <Image src={postImg} alt="Thumbnail" />
                </div>
              </a>
              <div className={`${styles.badge} caption`}>
                Geral
              </div>
              <div className={styles.body}>
                <a href="#"><h3>HTTP vs. FIX: como fazer integrações escaláveis</h3></a>
                <div className="body-small">Nosso desenvolvedor Fabiano Martins explicou como a escolha de diferentes tecnologias está ligada à elaboração de soluções que se integram com multibrokers, como o PerformIt.</div>
                <a className="body-small" href="#">Ler Mais</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}