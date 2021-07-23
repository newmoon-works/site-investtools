import React, {useEffect} from 'react';
import logo from "../../public/images/logo-branca.png";
import faaz from "../../public/images/logo-faaz.svg";
import Image from "next/image";
import Link from 'next/link';
import styles from '../../public/css/modules/components/Footer.module.scss'
import { useRouter } from "next/router";

export default function Footer() {

  const router = useRouter();
  let home = router.route === '/' || router.route === '/#';

  useEffect(() => {
    if (home) {
      document.getElementById('footer-info').style.display = 'none';
    }
  })

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

          <div className="col-12 col-lg-9">
            <div className={styles.infoFooterBox} id="footer-info">
              <ul>
                <li>
                  <a href="https://goo.gl/maps/2NYBacpko2UKigfs8" rel="noopener noreferrer" target="_blank">
                    <img src="/images/pin@2x.png" alt="Investtools - Endereço" />
                    <p>Rua Marquês de São Vicente, 225 <br/> Gávea - Rio de Janeiro - RJ</p>
                  </a>
                </li>
                <li>
                  <a href="tel:+552131785866" rel="noopener noreferrer" target="_blank">
                    <img src="/images/phone@2x.png" alt="Investtools - Telefone" />
                    <p>+55 21 3178 . 5866</p>
                  </a>
                </li>
              </ul>
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