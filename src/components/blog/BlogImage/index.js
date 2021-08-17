import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './BlogImage.module.scss';
import typewriter from 'public/images/macbook-screen.png';
import triangles from 'public/images/triangulos-banner@2x.png';

export default function BlogImage() {

  useEffect(() => {
    window.onmousemove = e => {
      getMousePos(e);
    }

    return function cleanup() {
      window.onmousemove = null;
    }
  }, [])

  function getMousePos(e) {
    let relX = (e.pageX * 100) / window.innerWidth;
    let relY = (e.pageY * 100) / window.innerHeight;
    let translateX1 = (20 * relX) / 100;
    let translateY1 = (20 * relY) / 100;
    let translateX2 = (10 * relX) / 100;
    let translateY2 = (10 * relY) / 100;

    function animate() {
      document.getElementById('typewriter').style.transform = `translateX(-${translateX1}px) translateY(-${translateY1}px)`;
      document.getElementById('triangles').style.transform = `rotate(180deg) translateX(-${translateX2}px) translateY(-${translateY2}px)`;
    }
    window.requestAnimationFrame(animate)
  }

  return (
    <div className={styles.image}>
      <Image id="typewriter" className={styles.typewriter} src={typewriter} alt="" />
      <img id="triangles" className={styles.triangles} src="/images/triangulos-banner-blog.png" alt="Typewriter" />
    </div>
  )
}