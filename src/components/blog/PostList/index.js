import React from 'react';
import styles from './PostList.module.scss';
import postImg from 'public/images/postimg.jpg';
import Image from 'next/image';
import Decoration from 'src/components/common/Decoration';

export default function PostList() {
  return (
    <section className={styles.section}>

      <Decoration size="lg" style="normal" className={styles.decor} />

      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-md-6 col-lg-4">
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