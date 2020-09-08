import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import withDirection, {
  withDirectionPropTypes,
  DIRECTIONS,
} from 'react-with-direction';

import { Trans } from 'react-i18next';
import Container from '../Container';
import ImgContainer from '../ImgContainer';
import { P20 } from '../Typography';

import style from './style.module.css';

function HeroSection({ direction }) {
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
              <Trans i18nKey="hero.content">
                إنشاء جداول التمارين والتغذية للمشتركين بطريقة فعالة وموفرة
                للوقت
              </Trans>
            </h2>
            <button type="button">
              <P20 className={style.buttonText}>
                <span
                  className={
                    direction === DIRECTIONS.LTR
                      ? style.btnEnSpan
                      : style.btnSpan
                  }
                >
                  <Trans i18nKey="hero.explore"> إكتشف</Trans>
                </span>
              </P20>
            </button>
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

export default withDirection(HeroSection);
HeroSection.prototype = {
  ...withDirectionPropTypes,
};
