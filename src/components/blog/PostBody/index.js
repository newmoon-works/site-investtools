import React from 'react';
import ShareButton from '../ShareButton';
import styles from './PostBody.module.scss';

export default function PostBody({ content }) {
  return (
    <div className={styles.body}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className={styles.share}>
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h5>Compartilhe esse post</h5>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.socials}>
              <ShareButton type="facebook" />
              <ShareButton type="linkedin" />
              <ShareButton type="twitter" />
              <ShareButton type="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}