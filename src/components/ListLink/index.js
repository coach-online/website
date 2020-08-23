import React from 'react';
import { Link } from 'gatsby';

import listStyles from './style.module.css';

export default ({
  to, children, className, toggleMenu,
}) => {
  const isActive = ({ location }) => (location.pathname + location.hash === to
    ? { className: listStyles.active }
    : {});
  return (
    <li onClick={toggleMenu} className={className}>
      <Link getProps={isActive} to={to} className={listStyles.link}>
        {children}
      </Link>
    </li>
  );
};
