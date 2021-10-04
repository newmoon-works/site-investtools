import React, { useEffect, useState } from 'react';
import styles from './Testimonials.module.scss';
import 'flickity/css/flickity.css';
import Flickity from "react-flickity-component";
import TitleBox from 'src/components/common/TitleBox';
import Decoration from 'src/components/common/Decoration';
import TestimonialCard from 'src/components/common/TestimonialCard';
import { renderToStaticMarkup } from 'react-dom/server';
import Carousel from 'src/components/common/Carousel';

export default function Testimonials({ content }) {
  const [group, setGroup] = useState(null);

  // Efeito para adicionar 2 outros cards caso só tenham 2
  useEffect(() => {
    const slider = document.querySelector('#testimonials .flickity-slider');
    if (slider) {
      if (content.card.length === 2) {
        content.card.map((quote, index) => {
          let card = renderToStaticMarkup(<TestimonialCard key={`quote-cp-${index}`} text={quote.text} author={quote.author} company={quote.company} />);
          slider.innerHTML += card;
        })
      }
    }

    window.matchMedia('(max-width: 768px)').matches ? setGroup(1) : setGroup(2);
  }, [group]);

  return (
    <section className={styles.testimonialSection} id="testimonials">
      <Decoration size="lg" style="white" className={styles.decorTop} />
      <Decoration size="sm" style="white" className={styles.decorBottom} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TitleBox className="text-white">{content.title}</TitleBox>
          </div>
          <div className="col-12">
            <div className={styles.carouselDesktop}>
              {
                group ? (
                  <Carousel groupCells={group}>
                    {
                      content.card.map((quote, index) => {
                        return (
                          <TestimonialCard
                            key={`quote-${index}`}
                            text={quote.text}
                            author={quote.author}
                            company={quote.company}
                          />
                        )
                      })
                    }
                  </Carousel>
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}