import React from 'react';
import styles from './FooterContactInfo.module.scss';

export default function FooterContactInfo() {
  return (
    <div>
      <div className={styles.infosBox}>
        <ul>
          <li>
            <a href="tel:+552131785866" rel="noopener noreferrer" target="_blank">
              <img src="/images/new/phone.svg" alt="Investtools - Telefone" className={styles.iconInfo} />
              <p className="caption">+55 21 3178 . 5866</p>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/2NYBacpko2UKigfs8" rel="noopener noreferrer" target="_blank">
              <img src="/images/new/pin.svg" alt="Investtools - Endereço" className={styles.iconInfo} />
              <p className="caption">Rua Marquês de São Vicente, 225 <br /> Gávea - Rio de Janeiro - RJ</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}