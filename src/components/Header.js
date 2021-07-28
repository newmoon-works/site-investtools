import React, {useEffect} from 'react';
import styles from '../../public/css/modules/components/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';

export default function Header() {

  const links = [
    {
      name: 'A Investtools',
      slug: 'a-investtools',
    },
    {
      name: 'Perform It',
      slug: 'perform-it',
    },
    {
      name: 'Dilligence It',
      slug: 'dilligence-it',
    },
    {
      name: 'Pré-Trade (Arco It)',
      slug: 'arco-it',
    },
    {
      name: 'Novos Negócios',
      slug: 'novos-negocios',
    },
    {
      name: 'Blog',
      slug: 'blog',
    },
    {
      name: 'Contato',
      slug: 'contato',
    },
    {
      name: 'Carreiras',
      slug: 'carreiras',
    },
  ]

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
      100 < window.scrollY ? navbar.classList.add("shrink") : navbar.classList.remove("shrink");
    }
  }, []);

  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <Image layout="intrinsic" src={logo} quality="1" alt="Investtools" />
            </a>
          </Link>
          <button className={`navbar-toggler collapsed border-0 ${styles.toggler}`} data-bs-toggle="collapse" data-bs-target="#navigation">
            <span className={styles.hamburgerBox}>
              <span className={styles.hamburgerInner}/>
            </span>
          </button>
          <div className={`${styles.navCollapse} navbar-collapse collapse`} id="navigation">
            <ul className="navbar-nav ms-auto">

              {
                links.map(navLink => {
                  return (
                    <li className="nav-item" key={navLink.slug}>
                      <Link href={`/${navLink.slug}`}>
                        <a className="nav-link">
                          {navLink.name}
                        </a>
                      </Link>
                    </li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}