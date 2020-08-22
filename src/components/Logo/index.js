import React from 'react';

import { Link } from 'gatsby';
import logoSrc from '../../images/Logo@2x@2x.png';

import logoStyles from './style.module.css';

export default () => (
  <Link to="/">
    <div className={logoStyles.onlineCoachLogo}>
      <img src={logoSrc} alt="online-coach logo" />
      <h1>Online Coach</h1>
    </div>
  </Link>
);