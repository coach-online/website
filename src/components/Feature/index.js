import React from 'react';
import Img from 'gatsby-image';

import featureStyles from './style.module.css';

export default ({
  src, p, h3, alt, order,
}) => (
  <div className={featureStyles.feature}>
    <div className={featureStyles.featureContent}>
      <h3 className="font-style-3">{h3}</h3>
      <p className="font-style-6">{p}</p>
    </div>
    <div className={featureStyles.imgContainer} style={{ order }}>
      <Img fluid={src} alt={alt} />
      {' '}
    </div>
  </div>
);
