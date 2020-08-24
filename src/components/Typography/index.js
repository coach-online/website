import React from 'react';
import PropTypes from 'prop-types';

import style from './style.module.css';

export function Heading1({ children, className }) {
  return <h1 className={`${style.h1} ${className}`}>{children}</h1>;
}
export function Heading2({ children, className }) {
  return <h2 className={`${style.h2} ${className}`}>{children}</h2>;
}
export function Heading3({ children, className }) {
  return <h3 className={`${style.h3} ${className}`}>{children}</h3>;
}
export function Heading4({ children, className }) {
  return <h4 className={`${style.h4} ${className}`}>{children}</h4>;
}
export function P20({ children, className }) {
  return <p className={`${style.p20} ${className}`}>{children}</p>;
}
export function P24({ children, className }) {
  return <p className={`${style.p24} ${className}`}>{children}</p>;
}

/* Prop checking */
const validateObj = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

const defaultValues = {
  className: '',
};

Heading1.defaultProps = defaultValues;

Heading1.propTypes = validateObj;

Heading2.defaultProps = defaultValues;

Heading2.propTypes = validateObj;

Heading3.defaultProps = defaultValues;

Heading3.propTypes = validateObj;

Heading4.defaultProps = defaultValues;

Heading4.propTypes = validateObj;

P20.defaultProps = defaultValues;

P20.propTypes = validateObj;

P24.defaultProps = defaultValues;

P24.propTypes = validateObj;
