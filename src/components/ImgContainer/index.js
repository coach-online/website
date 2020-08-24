import React from 'react';
import Img from 'gatsby-image';
import PropTypes, { any } from 'prop-types';

import style from './style.module.css';

export default function ImgContainer({
  fluid, alt, className, order,
}) {
  return (
    <div style={{ order }} className={`${className} ${style.imgContainer}`}>
      <Img alt={alt} fluid={fluid} />
    </div>
  );
}
ImgContainer.defaultProps = {
  className: '',
  order: '',
};
ImgContainer.propTypes = {
  fluid: PropTypes.objectOf(PropTypes.any).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
