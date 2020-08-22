import React from 'react';
import containerStyles from './style.module.css';

export default function Container({ children, className }) {
  return <div className={`${containerStyles.container} ${className}`}>{children}</div>;
}
