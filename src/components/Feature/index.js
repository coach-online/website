import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ReactGA from 'react-ga';

import ImgContainer from '../ImgContainer';
import { Heading3 } from '../Typography';
import Container from '../Container';

import style from './style.module.css';

export default function Feature({
  src, p, h3, alt, order,
}) {
  const buttonTxt = {
    'بناء جداول التغذية': 'انشيء جداول التغذية',
    'بناء جداول التمرين': 'انشيء جداول التمارين',
    'متابعة تقدم المشتركين': 'تابع تقدم المشتركين',
    'الحصول على مشتركين جدد': 'احصل على مشتركين جدد',
  };
  const logger = (category) => {
    ReactGA.event({
      category,
      action: `user clicked link to ${category}`,
    });
  };
  return (
    <div className={`${style.container} ${!order && style.background}`}>
      <Container>

        <div className={style.feature}>
          <div className={style.featureContent}>
            <Heading3>{h3}</Heading3>
            <p className="font-style-6">{p}</p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="#subscribe" onClick={() => logger(h3)}>
              {buttonTxt[h3]}
            </Link>
          </div>
          <ImgContainer fluid={src} alt={alt} order={order} />
        </div>
      </Container>
    </div>
  );
}

Feature.defaultProps = {
  order: '',
};
Feature.propTypes = {
  src: PropTypes.objectOf(PropTypes.any).isRequired,
  p: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
