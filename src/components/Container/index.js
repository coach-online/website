import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

export default function Container({ children, className }) {
  return <div className={`${style.container} ${className}`}>{children}</div>;
}

Container.defaultProps = {
  className: '',
};
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};
