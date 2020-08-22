import React from 'react';

import Container from '../Container';
import HeroImg from '../../images/Group 581.png';

import heroStyles from './style.module.css';

export default function HeroSection() {
  return (
    <section id="/" className={heroStyles.hero}>
      <Container>
        <div className={heroStyles.heroSec}>
          <div className={heroStyles.heroContent}>
            <h2>نص ترحيبي يهدف الى شريح التطبيق بشكل مختصر جدا</h2>
            <button type="button" className="font-style-1">
              <span>إكتشف</span>
            </button>
          </div>
          <div>
            <img src={HeroImg} alt="online coach hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}
