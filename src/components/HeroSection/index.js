import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from '../Container';

import heroStyles from './style.module.css';

export default function HeroSection() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "Group 581@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
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
          <div className={heroStyles.imgContainer}>
            <Img
              fluid={data.image.childImageSharp.fluid}
              alt="online coach hero"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
