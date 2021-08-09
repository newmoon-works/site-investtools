import React, { useEffect } from 'react';
import logo from "public/images/new/logo-negative.svg";
import Image from "next/image";
import Link from 'next/link';
import styles from './Footer.module.scss'
import { useRouter } from "next/router";
import Decoration from 'src/components/common/Decoration';

export default function Footer() {

  // ocultar informações de contato na home
  /* const router = useRouter();
  let home = router.route === '/' || router.route === '/#';
  useEffect(() => {
    const footerInfo = document.getElementById('footer-info');
    if (home) {
      footerInfo.style.display = 'none';
    } else {
      footerInfo.style.display = 'block';
    }
  }) */

  return (
    <>
      <footer className={styles.footer}>
        <Decoration size="lg" style="normal" className={styles.decorTop}/>
        <Decoration size="sm" style="white" className={styles.decorBottom}/>
        <div className="container caption">
          <div className="row justify-content-between">
            <div className="col-1" />
            <div className={`col-12 col-lg-3 ${styles.footerBox}`}>
              <div>
                <div className={styles.footerLogo}>
                  <Link href="/">
                    <a>
                      <Image layout="intrinsic" src={logo} quality="1" alt="Investtools" />
                    </a>
                  </Link>
                </div>
                <div>
                  <p className="caption">
                    A Investtools está sempre em busca de soluções <br /> importantes e inéditas para o mercado financeiro.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-12 col-lg-4 d-flex justify-content-center ${styles.footerBox}`}>
              <div id="footer-info">
                <h5>Contatos</h5>
                <p className="caption">
                  Quer conhecer nossos produtos? <br /> Nós teremos o prazer de te responder.
                </p>
                <Link href="/contato">
                  <a>Entre em Contato Conosco &nbsp; <span>&rarr;</span></a>
                </Link>
              </div>
            </div>

            <div className={`col-12 col-lg-3 ${styles.footerBox}`}>
              <div>
                <h5>Posts recentes</h5>
                <ul>
                  <li>
                    <a href="https://blog.investtools.com.br/2021/06/23/tecnologia-humana-uma-aliada-na-melhoria-de-processos/">
                      Tecnologia humana: uma aliada na melhoria de processos
                    </a>
                  </li>
                  <li>
                    <a href="https://blog.investtools.com.br/2021/06/08/quem-e-a-investtools/">
                      Quem é a Investtols?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </footer>
      <div className={styles.footerBottom}>Copyright © 2021 – Investtools Tecnologia em Informática LTDA</div>
    </>
  )
}