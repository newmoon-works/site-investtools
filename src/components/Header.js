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
      class: ''
    },
    {
      name: 'Perform It',
      slug: 'perform-it',
      class: ''
    },
    {
      name: 'Diligence It',
      slug: 'diligence-it',
      class: ''
    },
    {
      name: 'Pré-Trade (Arco It)',
      slug: 'arco-it',
      class: ''
    },
    {
      name: 'Novos Negócios',
      slug: '#',
      class: 'dropdown'
    },
    {
      name: 'Blog',
      slug: 'blog',
      class: ''
    },
    {
      name: 'Contato',
      slug: 'contato',
      class: ''
    },
    {
      name: 'Carreiras',
      slug: 'carreiras',
      class: ''
    },
  ]

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
      100 < window.scrollY ? navbar.classList.add("shrink") : navbar.classList.remove("shrink");
    }
  }, []);

  function DropDown() {
    return (
      <ul>
        <li>
          <a href="">Nossa Incubadora</a>
        </li>
        <li className="sub-dropdown">
          <a href="#">Cases</a>
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.blockchainstudio.com.br">Blockchain Studio</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.grana.capital">Grana Capital</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.neaglebank.com">NeagleBank</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.trampol.in">Trampolin</a>
            </li>
          </ul>
        </li>
      </ul>
    )
  }

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
            <ul className={`${styles.mainNav} navbar-nav ms-auto`}>

              {
                links.map(navLink => {
                  return (
                    <li className={`nav-item ${navLink.class}`} key={navLink.slug}>
                      <Link href={`/${navLink.slug}`}>
                        <a className="nav-link">
                          {navLink.name}
                        </a>
                      </Link>
                      {
                        navLink.class ? <DropDown/> : null
                      }
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