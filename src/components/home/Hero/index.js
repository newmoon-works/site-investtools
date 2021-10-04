import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from './Hero.module.scss';
import mac from 'public/images/new/imac-screen.png';
import pattern from 'public/images/new/pattern-square-vertical.svg';
import triangleFree from 'public/images/new/triangle-free.svg';

export default function Hero({ content }) {
  const [active, setActive] = useState(content[0]);

  function handleClick(e) {
    if (e.currentTarget.classList.contains('arrow-left')) {
      let newActive = content[content.indexOf(active) - 1];
      if (newActive === undefined) {
        newActive = content[content.length - 1];
      }
      setActive(newActive);
    } else {
      let newActive = content[content.indexOf(active) + 1];
      if (newActive === undefined) {
        newActive = content[0]
      }
      setActive(newActive);
    }
  }

  useEffect(() => {
    let heroSlider = document.querySelector('#heroSlider');
    let heroElements = Array.from(heroSlider.children);
    heroElements.forEach(element => {
      element.classList.remove('active');
    });

    let monitor = document.querySelector('#monitor');
    let monitorElements = Array.from(monitor.children);
    monitorElements.forEach(element => {
      element.classList.remove('active');
    });

    document.getElementById(active.id).classList.add('active');
    document.getElementById(`screen-${active.id}`).classList.add('active');
  }, [active])

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 position-relative order-2 order-md-1">
            <div className="h-100 d-flex flex-column justify-content-center">
              <div className={styles.heroSlider} id="heroSlider">
                {
                  content.map(item => {
                    return (
                      <div key={`produto-${item.id}`} id={item.id} className={styles.content}>
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.logo.url}`}  alt={item.alt} />
                        <h2>
                          {item.title}
                        </h2>
                      </div>
                    )
                  })
                }
              </div>
              <div className={styles.arrows}>
                <button onClick={handleClick} className="arrow arrow-left">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.97563 1.98805L8.125 0.137421L0.25 8.01242L8.125 15.8874L9.97563 14.0368L3.96438 8.01242L9.97563 1.98805Z" fill="white" />
                  </svg>
                </button>
                <button onClick={handleClick} className="arrow arrow-right">
                  <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.22562 0.137421L0.375 1.98805L6.38625 8.01242L0.375 14.0368L2.22562 15.8874L10.1006 8.01242L2.22562 0.137421Z" fill="white" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 offset-md-1 px-sm-0 order-md-1 position-relative">
            <div className={styles.heroSliderImage}>
              <div className={styles.monitorContent} id="monitor">
                {
                  content.map(item => {
                    return (
                      <div key={`monitor-${item.id}`} id={`screen-${item.id}`}>
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.monitor.url}`}  alt={item.alt} />
                      </div>
                    )
                  })
                }
              </div>
              
              <Image src={mac} alt="Investtools" priority />

              <div className={styles.decorations}>
                <Image src={pattern} alt="Pattern" />
                <Image src={triangleFree} alt="Triangles" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}