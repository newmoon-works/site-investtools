import React from 'react';
import styles from './FooterContactInfo.module.scss';

export default function FooterContactInfo({info}) {
  return (
    <div>
      <div className={styles.infosBox}>
        <ul>
          <li>
            <a href={`tel:#${info.phone}`} rel="noopener noreferrer" target="_blank">
              <img src="/images/new/phone.svg" alt="Investtools - Telefone" className={styles.iconInfo} />
              <p className="caption">{info.phone}</p>
            </a>
          </li>
          <li>
            <a href={info.mapsLink} rel="noopener noreferrer" target="_blank">
              <img src="/images/new/pin.svg" alt="Investtools - Endereço" className={styles.iconInfo} />
              <p className="caption">{info.location}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}