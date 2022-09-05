import React from 'react';
import Decoration from 'src/components/common/Decoration';
import Modal from 'src/components/common/Modal';
import styles from './CallToAction.module.scss';

export default function CallToAction({ content }) {
  return (
    <section className={styles.section}>

      <Decoration size="sm" style="white" className={styles.decorBottom} />
      <Decoration size="xs" style="white" className={styles.decorTop} />

      <div className={styles.overlay} />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <h3>{content.title}</h3>
        <h4>{content.subtitle}</h4>
        <p>{content.text}</p>
        {/* <a
          href={content.cta.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ivt-btn-alt">
          {content.cta.text}
        </a> */}

        <button
          href="#modal-novos-negocios"
          data-bs-toggle="modal"
          className="ivt-btn-alt"
        >
          {content.cta.text}
        </button>
      </div>

      <Modal id="modal-novos-negocios">
        Modal Novos Negócios
      </Modal>
    </section>
  )
}