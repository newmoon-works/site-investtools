import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styles from './Hero.module.scss';
import mac from 'public/images/mac@2x.png';

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
    })
    document.getElementById(active.id).classList.add('active');

    document.getElementById('monitor').style.backgroundImage = `url(/images/hero/${active.image})`;
  }, [active])

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 order-2 order-md-1 position-relative">
            <div className={styles.heroSlider} id="heroSlider">
              {
                content.map(item => {
                  return (
                    <div key={item.alt} id={item.id} className={styles.content}>
                      <Image src={require(`../../../../public/images/${item.logo}`).default} alt={item.alt} />
                      <h2>
                        { item.text }
                      </h2>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.arrows}>
              <button onClick={handleClick} className="arrow arrow-left">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,
                  0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z" />
                </svg>
              </button>
              <button onClick={handleClick} className="arrow arrow-right">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,
                  15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-7 px-sm-0 order-md-2 position-relative">
            <div className={`decoration ${styles.decor}`}>
              <img src="/images/triangulos-banner@2x.png" alt="Decor"/>
            </div>
            <div className={styles.heroSliderImage}>
              <div className={styles.monitorContent} id="monitor" />
              <Image src={mac} alt="Investtools" priority quality="1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}