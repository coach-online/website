import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Container from '../Container';
import ImgContainer from '../ImgContainer';
// import { P20 } from '../Typography';

import style from './style.module.css';

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "0.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="/" className={style.hero}>
      <Container>
        <div className={style.heroSec}>
          <div className={style.heroContent}>
            <h2 className={style.heading2}>
              إنشاء جداول التمارين والتغذية للمشتركين بطريقة فعالة وموفرة للوقت
            </h2>
            <Link to="/#features">
              إكتشف
            </Link>
          </div>
          <ImgContainer
            fluid={data.image.childImageSharp.fluid}
            alt="YallaCoach hero"
          />
        </div>
      </Container>
    </section>
  );
}
