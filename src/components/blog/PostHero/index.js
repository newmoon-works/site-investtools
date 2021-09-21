import React from 'react';
import styles from './PostHero.module.scss';

export default function PostHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heroText}>
          <h1>HTTP vs. FIX: como fazer integrações escaláveis</h1>
          <div>
            <img height="17" width="17" src="/images/new/tags.svg" alt="Tags" />
            <span className="caption-upper">Geral, Tecnologia</span>
          </div>
        </div>
      </div>
    </section>
  )
}