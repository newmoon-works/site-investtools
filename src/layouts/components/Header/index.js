import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'public/images/new/logo-investtools.svg';

export default function Header() {

  /*const links = [
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
  ]*/

  useEffect(() => {
    // tornar a navbar menor a partir de 100px "scrollados"
    const navbar = document.querySelector('.navbar');
    window.onscroll = () => {
      100 < window.scrollY ? navbar.classList.add("shrink") : navbar.classList.remove("shrink");
    }

    // fechar a navbar quando um link for clicado no mobile
    const navItems = navbar.querySelectorAll('.navbar a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const nav = document.getElementById('navigation');
        let bsCollapse = new bootstrap.Collapse(nav, { toggle: false });
        bsCollapse.hide();
      });
    });

    // retirar o foco do link "Novos Negócios depois de clicado"
    const dropBtn = document.querySelector('.dropdown .nav-link');
    dropBtn.addEventListener('click', () => {
      dropBtn.blur();
    })
  }, []);

  function DropDown() {
    return (
      <ul>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.blockchainstudio.com.br">Blockchain Studio</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.grana.capital">Grana Capital</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.plific.com">Plific</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.trampol.in">Trampolin</a>
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
              <span className={styles.hamburgerInner} />
            </span>
          </button>
          <div className={`${styles.navCollapse} navbar-collapse collapse`} id="navigation">
            <ul className={`${styles.mainNav} navbar-nav ms-auto`}>

              <li className="nav-item">
                <Link href="/a-investtools"><a className="nav-link">A Investtools</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/perform-it"><a className="nav-link">Perform It</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/diligence-it"><a className="nav-link">Diligence It</a></Link>
              </li>
              <li className="nav-item">
                <Link href="/arcon-it"><a className="nav-link">Arcon It</a></Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/novos-negocios"><a className="nav-link">Novos Negócios</a></Link>
                <DropDown />
              </li>
              {/* <li className="nav-item">
                <Link href="/blog"><a className="nav-link">Blog</a></Link>
              </li> */}
              <li className="nav-item">
                <a href="https://blog.investtools.com.br" className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <Link href="/contato"><a className="nav-link">Contato</a></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" href="https://investtools.gupy.io/" rel="noopener noreferrer">Carreiras</a>
              </li>

              {/*{
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
              }*/}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}