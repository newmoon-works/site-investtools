import React from 'react';
import styles from './CallToAction.module.scss';

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <h4>Apresente sua Ideia para Nossa</h4>
        <h3>Equipe de Novos Negócios</h3>
        <p>Investimos e desenvolvemos empresas que reforçam nosso ecossistema com acompanhamentos estratégicos e operacionais de forma tailor made. Se você é empreendedor ou tem uma ideia com solução de alto impacto e com potencial de escala, conte pra gente, vamos agendar uma conversa.</p>
        <button className="ivt-btn-alt">Clique Aqui para Apresentar sua Ideia</button>
      </div>
    </section>
  )
}