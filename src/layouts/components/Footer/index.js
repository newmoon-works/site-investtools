import React, {useEffect} from 'react';
import logo from "../../../../public/images/logo-branca.png";
import faaz from "../../../../public/images/logo-faaz.svg";
import Image from "next/image";
import Link from 'next/link';
import styles from './Footer.module.scss'
import { useRouter } from "next/router";

export default function Index() {

  // ocultar informações de contato na home
  const router = useRouter();
  let home = router.route === '/' || router.route === '/#';
  useEffect(() => {
    const footerInfo = document.getElementById('footer-info');
    if (home) {
      footerInfo.style.display = 'none';
    } else {
      footerInfo.style.display = 'block';
    }
  })

  return (
    <footer className={styles.footer}>

      <div className={`decoration ${styles.decor}`}><img src="/images/triangulos-depo-esqu@2x.png" alt="Detalhe"/></div>

      <div className="container">
        <div className="row justify-content-between">
          <div className={`col-12 col-lg-4 ${styles.footerBox}`}>
            <div>
              <div className={styles.footerLogo}>
                <Link href="/">
                  <a>
                    <Image layout="intrinsic" src={logo} quality="1" alt="Investtools" />
                  </a>
                </Link>
              </div>
              <div>
                <p>A Investtools está sempre em busca de soluções importantes e inéditas para o mercado financeiro.</p>
              </div>
            </div>
          </div>

          <div className={`col-12 col-lg-4 ${styles.footerBox}`}>
            <div id="footer-info">
              <h3>Contatos</h3>
              <ul>
                <li>
                  <a href="tel:+552131785866" rel="noopener noreferrer" target="_blank">
                    <img src="/images/phone@2x.png" alt="Investtools - Telefone" />
                    <p>+55 21 3178 . 5866</p>
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/2NYBacpko2UKigfs8" rel="noopener noreferrer" target="_blank">
                    <img src="/images/pin@2x.png" alt="Investtools - Endereço" />
                    <p>Rua Marquês de São Vicente, 225 <br/> Gávea - Rio de Janeiro - RJ</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={`col-12 col-lg-4 ${styles.footerBox}`}>
            <div>
              <h3>Posts recentes</h3>
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
        </div>
      </div>
    </footer>
  )
}