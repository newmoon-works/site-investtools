import React from 'react';
import styles from './PostList.module.scss';
import postImg from 'public/images/postimg.jpg';
import Image from 'next/image';
import Decoration from 'src/components/common/Decoration';
import PostCard from '../PostCard';

export default function PostList() {
  return (
    <section className={styles.section}>

      <Decoration size="lg" style="normal" className={styles.decor} />

      <div className="container">
        <div className="row gy-5">
          <div className="col-12 col-md-6 col-lg-4">
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