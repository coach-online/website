import React from 'react';
import PropTypes from 'prop-types';

import ImgContainer from '../ImgContainer';
import { Heading3 } from '../Typography';

import style from './style.module.css';

export default function Feature({
  src, p, h3, alt, order,
}) {
  return (
    <div className={style.feature}>
      <div className={style.featureContent}>
        <Heading3>{h3}</Heading3>
        <p className="font-style-6">{p}</p>
      </div>
      <ImgContainer fluid={src} alt={alt} order={order} />
    </div>
  );
}

Feature.defaultProps = {
  order: '',
};
Feature.propTypes = {
  src: PropTypes.objectOf(PropTypes.any).isRequired,
  p: PropTypes.objectOf(PropTypes.any).isRequired,
  h3: PropTypes.objectOf(PropTypes.any).isRequired,
  alt: PropTypes.string.isRequired,
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
