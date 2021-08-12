import React from 'react';
import Decoration from 'src/components/common/Decoration';
import styles from './CallToAction.module.scss';

export default function CallToAction() {
  return (
    <section className={styles.section}>

      <Decoration size="sm" style="white" className={styles.decorBottom} />
      <Decoration size="xs" style="white" className={styles.decorTop} />

      <div className={styles.overlay} />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <h3>Apresente sua Ideia</h3>
        <h4>para Nossa Equipe de Novos Negócios</h4>
        <p>Investimos e desenvolvemos empresas que reforçam nosso ecossistema com acompanhamentos estratégicos e operacionais de forma tailor made. Se você é empreendedor ou tem uma ideia com solução de alto impacto e com potencial de escala, conte pra gente, vamos agendar uma conversa.</p>
        <a
          href="http://investtools.rds.land/cta-site-novos-negocios"
          target="_blank"
          rel="noopener noreferrer"
          className="ivt-btn-alt">
          Clique Aqui para Apresentar sua Ideia
        </a>
      </div>
    </section>
  )
}