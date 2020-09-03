import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import style from './style.module.css';

export default function LinkItem({
  to, children, className, toggleMenu,
}) {
  const isActive = ({ location }) => (location.pathname + location.hash === to ? { className: style.active } : {});
  return (
    <li className={className}>
      <Link
        onClick={toggleMenu}
        getProps={isActive}
        to={to}
        className={style.link}
      >
        {children}
      </Link>
    </li>
  );
}
LinkItem.defaultProps = {
  className: '',
  toggleMenu: null,
};
LinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  className: PropTypes.string,
  toggleMenu: PropTypes.func,
};
