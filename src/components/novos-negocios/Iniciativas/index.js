import React from 'react';
import TitleBox from 'src/components/common/TitleBox';
import styles from './Iniciativas.module.scss';

export default function Iniciativas({content}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-10 mx-auto">
            <div className={styles.intro}>
              <TitleBox>{content.title}</TitleBox>
              <p className="body-small text-white">
                {content.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}