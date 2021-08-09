import React from 'react';
import styles from './NegociosHero.module.scss';
import Image from 'next/image';
import img from 'public/images/new/banner-novos-negócios.png';

export default function NegociosHero() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">

          </div>
          <div className="col-1" />
          <div className="col-12 col-lg-5">
            <Image src={img} alt="Investtools" />
          </div>
          <div className="col-1" />
        </div>
      </div>
    </section>
  )
}