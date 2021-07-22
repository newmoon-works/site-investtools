import React from 'react';
import logo from "../../public/images/logo-branca.png";
import faaz from "../../public/images/logo-faaz.svg";
import Image from "next/image";
import Link from 'next/link';
import styles from '../../public/css/modules/components/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-2">
            <div className="logo-footer-box">
              <Link href="/">
                <a rel="noopener" target="_blank">
                  <Image layout="intrinsic" src={logo} quality="1" alt="Investtools" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-1">
            <div className="by">
              <Link href="https://faazcomunicacao.com.br/?utm_source=Investtools&utm_medium=site&utm_campaign=Portfolio">
                <a rel="noopener" target="_blank">
                  <Image layout="intrinsic" src={faaz} quality="1" alt="FAAZ Comunicação" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}