import React from 'react';
import styles from './RelatedPosts.module.scss';
import Decoration from 'src/components/common/Decoration';
import PostCard from '../PostCard';

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
            <PostCard
              cover="/images/postimg.jpg"
              category="Geral"
              title="HTTP vs. FIX: como fazer integrações escaláveis"
              exerpt="Nosso desenvolvedor Fabiano Martins explicou como a escolha de diferentes tecnologias está ligada à elaboração de soluções que se integram com multibrokers, como o PerformIt."
            />
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <PostCard
              cover="/images/postimg.jpg"
              category="Geral"
              title="HTTP vs. FIX: como fazer integrações escaláveis"
              exerpt="Nosso desenvolvedor Fabiano Martins explicou como a escolha de diferentes tecnologias está ligada à elaboração de soluções que se integram com multibrokers, como o PerformIt."
            />
          </div>
        </div>
      </div>
    </section>
  )
}