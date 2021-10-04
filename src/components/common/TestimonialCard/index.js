import React from 'react';
import styles from './TestimonialCard.module.scss';

export default function TestimonialCard(props) {
  return (
    <div className={`${styles.testimonialBox} col-12 col-sm-6`}>
      <div className={styles.aspas}>
        <h1>”</h1>
      </div>

      <div className={styles.text}>
        <p className="body-small">{props.text}</p>
      </div>

      <div className={styles.info}>
        <p>{props.author}</p>
        <small>{props.company}</small>
      </div>
    </div>
  )
}